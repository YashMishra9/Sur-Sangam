import { Clock } from "@/components/Clock";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Player } from "@/components/Player";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden">

      {/* Background */}
      <div
        className="hero-bg fixed inset-0 z-0"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="fixed inset-0 z-10 bg-gradient-to-b from-black/35 via-transparent to-black/80"
        aria-hidden="true"
      />

      {/* Grain */}
      <GrainOverlay />

      {/* TOP BAR — always stays at the top */}
      <div
        className="fixed inset-x-0 top-0 z-30 grid w-full grid-cols-3 items-start gap-2 px-[max(1rem,env(safe-area-inset-left))] pt-[max(1rem,env(safe-area-inset-top))] pr-[max(1rem,env(safe-area-inset-right))]"
      >
        <div className="justify-self-start">
          <Clock />
        </div>

        <div aria-hidden="true" />

        <div className="justify-self-end">
          <SocialLinks />
        </div>
      </div>

      {/* PLAYER — stays at bottom */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center pb-[max(1rem,env(safe-area-inset-bottom))]">
        <Player />
      </div>

    </main>
  );
}