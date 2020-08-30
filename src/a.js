var Shape;
(function (Shape) {
    function square(x) {
        return Math.pow(x, 2);
    }
    Shape.square = square;
})(Shape || (Shape = {}));
