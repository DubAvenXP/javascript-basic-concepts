const products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
    { name: 'apple', type: 'fruit' },
]

// for each loop

// for each loop is used to iterate over arrays
// array.forEach(function(item, index, array) {})

// Example 1

// forEach takes a function as an argument

// with declarative function
console.log('===========');

products.forEach(function(product) {
    console.log(product.name);
})

// with arrow function
console.log('===========');

products.forEach((product) => {
    console.log(product.name);
});


// Example 2

// We can pass a function as a parameter to forEach method


function printProduct(product) {
    console.log({product});
}

console.log('===========');


products.forEach(printProduct);
