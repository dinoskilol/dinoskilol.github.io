---
title: Intermediate Representation
tags:
  - concept
---

**Intermediate Representation (IR)** is a crucial internal data structure used by compilers to bridge the gap between high-level source code and low-level machine code. It exists **between the parsing phase and the final code generation phase** in a compiler pipeline.

IR is not specific to any programming language or target architecture. Instead, it provides a **unified and abstracted form of code** that enables **analysis, transformation, and optimization**.

---

## Purpose of Intermediate Representation

IR is designed to enable compilers to be **modular, efficient, and portable**. Its primary purposes include:

### 1. **Portability**

- A single front-end (for parsing) can generate IR.
- The same IR can be used to target different hardware architectures (e.g., x86, ARM, RISC-V).
- This enables reuse of the compiler’s backend and makes cross-compilation easier.

### 2. **Optimization**

- IR provides a simplified and normalized representation of code.
- Many optimizations are easier to apply to IR than to raw source code or machine code.
- Examples include dead code elimination, loop unrolling, constant propagation, and inlining.

### 3. **Modularity (Separation of Concerns)**

Compiler architecture is often split into:
- **Front-end**: Converts source code into IR.
- **Middle-end**: Optimizes the IR.
- **Back-end**: Converts IR into machine-specific instructions.

This separation allows compiler components to be developed and maintained independently.

---

## Types of Intermediate Representation

IR can be classified based on how close it is to the original source code or the final machine instructions.

### 1. High-Level Intermediate Representation (HIR)

- Closest to the source code.
- Retains constructs like variables, loops, conditionals, and functions.
- Preserves semantic meaning and structure.

**Use Case**: Ideal for semantic analysis and type checking.

**Example**: Abstract Syntax Tree (AST)

```c
for (int i = 0; i < 10; ++i) {
    sum += i;
}
```

This might be represented as a tree structure where nodes represent control flow, variables, and operations.

---

### 2. Medium-Level Intermediate Representation (MIR)

- Strips away high-level language features.
- Reduces code to basic operations and explicit control flow.
- Easier to optimize due to its structured, language-independent format.

**Use Case**: Main target for most compiler optimizations.

**Examples**:
- **LLVM IR** – used in Clang/LLVM-based compilers
- **GIMPLE** – used in GCC
- **CIL** – used in .NET CLR

**Example (LLVM IR)**:
```llvm
%1 = add i32 %a, %b
store i32 %1, i32* %ptr
```

---

### 3. Low-Level Intermediate Representation (LIR)

- Close to assembly or machine code.
- Includes register allocations, memory addressing, and instruction scheduling.
- Often used immediately before generating the final machine code.

**Use Case**: Prepares code for final instruction selection and emission.

**Examples**:
- Register Transfer Language (RTL)
- SelectionDAG (used in LLVM)

**Example**:
```asm
MOV R1, [R2]
ADD R3, R1, #5
```

---

## Other IR Concepts

### Control Flow Graph (CFG)

A representation of all paths that might be traversed through a program during its execution. Each node represents a basic block, and edges represent possible control flow.

### Static Single Assignment (SSA)

A form of IR where each variable is assigned exactly once. SSA simplifies many compiler optimizations and is widely used in MIR and LIR stages.

### Three-Address Code (TAC)

An intermediate code format where each instruction has at most three operands (e.g., `x = y + z`). This is commonly used to represent computations in MIR.

---

## Summary

Intermediate Representation is the **linchpin** of modern compiler architecture. By providing a flexible, analyzable, and target-agnostic abstraction of a program, IR enables:

- Cross-platform compilation
- Powerful optimizations
- Clean separation between front-end and back-end
- Reusability across languages and systems

Mastering IR is fundamental to understanding how programming languages are implemented and how modern toolchains achieve efficiency and flexibility.
