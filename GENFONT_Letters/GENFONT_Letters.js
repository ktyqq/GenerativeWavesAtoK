/*
 * @name Letters
 * @description Letters can be drawn to the screen by loading a font, setting
 * its characteristics and then drawing the letters. This example uses a for
 * loop and unicode reference numbers to automatically fill the canvas with
 * characters in a grid. Vowels are selected and given a specific fill color.
 */
let font, counter, letter,cnv;
let fontsize ;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('data/SourceSansPro-Regular.otf');
  font = loadFont('data/GenerativeWaves.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  counter=65;
  letter = char(counter);
  // Set text characteristics
  textFont(font);
  textSize(500);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
    // Draw the letter to the screen
    text(letter, windowWidth/2, windowHeight*0.4);
  
  push();
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);
    textFont('Helvetica');
    text("type, lowercase and punctuations!\n space to save, click to play with generative waves", windowWidth/2, windowHeight*0.9);
  pop();

}
function mousePressed() {
  window.open("https://ktyqq.github.io/GenerativeWavesAtoK/generativewaves/index.html");
    }
    
function keyTyped(){
  if (key === ' '){
  saveCanvas(letter, 'jpg');}
  else {letter=key;}
}
