import type { CSSProperties } from "react";

type CassetteTapeProps = {
  isPlaying: boolean;
};

export function CassetteTape({ isPlaying }: CassetteTapeProps) {
  const reelStyle: CSSProperties = {
    animation: "spin 2.6s linear infinite",
    animationPlayState: isPlaying ? "running" : "paused",
  };

  return (
    <div
      aria-hidden="true"
      className="relative h-[64px] w-[104px] shrink-0 -rotate-2 rounded-[5px] border border-black/50 bg-gradient-to-b from-[#2e1f12] to-[#160d06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_3px_8px_rgba(0,0,0,0.5)]"
    >
      <span className="absolute left-[4px] top-[4px] h-[2.5px] w-[2.5px] rounded-full bg-black/60" />
      <span className="absolute right-[4px] top-[4px] h-[2.5px] w-[2.5px] rounded-full bg-black/60" />
      <span className="absolute bottom-[4px] left-[4px] h-[2.5px] w-[2.5px] rounded-full bg-black/60" />
      <span className="absolute bottom-[4px] right-[4px] h-[2.5px] w-[2.5px] rounded-full bg-black/60" />

      <div className="absolute inset-x-[9px] top-[5px] flex flex-col items-center rounded-[2px] bg-[var(--color-parchment)]/90 py-[3px] leading-none">
        <span className="text-[7px] font-semibold tracking-[0.1em] text-[var(--color-ink)]">
          SUR SANGAM
        </span>
        <span className="text-[5.5px] tracking-[0.18em] text-[var(--color-ink)]/70">SIDE A</span>
      </div>

      <div className="absolute inset-x-[9px] top-[26px] h-[1.5px] rounded-full bg-[var(--color-amber)]/40" />

      <div className="absolute inset-x-[10px] bottom-[6px] top-[30px] flex items-center justify-between rounded-[3px] bg-black/50 px-[7px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
        <svg viewBox="0 0 24 24" className="h-6 w-6" style={reelStyle}>
          <circle cx="12" cy="12" r="10.5" fill="#0d0805" stroke="var(--color-amber)" strokeOpacity="0.7" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3" fill="none" stroke="var(--color-amber)" strokeOpacity="0.5" strokeWidth="1" />
          <g stroke="var(--color-amber)" strokeOpacity="0.35" strokeWidth="1">
            <line x1="12" y1="4" x2="12" y2="8" />
            <line x1="12" y1="16" x2="12" y2="20" />
            <line x1="4" y1="12" x2="8" y2="12" />
            <line x1="16" y1="12" x2="20" y2="12" />
          </g>
          <circle cx="12" cy="12" r="1.3" fill="var(--color-amber)" fillOpacity="0.6" />
        </svg>
        <svg viewBox="0 0 24 24" className="h-6 w-6" style={reelStyle}>
          <circle cx="12" cy="12" r="10.5" fill="#0d0805" stroke="var(--color-amber)" strokeOpacity="0.7" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3" fill="none" stroke="var(--color-amber)" strokeOpacity="0.5" strokeWidth="1" />
          <g stroke="var(--color-amber)" strokeOpacity="0.35" strokeWidth="1">
            <line x1="12" y1="4" x2="12" y2="8" />
            <line x1="12" y1="16" x2="12" y2="20" />
            <line x1="4" y1="12" x2="8" y2="12" />
            <line x1="16" y1="12" x2="20" y2="12" />
          </g>
          <circle cx="12" cy="12" r="1.3" fill="var(--color-amber)" fillOpacity="0.6" />
        </svg>
      </div>
    </div>
  );
}