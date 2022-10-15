// validates strong password with at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character
const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const password = "P@ssw0rd";

const appleRegex = /\b(Apple)+\b/g;

const fruits = "Apple, Banana, Kiwi, Apple, orange, etc. ";

// .matchAll() returns an iterator

for (const match of fruits.matchAll(appleRegex)) {
    console.log(match);
}
