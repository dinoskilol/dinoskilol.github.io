---
title: Library
tags:
  - concept
---

A **library** is a collection of pre-written and often precompiled code that provides reusable functionality for software development. Rather than re-implementing common tasks, developers can include libraries to extend their applications with tested, reliable, and often optimized features.

Libraries encapsulate logic and expose functionality through public interfaces such as functions, classes, or modules. They are not standalone programs but are designed to be linked to or imported by other programs.

---

## Purpose and Advantages

Libraries promote:

- **Modular design** – Separate reusable logic into components.
- **Code reuse** – Avoid reinventing the wheel.
- **Abstraction** – Hide implementation details behind simple interfaces.
- **Faster development** – Rely on trusted, ready-to-use solutions.

They also encourage adherence to the **DRY principle** (Don't Repeat Yourself), improving both maintainability and scalability.

---

## Library Structure

A typical library may include:

- Function and class definitions
- Internal and public APIs
- Documentation and usage examples
- Metadata or manifest (e.g., `package.json`, `setup.py`)
- Optional configuration or resource files
- Dependencies on other libraries or frameworks

---

## Types of Libraries

### Static Libraries

- **File extensions**: `.lib` (Windows), `.a` (Unix-like)
- **Linked at compile time**
- Code is embedded into the final executable

**Pros**:
- No external dependencies at runtime
- Potentially faster startup

**Cons**:
- Larger executable size
- Updating the library requires recompilation

**Example**:
```bash
gcc main.c -L. -lmylib -o myapp  # Links against libmylib.a
```

---

### Dynamic (Shared) Libraries

- **File extensions**: `.dll` (Windows), `.so` (Linux), `.dylib` (macOS)
- **Linked at runtime or load time**
- Code remains external and is loaded into memory as needed

**Pros**:
- Smaller executables
- Easy to patch or upgrade without recompilation
- Memory sharing across processes

**Cons**:
- Must be present and correctly versioned at runtime
- Possibility of dependency conflicts ("DLL Hell")

**Example**:
```c
// Dynamic loading (C - POSIX)
void* handle = dlopen("libmath.so", RTLD_LAZY);
double (*cos_func)(double) = dlsym(handle, "cos");
```

---

## Linking and Loading

### Static Linking

- Done during compilation using a [[Linker|linker]] (`ld`, `link.exe`)
- Final binary contains all code

### Dynamic Linking

- Only references to symbols are included
- Actual resolution is done by the **dynamic linker/loader**
- API examples: `dlopen` (Unix), `LoadLibrary` (Windows)

---

## Language Support and Syntax

### High-Level Languages

Most languages provide syntactic constructs for importing libraries:

- Python: `import math`
- JavaScript (Node.js): `const fs = require('fs');`
- Java: `import java.util.List;`
- C#: `using System.IO;`

### Common Library Formats

- **.NET**: `.dll` with metadata and IL code, managed by the CLR
- **Python**: `.py`, `.pyd`, or `.whl` packages
- **Java**: `.jar` (Java Archive), includes bytecode and optional manifest
- **C/C++**: `.a` / `.lib` for static, `.so` / `.dll` for dynamic

---

## Standard vs. Third-Party Libraries

### Standard Libraries

- Bundled with the language or runtime
- Provide fundamental functionality: file I/O, networking, math, etc.

Examples:
- `stdlib.h` (C)
- `System` namespace (C#)
- `java.util` (Java)

### Third-Party Libraries

- Developed by individuals or organizations outside the core language maintainers
- Installed via package managers

Examples:
- Python: `pip install requests`
- JavaScript: `npm install lodash`
- .NET: `NuGet install Newtonsoft.Json`

---

## ABI and Compatibility

Libraries must conform to the **Application Binary Interface (ABI)** to ensure cross-module interaction. This includes:

- Function calling conventions
- Data type layout and alignment
- Name mangling (especially in C++)
- Symbol visibility and export conventions

Failing to follow ABI standards can lead to subtle and severe runtime errors.

---

## Runtime Behavior of Dynamic Libraries

When a program using dynamic libraries is executed:

1. The **OS loader** loads the executable and its dependencies into memory.
2. The **dynamic linker** resolves function and variable references.
3. Symbol relocations and fixups are performed.
4. Library constructors (e.g., `DllMain`, `__attribute__((constructor))`) are invoked before execution proceeds.

Dynamic loading also allows plugins and runtime extension mechanisms.

---

## Memory Management

- In unmanaged languages (C/C++), care must be taken with memory allocation across library boundaries.
- In managed languages (Python, C#, Java), memory is handled by garbage collectors, and interop APIs handle transitions (e.g., `ctypes`, `P/Invoke`, JNI).

---

## Summary

A **library** is a fundamental software building block that encapsulates and exposes reusable code. It can be delivered as a static or dynamic binary, tailored to a specific language, platform, or architecture.

Understanding how libraries work — from structure to linking, loading, and ABI compliance — is essential for designing efficient, modular, and maintainable software systems.
