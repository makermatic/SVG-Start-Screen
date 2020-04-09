//global vars
let headerFont
let subFont
let screen

function preload () {
  
}

function setup () {
  screen = createVideo("/assets/Starting Screen.mp4")
  screen.play()
  screen.size (1920, 1080)
  createCanvas(screen.size())
  background("beige")
  frameRate(30)
}

function draw() {
}