function Cell(x, y) {

  this.x = x;
  this.y = y;
  this.dir = noise(x/spacing,y/spacing) < 0.5;
  this.colorTop = 200;
  this.colorBottom = 100;
  this.show = function() {
    this.drawTop();
    this.drawBottom();
    stroke(255);

    if (this.dir) {
      line(this.x, this.y, this.x + spacing, this.y + spacing);


    } else {
      line(this.x, this.y + spacing, this.x + spacing, this.y);
    }

  }

  this.drawTop = function() {
    fill(this.colorTop);
    noStroke();
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + spacing, this.y);
    if (this.dir) vertex(this.x + spacing, this.y + spacing); else vertex(this.x, this.y + spacing);
    endShape();
  }

  this.drawBottom = function() {
    fill(this.colorBottom);
    noStroke();
    beginShape();
    vertex(this.x, this.y + spacing);
    vertex(this.x + spacing, this.y + spacing);
    if (this.dir) vertex(this.x, this.y); else vertex(this.x + spacing, this.y);
    endShape();
  }


  this.poorLiquid = function(color) {
    this.color = color;
  }
}
