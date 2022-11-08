// Relationals operators

// A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.


// Opeator in

// The in operator returns true if the specified property is in the specified object. The syntax is:
// propNameOrNumber in objectName


// Arrays
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false

// returns false (you must specify the index number,
// not the value at that index)
'bay' in trees; 
console.log('bay' in trees);

'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
const myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
const mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true






// Operator instanceof

// The instanceof operator returns true if the specified object is of the specified object type. The syntax is:
// objectName instanceof objectType

const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}

