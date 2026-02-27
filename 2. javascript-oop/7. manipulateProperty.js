// object is dynamic means could be manipulated when the code run
function Square(s) {
    this.s = s;
}

const square = new Square(4);

// using . notation
// usually used for static property (wouldn't change name)
square.position = { x: 10, y: 5};

// using square bracket notation
// usually used for dynamic property (could be changed/has special chars)
const propertyName = 'euclidian-area';
square[propertyName] = square.s ** 2;
console.log(square);

// delete property
delete square[propertyName];
console.log(square);