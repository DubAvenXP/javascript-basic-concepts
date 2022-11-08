// Syntactic sugar is a term for a more 
// concise syntax that provides the same 
// functionality for something that already exists. 
// It aims to help make code shorter, therefore, easier to write. 
// No new functionality is introduced.




// Prototypes with class syntax
class Student {

    constructor({name, age, approvedCourses = []}) {
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
    }

    approveCourse(course) {
        this.approvedCourses.push(course);
    }
}

const data = {
    name: 'Maria',
    age: 25,
    approvedCourses: ['HTML', 'CSS']
}

const maria = new Student(data);
maria.approveCourse('JS');