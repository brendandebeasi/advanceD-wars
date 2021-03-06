ig.module(
	'game.main' 
)
.requires(
    'impact.game',
	'impact.font',
    'plugins.gui',
    'impact.debug.debug',

    "game.entities.unit",
    "game.entities.pointer",
    "game.entities.action.move",
    "game.entities.action.attack",

    "game.levels.main"
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	fontArial: new ig.Font( 'media/arial-bold.font.png' ),
	gridSize: 64,
	
	init: function() {
		this.loadLevel(LevelMain);
        ig.tileMapping = {
            1: 'plane',
            5: 'wood',
            6: 'mountain'
        };

        //calculate movement cost for infantry
        ig.movementCost = this.calculateMovementCostTable(LevelMain.layer[0].data,new EntityUnit);
        ig.input.initMouse();
        ig.input.bind( ig.KEY.UP_ARROW, 'upArrow' );
        ig.input.bind( ig.KEY.DOWN_ARROW, 'downArrow' );
        ig.input.bind( ig.KEY.LEFT_ARROW, 'leftArrow' );
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'rightArrow' );
        ig.input.bind( ig.KEY.MOUSE1, 'select' );
        ig.input.bind( ig.KEY.SPACE, 'select' );
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();

        if(ig.gui.show) ig.gui.draw();
		
	},
    calculateMovementCostTable: function(mapTileData,unit) {
        var newMovementTable = [];
        for(var row=0;row<mapTileData.length;row++)
        {
            if(typeof(newMovementTable[row]) == 'undefined') newMovementTable[row] = [];
            for(var col=0;col<mapTileData[row].length;col++)
            {
                if(typeof(newMovementTable[row][col]) == 'undefined') newMovementTable[row][col] = null;
                newMovementTable[row][col] = unit.movementCost[ig.tileMapping[mapTileData[row][col]]];
            }
        }
        return new Graph(newMovementTable);
    }
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 960, 640, 1 );

});
