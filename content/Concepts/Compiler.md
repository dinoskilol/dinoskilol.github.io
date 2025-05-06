---
title: Compiler
tags:
  - concept
---

A **compiler** is a specialized program that translates source code written in a high-level programming language (such as C, Java, or Rust) into **machine code**, **bytecode**, or another intermediate form so that it can be executed by a computer. This transformation bridges the gap between human-readable programming logic and hardware-executable instructions.

## In Brief

A compiler takes your code and turns it into a format that a machine can understand and execute.

---

## Primary Responsibilities

A modern compiler performs several critical functions:

1. **Translation** – Converts high-level source code into low-level code (machine code, bytecode, or intermediate code).
2. **Error Detection** – Identifies syntax, semantic, and type errors in code.
3. **Optimization** – Enhances code performance by improving speed and reducing size.
4. [[Intermediate representation]] – Generates intermediary forms of code for analysis and transformation.
5. **Code Emission** – Outputs executable binaries or object code.

---

## The Compilation Pipeline

A typical compiler consists of multiple sequential stages:

### 1. Lexical Analysis (Tokenization)

**Purpose**: Convert raw source code into a stream of **tokens**.

- Input: Source code
- Output: Token stream

Example:

```c
int x = 5;
```

Tokenized as:

```
[Keyword: int] [Identifier: x] [Operator: =] [Literal: 5] [Semicolon]
```

---

### 2. Syntax Analysis (Parsing)

**Purpose**: Analyze the token stream to construct an **Abstract Syntax Tree (AST)**.

- Input: Token stream
- Output: AST

This step checks adherence to the grammar rules of the language (e.g., BNF/EBNF).

```yaml
Assignment
├── Type: int
├── Variable: x
└── Value: 5
```

Typical syntax errors:
- Unmatched brackets
- Misplaced operators
- Missing semicolons

---

### 3. Semantic Analysis

**Purpose**: Enforce contextual rules and resolve symbol meanings.

- Input: AST
- Output: Annotated AST + Symbol Table

Checks include:
- Variable declarations before use
- Type compatibility
- Correct function calls (parameter/argument matching)
- Scope resolution

It often builds a **symbol table** mapping identifiers to properties like type, scope, and memory location.

---

### 4. Intermediate Code Generation

**Purpose**: Convert the AST into a lower-level, platform-agnostic **Intermediate Representation (IR)**.

- Input: AST
- Output: IR (e.g., SSA, LLVM IR, three-address code)

Advantages:
- Enables platform independence
- Facilitates deeper optimizations
- Serves as a bridge between source language and target architecture

---

### 5. Optimization

**Purpose**: Improve code efficiency (performance, memory, size).

Types of optimization:
- **Constant folding**: `3 + 4 → 7`
- **Dead code elimination**: Remove code that never executes
- **Loop unrolling**: Reduce loop overhead
- **Function inlining**: Replace function calls with actual code
- **Strength reduction**: Replace expensive operations with simpler ones

Optimizations can be applied at:
- High-level (AST)
- Mid-level (IR)
- Low-level (machine code)

---

### 6. Code Generation

**Purpose**: Translate IR into target machine code or assembly instructions.

- Input: Optimized IR
- Output: Target-specific machine code

Tasks include:
- Register allocation
- Instruction selection
- Instruction scheduling

Targets:
- x86 / x86-64
- ARM
- MIPS
- RISC-V

---

### 7. Assembly and Linking

Most compilers generate **object files** which are then passed to a **linker**. The linker resolves symbols and combines object files into a single executable binary.

Some compilers (e.g., GCC) bundle both compilation and linking steps.

---

## Types of Compilers

### Native Compiler

- Translates source code directly to machine code for the same platform.
- Examples: `gcc`, `clang`, `MSVC`

### Cross Compiler

- Generates machine code for a different target platform than the host.
- Example: Compile on Windows for ARM Linux.

### Just-In-Time (JIT) Compiler

- Compiles code at runtime rather than ahead-of-time.
- Used in: JVM, .NET CLR, V8 engine
- Combines interpretation and compilation for performance and flexibility.

### Transpiler

- Converts code from one high-level language to another.
- Examples: TypeScript → JavaScript, Babel (ES6 → ES5)

### Bytecode Compiler

- Produces intermediate bytecode for a virtual machine.
- Example: `javac` → `.class` files for the Java Virtual Machine (JVM)

---

## Summary

A compiler is a complex software tool that plays a foundational role in software development. Its purpose goes far beyond simple translation — it performs deep analysis, optimization, and transformation of code to produce efficient and executable output across various platforms and languages.
