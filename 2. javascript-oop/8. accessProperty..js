function Square(s) {
    this.s = s;
    this.area = s * s;
    this.position = {
        x: 0,
        y: 0,
    };
    this.move = (x, y) => {
        return [this.position.x += x, this.position.y += y];
    };
}

const squareObj = new Square(3);

// only enum the property, excluding the method
for (const key in squareObj) {
    if (typeof squareObj[key] !== 'function') {
        console.log(key, squareObj[key]);
    }
}

// return array of object's keys
const keys = Object.keys(squareObj);
console.log(keys);

// check if certain property/method exist
if ('move' in squareObj) {
    console.log('square has move property/method');
}