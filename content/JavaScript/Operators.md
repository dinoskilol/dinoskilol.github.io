---
title: Operators
tags:
  - javascript
---

In JavaScript, operators are symbols or keywords that perform operations on values and variables. They are the core components of expressions and logic in programming.

JavaScript includes several categories of operators:

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Type Operators
- Bitwise Operators

---

## Arithmetic Operators

Arithmetic operators are used for basic mathematical operations:

| Operator | Operation          | Example      | Result |
|----------|--------------------|--------------|--------|
| `+`      | Addition            | `5 + 2`      | `7`    |
| `-`      | Subtraction         | `5 - 2`      | `3`    |
| `*`      | Multiplication      | `5 * 2`      | `10`   |
| `/`      | Division            | `5 / 2`      | `2.5`  |
| `%`      | Remainder (modulo)  | `5 % 2`      | `1`    |
| `**`     | Exponentiation      | `5 ** 2`     | `25`   |
| `++`     | Increment           | `let x = 1; x++` | `2` |
| `--`     | Decrement           | `let x = 1; x--` | `0` |

---

## Assignment Operators

Assignment operators assign values to variables and can also combine with arithmetic:

| Operator | Example  | Equivalent To  |
|----------|----------|----------------|
| `=`      | `x = y`  | `x = y`        |
| `+=`     | `x += y` | `x = x + y`    |
| `-=`     | `x -= y` | `x = x - y`    |
| `*=`     | `x *= y` | `x = x * y`    |
| `/=`     | `x /= y` | `x = x / y`    |
| `%=`     | `x %= y` | `x = x % y`    |
| `**=`    | `x **= y`| `x = x ** y`   |

---

## Comparison Operators

These operators compare values and return `true` or `false`:

| Operator | Comparison Type         | Example       | Result   |
|----------|--------------------------|---------------|----------|
| `==`     | Equal (loose)            | `5 == "5"`    | `true`   |
| `===`    | Equal (strict)           | `5 === "5"`   | `false`  |
| `!=`     | Not equal (loose)        | `5 != "5"`    | `false`  |
| `!==`    | Not equal (strict)       | `5 !== "5"`   | `true`   |
| `>`      | Greater than             | `5 > 2`       | `true`   |
| `<`      | Less than                | `5 < 2`       | `false`  |
| `>=`     | Greater than or equal    | `5 >= 5`      | `true`   |
| `<=`     | Less than or equal       | `5 <= 4`      | `false`  |
| `?`      | Ternary conditional      | `true ? 1 : 2`| `1`      |

---

## Logical Operators

Logical operators determine Boolean logic between expressions:

| Operator | Meaning        | Example         | Result   |
|----------|----------------|-----------------|----------|
| `&&`     | Logical AND     | `true && false` | `false`  |
| `||`     | Logical OR      | `true || false` | `true`   |
| `!`      | Logical NOT     | `!true`         | `false`  |

---

## Type Operators

Used to evaluate or test data types:

| Operator      | Function                              | Example               | Result     |
|---------------|---------------------------------------|-----------------------|------------|
| `typeof`      | Returns type of operand               | `typeof "text"`       | `"string"` |
| `instanceof`  | Checks instance of a constructor      | `[] instanceof Array` | `true`     |

---

## Bitwise Operators

Bitwise operators work at the binary level. These are rarely used in daily programming but are essential in certain areas like graphics or encryption.

| Operator | Operation           | Example     | Binary           | Result Binary | Decimal |
|----------|---------------------|-------------|------------------|----------------|---------|
| `&`      | AND                 | `5 & 1`     | `0101 & 0001`    | `0001`         | `1`     |
| `|`      | OR                  | `5 | 1`     | `0101 | 0001`    | `0101`         | `5`     |
| `~`      | NOT                 | `~5`        | `~0101`          | `...1010`      | `-6`    |
| `^`      | XOR                 | `5 ^ 1`     | `0101 ^ 0001`    | `0100`         | `4`     |
| `<<`     | Left Shift          | `5 << 1`    | `0101 << 1`      | `1010`         | `10`    |
| `>>`     | Right Shift         | `5 >> 1`    | `0101 >> 1`      | `0010`         | `2`     |
| `>>>`    | Zero-fill Right Shift | `5 >>> 1` | `0101 >>> 1`     | `0010`         | `2`     |

> Bitwise operations always return integers. Their behavior with negative numbers can be less intuitive due to the internal binary format (two's complement).



