let game = null;
const HEIGHT = 800;
const WIDTH = 1000;

/*
	* What if I allow any move to happen, and whoever is playing needs to notice an error/cheat?
	*/
function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	describe("Game window for Obession", FALLBACK);		// for accessibility
	canvas.parent("canvas-parent");
	game = new ObsessionGame();
	
	// Setup end turn button
	let endTurnBtn = select("#end-turn-btn");
	endTurnBtn.mousePressed(() => game.endTurn());

	// Setup roll dice button
	// let rollDiceBtn = select("");
	game.rollDice();
}

function mouseClicked() {
	game.handleMouseClick();
}

function draw() {
	background(255);

	game.show();
}
