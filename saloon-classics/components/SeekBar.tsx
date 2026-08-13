"use client";

import { type PointerEvent, useRef, useState } from "react";

type SeekBarProps = {
  progress: number; // 0..1
  onSeek: (fraction: number) => void;
  disabled?: boolean;
  className?: string;
};

/**
 * A 24px invisible hit area wrapping a 3px visible rail. Dragging uses
 * pointer events (not click) so the knob tracks the finger/cursor
 * continuously, and `touch-none` stops the drag from also scrolling the
 * page on mobile.
 */
export function SeekBar({ progress, onSeek, disabled, className = "" }: SeekBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);

  const clamped = Math.min(Math.max(progress, 0), 1);

  function fractionFromEvent(e: PointerEvent<HTMLDivElement>) {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
  }

  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    if (disabled) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    onSeek(fractionFromEvent(e));
  }

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!dragging || disabled) return;
    onSeek(fractionFromEvent(e));
  }

  function handlePointerUp(e: PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setDragging(false);
  }

  const showKnob = hovering || dragging;

  return (
    <div
      ref={trackRef}
      role="slider"
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped * 100)}
      aria-disabled={disabled}
      className={`group relative flex h-6 touch-none items-center ${
        disabled ? "opacity-40" : "cursor-pointer"
      } ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <div className="relative h-[3px] w-full overflow-visible rounded-full bg-white/15">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[var(--color-amber)] shadow-[0_0_10px_2px_rgba(232,145,45,0.55)]"
          style={{ width: `${clamped * 100}%` }}
        />
        <div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--color-parchment)] shadow-[0_1px_4px_rgba(0,0,0,0.5)] transition-opacity"
          style={{
            left: `${clamped * 100}%`,
            transform: "translate(-50%, -50%)",
            opacity: showKnob ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}
