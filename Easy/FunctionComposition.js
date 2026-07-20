/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {

    return function (x) {

        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
}

// Example 1
const fn1 = compose([
    x => x + 1,
    x => x * x,
    x => 2 * x
]);

console.log(fn1(4)); // 65

// Example 2
const fn2 = compose([
    x => 10 * x,
    x => 10 * x,
    x => 10 * x
]);

console.log(fn2(1)); // 1000

// Example 3
const fn3 = compose([]);

console.log(fn3(42)); // 42