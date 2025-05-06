---
title: Maps
tags:
  - javascript
---

In JavaScript, a `Map` is a built-in object that stores key-value pairs. Unlike regular objects, the keys in a Map can be of any data type, including functions, objects, or primitive values. Maps also maintain the order of elements based on their insertion sequence.

## Creating a Map

There are two common ways to create a Map in JavaScript:

### Using `new Map()` with an Array

You can initialize a Map by passing an array of key-value pairs to the constructor:

```js
const inventory = new Map([
  ["apple", 100],
  ["banana", 150],
  ["cherry", 75]
]);
```

### Using the `set()` Method

You can also create an empty Map and add entries to it using `set()`:

```js
const inventory = new Map();

inventory.set("apple", 100);
inventory.set("banana", 150);
inventory.set("cherry", 75);
```

The `set()` method also allows you to update the value for an existing key:

```js
inventory.set("apple", 80);  // Updates the quantity for "apple"
```

### Accessing Values with `get()`

To retrieve a value associated with a specific key, use the `get()` method:

```js
let quantity = inventory.get("banana");  // Returns 150
```

If the key does not exist, `get()` returns `undefined`.

---

## Map Identity

Although Maps behave similarly to objects, they are a distinct type:

```js
typeof inventory;       // "object"
inventory instanceof Map;  // true
```

---

## Comparison: Objects vs. Maps

While both Maps and plain objects are used for storing key-value pairs, they differ in several important ways:

| Feature                          | Object                         | Map                               |
|----------------------------------|----------------------------------|------------------------------------|
| Iterable                         | Not directly iterable           | Directly iterable with `for...of` |
| Key Types                        | Only strings and symbols        | Any data type                      |
| Order of Keys                    | Not guaranteed                  | Preserves insertion order          |
| Default Properties               | Inherits prototype keys         | No default keys                    |
| Size Property                    | Must be calculated manually     | Has a built-in `.size` property    |

Use Maps when you need reliable key ordering, non-string keys, or frequent additions and deletions of key-value pairs. For simpler structures or JSON data, plain objects may suffice.
