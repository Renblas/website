/* ========================================================================== */
/*                                 World Class                                */
/* ========================================================================== */

class World {
    // constructor
    constructor(config) {

        this.size = new Vec2(config.size ? config.size : [32, 18]);

        this.array = [];

        this.initArray(map1);
    }
    // update
    update() {
        // loop through world, update game
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                const element = array[i][j];
                if (element)
                    element.update();
            }
        }

    }
    // draw
    draw() {

        // loop through world, draw each tile
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                const element = this.array[i][j];
                if (element)
                    element.draw();
            }
        }

        /* ----------------------------- Draw Grid Lines ---------------------------- */
        if (true) {

            // Vertical Lines
            for (let i = 0; i < this.size.x; i++) {
                line(i * 32, 0, i * 32, this.size.y * 32);
            }

            // Horizontal Lines
            for (let i = 0; i < this.size.y; i++) {
                line(0, i * 32, this.size.x * 32, i * 32);
            }
        }

    }
    getTile(x, y) {
        return this.array[x][y];
    }
    setTile(obj) {
        this.array[obj.pos.x][obj.pos.y] = obj;
    }
    // initializes map from string
    initArray(map) {

        // setup array, loop through x
        for (let i = 0; i < this.size.x; i++) {
            this.array[i] = [];
            // loop through y
            for (let j = 0; j < this.size.y; j++) {
                // initiate to starting tile
                this.array[i][j] = null;
            }
        }

        var i = 0;
        var j = 0;
        var arr = map.string.split(" ");
        try {
            for (let a = 0; a < arr.length; a++) {
            const str = arr[a];

            switch (str) {
                // new lines    
                case "\n":
                    j++;
                    i = 0;
                    break;
                
                // erroneous spaces
                case "":
                    break;
                
                /* ---------------------------------- Grass --------------------------------- */

                // Grass Center
                case "gc":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_grass_center });
                    i++;
                    break;
                
                /* ---------------------------------- Paths --------------------------------- */

                // Path Center
                case "pc":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_center });
                    i++;
                    break;
                
                // Path Up
                case "pu":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_up });
                    i++;
                    break;
                
                // Path Down
                case "pd":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_down });
                    i++;
                    break;
                
                // Path Left
                case "pl":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_left });
                    i++;
                    break;
                
                // Path Right
                case "pr":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_right });
                    i++;
                    break;
            
                // Path Corner Up Left
                case "p1":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_cul });
                    i++;
                    break;
                
                // Path Corner Up Right
                case "p2":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_cur });
                    i++;
                    break;
                
                // Path Corner Down Left
                case "p3":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_cdl });
                    i++;
                    break;
                
                // Path Corner Down Right
                case "p4":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_path_cdr });
                    i++;
                    break;
                
                /* --------------------------------- Cliffs --------------------------------- */
                
                // Cliff Up
                case "cu":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_cliff_up });
                    i++;
                    break;
                
                // Cliff Down
                case "cd":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_cliff_down });
                    i++;
                    break;
                
                // Cliff Left
                case "cl":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_cliff_left });
                    i++;
                    break;
                
                // Cliff Right
                case "cr":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_cliff_right });
                    i++;
                    break;
            
                // Cliff Corner Up Left
                case "c1":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_cliff_cul });
                    i++;
                    break;
                
                // Cliff Corner Up Right
                case "c2":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_cliff_cur });
                    i++;
                    break;
                
                // Cliff Corner Down Left
                case "c3":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_cliff_cdl });
                    i++;
                    break;
                
                // Cliff Corner Down Right
                case "c4":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_cliff_cdr });
                    i++;
                    break;
                
                /* ---------------------------------- Water --------------------------------- */
                case "wa":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_water });
                    i++;
                    break;
                
                /* --------------------------------- Bricks --------------------------------- */
                
                // brick light
                case "b2":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_brick_light });
                    i++;
                    break;
                
                // brick dark
                case "b4":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_brick_dark });
                    i++;
                    break;
                
                /* --------------------------------- Stairs --------------------------------- */

                // Stairs Up
                case "su":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_stairs_up });
                    i++;
                    break;
                
                // Stairs Down
                case "sd":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_stairs_down });
                    i++;
                    break;
                
                // Stairs Left
                case "sl":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_stairs_left });
                    i++;
                    break;
                
                // Stairs Right
                case "sr":
                    this.array[i][j] = new Tile(i, j, { sprite: sprite_stairs_right });
                    i++;
                    break;

                // ERROR: SHOULD NEVER HAPPEN UNLESS IM DUMB
                default:
                    print("ERROR: MAP STRING NOT FOUND")
                    break;
            }
        }
        } catch (error) {
            print("ERROR: init arr bad " + i + " " + j);
        }
    }
}



/* ========================================================================== */
/*                                    Map 1                                   */
/* ========================================================================== */
var map1 = {
    string: 
       `gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        pu pu pu pu pu pu pu pu pu pu pu sr b2 b2 b2 b2 sl pu pu pu pu pu pu pu pu pu pu p2 gc gc gc gc 
        pd pd pd pd pd pd pd pd pd pd pd sr b2 b2 b2 b2 sl pd pd pd pd pd pd pd pd pd pd p4 gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc c2 wa wa wa wa c1 gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc 
        gc gc gc gc gc gc gc gc gc gc gc cr wa wa wa wa cl gc gc gc gc gc gc gc gc gc gc gc gc gc gc gc `,
}