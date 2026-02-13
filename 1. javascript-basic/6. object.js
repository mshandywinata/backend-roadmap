const person = {
    sureName: 'Muhamad Shandy Winata',
    birthDate: '26 March',
    age: 20,
    hobbies: ['playing game', 'reading book'],
    gadgets: {
        laptop: 'Lenovo V14',
        phone: 'Redmi 13C',
    },
    work: function (something) {
        console.log(`working on ${something}...`);
    },
}

const person1 = {
    sureName: 'Adry Winanto',
    birthDate: '31 October',
    age: 12,
    hobbies: ['playing game', 'recite quran'],
    extracuricular: ['martial art', 'scout'],
}

// by using spread, it combines both different properties/method
// and replace the same one with the new one (override)
const person2 = {...person, ...person1};
// modify non-primitive datatype (e.g object, array) would applied to the references
person.gadgets.watch = 'garmin';
// in contrast, modifying primitive one would not change the references 
person1.sureName = 'Adry';
console.log(person, person2);

// get only certain properties
const {sureName, gadgets, hobbies} = person;
const gadgetsArr = [];
// we should use 'in' keyword to loop over object key/properties
for (let gadget in gadgets) {
    gadgetsArr.push(gadget);
}

const hobbyArr = [];
// we should use 'of' keyword to loop over iterable (e.g array)
for (let hobby of hobbies) {
    hobbyArr.push(hobby);
}

console.log(`${sureName} has ${gadgetsArr} and really likes ${hobbyArr}`);