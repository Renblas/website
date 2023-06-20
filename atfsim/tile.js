
/* ========================================================================== */
/*                   A Compendium Of Every Tile In The Game                   */
/* ========================================================================== */

/* ----------------------------- Base Tile Class ---------------------------- */
class Tile {
	constructor(x, y, config) {
		this.pos = new Vec2([x, y]);

		this.sprite = config.sprite ? config.sprite : spriteError;

		this.pointer = config.pointer ? new Vec2(config.pointer) : false;
	}
	// updates tile
	update() {

	}
	// draws tile
	draw() {

		// if is pointer tile, return
		if (this.pointer != false)
			return;

		// draw this sprite
		this.sprite.draw(this.pos);
	}
}	

/* ---------------------------- Base Turret Class --------------------------- */
class Turret extends Tile {
	constructor(x, y, config) {
		super(x, y, config);


	}
	// draw turret and top
	draw() {
		// call supers draw function
		super.draw();

		// if is pointer tile, return
		if (this.pointer != false)
			return;

		// draw turret top sprite, if exists
		if (this.sprite_turret_top) {
			this.sprite_turret_top.draw(this.pos);
		}
	}
}

