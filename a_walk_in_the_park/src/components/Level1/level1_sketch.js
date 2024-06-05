
function Sketch1(p5) {

  let [xPos, yPos] = [100, 100];

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.background(255);
    p5.textSize(24);
    p5.strokeWeight(1);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowheight, p5.WEBGL);
  }

  p5.draw = () => {
    p5.background(250);

    p5.square(xPos, yPos, 100);
    // if (character === 'square') {
    //   p5.square(xPos, yPos, 100);
    // } else {
    //   p5.ellipse(xPos, yPos, 100);
    // }
  
    p5.text('[ tutorial ]', 20, 20);
    p5.text("you can't pass through some objects", 10, 20, 5);
    p5.text("click to draw!", 90, 60);
    p5.rect(20, 35, 40, 40);

    if (p5.keyIsDown(p5.LEFT_ARROW) === true) {
      xPos -= 5;
    } else if (p5.keyIsDown(p5.RIGHT_ARROW) === true) {
      xPos += 5;
    } else if (p5.keyIsDown(p5.UP_ARROW) === true) {
      yPos -= 5;
    } else if (p5.keyIsDown(p5.DOWN_ARROW) === true) {
      yPos += 5;
    }
  }

  p5.heart = (x, y, size) => {
    p5.beginShape();
    p5.vertex(x, y);
    p5.bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    p5.bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    p5.endShape(p5.CLOSE);
  }

  p5.levels = () => {
    if(yPos < p5.windowHeight){
      
    }
    
    if(yPos < 1){
      
    }
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
};


export default Sketch1;