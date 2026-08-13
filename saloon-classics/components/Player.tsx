"use client";

import { usePlayerEngine } from "@/lib/usePlayerEngine";
import { DeckCounter } from "./DeckCounter";
import { PlaylistTabs } from "./PlaylistTabs";
import { SeekBar } from "./SeekBar";
import { Transport } from "./Transport";
import { VinylSlot } from "./VinylSlot";

const GLASS =
  "border border-white/10 bg-gradient-to-b from-white/[0.15] to-white/[0.055] backdrop-blur-3xl backdrop-saturate-[1.7] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]";

export function Player() {
  const { playlists, playlist, track, isPlaying, hasRealTrack, currentTime, duration, actions, slotId } =
    usePlayerEngine();

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div className="w-full max-w-xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-0">
      {playlists.length > 1 && (
        <PlaylistTabs playlists={playlists} activeId={playlist.id} onSelect={actions.selectPlaylist} />
      )}

      <div className="relative">
        {/* ── DESKTOP: one horizontal pill ───────────────────────────── */}
        <div className={`hidden min-w-[440px] items-center gap-4 rounded-full p-3 pr-5 sm:flex ${GLASS}`}>
          <div className="h-20 w-20 shrink-0" aria-hidden="true" />

          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="truncate font-display text-[15px] leading-tight tracking-wide">{track.title}</p>
            <p className="truncate text-[12.5px] leading-tight text-[var(--color-parchment)]/70">
              {track.artist}
            </p>
            <div className="mt-0.5 flex items-center gap-2">
              <SeekBar
                progress={progress}
                onSeek={actions.seekToFraction}
                disabled={!hasRealTrack}
                className="flex-1"
              />
              <DeckCounter elapsed={currentTime} duration={duration} />
            </div>
          </div>

          <Transport
            variant="desktop"
            isPlaying={isPlaying}
            disabled={!hasRealTrack}
            onPlayPause={actions.playPause}
            onNext={actions.next}
            onPrev={actions.prev}
          />
        </div>

        {/* ── MOBILE: stacked card ───────────────────────────────────── */}
        <div className={`flex flex-col gap-3 rounded-[26px] p-4 sm:hidden ${GLASS}`}>
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 shrink-0" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-[15px] leading-tight tracking-wide">{track.title}</p>
              <p className="truncate text-[12.5px] leading-tight text-[var(--color-parchment)]/70">
                {track.artist}
              </p>
            </div>
          </div>

          <SeekBar progress={progress} onSeek={actions.seekToFraction} disabled={!hasRealTrack} />

          <div className="grid grid-cols-3 items-center">
            <DeckCounter elapsed={currentTime} duration={duration} className="justify-self-start" />
            <div className="justify-self-center">
              <Transport
                variant="mobile"
                isPlaying={isPlaying}
                disabled={!hasRealTrack}
                onPlayPause={actions.playPause}
                onNext={actions.next}
                onPrev={actions.prev}
              />
            </div>
            <div aria-hidden="true" />
          </div>
        </div>

        <VinylSlot slotId={slotId} isPlaying={isPlaying} hasRealTrack={hasRealTrack} />
      </div>
    </div>
  );
}
