const fetch = require('node-fetch').default;
const { error } = require('console');
const fs = require('fs');

// callback is a function (usually anonymous and arrow)
// that get passed into other function (high-order function)
setTimeout(() => {
    // this is the callback body
    console.log(3);
}, 1000);

// error first callback
// callback that firstly would check if error exist
// this method/function call could be lead to error
fs.readFile('./lipsum.txt', {encoding:'utf-8'}, (err, data) => {
    if (err) {
        console.error('ERROR');
        console.log(err);
    } else {
        console.error('DATA');
        console.log(data);
    }
})

// nested callback
// if we needed to run many callback at once it would lead to
// callback hell
setTimeout(() => {
    console.log(3);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(1);
        })
    }, 1000);
}, 1000);
// this the reason why promises exist

// define promises
const myPromise = new Promise((resolve, reject) => {
    const r = Math.floor(Math.random() * 2);
    if (r === 0) {
        resolve();
    } else {
        reject();
    }
});

myPromise
    // then would be run if resolve() is ran
    .then(() => {
        console.log('sucessfully resolved');
    })
    // otherwise catch would be run if reject()
    .catch(() => {
        console.log('catch rejected');
    })

// use existing fs promises
fs.promises.readFile('./lipsum.txt', {encoding: 'utf-8'})
    // then would retrive the data
    .then((data) => {
        console.log(data);
    })
    // catch would spit the error if happen
    .catch((err) => {
        console.log(err);
    })
    
// use existing fetch promises
fetch('https://pokeapi.co/api/v2/pokemon/psyduck')
    // then would retrive the response to json
    .then((res) => res.json())
    // then would print the data
    .then((data) => {
        console.log(data);
    })
    // catch would spit the error if happen
    .catch((err) => {
        console.log(err);
    })
// promises could lead to long chaining called promises hell
// and also very low in term of readability

// that's why async await exist
// async await is defined trough a function (usually named arrow)
const readFile = async () => {
    // to spit out the error (e.g in case file doesn't exist)
    // try-catch block is needed
    try {
        const data = await fs.promises.readFile('./lipsum.txt', {encoding: 'utf-8'});
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

readFile();

// example in fetching api
const fetchPokemon = async (id) => {
    try {
        // every api fetch would retrive a respon header-body
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // which is why json convertion is needed
        const data = res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchPokemon(5);