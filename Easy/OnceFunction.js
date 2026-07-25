function once(fn) {

    let called = false;

    return function (...args) {

        if (called) {
            return undefined;
        }

        called = true;
        return fn(...args);
    };
}

// Example 1

const sum = (a, b, c) => a + b + c;

const onceSum = once(sum);

console.log(onceSum(1, 2, 3)); // 6
console.log(onceSum(2, 3, 6)); // undefined

// Example 2

const multiply = (a, b, c) => a * b * c;

const onceMultiply = once(multiply);

console.log(onceMultiply(5, 7, 4)); // 140
console.log(onceMultiply(2, 3, 6)); // undefined
console.log(onceMultiply(4, 6, 8)); // undefined