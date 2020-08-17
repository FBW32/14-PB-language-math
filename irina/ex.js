// Math

// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));


// b. Highest Number
// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4));

// 2. Rounding
// a. Round up
// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
let num1 = 3321.32321;
console.log(Math.ceil(num1));  // 3322
let num2 = 326.76; 
console.log(Math.round(num2)); //327
let num3 = 76788.7; 
console.log(Math.round(num3)); //76789
let num4 = -9.78; 
console.log(Math.ceil(num4)); //-9
let num5 = 43.342; 
console.log(Math.ceil(num5)); //44


// b. Round down
// Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
console.log(Math.floor(num1)); // 3321
console.log(Math.floor(num2)); // 326
console.log(Math.floor(num3)); // 76788
console.log(Math.floor(num4)); //-10
console.log(Math.floor(28.329)); //28

// 3. Dice Roll!
// Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random() * ((6 - 1 ) + 1))); //4

//4.
let toInt = 5.68776654556778
 // output 1) 5.687
 // output 2) toInt + 4 ===> 9.687
 console.log(toInt.toFixed(3));
 console.log((parseFloat(toInt.toFixed(3)) + 4).toFixed(3));