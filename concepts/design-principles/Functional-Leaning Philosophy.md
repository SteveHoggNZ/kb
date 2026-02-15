# Functional-Leaning Coding Philosophy

Clarity, testability, and simplicity—not strict adherence to any methodology.

---

## Pragmatism Over Dogma

> While we value readable, well-named code, we explicitly **avoid** dogmatic application of "Clean Code" principles that leads to un-idiomatic code.

### Avoid
- Deep abstraction layers
- Generic repository patterns
- Complex class hierarchies
- Java-esque patterns in non-Java languages

### Prefer
- Simple, straightforward implementation
- Direct path over clever path
- Idiomatic code for the language

**When in doubt, choose the clearer, more direct path.**

---

## Guiding Tenets

### 1. Immutability Where Practical
- Pass data by value unless pointer explicitly needed
- Don't modify input parameters—return new instances
- Predictable data flow

### 2. Minimize Side Effects
- Function's primary purpose: compute and return a value
- Isolate functions that interact with external systems
- Use interfaces to abstract side effects
- Keep core logic pure and testable

### 3. Small, Focused Packages and Files
- Single responsibility per package
- One primary type per file with its methods
- Avoid monolithic files
- Easy to navigate

### 4. Error Handling as Values
- Treat errors as first-class citizens
- Never panic; return errors explicitly
- Wrap errors with context: `fmt.Errorf("operation failed: %w", err)`
- Check errors immediately after the call

---

## Error Handling Patterns

### Status Code Guidelines
- `400` — Malformed request, validation failures
- `401` — Missing/invalid authentication
- `403` — Valid auth but insufficient permissions
- `404` — Resource doesn't exist or not visible
- `409` — Conflict (duplicate resource)
- `422` — Semantically invalid
- `429` — Rate limit exceeded
- `500` — Unexpected failure (log details, return generic message)

### Logging vs Returning
- **Log** unexpected errors (5xx) with full context before returning generic message
- **Return** expected errors (4xx) with specific messages; no need to log at error level

---

## Related Concepts

- [[Clean Code]] — Object Calisthenics rules
- [[Bijection Principle]] — Pure domain modeling
- [[⚠️ Mocking]] — Pure functions are easy to test
- [[CQRS]] — Separate queries from commands

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
