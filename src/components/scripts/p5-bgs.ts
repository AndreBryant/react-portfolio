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
    [33, 9, 78],
    [61, 18, 109],
    [80, 51, 73],
    [105, 65, 63],
  ];

  const count = 5;
  let a = 0;

  p5.setup = () => {
    // TODO: Fixed shapes and dimensions for the 3d figures
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    const range = 100;
    for (let i = 0; i < count; i++) {
      const obj = {
        x: p5.random(-range, range),
        y: p5.random(-range, range),
        z: p5.random(-range, range),
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
    p5.background(20);

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

export const GlobalWrapperStyle = createGlobalStyle`
  .${P5WrapperClassName} {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // z-index: 10;
      }
      `;
