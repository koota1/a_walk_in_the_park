

function Sketch2(p5, props) {

  let numBalls = 25;
  let spring = 0.1;
  let gravity = 0.0;
  let friction = -0.9;
  let balls = [];
  let player;
  let playerSize = 50;
  let score = 0;
  let gameActive = true;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    for (let i = 0; i < numBalls; i++) {
      balls[i] = new Ball(
        p5.random(p5.width),
        p5.random(p5.height),
        p5.random(30, 70),
        i,
        balls,
        p5
      );
    }

    player = new Player(p5.width / 2, p5.height / 2, playerSize, p5);

    p5.noStroke();
    p5.fill(255, 255);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.background(0);

    if (gameActive) {
      score += p5.deltaTime / 1000; // Increment score by time passed in seconds
    }

    player.update();
    player.display();

    balls.forEach(ball => {
      ball.collide();
      ball.move();
      ball.display();
    });

    p5.fill(255);
    p5.textSize(32);
    p5.text(`Score: ${score.toFixed(2)}`, 10, 30);

    // Check for collision between player and balls
    if (player.checkCollision(balls)) {
      gameActive = false;
    }
  };

  class Ball {
    constructor(xin, yin, din, idin, oin, p5) {
      this.x = xin;
      this.y = yin;
      this.vx = 0;
      this.vy = 0;
      this.diameter = din;
      this.id = idin;
      this.others = oin;
      this.p5 = p5;
    }

    collide() {
      for (let i = this.id + 1; i < numBalls; i++) {
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = this.p5.sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].diameter / 2 + this.diameter / 2;
        if (distance < minDist) {
          let angle = this.p5.atan2(dy, dx);
          let targetX = this.x + this.p5.cos(angle) * minDist;
          let targetY = this.y + this.p5.sin(angle) * minDist;
          let ax = (targetX - this.others[i].x) * spring;
          let ay = (targetY - this.others[i].y) * spring;
          this.vx -= ax;
          this.vy -= ay;
          this.others[i].vx += ax;
          this.others[i].vy += ay;
        }
      }
    }

    move() {
      this.vy += gravity;
      this.x += this.vx;
      this.y += this.vy;
      if (this.x + this.diameter / 2 > this.p5.width) {
        this.x = this.p5.width - this.diameter / 2;
        this.vx *= friction;
      } else if (this.x - this.diameter / 2 < 0) {
        this.x = this.diameter / 2;
        this.vx *= friction;
      }
      if (this.y + this.diameter / 2 > this.p5.height) {
        this.y = this.p5.height - this.diameter / 2;
        this.vy *= friction;
      } else if (this.y - this.diameter / 2 < 0) {
        this.y = this.diameter / 2;
        this.vy *= friction;
      }
    }

    display() {
      this.p5.ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }

  class Player {
    constructor(x, y, size, p5) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.p5 = p5;
      this.originalX = x;
      this.originalY = y;
    }

    update() {
      if (!gameActive) return;

      const p5 = this.p5;

      if (p5.keyIsDown(p5.LEFT_ARROW)) {
        const newXPos = this.x - 5;
        if (newXPos >= 0 && !this.isColliding(newXPos, this.y)) {
          this.x = newXPos;
        }
      } else if (p5.keyIsDown(p5.RIGHT_ARROW)) {
        const newXPos = this.x + 5;
        if (newXPos + this.size <= p5.width && !this.isColliding(newXPos, this.y)) {
          this.x = newXPos;
        }
      } else if (p5.keyIsDown(p5.UP_ARROW)) {
        const newYPos = this.y - 5;
        if (newYPos >= 0 && !this.isColliding(this.x, newYPos)) {
          this.y = newYPos;
        }
      } else if (p5.keyIsDown(p5.DOWN_ARROW)) {
        const newYPos = this.y + 5;
        if (newYPos + this.size <= p5.height && !this.isColliding(this.x, newYPos)) {
          this.y = newYPos;
        }
      }
    }

    display() {
      this.p5.fill(255);
      this.p5.rect(this.x, this.y, this.size, this.size);
    }

    isColliding(x, y) {
      for (let ball of balls) {
        let dx = ball.x - x;
        let dy = ball.y - y;
        let distance = this.p5.sqrt(dx * dx + dy * dy);
        let minDist = ball.diameter / 2 + this.size / 2;
        if (distance < minDist) {
          return true;
        }
      }
      return false;
    }

    checkCollision(balls) {
      for (let ball of balls) {
        let dx = ball.x - this.x;
        let dy = ball.y - this.y;
        let distance = this.p5.sqrt(dx * dx + dy * dy);
        let minDist = ball.diameter / 2 + this.size / 2;
        if (distance < minDist) {
          return true;
        }
      }
      return false;
    }
  }
};

export default Sketch2;