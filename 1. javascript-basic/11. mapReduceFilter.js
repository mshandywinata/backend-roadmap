// 3 most common non-primitive (complex) data type method that used in frameworks

// map is used to get manipulate collection of element
const numbers = [3, 1, 4, 1, 5];
// num is each element that in numbers array
const doubleNumbers = numbers.map((num) => num * 2);
console.log(`${numbers} * 2 = ${doubleNumbers}`);

// reduce is used to get colletion of element and then reduce it in a single value
// acc is a temp var that store the accumulation of all values
// num is each element that in numbers array
// 0 is the starting value of acc
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

const studentScore = [
    { name: 'Shandy', score: 90 },
    { name: 'Muhamad', score: 70 },
    { name: 'Winata', score: 30 },
];
// filter is used to only get thhe element that has certain criteria (truty value)
// student is each element that in studenScore array
const acceptedStudents = studentScore.filter((student) => student.score >= 69);
console.log(acceptedStudents);