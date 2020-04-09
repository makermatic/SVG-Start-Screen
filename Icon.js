class Icon {
  constructor(player, playerName) {
    this.player = player
    this.playerName = playerName
    this.image
    this.x = 150
    this.x
    this.y = 0
    this.up = 0
    this.down = 0
    this.speed = 35
    this.p1 = loadImage("assets/P1.png")
    this.p2 = loadImage("assets/P2.png")
  }

  display() {
    if (this.player === "player1") {
      this.image === this.p1
    }
    else if (this.player === "player2") {
      this.image === this.p2
      this.image = loadImage("assets/P1.png")
      this.x = 100
    }
    else if (this.player === "player2") {
      this.image = loadImage("assets/P2.png")
      this.x = 900
    }
    else {
      console.log("Master Zack Says: Failed to load images, you may want to check the spelling of your images again.")
    }

    texture(this.image)
    ellipse(this.x, this.y, width, height)
    fill(this.image)
    ellipse(this.x, this.y, this.up, this.down)
    text(this.playerName, this.x, this.y - 50)
  }

  move() {

  }
}