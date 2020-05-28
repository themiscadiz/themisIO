let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;


let img20;
let img21;
let img22;
let img23;
let img24;

let imgArray = [];
let num;

let canvas;
let widthSize;
let heightSize;

let nummove;

let pos = 25;

// function preload() {
//   img1 = loadImage('1.png');
//   img2 = loadImage('2.png');
//   img3 = loadImage('3.png');
//   img4 = loadImage('4.png');

//  imgArray = [img1, img2, img3, img4];

// }

function preload() {
  img1 = loadImage('profilepics/1.JPG');
    img2 = loadImage('profilepics/2.JPG');

    img3 = loadImage('profilepics/3.JPG');

    img4 = loadImage('profilepics/4.JPG');

    img5 = loadImage('profilepics/5.JPG');
    img6 = loadImage('profilepics/6.JPG');

    img7 = loadImage('profilepics/7.JPG');

    img8 = loadImage('profilepics/8.JPG');

    img9 = loadImage('profilepics/9.JPG');
    img10 = loadImage('profilepics/10.JPG');
    img11 = loadImage('profilepics/11.JPG');
    img12 = loadImage('profilepics/12.JPG');
    img13= loadImage('profilepics/13.JPG');
    img14= loadImage('profilepics/14.JPG');
    img15= loadImage('profilepics/15.JPG');
    img16= loadImage('profilepics/16.JPG');
    img17= loadImage('profilepics/17.JPG');
    img18= loadImage('profilepics/18.JPG');
    img19= loadImage('profilepics/19.JPG');
    img20= loadImage('profilepics/20.JPG');
    img21= loadImage('profilepics/21.JPG');
    img22= loadImage('profilepics/22.JPG');
    img23= loadImage('profilepics/23.JPG');
    img24= loadImage('profilepics/24.JPG');
}

function setup() {

//     <div id="09_video" class="example-container" data-sketch-src="/sketches/09_video.html">
// </div>

    // let node = document.getElementById('profile_pic');  
    // window.document.getElementsByTagName('section')[1].appendChild(node);
    // new p5(sketch, node);  
     
  widthSize = windowWidth/1;
  heightSize = windowHeight/1;
  canvas = createCanvas(widthSize,heightSize);
  canvas.position(0,1000);
  canvas.style('z-index', '-1');

  imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24];


}


// Functions
function mouseWheel(event) {
  //println(event.delta);
  pos += event.delta;
  posRev = height - 10 - pos;
  console.log(pos);
}



function draw() {
  background(220);

  //   num = int(map(mouseY, 0,height,0,23));
  // image(imgArray[num], 0,0, 400, 600);
  // console.log(num);

  // fill(255,0,0); 
  // rect(0,0, 100,100);

  fill(pos);
  rect(width / 2, height / 2, 100 + pos, 100 + pos);
  
  num = int(map(pos, -500,500,0,23));
  

  if(pos < -500){
    num = 0;
  }
  else if(pos>500){
    num = 23}
  image(imgArray[num], 0,0, 400, 600);

}