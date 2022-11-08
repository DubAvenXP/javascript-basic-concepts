const products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
    { name: 'apple', type: 'fruit' },
]


// for of loop

// for of loop is used to iterate over arrays
// for (variable of iterable) {
//     statement
// }

// Example 1
for (const product of products) {
    console.log(product);
}