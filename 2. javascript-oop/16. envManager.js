class ENVManager {
    #config = new Map();

    constructor(config = {}) {
        for (const [key, value] of Object.entries(config)) {
            this.#config.set(key, value);
        }
    }

    /**
    * Retrieves a configuration value.
    * @param {string} key - The name of the sensitive key.
    * @returns {string|Error} - The value if found, otherwise Error.
    */
    get(key) {
        if (this.#config.has(key)) {
            return this.#config.get(key);
        } else {
            throw new Error(`[Security Warning]: Attempted access to non-existent key: "${key}"`);
        }
    }
}

const env = new ENVManager({
    DATABASE_URL: "postgres://admin:password123@localhost:5432/mydb",
    API_SECRET: "sk_live_51Mz..."
});

console.log(env.get("DATABASE_URL"));
console.log(env.get("API_SECRET"));