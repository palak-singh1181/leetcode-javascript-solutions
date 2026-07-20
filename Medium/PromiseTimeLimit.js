/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, t) {

    return async function (...args) {

        return new Promise((resolve, reject) => {

            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    clearTimeout(timer);
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timer);
                    reject(error);
                });

        });
    };
}

// Example 1
const fn1 = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
};

const limited1 = timeLimit(fn1, 50);

limited1(5)
    .then(console.log)
    .catch(console.log);

// Example 2
const limited2 = timeLimit(fn1, 150);

limited2(5)
    .then(console.log)
    .catch(console.log);