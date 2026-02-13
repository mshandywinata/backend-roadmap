// this keyword is used to reference a property of an object
// but still in the scope of the object itself

const Person = {
    name: 'Muhamad Shandy Winata',

    // anonymous and named function would look up
    // this.name var in a block scope (object itself)
    greet: function() {
        return `hello, my name is ${this.name}!`;
    },

    // arrow function would look up this.name var in a global scope
    // causing the this.name would return undefined because has been initiated
    // but not yet been defined (defined later on in the scope of object)
    greet: () => {
        return `hello, my name is ${this.name}!`;
    }
}

const shandy = Person;
console.log(shandy.greet());