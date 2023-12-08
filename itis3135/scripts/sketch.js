let drawing = false;
let prevX, prevY;

function setup() {
  createCanvas(800, 600);
  background(150); 
}

function draw() {
  if (drawing) {
    drawCircle();
  }
}

function drawCircle() {
  fill(0, 0, 255); 
  noStroke();
  ellipse(mouseX, mouseY, 20, 20); 
}

function mousePressed() {
  drawing = true;
  drawCircle(); 
  prevX = mouseX;
  prevY = mouseY;
}

function mouseReleased() {
  drawing = false;
}