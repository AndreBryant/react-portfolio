import { ReactP5Wrapper } from "@p5-wrapper/react";
import { heroSketch, GlobalWrapperStyle } from "./scripts/hero-sketch";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center px-16 py-8">
      <GlobalWrapperStyle />
      <ReactP5Wrapper sketch={heroSketch} />

      <div className="flex h-full w-full items-center justify-center gap-16 border border-white/30 bg-black/10 fill-transparent text-white backdrop-blur-sm">
        <div className="">
          <h1 className="text-4xl font-semibold">Hi! I'm Andre!</h1>
          <p className="text-xl">I'm a software developer.</p>
        </div>

        <div className="">
          <div className="flex aspect-square h-64 items-center justify-center rounded-lg bg-black/30 backdrop-blur-xl">
            <p className="text-3xl font-semibold">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
          </div>
        </div>
      </div>
    </section>
  );
}
