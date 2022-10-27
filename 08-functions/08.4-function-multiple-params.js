// Rest operator in functions
const printInfo = (firstName, lastName, ...restOfInfo) => {
    console.log(firstName);
    console.log(lastName);
    console.log(restOfInfo);
};

printInfo("Erick", "García", 27, "GT", false);


// We can destruct params and assign default values
const createPerson = ({name, age, country, dpi, job, weight = "200kg"}) => {
    console.log(name, age, country, dpi, job, weight);
};


// arguments with object
createPerson({
    name: "Erick",
    age: 27,
    country: "GT",
    dpi: "123456789",
    job: "Software Engineer",
});

// We can pass arguments in any order if we an object
createPerson({
    country: "BR",
    name: "João",
    job: "Developer",
    dpi: "987654321",
    age: 88,
});