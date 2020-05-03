//global vars
let subFont
let timer
let lightShade
let darkShade

let counter = 0


function preload() {
  subFont = loadFont("/assets/proxima.otf")
  lightShade = loadImage("/assets/Light Shade.png")
  darkShade = loadImage("/assets/Dark Shade.png")
}

function setup() {
  createCanvas(1920, 1080)
  frameRate(30) //<--cap framerate to match gif
}

function draw() {

  p1 = new Icon("player1", "Kiddo")
  p1.display()

  p2 = new Icon("player2", "Skull Kid")
  p2.display()

}