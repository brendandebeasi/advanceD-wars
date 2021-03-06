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
            road        : 1,
            plane       : 1,
            wood        : 1,
            building    : 1,
            ports       : 1,
            mountain    : 2,
            pipe        : 0,
            shoal       : 1,
            sea         : 0,
            reef        : 0
        },
        active: true,//if the unit can be moved
        health: 10,
        size: {x: 64, y: 64},

        // Load an animation sheet
        animSheet: new ig.AnimationSheet( 'media/units/infantry_red.png', 64, 64 ),

        init: function( x, y, settings ) {
            // Add animations for the animation sheet
            this.addAnim( 'idle',.25, [0] );
            this.addAnim( 'selected',.5, [0,0,1] );

            // Call the parent constructor
            this.parent( x, y, settings );
        },
        clicked: function() {
            this.currentAnim = this.anims.selected;
        },
        draw: function() {
            ig.game.fontArial.draw(this.health,this.pos.x + 48, this.pos.y);
            this.parent();

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
