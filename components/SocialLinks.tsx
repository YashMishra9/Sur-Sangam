// Placeholder destinations — point these at your real profiles.
const LINKS = [
  { label: "Instagram", href: "#", glyph: "IG" },
  { label: "YouTube", href: "#", glyph: "YT" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[10px] font-semibold tracking-wide text-[var(--color-parchment)]/80 backdrop-blur-xl transition hover:bg-white/[0.12] hover:text-[var(--color-parchment)]"
        >
          {link.glyph}
        </a>
      ))}
    </div>
  );
}
