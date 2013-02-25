ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.unit','game.entities.pointer' )
.defines(function(){
LevelMain=/*JSON[*/{"entities":[{"type":"EntityUnit","x":316,"y":192},{"type":"EntityUnit","x":192,"y":328},{"type":"EntityPointer","x":0,"y":0}],"layer":[{"name":"bg","width":15,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/map-sprite.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[6,6,6,5,5,1,1,1,1,6,6,6,6,6,6],[6,6,5,5,1,1,1,1,1,1,6,6,5,6,6],[6,1,1,1,1,1,1,1,1,1,1,1,1,5,6],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,5],[6,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],[5,1,1,1,1,1,1,1,1,1,1,1,1,6,6],[6,5,1,1,1,1,1,1,1,1,1,1,6,6,6],[6,6,6,1,1,1,6,1,1,1,1,6,6,6,6],[6,6,6,6,1,6,6,6,1,6,6,6,6,6,6]]}]}/*]JSON*/;
LevelMainResources=[new ig.Image('media/map-sprite.png')];
});