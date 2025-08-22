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

  const mouseObj = {
    x: 0,
    y: 0,
    z: 0,
    r: 40,
    targetX: 0,
    targetY: 0,
  };

  const colors = [
    [33, 9, 78],
    [85, 45, 43],
    [61, 18, 109],
    [33, 9, 78],
    [80, 51, 73],
  ];

  const count = 3;
  let a = 0;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    const range = 100;
    for (let i = 0; i < count; i++) {
      const obj = {
        x: p5.random(-2 * range, 2 * range),
        y: p5.random(-2 * range, 2 * range),
        z: p5.random(-2 * range, 2 * range),
        r: p5.random(range / 2, range * 2),
        shape: p5.random(["sphere", "cone"]),
        color: [colors[i][0], colors[i][1], colors[i][2]],
      };

      objects.push(obj);
    }
    p5.lights();
    p5.angleMode(p5.DEGREES);
  };

  p5.draw = () => {
    p5.clear();
    // p5.background(10);

    p5.push();
    p5.rotateX(a);
    p5.rotateY(a);
    a += 0.2;

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

    mouseObj.x += (mouseObj.targetX - mouseObj.x) * 0.005;
    mouseObj.y += (mouseObj.targetY - mouseObj.y) * 0.005;
    p5.push();
    p5.translate(mouseObj.x, mouseObj.y, mouseObj.z);
    p5.fill(255);
    p5.cone(mouseObj.r);
    p5.pop();
  };

  p5.windowResized = () => {
    p5.clear();
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.redraw();
  };

  p5.mouseMoved = () => {
    mouseObj.targetX = p5.mouseX - p5.width / 2;
    mouseObj.targetY = p5.mouseY - p5.height / 2;
  };
};

export const heroSketch3 = (p5: P5CanvasInstance) => {
  let squares: Record<string, number>[] = [];
  const dim = 93;
  let currentGlowing: number[] = [];
  const glowCount = 10;

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    currentGlowing = Array.from({ length: glowCount }, () =>
      Math.floor(p5.random(squares.length)),
    );
    const rows = p5.height / dim;
    const cols = p5.width / dim;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const square = {
          x: x * dim,
          y: y * dim,
        };
        squares.push(square);
      }
    }
    p5.noFill();
    p5.stroke(128, 25);
    squares.forEach((s, i) => {
      p5.push();
      if (currentGlowing.includes(i)) {
        p5.stroke(128, 100);
        p5.fill(125, 5);
      }
      p5.rect(s.x, s.y, dim);
      p5.pop();
    });
  };

  p5.draw = () => {
    p5.clear();
    squares.forEach((s, i) => {
      p5.push();
      if (currentGlowing.includes(i)) {
        p5.stroke(128, 100);
        p5.fill(125, 5);
      }
      p5.rect(s.x, s.y, dim);
      p5.pop();
    });
    if (p5.frameCount % 30 === 0) {
      currentGlowing = Array.from({ length: glowCount }, () =>
        Math.floor(p5.random(squares.length)),
      );
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);

    squares = [];
    const rows = p5.height / dim;
    const cols = p5.width / dim;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const square = {
          x: x * dim,
          y: y * dim,
        };
        squares.push(square);
      }
    }
    p5.noFill();
    p5.stroke(128, 25);
    squares.forEach((s) => {
      p5.rect(s.x, s.y, dim);
    });
  };

  p5.mouseMoved = () => {};
};

export const GlobalWrapperStyle = createGlobalStyle`
  .${P5WrapperClassName}>canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 110vh;
      filter: blur(1px);
      background-image: linear-gradient(#050505, #54a7e920);

      }
      `;
