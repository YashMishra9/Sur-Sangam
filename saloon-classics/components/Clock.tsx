"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function readParts() {
  const parts = formatter.formatToParts(new Date());
  const hour = parts.find((p) => p.type === "hour")?.value ?? "--";
  const minute = parts.find((p) => p.type === "minute")?.value ?? "--";
  const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value ?? "";
  return { hour, minute, dayPeriod };
}

export function Clock() {
  // Start as null so the server-rendered markup doesn't race the client's
  // clock (SSR time and hydration time can land in different seconds) —
  // the real value is filled in on mount, client-side only.
  const [parts, setParts] = useState<ReturnType<typeof readParts> | null>(null);

  useEffect(() => {
    setParts(readParts());
    const id = setInterval(() => setParts(readParts()), 1000);
    return () => clearInterval(id);
  }, []);

  const { hour, minute, dayPeriod } = parts ?? { hour: "--", minute: "--", dayPeriod: "" };

  return (
    <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-[13px] tabular-nums text-[var(--color-parchment)]/90 backdrop-blur-xl">
      {hour}
      <span className="blink-colon">:</span>
      {minute}
      <span className="ml-1 text-[10px] uppercase text-[var(--color-parchment)]/55">
        {dayPeriod}
      </span>
    </div>
  );
}
