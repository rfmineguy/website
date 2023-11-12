console.log("Obsession");

let game = null;
const HEIGHT = 500;
const WIDTH = 1000;

function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent("canvas-parent");
	game = new ObsessionGame();
	game.rollDice();
}

function mouseClicked() {
	game.handleMouseClick();
}

function draw() {
	background(100, 100, 100, 255);

	game.update();
	game.show();
}
