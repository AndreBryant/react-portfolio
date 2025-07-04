import { ChevronDown } from "lucide-react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { heroSketch2, GlobalWrapperStyle } from "./scripts/p5-bgs";

export default function Hero() {
  return (
    <section
      className="relative flex h-screen w-screen items-center justify-center select-none"
      id="hero"
    >
      <GlobalWrapperStyle />
      <ReactP5Wrapper sketch={heroSketch2} />
      <div className="absolute z-10 flex h-full w-full flex-col-reverse items-center justify-start gap-8 pb-16">
        <div className="flex animate-bounce items-center gap-2 text-white/20 peer-hover:text-white/30">
          <ChevronDown />
        </div>
      </div>

      <div className="z-10 flex h-full w-full items-center justify-center">
        <div className="uppercase">
          <p className="hero-hello-animated text-slate-50/60">Hello, I am</p>
          <h1 className="hero-andre-animated bg-gradient-to-r from-slate-50 via-slate-700 to-slate-300 bg-clip-text text-9xl font-bold tracking-tighter text-transparent">
            Andre
          </h1>
          <p className="hero-software-dev-animated text-right text-slate-50/60">
            aspiring software developer
          </p>
        </div>
      </div>
    </section>
  );
}
