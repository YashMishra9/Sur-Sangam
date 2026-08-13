import { InstagramIcon, NetworkIcon } from "./icons";

const LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/yashmish._/",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yashmishra2005",
    Icon: NetworkIcon,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {LINKS.map(({ label, href, Icon }) => (
        
          <a key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[var(--color-parchment)]/80 backdrop-blur-xl transition hover:bg-white/[0.12] hover:text-[var(--color-parchment)]"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}