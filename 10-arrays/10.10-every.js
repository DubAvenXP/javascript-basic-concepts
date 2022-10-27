// every returns true if every element in the array satisfies the predicate

const numbers = [2, 4, 6, 8, 10];

const team = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 21 },
    { name: 'Jack', age: 22 },
    { name: 'Rob', age: 23 },
    { name: 'Nick', age: 24 },
    { name: 'Jess', age: 17 },
];

let rta = true;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 !== 0) {
        rta = false;
        break;
    }
}

const areEven = numbers.every(number => number % 2 === 0);
const areAdult = team.every(person => person.age > 18);

console.log(rta);
console.log(areEven);
console.log(areAdult);