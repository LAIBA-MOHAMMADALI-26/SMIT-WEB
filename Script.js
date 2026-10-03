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

//loops

let text1 = "";

for (let i = 0; i <= 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text1;


// print even numbers from 0 to 40 by for loop
// print odd numbers from 1-31 for loop
// do these by while loop also 
//table print by for loop and while loop
let text2 = "";

let i = 0;
while (i < 10) {
  text += "The number is " + i + "<br>";
  i++;
}

document.getElementById("demo").innerHTML = text2;

//do while loop 

let text3 = ""
let j= 0;

do {
  text3 += "<br>The number is " + j;
  j++;
}
while (j < 10);  

document.getElementById("demo").innerHTML = text3;


// Ask the user to enter a number between 1 and 10. Repeat until they enter a valid number.

// do with while loop


let text4 = "";

for (let k = 0; k < 10; k++) {
  if (k === 5) { continue; }
  text4 += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text4;

function sayHello() {
  return "Hello World";
}

let greetings = sayHello();

document.getElementById("function").innerHTML = greetings;

//function of multiply, add, subtract, divide



//function with two parameters

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name = fullName("John", "Doe");

document.getElementById("demo4").innerHTML = "The name is  " + name;


// Write a JavaScript function that reverses a number.
// laiba --- abial( reverse a string)


let str = prompt("Enter a string to reverse:");

    let reversedStr = str.split("").reverse().join("");

    document.write("Reversed string: " + reversedStr);

//reverse a string/number

 
  // "1234"
  //  [1,2,3,4] //splits divide the string into comma separated array 
  //reverse [4,3,2,1] it reverses a string 
  //join 4321 ( it converts array to string and removes commmas)
  //  document.write ( reversedstring)


// Example x = 32243;

// Expected Output : 34223


//Make a simple guessing game where the 
// secret number is 7. Keep asking until the user guesses correctly.

//guess -- user input
//secret -- save your secret number
//loop until secret==guess ( you guessed correctly)



// arrow function 
// funcname=parameters(,)=>return

const multiply = (a, b) => a * b;
let result = multiply(4, 5);

document.getElementById("demo5").innerHTML = "The product is: " + result

//ARRAYS ( hetrogeneous , dynamically grow and shrink)
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo6").innerHTML = cars[1];
cars[0] = "Opel";

document.getElementById("demo7").innerHTML = cars;

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let size = fruits.length;
// console.log(size);

//length is n ( but indexes goes from {0 - (n-1)}

//converts array data type to string
// let myList = fruits.toString();
// console.log(myList);
//at takes index ( and returns that element)
// let fruit = fruits.at(2);

//push inserts at last index ( at the end of an array)
//pop removes the last element by default
// fruits.push("Kiwi");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);


// shift removes 1st element from an array ( opp for pop)
// fruits.shift();
// console.log(fruits);
// fruits.unshift("Lemon");
// console.log(fruits);
// // checks the data type of array 
// Array.isArray(fruits);

// fruits[fruits.length] = "Kiwi";
// fruits[3] = "peach";


const fruits = ["Banana", "Orange", "Apple", "Mango"];

// document.write(Array.isArray(fruits));"<br>"

document.write(delete fruits[0]);

//concatenation( joining merging)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

let first="laiba";
let last="ali khan";
console.log(first.concat(last));



// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
fruits.splice(2, 2, "Lemon", "Kiwi");

fruits.splice(0, 1);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
//start and end index( end will run till n-1)

//index of returns the index of the passed element..
// and position is calculated by adding 1 in it.

const fruitsarray = ["Orange", "Apple", "Mango"];
let position = fruitsarray.indexOf("Apple") + 1;

document.getElementById("demo8").innerHTML = "Apple is found in position " + position;

//includes return whether the element is present in the array or not 
//true/false
document.getElementById("demo9").innerHTML = fruits.includes("peach");
//sorting(arranges in alphabetical order)
document.getElementById("demo10").innerHTML = fruits;
fruits.sort();
document.getElementById("demo11").innerHTML = fruits;

// Reverse the array:
fruits.reverse();

//logic for descending ( sort+reverse)

// First sort the array-- alphabetical order ( a-z ) -ascending
fruits.sort();

// Then reverse it:( ascending reversed to descending)
fruits.reverse();



//Find the index of "JavaScript":
// let languages = ["HTML", "CSS", "JavaScript", "React"];

// Find the index of 30:
// let nums = [10, 20, 30, 40, 50];


// Online Store Prices
// let prices = [1200, 450, 999, 300, 1500, 700];

// A customer wants to see products from cheapest to most expensive.

// Sort the array in ascending order.

//a-b( asc)
//b-a( desc)

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;  

points.sort(function(a, b){return a - b});
document.getElementById("demo2").innerHTML = points;

// Student Marks
// let marks = [65, 92, 48, 75, 88, 55];

// A teacher wants to:

// Sort marks from highest to lowest.
// Check whether anyone scored exactly 75.


const points1 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo12").innerHTML = points;  


function myFunction() {
  points.sort(function(){return 0.5 - Math.random()});
  document.getElementById("demo13").innerHTML = points;
}

//random number guessing game , dice rolling 
// let guess= random function 

// guess= 7
// secret =random function 

// 1,2,3,4,5,6( dice )


//OBJECT TOPIC:

// Objects are variables that can store both values and functions.

// Values are stored as key:value pairs called properties.

// Functions are stored as key:function() pairs called methods.
// const objectname={
//   propertykey1:value1 ,
//   properykey2: value2
// }

const car = {
  type:"Fiat",
  model:500,
  color:"white"
};

// Display Data from the Object:
document.getElementById("demo").innerHTML = "The car type is " + car.color;

// car.model ( objectname.propertyname)=value
  //empty object and populate afterwards 


  // Create an empty Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

// Display Data from Object
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";


// access objects properties using [] 
console.log(person["eyeColor"]);
console.log(person.eyeColor);

console.log(person);


// Create an object called student with these properties:

// name: "Ali"
// age: 15
// grade: "9th"

// Then print the entire object.


// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// delete person.age;
// delete person["firstName"];
// document.getElementById("demo").innerHTML = person1.fullName();

//object having student name, class, chemmarks, mathmarks,urdumarks, englishmarks,
// object should have function that calculates the total percentage of student 
// percentage:function ( sum chemmarks, mathmarks,urdumarks, englishmarks) total marks =400 

// call this function to get student percentage and also print student name


//this concept enhances resusaibility ( same function can be used multiple times in
// different object)
const person1 = {
  name: "John",
  hello: function() {
    return "Hello " + this.name;
  }
};

const person2 = {
  name: "Anna",
  hello: function() {
    return "Hello " + this.name;
  }
};

document.getElementById("demo14").innerHTML = person1.hello();

//map
// JS OBJECT MAP 
 // Map() --- object (set,get,has,delete,clear,size,keys,values)

// Create a new Map
const fruits1= new Map();

// Set Map Values	( use to enter values-- set(key,value)) 
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

//in get we pass key and get the value.
let numb = fruits1.get("apples");

document.getElementById("demo").innerHTML = "There are " + numb + " apples.";

//objects 
// API PAYLOADS( JSON) JAVSCRIPT OBJECT NOTATION.


// PERFORMANCE OPTIMZATION 

//creating a map through an array (alternate approach of above)
const fruits2=new Map([
  ["apples",500],
  ["oranges",400],
  ["banana",430]
])

//this basically updates the old value bcz no duplicate keys can exist.
fruits2.set("apples",1000)
let checkfruit=fruits2.get("apples");
console.log(checkfruit);

console.log(typeof fruits2);
//one key value pair makes 1 element.

console.log(fruits2.size);

//deleting a pair pass the key the value will automatically be deleted

fruits2.delete("apples");
//after deleting when i print size so it gives 2 bcz apples pair is deleted

console.log(fruits2.size);

//clear /empty the map
// fruits2.clear();

//it returns 0 bcz whole map is empty.

console.log(fruits2.size);


//has takes key and return boolean ans ( T/F);
fruits2.has("apples");//false
fruits2.has("oranges"); //true


fruits2.keys();

fruits2.values();


// The filter() method creates a new array filled with elements that pass a test provided by a function.
const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// Array.map()///builtin function of array (loop of map-for each)






















































































































































































































































































