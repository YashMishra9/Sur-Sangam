"use client";

import { useEffect, useState } from "react";

/**
 * There's no backend, so this is a plausible ambient count rather than a
 * real one — a slow, gentle random walk that starts once on the client
 * (avoiding any SSR/client mismatch) so the top row never sits empty.
 */
export function ListenerCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(118 + Math.floor(Math.random() * 40));
    const id = setInterval(() => {
      setCount((prev) => {
        const base = prev ?? 130;
        const next = base + Math.floor(Math.random() * 7) - 3;
        return Math.min(220, Math.max(60, next));
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[12px] text-[var(--color-parchment)]/85 backdrop-blur-xl">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-amber)] opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-amber)]" />
      </span>
      <span className="tabular-nums">{count ?? "…"}</span>
      <span className="text-[var(--color-parchment)]/55">listening</span>
    </div>
  );
}
