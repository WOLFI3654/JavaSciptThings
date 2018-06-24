// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Wikipedia
// Edited Video: https://www.youtube.com/watch?v=jPsZwrV9ld0


function setup() {
  createCanvas(800 ,720);
  textSize(32);
  fill(52);
}

function draw() {
  background(0);
  stroke(255);
  text("Be Patient", 100 ,100)

  fill(70);
  beginShape(LINES);
  drawCircle(200,200,0);
  endShape();
}

function mouseMoved(){
//  scale(mouseY/100,mouseY/100);
}



async function drawCircle(x, y, d) {
if(d %20 != 0){
  vertex(x,y);

}
if(d>100) return;

drawCircle(x,y-10,d+1);
drawCircle(x+10,y,d+1);
}
