var locationData;
function preload(){
    locationData =  getCurrentPosition();
}
var p;
function setup() {
  createCanvas(600,300);
  p = createP(locationData.speed);
}

function draw(){
  p.remove();
  p = createP(locationData.speed);
}
