---
title: Preprocessor
tags:
  - concept
---

A **preprocessor** is a tool that processes your source code **before compilation begins**. It is often used in languages like **C and C++**, where it performs **text-based transformations** on the code. The output of the preprocessor is a modified version of the source code that is then passed to the [[Compiler|compiler]].

Preprocessing is the **first stage** of the compilation process.

---

## What Does a Preprocessor Do?

The preprocessor performs several key tasks:

1. **Macro substitution**
2. **File inclusion**
3. **Conditional compilation**
4. **Line control and diagnostics**

Preprocessors work through special commands called **directives**, which are lines in the source code that begin with the `#` symbol.

---

## Common Preprocessor Directives

### `#define`: Macro Definitions

Used to define **macros**, which are simple text replacements.

```c
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
```

These are replaced directly into the code during preprocessing.

---

### `#include`: File Inclusion

Used to include the contents of another file (typically header files).

```c
#include <stdio.h>  // System header
#include "myheader.h"  // User-defined header
```

This directive allows code reuse and modularity.

---

### `#ifdef`, `#ifndef`, `#endif`: Conditional Compilation

Allows code to be compiled or excluded depending on whether a macro is defined.

```c
#ifdef DEBUG
  printf("Debugging is enabled\n");
#endif
```

```c
#ifndef MY_HEADER
#define MY_HEADER
  // header content
#endif
```

Used for feature toggling, cross-platform compatibility, and header guards.

---

### `#undef`: Macro Undefinition

Removes a previously defined macro.

```c
#undef PI
```

---

### `#if`, `#elif`, `#else`, `#endif`: Complex Conditions

Conditional blocks based on compile-time constants or defined macros.

```c
#define VERSION 2

#if VERSION == 1
  // version 1 code
#elif VERSION == 2
  // version 2 code
#else
  // fallback code
#endif
```

---

### `#error` and `#warning`: Diagnostics

Used to emit compile-time errors or warnings intentionally.

```c
#error "Unsupported platform detected"
```

Some compilers also support `#warning`.

---

## Preprocessing vs Compilation

| Stage          | Input         | Output            | Purpose                                     |
|----------------|---------------|-------------------|---------------------------------------------|
| Preprocessing  | Source code   | Expanded source   | Text transformation, macro expansion        |
| Compilation    | Expanded code | Object code       | Syntax checking, translation to machine code|

The preprocessor **does not perform syntax checks**—it only manipulates the source text. Errors introduced during preprocessing are caught later during compilation.

---

## Use Cases

- Managing code for multiple platforms or configurations
- Reusing code through headers and macros
- Reducing repeated boilerplate via macros
- Implementing compile-time feature toggles

---

## Preprocessing Output

You can inspect preprocessed code using compiler options:

- GCC/Clang:
  ```bash
  gcc -E file.c -o preprocessed.c
  ```
- MSVC:
  ```bash
  cl /P file.c
  ```

This output helps debug macro expansion issues or understand how includes are resolved.

---

## Summary

A **preprocessor** is a code transformation tool that prepares your source code before it's compiled. It is especially powerful in systems programming languages and offers:

- Code inclusion (`#include`)
- Macro definitions (`#define`)
- Conditional compilation (`#if`, `#ifdef`, `#endif`)
- Platform-specific feature control

While preprocessors add flexibility, they can also make code harder to understand and debug, so they should be used with care.
