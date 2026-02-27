function Square(s) {
    this.s = s;
    this.area = s * s;
    // set as private property
    let originPosition = {
        x: 0,
        y: 0,
    };
    this.move = (x, y) => {
        return position = {
            // accessing private property without 'this' keyword
            x: originPosition.x += x,
            y: originPosition.y += y,  
        };
    };
}

const squareObj = new Square(5);
console.log(squareObj.move(4, 5));