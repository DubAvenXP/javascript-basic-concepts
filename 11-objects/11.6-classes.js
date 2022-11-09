// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have 
// some syntax and semantics that are not shared with ES5 class-like semantics.


class Student {

    #name;
    #age;

    constructor({name, age, approvedCourses = []}) {
        // private properties using the new syntax #
        this.#name = name;
        this.#age = age;
        
    }

    approveCourse(course) {
        this.approvedCourses.push(course);
    }

    // static methods are methods that are not available in the instances
    // they are only available in the class
    static sayHello() {
        console.log('Hello');
    }

    // getters and setters are methods that are used to get and set the value of a property
    get name() {
        return this.#name;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            console.error('Name must be a string');
            return;
        }
        this.#name = newName;
    }
}

const data = {
    name: 'Maria',
    age: 25,
    approvedCourses: ['HTML', 'CSS']
}

const maria = new Student(data);
maria.approveCourse('JS');