import { P5WrapperClassName, type P5CanvasInstance } from "@p5-wrapper/react";
import { createGlobalStyle } from "styled-components";

export const heroSketch2 = (p5: P5CanvasInstance) => {
  const objects: {
    x: number;
    y: number;
    z: number;
    r: number;
    shape: string;
    color: number[];
  }[] = [];

  const count = 5;
  let a = 0;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    const max = 200;
    for (let i = 0; i < count; i++) {
      const obj = {
        x: p5.random(-max, max),
        y: p5.random(-max, max),
        z: p5.random(-max, max),
        r: p5.random(200, 250),
        shape: p5.random(["sphere", "cone"]),
        color: [p5.random(0, 100), p5.random(0, 50), p5.random(0, 150)],
      };

      objects.push(obj);
    }
    p5.lights();
    p5.angleMode(p5.DEGREES);

    console.log(
      objects.forEach((o) => console.log("[" + o.color.toString() + "]")),
    );
  };

  p5.draw = () => {
    p5.background(0);

    p5.push();
    p5.rotateX(a);
    p5.rotateY(a);
    a += 0.1;

    for (const obj of objects) {
      p5.push();

      p5.noStroke();
      p5.fill(obj.color[0], obj.color[1], obj.color[2]);
      p5.translate(obj.x, obj.y, obj.z);

      if (obj.shape === "cone") p5.cone(obj.r);
      else if (obj.shape === "sphere") p5.sphere(obj.r);

      p5.pop();
    }
    p5.pop();
  };

  p5.windowResized = () => {
    p5.clear();
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.redraw();
  };
};

export const GlobalWrapperStyle = createGlobalStyle`
  .${P5WrapperClassName} {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    `;
