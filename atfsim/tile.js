
/* ========================================================================== */
/*                   A Compendium Of Every Tile In The Game                   */
/* ========================================================================== */

/* ----------------------------- Base Tile Class ---------------------------- */
class Tile {
	constructor(x, y, config) {
		this.pos = new Vec2([x, y]);
		this.size = config.size ? new Vec2(config.size) : new Vec2([1, 1]);

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
		this.sprite.draw(this.pos, this.size);
	}
}	

/* ---------------------------- Base Turret Class --------------------------- */
class Turret extends Tile {
	constructor(x, y, config) {

		// if no overide, make turret size 2x2
		if (!config.size) {
			config.size = [2, 2];
		}

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

