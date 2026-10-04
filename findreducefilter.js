// ========================================
// Difference Between find(), filter() and reduce()
// ========================================


// ========================================
// 1. find()
// ========================================
// find() array mein se PEHLI value return karta hai
// jo condition ko satisfy kare.

let numbers = [10, 20, 30, 40, 50];

let findResult = numbers.find(function (num) {
    return num > 25;
});

console.log("find() result:", findResult);


// Output:
// 30
// Kyun ke 30 pehli value hai jo 25 se greater hai.


// ========================================
// 2. filter()
// ========================================
// filter() array mein se SAARI values return karta hai
// jo condition ko satisfy karti hain.

let filterResult = numbers.filter(function (num) {
    return num > 25;
});

console.log("filter() result:", filterResult);

// Output:
// [30, 40, 50]
// Kyun ke 30, 40 aur 50 teeno 25 se greater hain.



// ========================================
// 3. reduce()
// ========================================
// reduce() array ki multiple values ko
// combine karke ONE final result deta hai.

// Example: Total calculate karna
// 10,20,30,40,50
let reduceResult = numbers.reduce(function (sum, num) {
    return sum + num;
},0);


console.log("reduce() result:", reduceResult);
//addition - initial value =0 
//multiplication -initial value=1
//product calculate of array 0-->1

// Output:
// 150

// ========================================
// EASY DIFFERENCE
// ========================================

// find()
// PEHLA matching element
// Result: Single value

// filter()
// SAARE matching elements
// Result: New array

// reduce()
// Multiple values ko combine karta hai
// Result: Single final value


// we want to filter out odd numbers from array.
//using filter ( filter out odd numbers from array)
//even numbers


//remove odd from array 
