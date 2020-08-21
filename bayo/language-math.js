// 21.08.2020
// EXERCISE 1A
// Print out the lowest number between -1 and 4.
let firstNum = -1
let secondNum = 4
console.log(Math.min(firstNum, secondNum));

// EXERCISE 1B
//Print out the highest number between -1 and 4. 
let thirdNum = -1
let fourthNum = 4
console.log(Math.max(thirdNum, fourthNum));

// EXERCISE 2A
// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
let fifthNum = 3321.32321
console.log(Math.round(fifthNum)); //3321

let sixthNum = 326.76
console.log(Math.round(sixthNum)); // 327

let seventhNum = 76788.7
console.log(Math.round(seventhNum)); // 76789

let eightNum = -9.78
console.log(Math.round(eightNum));  // -10

let NinethNum = 43.342
console.log(Math.round(NinethNum));  // 43


// EXERCISE 2B
// Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

let tenthNum = 3321.32321
console.log(Math.floor(tenthNum)) // 3321

let eleventhNum = 326.76
console.log(Math.floor(eleventhNum))  //  326

let twelveNum = 76788.7
console.log(Math.floor(twelveNum))     // 76788

let thirtheenNum = -9.78
console.log(Math.floor(thirtheenNum))   // -10

let fourteenNum = 43.342
console.log(Math.floor(fourteenNum)) //43 


// EXERCISE 3
// Create a program that prints a random integer from 1 - 6.
let maxNum = 6
let minNum = 1
console.log(Math.floor(Math.random() * (maxNum - minNum) + 2 )); // Random numbers