class TimeLimitedCache {

    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {

        let exists = this.cache.has(key);

        if (exists) {
            clearTimeout(this.cache.get(key).timeout);
        }

        const timeout = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, {
            value: value,
            timeout: timeout
        });

        return exists;
    }

    get(key) {

        if (!this.cache.has(key))
            return -1;

        return this.cache.get(key).value;
    }

    count() {
        return this.cache.size;
    }
}

const cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 100));

setTimeout(() => {
    console.log(cache.get(1));
    console.log(cache.count());
}, 50);

setTimeout(() => {
    console.log(cache.get(1));
    console.log(cache.count());
}, 150);