function createHelloWorld() {

    return function (...args) {
        return "Hello World";
    };

}

// Test
const f = createHelloWorld();

console.log(f());                 // Hello World
console.log(f({}, null, 42));     // Hello World