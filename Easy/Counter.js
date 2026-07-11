/*
LeetCode 2620
Counter

Time Complexity: O(1)
Space Complexity: O(1)
*/

function createCounter(n) {

    return function () {
        return n++;
    };

}

// Test Case 1
const counter1 = createCounter(10);

console.log(counter1());
console.log(counter1());
console.log(counter1());

// Test Case 2
const counter2 = createCounter(-2);

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());