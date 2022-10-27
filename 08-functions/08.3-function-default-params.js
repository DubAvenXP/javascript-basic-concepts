
// Default params 1
function newUser(name, age, country, isStudent) {
    const name = name || 'Erick';
    const age = age || 27;
    const country = country || 'GT';
    const isStudent = isStudent || false;

    console.log(name, age, country, isStudent);
}

// newUser();
// newUser('Ricardo', 23, 'MX', true);



// Default params 2
function newUser2(name = 'Erick', age = 27, country = 'GT', isStudent = false) {
    console.log(name, age, country, isStudent);
}

// newUser2();
// newUser2('Rodrigo', 24, 'GT', false);



// Default params 3

// Using nullish coalescing operator

// Nullish coalescing operator is used to assign a default value to a variable
// if the value of the variable is null or undefined

function newUser3(name, age, country, isStudent) {
    const name = name ?? 'Erick';
    const age = age ?? 27;
    const country = country ?? 'GT';
    const isStudent = isStudent ?? false;
    console.log(name, age, country, isStudent);
}