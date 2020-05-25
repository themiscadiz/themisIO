let canvas;
let widthSize;
let heightSize;


let blob;
let xoff = 0.0;
let yoff = 0.0;
let motionRadius;
let phase = 0;
// ///////////////////////////
let position;
let d;
let inside;
let xOff1 = 0;
let xOff2 = 10000;
let posV;





function setup(){

    widthSize = windowWidth/1;
    heightSize = windowHeight/1;
    canvas = createCanvas(widthSize,heightSize);
    canvas.position(0,0);
    canvas.style('z-index', '-1');


    blob = createVector(0, 0);

///////////// 
    posV = createVector(width / 2, height / 2);


}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}


function draw(){
    // background(240);

    background(232, 231, 228);


    noFill();
  stroke(0);
  // translate(width/2,height/2);

  beginShape();
//spacing 0.1
  let spacing = 0.1;
  let noiseMax = 1;


  position = createVector(width / 2, height / 2);
  inside = createVector(mouseX, mouseY);

  
  for (let a = 0; a < TWO_PI; a += spacing) {
    
    xoff = map(cos(a + phase),-1,1,0,noiseMax);
    yoff = map(sin(a + phase),-1,1,0,noiseMax);


    motionRadius = map(noise(xoff, yoff, phase), 0, 1, 50, 400);
    // stroke(41,242,187);
    // fill(41,242,187);
  noStroke();
    // fill(250);
    fill(230,144,111);

    blob.x = motionRadius * sin(a) + width/1.5;
    blob.y = motionRadius * cos(a) + height/2.5;
    
    curveVertex(blob.x, blob.y);
    // noFill();
    // stroke(230,144,111);
    // curveVertex(blob.x, blob.x);
    
    strokeWeight(xoff);
 

 


  }

  if (mouseIsPressed){
    phase -= 0.1;
  }
  else{
  phase -= 0.001;
}

  endShape(CLOSE);

// fill(255,0,0);
//   ellipse(mouseX,mouseY, 100,100);

      // background(240, 60);

      posV.x = map(noise(xOff1), 0, 1, 0, width);
      posV.y = map(noise(xOff2), 0, 1, 0, height);

      fill(137,194,162);
    
      ellipse(posV.x,posV.y,24,24);
    
    
      xOff1 += 0.0007;
      xOff2 += 0.001;
      
    
      
      // position = posV;
    
      for (position.y = 0; position.y < height; position.y += 10 ) {
    
        for (position.x = 0; position.x < width; position.x += 10 ) {
    
          d = p5.Vector.dist(position, blob);
    
          // console.log(d);
          // if (d < inside.x/2 && d < inside.y/2) {
          if (d < blob.x / 3 && d < blob.y / 3) {
    
            // fill(255, 0, 0);
            fill(223, 84, 84);
            stroke(255,0,0);
            strokeWeight(3);
          } else {
            noFill();
            noStroke();
          }
          point(position.x+100, position.y);
        }
      }






}


