//global vars
let subFont
let rl
let timer
let lightShade
let darkShade

let counter = 0


function preload() {
  subFont = loadFont("/assets/proxima.otf")
  rl = loadImage("/assets/RL_ Background.jpg")
  lightShade = loadImage("/assets/Light Shade.png")
  darkShade = loadImage("/assets/Dark Shade.png")
}

function setup() {
  createCanvas(1920, 1080)
  frameRate(30) //<--cap framerate to match gif
  background(rl)
}

function draw() {

  p1 = new Icon("player1")
  p1.display()

  p2 = new Icon("player2", "Skull Kid")
  p2.display()

}

function Shades() {
  var leftShade = {
    x: 100, 
    y: 100, 
    scaleX: 1920,
    scaleY: 1080,
    counter: 0,
    image (lightShade, x, y, scaleX, scaleY)

  var RightShade = {
    x: 100, 
    y: 100, 
    x2: 100, 
    y2: 100,
    image ()
  }
  }
}