// when copy value/primitive type, we only get the value
let x = 5;
let y = x;

x = 4;

// would print 4
console.log(x);
// would print 5
console.log(y);

// when copy reference/object type, we get the reference/address
let xObj = {
    value: 5,
};
let yObj = xObj;

xObj.value = 3;

// both would print 3
console.log(xObj.value);
console.log(yObj.value);

// example in a function
const number = 5;

function square(n) {
    n *= n;
}

square(number, 2);
// would print 5
console.log(number);

const numberObj = { value: 5 };

function squareObj(n) {
    n.value *= n.value;
}

squareObj(numberObj);
// would print 25
console.log(numberObj.value);