# Design Principles

How to write good code and build good systems.

## Core Philosophy

> "The heart of software is its ability to solve problems for its users within a domain. The most significant complexity of many applications is not technical—it is in the domain itself."

### [[concepts/design-principles/Good Code Equals C3|Good Code = C³]]
**Composability, Comprehensibility, Correctness.** A cognitive-centric definition of quality. FP, static types, and patterns are means to this end—not goals themselves.

### [[concepts/design-principles/Taste in Software|Taste in Software]]
Christopher Alexander's "Quality Without a Name" — why some products *feel* right while others feel generic. Two types of architecture: Type 1 (explicit rules, delegatable to AI) vs Type 2 (taste, coherence, vision — not delegatable). In the agentic era, taste is the irreducible human contribution. You can delegate construction; you cannot delegate vision.

### [[concepts/design-principles/Physics Thinking|Physics Thinking]]
Design meta-principle: distinguish what components *should* do (Law/Policy) from what they *can* do (Physics). Ensure catastrophic failures are prevented by Physics, not just discouraged by Law. Applies across all layers — agents, APIs, databases, UI, infrastructure. The goal isn't perfect compliance; it's **bounded failure**. See [[Law vs Physics in Agent Design]] and [[Database Physics vs Policy]] for layer-specific deep-dives.

---

## Foundational Concepts

### [[concepts/design-principles/Bijection Principle|The Bijection Principle]]
One and only one object representing a real-world entity. The foundation of good domain modeling.
- If you see IFs polluting your code, you're probably violating bijection
- Distinguish between essential (business rules) and accidental (implementation)
- See also: [[⚠️ Clean Architecture|⚠️ Clean Architecture]]

### [[concepts/design-principles/Clean Code|Clean Code & Object Calisthenics]]
9 rules for cleaner, more maintainable code:
1. One level of indentation per method
2. Don't use ELSE
3. Wrap primitive types
4. One dot per line (Law of Demeter)
5. Don't abbreviate
6. Keep classes small (50 lines)
7. Max 2 instance variables per class
8. First class collections
9. No getters/setters (Tell, Don't Ask)

### [[concepts/design-principles/SOLID Principles|SOLID Principles]]
- **S**ingle Responsibility - One reason to change
- **O**pen/Closed - Open for extension, closed for modification
- **L**iskov Substitution - Subtypes must be substitutable
- **I**nterface Segregation - Many specific interfaces > one general
- **D**ependency Inversion - Depend on abstractions

### [[⚠️ Clean Architecture|Clean Architecture & DDD]] ⚠️
**Use with caution.** Often over-engineered for real-world needs.
- Too many layers of abstraction for most projects
- The "swap your database" flexibility is rarely used
- Spreads related code across many files and directories
- Consider [[concepts/design-principles/Steel Thread Delivery|vertical slices]] or simple modular design instead
- DDD concepts (ubiquitous language, bounded contexts) remain useful without the layer gymnastics

---

## Delivery & Process

### [[concepts/design-principles/Steel Thread Delivery|Steel Thread Delivery]]
Ship a thin, end-to-end slice before expanding scope. Build one complete path through the system first—API, middleware, database, tests—then widen.

### [[concepts/design-principles/Definition of Done|Definition of Done]]
A task is done only when: code works, tests pass, linter clean, docs updated, commits conventional. The checklist that prevents "it works on my machine."

### [[concepts/design-principles/⚠️ Mocking|⚠️ Anti-Pattern: Mocking]]
Mock frameworks give false confidence—they prove you called the mock correctly, not that your system works. Use real databases, fake HTTP servers, and hand-written in-memory implementations instead. Integration tests are the default.

### [[concepts/design-principles/⚠️ Lean Startup|⚠️ Anti-Pattern: Lean Startup]]
A 2011 methodology applied far beyond its context. MVP, "build-measure-learn," and A/B testing your way to success don't work for established products. Research first, then build.

---

## Architecture Patterns

### [[concepts/design-principles/⚠️ Microservices|⚠️ Anti-Pattern: Microservices (Premature)]]
Monolith > Apps > Services > Microservices. Each service is extreme debt. 90% of companies could just be a monolith with caching and proxies. Move down this hierarchy reluctantly.

### [[concepts/design-principles/Strategy Pattern|Strategy Pattern & Interface Seams]]
Every subsystem boundary exposes a narrow interface. Swap implementations (PostgreSQL ↔ Redis, HTTP ↔ in-process) by changing config, not code.

### [[concepts/design-principles/CQRS|Command-Query Separation (CQRS)]]
Methods either mutate state (commands) or return data (queries)—never both. Clearer transactions, easier caching, simpler tests.

### [[concepts/design-principles/Layered Dependencies|Layered Dependencies]]
One-way dependency graph: Handlers → Services → Repositories. Lower layers never import higher layers. Enables testing and reuse.

### [[concepts/design-principles/Functional-Leaning Philosophy|Functional-Leaning Philosophy]]
Pragmatism over dogma. Immutability where practical, minimize side effects, small focused packages, errors as values. When in doubt, choose the clearer, more direct path.

---

## Distributed Systems Patterns

### [[concepts/design-principles/Event-Driven Side Effects|Event-Driven Side Effects]]
Background work via events, not direct calls. API emits events; workers consume asynchronously. Loose coupling, replayability, operational control.

### [[concepts/design-principles/Async-First Design|Async-First Design]]
Return 202 Accepted and process work asynchronously. Don't block requests waiting for completion. Better UX, resilience, and scalability.

### [[concepts/design-principles/Idempotency Keys|Idempotency Keys]]
Exactly-once semantics despite retries. Clients include UUID; server caches responses. Safe to retry any operation.

### [[concepts/design-principles/Exponential Backoff|Exponential Backoff with Jitter]]
Resilient retry strategy. Prevents thundering herds. Formula: `min(initial × 2^attempt, max) × jitter`.

### [[concepts/design-principles/Graduated Defense|Graduated Defense]]
Multi-layer rate limiting with escalating consequences. Different limits for different risk profiles. Cooldowns compound.

### [[concepts/design-principles/Database Physics vs Policy|Database Physics vs Policy]]
Decision framework for Columns vs JSONB. Three litmus tests: (1) Foreign Key Test — references another table? Column. (2) Indexing/Poller Test — background job queries it? Column. (3) Write-Path Gatekeeper Test — checked on every hot-path write? Column. Everything else goes in JSONB. Copy-Down pattern beats Runtime Lookup for hierarchical settings.

### [[concepts/design-principles/Logical Resource Separation|Logical Resource Separation]]
One connection string per concern, even when all concerns share one physical resource. Makes future scaling a config change, not a code change. Apply to Redis, databases, S3 buckets, API keys — anywhere two features would benefit from different scaling or tuning policies.

### [[concepts/design-principles/Agent Ergonomics|Agent Ergonomics]]
Cockpit shape coding applied to software: if two things do different things, they must *feel* different. Introduces **Affordance** as the middle layer between Law and Physics — reducing cognitive load through design rather than rules or hard limits. Two dimensions: Human→Agent (interaction modes, feedback shapes) and Agent→Tool (distinct names, parameter shapes, response structures). Includes the Blindfold Test, Swap Test, and Pressure Test as design heuristics.

---

## Security & Authorization

### [[concepts/design-principles/RLS-First Authorization|RLS-First Authorization]]
Database as final enforcement point. Row-Level Security policies can't be bypassed. Middleware is optimization; database is truth.

### [[concepts/design-principles/Postel's Law|Postel's Law (Robustness Principle)]]
Be conservative in what you send, liberal in what you accept. Graceful handling of variations without compromising security.

---

## Operations

### [[concepts/design-principles/Observability by Default|Observability by Default]]
Metrics, logs, and traces from day one. Standard endpoints, structured logging, correlation IDs. Ship observability with the first iteration.

### [[concepts/design-principles/Canonical Log Lines|Canonical Log Lines]]
One authoritative log line per request with all key context. Stripe's pattern: makes queries fast, enables analytics, prevents scattered log hunting.

---

## Practical Patterns

### Removing Complexity
- **Table-driven methods** - HashMap lookup of function calls
- **[[concepts/design-principles/Strategy Pattern|Strategy pattern]]** - Class per condition (OO polymorphism)
- **Factory methods** - Self-descriptive object creation
- **Value objects** - Replace primitives with domain concepts

### Code Smells to Watch
- Arrow code (nested IFs)
- Primitive obsession (strings for emails, IDs)
- Long parameter lists
- Empty lines dividing logic (extract to functions instead)
- `new` is glue - creates tight coupling
- Heavy mocking in tests (see [[concepts/design-principles/Testing Strategy|Testing Strategy]])

---

## The 20 Code Design Tips

1. Describe class in one sentence—"and/or" = SRP violation
2. `new()` creates coupling—consider DI, factories, pools
3. Extending behavior? Consider decorators over modification
4. High-level shouldn't depend on low-level directly
5. Use interfaces, DI, mediator for loose coupling
6. Same group of interfaces everywhere = missing abstraction
7. All dependencies via constructor (explicit dependencies)
8. Many constructors → static factory methods
9. Abstract non-deterministic dependencies (DateTime)
10. Replace primitives with value objects
11. Refactor if-else to patterns
12. Prefer immutable types
13. Use pure functions
14. Choose data structures by Big O
15. Long methods → split them
16. Singleton via DI container, not static field
17. Deep copy via serialization
18. Avoid stateful singletons
19. Don't inject short-lived into singleton (captive dependency)
20. Always create tech debt tickets

---

## Functional Concepts

### Either/Result Types
- Domain errors vs system exceptions
- `Right` = success, `Left` = error
- Bind operations to chain the happy path
- Handle errors at the boundary

### Pure Functions
- Output depends only on input
- No side effects
- Predictable and testable

---

## Related MOCs

- [[Leadership & Teams]] - Conway's Law: architecture mirrors organization
- [[Decision Frameworks]] - TOSCA for problem definition before solution design
- [[Philosophy & Life]] - "Make sure you're running towards something, not away"

---

## Source Notes (from kb.original)

- `development-approach.md` - Bijection principle
- `clean-code.md` - Object Calisthenics
- `clean-architecture.md` - DDD and layered architecture
- `20 Code Design Tips for Developers for Everyday Use.md` - The 20 tips
- `python-solid.md` - SOLID in Python with code examples
