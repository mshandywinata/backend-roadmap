// same as factory function
function Square(s) {
    // every properties/methods use this keyword for declaration
    // this keyword would reference to the every instance of the object
    // note: this would only apply if new keyword being used
    // in the declaration of the object instance
    this.s = s;
    this.position = {
        x: 0,
        y: 0,
    },
    this.move = function(x, y) {
        return [this.position.x += x, this.position.y += y];
    }
}

// without new keyword this would print undefined
// because every this keyword would ended up point to the global object
// that varies depending to the environment
const square1 = new Square(5);
console.log(square1);