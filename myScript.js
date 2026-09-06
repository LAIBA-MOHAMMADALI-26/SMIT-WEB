function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
document.write(5 + 6);

window.alert(5 + 6);
// console.log(5+6);

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter, a $ sign or an underscore (_).
// Names are case sensitive (X is different from x).
// Reserved words (JavaScript keywords) cannot be used as names.

_lastName = "Johnson";

console.log(_lastName);

{
var name = "John Doe";

var name = 0;

}

const PI = 3.141592653589793;
PI = 3.14


// CONST VALUES CAN NOT BE REASSIGNED.. THEY REMAIN SAME THROUGH OUT THE PROGRAM
// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Boolean
let x = true;
let y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;