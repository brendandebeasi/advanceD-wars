AdvanceD Wars
=============

A turn-based strategy game built with impactJS. A "Brother's DeBeasi" game.

Developer Resources 
=====================

* Unit Types: http://advancewars.net/strategy/units/
* GUI Plugin: https://github.com/datamosh/ImpactJS-GUI
* How To Handle Clicks: http://impactjs.com/forums/help/how-to-handle-clicking
* Pathfinding: http://www.policyalmanac.org/games/aStarTutorial.htm
* JS Pathfinding: https://github.com/bgrins/javascript-astar
* How to build a TBS game: http://www.raywenderlich.com/12022/how-to-make-a-turn-based-strategy-game-part-1

TODO
====

* Create subclasses of EntityUnit for each unit type (mech, infantry, etc)
* Figure out more efficient way of calculating grid movements
* Update graphics to be 64x64 (Consider creating 128x128 versions too for retina)
* Build menu system
* Create attack system
* Various UI additions
* Multiplayer, preferrably using WebSockets and Node
* Create website for people to get matched up and play against each other
* Add support for touch events / mobile devices (http://impactjs.com/documentation/ios/overview)
* Polish

Known Bugs
==========
* Mouse event doesn't fire when clicking on units, only space