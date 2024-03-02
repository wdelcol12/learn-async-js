





function sumRow(row) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(row)){
            setTimeout(() => {
                let newFilter = row.filter((num) => {
                return num < 0
                })
                newFilter.length > 0 ?  resolve(`Found Negative Values : ${newFilter}`) : reject("No negative values")
            }, 0)
    } else {
        reject("Bad Input")
    }
    })

}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let promisesCollection = []

for (let i = 0; i < array2D.length; i++) {
    promisesCollection.push(sumRow(array2D[i]));
}

Promise.any(promisesCollection)
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.error('Error:', error);
});
