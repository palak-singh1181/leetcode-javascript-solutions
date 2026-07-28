function compactObject(obj) {


    if (Array.isArray(obj)) {

        let result = [];

        for (let item of obj) {

            let value = compactObject(item);

            if (Boolean(value)) {
                result.push(value);
            }
            else if (Array.isArray(value)) {
                result.push(value);
            }

        }

        return result;
    }


    if (typeof obj === "object" && obj !== null) {

        let result = {};

        for (let key in obj) {

            let value = compactObject(obj[key]);

            if (Boolean(value)) {
                result[key] = value;
            }
            else if (Array.isArray(value)) {
                result[key] = value;
            }

        }

        return result;
    }


    return obj;
}



// Test Cases

let obj1 = [null, 0, false, 1];

console.log(compactObject(obj1));


let obj2 = {
    a: null,
    b: [false, 1]
};

console.log(compactObject(obj2));


let obj3 = [
    null,
    0,
    5,
    [0],
    [false, 16]
];

console.log(compactObject(obj3));