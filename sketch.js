var kissImages = [];
var kisses = [];

var img; // stores random kiss image being drawn
var angle; // stores angle of kiss
var scl = 0.25;

// preloads photos and pushes onto kissImages array
// preloads font for background
function preload() {
  font = loadFont('PalaceScript.ttf');
  for (var i = 1; i <= 4; i++) {
    kissImages.push(loadImage(`kiss${i}.png`));
  }
}

// creates canvas of window width, height
function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font); // sets font
  textSize(222); // sets font size
  fill(0); // sets text color
  textAlign(CENTER, CENTER); // aligns text by centre for both vertically and horizontally
}

function draw() {
  background(255); 

  text("A Kiss for You", width / 2, height / 2);

  kisses.forEach(function(kiss) {
    push();
    translate(kiss.x, kiss.y); // changes origin of the coordinate system for image
    rotate(kiss.angle); // rotates kiss by given angle
    imageMode(CENTER); // ensures rotation happens from centre of image
    image(kiss.img, 0, 0, kiss.img.width * scl, kiss.img.height * scl); // draws image
    pop();
  });
}

function mousePressed() {
  img = random(kissImages); // randomizes image selection
  angle = random(TWO_PI); // randomizes angle of rotation
  kisses.push({ img: img, x: mouseX, y: mouseY, angle: angle }); // adds kiss to array 
}