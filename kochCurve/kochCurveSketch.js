var count = 1;
var maxDepth = 10;

function setup() {
    createCanvas(800, 800);
	
	frameRate(1);
}

function draw() {
    background(255);
	
	stroke(0);
	strokeWeight(1);
	translate(50,200);
	
	snowflake(width-150,count);
    count++;
    
    if(count>maxDepth){
        count = 1;
    }
}

//koch snowflake
//define how lage(length) and how many recursions(depth) you want
function snowflake(length, depth){
    kochCurve(length,depth-1);
    translate(length,0);
    rotate(radians(120));
    kochCurve(length,depth-1);
    translate(length,0);
    rotate(radians(120));
    kochCurve(length,depth-1);
}

//koch curve
//define how lage(length) and how many recursions(depth) you want
function kochCurve(length, depth){
	if(depth==0){
		line(0,0,length,0);
	}else{
		push();
		kochCurve(length/3,depth-1);
		translate(length/3,0);
		rotate(radians(-60));
		kochCurve(length/3,depth-1);
		translate(length/3,0);
		rotate(radians(120));
		kochCurve(length/3,depth-1);
		translate(length/3,0);
		rotate(radians(-60));
		kochCurve(length/3,depth-1);
		pop();
	}
} 
