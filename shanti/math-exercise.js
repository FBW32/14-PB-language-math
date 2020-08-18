// Math
// Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!
// 1. Minimum and maximum

/* a. Lowest Number
Print out the lowest number between -1 and 4. */
console.log('Lowest number: ', Math.min(-1, 4)); // Lowest number:  -1

/* b. Highest Number
Print out the highest number between -1 and 4. */
console.log('Highest number: ', Math.max(-1, 4)); // Highest number:  4

// 2. Rounding

/* a. Round up
Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342. */
let num1 = 3321.32321;
let num2 = 326.76;
let num3 = 76788.7;
let num4 = -9.78;
let num5 = 43.342;
console.log(Math.ceil(num1)); // 3322
console.log(Math.ceil(num2)); // 327
console.log(Math.ceil(num3)); // 76789
console.log(Math.ceil(num4)); // -9
console.log(Math.ceil(num5)); // 44

/* b. Round down
Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329. */
let myNum1 = 3321.32321;
let myNum2 = 326.76;
let myNum3 = 76788.7;
let myNum4 = -9.78;
let myNum5 = 28.329;
console.log(Math.floor(myNum1)); // 3321
console.log(Math.floor(myNum2)); // 326
console.log(Math.floor(myNum3)); // 76788
console.log(Math.floor(myNum4)); // -10
console.log(Math.floor(myNum5)); // 28

// 3. Dice Roll!
/* Create a program that prints a random integer from 1 - 6. */
let min = 1;
let max = 6;
console.log('Random Integer: ', Math.floor(Math.random() * (max - min + 1) + min)); // Random Integer:  1
