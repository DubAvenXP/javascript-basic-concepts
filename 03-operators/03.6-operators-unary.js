// Unary operators

// A unary operation is an operation with only one operand.

// delete operator

const person = {
    name: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'jdoe@email.com',
    hobbies: ['music', 'movies', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    }
}

console.log(person);

delete person.name;
console.log(person);

delete person['lastName'];
console.log(person);

// delete with index
// Since arrays are just objects, it's technically possible to delete elements from them. 
// However, it's not recommended to do so, because it will leave undefined holes in the array.
// delete person.hobbies[1];
// console.log(person);

// typeof operator

// The typeof operator is used in either of the following ways:

// typeof operand

const myFun = new Function('5 + 2');
const shape = 'round';
const size = 1;
const foo = ['Apple', 'Mango', 'Orange'];
const today = new Date();

console.log(typeof myFun);      
console.log(typeof shape);      
console.log(typeof size);       
console.log(typeof foo);        
console.log(typeof today);      
console.log(typeof doesntExist);
