// Use map to create an array of doubled numbers.
// Use filter to get all numbers greater than 3.
// Use reduce to multiply all numbers together.
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map(num => num * 2);
console.log(double);

let greater = numbers.filter( num => num>3);
console.log(greater);

let multiply = numbers.reduce((mul,num) => mul * num , 1);
console.log(multiply);