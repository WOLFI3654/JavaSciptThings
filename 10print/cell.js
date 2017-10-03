function Cell(x, y) {

  this.x = x;
  this.y = y;
  this.dir = random(1) < 0.5;
  this.colorTop = 0;
  this.colorBottom = 0;
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


  this.poorLiquid = function(from, color) {
    if (from == "top") {
      this.colorTop = color;
      if (this.dir) {
        pourTo = cells[this.y / spacing][this.x / spacing + 1];
        if (pourTo) {
          pourTo.poorLiquid("left", color);
        }
      } else {
        pourTo = cells[this.y / spacing][this.x / spacing - 1];

        if (pourTo) {
          pourTo.poorLiquid("right", color);

        }
      }

    } else if (from == "left") {
      if (this.dir) {
        this.colorBottom = color;
        pourTo = cells[this.y / spacing + 1][this.x / spacing];
        if (pourTo) {
          pourTo.poorLiquid("top", color);
        }
      } else {
        this.colorTop = color;
        if (!gravity && this.y != 0) {
          pourTo = cells[this.y / spacing - 1][this.x / spacing];
          if (pourTo) {
            pourTo.poorLiquid("bottom", color);
          }
        }
      }
    } else if (from == "right") {
      if (!this.dir) {
        this.colorBottom = color;
        if (this.y / spacing < height / spacing) {
          pourTo = cells[this.y / spacing + 1][this.x / spacing];
          if (pourTo) {
            pourTo.poorLiquid("top", color);
          }
        }
      } else {
        this.colorTop = color;
        if (!gravity && this.y != 0) {
          pourTo = cells[this.y / spacing - 1][this.x / spacing];
          if (pourTo) {
            pourTo.poorLiquid("bottom", color);
          }
        }
      }
    } else if (from == "bottom" && !gravity) {
      this.colorBottom = color;
      if (this.dir) {
        pourTo = cells[this.y / spacing][this.x / spacing - 1];

        if (pourTo) {
          pourTo.poorLiquid("right", color);

        }
      } else {
        pourTo = cells[this.y / spacing][this.x / spacing + 1];
        if (pourTo) {
          pourTo.poorLiquid("left", color);
        }
      }

    }
  }


  this.resetColor = function() {
    this.colorTop = color(0);
    this.colorBottom = color(0);
  }
}
