---
title: Classes
tags:
  - javascript
---

In JavaScript, classes provide a clean syntax to define object templates. A class acts as a blueprint for creating multiple objects with the same structure and behavior.

## Class Syntax

To define a class, use the `class` keyword followed by a name for the class. A special method named `constructor()` is used to initialize new objects when they are created from the class.

```js
class Vehicle {
  constructor() {
    // Initialization code
  }
}
```

> [!info] Info
> A class defines the structure of objects, but it is not an object itself. It is a template used to create objects.

Here’s an example of a simple class definition with properties initialized via the constructor:

```js
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
```

In this case, we define a class called `Book` with two properties: `title` and `author`.

## Using a Class

Once a class is defined, you can create new objects using the `new` keyword. When you create an object this way, the `constructor()` method is called automatically.

```js
const myBook1 = new Book("1984", "George Orwell");
const myBook2 = new Book("Brave New World", "Aldous Huxley");
```

These two lines create two distinct `Book` objects with their respective property values.

## The Constructor Method

The constructor is a special method within a class. It has three key characteristics:

- It must be named exactly `constructor`
- It is automatically called when a new object is created
- It is typically used to assign initial property values

If no constructor is defined in your class, JavaScript automatically provides an empty one.

## Class Methods

In addition to defining properties in the constructor, you can define methods in a class. These are similar to object methods, but defined within the class structure.

```js
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  summary() {
    return `"${this.title}" by ${this.author}`;
  }
}
```

In this example, the `Book` class includes two methods: `getAge()` calculates how many years ago the book was published, and `summary()` returns a short description.

To use a method, you call it on an object created from the class:

```js
const myBook = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
console.log("The book is " + myBook.getAge() + " years old.");
```

## Passing Arguments to Methods

Class methods can also accept parameters, just like regular functions. Here’s an example where we provide the current year as an argument to the method:

```js
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getAge(currentYear) {
    return currentYear - this.year;
  }
}

const year = new Date().getFullYear();
const myBook = new Book("Dune", "Frank Herbert", 1965);
console.log("The book is " + myBook.getAge(year) + " years old.");
```

By passing the year explicitly, we have more control over the behavior of the method. This can be useful in cases where you want to test different values or override the current date.

