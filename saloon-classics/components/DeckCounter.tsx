import { formatTime } from "@/lib/format";

type DeckCounterProps = {
  elapsed: number;
  duration: number;
  className?: string;
};

/**
 * Mimics a cassette deck's mechanical tape counter: a dark recessed window
 * with amber tabular-nums digits. This is the player's one signature
 * flourish — everything else in the chrome stays quiet.
 */
export function DeckCounter({ elapsed, duration, className = "" }: DeckCounterProps) {
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-[4px] bg-black/45 px-1.5 py-0.5 font-mono text-[10.5px] tabular-nums text-[var(--color-amber)]/90 ring-1 ring-white/10 ${className}`}
    >
      <span>{formatTime(elapsed)}</span>
      <span className="text-white/25">/</span>
      <span className="text-white/50">{formatTime(duration)}</span>
    </div>
  );
}
