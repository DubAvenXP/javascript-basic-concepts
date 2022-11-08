
// Prototype 

// Prototypes are the mechanism by which JavaScript 
// objects inherit features from one another.

// All objects in javascript inherit from Object.prototype
// and that is why we can use methods like toString() or hasOwnProperty()

function Student(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;

}

// Definig a prototype method in student prototype
Student.prototype.approveCourse = function (course) {
    this.approvedCourses.push(course);
}

// Definig a prototype method in student prototype
// to say hello
Student.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
}

// Instance of Student
const john = new Student('John Doe', 25, ['Javascript', 'CSS']);

