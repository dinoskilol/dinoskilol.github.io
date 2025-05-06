---
title: Events
tags:
  - javascript
---

Events in JavaScript represent interactions or changes that occur in the browser or are triggered by the user. JavaScript allows you to respond to these events and execute specific code as a result.

## HTML Events

An HTML event occurs when something happens to an element. This can include user actions like clicking a button or typing in a form field, or browser-triggered actions like loading a page.

Examples of events:

- The page finishes loading
- A form input is changed
- A button is clicked

JavaScript can respond to these events using event handler attributes directly in the HTML, though this method is best suited for small or quick scripts.

Using single quotes:

```html
<element onclick='runFunction()'>
```

Using double quotes:

```html
<element onclick="runFunction()">
```

For example, this button sets the inner HTML of an element with ID "demo" when clicked:

```html
<button onclick="document.getElementById('demo').innerHTML = new Date()">What time is it?</button>
```

Alternatively, you can refer to the element itself using `this`:

```html
<button onclick="this.innerHTML = new Date()">Click me</button>
```

If the script you want to execute is longer or reused in multiple places, it's better to call a function:

```html
<button onclick="showTime()">What time is it?</button>
```

---

## DOM Events

JavaScript also allows you to add event listeners via the DOM rather than using inline HTML. This method is cleaner and separates HTML from behavior logic.

```js
const button = document.querySelector("button");
button.addEventListener("click", showTime);
```

Here, `"click"` is the event type, and `showTime` is the function (handler) that runs when the event occurs.

---

## Common Events

There are many different events you can listen for in JavaScript. Some of the most frequently used include:

- `click`: when an element is clicked
- `change`: when the value of an input element changes
- `submit`: when a form is submitted
- `keydown`, `keyup`, `keypress`: when a key is pressed
- `mousemove`, `mouseover`, `mouseout`: when the mouse interacts with elements
- `load`: when the page or a resource finishes loading
- `input`: when the user provides input
- `scroll`: when the user scrolls

Each of these events provides an `Event` object to the handler function, which you can use to get details about what occurred.

```js
inputElement.addEventListener("input", function(event) {
  console.log("Input changed to:", event.target.value);
});
```
