function reduce(nums, fn, init) {

    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
}

// Example 1
const nums1 = [1, 2, 3, 4];
const sum = (accum, curr) => accum + curr;

console.log(reduce(nums1, sum, 0)); // 10

// Example 2
const nums2 = [1, 2, 3, 4];
const squareSum = (accum, curr) => accum + curr * curr;

console.log(reduce(nums2, squareSum, 100)); // 130

// Example 3
console.log(reduce([], () => 0, 25)); // 25