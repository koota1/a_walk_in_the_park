function Sketch1(p5) {
  let [xPos, yPos] = [80, 80]; // Centered in WEBGL mode
  const squareSize = 100;
  const staticSquare = { x: 0, y: 0, size: 40 }; // Centered in WEBGL mode
  let character = "ellipse";

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.textAlign(p5.LEFT, p5.TOP);
    p5.textSize(24);
    p5.strokeWeight(1);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  };

  p5.updateWithProps = (props) => {
    if (props.character) {
      character = props.character.character;
    }
  };

  p5.draw = () => {
    p5.background(255);

    p5.push();
    p5.translate(-p5.width / 2, -p5.height / 2); // Adjust for WEBGL coordinates

    if (character === "square") {
      p5.rectMode(p5.CENTER);
      p5.square(xPos + p5.width / 2, yPos + p5.height / 2, squareSize);
    } else {
      p5.ellipseMode(p5.CENTER);
      p5.ellipse(xPos + p5.width / 2, yPos + p5.height / 2, squareSize);
    }

    p5.rectMode(p5.CENTER);
    p5.rect(staticSquare.x + p5.width / 2, staticSquare.y + p5.height / 2, staticSquare.size, staticSquare.size);

    if (p5.keyIsDown(p5.LEFT_ARROW)) {
      const newXPos = xPos - 5;
      if (
        newXPos - squareSize / 2 >= -p5.width / 2 &&
        !isColliding(newXPos, yPos, squareSize, staticSquare)
      ) {
        xPos = newXPos;
      }
    } else if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      const newXPos = xPos + 5;
      if (
        newXPos + squareSize / 2 <= p5.width / 2 &&
        !isColliding(newXPos, yPos, squareSize, staticSquare)
      ) {
        xPos = newXPos;
      }
    } else if (p5.keyIsDown(p5.UP_ARROW)) {
      const newYPos = yPos - 5;
      if (
        newYPos - squareSize / 2 >= -p5.height / 2 &&
        !isColliding(xPos, newYPos, squareSize, staticSquare)
      ) {
        yPos = newYPos;
      }
    } else if (p5.keyIsDown(p5.DOWN_ARROW)) {
      const newYPos = yPos + 5;
      if (
        newYPos + squareSize / 2 <= p5.height / 2 &&
        !isColliding(xPos, newYPos, squareSize, staticSquare)
      ) {
        yPos = newYPos;
      }
    }

    p5.pop();
  };

  const isColliding = (x1, y1, size1, staticSquare) => {
    const x2 = staticSquare.x - staticSquare.size / 2;
    const y2 = staticSquare.y - staticSquare.size / 2;
    const size2 = staticSquare.size;

    return !(
      x1 + size1 / 2 <= x2 || // Check left
      x1 - size1 / 2 >= x2 + size2 || // Check right
      y1 + size1 / 2 <= y2 || // Check top
      y1 - size1 / 2 >= y2 + size2 // Check bottom
    );
  };
}

export default Sketch1;
