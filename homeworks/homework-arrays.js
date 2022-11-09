const animals = [
    { type: 'dog', name: 'max',  owner: "john doe", age: 5, weight: 30, categories: [ 'domestic', 'mammal', 'pet', 'quick' ] },
    { type: 'cat', name: 'kitty',  owner: "raquel gonzalez", age: 3, weight: 10, categories: [ 'domestic', 'mammal', 'pet', 'quick' ] },
    { type: 'dog', name: 'rex',  owner: "john cena", age: 1, weight: 20, categories: [ 'domestic', 'mammal', 'pet', 'quick' ] },
    { type: 'parrot', name: 'polly',  owner: "diego perez", age: 4, weight: 1, categories: [ 'domestic', 'bird', 'pet', 'slow' ] },
    { type: 'rabbit', name: 'bugs',  owner: "lionel messi", age: 2, weight: 2, categories: [ 'domestic', 'mammal', 'pet', 'slow' ] },
    { type: 'snake', name: 'kaa',  owner: "cristiano ronaldo", age: 1, weight: 1, categories: [ 'reptile', 'wild', 'slow' ] },
    { type: 'turtle', name: 'speedy',  owner: "dany dakota", age: 1, weight: 10, categories: [ 'reptile', 'wild', 'slow' ] },
    { type: 'lion', name: 'simba',  owner: "ray white", age: 2, weight: 50, categories: [ 'wild', 'mammal', 'quick' ] },
    { type: 'tiger', name: 'shere Khan',  owner: "johnny vidal", age: 3, weight: 45, categories: [ 'wild', 'mammal', 'quick' ] },
    { type: 'elephant', name: 'dumbo',  owner: "alexander kounde", age: 4, weight: 1000, categories: [ 'wild', 'mammal', 'slow' ] },
    { type: 'dog', name: 'lucky',  owner: "john doe", age: 5, weight: 30, categories: [ 'domestic', 'mammal', 'pet', 'quick' ] },
    { type: 'cat', name: 'garfield',  owner: "raquel gonzalez", age: 3, weight: 10, categories: [ 'domestic', 'mammal', 'pet', 'quick' ] },
    { type: 'dog', name: 'fido',  owner: "john cena", age: 1, weight: 20, categories: [ 'domestic', 'mammal', 'pet', 'quick' ] },
    { type: 'parrot', name: 'paco',  owner: "ray white", age: 4, weight: 1, categories: [ 'domestic', 'bird', 'pet', 'slow' ] },
    { type: 'rabbit', name: 'bunny',  owner: "lionel messi", age: 2, weight: 2, categories: [ 'domestic', 'mammal', 'pet', 'slow' ] },
]


// Using the array of animals, do the following:

// Restrictions:
// 1. You can't modify the original array


// 1. Count the number of attributes for all the animals
// expected output: 
//   (this is only an example, the output should be dynamic)
//   {
//     domestic: 5,
//     mammal: 6,
//     pet: 5,
//     quick: 4,
//     bird: 1,
//     slow: 4,
//     reptile: 2,
//     wild: 4
//   }


// 2. Count the number of animals by type
// expected output:
//   (this is only an example, the output should be dynamic)
//   {
//     dog: 2,
//     cat: 1,
//     parrot: 1,
//     rabbit: 1,
//     snake: 1,
//     turtle: 1,
//     lion: 1,
//     tiger: 1,
//     elephant: 1
//   }



// 3. Count the number of animals that are greater than 2 years old and less than 2 years old
// expected output:
//   (this is only an example, the output should be dynamic)
//   {
//     greaterThan2: 5,
//     lessThan2: 5
//   }


// 4. We need to transport the animals to a new zoo, but we can only transport 3 animals at a time.
//    Create a new array of arrays, where each array contains 3 animals, but we only need the type and weight of the animals.
//    If there are not enough animals to fill the last array, fill it with nulls.
// expected output:
//   (this is only an example, the output should be dynamic)
//   
//   [
//     [ 
//       { type: 'dog', name: 'max'},
//       { type: 'cat', name: 'kitty'},
//       { type: 'dog', name: 'rex' }
//     ],
//     [ 
//       { type: 'dog', name: 'max'},
//       { type: 'cat', name: 'kitty'},
//       { type: 'dog', name: 'rex' }
//     ],
//   ]


// 5. Add a year to the age of all the animals

// 6. Create an array with the names of the owners and transform each name to Title Case
// expected output:
//   (this is only an example, the output should be dynamic)
//   [ 'John Doe', 'Raquel Gonzalez', 'John Cena' ]


// 7. Create a new array with the owners, inside each owner object, add a new property called animals,
//    where the value is an array with the animals that belong to that owner. The name of the owner should be Title Case.
// expected output:
//   (this is only an example, the output should be dynamic)
//   [
//     {
//       name: 'John Doe',
//       animals: [
//         { type: 'dog', name: 'max'},
//         { type: 'cat', name: 'kitty'},
//         { type: 'dog', name: 'rex' }
//       ]
//     },
//     {
//       name: 'Raquel Gonzalez',
//       animals: [
//         { type: 'dog', name: 'max'},
//         { type: 'cat', name: 'kitty'},
//         { type: 'dog', name: 'rex' }
//       ]
//     },
//  ]


// 8. Create a new array with categories, where each category is an object with the name of the category 
// and the animals that belong to that category. The name of the category should be Title Case. 
// The animals should be sorted by name.

// Add a new property called hasOtherCategories to each animal, where the value is a boolean that
// indicates if the animal has other categories.

// expected output:
//   (this is only an example, the output should be dynamic)
//   [
//     {
//       name: 'Domestic',
//       animals: [
//         { type: 'dog', age: 2, name: 'max', hasOtherCategories: true },
//         { type: 'cat', age: 3, name: 'kitty', hasOtherCategories: true },
//         { type: 'dog', age: 5, name: 'rex', hasOtherCategories: false }
//       ]
//     },
//   ]


// ***************************************************************************************
// ***************************************************************************************


// Create custom array methods, there is an example in the snippet below

// We can use the function as a prototype
const myArray = [1, 2, 3, 4, 5];

// this will be the new array method
function myCustomForEach(callback) {
    // the keyword this will be the array
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// Here we are adding the function to the prototype of the array
myArray.myCustomForEach = myCustomForEach;

// Then we can invoke the function as a method of the array
myArray.myCustomForEach((item, index, array) => {
    console.log({item, index, array});
});


// 1. Create a custom method called myCustomMap that works like the map method

// 2. Create a custom method called myCustomFilter that works like the filter method

// 3. Create a custom method called myCustomFind that works like the find method

// 4. Create a custom method called myCustomReduce that works like the reduce method

// 5. Create a custom method called myCustomEvery that works like the every method

// 6. Create a custom method called myCustomSome that works like the some method

// 7. Create a custom method called myCustomIncludes that works like the includes method