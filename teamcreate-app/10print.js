// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// 10PRINT
// https://www.youtube.com/watch?v=bEyTZ5ZZxZs

let x = 0;
let y = 0;
let spacing = 50;
let index = 0;
var cells = [];
var gravity = false;
function setups() {

  loadCells();
  while (y < height / spacing) genCells();

}

function loadCells() {
  x = 0;
  y = 0;
  index = 0;
  for (var i = 0; i < width / spacing; i++) {
    cells[i] = [];
  }
}

function genCells() {
  cells[y].push(new Cell(x * spacing, y * spacing));
  x = x + 1;
  if (x > width / spacing) {
    x = 0;
    y = y + 1;
  }
}
function draws() {
  stroke(255);
  for (var j = 0; j < height / spacing; j++) {

    for (var i = 0; i < width / spacing; i++) {


      if (cells[i][j]) cells[i][j].show();

    }
  }
  {
    liquid();
  }
}

function liquid() {
  if (index > width / spacing)
    index = 0;
  cells[0][index].poorLiquid("top", color(random(255), random(255), random(255)));
  index = index + 1;
}

function toggleGravity() {
  gravity = !gravity;
  for (var j = 0; j < height / spacing; j++) {

    for (var i = 0; i < width / spacing; i++) {


      if (cells[i][j]) cells[i][j].resetColor();

    }
  }
  index = 0;
}
