// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have 
// some syntax and semantics that are not shared with ES5 class-like semantics.


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