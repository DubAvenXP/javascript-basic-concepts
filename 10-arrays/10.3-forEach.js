const letters = ['a', 'b', 'c'];

const products = [
    { name: 'apple', price: 1.25, isOnSale: true },
    { name: 'orange', price: 0.99, isOnSale: false },
    { name: 'banana', price: 2.50, isOnSale: true },
    { name: 'pear', price: 1.00, isOnSale: false },
    { name: 'grape', price: 1.75, isOnSale: false },
    { name: 'pineapple', price: 5.00, isOnSale: true },
    { name: 'strawberry', price: 3.00, isOnSale: false },
    { name: 'blueberry', price: 4.50, isOnSale: false },
    { name: 'raspberry', price: 2.25, isOnSale: false },
]

for (let i = 0; i < letters.length; i++) {
    console.log('for', letters[i]);

}

letters.forEach(letter => console.log('for each', letter));


const productNames = products.map( product =>  ({name: product.name})   );

console.log(productNames);
