import type { Playlist } from "./types";

/**
 * ────────────────────────────────────────────────────────────────────────
 *  PLACEHOLDER DATA — replace before shipping.
 *
 *  One flat list, no playlist switcher — prev/next just moves through
 *  these 18 slots in order and wraps back to the first after the last.
 *
 *  No track here was picked, searched for, or added on your behalf. Every
 *  `videoId` below is the literal string "REPLACE_ME" and shows a "no
 *  track loaded" state in the player instead of calling the YouTube API
 *  with a bad id.
 *
 *  To fill in a slot, just overwrite these five fields on that row:
 *    title, artist, film, year, videoId
 *  (leave `id` and `duration` alone — `duration` is just a starting
 *  guess for the counter and self-corrects once the video loads.)
 *
 *  `videoId` is the 11-character id from a youtube.com/watch?v=<id> URL —
 *  copy only that part, not the full link. Only use videos you have the
 *  right to use, or the rights holder's own channel upload with embedding
 *  enabled.
 *
 *  Want more or fewer than 18? Copy a row to add one, delete a row to
 *  remove one — nothing else in the file needs to change either way.
 * ────────────────────────────────────────────────────────────────────────
 */

export const PLAYLISTS: Playlist[] = [
  {
    id: "sur-sangam-radio",
    name: "Sur Sangam Radio",
    tracks: [
      { id: "t1", title: "Add track 1", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t2", title: "Add track 2", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t3", title: "Add track 3", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t4", title: "Add track 4", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t5", title: "Add track 5", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t6", title: "Add track 6", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t7", title: "Add track 7", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t8", title: "Add track 8", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t9", title: "Add track 9", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t10", title: "Add track 10", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t11", title: "Add track 11", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t12", title: "Add track 12", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t13", title: "Add track 13", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t14", title: "Add track 14", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t15", title: "Add track 15", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t16", title: "Add track 16", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t17", title: "Add track 17", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
      { id: "t18", title: "Add track 18", artist: "Artist name", film: "Film name", year: 1965, duration: 240, videoId: "REPLACE_ME" },
    ],
  },
];
