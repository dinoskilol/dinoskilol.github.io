---
title: Modules
tags:
  - javascript
---

JavaScript modules allow you to split your code into multiple files, helping you organize and maintain larger codebases more efficiently. Modules are loaded using the `import` statement and are enabled via the `type="module"` attribute in a `<script>` tag.

```html
<script type="module">
  import showInfo from "./info.js";
</script>
```

## Exporting from a Module

You can export variables, functions, or classes from one file so they can be used in another. There are two main types of exports:

- Named exports
- Default exports

### Named Exports

With named exports, you can export multiple items from the same module, and import only the ones you need.

#### Inline Named Exports

```js
export const username = "Alex";
export const age = 29;
```

#### Grouped Named Exports

```js
const username = "Alex";
const age = 29;

export { username, age };
```

### Default Exports

A module can also have a default export. This is typically used when a file exports a single main functionality.

```js
// info.js
const showInfo = () => {
  const name = "Alex";
  const age = 29;
  return `${name} is ${age} years old.`;
};

export default showInfo;
```

Only one default export is allowed per file.

---

## Importing Modules

You import modules differently depending on the type of export.

### Importing Named Exports

To import specific variables or functions that were exported by name:

```js
import { username, age } from "./user.js";
```

You must use the exact names that were exported.

### Importing a Default Export

To import the default export, you don’t need curly braces and can name the imported binding however you like:

```js
import showInfo from "./info.js";
```

---

> Modules can only be used in environments that support the `http://` or `https://` protocol. Loading a page with the `file://` protocol will not allow module import/export functionality.

Modular code promotes better structure and scalability, and it's now the standard for organizing modern JavaScript projects.
