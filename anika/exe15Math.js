//*************EXERCISE 15 MATH*****************

// # Math

// **Perform Mathematical Tasks with JavaScript. Remember: you must use the `Math` functions and print all results to the console!**

// ## 1. Minimum and maximum

// ### a. Lowest Number

// Print out the lowest number between -1 and 4.

console.log(Math.min(-1, 0, 1, 2, 3, 4)); // -1

// ### b. Highest Number

// Print out the highest number between -1 and 4.

console.log(Math.max(-1, 0, 1, 2, 3, 4)); // 4

// ## 2. Rounding

// ### a. Round up

// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

console.log(Math.ceil(3321.32321)); // 3322
console.log(Math.ceil(326.76)); // 327
console.log(Math.ceil(76788.7)); // 76789
console.log(Math.ceil(-9.78)); // -9
console.log(Math.ceil(43.342)); // 44

// ### b. Round down

// Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

console.log(Math.floor(3321.32321)); // 3321
console.log(Math.floor(326.76)); // 326
console.log(Math.floor(76788.7)); // 76788
console.log(Math.floor(-9.78)); // -10
console.log(Math.floor(43.342)); // 43

// ## 3. Dice Roll!

// Create a program that prints a random **_integer_** from 1 - 6.

console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1)); // 5
