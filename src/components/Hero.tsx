import { ChevronDown } from "lucide-react";
import { HERO_CONTENT } from "../content";
import HeroMarquee from "./HeroMarquee";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-screen items-center justify-center bg-black/0 tracking-wider select-none"
      id="hero"
    >
      <div className="absolute z-10 flex h-full w-full flex-col-reverse items-center justify-start gap-8">
        <div className="flex animate-bounce items-center gap-2 text-white/20 peer-hover:text-white/30">
          <ChevronDown />
        </div>
      </div>
      <div className="flex w-full flex-col tracking-widest text-slate-50 md:flex-row lg:w-2/3">
        <div className="relative flex w-full flex-col items-center gap-16">
          {/* <div className="absolute -top-16 left-16 rounded-lg bg-amber-50/5 px-2 py-1">
            <p className="animate-pulse uppercase">Work in Progress...</p>
          </div> */}
          <div className="w-2/3 uppercase">
            <p className="text-xl">{HERO_CONTENT.heading}</p>
            <p className="hero-andre-animated bg-gradient-to-r from-slate-50 via-slate-600 to-slate-300 bg-clip-text text-center text-8xl tracking-tight text-transparent lg:text-9xl">
              {HERO_CONTENT.name}
            </p>
            <p className="text-right text-xl">{HERO_CONTENT.job}</p>
          </div>
          <HeroMarquee />
        </div>
      </div>
    </section>
  );
}
