---
title: Conditional Statements
tags:
  - javascript
---

Conditional statements allow a program to make decisions and execute certain code blocks depending on whether a given condition evaluates to true or false. In everyday programming, you often need your code to perform different actions based on varying circumstances.

JavaScript provides several types of conditional statements to handle decision-making in your programs:

- `if` is used to execute a block of code if a condition evaluates to true.
- `else` defines a block of code to run if the same condition is false.
- `else if` introduces a new condition to test if the previous one is false.
- `switch` allows you to test multiple values and select one of many possible code paths.

## The if Statement

An `if` statement evaluates a condition. If the condition is true, the code inside the block will execute.

```js
if (score > 50) {
  console.log("You passed the exam.");
}
```

In this example, if `score` is greater than 50, the success message is printed.

## The else Statement

When the condition in the `if` statement is false, the `else` block can handle the alternative:

```js
if (score > 50) {
  console.log("You passed.");
} else {
  console.log("You failed.");
}
```

The `else` clause ensures something is done regardless of the outcome.

## The else if Statement

Sometimes, you want to check multiple conditions in sequence. The `else if` statement allows you to chain several conditional checks:

```js
if (score > 90) {
  console.log("Excellent");
} else if (score > 70) {
  console.log("Good");
} else {
  console.log("Needs improvement");
}
```

Each condition is checked in order, and the first one that evaluates to true will trigger its associated block.

## The Switch Statement

The `switch` statement is an alternative to multiple `else if` conditions. It is useful when evaluating the same variable or expression against many values.

```js
switch (day) {
  case "Monday":
    activity = "Work";
    break;
  case "Saturday":
  case "Sunday":
    activity = "Relax";
    break;
  default:
    activity = "Unknown day";
}
```

Here’s how it works:

- The value of `day` is checked against each `case`.
- If a match is found, the corresponding block executes.
- The `break` statement exits the switch.
- If no match is found, the `default` block is executed.

### The break Keyword

The `break` keyword stops the execution of the `switch` block. If omitted, execution continues into the next case, even if it doesn't match.

```js
switch (grade) {
  case "A":
    message = "Excellent";
    break;
  case "B":
    message = "Well done";
    break;
  default:
    message = "Keep trying";
}
```

### The default Keyword

The `default` block executes when no other `case` matches. It acts as a fallback and does not have to be the last block, but if it isn't, it should also include a `break` statement to avoid fall-through.

### Shared Code Between Cases

When multiple cases should execute the same code, you can stack them:

```js
switch (dayOfWeek) {
  case "Friday":
  case "Saturday":
    status = "Weekend is near!";
    break;
  case "Sunday":
    status = "Weekend!";
    break;
  default:
    status = "Waiting for the weekend...";
}
```

This is useful for grouping cases that lead to the same outcome.

## Strict Comparison in Switch

Switch statements use strict comparison (`===`). This means both the value and the type must match exactly. For instance:

```js
let input = "0";

switch (input) {
  case 0:
    result = "Zero as a number";
    break;
  case "0":
    result = "Zero as a string";
    break;
  default:
    result = "No match";
}
```

In this example, the second case is executed because `"0"` (a string) strictly equals `"0"`. The numeric `0` would not match the string input.

Understanding how conditional statements work helps you control the logic and flow of your applications more effectively.
