randomPos = () => { return createVector(floor(random(GRID_SIZE)), floor(random(GRID_SIZE))) };

class Snake {
	constructor() {
		this.snake = [];
		this.snake.push(randomPos());
		this.dir = createVector(1, 0);
		this.pause = false;
		this.dead = false;
	}

	grow() {
		let head = this.snake[0];
		this.snake.unshift(p5.Vector.add(head, this.dir));
	}

	move() {
		let head = this.snake[0];
		this.snake.unshift(p5.Vector.add(head, this.dir));
		this.snake.pop();
	}

	intersect(pos) {
		let head = this.snake[0];
		return head.x == pos.x && head.y == pos.y;
	}

	update() {
		if (this.dead) {
			text("DEAD", WIDTH / 2 - 20, HEIGHT / 2);
			text("Daojf", 100, 100);
			return;
		}
		if (keyIsPressed) {
			let dir = createVector();
			switch (key) {
				case 'w': dir.set( 0, -1); break;
				case 's': dir.set( 0,  1); break;
				case 'a': dir.set(-1,  0); break;
				case 'd': dir.set( 1,  0); break;
			}
			if (this.dir !== dir * -1) {
				this.dir.set(dir);
			}
		}
		if (this.pause) return;

		if (frameCount % 5 === 0) {
			this.move();
			let collided = this.snake.filter((v) => v != this.snake[0] && v.equals(this.snake[0])).length == 1;
			if (collided) {
				console.log("Self collision");
				this.dead = true;
			}
			const outOfBounds = this.snake[0].x < 0 || this.snake[0].x > GRID_SIZE || this.snake[0].y < 0 || this.snake[0].y > GRID_SIZE;
			if (outOfBounds) {
				console.log("Out of bounds");
				this.dead = true;
			}
		}
	}

	show() {
		for (let s of this.snake) {
			fill(0, 100, 0);
			if (s === this.snake[0]) {
				fill(0, 200, 0);
			}
			rect(s.x * TILE_SIZE + 1, s.y * TILE_SIZE + 1, TILE_SIZE - 2, TILE_SIZE - 2);
		}

		for (let i = 1; i < this.snake.length - 1; i++) {
			let prev = this.snake[i - 1];
			let next = this.snake[i + 1];
			let curr = this.snake[i];
		}
	}
}
