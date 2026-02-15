# Clean Architecture & DDD

**⚠️ Caution: Often Over-Engineered**

Clean Architecture is a well-intentioned pattern that frequently becomes its own problem. The abstraction layers meant to simplify code often spread logic across so many files that understanding a single feature requires jumping through half the codebase.

---

## The Simple Alternative

Before reaching for Clean Architecture, consider:

1. Write simple functions
2. Keep related things together
3. Avoid premature abstraction
4. The end

This covers 90% of what you actually need.

---

## The Theory

> Source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle.

### The Layers (Inside → Out)

1. **Entities** — Business rules, domain model
2. **Use Cases** — Application-specific business rules
3. **Interface Adapters** — Controllers, presenters, gateways
4. **Frameworks & Drivers** — Web, DB, UI, external services

---

## Why It Falls Short

### Too Many Layers
The pattern prescribes layers that most applications don't need. You end up with:
- Entity → DTO → ViewModel → Response object
- Repository interface → Repository implementation → Unit of Work → Database context

Each layer adds indirection without adding value.

### The "Swap Your Database" Myth
> You'd probably never swap PostgreSQL for MySQL, but it speaks to adaptability.

Except you *won't* swap your database. In practice, you write PostgreSQL-specific queries, use its JSON operators, its full-text search, its extensions. The abstraction is a lie you maintain at significant cost.

### Spreads Code Everywhere
A single feature touches:
- Domain entity
- Use case / service
- Repository interface
- Repository implementation
- Controller
- DTO mappers
- View models

Understanding what happens when a user clicks a button requires navigating 6+ files across 4+ directories.

### YAGNI Violation
Clean Architecture front-loads abstractions you may never need. It's architecture astronautics—designing for flexibility that never gets used while paying the complexity tax daily.

---

## Better Alternatives

### Vertical Slice Architecture
Organize by feature, not by layer. Each feature is self-contained:

```
/features
  /create-order
    CreateOrderHandler.cs
    CreateOrderRequest.cs
    CreateOrderValidator.cs
  /cancel-order
    CancelOrderHandler.cs
    ...
```

One feature, one place. No hunting across layers.

### Simple Modular Design
- Group by domain concept
- Use interfaces only where you actually need them
- Add abstraction when (not before) you need it

---

## When Clean Architecture *Might* Work

- Very large teams needing strict boundaries
- Genuinely swappable infrastructure (rare)
- Long-lived enterprise systems with regulatory requirements
- When the team already understands it deeply

Even then, consider starting simple and evolving toward it.

---

## Domain-Driven Design (DDD)

DDD concepts remain valuable even without the Clean Architecture packaging:

> The structure and language of software code should match the business domain.

### Worth Keeping
- **Ubiquitous Language** — Shared vocabulary between code and business
- **Bounded Context** — Clear boundaries around domain models
- **Aggregates** — Clusters of domain objects

These help without requiring layer gymnastics.

---

## Dependency Injection

DI itself is useful:

> DI is the practice whereby you let a class take its dependencies as constructor arguments rather than newing them up.

Remember: **new is glue.**

Just don't over-abstract what you inject.

---

## External Critiques

Others have reached similar conclusions:

- [Is Clean Architecture Overengineering?](https://threedots.tech/episode/is-clean-architecture-overengineering/) — Three Dots Labs
- [Why I Can't Recommend Clean Architecture](https://dev.to/bosepchuk/why-i-cant-recommend-clean-architecture-by-robert-c-martin-ofd) — DEV Community
- [Clean Architecture Disadvantages](https://www.jamesmichaelhickey.com/clean-architecture/) — James Michael Hickey

---

## Related Concepts

- [[Bijection Principle]] — Domain modeling foundation
- [[SOLID Principles]] — Useful individually, dangerous as dogma
- [[Layered Dependencies]] — A simpler layering approach
- [[Steel Thread Delivery]] — Build thin slices, not thick layers

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
- [[concepts/leadership/Conway's Law]] — Architecture mirrors organization

## Sources

- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html (original)
- https://paulgraham.com/taste.html
