export type Track = {
  /** Stable slug, unique across all playlists. */
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  /** Duration in seconds — used for the counter before the player reports one. */
  duration: number;
  /** YouTube video id. Must be a video you have the right to use, or the
   *  rights holder's own upload with embedding enabled. */
  videoId: string;
};

export type Playlist = {
  id: string;
  name: string;
  tracks: Track[];
};
