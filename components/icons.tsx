type IconProps = {
  className?: string;
};

export function PrevIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 6v12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path
        d="M18 6.5 8.5 12l9.5 5.5V6.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NextIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M17 6v12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path
        d="M6 6.5 15.5 12 6 17.5V6.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.5 5.6c0-.9 1-1.4 1.7-.9l10 6.4a1.1 1.1 0 0 1 0 1.8l-10 6.4c-.7.5-1.7 0-1.7-.9V5.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="6.5" y="5" width="4" height="14" rx="1.2" fill="currentColor" />
      <rect x="13.5" y="5" width="4" height="14" rx="1.2" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth={1.6} />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth={1.6} />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="7" r="2.4" stroke="currentColor" strokeWidth={1.6} />
      <circle cx="18" cy="7" r="2.4" stroke="currentColor" strokeWidth={1.6} />
      <circle cx="12" cy="18" r="2.4" stroke="currentColor" strokeWidth={1.6} />
      <path
        d="M8.1 8.2 10.2 15.6M15.9 8.2 13.8 15.6M8.3 7 15.7 7"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}
