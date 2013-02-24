ig.module( 
	'game.main' 
)
.requires(
    'impact.game',
	'impact.font',

    "game.entities.unit",
    "game.entities.pointer",

    "game.levels.main"
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		this.loadLevel(LevelMain);

        ig.input.initMouse();
        ig.input.bind( ig.KEY.UP_ARROW, 'upArrow' );
        ig.input.bind( ig.KEY.DOWN_ARROW, 'downArrow' );
        ig.input.bind( ig.KEY.LEFT_ARROW, 'leftArrow' );
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'rightArrow' );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 640, 640, 1 );

});
