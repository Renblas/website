
var img_tile = new Image();
img_tile.src = "/atfsim/images/tiles.png"

var img_turret = new Image();
img_turret.src = "/atfsim/images/turrets.png"

class Sprite {
	constructor(config) {

		this.isAnimatable = false;

		this.imgSize = new Vec2(config.imgSize ? config.imgSize : [16, 16]);
		this.imgPos = new Vec2(config.imgPos ? config.imgPos: [0, 0]);
		this.imgSrc = config.imgSrc ? config.imgSrc : imgFile_error;

		this.opacity = config.opacity ? config.opacity : 1;
	}

	draw(pos, size) {
		
			size = new Vec2([1, 1])

		//ctx.globalAlpha = this.opacity;

		ctx.drawImage(
			this.imgSrc,
			this.imgPos.x,
			this.imgPos.y,
			this.imgSize.x,
			this.imgSize.y,
			floor(pos.x * 32),
			floor(pos.y * 32),
			floor(size.x * 32),
			floor(size.y * 32)
		)
		//print("drawn")
		//ctx.globalAlpha = 1;
	}
}


/* ========================================================================== */
/*                             Sprite Declarations                            */
/* ========================================================================== */

/* ---------------------------------- Grass --------------------------------- */

// Grass Center
var sprite_grass_center = new Sprite({
	imgPos: [5 * 16, 2 * 16],
	imgSrc: img_tile
})

/* ---------------------------------- Paths --------------------------------- */

// Path Center
var sprite_path_center = new Sprite({
	imgPos: [1 * 16, 5 * 16],
	imgSrc: img_tile
})

// Path Up
var sprite_path_up = new Sprite({
	imgPos: [1 * 16, 4 * 16],
	imgSrc: img_tile
})

// Path Down
var sprite_path_down = new Sprite({
	imgPos: [1 * 16, 6 * 16],
	imgSrc: img_tile
})

// Path Left
var sprite_path_left = new Sprite({
	imgPos: [0 * 16, 5 * 16],
	imgSrc: img_tile
})

// Path Right
var sprite_path_right = new Sprite({
	imgPos: [2 * 16, 5 * 16],
	imgSrc: img_tile
})

// Path Corner Up Left
var sprite_path_cul = new Sprite({
	imgPos: [0 * 16, 4 * 16],
	imgSrc: img_tile
})

// Path Corner Up Right
var sprite_path_cur = new Sprite({
	imgPos: [2 * 16, 4 * 16],
	imgSrc: img_tile
})

// Path Corner Down Right
var sprite_path_cdr = new Sprite({
	imgPos: [2 * 16, 6 * 16],
	imgSrc: img_tile
})

// Path Corner Down Left
var sprite_path_cdl = new Sprite({
	imgPos: [0 * 16, 6 * 16],
	imgSrc: img_tile
})


/* ---------------------------------- Cliffs --------------------------------- */

// Cliff Up
var sprite_cliff_up = new Sprite({
	imgPos: [5 * 16, 1 * 16],
	imgSrc: img_tile
})

// Cliff Down
var sprite_cliff_down = new Sprite({
	imgPos: [5 * 16, 3 * 16],
	imgSrc: img_tile
})

// Cliff Left
var sprite_cliff_left = new Sprite({
	imgPos: [4 * 16, 2 * 16],
	imgSrc: img_tile
})

// Cliff Right
var sprite_cliff_right = new Sprite({
	imgPos: [6 * 16, 2 * 16],
	imgSrc: img_tile
})

// Cliff Corner Up Left
var sprite_cliff_cul = new Sprite({
	imgPos: [4 * 16, 1 * 16],
	imgSrc: img_tile
})

// Cliff Corner Up Right
var sprite_cliff_cur = new Sprite({
	imgPos: [6 * 16, 1 * 16],
	imgSrc: img_tile
})

// Cliff Corner Down Right
var sprite_cliff_cdr = new Sprite({
	imgPos: [6 * 16, 3 * 16],
	imgSrc: img_tile
})

// Cliff Corner Down Left
var sprite_cliff_cdl = new Sprite({
	imgPos: [4 * 16, 3 * 16],
	imgSrc: img_tile
})

/* ---------------------------------- Water --------------------------------- */
var sprite_water = new Sprite({
	imgPos: [13 * 16, 0 * 16],
	imgSrc: img_tile
})

/* --------------------------------- Bricks --------------------------------- */

var sprite_brick_light = new Sprite({
	imgPos: [17 * 16, 0 * 16],
	imgSrc: img_tile
})

var sprite_brick_dark = new Sprite({
	imgPos: [19 * 16, 0 * 16],
	imgSrc: img_tile
})

/* --------------------------------- Stairs --------------------------------- */

// Stairs Up
var sprite_stairs_up = new Sprite({
	imgPos: [8 * 16, 4 * 16],
	imgSrc: img_tile
})

// Stairs Down
var sprite_stairs_down = new Sprite({
	imgPos: [15 * 16, 6 * 16],
	imgSrc: img_tile
})

// Stairs Left
var sprite_stairs_left = new Sprite({
	imgPos: [16 * 16, 6 * 16],
	imgSrc: img_tile
})

// Stairs Right
var sprite_stairs_right = new Sprite({
	imgPos: [14 * 16, 6 * 16],
	imgSrc: img_tile
})