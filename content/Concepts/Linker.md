---
title: Linker
tags:
  - concept
---

A **linker** is a critical tool in the software build process. It takes one or more object files (produced by a [[Compiler]]) and combines them into a **single executable**, **shared library**, or **static library**. Its main responsibility is to **resolve symbols**, **perform address binding**, and **produce a complete binary** that can run or be reused.

---

## Purpose of a Linker

The linker is responsible for:

- **Symbol resolution**: Matching function and variable references to their actual definitions.
- **Address binding**: Assigning final memory addresses to code and data sections.
- **Code integration**: Combining object files and required libraries.
- **Relocation**: Adjusting address references based on the final layout of code and data.
- **Binary output generation**: Producing the final binary (executable or [[Library|library]]).

Without a linker, even successfully compiled code remains fragmented and incomplete.

---

## Build Process Overview

The role of a linker becomes clear in a standard build pipeline:

1. **Source Code**  
   Written in languages like C, C++, Rust, etc. (`.c`, `.cpp`, `.rs`)

2. **Compilation**  
   Each source file is compiled independently into object code (`.o`, `.obj`)

3. **Linking**  
   The linker:
   - Resolves references to functions and variables
   - Merges multiple object files
   - Connects to static or dynamic libraries
   - Produces:
     - Executables (`.exe`, `.out`, ELF, Mach-O)
     - Static libraries (`.lib`, `.a`)
     - Shared libraries (`.dll`, `.so`, `.dylib`)

---

## How the Linker Works

### 1. Symbol Resolution

Symbols represent identifiers like function names, global variables, or constants.

During compilation:
- The compiler records *undefined symbols* (used but not defined)
- The compiler records *defined symbols* (functions/variables provided by the file)

The linker:
- **Matches undefined symbols with their definitions** in other object files or libraries
- Reports **linker errors** if a symbol cannot be found

```c
// file1.c
extern int sum(int, int); // Declaration

// file2.c
int sum(int a, int b) { return a + b; } // Definition
```

---

### 2. Address Binding

Each object file contains *relative* addresses. The linker assigns final *absolute addresses* based on the layout of the binary.

The binary is divided into **segments** such as:
- `.text`: Code segment
- `.data`: Initialized data
- `.bss`: Uninitialized data
- `.rodata`: Read-only constants

The linker lays out these segments and updates references across files.

---

### 3. Relocation

Relocation is the process of modifying address references so that they point to the correct locations once the binary layout is finalized.

This involves:
- Updating instruction operands that reference memory
- Adjusting jump and call offsets
- Applying relocation entries stored in object files

---

### 4. Library Linking

A program often depends on external code (e.g., standard libraries, frameworks). The linker resolves these dependencies by:

- **Static Linking**: Copies code from libraries into the binary at link time
- **Dynamic Linking**: Leaves symbolic references that will be resolved at runtime by the operating system

---

## Static vs Dynamic Linking

| Feature           | Static Linking                   | Dynamic Linking                    |
|------------------|-----------------------------------|-------------------------------------|
| Timing           | Performed during compilation      | Resolved at runtime                 |
| Output Size      | Larger (includes all code)        | Smaller (only symbolic references)  |
| Dependency       | No external libraries needed      | Requires shared libraries present   |
| Update Behavior  | Recompile required for changes    | Libraries can be updated separately |
| Performance      | Faster startup                    | Slight overhead due to resolution   |

---

## Advanced Linker Features

### Incremental Linking

- Re-links only parts of the program that changed
- Useful in large projects
- Reduces build time

### Link-Time Optimization (LTO)

- Allows optimizations **across object files**
- Enables inlining and dead code removal across compilation units
- Used in toolchains like Clang, GCC (with `-flto`), and Rust

---

## Types of Linkers

| Type                  | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Static Linker**     | Combines code at compile-time; produces self-contained executables          |
| **Dynamic Linker**     | Resolves symbols during runtime using system loaders (`ld-linux.so`, etc.) |
| **Incremental Linker**| Updates only changed parts; used in large development environments          |
| **LTO Linker**         | Performs aggressive optimizations during link phase (LLVM, GCC, Rust)       |

---

## Linker Errors

Common linker errors include:

- **Undefined reference**: A function or variable was used but not defined anywhere
- **Multiple definition**: The same symbol is defined in multiple files
- **Missing libraries**: Required library not found or not linked properly
- **Incompatible formats**: Mismatch between object files and the target binary format

---

## Summary

The **linker** is an essential part of the build process. It acts as the final assembler of code, responsible for stitching together multiple pieces into a functioning binary. Its responsibilities include:

- Resolving inter-file dependencies
- Assigning addresses to symbols and segments
- Integrating libraries
- Producing final executables or libraries

Understanding how linkers work is critical for diagnosing build errors, optimizing application performance, and working at the systems level.
