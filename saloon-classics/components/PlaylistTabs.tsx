import type { Playlist } from "@/lib/types";

type PlaylistTabsProps = {
  playlists: Playlist[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function PlaylistTabs({ playlists, activeId, onSelect }: PlaylistTabsProps) {
  return (
    <div className="mb-2 flex justify-center gap-1.5">
      {playlists.map((pl) => {
        const active = pl.id === activeId;
        return (
          <button
            key={pl.id}
            type="button"
            onClick={() => onSelect(pl.id)}
            aria-pressed={active}
            className={`rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur-xl transition ${
              active
                ? "border-white/20 bg-white/[0.16] text-[var(--color-parchment)]"
                : "border-white/10 bg-white/[0.05] text-[var(--color-parchment)]/55 hover:bg-white/[0.09]"
            }`}
          >
            {pl.name}
          </button>
        );
      })}
    </div>
  );
}
