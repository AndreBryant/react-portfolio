import { P5WrapperClassName, type P5CanvasInstance } from "@p5-wrapper/react";
import { createGlobalStyle } from "styled-components";

const wrap = (n: number, max: number) => ((n % max) + max) % max;

export const heroSketch = (p5: P5CanvasInstance) => {
  const followThisLol = { x: 0, y: 0 };
  const objects: {
    x: number;
    y: number;
    z: number;
  }[] = [];
  const count = 250;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, 2 * p5.windowHeight);

    const thicknessConstant = 40;
    let xOff = 0;
    let yOff = 0;

    for (let i = 0; i < count; i++) {
      const obj = {
        x: p5.random(p5.width * 1.5),
        y: p5.random(p5.height * 1.5),
        z: p5.noise(xOff, yOff) * thicknessConstant,
      };
      objects.push(obj);
      yOff += 0.01;
      xOff += 0.01;
    }

    window.addEventListener("scroll", () => {
      followThisLol.y = window.scrollY;
    });
  };

  p5.draw = () => {
    p5.background(0);
    for (const obj of objects) {
      const objX = wrap(obj.x - (followThisLol.x / obj.z) * 4, p5.width);
      const objY = wrap(obj.y - (followThisLol.y / obj.z) * 4, p5.height);

      p5.strokeWeight(obj.z);
      p5.stroke(
        255 * ((1 / obj.z) * 2),
        255 * ((1 / obj.z) * 2),
        255 * ((1 / obj.z) * 2),
      );
      p5.point(objX, objY);
    }
    followThisLol.x += 5;
  };

  p5.mouseWheel = (event) => {
    if (window.scrollY <= 0) return;
    followThisLol.y += event.delta;
  };

  p5.windowResized = () => {
    p5.clear();
    p5.resizeCanvas(p5.windowWidth, 2 * p5.windowHeight);
    p5.redraw();
  };
};

export const GlobalWrapperStyle = createGlobalStyle`
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
