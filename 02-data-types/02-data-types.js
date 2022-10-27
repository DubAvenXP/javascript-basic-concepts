// Primitive

// String
const firstName = 'John Doe';
console.log(typeof firstName);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
// Null is an assignment value. It can be assigned to a variable as a representation of no value.
const car = null;
console.log(typeof car);

// Undefined
// Undefined is a variable that has not been assigned a value.
let test;
console.log(typeof test);

// BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// Symbol
const sym = Symbol();
console.log(typeof sym);


// Objects and Arrays
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Object literal
const address = {
    city: 'Miami',
    state: 'FL'
}
console.log(typeof address);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);

// Function
function add(a, b) {
    return a + b;
}
console.log(typeof add);

