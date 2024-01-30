/*
 *   Eventually use Socket.io for multiplayer
 */

class ObsessionGame {
	constructor() {
		this.whitePieces = [];
		this.brownPieces = [];
		this.selected = [];
		const spacing = (WIDTH - 200) / 10;
		for (let i = 0; i < 10; i++) {
			this.whitePieces.push(
				new Piece(100 + i * spacing, HEIGHT - 60, color(156, 145, 86), color(163, 155, 111))
			);
			this.brownPieces.push(
				new Piece(100 + i * spacing, 60, color(48, 45, 28), color(64, 59, 32))
			);
		}
		this.dice = [0,0];
		this.turn = "White";
	}

	rollDice() {
		this.dice[0] = floor(random(1, 7));
		this.dice[1] = floor(random(1, 7));
	}

	handleMouseClick() {
		for (let i = 0; i < 10; i++) {
			let white_piece = this.whitePieces[i];
			let brown_piece = this.brownPieces[i];
			
			// Figure out what piece was clicked
			let piece = null;
			if (white_piece.isClicked()) piece = white_piece;
			if (brown_piece.isClicked()) piece = brown_piece;

			// If a piece was clicked, select or deselect it
			if (piece) {
				let is_selected_already = piece.mode != 0 || this.selected.includes(piece);
				// Selection logic
				if (!is_selected_already && this.selected.length + 1 <= 3) {
					piece.mode = 1;
					this.selected.push(piece);
				}
				// Deselection logic
				if (is_selected_already && this.selected.length - 1 >= 0) {
					let index = this.selected.indexOf(piece);
					piece.mode = 0;
					this.selected.splice(index, 1);
				}
			}
		}
	}

	endTurn() {
		console.log(`End turn: ${this.turn}`);
		if (this.turn === "White")
			this.turn = "Brown";
		else if (this.turn === "Brown")
			this.turn = "White";
	}

	// Board rendering code
	show() {
		// Board background
		stroke(0);
		fill(80);
		rectMode(CORNER);
		rect(70, 10, WIDTH - 140, HEIGHT - 20, 20);

		// Board piece slots
		for (let i = 0; i < 10; i++) {
			let wp = this.whitePieces[i];
			let bp = this.brownPieces[i];
			rectMode(CENTER);
			fill(40);
			rect(wp.x, 103, 59, 59*2.5, 50);
			fill(40);
			rect(bp.x, HEIGHT - 103, 59, 59*2.5, 50);
		}

		// Turn indicator
		noStroke();
		let turnText = `Turn: ${this.turn}`
		text(turnText, WIDTH - textWidth(turnText) - 50, HEIGHT / 2);

		// Dice text
		fill(20);
		textAlign(LEFT);
		textSize(26);
		text(`${this.dice[0]}`, WIDTH - 450, HEIGHT / 2);
		text(`${this.dice[1]}`, 450, HEIGHT / 2);

		// Pieces
		for (let i = 0; i < 10; i++) {
			let wp = this.whitePieces[i];
			let bp = this.brownPieces[i];
			textAlign(CENTER, CENTER);

			wp.show();
			text(`${i + 1}`, wp.x, wp.y - 150);

			bp.show();
			text(`${i + 1}`, bp.x, bp.y + 150);
		}
	}
}
