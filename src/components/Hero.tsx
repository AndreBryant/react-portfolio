import {
  ReactP5Wrapper,
  P5WrapperClassName,
  type P5CanvasInstance,
} from "@p5-wrapper/react";
import { createGlobalStyle } from "styled-components";

const heroSketch = (p5: P5CanvasInstance) => {
  const colors: number[][] = [
    [254, 154, 0],
    [255, 185, 0],
  ];

  let rows: number;
  let cols: number;
  let size: number;
  let maxDepth: number;

  const objects: {
    x: number;
    y: number;
    z: number;
    isForward: boolean;
    color: number[][];
  }[] = [];

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, 2 * p5.windowHeight);
    size = p5.width / 100;
    maxDepth = p5.width / 10;
    cols = p5.ceil(p5.width / size / 4) + 1;
    rows = p5.ceil(p5.height / size) + 1;

    for (let i = 0; i < cols; i++) {
      let inc = 0;
      for (let j = 0; j < rows; j++) {
        if (j < rows / 2 || i < cols - p5.width / size) {
          objects.push({
            x: i * size,
            y: j * size,
            z: p5.random(0, 1),
            isForward: p5.random() > 0.5,
            color: p5.random(colors),
          });
        } else if (j >= rows / 2) {
          inc += 4;
          objects.push({
            x: (i + inc) * size,
            y: j * size,
            z: p5.random(0, 1),
            isForward: p5.random() > 0.5,
            color: p5.random(colors),
          });
        }
      }
    }
  };

  p5.draw = () => {
    p5.clear();
    for (const obj of objects) {
      const { x, y, z, isForward, color } = obj;

      p5.stroke(color[0], color[1], color[2], 100);
      p5.strokeWeight(10);
      // p5.strokeWeight(p5.map(z, 0, 1, 0, maxDepth));
      if (isForward) {
        // p5.line(x + size, y, x, y + size);
        p5.point(x + size, y + size);
      } else {
        // p5.line(x, y, x + size, y + size);
        p5.point(x, y);
      }
    }
    p5.noLoop();
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, 2 * p5.windowHeight);
    size = p5.width / 25;
    maxDepth = p5.width / 10;
    cols = p5.ceil(p5.width / size / 4) + 1;
    rows = p5.ceil(p5.height / size) + 1;

    objects.length = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        objects.push({
          x: i * size,
          y: j * size,
          z: p5.random(0, 1),
          isForward: p5.random() > 0.5,
          color: p5.random(colors),
        });
      }
    }
    p5.clear();
    p5.redraw();
  };
};

const GlobalWrapperStyle = createGlobalStyle`
  .${P5WrapperClassName} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    z-index: -1;
    pointer-events: none;
  }
`;

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <GlobalWrapperStyle />
      <ReactP5Wrapper sketch={heroSketch} />
      {/* HERO: Introduction */}
      <div className="relative flex items-center justify-center gap-16 rounded-lg bg-white/50 px-16 py-4 backdrop-blur-sm">
        {/* Introductory message */}
        <div className="">
          <h1 className="text-4xl font-semibold">Hi! I'm Andre!</h1>
          <p className="text-xl">I'm a software developer.</p>
        </div>
        {/* img */}
        <div className="">
          <div className="flex aspect-square h-64 items-center justify-center rounded-lg border">
            <p className="text-3xl font-semibold">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
          </div>
        </div>
      </div>
    </section>
  );
}
