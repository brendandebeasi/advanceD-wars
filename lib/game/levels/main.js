ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.unit' )
.defines(function(){
LevelMain=/*JSON[*/{"entities":[{"type":"EntityUnit","x":64,"y":64},{"type":"EntityUnit","x":256,"y":256}],"layer":[{"name":"bg","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/map-sprite.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[4,3,3,4,3,3,4,3,4,3],[2,1,1,2,1,1,2,1,2,1],[2,1,1,2,1,1,2,1,2,1],[4,3,3,4,3,3,4,3,4,3],[2,1,1,2,1,1,2,1,2,1],[4,3,3,4,3,3,4,3,4,3],[2,1,1,2,1,1,2,1,2,1],[2,1,1,2,1,1,2,1,2,1],[2,1,1,2,1,1,2,1,2,1],[4,3,3,4,3,3,4,3,4,3]]}]}/*]JSON*/;
LevelMainResources=[new ig.Image('media/map-sprite.png')];
});