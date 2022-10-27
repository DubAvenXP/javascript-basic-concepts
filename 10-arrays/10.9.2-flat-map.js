const users = [
    { name: 'John', age: 20, attributes: ["Nice", "Cute", "Cool", "Lovely"] },
    { name: 'Sarah', age: 35, attributes: ["Cool", "Lovely"] },
    { name: 'Nick', age: 25, attributes: ["Lovely"] },
    { name: 'Tom', age: 30, attributes: ["Cute"] },
];

const students = [
    { name: 'John', age: 15, level: 'A' },
    { name: 'Jane', age: 12, level: 'B' },
    { name: 'Jack', age: 13, level: 'D' },
    { name: 'Rob', age: 11, level: 'B' },
    { name: 'Nick', age: 10, level: 'C' },
    { name: 'Jess', age: 8, level: 'C' },
];

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);
const rta3 = Object.values(calendars).flat().map(calendar => calendar.startDate);
console.log(rta);
console.log(rta2);
console.log(rta3);

const myWords = ['hola mundo', 'hola mundo 2'];
const rta4 = myWords.flatMap(word => word.split(' '));

console.log(rta4);