const prompt = require('prompt-sync')();

class User {
    #MIN_CHAR = 3;
    #MAX_CHAR = 255;

    #username;
    #email;
    
    constructor(username, email) {
        // verify since initialization
        this.updateUsername(username);
        this.updateEmail(email);
    }

    #isEmailValid(email) {
        // filter out @ and .
        // pattern: *@*.*
        const re = new RegExp("^.*@.*\..*$");
        return re.test(email);
    }

    get profile() {
        return `Username: ${this.#username}, Email: ${this.#email}`;
    }

    updateUsername(username) {
        if (username.length < this.#MIN_CHAR) {
            // always throw instead of return (giving value)
            // return value makes the flow proceed and carrying the error value
            throw new Error(`Username length must at least ${this.#MIN_CHAR} characters`);
        } else if (username.length > this.#MAX_CHAR) {
            throw new Error(`Username length can't be more than ${this.#MAX_CHAR} characters`);
        }
        
        this.#username = username;
    }
    
    updateEmail(email) {
        if (!this.#isEmailValid(email)) {
            throw new Error("Email invalid. Must contain @ and domain (e.g .com)");
        } else if (email > this.#MAX_CHAR) {
            throw new Error(`Email length can't be more than ${this.#MAX_CHAR} characters`);
        }

        this.#email = email;
    }
}

const main = () => {
    while (true) {
        const username = prompt("Username: ");
        const email = prompt("Email: ");
    
        try {
            const user = new User(username, email);
            console.log(`Successfully created: ${user.profile}`);
            break;
        } catch (error) {
            console.error(error);
        }
    }
}

main();
