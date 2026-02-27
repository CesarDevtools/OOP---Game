class Player {
  constructor() {
    this.width = 10;
    this.height = 15;
    this.positionX = 40 - (this.width / 2);
    this.positionY = 0;
    

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
    this.width = 5;
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

// create obstacle
setInterval(() => {
  const newObstacle = new Obstacle();
  obstacArr.push(newObstacle);
}, 2000);

//move obstacle
setInterval(() => {
  obstacArr.forEach((obstacleInstance) => {
    //move
    obstacleInstance.moveDown();

    //detect collision
    if (
        player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
    player.positionX + player.width > obstacleInstance.positionX &&
    player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
    player.positionY + player.height > obstacleInstance.positionY
    ) {
        location.href = "gameover.html"
    }
  });
}, 16.66);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    player.moveLeft();
  } else if (e.code === "ArrowRight") {
    player.moveRight();
  }
});
