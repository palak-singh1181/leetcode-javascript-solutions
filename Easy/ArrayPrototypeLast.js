/*
LeetCode 2619
Array Prototype Last

Time Complexity: O(1)
Space Complexity: O(1)
*/

Array.prototype.last = function () {

    if (this.length === 0) {
        return -1;
    }

    return this[this.length - 1];
};

// Test Cases
let nums1 = [null, {}, 3];
console.log(nums1.last());

let nums2 = [];
console.log(nums2.last());