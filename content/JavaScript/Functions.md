---
title: Functions
tags:
  - javascript
---

Functions in JavaScript are reusable blocks of code that perform specific tasks. They help organize logic, avoid repetition, and structure programs efficiently.

---

## Declaring a Function

A function is defined using the `function` keyword, followed by a name, followed by parentheses `()` that may contain parameters, and a code block enclosed in `{}`.

```js
function multiply(a, b) {
  return a * b;
}
```

In this example:

- `multiply` is the function name
- `a` and `b` are parameters
- The function returns the product of `a` and `b`

---

## Function Components

- **Function Name**: Should follow the same naming rules as variables (letters, digits, underscores, or `$`, and not starting with a digit).
- **Parameters**: Placeholders for values passed into the function.
- **Return Statement**: Defines the value returned by the function to the caller.

---

## Calling a Function

You call a function by using its name followed by parentheses:

```js
let result = multiply(5, 3);  // returns 15
```

The arguments inside the parentheses are passed to the parameters defined in the function.

---

## Function Return Values

The `return` statement exits the function and sends a value back:

```js
function getGreeting(name) {
  return "Hello, " + name + "!";
}

let message = getGreeting("Sophie");  // "Hello, Sophie!"
```

If no `return` is specified, the function returns `undefined` by default.

---

## Functions as Values

You can assign functions to variables and pass them as arguments:

```js
const greet = function(name) {
  return `Hi, ${name}`;
};

console.log(greet("Sam"));  // "Hi, Sam"
```

---

## The `()` Operator

Using `()` after a function name invokes it. Omitting `()` will reference the function without executing it:

```js
sayHi();      // calls the function
sayHi;        // references the function
```
