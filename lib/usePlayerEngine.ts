"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PLAYLISTS } from "./playlists";
import type { Track } from "./types";
import type { YTPlayer } from "./youtube-types";

const YT_SLOT_ID = "yt-slot";
const PLACEHOLDER_VIDEO_ID = "REPLACE_ME";

export type PlaybackState =
  | "unstarted"
  | "cued"
  | "playing"
  | "paused"
  | "buffering"
  | "ended";

function isRealTrack(track: Track) {
  return track.videoId !== PLACEHOLDER_VIDEO_ID && track.videoId.length > 0;
}

export function usePlayerEngine() {
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playbackState, setPlaybackState] = useState<PlaybackState>("unstarted");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [apiReady, setApiReady] = useState(false);

  const playerRef = useRef<YTPlayer | null>(null);
  const pendingPlayRef = useRef(false);
  const hasEverPlayedRef = useRef(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // The YT.Player is created inside a mount-only effect, so its event
  // handlers close over whatever `goRelative` existed on the FIRST render
  // forever — a classic stale-closure trap (ENDED/onError would keep
  // advancing from track 0). Routing the call through a ref that's
  // reassigned every render keeps the handlers pointed at the latest
  // version without needing to recreate the player.
const goNextRef = useRef<(autoplay: boolean) => void>(() => {});
const historyRef = useRef<number[]>([]);

  const playlist = PLAYLISTS[playlistIndex] ?? PLAYLISTS[0];
  const track = playlist.tracks[trackIndex] ?? playlist.tracks[0];

  const trackRef = useRef(track);
  trackRef.current = track;

  // ── load the IFrame API script once, then create a single player ──────
  useEffect(() => {
    function createPlayer() {
      if (playerRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(YT_SLOT_ID, {
        height: "100%",
        width: "100%",
        playerVars: {
          controls: 1,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            setApiReady(true);
            const t = trackRef.current;
            if (isRealTrack(t)) {
              playerRef.current?.cueVideoById(t.videoId);
              setDuration(t.duration);
            }
            if (pendingPlayRef.current) {
              pendingPlayRef.current = false;
              if (isRealTrack(t)) {
                hasEverPlayedRef.current = true;
                playerRef.current?.playVideo();
              }
            }
          },
          onStateChange: (event) => {
            const YTns = window.YT;
            if (!YTns) return;
            if (event.data === YTns.PlayerState.PLAYING) setPlaybackState("playing");
            else if (event.data === YTns.PlayerState.PAUSED) setPlaybackState("paused");
            else if (event.data === YTns.PlayerState.BUFFERING) setPlaybackState("buffering");
            else if (event.data === YTns.PlayerState.CUED) setPlaybackState("cued");
            else if (event.data === YTns.PlayerState.ENDED) {
              setPlaybackState("ended");
              goNextRef.current(true);
            }
          },
          onError: (event) => {
          const meanings: Record<number, string> = {
            2: "invalid video id",
            5: "player/HTML5 error",
            100: "video not found, removed, or private",
            101: "embedding disabled by the video owner",
            150: "embedding disabled by the video owner",
          };
          console.error(`[YouTube] ${trackRef.current.videoId} failed (code ${event.data}: ${meanings[event.data] ?? "unknown"})`);
          import("@vercel/analytics").then(({ track: sendEvent }) => {
            sendEvent("youtube_playback_error", { code: event.data, videoId: trackRef.current.videoId });
          });
          goNextRef.current(true);
        },
        },
      });
    }

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        createPlayer();
      };
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── poll currentTime/duration while playing ────────────────────────────
  useEffect(() => {
    if (pollRef.current) clearInterval(pollRef.current);
    if (playbackState === "playing") {
      pollRef.current = setInterval(() => {
        const p = playerRef.current;
        if (!p) return;
        setCurrentTime(p.getCurrentTime());
        const d = p.getDuration();
        if (d > 0) setDuration(d);
      }, 500);
    }
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [playbackState]);

  const loadTrack = useCallback((nextTrack: Track, autoplay: boolean) => {
    setCurrentTime(0);
    setDuration(nextTrack.duration);
    const p = playerRef.current;
    if (!p || !isRealTrack(nextTrack)) {
      setPlaybackState("unstarted");
      return;
    }
    if (autoplay) {
      hasEverPlayedRef.current = true;
      p.loadVideoById(nextTrack.videoId);
    } else {
      p.cueVideoById(nextTrack.videoId);
    }
  }, []);

  const goNext = useCallback(
    (autoplay: boolean) => {
      const tracks = playlist.tracks;
      historyRef.current.push(trackIndex);
      if (historyRef.current.length > 100) historyRef.current.shift();

      let nextIndex = trackIndex;
      if (tracks.length > 1) {
        do {
          nextIndex = Math.floor(Math.random() * tracks.length);
        } while (nextIndex === trackIndex);
      }
      setTrackIndex(nextIndex);
      loadTrack(tracks[nextIndex], autoplay && hasEverPlayedRef.current);
    },
    [playlist, trackIndex, loadTrack]
  );
  goNextRef.current = goNext;

  const goPrev = useCallback(() => {
    const tracks = playlist.tracks;
    const previousIndex = historyRef.current.pop();
    if (previousIndex !== undefined && previousIndex < tracks.length) {
      setTrackIndex(previousIndex);
      loadTrack(tracks[previousIndex], hasEverPlayedRef.current);
    } else {
      const p = playerRef.current;
      if (p && isRealTrack(track)) p.seekTo(0, true);
      setCurrentTime(0);
    }
  }, [playlist, loadTrack, track]);

  const playPause = useCallback(() => {
    
    const p = playerRef.current;
    if (!isRealTrack(trackRef.current)) return; // nothing to play yet
    if (!p || !apiReady) {
      pendingPlayRef.current = true;
      return;
    }
    if (playbackState === "playing") {
      p.pauseVideo();
    } else {
      hasEverPlayedRef.current = true;
      p.playVideo();
    }
  }, [playbackState, apiReady]);

  const next = useCallback(() => goNext(true), [goNext]);
const prev = useCallback(() => goPrev(), [goPrev]);

  const seekToFraction = useCallback(
    (fraction: number) => {
      const p = playerRef.current;
      if (!p || !isRealTrack(track) || duration <= 0) return;
      const target = Math.min(Math.max(fraction, 0), 1) * duration;
      p.seekTo(target, true);
      setCurrentTime(target);
    },
    [duration, track]
  );

  const selectPlaylist = useCallback(
    (id: string) => {
      const idx = PLAYLISTS.findIndex((pl) => pl.id === id);
      if (idx === -1 || idx === playlistIndex) return;
      setPlaylistIndex(idx);
      setTrackIndex(0);
      loadTrack(PLAYLISTS[idx].tracks[0], hasEverPlayedRef.current);
    },
    [playlistIndex, loadTrack]
  );

  const selectTrack = useCallback(
    (index: number) => {
      if (index === trackIndex) return;
      setTrackIndex(index);
      loadTrack(playlist.tracks[index], hasEverPlayedRef.current);
    },
    [trackIndex, playlist, loadTrack]
  );

  return {
    playlists: PLAYLISTS,
    playlist,
    track,
    trackIndex,
    isPlaying: playbackState === "playing",
    isBuffering: playbackState === "buffering",
    hasRealTrack: isRealTrack(track),
    currentTime,
    duration: duration || track.duration,
    actions: { playPause, next, prev, seekToFraction, selectPlaylist, selectTrack },
    slotId: YT_SLOT_ID,
  };
}
