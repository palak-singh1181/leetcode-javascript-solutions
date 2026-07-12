/*
LeetCode 2621
Sleep

Time Complexity: O(1)
Space Complexity: O(1)
*/

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

let start = Date.now();

sleep(1000).then(() => {
    console.log(Date.now() - start);
});