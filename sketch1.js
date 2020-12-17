let pos = 0.5;
let largo = 0.5;
let swingMotion = false;
let motion = 0;
let easing = 0.05;
let diameter;

function setup() {


    widthSize = windowWidth/1;
    heightSize = windowHeight/1;
    canvas = createCanvas(widthSize,heightSize);
    canvas.position(0,0);
    canvas.style('z-index', '-1');


//   createCanvas(400, 400);
  angleMode(RADIANS); 
  textAlign(CENTER);
  textSize(heightSize*0.080);
  textStyle(BOLD);
  textFont('Heebo');
  diameter = heightSize/1.2;

}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function draw() {
  background(254);
  let semi = color('#F6615A');
  let nameT = color('#FBB53D');
  noStroke();

//   rect(100,0,100,largo,50);
  fill(nameT);
  text("Hi There, I'm Themis", windowWidth / 2, windowHeight / 2 - 50);
  fill(0);
  text("Product Designer", windowWidth / 2, windowHeight / 2 + 100);
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  
 
  push();
  translate(widthSize / 2, heightSize / 2-50);
  // rotate(a);
  rotate(pos);
  noStroke();
  fill(semi);
  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = -2;
  drawingContext.shadowBlur = 8;
  drawingContext.shadowColor = 'grey';
  arc(0, 0, diameter, diameter, TWO_PI, PI);
  pop();

  let targetX = motion;
  let dx = targetX - pos;
  pos += dx * easing;

  if (swingMotion) {
    if (pos > 0.3) {
      motion = -0.01;
    } else if (pos < -0.3) {
      motion = 0.01;
    }
    pos = pos + motion;
  }
  
}

function mouseWheel(event) {
  pos += event.delta * 0.02;
  largo += event.delta * 0.05;
  swingMotion = true;
}