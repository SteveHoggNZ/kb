# Layered Dependencies

One-way dependency graph: handlers → services → repositories.

---

## The Layers

```
┌─────────────────────────────────────┐
│  Handlers (HTTP/gRPC/CLI)           │  ← Transport layer
├─────────────────────────────────────┤
│  Services (Business Logic)          │  ← Domain layer
├─────────────────────────────────────┤
│  Repositories / Adapters            │  ← Persistence layer
└─────────────────────────────────────┘
```

**Dependencies point downward only.** Lower layers never import higher layers.

---

## Layer Responsibilities

### Handlers
- Parse/validate inputs
- Enforce auth and feature flags
- Call service methods with **domain objects** (not raw JSON)
- Format responses

### Services
- Own business rules
- Orchestrate multiple repositories/clients
- **Never** import `net/http`, router packages, or transport concerns

### Repositories / Adapters
- Encapsulate persistence (Postgres, Redis, S3)
- Expose narrow interfaces
- Hide storage implementation details

---

## Why This Matters

### Testability
Services can be tested without HTTP scaffolding. Repositories can be mocked or faked.

### Reusability
Same service works across REST, gRPC, CLI, and background workers.

### Maintainability
Changes to transport don't ripple into business logic. Database migrations don't require handler changes.

---

## Detecting Violations

When adding a feature, **trace your imports**:

```go
// BAD: Service importing handler package
package services

import "myapp/handlers"  // ← Violation!

// GOOD: Service depends only on interfaces
package services

import "myapp/repositories"  // ← OK, lower layer
```

If a lower layer depends on a higher one:
1. Introduce an interface
2. Move the logic up a layer
3. Pass the dependency via constructor

---

## Interface Placement

Define interfaces in the **consumer** package:

```go
// services/user.go
type UserRepository interface {
    GetByID(ctx context.Context, id string) (*User, error)
}

type UserService struct {
    repo UserRepository  // Depends on interface, not concrete
}
```

This prevents implementations from accidentally importing consumers.

---

## Related Concepts

- [[⚠️ Clean Architecture]] — The full onion/hexagonal model
- [[Strategy Pattern]] — Repositories as swappable strategies
- [[⚠️ Mocking]] — Test each layer independently

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
