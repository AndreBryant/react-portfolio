import { ReactP5Wrapper } from "@p5-wrapper/react";
import { heroSketch, GlobalWrapperStyle } from "./scripts/hero-sketch";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center px-16 py-8">
      <GlobalWrapperStyle />
      <ReactP5Wrapper sketch={heroSketch} />

      <div className="flex h-full w-full items-center justify-center gap-16 rounded-lg border border-white/30 fill-transparent text-white backdrop-blur-xs">
        <div className="">
          <h1 className="text-4xl font-semibold">Hi! I'm Andre!</h1>
          <p className="text-xl">I'm a software developer.</p>
        </div>

        <div className="">
          <div className="flex aspect-square h-64 items-center justify-center rounded-lg border backdrop-blur-lg">
            <p className="text-3xl font-semibold">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
          </div>
        </div>
      </div>
    </section>
  );
}
