// array is non-primitive datatype that can store multiple values with multiple datatypes

// direct assign array
// we could still modify array even when declared with const because we not re-assigned it
const arr = [3, 1, 4, 1, 5];
// print all the elements
console.log(arr);

// dynamic assign array
const arr1 = new Array(3);
// print empties
console.log(arr1);

// make array from other data that is iterable
const arr2 = Array.from('sike');
console.log(arr2);

// get certain range of elements but not including the last
// should print ['s', 'i', 'k'];
console.log(arr2.slice(0, 3));

// remove certain element
// should print ['s'] which is the element that removed;
console.log(arr2.splice(0, 1));

// combine 2 arrays
// should print both arr and arr2 elements
console.log(arr.concat(arr2));