const letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
    console.log('for', letters[i]);
}

letters.forEach(letter => console.log('for each', letter));
