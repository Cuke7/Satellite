var earth_radius=50;
var altitude=earth_radius+100;
var s_speed=0.04;

function setup() {
  var canvas = createCanvas(500, 500, WEBGL);
  canvas.position(window.innerWidth/2-width/2, window.innerHeight/2-height/2);
  frameRate(30);
}

function draw(){
  background(0);
  fill(60,60,200);
  rotateZ(-10);
  sphere(earth_radius);
  rotateX(frameCount*s_speed);
  translate(0,0,altitude);

  fill(155);
  box(40,20,20);
  translate(0,0,11);
  fill(50);
  sphere(10);
  translate(0,0,-11);

  translate(-40,0,0);
  fill(255,30,30);
  box(30,30,5);
  translate(80,0,0);
  box(30,30,5);
}
