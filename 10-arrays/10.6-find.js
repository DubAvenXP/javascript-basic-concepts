const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const orders = [
    { id: 1, customerName: 'John', total: 230, delivered: true },
    { id: 2, customerName: 'Jane', total: 330, delivered: false },
    { id: 3, customerName: 'Jack', total: 400, delivered: true },
    { id: 4, customerName: 'Rob', total: 530, delivered: false },
    { id: 5, customerName: 'Nick', total: 260, delivered: false },
    { id: 6, customerName: 'Jess', total: 110, delivered: false },
];

let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 3) {
        rta = element;
        break;
    }
}

const rta2 = numbers.find((item) => item === 3)

const rta3 = orders.find((item) => item.id === 3)

// findIndex returns -1 if not found
const rta4 = orders.findIndex((item) => item.id === 5)

console.log(rta);
console.log(rta2);
console.log(rta3);
console.log(rta4);