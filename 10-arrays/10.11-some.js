// some returns true if any of the elements in the array
// match the condition

// const areIntervalOverlapping = require('date-fns/areIntervalsOverlapping');
const numbers = [1, 2, 3, 4, 5];

const orders = [
    { customerName: 'John', total: 230, delivered: true },
    { customerName: 'Jane', total: 330, delivered: false },
    { customerName: 'Jack', total: 400, delivered: true },
    { customerName: 'Rob', total: 530, delivered: false },
    { customerName: 'Nick', total: 260, delivered: false },
    { customerName: 'Jess', total: 110, delivered: false },
];

const myNewAppointment = {
    startDate: new Date(2022, 1, 1, 9),
    endDate: new Date(2022, 1, 1, 10),
    title: 'My new appointment'
}

const dates = [
    {
        startDate: new Date(2022, 1, 1, 10),
        endDate: new Date(2022, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2022, 1, 1, 15),
        endDate: new Date(2022, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2022, 1, 1, 20),
        endDate: new Date(2022, 1, 1, 21),
        title: "Cena",
    },
];

const hasEvenNumber = numbers.some(number => number % 2 === 0);
const hasDeliveredOrder = orders.some(order => order.delivered);


console.log(someCondition);
console.log(hasEvenNumber);
console.log(hasDeliveredOrder);