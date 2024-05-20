// import { useEffect, useRef } from 'react';
// import p5 from 'p5';
// import { getCharacter, handleKeyPress } from '../character/character.js';

// function Sketch1() {
//   const sketchRef = useRef();

//   useEffect(() => {
//     const sketch = (p) => {
//       let sprite;

//       p.setup = () => {
//         p.createCanvas(p.windowWidth, p.windowHeight);
//         sprite = getCharacter();
//       };

//       p.draw = () => {
//         p.background(200);
//         handleKeyPress(); // Update sprite position based on key press
//         p.drawSprites();
//       };

//       p.windowResized = () => {
//         p.resizeCanvas(p.windowWidth, p.windowHeight);
//       };
//     };

//     const myP5 = new p5(sketch, sketchRef.current);

//     return () => {
//       myP5.remove();
//     };
//   }, []);

//   return (
//     <div ref={sketchRef}></div>
//   );
// }; 

// export default Sketch1;

function Sketch1(p5) {

  let [xPos, yPos] = [100, 100];

  p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);

  p5.draw = () => {
    p5.background(250);

    p5.ellipse(xPos, yPos, 100)

    if (p5.keyIsDown(p5.LEFT_ARROW) === true) {
      xPos -= 5;
    } else if (p5.keyIsDown(p5.RIGHT_ARROW) === true) {
      xPos += 5;
    } else if (p5.keyIsDown(p5.UP_ARROW) === true) {
      yPos -= 5;
    } else if (p5.keyIsDown(p5.DOWN_ARROW) === true) {
      yPos += 5;
    }

  };
} 

export default Sketch1;