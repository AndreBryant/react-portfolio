import { P5WrapperClassName, type P5CanvasInstance } from "@p5-wrapper/react";
import { createGlobalStyle } from "styled-components";

export const heroSketch = (p5: P5CanvasInstance) => {
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
  };

  p5.draw = () => {
    p5.clear();
    p5.noLoop();
    p5.background(colors[1][0], colors[1][1], colors[1][2]);
  };

  p5.windowResized = () => {
    p5.clear();
    p5.redraw();
  };
};

export const GlobalWrapperStyle = createGlobalStyle`
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
