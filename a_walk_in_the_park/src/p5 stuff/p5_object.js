function sketch(p5) {

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

export default sketch;

