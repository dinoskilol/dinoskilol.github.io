---
title: Objects
tags:
  - javascript
---

In JavaScript, objects are collections that hold related data and functionality. Think of an object as a real-world item—like a car—that has properties (color, weight, model) and methods (start, stop, drive).

## Defining Objects

Objects can be created in several ways:

### Using Object Literals

The most common method is the object literal syntax, which consists of key-value pairs enclosed in curly braces:

```js
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 32,
  eyeColor: "green"
};
```

This approach is clean and readable. Each key is a property name, and each value is associated with that property.

You can also create an empty object and add properties afterward:

```js
const person = {};
person.firstName = "Alice";
person.lastName = "Johnson";
person.age = 32;
person.eyeColor = "green";
```

### Using `new Object()`

You can create the same object using a constructor, though this is less common in modern code:

```js
const person = new Object();
person.firstName = "Alice";
person.lastName = "Johnson";
person.age = 32;
person.eyeColor = "green";
```

> For clarity and performance, prefer object literals over using `new Object()`.

---

## Accessing Properties

There are two ways to access object properties:

```js
person.firstName
person["lastName"]
```

Dot notation is more commonly used, but bracket notation is useful when property names are dynamic.

---

## Object Methods

Objects can also hold functions, which are then called **methods**:

```js
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```

Inside methods, `this` refers to the object the method belongs to.

---

## Primitive vs Object

Primitive values like strings and numbers are immutable. They cannot hold properties or methods:

```js
let x = 42;  // number
```

JavaScript has seven primitive types:

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

---

## Objects Are Mutable

Objects are mutable, meaning they are referenced by memory address rather than copied by value:

```js
const user = { name: "Alice", age: 25 };
const anotherUser = user;

anotherUser.age = 30;

console.log(user.age);  // 30
```

Both variables refer to the same object in memory.

---

## Displaying Objects

If you try to output an object directly, you'll usually see `[object Object]`.

```js
document.getElementById("demo").innerHTML = person;
```

To display object contents, access properties directly:

```js
document.getElementById("demo").innerHTML =
  person.firstName + " " + person.age;
```

### Looping Through Properties

```js
let result = "";
for (let key in person) {
  result += person[key] + " ";
}
```

### Using `Object.entries()`

```js
const items = { apples: 10, oranges: 20 };

for (let [fruit, count] of Object.entries(items)) {
  console.log(fruit + ": " + count);
}
```

### Using `JSON.stringify()`

```js
let jsonText = JSON.stringify(person);
document.getElementById("demo").innerHTML = jsonText;
```

---

## Constructor Functions

Constructor functions let you create multiple similar objects:

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
```

Create instances using `new`:

```js
const dad = new Person("Tom", "Smith", 55, "blue");
const mom = new Person("Sara", "Smith", 53, "green");
```

### Adding Properties or Methods

Directly to an object:

```js
dad.nationality = "American";
```

Or to the constructor prototype:

```js
Person.prototype.nationality = "American";

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};
```

Now every instance has the new method:

```js
console.log(dad.getFullName());
```

---

## Recommended Syntax

Use literals whenever possible for clarity:

```js
""           // string
0            // number
false        // boolean
{}           // object
[]           // array
/regex/      // regular expression
function(){} // function
```

Avoid using `new Object()`, `new Array()`, or `new Function()` unless necessary. Literals are faster and easier to read.
