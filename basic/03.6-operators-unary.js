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

delete person.name;
console.log(person);

delete person['lastName'];
console.log(person);

// delete with index
// Since arrays are just objects, it's technically possible to delete elements from them. 
delete person.hobbies[1];
console.log(person);

// typeof operator

// The typeof operator is used in either of the following ways:

// typeof operand

const myFun = new Function('5 + 2');
const shape = 'round';
const size = 1;
const foo = ['Apple', 'Mango', 'Orange'];
const today = new Date();

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"
