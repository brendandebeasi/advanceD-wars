ig.module(
    "game.entities.pointer"
).requires(
    "impact.entity"
).defines(function() {

        EntityPointer = ig.Entity.extend({

            // Set some of the properties
            collides: ig.Entity.COLLIDES.NONE,
            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B,

            size: {x: 64, y: 64},
            isClicking: false,

            // Load an animation sheet
            animSheet: new ig.AnimationSheet( 'media/pointer.png', 64, 64 ),

            init: function( x, y, settings ) {
                // Add animations for the animation sheet
                this.addAnim( 'idle', 1, [0,1,2,2,1,0] );

                // Call the parent constructor
                this.parent( x, y, settings );
            },
            check: function() {
                if(
                    this.isClicking &&
                        typeof(other.clicked) == 'function'
                    ) {
                    other.clicked();
                }
            },
            update: function() {
                ig.input.initMouse();
                this.pos.x = ig.input.mouse.x-32;
                this.pos.y = ig.input.mouse.y-32;
                this.isClicking = ig.input.pressed('click');

                // Call the parent update() method to move the entity
                // according to its physics
                this.parent();
            }
        });


    });
