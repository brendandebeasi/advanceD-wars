ig.module(
    "game.entities.action-marker.move"
).requires(
    "impact.entity"
).defines(function() {

        EntityActionMarkerMove = ig.Entity.extend({

            // Set some of the properties
            collides: ig.Entity.COLLIDES.NONE,
            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B,

            size: {x: 64, y: 64},
            init: function( x, y, settings ) {
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
