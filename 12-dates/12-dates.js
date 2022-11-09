// Working with dates

// Create a date object with the current date and time
const myFirstDate = new Date();
console.log(myFirstDate);


// Create a date object with a specific date
const mySecondDate = new Date('2020-01-01');
console.log(mySecondDate);


// Create a date object with a specific date and time
const myThirdDate = new Date('2021-01-01 12:00:00');
console.log(myThirdDate);


// Calculate minutes between two dates
const minutes = (myThirdDate - mySecondDate) / 1000 / 60;
console.log(minutes);

// Calculate days between two dates
const days = (myThirdDate - mySecondDate) / 1000 / 60 / 60 / 24;
console.log(days);


// Format a date
const myFourthDate = new Date('2021-01-01 12:00:00');
const formattedDate = myFourthDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
});



