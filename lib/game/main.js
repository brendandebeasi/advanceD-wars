ig.module( 
	'game.main' 
)
.requires(
    'impact.game',
	'impact.font',
    'plugins.gui',

    "game.entities.unit",
    "game.entities.pointer",
    "game.entities.action-marker.move",
    "game.entities.action-marker.attack",

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
		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 960, 640, 1 );

});
