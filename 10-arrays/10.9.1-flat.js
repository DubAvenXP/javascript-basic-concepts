const fruits = ['apple', 'banana', 'orange', ['pear', 'strawberry', 'kiwi']];
const matrix = [[1, 2, 3], [4, 5, [1,2,3, [4,56]]], [7, 8, 9]];

const rta = []
for (let i = 0; i < matrix.length; i++) {
    const innerArray = matrix[i];
    for (let j = 0; j < innerArray.length; j++) {
        const element = innerArray[j];
        rta.push(element);
    }
}

const rta2 = matrix.flat(3);
const rta3 = fruits.flat();

console.log(rta);
console.log(rta2);
console.log(rta3);

const myCustomFlat = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (Array.isArray(element)) {
            result.push(...myCustomFlat(element));
        } else {
            result.push(element);
        }
    }
    return result;
}

console.log(myCustomFlat(matrix));