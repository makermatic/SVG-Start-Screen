class Icon {
  constructor(player, playerName, crown, score) {
    this.player = player
    this.playerName = playerName

    this.crown = crown
    this.crownImage = loadImage("assets/crown.png")

    this.score = score

    this.image = (this.player === "player1") ? loadImage("assets/P1.png") : loadImage("assets/P2.png")

    this.x = (this.player === "player1") ? 250 : 1350
    this.y = 400

    this.textY = 740

    this.width = 300
    this.height = 300

    this.speed = 1
  }

  display() {
    //Icon Setup
    noStroke()
    fill(this.player === "player1" ? "red" : "blue")
    image(this.image, this.x, this.y, this.width, this.height)

    //Text Setup
    fill("white")
    textSize(65)
    textAlign(CENTER, CENTER)
    textFont(subFont)
    text(this.playerName, this.x + 150, this.textY)

    //Crown Setup
    if (this.crown === "win") {
      image (this.crownImage, this.x + 200, this.y - 25, 70, 70)
    }

    //Score Setup
    textFont (headFont)
    textSize (150)
    if (this.score != null && this.player === "player1") {
      text (this.score, this.x + 430, 480)
    } else if (this.player === "player2") {
      text (this.score, this.x - 150, 480)
    }
  }

  move() {
    this.y += this.speed;
    if ((this.player === "player1") && (this.y <= 393 || 420 <= this.y)) {
      this.speed = -this.speed;
    } else if (this.y <= 390 || 423 <= this.y) {
      this.speed = -this.speed;
    }
  }
}