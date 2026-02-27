class Player {
  constructor() {
    this.positionX = 40;
    this.positionY = 0;
    this.width = 30;
    this.height = 15;

    this.updateUI();
  }

  updateUI() {
    const playerElem = document.getElementById("player");
    playerElem.style.left = `${this.positionX}vw`;
    playerElem.style.bottom = `${this.positionY}vh`;
    playerElem.style.height = `${this.height}vh`;
    playerElem.style.width = `${this.width}vw`;
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX--;
      this.updateUI();
    }
  }

  moveRight() {
    if (this.positionX < 100 - this.width) {
      this.positionX++;
      this.updateUI();
    }
  }
}

class Obstacle {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.positionX = Math.floor(Math.random() * (100 - this.width));
    this.positionY = 100;
    this.obstacleElm = null;

    this.createDomElem();
    this.updateUI()
  }

  createDomElem() {
    this.obstacleElm = document.createElement("div");

    this.obstacleElm.className = "obstacle";

    const parentElem = document.getElementById("board");
    parentElem.appendChild(this.obstacleElm);
  }

  updateUI() {
    this.obstacleElm.style.left = `${this.positionX}vw`;
    this.obstacleElm.style.bottom = `${this.positionY}vh`;
    this.obstacleElm.style.height = `${this.height}vh`;
    this.obstacleElm.style.width = `${this.width}vw`;
  }

  moveDown() {
    this.positionY--;
    this.updateUI()
    
  }
}

const player = new Player();

const obstacle1 = new Obstacle();
const obstacArr = [];

setInterval(() => {
  const newObstacle = new Obstacle();
  obstacArr.push(newObstacle);
}, 4000);

setInterval(() => {
  obstacArr.forEach((element) => {
    element.moveDown();
  });
}, 10000);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    player.moveLeft();
  } else if (e.code === "ArrowRight") {
    player.moveRight();
  }
});
