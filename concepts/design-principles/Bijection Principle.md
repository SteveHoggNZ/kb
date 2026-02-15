# The Bijection Principle

> In the domain of software and under the paradigm of objects we will always have one and only one object representing a real-world entity.

## The Core Idea

A bijection is a one-to-one mapping. In software, this means each real-world entity should have exactly one representation in code—no more, no less.

## Why It Matters

When we violate bijection, we get:
- Code polluted with IFs
- Missing default statements
- New cases requiring new IFs everywhere
- Strings instead of first-class objects (typos cause bugs)
- Getters that expose implementation for external decisions

## Essential vs. Accidental

> We must understand whether something represents a business rule (essential) or an implementation artifact (accidental).

**Example:** Movie ratings
- Bad: `if (rating == "PG-13")` — this IF is accidental, tied to string implementation
- Good: Rating as a first-class object with behavior

## The Fix

> Stop seeing entities as data structures with attributes. Think of them as objects that are the same object fulfilling different roles depending on context.

## Design Rules

1. Create abstractions if they belong to the same domain (movies and ratings)
2. Don't over-abstract across domains (movies and ages)
3. Watch for over-design—the formula can go too far

## Techniques to Remove IFs

1. **Assert instead of conditionals** — Fail fast with exceptions
2. **Table-driven methods** — HashMap lookup of function calls
3. **Strategy pattern** — Class per condition (polymorphism)

## Code Smell Signals

- Empty lines dividing code → extract to functions
- Nested IFs (arrow code) → refactor to patterns
- Switches/case statements → consider polymorphism

---

## Related Concepts

- [[Clean Code]] — Object Calisthenics rule: "Don't use ELSE"
- [[SOLID Principles]] — Open/Closed Principle
- [[⚠️ Clean Architecture]] — Domain at the center

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC

## Sources

- https://codeburst.io/the-one-and-only-software-design-principle-5328420712af
- https://blog.devgenius.io/how-to-get-rid-of-annoying-ifs-forever-317033474484
