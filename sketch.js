//global vars
let subFont
let p1
let p2

function preload() {
  p1 = new Icon("player1", "Kiddo")
  p2 = new Icon("player2", "Skull Kid")
  subFont = loadFont("/assets/proxima.otf")
}

function setup() {
  createCanvas(1920, 1080)
  frameRate(30) //cap framerate to match gif
  textFont(subFont)
}

function draw() {
  background ("beige") //added for testing purposes
  p1.display()
  p2.display()

  p1.move()
  p2.move()
}