function promiseAll(functions) {

    return new Promise((resolve, reject) => {

        const result = new Array(functions.length);
        let completed = 0;

        for (let i = 0; i < functions.length; i++) {

            functions[i]()
                .then(value => {
                    result[i] = value;
                    completed++;

                    if (completed === functions.length) {
                        resolve(result);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        }

    });

}

// Test
const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];

promiseAll(functions)
    .then(res => console.log(res))
    .catch(err => console.log(err));