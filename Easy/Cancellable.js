function cancellable(fn, args, t) {
    fn(...args);

    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearInterval(intervalId);
    };
}

// Example
const fn = (x) => console.log(x * 2);

const cancel = cancellable(fn, [4], 35);

// Cancel after 190 ms
setTimeout(cancel, 190);