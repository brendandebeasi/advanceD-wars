ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.unit','game.entities.pointer' )
.defines(function(){
LevelMain=/*JSON[*/{"entities":[{"type":"EntityUnit","x":64,"y":64},{"type":"EntityUnit","x":256,"y":256},{"type":"EntityPointer","x":0,"y":0}],"layer":[{"name":"bg","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/map-sprite.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[4,3,3,4,3,3,4,3,4,3],[2,1,1,2,1,1,2,1,2,1],[2,1,1,2,1,1,2,1,2,1],[4,3,3,4,3,3,4,3,4,3],[2,1,1,2,1,1,2,1,2,1],[4,3,3,4,3,3,4,3,4,3],[2,1,1,2,1,1,2,1,2,1],[2,1,1,2,1,1,2,1,2,1],[2,1,1,2,1,1,2,1,2,1],[4,3,3,4,3,3,4,3,4,3]]}]}/*]JSON*/;
LevelMainResources=[new ig.Image('media/map-sprite.png')];
});