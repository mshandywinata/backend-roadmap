const prompt = require('prompt-sync')();

class Counter {
    // dont get accessed outside the class
    #count;

    #isPositive(n) {
        return (n > 0);
    }

    constructor(count = 1) {
        this.#count = count;
    }

    get count() {
        return this.#count;
    }

    increment(step = 1) {
        if (this.#isPositive(step)) {
            return this.#count += step;
        }

        throw new Error("Step count must be positive");
    }
    
    decrement(step = 1) {
        if (this.#isPositive(step)) {
            return this.#count -= step;
        }
        
        throw new Error("Step count must be positive");
    }
}

const main = () => {
    const counter = new Counter();
    
    while(true) {
        console.log(`Count: ${counter.count}`);

        const option = prompt("(I)ncrement/(D)ecrement: ").toLowerCase();
        const step = parseInt(prompt("Step: "));

        if (option === 'i') {
            try {
                counter.increment(step);
            } catch (error) {
                console.error(error);
            }
        } else if (option === 'd') {
            try {
                counter.decrement(step);
            } catch (error) {
                console.error(error);
            }
        } else {
            break;
        }
    }
}

main();