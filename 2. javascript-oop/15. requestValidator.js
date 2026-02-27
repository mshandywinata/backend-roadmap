class Validator {
    #rules;

    constructor(rules) {
        this.#rules = rules;
    };

    validate(data) {
        for (let key in this.#rules) {
            if (!(key in data)) {
                throw new Error(`Field named ${key} not defined in ${data}`);
            }

            const val = data[key];
            const isEmpty = (typeof val === 'string') ? val.trim() === '' : val === null || val === undefined;

            if (isEmpty && this.#rules[key].required === true) {
                throw new Error(`Required field named ${key} is empty`);
            }
        }

        return true;
    };
};

const rules = {
    'username': {
        required: true,
    },
    'email': {
        required: false,
    },
    'password': {
        required: true,
    }
}

const profile = new Validator(rules);
const profileData = {
    
}

try {
    const isValid = profile.validate(profileData);
    console.log(isValid);
} catch (error) {
    console.error(error.message);
}

