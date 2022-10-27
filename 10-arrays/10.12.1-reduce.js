const orders = [
    { customerName: 'John', total: 230, delivered: true },
    { customerName: 'Jane', total: 330, delivered: false },
    { customerName: 'Jack', total: 400, delivered: true },
    { customerName: 'Rob', total: 530, delivered: false },
    { customerName: 'Nick', total: 260, delivered: false },
    { customerName: 'Jess', total: 110, delivered: false },
];

let sum = 0;

for (let i = 0; i < orders.length; i++) {
    const element = orders[i];
    sum += element.total;
}

const totalSales = orders.reduce((sum, item) => sum + item.total, 0);

const totalSales2 = orders.reduce((sum, item) => {
    return sum + item.total;
}, 0);

console.log(sum);
console.log(totalSales);