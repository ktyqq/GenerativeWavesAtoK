//Credits to and Inspired by Gene Kogan's Perlin Noise code, https://genekogan.com/code/p5js-perlin-noise/
//SVG version of this code, used to create the font is stitched together kindly by Karen Ann Donnachie for A to the K studio, 2021

var t;
var title = 'welcome to \n generative waves';
var myText = 'note: this is the code used to create the base of the generative waves typeface, \n most glyphs from the typeface have been created using this code with little to no editing, \n however not every latin glyph may be created without post-editing so please take note! \n now have your go at it! click to pause/play, press r to clear and enter to save!';
var starttext = 'hit r to start!';
var shouldDisplay = true;
var instruct = true;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  stroke(10, 100);
  noFill();
  t = 0;
  background(255);
  frameRate(20); // added frame rate to better control how many curves are produced
}

function preload(){
  font1 = loadFont('data/GenerativeWaves.ttf');
}

function draw() {
  
if(shouldDisplay){
  stroke(10, 100); // changed fill and stroke settings for clarity when produding typeface
  noFill(); 
//curves generating
  var x1 = width  * noise(t + 10);
  var x2 = mouseX * noise(t + 20); //changed var from width n height to mouseX and mouseY for more control over the curve production
  var x3 = width * noise(t + 30);
  var x4 = mouseX * noise(t + 40);
  var y1 = mouseY * noise(t + 50);
  var y2 = height * noise(t + 60);
  var y3 = mouseY * noise(t + 70);
  var y4 = height * noise(t + 80);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.009;
  }

 if(instruct){ //instructions overlay
  //overlay
  rectMode(CENTER);
  noStroke();
  fill(11, 33, 89);
  rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  //titles
  fill(62, 131, 181);
  textFont(font1);
  textSize(120);
  textAlign(CENTER, CENTER);
  text(title, windowWidth/2, windowHeight*0.4);
  push();
  //instructions
  fill(62, 131, 181);
  textSize(15);
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  text(myText, windowWidth/2, 0.8*windowHeight);
  fill(62, 131, 181);
  textSize(30);
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  textStyle(ITALIC);
  text(starttext, windowWidth/2, 0.95*windowHeight);
  pop();
  }
}
  

function mousePressed(){
  shouldDisplay = !shouldDisplay; //pause and play function
}

function keyPressed() {
  if (keyCode === 82) {
  instruct = false; //clear screen functions
  clear();
  }
  if (keyCode === ENTER) {
    save(); // save .png function
  } 
}
