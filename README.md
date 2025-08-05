
# 🌟 Core JavaScript 

---

## 1. Basic Programming

### 1.a Variables & Data Types

**Explanation:**
Variables store values. Use `let`, `const`, or `var` (prefer `let`/`const`).

**Data Types:**
- String
- Number
- Boolean
- Null
- Undefined
- Object

**Code Example:**
```js
let name = "Alice";       // String
const age = 30;           // Number
let isStudent = true;     // Boolean
let job = null;           // Null
let hobby;                // Undefined
```

**Questions:**
- Declare a variable `city` with value `"Colombo"`.
- Create a constant `pi` with value `3.1416`.
- What will `console.log(typeof hobby)` output?
- Assign a boolean value to variable `isLoggedIn` and print it.

---

### 1.b Conditional Statements

**Explanation:**
Control flow with `if`, `else if`, `else`, and `switch`.

**Code Example:**
```js
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

switch (age) {
  case 18:
    console.log("Just became adult");
    break;
  case 20:
    console.log("Age is 20");
    break;
  default:
    console.log("Other age");
}
```

**Questions:**
- Write an `if-else` to check if a number is positive or negative.
- Use a `switch` statement to print days of the week for numbers 1–7.
- What happens if you remove `break` in `switch`? Test and explain.

---

### 1.c Loops

**Explanation:**
Loops help repeat tasks. Use `for`, `while`, and `do...while`.

**Code Example:**
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let j = 1;
while (j <= 3) {
  console.log(j);
  j++;
}

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 2);
```

**Questions:**
- Write a `for` loop to print even numbers from 2 to 10.
- Use a `while` loop to print numbers from 5 down to 1.
- Write a `do...while` loop that prints `"Hello"` at least once.

---

## 2. Functions

### 2.a Arrow Functions

**Explanation:**
Arrow functions provide shorter syntax for functions.

**Code Example:**
```js
// Traditional
function add(a, b) {
  return a + b;
}

// Arrow
const addArrow = (a, b) => a + b;

console.log(add(5, 3));       // 8
console.log(addArrow(5, 3));  // 8
```

**Questions:**
- Convert this function:
  ```js
  function greet(name) {
    return "Hello " + name;
  }
  ```
- Write an arrow function to calculate the square of a number.
- Explain differences between traditional and arrow functions.

---

## 3. Basic Data Structures

### 3.a Arrays

**Explanation:**
Arrays hold ordered values accessed by index.

**Code Example:**
```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);       // apple
fruits.push("grape");
console.log(fruits.length);   // 4
```

**Questions:**
- Create an array of 5 numbers and print the third element.
- Add `"mango"` to the end of the array.
- Remove the last element and print the array.

---

### 3.b Objects

**Explanation:**
Objects hold key-value pairs.

**Code Example:**
```js
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log(person.name);         // Alice
console.log(person["age"]);       // 25
person.job = "Developer";
console.log(person);
```

**Questions:**
- Create an object `car` with properties: `make`, `model`, `year`.
- Change the `year` property and print the object.
- Add a new property `color` to the object.

---

## 4. Array Methods

**Explanation:**
Methods to process and transform arrays.

**Code Example:**
```js
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num));  // print each
let squares = numbers.map(num => num * num);
console.log(squares);                      // [1, 4, 9, 16, 25]

let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);                        // [2, 4]

let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);                          // 15
```

**Questions:**
- Use `map` to double all numbers.
- Use `filter` to get numbers > 3.
- Use `reduce` to multiply all numbers.

---

## 5. DOM & Events

**Explanation:**
DOM = Document Object Model (JS view of HTML).  
Events = actions like clicks, keypresses, etc.

### 🧾 HTML Example:
```html
<button id="clickBtn">Click Me</button>
<p id="output"></p>
```

### 🧠 JavaScript:
```js
const button = document.getElementById("clickBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "Button was clicked!";
});
```

**Questions:**
- Create a button that changes paragraph text on click.
- Add an input box and log the value as user types.
- What other events can you use? (e.g., `mouseover`, `keydown`, `submit`)

---

## ✅ Tips for Practice

- Use [JSFiddle](https://jsfiddle.net/), [CodePen](https://codepen.io/), or [Visual Studio Code](https://code.visualstudio.com/)
- Practice typing the examples yourself.
- Try changing values and see what happens.

---

### 🔚 End of Core JavaScript Tutorial
