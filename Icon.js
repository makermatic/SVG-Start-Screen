class Icon {
  constructor(player, playerName) {
    this.player = player
    this.playerName = playerName
    this.image
    this.x = 150
    this.y = 0
    this.width = 0
    this.height = 0
    this.speed = 35
  }

  loadImages() {
    this.p1 = loadImage("assets/P1.png")
    this.p2 = loadImage("assets/P2.png")
  }

  imagePick() {
    if (this.player === "player1") {
      this.image === this.p1
      this.x === 150
    }
    else if (this.player === "player2") {
      this.image === this.p2
      this.x = 400
    }
    else {
      console.log("Master Zack Says: Failed to load images, you may want to check the spelling of your images again.")
    }
  }

  display() {
    fill("blue")
    ellipse(this.x, this.y, this.width, this.height)
    text(this.playerName, this.x, this.y - 50)
  }
}