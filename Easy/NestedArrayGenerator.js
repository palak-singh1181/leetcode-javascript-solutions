/**
 * @param {Array} arr
 * @return {Generator}
 */
function* inorderTraversal(arr) {

    for (const element of arr) {

        if (Array.isArray(element)) {
            yield* inorderTraversal(element);
        } else {
            yield element;
        }
    }
}

// Example 1
const arr1 = [[[6]], [1, 3], []];

const gen1 = inorderTraversal(arr1);

console.log(gen1.next().value); // 6
console.log(gen1.next().value); // 1
console.log(gen1.next().value); // 3
console.log(gen1.next().done);  // true

// Example 2
const arr2 = [];

const gen2 = inorderTraversal(arr2);

console.log(gen2.next());