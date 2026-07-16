class ArrayWrapper {

    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    toString() {
        return "[" + this.nums.join(",") + "]";
    }
}

// Test Cases

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);      // 10

const obj3 = new ArrayWrapper([23, 98, 42, 70]);

console.log(String(obj3));     // [23,98,42,70]

const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);

console.log(obj4 + obj5);      // 0