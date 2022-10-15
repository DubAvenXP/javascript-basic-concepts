const product = {
    name: 'iPhone',
    price: 1000,
    color: 'black',
    size: 'small',
    weight: 100
}

const entries = Object.entries(product);

console.log(entries);

const myEntries = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

console.log(myEntries);

console.log(Object.fromEntries(myEntries));