// every instance of object hold function that created it
// this function could be accessed by using constructor property of that object

// example for factory function
function createSquare(s) {
    return {
        s,
        position: {
            x: 0,
            y: 0,
        },
        move: function(x, y) {
            return [this.position.x += x, this.position.y += y];
        },
    }
}

const squareFromFactory = createSquare(5);
// this would print Object as the built-in constructor
console.log(squareFromFactory.constructor);

// example for constructor function
function Square(s) {
    this.s = s;
    this.position = {
        x: 0,
        y: 0,
    };
    this.move = function(x, y) {
        return [this.position.x += x, this.position.y += y];
    };
}

const squareFromConstructor = new Square(5);
// this would print Square
console.log(squareFromConstructor.constructor);