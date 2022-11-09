// ways to concat arrays

// 32432jkljlk4324
const animals = ['dog', 'cat', 'bird'];
const fruits = ['apple', 'banana', 'orange'];


const myNewArray = [...animals];

// 32432jkljlk4324
const myNewArray2 = [...animals];

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    myNewArray.push(element);
}


const superArray1 = fruits.concat(animals);

const superArray2 = [...fruits, ...animals];

const superArray3 = [...animals, ...'hello world'];

fruits.push(...animals);

console.log(myNewArray);
console.log(superArray1);
console.log(superArray2);
console.log(superArray3);
console.log(fruits); // this is mutable