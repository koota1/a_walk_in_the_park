import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import spiralImg from "C:\Users\CS_ba\HCDE 438\a_walk_in_the_park\a_walk_in_the_park\src\assets\images\AWITP Spiral bg.png";

const LoadingScreenSketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let loaded = false;
      let spiral;

      p.preload = () => {
        spiral = p.loadImage(spiralImg);
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.imageMode(p.CENTER);
        p.angleMode(p.DEGREES);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        p.background(255, 255, 255);
        if (!loaded) {
          p.translate(p.width / 2, p.height / 2);
          p.rotate(p.frameCount * 2);
          p.image(spiral, 0, 0, spiral.width / 2, spiral.height / 2);
        }
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} />;
};

export default LoadingScreenSketch;