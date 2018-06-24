var b;
function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  b = createButton("DOWNLOAD");
  b.mousePressed(webpage);
  var x = random(window.innerWidth);
  var y = random(window.innerHeight);
  b.position(x, y);
  b.style("height", "70px");
  b.style("width", "70px")
  angleMode(DEGREES);
  setups();
}
var d = 0;
var tx = window.innerWidth / 2;
var ty = window.innerHeight / 2;

function draw() {
  push();
  translate(window.innerWidth/4,0);
  draws();
  pop();
  push();
  translate(tx, ty);

  fill(color(random(255), random(255), random(255)));
  rotate(d)
  scale(1.15);
  text("Click the DOWNLOAD button to download the app", noise(d) * 50, 0);
  d += 5;
  if (d >= 360) {
    d = 0;
    tx = random(window.innerWidth);
    ty = random(window.innerHeight);
  }
  pop();
  var x = noise(b.x) * window.innerWidth;
  var y = noise(b.y) * window.innerHeight;
  b.position(x, y);

  ellipse(x, y, 10);
}


function webpage() {
  document.location.replace("http://www.notpron.org/notpron/de/leveleins.htm");
}
