// map() — Har element ko transform karta hai

// map() array ke har element par function chalata hai aur new array return karta hai.

// map() → takes every element → does something → returns a new array.
// Example 1: Numbers ko double karna

let numbers = [10, 20, 30, 40, 50];

let result = numbers.map(function (num) {
    return num * 2;
});
console.log(result);
// 20,40,60,80,100

// Q2. Add 5 to every number

// Q3. Convert names to lowercase

let names = ["ali", "ahmed", "sara", "laiba"];

let result1 = names.map(function(name) {
    return name.toLowerCase();
});

console.log(result1);

// Q4. Find the square of every number

let numbersarray = [2, 3, 4, 5];

let result2 = numbersarray.map(function(num) {
    return num * num;
});

console.log(result2);

//Q5.Add "Mr." before every name

// "Mr." + 
let naes = ["Ali" , "Sara" , "Fatima" , "Ahmed"]

const arr = naes.map(function(name){

    return "Mr." + name

});

console.log(arr);

// q6. Print the length of every name in an array 


// const names = ["Ali", "Ahmed", "Sara"];
// Expected result:
// [3, 5, 4]


// Create a Map(for each is for iterating the key value pairs)
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// List all Entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

