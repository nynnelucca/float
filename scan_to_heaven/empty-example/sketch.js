
var myFont;
var on = false;

function preload() {
  myFont = loadFont('assets/BarcodeFont.ttf');
}

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  if (on) {
    background(0, 0, 200, 40);
    textSize(random(200,600));
  } else {
    background(255);
    textSize (200);
  }
  if  (mouseX > 500 && mouseX < 950 && mouseY > 300 && mouseY < 500) {
    fill(150, 0, 0, 120);
  } else {
    fill(180, 100);
  }

  textFont(myFont);
  textAlign(CENTER, CENTER);
  text('scan to heaven', innerWidth/2, innerHeight/2);
}

function mousePressed() {
  console.log(mouseX, mouseY);

    if  (mouseX > 500 && mouseX < 950 && mouseY > 300 && mouseY < 500) {
      on = !on;

    }
  }
