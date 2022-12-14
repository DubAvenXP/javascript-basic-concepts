// FlatMap (flatMap)

// Is flat is used to flatten an array of arrays into a single array
// Is map is used to transform the elements of an array

// Is flatMap is used to flatten an array of arrays into a single array 
// and then transform the elements of the array

const users = [
    { name: 'John', age: 20, attributes: ["Nice", "Cute", "Cool", "Lovely"] },
    { name: 'Sarah', age: 35, attributes: ["Cool", "Lovely"] },
    { name: 'Nick', age: 25, attributes: ["Lovely"] },
    { name: 'Tom', age: 30, attributes: ["Cute"] },
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

const example1 = users.map(user => user.attributes).flat();
const example2 = users.flatMap(user => user.attributes);

console.log(example1);
console.log(example2);


// const rta3 = Object.values(calendars).flat().map(calendar => calendar.startDate);
// console.log(rta3);

const myWords = ['hola mundo', 'hola mundo 2'];
const rta4 = myWords.flatMap(word => word.split(' '));

console.log(rta4);