// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// 10PRINT
// https://www.youtube.com/watch?v=bEyTZ5ZZxZs

let x = 0;
let y = 0;
let spacing = 20;
let index = 0;
var cells = [];
function setup() {
  createCanvas(400, 400);
  background(0);
  cells.push(new Cell(0, 0));
}
function genCells() {
  cells.push(new Cell(x, y));
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}
function draw() {
  stroke(255);
  for (var i = 0; i < cells.length; i++) {
    cells[i].show();
  }
  if (y < height) genCells();



}

function mouseClicked() {
  index = index + 1;
  x = index * spacing;
  y = 0;
  cells.push(new Cell(x, y));
}
