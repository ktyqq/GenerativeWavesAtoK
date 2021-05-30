var t;
var title = 'welcome to \n generative waves';
var myText = 'click to pause/play, press r to clear and enter to save!';
var starttext = 'hit r to start!';
var shouldDisplay = true;
var instruct = true;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  stroke(10, 100);
  noFill();
  t = 0;
  background(255);
  frameRate(20);
}

function preload(){
  font1 = loadFont('data/GenerativeWaves.ttf');
}

function draw() {
  
if(shouldDisplay){
  stroke(10, 100);
  noFill();
//curves generating
  var x1 = width  * noise(t + 10);
  var x2 = mouseX * noise(t + 20);
  var x3 = width * noise(t + 30);
  var x4 = mouseX * noise(t + 40);
  var y1 = mouseY * noise(t + 50);
  var y2 = height * noise(t + 60);
  var y3 = mouseY * noise(t + 70);
  var y4 = height * noise(t + 80);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.009;
  }

 if(instruct){
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
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  text(myText, windowWidth/2, 0.8*windowHeight);
  fill(62, 131, 181);
  textSize(30);
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  textStyle(ITALIC);
  text(starttext, windowWidth/2, 0.85*windowHeight);
  pop();
  }
}
  

function mousePressed(){
  shouldDisplay = !shouldDisplay;
}

function keyPressed() {
  if (keyCode === 82) {
  instruct = false;
  clear();
  }
  if (keyCode === ENTER) {
    save();
  } 
}
