/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function debounce(fn, t) {
    let timer = null;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
}

// ----------------------
// Testing
// ----------------------
function log(...args) {
    console.log("Executed with:", args);
}

const debouncedLog = debounce(log, 100);

debouncedLog(1);
debouncedLog(2);
debouncedLog(3);

// Only this call executes after 100ms