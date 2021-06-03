/*
 * @name Letters
 * @description Letters can be drawn to the screen by loading a font, setting
 * its characteristics and then drawing the letters. This example uses a for
 * loop and unicode reference numbers to automatically fill the canvas with
 * characters in a grid. Vowels are selected and given a specific fill color.
 */

//P5js Code
//Credits to Karen Ann Donnachie for this Type Sampler/GENFONT code, which has been edited and adapted by me for A to the K Studio, 2021

let font, counter, letter,cnv;
let fontsize ;
let r, g, b; // random colour generator

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('data/SourceSansPro-Regular.otf');
  font = loadFont('data/GenerativeWaves.otf');
}

function setup() {
  r = random(240); //random colour generated
  g = random(240); // not set all the way to 255 as the background is 255
  b = random(240);
  
  createCanvas(windowWidth, windowHeight);
  //fill(r, g ,b);
  counter=54; // start with another character other than capital A as my typeface doesn't have capital letters
  letter = char(counter);
  // Set text characteristics
  textFont(font);
  textSize(500);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
    // Draw the letter to the screen
    fill(r, g ,b); //different colour woth each letter drawn
    text(letter, windowWidth/2, windowHeight*0.4);
  
  push();
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);
    textFont('Helvetica');
    text("type in lowercase and punctuations, click for more colours~", windowWidth/2, windowHeight*0.85);
  pop();
  push();
    textSize(45);
    textAlign(CENTER, CENTER);
    fill(255);
    text("hit space to play with generative waves!", windowWidth/2, windowHeight*0.9);
  pop();

}
function mousePressed() { //changes colour for current glyph without changing glpyhs
  r = random(240);
  g = random(240);
  b = random(240);
    }
    
function keyTyped(){
  if (key === ' '){
  window.open("https://ktyqq.github.io/GenerativeWavesAtoK/generativewaves/index.html");} //opens second part of sampler
  else {letter=key;
  r = random(240);
  g = random(240);
  b = random(240);
}
}
