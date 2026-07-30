async function addTwoPromises(promise1, promise2) {

    let value1 = await promise1;
    let value2 = await promise2;

    return value1 + value2;
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(result => {
    console.log(result);
});