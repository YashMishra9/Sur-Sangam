import { Clock } from "@/components/Clock";
import { GrainOverlay } from "@/components/GrainOverlay";
import { ListenerCount } from "@/components/ListenerCount";
import { Player } from "@/components/Player";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <div className="hero-bg absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/80" />
      </div>
      <GrainOverlay />

      <div className="grid w-full grid-cols-3 items-start gap-2 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="justify-self-start">
          <Clock />
        </div>
        <div className="justify-self-center">
          <ListenerCount />
        </div>
        <div className="justify-self-end">
          <SocialLinks />
        </div>
      </div>

      <Player />
    </main>
  );
}
