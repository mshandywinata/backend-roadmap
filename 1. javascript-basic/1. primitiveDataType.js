// there are 5 datatypes
const string1 = "this is string";
const string2 = 'this is string';
// this one used for template-literal
const string3 = `this is string`;
console.log(typeof(string1, string2, string3));

// both these defined as same type
const number1 = 23;
const number2 = 3.14;
console.log(typeof(number1, number2));

// boolean
const bool1 = true;
const bool2 = false;
console.log(typeof(bool1, bool2));

// undefined means it's declared but not (yet) defined (assigned a value)
const declaredNotDefined = undefined;
console.log(typeof(declaredNotDefined));
// null is absence of value
const absenceOfValue = null;
// should be print object (all non-primitive/complex data type aswell e.g array, sets)
// except function would be classified as function
console.log(typeof(absenceOfValue));
