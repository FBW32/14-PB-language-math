let result1 = Math.min(-1, 4);
console.log(result1);
let result2 = Math.max(-1, 4);
console.log(result2);
//2-a
let myNum1 = [3321.32321, 326.76, 76788.7, -9.78, 43.342];
myNum1.forEach((element) => {
  let result3 = Math.ceil(element);
  console.log(result3);
});
//2-b
let myNum2 = [3321.32321, 326.76, 76788.7, -9.78, 28.329];
myNum1.forEach((element) => {
  let result4 = Math.floor(element);
  console.log(result4);
});

//3
let result5 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(result5);
