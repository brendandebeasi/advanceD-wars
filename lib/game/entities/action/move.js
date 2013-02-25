ig.module(
    "game.entities.action.move"
).requires(
    "impact.entity"
).defines(function() {

        EntityActionMove = ig.Entity.extend({

            // Set some of the properties
            collides: ig.Entity.COLLIDES.NONE,
            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B,
            animSheet: new ig.AnimationSheet( 'media/map-sprite.png', 64, 64 ),
            size: {x: 64, y: 64},
            init: function( x, y, settings ) {
                this.addAnim( 'idle',1, [7] );
                // Call the parent constructor
                this.parent( x, y, settings );
            },
            check: function() {
            },
            update: function() {
                // Call the parent update() method to move the entity
                // according to its physics
                this.parent();
            }
        });


    });
