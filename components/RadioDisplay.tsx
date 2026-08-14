"use client";

import { useEffect, useState } from "react";

type RadioDisplayProps = {
  isPlaying: boolean;
};

export function RadioDisplay({ isPlaying }: RadioDisplayProps) {
  const [signalBars, setSignalBars] = useState(7);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(40 + Math.floor(Math.random() * 10));
    const signalId = setInterval(() => {
      setSignalBars(6 + Math.floor(Math.random() * 3));
    }, 3500);
    const countId = setInterval(() => {
      setCount((prev) => {
        const base = prev ?? 45;
        const next = base + Math.floor(Math.random() * 5) - 2;
        return Math.min(55, Math.max(35, next));
      });
    }, 4000);
    return () => {
      clearInterval(signalId);
      clearInterval(countId);
    };
  }, []);

  return (
    <div
      className="rounded-[2px] border border-black/50 bg-gradient-to-b from-[#241a10] to-[#140d07] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_3px_8px_rgba(0,0,0,0.45)]"
      role="status"
      aria-label={`${isPlaying ? "On air" : "Off air, paused"}, ${count ?? "around forty"} listening`}
    >
      <div className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.08em]">
        <span
          className={`h-[5px] w-[5px] rounded-full ${isPlaying ? "bg-green-400" : "bg-white/25"}`}
          style={isPlaying ? { animation: "blink 1.6s step-end infinite" } : undefined}
          aria-hidden="true"
        />
        <span className={isPlaying ? "text-green-400" : "text-white/35"} aria-hidden="true">
          {isPlaying ? "ON AIR" : "OFF AIR"}
        </span>
        <span className="text-[var(--color-amber)]/40" aria-hidden="true">|</span>
        <span className="text-[var(--color-amber)]/85" aria-hidden="true">FM 98.3</span>
      </div>

      <div className="mt-1.5 flex items-center gap-1" aria-hidden="true">
        <span className="text-[7.5px] tracking-[0.1em] text-[var(--color-amber)]/40">SIGNAL</span>
        <div className="flex items-end gap-[1.5px]">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="w-[2px] rounded-[0.5px]"
              style={{
                height: `${3 + i}px`,
                backgroundColor: i < signalBars ? "var(--color-amber)" : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="mt-1.5 font-mono text-[9px] tabular-nums tracking-[0.08em] text-[var(--color-amber)]/75"
        aria-hidden="true"
      >
        {count !== null ? `${count} LISTENING` : "— LISTENING"}
      </div>
    </div>
  );
}