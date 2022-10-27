const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort( (a, b) => a - b );
console.log(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
// words.sort( (a, b) => a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2020, 1, 1, 4),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2021, 4, 1, 4),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2018, 3, 1, 4),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2022, 2, 1, 4),
    },
];

// orders.sort( (a, b) => a.total - b.total );
orders.sort( (a, b) => b.date - a.date );
console.log(orders);