const orders = [
    { customerName: 'John', total: 230, delivered: true },
    { customerName: 'Jane', total: 330, delivered: false },
    { customerName: 'Jack', total: 400, delivered: true },
    { customerName: 'Rob', total: 530, delivered: false },
    { customerName: 'Nick', total: 260, delivered: false },
    { customerName: 'Jess', total: 110, delivered: false },
];

const students = [
    { name: 'John', age: 15, level: 'A' },
    { name: 'Jane', age: 12, level: 'B' },
    { name: 'Jack', age: 13, level: 'D' },
    { name: 'Rob', age: 11, level: 'B' },
    { name: 'Nick', age: 10, level: 'C' },
    { name: 'Jess', age: 8, level: 'C' },
];

const numbers = [1, 0, 1, 0, 0, 0];

const otherNumbers = [1, 3, 2, 4, 5, 1, 2,7, 8, 10, 9, 6, 7, 5, 3, 8, 1, 4, 5];

const isBetween = (num, min, max) => num >= min && num <= max;

const numberCounter = numbers.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

const deliveredCounter = orders.reduce((counter, order) => {
    order.delivered ? counter.delivered++ : counter.undelivered++;
    return counter;
}, { delivered: 0, undelivered: 0 });

const studentsByLevel = students.reduce((response, student) => {
    if (!response[student.level]) {
        response[student.level] = 1;
    } else {
        response[student.level] = response[student.level] + 1;
    }
    return response;
}, {});

const ranges = otherNumbers.reduce((response, number) => {
    const keys = Object.keys(response);
    
    keys.forEach(key => {
        const [ min, max ] = key.split('-');
        if (isBetween(number, min, max)) response[key]++;
    })

    return response;
}, { "0-5": 0, "6-8": 0, "9-10": 0 });

console.log(numberCounter);
console.log(deliveredCounter);
console.log(studentsByLevel);
console.log(ranges);