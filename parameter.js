let x = 0, y = 0;
let radius = 200;
let angle;
let a;
var slider;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  angle = 0;
  a = 0;
  slider = createSlider(0,40,1);
  slider.position(20,50);
  slider.style('width','150px');
}

function draw() {
  background(20);
  fill(250);
  textSize(20);
  text("Velocity: "+slider.value()+" deg/sec",110,35);
  translate(width / 2, height / 2);
  drawGrid();
  noFill();
  stroke(250);
  strokeWeight(5);
  ellipse(0, 0, radius * 2, radius * 2);
  strokeWeight(4);
  point(0, 0);
  line(0,-height/2,0,height/2);
  line(-width/2,0,width/2,0);
  plotCoordinates();
  stroke(250);
  strokeWeight(4);
  line(0, 0, radius * cos(angle), radius * sin(angle));
  textSize(24);
  fill(0);
  textAlign(CENTER, CENTER);
  
  // Map the angle and use modulus to keep it within 0 to 360
  a = map(angle, 0, 360, 0, 360) % 360;
  
  text(radius + "cos(" + abs(round(a)) + ") , " + radius + "sin(" + abs(round(a)) + ")", radius * cos(angle) + 60, radius * sin(angle) + 60);
  strokeWeight(1);
  stroke(250);
  fill(220, 20, 60);
  ellipse(radius * cos(angle), radius * sin(angle), 40, 40);
  angle -=slider.value();
}
function drawGrid()
{
   noFill();
  stroke(118,205,38);
  strokeWeight(1);
  for(let i=-width/2; i<=width/2; i+=40){
    line(i,-height/2,i,height/2);
  
  }
  
  for(let j=-height/2; j<=height/2; j+=40){
    line(-width/2,j,width/2,j);
  }

}
function plotCoordinates()
{
  noFill();
  strokeWeight(1);
  textSize(20);
  for(let i=-width/2; i<=width/2; i+=40){
    stroke(255,36,0);
    textStyle(NORMAL);
    // let w=map(i,-width/2,width/2,-(width/2)%40,(width/2)%40);
    // text(round(w),i,14);
  
  }
}