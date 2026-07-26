// callPolyfill.js

Function.prototype.callPolyfill = function (obj, ...args) {
    const uniqueKey = Symbol();

    obj[uniqueKey] = this;

    const result = obj[uniqueKey](...args);

    delete obj[uniqueKey];

    return result;
};

// ------------------ Test Case 1 ------------------

function add(b) {
    return this.a + b;
}

console.log(add.callPolyfill({ a: 5 }, 7));
// Output: 12


// ------------------ Test Case 2 ------------------

function tax(price, taxRate) {
    return `The cost of the ${this.item} is ${price * taxRate}`;
}

console.log(tax.callPolyfill({ item: "burger" }, 10, 1.1));
// Output: The cost of the burger is 11


// ------------------ Test Case 3 ------------------

function greet(city, country) {
    return `Hi, I am ${this.name} from ${city}, ${country}`;
}

console.log(greet.callPolyfill({ name: "Palak" }, "Delhi", "India"));
// Output: Hi, I am Palak from Delhi, India