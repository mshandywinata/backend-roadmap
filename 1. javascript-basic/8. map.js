// other complex datatype similar to object (key-value pair)
const numberNames = new Map([[0, 'zero'], [1, 'one'], [2, 'two']]);
console.log(numberNames);

// get the length
console.log(numberNames.size);
// check certain key existence
console.log(numberNames.has(2));

// manipulation
numberNames.set(3, 'three');
numberNames.delete(0);
numberNames.get(1);
numberNames.clear;

// because it's iterable we use 'of' keyword to loop
for (const [key, value] of numberNames) {
    console.log(`${key}: ${value}`);
}

// convert map to array (same as set)
const numberNamesArr = Array.from(numberNames);
console.log(numberNamesArr);