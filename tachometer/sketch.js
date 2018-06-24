var locationData;
function preload(){
    locationData =  getCurrentPosition();
}
var p;
function setup() {
  createCanvas(600,300);

}

function draw(){
  background(127);
  textSize(20);
  text(locationData.longitude,0,0);
  text(locationData.latitude,0,10);
  text(locationData.speed,0,20);


}
