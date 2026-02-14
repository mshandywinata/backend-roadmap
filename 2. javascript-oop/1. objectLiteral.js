const Square = {
    // properties
    s: 2,
    position: {
        x: 0,
        y: 0,
    },
    // method/behavior
    move: function(x, y) {
        // reference to property itself
        this.position.x += x; this.position.y += y;
        return [this.position.x, this.position.y];
    },
};

const square1 = Square;
console.log(square1);