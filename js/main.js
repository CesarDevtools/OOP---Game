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

const player = new Player();

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    player.moveLeft();
  } else if (e.code === "ArrowRight") {
    player.moveRight();
  }
});
