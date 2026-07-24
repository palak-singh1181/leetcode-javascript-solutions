function memoize(fn) {

    const cache = new Map();

    return function (...args) {

        let curr = cache;

        for (let arg of args) {

            if (!curr.has(arg)) {
                curr.set(arg, new Map());
            }

            curr = curr.get(arg);
        }

        if (curr.has("result")) {
            return curr.get("result");
        }

        const result = fn(...args);
        curr.set("result", result);

        return result;
    };
}

// Example
let calls = 0;

const sum = (a, b) => {
    calls++;
    return a + b;
};

const memoized = memoize(sum);

console.log(memoized(2, 2));
console.log(memoized(2, 2));
console.log(memoized(1, 2));

console.log("Function Calls:", calls);