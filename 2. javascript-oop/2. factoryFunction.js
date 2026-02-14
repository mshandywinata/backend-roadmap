function createSquare(s) {
    // only need to return an object
    return {
        // in es6 we could just call from the params if it has the same var name
        s,
        position: {
            x: 0,
            y: 0,
        },
        move: function(x, y) {
            this.position.x += x; this.position.y += y;
            return [this.position.x, this.position.y];
        },
    }
}

const square1 = createSquare(4);
console.log(square1);
console.log(square1.move(4, 5));
console.log(square1);