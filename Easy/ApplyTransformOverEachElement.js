function map(arr, fn) {

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

// Example 1
let arr1 = [1, 2, 3];
let ans1 = map(arr1, function(n) {
    return n + 1;
});
console.log(ans1);

// Example 2
let arr2 = [1, 2, 3];
let ans2 = map(arr2, function(n, i) {
    return n + i;
});
console.log(ans2);

// Example 3
let arr3 = [10, 20, 30];
let ans3 = map(arr3, function() {
    return 42;
});
console.log(ans3);