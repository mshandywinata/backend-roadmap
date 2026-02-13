// aritmethic with different dataypes could be weird
// it's very needed to use type convertion with built-in method or constructor instead

// every number would be converted to string when + operator applied (concat)
let x = '6';
let y = 7;
// should print '67'
console.log(x + y);
// no matter the order
x = 6;
y = '7';
// should print '67'
console.log(x + y);

// but in other operator the string would be converted to number instead
// should print -1
console.log(x - y);
// should print 42
console.log(x * y);
// should print 0.85...
console.log(x / y);
// should print 279936
console.log(x ** y);
// should print 6
console.log(x % y);

// boolean would be converted to their respective value 0 and 1 if the other value is not a string
x = true;
y = 6;
// should print 7
console.log(x + y);
// string convertion applied 
x = '6';
y = true;
// should print '6true'
console.log(x + y);
// should print 5
console.log(x - y);