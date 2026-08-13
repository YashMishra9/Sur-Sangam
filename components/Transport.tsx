import { NextIcon, PauseIcon, PlayIcon, PrevIcon } from "./icons";

type TransportProps = {
  isPlaying: boolean;
  disabled: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  variant: "desktop" | "mobile";
};

export function Transport({
  isPlaying,
  disabled,
  onPlayPause,
  onNext,
  onPrev,
  variant,
}: TransportProps) {
  const playSize = variant === "mobile" ? "h-[52px] w-[52px]" : "h-10 w-10";
  const sideHit = variant === "mobile" ? "h-11 w-11" : "h-9 w-9";
  const sideIcon = variant === "mobile" ? "h-5 w-5" : "h-4 w-4";
  const gap = variant === "mobile" ? "gap-3" : "gap-1.5";

  return (
    <div className={`flex items-center ${gap}`}>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous track"
        className={`flex ${sideHit} items-center justify-center rounded-full text-[var(--color-parchment)]/80 transition hover:text-[var(--color-parchment)] active:scale-95`}
      >
        <PrevIcon className={sideIcon} />
      </button>

      <button
        type="button"
        onClick={onPlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
        disabled={disabled}
        className={`flex ${playSize} items-center justify-center rounded-full bg-gradient-to-b from-[var(--color-amber)] to-[var(--color-amber-deep)] ring-1 ring-white/25 shadow-[0_6px_18px_-4px_rgba(232,145,45,0.65)] transition active:scale-95 disabled:opacity-50`}
      >
        {isPlaying ? (
          <PauseIcon className={variant === "mobile" ? "h-6 w-6 text-[#1A120B]" : "h-5 w-5 text-[#1A120B]"} />
        ) : (
          <PlayIcon
            className={
              variant === "mobile"
                ? "h-6 w-6 translate-x-[1px] text-[#1A120B]"
                : "h-5 w-5 translate-x-[1px] text-[#1A120B]"
            }
          />
        )}
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next track"
        className={`flex ${sideHit} items-center justify-center rounded-full text-[var(--color-parchment)]/80 transition hover:text-[var(--color-parchment)] active:scale-95`}
      >
        <NextIcon className={sideIcon} />
      </button>
    </div>
  );
}
