class Piece {
	constructor(x, y, mainColor, edgeColor) {
		this.x = x;
		this.y = y;
		this.r = 55;
		this.mainColor = mainColor;
		this.edgeColor = edgeColor;
		this.selected = false;
	}

	show() {
		strokeWeight(2);
		if (this.selected) {
			stroke(color(0, 200, 0));
		}
		else {
			stroke(this.edgeColor);
		}
		fill(this.mainColor);
		ellipse(this.x, this.y, this.r, this.r);
	}

	update() {
	}

	isClicked() {
		const dist = sqrt((this.x - mouseX) *
								 (this.x - mouseX)
							 + (this.y - mouseY) *
								 (this.y - mouseY));
		return dist < this.r / 2;
	}
}
