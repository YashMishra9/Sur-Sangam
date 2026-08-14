import type { Track } from "@/lib/types";

type MarqueeTickerProps = {
  track: Track;
};

function TickerChunk({ track }: { track: Track }) {
  return (
    <>
      <span className="text-[var(--color-amber)]/50">◆</span>
      <span className="mx-2 text-[var(--color-parchment)]/80">NOW PLAYING</span>
      <span className="text-[var(--color-amber)]/50">◆</span>
      <span className="mx-2 text-[var(--color-amber)]/95">{track.title.toUpperCase()}</span>
      <span className="text-[var(--color-amber)]/50">◆</span>
      <span className="mx-2 text-[var(--color-amber)]/80">{track.artist.toUpperCase()}</span>
      <span className="text-[var(--color-amber)]/50">◆</span>
      <span className="mx-2 text-[var(--color-amber)]/65">
        {track.film.toUpperCase()} • {track.year}
      </span>
    </>
  );
}

export function MarqueeTicker({ track }: MarqueeTickerProps) {
  return (
    <div
      className="mb-2 overflow-hidden rounded-[2px] border border-[var(--color-amber)]/20 bg-gradient-to-b from-black/75 to-black/55 shadow-[inset_0_0_0_1px_rgba(232,145,45,0.12),inset_0_2px_4px_rgba(0,0,0,0.5)]"
      role="status"
      aria-label={`Now playing: ${track.title} by ${track.artist}, from ${track.film}, ${track.year}`}
    >
      <div
        key={track.id}
        aria-hidden="true"
        className="marquee-row flex items-center whitespace-nowrap py-1.5 font-mono text-[10px] tracking-[0.06em]"
      >
        <span className="flex shrink-0 items-center">
          <TickerChunk track={track} />
          <TickerChunk track={track} />
          <TickerChunk track={track} />
        </span>
        <span className="flex shrink-0 items-center">
          <TickerChunk track={track} />
          <TickerChunk track={track} />
          <TickerChunk track={track} />
        </span>
      </div>
    </div>
  );
}