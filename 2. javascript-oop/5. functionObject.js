// in js every function is object

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

// defining function above equal to:
const SquareFunc = new Function('s', `
    this.s = s;
    this.position = {
        x: 0,
        y: 0,
    };
    this.move = function(x, y) {
        return [this.position.x += x, this.position.y += y];
    };
    `
);

// check the function object built-in constructor
console.log(Square.constructor);

// this declaration equal to:
// Square.call({}, args=1);
// Sqaure.apply({}, args=[]);
const squareFromObject = new SquareFunc(5);
console.log(squareFromObject);
const squareFromConstructor = new Square(5);
console.log(squareFromConstructor);