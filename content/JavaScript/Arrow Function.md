---
title: Arrow Function
tags:
  - javascript
---

Arrow functions in JavaScript provide a more concise way to define functions. They are often used for short functions that perform simple operations. Instead of using the traditional `function` keyword, arrow functions use a syntax that involves the `=>` operator, making them easier and faster to write.

```js
let multiply = (x, y) => x * y;
```

This function takes two parameters, `x` and `y`, and returns their product.

## Before Arrow

Before arrow functions were introduced, a function had to be written like this:

```js
const greet = function() {
  return "Welcome!";
}
```

## With Arrow

With arrow function syntax, the same code becomes shorter and easier to read:

```js
const greet = () => {
  return "Welcome!";
}
```

If the function body contains only a single return statement, you can simplify it even more by omitting the curly braces and the `return` keyword.

## Arrow Functions Return Value by Default

This simplification works only when the function contains exactly one expression that returns a value. Here's how it looks:

```js
const greet = () => "Welcome!";
```

This version is not only shorter but also easier to interpret when reading code, especially when used for inline callbacks or simple computations.

## Arrow Function with Parameters

When your arrow function needs to accept parameters, you can include them within parentheses like this:

```js
const greet = (name) => "Welcome, " + name + "!";
```

This function takes a single argument and returns a personalized greeting message.

## Arrow Function without Parentheses

If the function takes just one parameter, you can omit the parentheses entirely. This is optional, but it can further simplify your code:

```js
const greet = name => "Welcome, " + name + "!";
```

This feature makes arrow functions particularly suitable for short callbacks or quick inline computations.

# What about [[this Keyword|this]]?

One key difference between arrow functions and traditional functions is how they handle the `this` keyword. In traditional functions, `this` refers to the object that invokes the function. That could be the window, a DOM element, or another object depending on the context in which the function is called.

However, arrow functions do not bind their own `this`. Instead, they inherit `this` from the surrounding lexical context—the place in the code where the arrow function was defined.

To understand this, consider the following two examples. Both define a function and use it in two different event listeners: one that runs on page load and one that runs on a button click.

## Regular Function Example

```js
const showThis = function() {
  document.getElementById("output").innerHTML += this + "<br>";
}

window.addEventListener("load", showThis);
document.getElementById("myButton").addEventListener("click", showThis);
```

In this case, when the page loads, `this` refers to the `window` object, because the function was called by the window. When the button is clicked, `this` refers to the button element, because the button triggered the function.

## Arrow Function Example

```js
const showThis = () => {
  document.getElementById("output").innerHTML += this + "<br>";
}

window.addEventListener("load", showThis);
document.getElementById("myButton").addEventListener("click", showThis);
```

Here, regardless of whether the function is triggered by the window or by the button, `this` still refers to the context where the arrow function was defined. That’s because arrow functions do not create their own `this`; they retain the one from their defining scope.

Understanding this behavior is essential when you work with event listeners, callbacks, and methods within objects. Sometimes you need the dynamic `this` behavior of regular functions, while in other cases, the stable `this` of arrow functions avoids confusion.
