class Piece {
	constructor(x, y, mainColor, edgeColor) {
		this.r = 55;
		this.x = x + (this.r / 2);
		this.y = y;
		this.mainColor = mainColor;
		this.edgeColor = edgeColor;
		this.mode = 0;
	}

	moveForward() {}

	moveBackward() {}

	show() {
		strokeWeight(2);
		switch (this.mode) {
			case 0: stroke(this.edgeColor); break;
			case 1: stroke(color(0, 200, 0)); break;
			case 2: stroke(color(200, 0, 0)); break;
			default: stroke(this.edgeColor);
		}
		fill(this.mainColor);
		ellipse(this.x, this.y, this.r, this.r);
	}

	update() {
	}

	isClicked() {
		const dist = sqrt(
			(this.x - mouseX) *
		  (this.x - mouseX)
		+ (this.y - mouseY) *
			(this.y - mouseY));
		return dist < this.r / 2;
	}
}
