var numSquares = 6;
var square_color = generateColorArray(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickARandomColor();
var guessColor = document.getElementById("guess-color");
guessColor.textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() { playMode(easyBtn, hardBtn, 3); });

hardBtn.addEventListener("click", function() { playMode(hardBtn, easyBtn, 6); });

resetButton.addEventListener("click", reset);

for (var i = 0; i <squares.length; i++) {
	//set background color 
	squares[i].style.backgroundColor = square_color[i];
	//add click listeners to squares
	squares[i].addEventListener("click", fillSqaure);
}

function playMode(thisBtn, otherBtn, mode) {
	thisBtn.classList.add("selected");
	otherBtn.classList.remove("selected");
	numSquares = mode;
	square_color = generateColorArray(numSquares);
	pickedColor = pickARandomColor();
	guessColor.textContent = pickedColor;
	message.textContent = "";
	h1.style.background = "crimson";
	for(var i = 0; i < square_color.length; i++)
		squares[i].style.backgroundColor = square_color[i];
	
	for(var j=3; j<squares.length; j++){
		if(mode==3)
			squares[j].style.display = "none";
		else
			squares[j].style.display = "block";
	}
}

function fillSqaure(){
	//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//console.log(clickedColor, pickedColor);
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			changeColors(clickedColor);
			message.textContent = "You are right!";
			resetButton.textContent = "Play Again";
			h1.style.background = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "You are wrong. Try again.";
		}
}

function reset(){
	// fill the 6 squares with new random color
	square_color = generateColorArray(numSquares);

	// pick a random color for guessing
	pickedColor = pickARandomColor();
	guessColor.textContent = pickedColor;
	message.textContent = "";
	this.textContent = "New Color";

	for (var i = 0; i <squares.length; i++) {
		squares[i].style.backgroundColor = square_color[i];
	}
	h1.style.background = "crimson";
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickARandomColor() {
	var random = Math.floor(Math.random() * square_color.length);
	//console.log(random);
	return square_color[random];
}

function generateColorArray(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
