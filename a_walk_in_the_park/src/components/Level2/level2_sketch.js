

function Sketch1(p5, props) {

  let [xPos, yPos] = [100, 100];
  const { character } = props;

  p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);

  p5.draw = () => {
    p5.background(250);

    if (character === 'square') {
      p5.square(xPos, yPos, 100);
    } else {
      p5.ellipse(xPos, yPos, 100);
    }

    // p5.updateWithProps = props => {
    //   if (props.character === 'square') {
    //     p5.square(xPos, yPos, 100);
    //   } else if (props.character === 'ellipse') {
    //     p5.ellipse(xPos, yPos, 100);
    //   } else {
    //     p5.text("Shape not recognized", xPos, yPos);
    //   }
    // };

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