
const myObj = {}
const person = {
    name: 'John',
    age: 30,
    job: 'developer',
    address: {
        city: 'London',
        country: 'UK'
    }
}


// hasOwnProperty
console.log(person.hasOwnProperty('name')); // true

// Object.keys
console.log(Object.keys(person)); // [ 'name', 'age', 'job', 'address' ]

// Object.values
console.log(Object.values(person)); // [ 'John', 30, 'developer', { city: 'London', country: 'UK' } ]

// Object.entries
console.log(Object.entries(person)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'job', 'developer' ], [ 'address', { city: 'London', country: 'UK' } ] ]


// Object.fromEntries
// The Object.fromEntries() method transforms a list of key-value pairs into an object.
const entries = [ [ 'name', 'John' ], [ 'age', 30 ], [ 'job', 'developer' ], [ 'address', { city: 'London', country: 'UK' } ] ]
const newEntries = Object.fromEntries(entries); 
console.log(newEntries); // { name: 'John', age: 30, job: 'developer', address: { city: 'London', country: 'UK' } }

// Object.assign
const myEmptyObj = {};
const newPerson = Object.assign(myEmptyObj, person, { name: 'Jane', age: 25 });


// Object.create
const myOtherObj = Object.create({
    name: 'John'
});

myOtherObj.lastName = 'Doe';




// Object.freeze
// The Object.freeze() method freezes an object: 

// that is, prevents new properties from being added to it; 
// prevents existing properties from being removed; and prevents 
// existing properties, or their enumerability, configurability, 
// or writability, from being changed. In addition, the object 
// is marked as non-extensible. The method returns the object being frozen.


const myFrozenObj = Object.freeze({ name: 'John' });
// myFrozenObj.name = 'Jane'; // This will not work
// myFrozenObj = { name: 'Jane' }; // This will not work




// Object.is
// The Object.is() method determines whether two values are the same value.
console.log(Object.is(1, 1));
console.log(Object.is(1, '1')); 

const obj1 = { name: 'John' };
const obj2 = { name: 'John' };
const obj3 = obj1;


console.log(Object.is(obj1, obj2));
console.log(Object.is(NaN, NaN)); 


// Object.defineProperty
Object.defineProperty(myObj, 'name', {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
});

// writable - can be changed
// enumerable - can be iterated
// configurable - can be deleted

// Object.arguments
// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
function myFunc() {
    console.log(arguments);
}

myFunc(1, 2, 3, 4, 5); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }




