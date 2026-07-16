function flat(arr, depth) {

    let result = [];

    function flatten(current, d) {

        for (let item of current) {

            if (Array.isArray(item) && d < depth) {
                flatten(item, d + 1);
            } else {
                result.push(item);
            }
        }
    }

    flatten(arr, 0);

    return result;
}

// Test Cases
console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],0));

console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],1));

console.log(flat([[1,2,3],[4,5,6],[7,8,[9,10,11],12],[13,14,15]],2));