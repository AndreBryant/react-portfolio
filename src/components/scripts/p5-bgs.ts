import { P5WrapperClassName, type P5CanvasInstance } from "@p5-wrapper/react";
import { createGlobalStyle } from "styled-components";

const wrap = (n: number, max: number) => ((n % max) + max) % max;

export const heroSketch2 = (p5: P5CanvasInstance) => {
  const objects: {
    x: number;
    y: number;
    z: number;
    r: number;
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
        color: [p5.random(0, 150), p5.random(0, 50), p5.random(0, 100)],
      };

      objects.push(obj);
    }
    p5.lights();
    p5.angleMode(p5.DEGREES);
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
      p5.sphere(obj.r);

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

export const heroSketch = (p5: P5CanvasInstance) => {
  const followThisLol = { x: 0, y: 0 }; // idk, object to follow for the background balls
  const objects: {
    x: number;
    y: number;
    z: number;
    color: number[];
  }[] = [];
  const count = 50;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, 2 * p5.windowHeight);

    const maxStrokeWidth = 40;

    for (let i = 0; i < count; i++) {
      const z = p5.random(0.2, 1) * maxStrokeWidth;
      const obj = {
        x: p5.random(p5.width * 1.5),
        y: p5.random(p5.height * 1.5),
        z: z,
        color: [
          255 * p5.random(0.1, (1 / z) * 4),
          (255 * p5.random(0.1, (1 / z) * 4)) / 10,
          255 * p5.random(0.1, (1 / z) * 4) * 1.5,
        ],
      };
      objects.push(obj);
    }

    window.addEventListener("scroll", () => {
      followThisLol.y = window.scrollY;
    });
  };

  p5.draw = () => {
    p5.background(10);
    for (const obj of objects) {
      // Parallax effect
      const objX = wrap(obj.x - (followThisLol.x / obj.z) * 4, p5.width * 1.5);
      const objY = wrap(obj.y - (followThisLol.y / obj.z) * 4, p5.height);

      p5.push();
      p5.noStroke();
      p5.fill(obj.color[0], obj.color[1], obj.color[2], obj.z * 1000);
      p5.ellipse(objX - obj.z * 10, objY, obj.z * 20);
      p5.pop();
    }

    followThisLol.x += 1;
    followThisLol.y += p5.floor(p5.random(-0.5, 0.5));
  };

  p5.mouseWheel = (event: WheelEvent) => {
    if (window.scrollY <= 0) return;
    followThisLol.y += event.deltaX;
  };

  p5.windowResized = () => {
    p5.clear();
    p5.resizeCanvas(p5.windowWidth, 2 * p5.windowHeight);
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
    pointer-events: none;
  }
`;
