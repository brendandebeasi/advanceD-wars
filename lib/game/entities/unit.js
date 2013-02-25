ig.module(
    "game.entities.unit"
).requires(
    "impact.entity"
).defines(function() {

    EntityUnit = ig.Entity.extend({

        // Set some of the properties
        collides: ig.Entity.COLLIDES.STATIC,
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        spacesPerTurn: 3,
        movementCost: {
            road        : 2,
            plane       : 3,
            wood        : 1,
            buildings   : 1,
            ports       : 1,
            mountains   : 2,
            pipe        : 4,
            shoal       : 1,
            sea         : 3,
            reef        : 4
        },

        size: {x: 64, y: 64},
        health: 10,

        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'media/units/infantry_red.png', 64, 64 ),

        init: function( x, y, settings ) {
            // Add animations for the animation sheet
            this.addAnim( 'idle',.25, [0,0,0,1] );

            // Call the parent constructor
            this.parent( x, y, settings );
        },
        clicked: function() {
            alert('I\'ve been clicked!');
        },
        update: function() {
            // This method is called for every frame on each entity.
            // React to input, or compute the entity's AI here.

            if( ig.input.pressed('jump') ) {
                this.vel.y = -100;
                this.currentAnim = this.anims.jump.rewind();
            }

            // Call the parent update() method to move the entity
            // according to its physics
            this.parent();
        }
    });


});
