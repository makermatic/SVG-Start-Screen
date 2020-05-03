class Icon {
  constructor(player, playerName) {
    this.player = player
    this.playerName = playerName
    this.image
    this.x = 
    this.y = 500
    this.textY = 680
    this.width = 300
    this.height = 300
    this.speed = 35
  }

  loadImages() {
    this.p1 = loadImage("assets/P1.png")
    this.p2 = loadImage("assets/P2.png")
  }

  imagePick() {
    if (this.player === "player1") {
      this.image === this.p1
      this.x === 200
    }
    else if (this.player === "player2") {
      this.image === this.p2
      this.x = 1300
    }
    else {
      console.log("Master Zack Says: Failed to load images, you may want to check the spelling of your images again.")
    }
  }

  display() {
    //Text Setup
    noStroke()
    fill("blue")
    ellipse(this.x, this.y, this.width, this.height)
    
    //Text Setup
    fill ("white")
    textSize(65)
    textAlign(CENTER, CENTER)
    text(this.playerName, this.x, this.textY)
  }

  move () {
    this.y++
    console.log ("y:", this.y)
    if (this.y === 520) {
      this.y = this.y - 2
    }
    if (this.y === 490) {
      this.y = this.y + 2
    }
  }
}