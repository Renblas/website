
/* ========================================================================== */
/*                              Global Variables                              */
/* ========================================================================== */

var menuSettingsEnabled = false;
var gameIsPaused = true;
var gameIsActive = false;

var canvas; // canvas game is on
var ctx; // 2d context for abpve canvas

const GlobalImageArray = [];
const GlobalEntityArray = [];

var world;

/* ========================================================================== */
/*                                    Setup                                   */
/* ========================================================================== */
function setup() {

	canvas = createCanvas(32 * 32, 32 * 18).canvas;
	document.getElementsByClassName("game-div")[0].appendChild(canvas);
	document.getElementsByTagName("main")[0].remove();
	
	ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	angleMode(DEGREES)
	frameRate(30);
}


/* ========================================================================== */
/*                                    Draw                                    */
/* ========================================================================== */
function draw() {

	if (gameIsActive) {

		if (!gameIsPaused)
			updateGame();

		drawGame();
	}
}

// Updates game (ups)
function updateGame() {
	
}

// Draws screen (fps)
function drawGame() {
	
	background("#444444");

	world.draw();
}

// Start New Game
function startGame() {

	world = new World({
		size: [32, 18],
	})

	gameIsActive = true;
	gameIsPaused = false;
}


/* ========================================================================== */
/*                                Utility Stuff                               */
/* ========================================================================== */
class Vec2 {
	constructor(arr) {
		this.x = arr[0];
		this.y = arr[1];
	}
	mag() {
		return sqrt(this.x * this.x + this.y * this.y);
	}
	angle() {
		return atan2(this.y, this.x);
	}
	array() {
		return [x, y];
	}
}
