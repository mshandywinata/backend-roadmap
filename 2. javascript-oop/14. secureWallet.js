const prompt = require('prompt-sync')();

class Wallet {
    #MIN_BALANCE = 1;
    #MAX_BALANCE = 4194304;

    #balance;
    #history = [];

    constructor(balance = 100) {
        balance = parseFloat(balance);

        if (Number.isNaN(balance)) {
            throw new Error('Balance amount must be number');
        } else if (balance < this.#MIN_BALANCE) {
            throw new Error(`Balance amount must be at least ${this.#MIN_BALANCE}`);
        } else if (balance > this.#MAX_BALANCE) {
            throw new Error(`Balance amount couldn't more than ${this.#MAX_BALANCE}`);
        }

        this.#balance = balance;
    }

    toString() {
        return `Balance: $${this.#balance}, Number of Transactions: ${this.#history.length}`
    }

    #isEnough(amount) {
        return amount <= this.#balance;
    }

    spend(amount, category) {
        amount = parseFloat(amount);

        if (Number.isNaN(amount)) {
            throw new Error("Amount must be number");
        } else if (amount <= 0 ) {
            throw new Error("Amount can't be zero or negative.");
        } else if (!this.#isEnough(amount)) {
            throw new Error("This amount is more than current balance.");
        }

        if (!category || !category.trim()) {
            throw new Error("Category can't be empty.");
        }

        const date = new Date().toLocaleString();
        this.#balance -= amount;
        this.#history.push({ date, amount, category });
    }

    get history() {
        if (this.#history.length < 1) {
            throw new Error("No spending entries");
        }

        return this.#history.map((element, index) => {
            const { date, amount, category } = element;
            return `${index + 1}. ${date} - $${Number.parseFloat(amount).toFixed(2)} - ${category}`;
        }).join("");
    }

    get balance() {
        return Number.parseFloat(this.#balance).toFixed(2);
    }
}

const main = () => {
    let wallet;

    while (true) {
        const balance = prompt('Starting balance: $');

        try {
            wallet = new Wallet(balance);
            break;
        } catch (error) {
            console.error(error.message);
        }
    }

    while (true) {
        const option = prompt("See all (H)istory/See (B)alance/Make a (S)pend/(Q)uit: ").toLowerCase();

        if (option === 'h') {
            try {
                console.log(wallet.history);
            } catch (error) {
                console.error(error.message);
            }
        } else if (option === 'b') {
            console.log(`Current Balance: $${wallet.balance}`);
        } else if (option === 's') {
            const amount = parseFloat(prompt("Amount: $"));
            const category = prompt("Category: ");

            try {
                wallet.spend(amount, category);
            } catch (error) {
                console.error(error.message);
            }
        } else if (option === 'q') {
            break;
        } else {
            console.log("Invalid option, please try again.");
        }
    }
}

main();