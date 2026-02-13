// to demonstrate error prone we pass user input as args in an aritmethic function
const prompt = require('prompt-sync')();

function reverseNumber(x) {
    let m = Math.abs(x); let n = 0;
    
    while (m > 0) {
        n = (m % 10) + (n * 10);
        m = Math.floor(m / 10);
    } return n * Math.sign(x);
}

const number = prompt('number: ');

try {
    // would be attempt to run first
    const reversed = reverseNumber(number);
    console.log(`${number} => ${reversed}`);
} catch (error) {
    // would be run if an error arise
    // set new custom error
    throw new Error("this is a new error:");
} finally {
    // this would be run regardless the result
    console.log('this is finally block');
}


