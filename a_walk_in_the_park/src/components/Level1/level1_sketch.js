function Sketch1(p5) {
  let [xPos, yPos] = [100, 100];
  const squareSize = 100;
  const staticSquare = { x: p5.windowWidth / 2, y: p5.windowHeight / 2, size: 40 };
  let character = "ellipse";
  let font;
  // '../../assets/fonts/Redaction35-Italic.otf'

  p5.setup = () => {

    // p5.loadFont('../../assets/fonts/Redaction35-Italic.otf', font => {
    //   p5.fill('black');
    //   p5.textFont(font);
    // });

    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.textAlign(p5.LEFT, p5.TOP);
    p5.textSize(24);
    p5.strokeWeight(1);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowheight, p5.WEBGL);
  };

  p5.updateWithProps = (props) => {
    if (props.character) {
      character = props.character.character;
    }
  };

  p5.draw = () => {

    p5.background(255)

    if (character === "square") {
      p5.square(xPos, yPos, squareSize);
    } else {
      p5.ellipse(xPos, yPos, squareSize);
    }

    // p5.push();
    // p5.translate(staticSquare.x - p5.width / 2, staticSquare.y - p5.height / 2);
    // p5.rect(0, 0, staticSquare.size, staticSquare.size);
    // p5.pop();

    p5.rect(0, 0, staticSquare.size, staticSquare.size);



    // p5.push();
    // p5.translate(xPos - p5.width / 2, yPos - p5.height / 2);
    // p5.square(0, 0, squareSize);
    // p5.pop();

    // p5.push();
    // p5.translate(-p5.width / 2, -p5.height / 2); // Align to top-left corner
    // // p5.text('[ tutorial ]', 20, 20);
    // // p5.text("you can't pass through some objects", 20, 60);
    // // p5.text("click to draw!", 20, 100);
    // p5.pop();

    if (p5.keyIsDown(p5.LEFT_ARROW)) {
      const newXPos = xPos - 5;
      if (
        newXPos >= -p5.width / 2 &&
        !isColliding(newXPos, yPos, squareSize, staticSquare)
      ) {
        xPos = newXPos;
      }
    } else if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      const newXPos = xPos + 5;
      if (
        newXPos + squareSize <= p5.width / 2 &&
        !isColliding(newXPos, yPos, squareSize, staticSquare)
      ) {
        xPos = newXPos;
      }
    } else if (p5.keyIsDown(p5.UP_ARROW)) {
      const newYPos = yPos - 5;
      if (
        newYPos >= -p5.height / 2 &&
        !isColliding(xPos, newYPos, squareSize, staticSquare)
      ) {
        yPos = newYPos;
      }
    } else if (p5.keyIsDown(p5.DOWN_ARROW)) {
      const newYPos = yPos + 5;
      if (
        newYPos + squareSize <= p5.height / 2 &&
        !isColliding(xPos, newYPos, squareSize, staticSquare)
      ) {
        yPos = newYPos;
      }
    }
  };

  const isColliding = (x1, y1, size1, staticSquare) => {
    const x2 = staticSquare.x;
    const y2 = staticSquare.y;
    const size2 = staticSquare.size;

    return !(
      x1 + size1 < x2 ||
      x1 > x2 + size2 ||
      y1 + size1 < y2 ||
      y1 > y2 + size2
    );
  };

  // p5.updateWithProps = props => {
  //   if (props.character === 'square') {
  //     p5.square(xPos, yPos, 100);
  //   } else if (props.character === 'ellipse') {
  //     p5.ellipse(xPos, yPos, 100);
  //   } else {
  //     p5.text("Shape not recognized", xPos, yPos);
  //   }
  // };
}

export default Sketch1;
