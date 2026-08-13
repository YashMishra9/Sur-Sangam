type VinylSlotProps = {
  slotId: string;
  isPlaying: boolean;
  hasRealTrack: boolean;
};

/**
 * Rendered once, ever. The YouTube IFrame API takes over the inner
 * `#yt-slot` div and swaps it for a real, visible iframe — this is the
 * "artwork slot" the brief calls for, not a static thumbnail. Sizing and
 * position are pure CSS (h-16/w-16 on mobile, sm:h-20/sm:w-20 on desktop),
 * so the exact same DOM node — and the exact same live player — just gets
 * repositioned at the breakpoint instead of being recreated, which would
 * otherwise double up on audio.
 */
export function VinylSlot({ slotId, isPlaying, hasRealTrack }: VinylSlotProps) {
  return (
    <div
      className="pointer-events-auto absolute left-4 top-4 h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15 sm:left-3 sm:top-3 sm:h-20 sm:w-20"
      style={{
        animation: "spin 8s linear infinite",
        animationPlayState: isPlaying ? "running" : "paused",
      }}
    >
      <div id={slotId} className="h-full w-full bg-black/60" />

      {!hasRealTrack && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 text-center text-[9px] leading-tight text-white/50">
          no
          <br />
          track
        </div>
      )}

      {/* spindle hole */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 ring-2 ring-white/40"
        aria-hidden="true"
      />
    </div>
  );
}
