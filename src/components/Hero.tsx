import {
  ReactP5Wrapper,
  P5WrapperClassName,
  type P5CanvasInstance,
} from "@p5-wrapper/react";
import { createGlobalStyle } from "styled-components";

const heroSketch = (p5: P5CanvasInstance) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    // p5.createCanvas(100, 100);
  };

  p5.draw = () => {
    p5.noLoop();
    // p5.ellipse(p5.width / 2, p5.height / 2, 100, 100);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
};

const GlobalWrapperStyle = createGlobalStyle`
  .${P5WrapperClassName} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
`;

export default function Hero() {
  return (
    <section className="relative h-screen">
      <GlobalWrapperStyle />
      <ReactP5Wrapper sketch={heroSketch} />
      {/* HERO: Introduction */}
      <div className="flex h-full w-full items-center justify-center gap-16">
        {/* Introductory message */}
        <div>
          <h1 className="text-4xl font-semibold">Hi! I'm Andre!</h1>
          <p className="text-xl">I'm a software developer.</p>
        </div>
        {/* img */}
        <div>
          <div className="flex aspect-square h-64 items-center justify-center rounded-lg border">
            <p className="text-3xl font-semibold">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
          </div>
        </div>
      </div>
    </section>
  );
}
