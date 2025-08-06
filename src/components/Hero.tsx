import { ChevronDown } from "lucide-react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { heroSketch3, GlobalWrapperStyle } from "./scripts/p5-bgs";

export default function Hero() {
  return (
    <section
      className="relative flex h-screen w-screen items-center justify-center bg-black/40 select-none"
      id="hero"
    >
      <GlobalWrapperStyle />
      <ReactP5Wrapper sketch={heroSketch3} />
      <div className="absolute z-10 flex h-full w-full flex-col-reverse items-center justify-start gap-8 pb-16">
        <div className="flex animate-bounce items-center gap-2 text-white/20 peer-hover:text-white/30">
          <ChevronDown />
        </div>
      </div>
      <div className="mt-32 flex basis-0 flex-col items-center gap-16 md:mt-0 md:flex-row">
        <div className="z-10 flex flex-col items-center justify-center gap-4">
          <div className="uppercase">
            <p className="hero-hello-animated text-slate-50/60 text-shadow-slate-50 text-shadow-xs">
              Hello, I am
            </p>
            <h1 className="hero-andre-animated bg-gradient-to-r from-purple-50 via-purple-600 to-purple-300 bg-clip-text text-8xl font-bold tracking-tight text-transparent lg:text-9xl">
              Andre
            </h1>
            <p className="hero-software-dev-animated text-right text-slate-50/60 text-shadow-slate-50 text-shadow-xs">
              aspiring software developer
            </p>
          </div>
          <div className="hero-subtext-animatedxxx border-l-4 border-purple-800 bg-slate-800/10 py-4 pr-4 pl-8">
            <p className="text-sm tracking-wide text-slate-50/75">
              I am a computer science fresh graduate from the University of the
              Philippines and a DOST-SEI JLSS scholar.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-1/3 items-center justify-center">
          <div className="flex h-96 w-72 flex-col items-center justify-center bg-purple-100/10">
            <p className="text-4xl font-thin text-purple-50/20">◝(ᵔᗜᵔ)◜</p>
            <p className="text-4xl font-thin text-purple-50/20">img here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
