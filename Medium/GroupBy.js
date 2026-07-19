Array.prototype.groupBy = function(fn) {

    const result = {};

    for (const item of this) {

        const key = fn(item);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(item);
    }

    return result;
};

// ----------------------
// Test Cases
// ----------------------

const arr1 = [
    { id: "1" },
    { id: "1" },
    { id: "2" }
];

console.log(arr1.groupBy(item => item.id));

const arr2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
];

console.log(arr2.groupBy(list => String(list[0])));

const arr3 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr3.groupBy(n => String(n > 5)));