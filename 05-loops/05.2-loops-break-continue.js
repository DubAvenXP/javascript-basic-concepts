// For i with break and continue

const myArray = [1, 2, 3, 4, 5];

// Example with break
// Breaks out of the loop when the condition is met
for (let i = 0; i < myArray.length; i++) {
    if (i === 3) {
        break;
    }
    console.log(myArray[i]);
}


// Example with continue
// Skips the current iteration when the condition is met
for (let i = 0; i < myArray.length; i++) {
    if (i === 3) {
        continue;
    }
    console.log(myArray[i]);
}