var locationData;
function preload(){
    locationData =  getCurrentPosition();
}
var p;
function setup() {
    print(locationData.latitude)
    print(locationData.longitude)
    print(locationData.accuracy)
    print(locationData.altitude)
    print(locationData.altitudeAccuracy)
    print(locationData.heading)
    print(locationData.speed)
    p =
}

function draw(){
  createP(locationData.latitude);
  createP(locationData.longitude);
  createP(locationData.speed);
}
