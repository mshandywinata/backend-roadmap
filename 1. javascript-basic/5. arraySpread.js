// when we try to assign an array to another new variable to get the copy
// we actually using the same reference
// means change in later var would change the former one
const x = [3, 1, 4, 1, 5];
const y = x;
y.push(9);
// x and y would be the same
console.log(x, y);

// we could use spread to mitigate this
m = [3, 1, 4, 1, 5];
n = [...m];
n.push(9);
// m and n would be different
console.log(m, n);
