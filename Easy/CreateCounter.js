function createCounter(init) {

    let current = init;

    return {

        increment() {
            return ++current;
        },

        decrement() {
            return --current;
        },

        reset() {
            current = init;
            return current;
        }

    };
}

// Example

const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4