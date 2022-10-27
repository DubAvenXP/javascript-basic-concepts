const orders = [
    { customerName: 'John', total: 230, delivered: true },
    { customerName: 'Jane', total: 330, delivered: false },
    { customerName: 'Jack', total: 400, delivered: true },
    { customerName: 'Rob', total: 530, delivered: false },
    { customerName: 'Nick', total: 260, delivered: false },
    { customerName: 'Jess', total: 110, delivered: false },
];

const totalOrders = orders.map(item => item.total);

const ordersWithTax = orders.map(item => {
    item.tax = 0.19;
    return item; // this is mutable, because we are changing the object
}) 

const ordersWithTax2 = orders.map(item => {
    return { ...item, tax: 0.19 }; // this is immutable, because we are creating a new object
})