class Icon {
  constructor(player, playerName) {
    this.player = player
    this.playerName = playerName

    this.image = (this.player === "player1") ? loadImage("assets/P1.png") : loadImage ("assets/P2.png")
    
    this.x = (this.player === "player1") ? 400 : 1450 
    this.y = 500

    this.textY = 690

    this.width = 300
    this.height = 300

    this.speed = 1
  }

  display() {
    //Icon Setup
    noStroke()
    fill(this.player === "player1" ? "red" : "blue")
    ellipse(this.x, this.y, this.width, this.height)
    
    //Text Setup
    fill ("white")
    textSize(65)
    textAlign(CENTER, CENTER)
    textFont(subFont)
    text(this.playerName, this.x, this.textY)
  }

  move() {
    this.y += this.speed;
    if ((this.player === "player1") && (this.y <= 493 || 520 <= this.y)) {
      this.speed = -this.speed;
    } else if (this.y <= 490 || 523 <= this.y) {
      this.speed = -this.speed;
    }
  }
}