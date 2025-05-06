---
title: JSON
tags:
  - javascript
---

JSON (JavaScript Object Notation) is a widely-used data format for exchanging structured information between systems. It is commonly used to send data from a server to a web application, and vice versa.

## What is JSON?

JSON is a text-based format that resembles the syntax of JavaScript objects. However, it is purely textual and can be used with any programming language.

- Stands for **JavaScript Object Notation**
- Designed to be lightweight and easy to read
- Platform- and language-independent
- Often used for data serialization and transmission in web applications

## JSON Example

Here is an example of a JSON structure representing a list of employees:

```json
{
  "employees": [
    { "firstName": "Alice", "lastName": "Taylor" },
    { "firstName": "Bob", "lastName": "Brown" },
    { "firstName": "Charlie", "lastName": "Davis" }
  ]
}
```

In this example, the value of `employees` is an array that contains three objects, each representing an employee.

## Relationship to JavaScript Objects

Although JSON looks like JavaScript object syntax, it is not executable code. It is just a string of text that follows strict formatting rules. However, because of the similarity, JavaScript can easily convert JSON text into native objects.

## Syntax Rules

JSON has a very clear structure:

- Data is represented as name/value pairs
- Pairs are separated by commas
- Curly braces `{}` define objects
- Square brackets `[]` define arrays
- Names must always be enclosed in double quotes
- Values can be strings, numbers, objects, arrays, booleans, or `null`

## Name/Value Example

Here is a single name/value pair in JSON:

```json
"firstName": "Alice"
```

Notice that the name is always enclosed in double quotes. This differs from JavaScript, which allows unquoted keys in object literals.

## JSON Objects

A JSON object contains one or more name/value pairs enclosed in curly braces:

```json
{
  "firstName": "Alice",
  "lastName": "Taylor"
}
```

## JSON Arrays

Arrays in JSON are enclosed in square brackets and can hold multiple objects:

```json
"employees": [
  { "firstName": "Alice", "lastName": "Taylor" },
  { "firstName": "Bob", "lastName": "Brown" },
  { "firstName": "Charlie", "lastName": "Davis" }
]
```

This structure allows for complex data hierarchies to be represented in a compact format.

## Parsing JSON in JavaScript

To use JSON data in JavaScript, you can parse it into a JavaScript object using `JSON.parse()`. Suppose we receive a JSON-formatted string:

```js
let jsonText = '{ "employees": [' +
  '{ "firstName": "Alice", "lastName": "Taylor" },' +
  '{ "firstName": "Bob", "lastName": "Brown" },' +
  '{ "firstName": "Charlie", "lastName": "Davis" } ] }';
```

We can convert this into a JavaScript object like this:

```js
const data = JSON.parse(jsonText);
```

Once parsed, you can access the data like any regular JavaScript object:

```js
console.log(data.employees[1].firstName + " " + data.employees[1].lastName);
// Output: Bob Brown
```

This makes it easy to dynamically use server-side data within client-side applications.
