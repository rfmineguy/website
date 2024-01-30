randomPos = () => { return createVector(3 + floor(random(GRID_SIZE - 6)), 3 + floor(random(GRID_SIZE - 6))) };

class Snake {
	constructor() {
		this.snake = [];
		this.snake.push(randomPos());
		this.dir = createVector(1, 0);
		this.pause = false;
		this.dead = false;
		this.grow();
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

		if (this.pause) {
			console.log(this.dir);
			return;
		}
		if (frameCount % 5 === 0) {
			let s = this.snake.filter((v, i) => i != 0 && v.equals(this.snake[0]));
			let collided = () => s.length > 0;
			if (collided()) {
				console.log("Self collision");
				this.dead = true;
			}
			const outOfBounds = this.snake[0].x < 0 || this.snake[0].x > GRID_SIZE || this.snake[0].y < 0 || this.snake[0].y > GRID_SIZE;
			if (outOfBounds) {
				console.log("Out of bounds");
				this.dead = true;
			}

			this.move();
		}
	}

	getSnakeCornerPositions() {
		let corners = [];
		const has_dir = (pos, dirx, diry) => {
			let s = this.snake.filter((v) => v.x == pos.x + dirx && v.y == pos.y + diry);
			console.log(s);
		};
		const has_up = (pos) => { return has_dir(pos, 0, 1) };
		const has_down = (pos) => { return has_dir(pos, 0, -1) };
		const has_right = (pos) => { return has_dir(pos, 1, 0) };
		const has_left = (pos) => { return has_dir(pos, -1, 0) };

		corners.push(this.snake[0]);
		for (let i = 1; i < this.snake.length - 1; i++) {
			const curr = this.snake[i];
			if (has_up(curr) && has_down(curr)) continue;
			if (has_left(curr) && has_right(curr)) continue;
			corners.push(curr);
		}
		corners.push(this.snake[this.snake.length - 1]);
		return corners;
	}

	show() {
		// for (let s of this.snake) {
		// 	fill(0, 100, 0);
		// 	if (s === this.snake[0]) {
		// 		fill(0, 200, 0);
		// 	}
		// 	// rect(s.x * TILE_SIZE + 1, s.y * TILE_SIZE + 1, TILE_SIZE - 2, TILE_SIZE - 2);
		// 	rect(s.x * TILE_SIZE, s.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
		// }
	
		for (let i = 0; i < this.snake.length; i++) {
			fill(0);
			const prev = this.snake[i - 1];
			const next = this.snake[i + 1];
			const curr = this.snake[i];
			rect(curr.x * TILE_SIZE + 2, curr.y * TILE_SIZE + 2, TILE_SIZE - 4, TILE_SIZE - 4);
		}
		this.getSnakeCornerPositions();
	}
}
