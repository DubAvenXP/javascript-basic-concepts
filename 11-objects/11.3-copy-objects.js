// Ways to copy a object in JavaScript

const person = {
    name: 'John',
    lastName: 'Doe',
}

// Object.assign
const newPerson = Object.assign({}, person);
newPerson.name = 'Jane';

// Spread operator
const newPerson2 = {...person};
newPerson2.name = 'Mary';

// JSON
const newPerson3 = JSON.parse(JSON.stringify(person));
newPerson3.name = 'Peter';


// How to copy an object with functions?

//
// const person = {
//     name: 'John',
//     lastName: 'Doe',
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name} ${this.lastName}`);
//     }
// }
// 

// we need to do a deep copy with a custom function











console.log(newPerson);

