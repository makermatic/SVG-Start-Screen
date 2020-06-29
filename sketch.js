//global vars
let subFont
let vs
let p1
let p2

// let timer = 300

function preload() {
  p1 = new Icon("player1", "johnnyPOP")
  p2 = new Icon("player2", "SkullKid", "win")
  subFont = loadFont("/assets/proxima.otf")
  vs = loadFont("/assets/passion.otf")
}

function setup() {
  createCanvas(1920, 1080)
  frameRate(30) //cap framerate to match layout
  textFont(subFont) //declared font in setup() so it locks in text for p1 and p2
}

function draw() {
  clear()
  // background("red") //comment out when done testing

  //Versus text
  fill("white")
  textSize(150)
  textFont(vs)
  textAlign(CENTER, CENTER)
  text("vs", width / 2, height / 2)

  p1.display()
  p2.display()

  p1.move()
  p2.move()

  // //Timer
  // if (frameCount % 30 === 0 && timer > 0) {
  //   timer--
  // }
}