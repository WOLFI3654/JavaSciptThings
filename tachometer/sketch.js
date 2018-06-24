var locationData;
function preload(){
    locationData =  getCurrentPosition();
}
var p;
function setup() {
  createCanvas(600,300);

}

function draw(){
  text(locationData.speed,0,0,50,80);
}
