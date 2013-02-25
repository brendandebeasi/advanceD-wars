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
            lastMousePosition: {x: false, y:false},

            // Load an animation sheet
            animSheet: new ig.AnimationSheet( 'media/pointer.png', 64, 64 ),

            init: function( x, y, settings ) {
                // Add animations for the animation sheet
                this.addAnim( 'idle', 0.1, [0,1,2,1,0,0,0,0,0,0] );

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
                //if the mouse position has changed move the pointer to the new position
                if(ig.input.mouse.x != this.lastMousePosition.x || ig.input.mouse.y != this.lastMousePosition.y) {
                    this.pos.x = Math.floor((ig.input.mouse.x) / 64) * 64;
                    this.pos.y = Math.floor((ig.input.mouse.y) / 64) * 64;

                    this.lastMousePosition = {x: ig.input.mouse.x, y: ig.input.mouse.y};
                }
                else//else listen for keyboard
                {

                    if(ig.input.pressed('upArrow') && this.pos.y != 0) this.pos.y -= 64;
                    if(ig.input.pressed('downArrow') && this.pos.y != 576) this.pos.y += 64;
                    if(ig.input.pressed('leftArrow')  && this.pos.x != 0) this.pos.x -= 64;
                    if(ig.input.pressed('rightArrow') && this.pos.x != 576) this.pos.x += 64;
                }
                this.isClicking = ig.input.pressed('click');

                // Call the parent update() method to move the entity
                // according to its physics
                this.parent();
            }
        });


    });
