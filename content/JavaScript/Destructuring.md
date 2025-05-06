---
title: Destructuring
tags:
  - javascript
---

Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects and assign them to variables. This syntax improves readability and reduces repetitive code when dealing with structured data.

```js
let { firstName, lastName } = person;
```

This line extracts `firstName` and `lastName` from an object named `person` and assigns their values to local variables.

It also works with arrays and other iterable values:

```js
let [firstName, lastName] = nameArray;
```

---

## Object Destructuring

Object destructuring allows you to pull out properties from an object and assign them to variables with matching names:

```js
const user = {
  firstName: "Alice",
  lastName: "Smith",
  age: 28
};

let { firstName, lastName } = user;
```

The order of the properties in the destructuring statement does not matter. Also, the original object remains unchanged.

```js
let { lastName, firstName } = user;
```

### Default Values

You can specify default values for properties that may be missing in the object:

```js
let { firstName, country = "Unknown" } = user;
```

In this case, if `country` doesn't exist in `user`, it will default to `"Unknown"`.

### Aliasing Properties

You can also assign properties to variables with different names using a colon:

```js
let { lastName: surname } = user;
```

Here, `surname` will contain the value of `user.lastName`.

---

## String Destructuring

Strings are iterable, so you can destructure them to extract characters:

```js
let name = "Alice";

let [char1, char2, char3] = name;
```

This will assign `'A'` to `char1`, `'l'` to `char2`, and so on.

---

## Array Destructuring

Arrays can be destructured to extract items based on their position:

```js
const colors = ["red", "green", "blue"];

let [primary, secondary] = colors;
```

This assigns `"red"` to `primary` and `"green"` to `secondary`.

### Skipping Elements

You can skip unwanted items in the array using commas:

```js
let [first,,third] = colors;
```

This grabs the first and third items, skipping the second.

### Accessing Specific Indexes

Although not commonly used, you can destructure arrays using object-like syntax to access specific indexes:

```js
let { [0]: color1, [2]: color3 } = colors;
```

This assigns `"red"` to `color1` and `"blue"` to `color3`.

### The Rest Pattern

You can collect the remaining elements of an array into another array using the rest pattern:

```js
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...others] = numbers;
```

`a` gets 1, `b` gets 2, and `others` becomes `[3, 4, 5]`.

---

## Map Destructuring

Maps can also be destructured using a `for...of` loop:

```js
const prices = new Map([
  ["apple", 1.0],
  ["banana", 0.5],
  ["cherry", 2.0]
]);

for (const [fruit, price] of prices) {
  console.log(fruit + " costs " + price);
}
```

Each iteration unpacks the key and value from the map.

---

## Swapping Variables

Destructuring makes it easy to swap the values of two variables without using a temporary one:

```js
let a = "first";
let b = "second";

[a, b] = [b, a];
```

Now `a` holds `"second"` and `b` holds `"first"`.

Destructuring is a powerful feature that makes working with complex data structures much cleaner and more expressive.
