// there are 3 ways to declare variables

// var is mutable variable that is function-scope which could be accessed anywhere
if (true) {
    var x = 'this is var';
}
// should print the value
console.log(x);

// let same as var but block-scope which only could be accessed by the same scope (e.g condition, function, etc.)
if (true) {
    // notice the variable not highlighted because it's not been used
    let y = 'this is let';
}
// should can't be called here
console.log(y);

// const is immutable and block-scope
if (true) {
    const z = 'this is const';
    z = 'this should be the error line';
}
// should can't be called here
console.log(z);

