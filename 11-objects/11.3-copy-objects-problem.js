// Ways to copy a object in JavaScript

const person = {
    name: 'John',
    lastName: 'Doe',
}

const newPerson = person;

newPerson.name = 'Jane';

// What will be the value of person.name?

console.log(person);

// What will be the value of newPerson.name?

console.log(newPerson);

