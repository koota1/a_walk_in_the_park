

//import React from 'react';
//import Sketch from 'react-p5';
//import 'p5/lib/addons/p5.dom';
//import 'p5/lib/addons/p5.sound';

import customFont from "../../assets/fonts/Redaction35-Italic.otf";

const Sketch3 = (p5) => {
  let inputElem;

  const preload = (p5) => {
    p5.customFont = p5.loadFont(customFont);
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.textFont(p5.customFont);
    p5.textSize(28);
    p5.fill(255);
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.text("Write anything :)", 0, 0);

    inputElem = p5.createInput('');
    inputElem.input(() => onInput(p5));
    inputElem.position(260, 20);

    const button = p5.createButton('save image');
    button.position(p5.windowWidth - 96, 20);
    button.mousePressed(() => saveDrawing(p5));
  };

  const saveDrawing = (p5) => {
    p5.save("mySketch.png");
  };

  const onInput = (p5) => {
    p5.clear();
    p5.text("Write anything :)", 24, 40);

    let positions = [];
    for (let i = 0; i < 20; i++) {
      let x = p5.random(p5.width);
      let y = p5.random(p5.height);
      positions.push({ x, y });
    }

    p5.stroke("black");
    p5.strokeWeight(1);
    for (let i = 0; i < positions.length - 1; i++) {
      p5.line(positions[i].x, positions[i].y, positions[i + 1].x, positions[i + 1].y);
    }

    p5.strokeWeight(2);
    for (let i = 0; i < positions.length; i++) {
      p5.push();
      p5.translate(positions[i].x, positions[i].y);
      p5.stroke(p5.random(255), p5.random(255), p5.random(255));
      p5.rotate(p5.random(2 * p5.PI));
      p5.text(inputElem.value(), 0, 0);
      p5.pop();
    }
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5) => {

  };

  return (
    <Sketch3 preload={preload} setup={setup} draw={draw} windowResized={windowResized} />
  );
};

export default Sketch3;