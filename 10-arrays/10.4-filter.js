const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];
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

const result = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 6) {
        result.push(words[i]);
    }
}

const filteredWords = words.filter(word => word.length >= 6);

const onSaleProducts = products.filter(product => product.isOnSale && product.price < 2);

const search = (query) => {
    return products.filter(
        product => product.name.includes(query)
    );
}