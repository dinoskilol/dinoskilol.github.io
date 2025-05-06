---
title: Loops
tags:
  - javascript
---

Loops in JavaScript allow you to repeat a block of code multiple times, which is especially useful when working with collections like arrays. Instead of manually writing repetitive statements, you can iterate over elements dynamically.

For example, instead of writing:

```js
text += items[0] + "<br>";
text += items[1] + "<br>";
text += items[2] + "<br>";
```

You can use a loop:

```js
for (let i = 0; i < items.length; i++) {
  text += items[i] + "<br>";
}
```

## Types of Loops in JavaScript

JavaScript provides several looping constructs:

- `for`: Repeats a block of code a specific number of times
- `for...in`: Iterates over the enumerable properties of an object
- `for...of`: Iterates over the values of iterable objects
- `while`: Repeats code as long as a condition remains true
- `do...while`: Executes code at least once, then repeats as long as a condition remains true

### The `for` Loop

A `for` loop has three parts:

```js
for (initialization; condition; final-expression) {
  // loop body
}
```

- The **initialization** runs once before the loop starts
- The **condition** is checked before each iteration
- The **final-expression** runs after each loop iteration

For example:

```js
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
```

All parts of the `for` statement are optional. If the condition is omitted, you must provide a `break` statement inside the loop to prevent an infinite loop.

### Variable Scope with `let` and `var`

When using `var`:

```js
var i = 10;

for (var i = 0; i < 5; i++) {
  // code
}

// i is now 5
```

When using `let`:

```js
let i = 10;

for (let i = 0; i < 5; i++) {
  // code
}

// i is still 10
```

Using `let` confines the loop variable to the loop's block scope.

### The `for...in` Loop

Use `for...in` to loop through the keys of an object:

```js
const user = { name: "Alice", age: 30, role: "admin" };

for (let key in user) {
  console.log(key + ": " + user[key]);
}
```

Each loop iteration gives you a key, which you can use to access the value.

> Avoid using `for...in` with arrays when order matters. Use a `for`, `for...of`, or `forEach()` instead.

### The `forEach()` Method

Arrays have a built-in `forEach()` method to loop over elements:

```js
const numbers = [1, 2, 3, 4];

numbers.forEach(function(value) {
  console.log(value);
});
```

The callback function can take up to three arguments: the value, the index, and the array itself.

### The `for...of` Loop

Use `for...of` to iterate over values of iterable objects:

```js
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

It also works with strings:

```js
let word = "hello";

for (let char of word) {
  console.log(char);
}
```

### The `while` Loop

The `while` loop continues as long as the condition is true:

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

Always ensure the loop condition changes eventually, or you'll create an infinite loop.

### The `do...while` Loop

This loop guarantees the block will run at least once, since the condition is checked after execution:

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

Even if the condition is false initially, the loop runs once.