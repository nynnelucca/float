var movements = ["//arm", "//head", "move", "move", "//hips"]

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
}

function draw() {
  background(255);
  boundary();
  guidingPrinciples();
  you();
  execute();
}

function boundary() {
  rectMode(CENTER);
  push()
  stroke(0, random(0,100));
  rect(innerWidth/2, innerHeight/2, 500, 500);
  pop();
}

function guidingPrinciples() {
  strokeWeight(0.5);
  line(innerWidth/2, innerHeight/6, innerWidth/2, innerHeight/1.2);
  strokeWeight(0.5);
  line(innerWidth/3.24, innerHeight/2, innerWidth/1.45, innerHeight/2);
}

function you() {
  rect(random(innerWidth/3.5, innerWidth/3.2), 400, 50, 50);
}

function execute() {
  text(random(movements), 100, 100);
}
