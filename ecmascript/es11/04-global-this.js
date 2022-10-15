// window is defined in the browser
// the object window, allows you to know all
// the web apis that browser have integrated 

console.log(window);

// global is defined in Node.js
console.log(global);

// self is defined in Web Workers
console.log(self);

// globalThis is defined in the ECMAScript 2020

// globalThis can be used in any environment and it will return the 
// global object regardless of how the code is executed.

console.log(globalThis);