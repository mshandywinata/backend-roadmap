// same as array but only store the uniques
const arabicNumber = new Set([0, 1, 2, 3, 3, 4, 5]);
// should print 3 only once
console.log(arabicNumber);
// manipulation
arabicNumber.add(6);
arabicNumber.delete(6);
// get the length/size
console.log(arabicNumber.size);
// convert to array
const arabicNumberArr = [...arabicNumber];
console.log(arabicNumberArr);