
var phone = "iPhone";

function sayYourPhone() {
    var phone = "Samsung";
    console.log("My phone is " + phone);
}

sayYourPhone();

console.log("My phone is " + phone);




const dog = "Scooby";

function sayHelloToDog() {
    const dog = "Marcelo";
    console.log("Hello " + dog);
}

sayHelloToDog();

console.log("Hello " + dog);



const cat = "Garfield";

function sayHelloToCat() {
    const cat = "Ramon";
    console.log("Hello " + cat);
    
    function sayHelloToCat2() {
        const cat = "Paco";
        console.log("Hello " + cat);
    }
    sayHelloToCat2();
}

sayHelloToCat();

console.log("Hello " + cat);