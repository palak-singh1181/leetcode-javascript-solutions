function memoize(fn) {

    const cache = new Map();

    return function (...args) {

        const key = JSON.stringify(args);

        if (cache.has(key))
            return cache.get(key);

        const result = fn(...args);

        cache.set(key, result);

        return result;
    };
}

// Example

const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2));
console.log(memoizedSum(2, 2));
console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));