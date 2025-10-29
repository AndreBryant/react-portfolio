import { P5WrapperClassName, type P5CanvasInstance } from "@p5-wrapper/react";
import { createGlobalStyle } from "styled-components";

export const heroSketch3 = (p5: P5CanvasInstance) => {
  let squares: Record<string, number>[] = [];
  let currentGlowing: number[] = [];

  const dim: number = 93;
  const glowCount: number = 10;

  let rows: number;
  let cols: number;

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    currentGlowing = Array.from({ length: glowCount }, () =>
      Math.floor(p5.random(squares.length)),
    );
    rows = Math.ceil(p5.height / dim);
    cols = Math.ceil(p5.width / dim);

    for (let y = -1; y <= rows; y++) {
      for (let x = -1; x <= cols; x++) {
        const square = {
          x: x * dim,
          y: y * dim,
        };
        squares.push(square);
      }
    }

    p5.noFill();
    p5.stroke(128, 15);

    squares.forEach((s, i) => {
      p5.push();
      if (currentGlowing.includes(i)) {
        p5.stroke(128, 50);
        p5.fill(125, 5);
      }
      p5.rect(s.x, s.y, dim);
      p5.pop();
    });

    p5.frameRate(1);
  };

  p5.draw = () => {
    currentGlowing = Array.from({ length: glowCount }, () =>
      Math.floor(p5.random(squares.length)),
    );

    p5.clear();

    squares.forEach((s, i) => {
      p5.push();
      if (currentGlowing.includes(i)) {
        p5.stroke(128, 50);
        p5.fill(125, 5);
      }

      p5.rect(s.x, s.y, dim);
      p5.pop();
    });
  };

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);

    squares = [];
    rows = Math.ceil(p5.height / dim);
    cols = Math.ceil(p5.width / dim);

    for (let y = -1; y <= rows; y++) {
      for (let x = -1; x <= cols; x++) {
        const square = {
          x: x * dim,
          y: y * dim,
        };
        squares.push(square);
      }
    }

    p5.noFill();
    p5.stroke(128, 15);

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
};

export const GlobalWrapperStyle = createGlobalStyle`
  .${P5WrapperClassName}>canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 110vh;
      z-index: 0;
      filter: blur(1px);
      background-image: linear-gradient(#080808, #54a7e920);

      }
      `;
