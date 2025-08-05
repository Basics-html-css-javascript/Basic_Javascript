let numbers = [1,2,3,4,5];

// forEach - print each item
numbers.forEach(num=>console.log(num));

// map - square each number
let square = numbers.map(num => num * num);
console.log(square);

// filter - even numbers only
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// reduce - sum of all numbers
let sum = numbers.reduce((total,num) => total + num , 0);
console.log(sum);

