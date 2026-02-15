# Good Code = C³

Composability, Comprehensibility, Correctness.

---

## The Definition

> Good programming code has the 3 Cs: **composability**, **comprehensibility**, and **correctness**.

This is a human, cognitive-centric definition of quality.

---

## The Three Cs

### Comprehensibility
You can understand how it works well enough to be confident it's correct—and be right about that confidence most of the time.

### Correctness
The code does what it's supposed to do. Reliably. Even in rarely-used paths.

### Composability
You can take two pieces of comprehensible, correct code and combine them into another piece that's also comprehensible and correct.

---

## What This Means

### FP Isn't the Goal

> Functional programming is a means to an end, like every other tool.

Static types, pure functions, immutability—these are tools, not goals. They're useful when they help achieve C³.

> "Purely functional" is neither necessary nor sufficient for good code.

### What Clients Actually Want

1. Code that works reliably, even in rarely-used parts
2. Code others can understand (you won't be around forever)
3. Code that's cheap to change (requirements never stop changing)

C³ delivers all three.

---

## Functional Ideas in OO

Object-oriented programming can borrow functional principles:

**Immutable objects** — Mutable objects create hidden state

**Objects as partial application** — Constructor arguments partially apply all methods. This explains why methods should operate on object state—they're partially applied.

**Commands vs Queries** — Clear separation between mutation and reading (see [[CQRS]])

**Constructor as API** — The constructor becomes a critical part of your interface

---

## Implications

When you apply "objects as partial application":
- Smaller, more cohesive classes
- Methods relate closely to shared state
- Fewer private methods (none at all, often)
- Constructor becomes meaningful

---

## Related Concepts

- [[Functional-Leaning Philosophy]] — Pragmatic FP in practice
- [[Clean Code]] — Tactical rules for comprehensibility
- [[CQRS]] — Commands vs queries separation
- [[Bijection Principle]] — Correct modeling leads to correct code

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC

## Sources

- https://medium.com/@Aaron-007/functional-programming-isnt-the-answer-efbc160d1f38
- https://medium.com/@Aaron-007/functional-programming-in-object-oriented-languages-4f81b6fc9e7f
