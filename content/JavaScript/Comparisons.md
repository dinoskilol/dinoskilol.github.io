---
title: Comparisons
tags:
  - javascript
---

Comparison and logical operators in JavaScript are essential tools used to evaluate expressions. These evaluations typically result in a Boolean value—either `true` or `false`.

## Comparison Operators

Comparison operators help determine the relationship between two values or variables. They are used to check for equality, inequality, greater-than, less-than, and similar comparisons.

### Example Usage

You often find comparison operators inside conditional statements, which execute specific code based on the result of the comparison:

```js
if (userAge < 18) {
  message = "Access denied";
}
```

In this example, if the value of `userAge` is less than 18, the message is updated accordingly.

## Logical Operators

Logical operators are used to combine or invert Boolean expressions. These include AND (`&&`), OR (`||`), and NOT (`!`), and they help express more complex logic in conditions.

```js
if (userAge >= 18 && hasID) {
  message = "Access granted";
}
```

Here, both conditions must be true for the message to update.

## Conditional (Ternary) Operator

JavaScript also includes a compact way to write conditional expressions using the ternary operator. It follows the syntax:

```js
let result = (condition) ? valueIfTrue : valueIfFalse;
```

For example:

```js
let access = (userAge >= 18) ? "Allowed" : "Denied";
```

This one-liner does the same job as an if-else block, making the code more concise.

## Comparing Different Types

When comparing different data types, JavaScript often performs type conversion behind the scenes. This can sometimes lead to unexpected outcomes.

For example, when comparing a string and a number:

```js
console.log("5" == 5);  // true, because the string is converted to a number
```

However, if the string is not numeric, it results in `NaN`, and the comparison becomes false.

To ensure consistent and reliable behavior, it's recommended to convert values explicitly before comparing:

```js
let input = Number(ageInput);
if (isNaN(input)) {
  result = "Invalid input";
} else {
  result = (input < 18) ? "Too young" : "Old enough";
}
```

## The Nullish Coalescing Operator (`??`)

The nullish coalescing operator returns the first operand if it is neither `null` nor `undefined`. Otherwise, it returns the second operand.

```js
let username = null;
let fallback = "Guest";
let displayName = username ?? fallback;
```

In this case, `displayName` will be `"Guest"` because `username` is `null`.

## The Optional Chaining Operator (`?.`)

The optional chaining operator allows you to safely access properties of objects that might not exist. Instead of throwing an error if a property is missing, it simply returns `undefined`.

```js
const user = { name: "Alex", address: null };
let city = user.address?.city;
```

Since `address` is `null`, the expression does not throw an error and `city` is assigned `undefined` instead.

This feature is especially useful when dealing with deeply nested objects or data from unreliable sources.
