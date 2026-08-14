"use client";

import { useEffect, useState } from "react";

/**
 * There's no backend, so this is a plausible ambient count rather than a
 * real one — a slow, gentle random walk around a modest baseline (this is
 * running locally, not actually serving listeners) so the top row never
 * sits empty.
 */
export function ListenerCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(40 + Math.floor(Math.random() * 10));
    const id = setInterval(() => {
      setCount((prev) => {
        const base = prev ?? 45;
        const next = base + Math.floor(Math.random() * 5) - 2;
        return Math.min(55, Math.max(35, next));
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[12px] text-[var(--color-parchment)]/85 backdrop-blur-xl">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
      </span>
      <span className="tabular-nums">{count ?? "…"}</span>
      <span className="text-[var(--color-parchment)]/55">listening</span>
    </div>
  );
}