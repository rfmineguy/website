class ObsessionGame {
	constructor() {
		this.whitePieces = [];
		this.brownPieces = [];
		this.selected = [];
		const spacing = (WIDTH - 200) / 10;
		for (let i = 0; i < 10; i++) {
			this.whitePieces.push(
				new Piece(100 + i * spacing, HEIGHT - 50, color(156, 145, 86), color(163, 155, 111))
			);
			this.brownPieces.push(
				new Piece(100 + i * spacing, 50, color(48, 45, 28), color(64, 59, 32))
			);
		}
		this.dice = [0,0];
	}
	
	activateValidPieces() {
		const dice1 = this.dice[0];
		const dice2 = this.dice[1];
		const diceT = dice1 + dice2;
		console.log("TOTO: activateValidPieces()");
	}

	rollDice() {
		this.dice[0] = floor(random(1, 7));
		this.dice[1] = floor(random(1, 7));
		this.activateValidPieces();
	}

	handleMouseClick() {
		for (let i = 0; i < 10; i++) {
			let white_piece = this.whitePieces[i];
			let brown_piece = this.brownPieces[i];
			let piece = null;
			if (white_piece.isClicked()) piece = white_piece;
			if (brown_piece.isClicked()) piece = brown_piece;
			if (piece) {
				if (!piece.selected && !this.selected.includes(piece) && this.selected.length + 1 <= 3) {
					piece.selected = true;
					this.selected.push(piece);
				}
				else if (piece.selected && this.selected.length != 0) {
					let index = this.selected.indexOf(piece);
					piece.selected = false;
					this.selected.splice(index, 1);
				}
				console.log(this.selected.length);
			}
		}
	}

	update() {
		for (let i = 0; i < 10; i++) {
			this.whitePieces[i].update();
			this.brownPieces[i].update();
		}
	}

	show() {
		textAlign(LEFT);
		textSize(26);
		text("" + this.dice[0], WIDTH - 450, HEIGHT / 2);
		text("" + this.dice[1], 450, HEIGHT / 2);
		for (let i = 0; i < 10; i++) {
			this.whitePieces[i].show();
			this.brownPieces[i].show();
		}
	}
}
