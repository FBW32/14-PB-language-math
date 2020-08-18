// a. Round up

// a. Lowest Number

console.log(`minNum`, Math.min(-1, 0, 1, 2, 3, 4)); //minNum -1

//b. Highest Number

console.log(`maxNum`, Math.max(-1, 0, 1, 2, 3, 4)); // maxNum 4

//2. a. Round up

console.log(`rounded1`, Math.ceil(3321.32321)); // rounded1 3322
console.log(`rounded2`, Math.ceil(326.76)); // rounded1 327
console.log(`rounded3`, Math.ceil(76788.7)); // rounded1 76789
console.log(`rounded4`, Math.ceil(-9.78)); // rounded1 -9
console.log(`rounded5`, Math.ceil(43.342)); // rounded1 44

//2. b. Round down

console.log(`rounded6`, Math.floor(3321.32321)); // rounded1 3321
console.log(`rounded7`, Math.floor(326.76)); // rounded1 326
console.log(`rounded8`, Math.floor(76788.7)); // rounded1 76788
console.log(`rounded9`, Math.floor(-9.78)); // rounded1 -10
console.log(`rounded10`, Math.floor(28.329)); //  rounded1 28

// Dice Roll

let min = 1;
let max = 6;
let randomFrom1to6 = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`randomFrom1to6`, randomFrom1to6);
