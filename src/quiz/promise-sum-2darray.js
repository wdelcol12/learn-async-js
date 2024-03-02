function sumRow(row) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(row)){
        try {

            let sum = 0;
            for(let i=0; i< row.length; i++) {
                sum += row[i]
            }
            resolve(sum);
        } catch {
            reject("Invalid Input")
        }
    } else {
        reject("Bad Input")
    }
    })

}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let promisesCollection = []

for (let i = 0; i < array2D.length; i++) {
    promisesCollection.push(sumRow(array2D[i]));
}

Promise.all(promisesCollection)
.then((promiseReturn) => {
    let sum = 0;
    promiseReturn.forEach(promiseReturn => {
        sum += promiseReturn;
    });
    console.log('Final Sum:', sum);
})
.catch((error) => {
    console.error('Error:', error);
});
