const HEIGHT = 600;
const WIDTH = 600;

const GRID_SIZE = 20; // 20x20 grid
const TILE_SIZE = WIDTH / GRID_SIZE;

let food;
let snake;

function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	describe("Game window for Obession", FALLBACK);		// for accessibility
	canvas.parent("canvas-parent");
	food = randomPos();
	snake = new Snake();
	frameRate(15);
}

function keyPressed() {
	if (key == 'g') {
		snake.grow();
	}
	if (key == ' ') {
		snake.pause = !snake.pause;
	}
}

function draw() {
	background(100, 100, 100);
	stroke(0, 0, 0);
	for (let i = 0; i < GRID_SIZE; i++) {
		for (let j = 0; j < GRID_SIZE; j++) {
			noFill();
			noStroke();
			rect(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);
		}
	}

	snake.update();
	snake.show();
	if (snake.intersect(food)) {
		snake.grow();
		food = randomPos();
	}

	fill(255, 0, 0);
	rect(food.x * TILE_SIZE, food.y * TILE_SIZE, 30, 30);
}
