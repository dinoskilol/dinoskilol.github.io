---
title: this Keyword
tags:
  - javascript
---

```js
const user = {
  firstName: "Emily",
  lastName: "Stone",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```

## Understanding `this` in JavaScript

The `this` keyword is a special identifier in JavaScript that refers to the object that is currently executing the code. The value of `this` depends entirely on how a function is called.

> `this` is a keyword, not a variable. Its value is automatically set by the context in which it is used and cannot be assigned or changed manually.

---

## `this` in Object Methods

When `this` is used inside a method (a function attached to an object), it refers to the object that the method belongs to.

```js
const car = {
  brand: "Tesla",
  model: "Model 3",
  description: function() {
    return this.brand + " " + this.model;
  }
};
```

Here, `this` refers to `car`, so calling `car.description()` will return `"Tesla Model 3"`.

---

## `this` in Global Scope

When used outside of any function or object, `this` refers to the global object:

```js
console.log(this);  // In a browser, logs the window object
```

In browsers, the global object is `window`. In Node.js, it's `global`.

---

## `this` in Regular Functions

If `this` is used inside a normal function (not inside an object), it defaults to the global object:

```js
function showThis() {
  return this;
}
```

If strict mode is enabled (`'use strict';`), `this` inside a regular function becomes `undefined`.

---

## `this` in Event Handlers

Inside HTML event handlers, `this` refers to the HTML element that triggered the event:

```html
<button onclick="this.textContent = 'Clicked!'">Click Me</button>
```

In this example, `this` refers to the button that was clicked.

---

## Changing `this` with `bind()`, `call()`, and `apply()`

You can explicitly set the value of `this` using these methods:

```js
function greet() {
  return this.name;
}

const person = { name: "Alex" };

greet.call(person);   // returns "Alex"
greet.apply(person);  // also returns "Alex"

const boundGreet = greet.bind(person);
boundGreet();         // returns "Alex"
```

- `call()` invokes the function immediately with a specified `this` value.
- `apply()` works like `call()`, but arguments are passed as an array.
- `bind()` returns a new function with `this` permanently set.

---

## Precedence of `this` Binding

The value of `this` is resolved according to the following rules, from highest to lowest priority:

| Priority | Binding Context     |
|----------|----------------------|
| 1        | Explicit with `bind()` |
| 2        | Explicit with `call()` or `apply()` |
| 3        | Method call on an object |
| 4        | Default (global scope or `undefined` in strict mode) |