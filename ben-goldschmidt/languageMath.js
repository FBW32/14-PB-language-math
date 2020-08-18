// Math
// Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!



// QUESTION 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.

console.log('The lowest nbumber is ', Math.min(-1, 0, 1, 2, 3, 4));
// -1

// b. Highest Number
// Print out the highest number between -1 and 4.
console.log('The highest number is ', Math.max(-1, 0, 1, 2, 3, 4));
// 4



// QUESTION 2. Rounding
// a. Round up --> Math.ceil()
// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

let ceilNum1 = 3321.32321;
console.log(Math.ceil(ceilNum1));
// 3322

let ceilNum2 = 326.76;
console.log(Math.ceil(ceilNum2));
// 327

let ceilNum3 = 76788.7;
console.log(Math.ceil(ceilNum3));
// 76789

let ceilNum4 = -9.78;
console.log(Math.ceil(ceilNum4));
// -9

let ceilNum5 = 43.342;
console.log(Math.ceil(ceilNum5));
// 44

// b. Round down
// Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

let floorNum1 = 3321.32321;
console.log(Math.floor(floorNum1));
// 3321

let floorNum2 = 326.76;
console.log(Math.floor(floorNum2));
// 326

let floorNum3 = 76788.7;
console.log(Math.floor(floorNum3));
// 76788

let floorNum4 = -9.78;
console.log(Math.floor(floorNum4));
// -10

let floorNum5 = 43.342;
console.log(Math.floor(floorNum5));
// 43


// 3. Dice Roll!
// Create a program that prints a random integer from 1 - 6.

console.log(Math.random() * 1) - 6;