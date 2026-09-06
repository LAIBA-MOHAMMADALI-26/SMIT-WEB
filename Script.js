// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z
let z = x + y;
let d=x*y;
let f=x-y;
// division --- / 
let e=x/y;
console.log(e);
// modulus ( % it returns remainder)
let r=5%2;
console.log( r)

// increement ++ , decreement -- 

let a=3;
let b=3;
// a exponent b ---- **
console.log(a**b);
// Display z
document.getElementById("demo").innerHTML = "The sum of x + y is: " + z;
document.getElementById("output").innerHTML = "The product of x * y is: " + d;
document.getElementById("my").innerHTML = "The difference of x - y is: " + f;


// 2**3( 2x2x2)


// ASSIGNMENT OPERATOR
let x1 = 10;
// x1=x1%5
x1 %= 5;     
console.log(x1);


// if else conditions
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo1").innerHTML = greeting;
// Problem: Write a program that takes a variable num. 
// If the number is even, log "The number is even" to the console. 
// If it is odd, log "The number is odd". (Hint: Use the remainder operator %).



// ternary operator is the shortcut of is else 
let age = 16;
let text = (age < 18) ?  "Minor" : "Adult";

document.getElementById("demo2").innerHTML = text;

//try even odd test from ternary operator 


// switch operator : 
let day;
let date = new Date().getDay();
 
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

document.getElementById("demo3").innerHTML = "Today is " + day;

const score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}