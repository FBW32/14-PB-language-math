// a. Lowest Number - Print out the lowest number between -1 and 4.

console.log('Lowest number is -->', Math.min(-1, 4)); // Lowest number is --> -1


// b. Highest Number - Print out the highest number between -1 and 4.

console.log('Highest number is -->', Math.max(-1, 4)); // Highest number is --> 4


// ROUNDING

// a. Round up, Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.


let num1 = 3321.32321;
let num2 = 326.76;
let num3 = 76788.7;
let num4 = -9.78;
let num5 = 43.342;

console.log(Math.ceil(num1)); //  3322
console.log(Math.ceil(num2)); //  327
console.log(Math.ceil(num3)); //  76789
console.log(Math.ceil(num4)); // -9
console.log(Math.ceil(num5)); // 44



 // b. Round down. Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

 let num6 = 3321.32321;
 let num7 =  326.76;
 let num8 = 76788.7;
 let num9 = -9.78;
 let num10 = 28.329;


 console.log(Math.floor(num6)); // 3321
 console.log(Math.floor(num7)); // 326
console.log(Math.floor(num8)); // 
console.log(Math.floor(num9)); // -10
console.log(Math.floor(num10)); // 28


// 3. Dice Roll! Create a program that prints a random integer from 1 - 6.

let maxNum = 6;
let minNum = 1;
console.log(Math.floor(Math.random() * (maxNum - minNum + 1) + 1));



