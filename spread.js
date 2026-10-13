// JavaScript Spread Operator (...) — Lecture Notes
// 1. What is the Spread Operator?

// The spread operator (...) in JavaScript is used to expand the
//  elements of an array or the properties of an object.

// Easy words mein: spread operator kisi array ya object ke 
// elements/properties ko spread ya unpack kar deta hai.

// Syntax:

// ...array
// ...object

// Spread operator ko mostly in situations mein use karte hain:

// Copying an array

// Merging arrays

// Adding new elements to an array

// Copying objects

// Merging objects

// Passing array values to a function

// 2. Spread Operator with Arrays
// Example 1: Copying an array

// Without spread operator, agar hum array ko directly doosre variable mein assign karein, 
// to dono variables same array ko reference karte hain.

let arr1 = [10, 20, 30];

let arr2 = arr1;

arr2.push(40);

console.log(arr1);
console.log(arr2);
// Output:
[10, 20, 30, 40]
[10, 20, 30, 40]

// Why? Because arr1 and arr2 reference the same array.

// Using spread operator:

let array1 = [10, 20, 30,50,80,90];

let array2 = [...array1];

array2.push(40);

console.log(array1);
console.log(array2);

// Output:
[10, 20, 30,50,80,90]
[10, 20, 30,50,80,90, 40]

// Ab array2 ek new array hai. Is liye array2 mein change karne se array1 change nahi hota.

// Example 2: Merging two arrays
let boys = ["Ali", "Ahmed"];
let girls = ["Sara", "Ayesha"];

let students = [...boys, ...girls];

console.log(students);

// Output:

["Ali", "Ahmed", "Sara", "Ayesha"]

// Yahan dono arrays ke elements ek new array mein merge ho gaye.

// Example 3: Adding elements to an array
let numbers = [20, 30, 40];

let updatedNumbers = [10, ...numbers, 50];

console.log(updatedNumbers);

// Output:

[10, 20, 30, 40, 50]

// Spread operator ki help se hum beginning, middle, ya end mein elements add kar sakte hain.





// q2>Q3. Food Delivery App — Add Items at Both Ends
// A food delivery app has a list of ordered items. Add "Water"
//  at the beginning and "Dessert" at the end without directly modifying the original array.



// Q1. Shopping Cart — Copy an Array

// A shopping website has a cart containing three products. You want to create a separate cart for a customer and add one more product without changing the original cart.

// Create a copy using the spread operator.

// Add "Headphones" to the new cart.

// Print both arrays.




// The main difference is:

// Rest Operator (...) collects values into an array or object.

// Spread Operator (...) expands values from an array or object.

// Both use the same three dots (...), but their purpose depends on where they are used.

// 1. Rest Operator — Collect
let numbers1 = [10, 20, 30, 40, 50];

let [first,...remaining] = numbers;

console.log(first);      // 10
console.log(remaining);  // [20, 30, 40, 50]

// Here, ...remaining collects all the remaining array elements into a new array.
