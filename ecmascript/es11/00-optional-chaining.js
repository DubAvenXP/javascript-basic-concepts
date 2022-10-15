const users = {
    alex: {
        name: "Alex",
        age: 20,
        skills: {
            html: 0,
            css: 1,
        },
    },
    john: {
        name: "John",
        age: 25,
        skills: {
            html: 3,
            css: 2,
            js: 4,
        },
    },
};

console.log(users?.daniel?.country);
console.log(users.daniel?.country);
console.log(users.john.country);
// console.log(users?.daniel?.country);
