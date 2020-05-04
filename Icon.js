class Icon {
  constructor(player, playerName) {
    this.player = player
    this.playerName = playerName

    this.image = (this.player === "player1") ? loadImage("assets/P1.png") : loadImage ("assets/P2.png")
    
    this.x = (this.player === "player1") ? 400 : 1300 
    this.y = 500

    this.textY = 680

    this.width = 300
    this.height = 300

    this.speed = 1
  }

  display() {
    //Icon Setup
    noStroke()
    fill("blue")
    ellipse(this.x, this.y, this.width, this.height)
    
    //Text Setup
    fill ("white")
    textSize(65)
    textAlign(CENTER, CENTER)
    text(this.playerName, this.x, this.textY)
  }

  move() {
    this.y += this.speed;
    if (this.y <= 490 || 520 <= this.y) {
      this.speed = -this.speed;
    }
  }
}