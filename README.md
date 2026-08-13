# Sur Sangam Music House

A single-page nostalgia radio built with Next.js (App Router) + TypeScript +
Tailwind v4, driven by the YouTube IFrame Player API.

## Run it

```bash
npm install
npm run dev
```

> This project was scaffolded in a sandbox with no network access, so
> `npm install` has **not** been run or verified here — do that first thing
> and skim the terminal output for anything unexpected.

## Before you ship: add real tracks

`lib/playlists.ts` ships with two playlists of placeholder tracks
(`videoId: "REPLACE_ME"`) — no songs were picked, searched for, or added on
your behalf, per the brief. The player shows a "no track" state and a
disabled-feeling play button until you fill these in.

Adding a song is a one-line change:

```ts
{ id: "gold-1", title: "…", artist: "…", film: "…", year: 1965,
  duration: 240, videoId: "dQw4w9WgXcQ" }
```

Only use videos you have the right to use, or the rights holder's own
channel upload with embedding enabled — anything else will get skipped
automatically at playback time anyway (see "Playback errors" below), so it's
not a shortcut worth taking.

## Other placeholders to swap in

- `components/SocialLinks.tsx` — the two links point at `#`; point them at
  your real profiles.
- `public/bg/scene-wide.png` / `scene-tall.png` — already in place from your
  uploads (1672×941 landscape, 941×1672 portrait).

## How playback works

- One `YT.Player` instance is created, ever. It's positioned with plain CSS
  (absolute + responsive `top`/`left`/size) so it can sit inside either the
  desktop pill's vinyl or the mobile card's vinyl without being recreated —
  recreating it on breakpoint changes would start a second, overlapping
  audio stream.
- The iframe is genuinely visible in that vinyl circle (not hidden at
  1px/opacity-0), per YouTube's embed policy, and to keep ads' native Skip
  button reachable.
- `ended` and `onError` both advance to the next track automatically.
  Playback errors also fire a `youtube_playback_error` Vercel Analytics
  event with the error code and video id, so you can see in your dashboard
  if a track goes stale.
- Switching playlists (the small tabs above the player) restarts at track 1.

## Structure

```
app/            layout.tsx, page.tsx, globals.css (Tailwind v4 @theme tokens)
components/     Player.tsx + everything it composes
lib/            playlists.ts (data), usePlayerEngine.ts (YouTube state machine),
                types.ts, format.ts, youtube-types.d.ts
public/bg/      scene-wide.png, scene-tall.png
```
