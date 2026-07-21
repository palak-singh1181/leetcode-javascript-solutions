function filter(arr, fn) {

    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

// Example 1
let arr1 = [0, 10, 20, 30];
let ans1 = filter(arr1, function(n) {
    return n > 10;
});
console.log(ans1);

// Example 2
let arr2 = [1, 2, 3];
let ans2 = filter(arr2, function(n, i) {
    return i === 0;
});
console.log(ans2);

// Example 3
let arr3 = [-2, -1, 0, 1, 2];
let ans3 = filter(arr3, function(n) {
    return n + 1;
});
console.log(ans3);