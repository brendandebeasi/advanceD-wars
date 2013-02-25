ig.module(
    "game.entities.pointer"
).requires(
    "impact.entity"
).defines(function() {

        EntityPointer = ig.Entity.extend({

            // Set some of the properties
            collides: ig.Entity.COLLIDES.STATIC,
            type: ig.Entity.TYPE.B,
            checkAgainst: ig.Entity.TYPE.A,

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
            check: function(clicked) {
                if( this.isClicking && typeof(clicked.clicked) == 'function') {
                    clicked.clicked();
                    if(clicked.active) {
                        var movementBounds = this.calculatePossibleMovements(clicked);
                    }
                }
            },
            calculatePossibleMovements: function(unit) {
                var currentUnitCeil = {x: unit.pos.x, y:unit.pos.y};
                var currentUnitFloor= {x: unit.pos.x + ig.game.gridSize, y:unit.pos.y + ig.game.gridSize};
                var currentUnitGrid = {x: currentUnitFloor.x / ig.game.gridSize, y: currentUnitFloor.y / ig.game.gridSize};

                var movements = new Array();

                //figure out all tiles X moves away from the unit, regardless of movement cost
                for(y=0;y<ig.movementCost.nodes.length;y++)
                {
                    if(typeof(movements[y]) == 'undefined') movements[y] = [];
                    for(x=0;x<ig.movementCost.nodes[y].length;x++)
                    {
                        var movement = astar.search(
                            ig.movementCost.nodes,
                            ig.movementCost.nodes[currentUnitGrid.x-1][currentUnitGrid.y-1],
                            ig.movementCost.nodes[y][x]
                        );
                        if(movement.length > 0 && movement.length <= unit.spacesPerTurn)
                        {
                            var actualCost = 0;
                            for(s=0;s<movement.length;s++)
                            {
                                actualCost += movement[s].cost;
                            }
                            if(actualCost <= unit.spacesPerTurn) {
                                console.log(movement[movement.length-1].x,movement[movement.length-1].y);
                                ig.game.spawnEntity(EntityActionMove,movement[movement.length-1].x * 64,movement[movement.length-1].y * 64);
                                movements.push(movement);
                            }
                        }

                    }
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
                this.isClicking = ig.input.pressed('select');
                // Call the parent update() method to move the entity
                // according to its physics
                this.parent();
            }
        });


    });
