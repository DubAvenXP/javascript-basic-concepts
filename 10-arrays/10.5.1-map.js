const letters = ['a', 'b', 'c'];

const myNewArray = []

for (let i = 0; i < letters.length; i++) {
    myNewArray.push(letters[i].toUpperCase());
}

const myArray = letters.map(letter => letter.toUpperCase());

const stringOfLetters = letters.join('');