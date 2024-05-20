import p5 from 'p5';

let sharedP5;
let sprite;

const setupSharedP5 = () => {
  if (!sharedP5) {
    sharedP5 = new p5(() => {});
    sprite = sharedP5.createWriter(sharedP5.width / 2, sharedP5.height / 2, 50, 50);
  }
};

const getCharacter = () => {
  setupSharedP5();
  return sprite;
};

const handleKeyPress = () => {
  setupSharedP5();
  if (sharedP5.keyIsDown(sharedP5.LEFT_ARROW)) {
    sprite.position.x -= 5;
  }
  if (sharedP5.keyIsDown(sharedP5.RIGHT_ARROW)) {
    sprite.position.x += 5;
  }
  if (sharedP5.keyIsDown(sharedP5.UP_ARROW)) {
    sprite.position.y -= 5;
  }
  if (sharedP5.keyIsDown(sharedP5.DOWN_ARROW)) {
    sprite.position.y += 5;
  }
};

export { getCharacter, handleKeyPress };

