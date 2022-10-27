const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const animals = [ 'dog', 'cat', 'bird', 'fish', 'lizard' ]
const orders = [
    { id: 1, customerName: 'John', total: 230, delivered: true },
    { id: 2, customerName: 'Jane', total: 330, delivered: false },
    { id: 3, customerName: 'Jack', total: 400, delivered: true },
    { id: 4, customerName: 'Rob', total: 530, delivered: false },
    { id: 5, customerName: 'Nick', total: 260, delivered: false },
    { id: 6, customerName: 'Jess', total: 110, delivered: false },
];


let rta = false;
for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    if (element === 'cat') {
        rta = true;
        break;
    }
}

const rta2 = animals.includes('cat')

console.log(rta);
console.log(rta2);

