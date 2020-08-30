/// <reference path="a.ts" />
var Shape;
(function (Shape) {
    var pi = Math.PI;
    function cricle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.cricle = cricle;
})(Shape || (Shape = {}));
var square = Shape.square;
var cricle = Shape.cricle;
console.log(square(3));
console.log(cricle(3));
