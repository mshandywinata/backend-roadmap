// multiple way to declare function
// define function via keyword
// this function receive 'rest' as args (infinite args)
function sumAll(...numbers) {
    let result = 0;
    for (number of numbers) {
        result += number;
    }
    return result;
}

// via function expression
const multiplyAll = function (...numbers) {
    let result = 1;
    for (number of numbers) {
        result *= number;
    }
    return result;
}

// via arrow function
const factorial = (number) => {
    if (number === 0) {
        return 1;
    } else if (number <= 0) {
        return new Error('no such thing as negative factorial');
    }
    return number * factorial(number - 1);
}

console.log(factorial(-1));