//global vars
let subFont
let p1
let p2

function preload() {
  p1 = new Icon("player1", "Kiddo")
  p1.loadImages()
  p2 = new Icon("player2", "Skull Kid")
  p2.loadImages()
  subFont = loadFont("/assets/proxima.otf")
}

function setup() {
  createCanvas(1920, 1080)
  frameRate(30) //cap framerate to match gif
  background ("beige") //added for testing purposes
  textFont(subFont)
}

function draw() {
  p1.imagePick()
  p1.display()
  p2.imagePick()
  p2.display()
}