import { ChevronDown } from "lucide-react";
import { HERO_CONTENT, SKILLS } from "../content";

export default function Hero() {
  const colors: string[] = [
    "text-rose-300",
    "text-red-300",
    "text-orange-300",
    "text-cyan-300",
    "text-slate-300",
    "text-green-300",
    "text-emerald-300",
  ];

  return (
    <section
      className="relative flex h-screen w-screen items-center justify-center bg-black/0 font-mono tracking-wider select-none"
      id="hero"
    >
      <div className="absolute z-10 flex h-full w-full flex-col-reverse items-center justify-start gap-8">
        <div className="flex animate-bounce items-center gap-2 text-white/20 peer-hover:text-white/30">
          <ChevronDown />
        </div>
      </div>
      <div className="flex w-full flex-col tracking-widest text-slate-50 md:flex-row lg:w-2/3">
        {/* <div className="flex w-full flex-1/3 items-center justify-center">
          <div className="flex h-96 w-72 flex-col items-center justify-center bg-purple-100/10">
            <p className="text-4xl font-thin text-purple-50/20">◝(ᵔᗜᵔ)◜</p>
            <p className="text-4xl font-thin text-purple-50/20">img here</p>
          </div>
        </div> */}

        <div className="flex w-full flex-col items-center gap-8">
          <div className="w-2/3 uppercase">
            <p className="text-xl">{HERO_CONTENT.heading}</p>
            <p className="hero-andre-animated bg-gradient-to-r from-slate-50 via-slate-600 to-slate-300 bg-clip-text text-center text-8xl tracking-tight text-transparent lg:text-9xl">
              {HERO_CONTENT.name}
            </p>
            <p className="text-right text-xl">{HERO_CONTENT.job}</p>
          </div>
          <div className="overflow-hidden rounded-lg bg-slate-500/10 px-4 py-2 backdrop-blur-lg">
            <p className="animate-marquee text-sm text-purple-50/90">
              {SKILLS.map((s, i) => {
                const colorClass =
                  colors[Math.floor(Math.random() * colors.length)];
                return (
                  <span key={i} className={`${colorClass} mr-4`}>
                    •{s}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
