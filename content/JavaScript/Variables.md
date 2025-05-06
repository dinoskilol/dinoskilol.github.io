---
title: Variables
tags:
  - javascript
---

Variables in JavaScript are used to store data values that your program can work with later. You can think of them as labeled containers for information.

---

## Declaring Variables

JavaScript supports several ways to declare variables, depending on the intended scope and behavior:

- Implicit declaration
- Using `var`
- Using `let`
- Using `const`

### Implicit Declaration

Assigning a value without declaring the variable explicitly creates a global variable:

```js
x = 10;
```

This is discouraged, as it can introduce bugs and unintended global behavior.

> Always declare variables with `let`, `const`, or `var` to avoid polluting the global scope.

### Using `var`

```js
var count = 3;
```

- Function-scoped
- Can be redeclared and updated
- Hoisted to the top of its function, though the assignment is not

### Using `let`

```js
let score = 100;
```

- Block-scoped
- Cannot be redeclared within the same scope
- Ideal for variables that might change

### Using `const`

```js
const maxUsers = 50;
```

- Block-scoped
- Must be initialized at declaration
- Cannot be reassigned

Use `const` when the value is not expected to change.

---

## Best Practices

- Default to `const`
- Use `let` when reassignment is necessary
- Avoid `var` unless working with older codebases

---

## Variables in Expressions

Variables can be used in expressions just like in algebra:

```js
let a = 5;
let b = 10;
let sum = a + b;  // sum is 15
```

---

## Identifiers

Variable names in JavaScript are called identifiers. They must follow these rules:

- Can contain letters, digits, `_`, and `$`
- Must begin with a letter, `_`, or `$`
- Cannot start with a digit
- Are case-sensitive (`age` and `Age` are different)
- Cannot use reserved keywords like `if`, `class`, `var`, etc.

Examples:

```js
let name;
let $amount;
let _flag;
```

Invalid identifiers:

```js
let 2cool;     // starts with a digit
let return;    // reserved keyword
```

Use descriptive names to make code easier to understand.

---

## Declaration Without Initialization

You can declare a variable without giving it a value:

```js
let city;
```

This creates a variable that holds `undefined` until you assign a value:

```js
city = "Berlin";
```

---

## Multiple Variable Declarations

You can declare multiple variables at once:

```js
let x = 1, y = 2, z = 3;
```

While valid, it's often cleaner to declare each variable on a new line.

---

## Using Variables in HTML

JavaScript can insert variable values into HTML elements:

```html
<p id="demo"></p>

<script>
  let message = "Welcome!";
  document.getElementById("demo").textContent = message;
</script>
```
