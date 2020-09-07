// 1 Minimum and Maximum
// A. Lowest Number

console.log(Math.min(-1, 0, 1, 2, 3, 4)); // -1 

// B. Highest Number

console.log(Math.max(-1, 0, 1, 2, 3, 4)); // 4

//-------###-------
// 2. Rounding 
// A. Round up 

let roundUpNum = Math.ceil(3321.32321)
console.log(roundUpNum);
// 3322

let roundUpNum2 = Math.ceil(326.76)
console.log(roundUpNum2);
// 327

let roundUpNum3 = Math.ceil(76788.7)
console.log(roundUpNum3);
// 76789 

let roundUpNum4 = Math.ceil(-9.78)
console.log(roundUpNum4);
// -9

let roundUpNum5 = Math.ceil(43.342)
console.log(roundUpNum5);
// 44

// B. Round Down

let roundDonwNum = Math.floor(3321.32321)
console.log(roundDonwNum);
// 3321

let roundDonwNum2 = Math.floor(326.76)
console.log(roundDonwNum2);
// 326

let roundDonwNum3 = Math.floor(76788.7)
console.log(roundDonwNum3);
// 76788

let roundDonwNum4 = Math.floor(-9.78)
console.log(roundDonwNum4);
// -10

let roundDonwNum5 = Math.floor(43.342)
console.log(roundDonwNum5);
// 43

// --------###-------
// 3. Dice Roll!
let diceRoll = Math.random() * 6
console.log(diceRoll)