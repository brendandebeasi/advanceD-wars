ig.module( 
	'game.main'
)
.requires(
    'game.entities.unit',
	'impact.game',
	'impact.background-map',
	'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
        this.infantry = this.spawnEntity(EntityUnit,0,0);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();

		
		// Create BackgroundMap
		var data = [
		    [1,2,1],
		    [3,4,3],
		    [1,2,1],
		];
		var bg = new ig.BackgroundMap( 64, data, 'media/map-sprite.png' );
		
		// Move
		bg.setScreenPos( 0, 0 );
		
		// Draw
		bg.draw();
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 192, 192 , 1 );

});
