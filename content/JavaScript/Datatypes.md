---
title: Datatypes
tags:
  - javascript
---

In JavaScript, every value has a type. These types define how the value behaves and what operations are allowed. This concept is fundamental to understanding how variables, functions, and expressions work.

JavaScript supports eight basic data types. Some are primitive types, meaning they hold simple, immutable values, while others are complex structures.

These data types are:

- **String**
- **Number**
- **BigInt**
- **Boolean**
- **Undefined**
- **Null**
- **Symbol**
- **Object**

---

## The Object Data Type

Among these, the `object` data type is the most versatile. Unlike primitive types, which store a single value, objects can hold multiple named values (properties) and even functions (methods).

JavaScript includes many built-in object types such as:

- `Array` for ordered collections
- `Date` for date and time
- `Map` and `Set` for key-value and unique value collections
- Typed arrays like `Int8Array` and `Float32Array`
- Promises for asynchronous computation

You can also create your own objects:

```js
let user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};
```

In this example, `user` is an object with three properties.

---

## Understanding Type Behavior

It’s important to recognize how JavaScript handles different types in expressions. For instance:

```js
let result = 10 + " apples";
```

Here, the number `10` is converted to a string before concatenation, resulting in `"10 apples"`.

This happens because JavaScript performs **type coercion**—automatically converting values to the appropriate type when necessary.

```js
let result = "10" + " apples";  // Still "10 apples"
```

JavaScript evaluates such expressions from **left to right**, so the order of operands affects the result.

---

## Dynamic Typing

JavaScript is a **dynamically typed** language. This means that a variable can hold any type of value, and the type can change over time during program execution.

```js
let data;
data = 42;          // data is a number
data = "hello";     // now it's a string
data = true;        // now a boolean
```

While this flexibility offers convenience, it also introduces the risk of subtle bugs if you're not careful with variable handling.

---

## Using `typeof` to Inspect Types

The `typeof` operator lets you inspect the type of any value or expression at runtime:

```js
typeof "Alice"     // "string"
typeof 123         // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof { key: 1 }  // "object"
```

You can use this operator for debugging or validating data types before performing operations:

```js
if (typeof value === "string") {
  console.log("It's safe to perform string operations.");
}
```

---

Grasping how JavaScript handles data types—especially dynamic typing and type coercion—enables you to write more reliable, maintainable code and avoid common pitfalls related to implicit conversions.
