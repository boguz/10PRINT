//SETUP canvas
const canvas = document.querySelector("#canvas1");
canvas.width = 1000;
canvas.height = 600;
let context = canvas.getContext("2d");


// VARIABLES
let xpos = 0;
let ypos = 0;
let size = 20;
let threshold = 0.5;
let speed = 100;


// SIZE SLIDER
const sizeControl = document.querySelector("#size-slider");
sizeControl.oninput = function() {
	let sizeVal = sizeControl.value;
	size = Number(sizeVal);
	resetDraw();
}


// SPEED SLIDER
const speedControl = document.querySelector("#speed-slider");
speedControl.oninput = function() {
	let speedVal = speedControl.value;
	speed = Number(speedVal);
	resetDraw();
}


// BALANCE SLIDER
const balanceControl = document.querySelector("#balance-slider");
balanceControl.oninput = function() {
	let balanceVal = balanceControl.value;
	threshold = Number(balanceVal);
	resetDraw();
}


// RESET DRAW FUNCTION
function resetDraw() {
	context.clearRect(0, 0, canvas.width, canvas.height);	
	xpos = 0;
	ypos = 0;
	draw();
	clearInterval(drawInterval);
	drawInterval = setInterval(draw, speed);
}


// DRAW FUNCTION
function draw() {
	console.log(speed);

	let a = Math.random();
	
	if ( a < threshold ) {
		makeLine(xpos, ypos, xpos + size, ypos + size);
	} else {
		makeLine(xpos + size, ypos, xpos, ypos + size);
	}
	
	xpos += size;
	
	if ( xpos > (canvas.width - size)) {
		xpos = 0;
		ypos += size;
	}	
}


// MAKE EACH LINE FUNCTION
function makeLine (x1, y1, x2, y2) {
	context.strokeStyle = "#FFFFFF";
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}


// SET INTERVAL
let drawInterval = setInterval(function(){
	draw();
}, speed);
