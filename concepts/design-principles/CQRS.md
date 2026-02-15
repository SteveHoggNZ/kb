# Command-Query Separation (CQRS)

Service methods either mutate state or return data—never both.

---

## The Principle

**Commands** change state, return nothing (or just success/failure).
**Queries** return data, change nothing.

```
ThreadService.CreateMessage(...)  // Command: mutates, minimal return
ThreadService.ListMessages(...)   // Query: reads, no side effects
```

Don't mix side effects and read models in a single method.

---

## Why It Matters

### Clearer Transactional Boundaries
Commands own the write transaction. Queries can run outside transactions or with read replicas.

### Easier Idempotency
Commands can be designed for safe retry. Queries are naturally idempotent.

### Simpler Caching
Queries can be cached independently of commands. Cache invalidation becomes straightforward—commands invalidate, queries read cache.

### Better Testing
Commands: assert state changed correctly.
Queries: assert correct data returned.
Never mixing means simpler test setup.

---

## Naming Convention

Use verbs that imply intent:

| Command Verbs | Query Verbs |
|--------------|-------------|
| `Create` | `Get` |
| `Update` | `List` |
| `Upsert` | `Find` |
| `Delete` | `Count` |
| `Send` | `Fetch` |

---

## When It Gets Fuzzy

Sometimes a feature seems to need both behaviors.

**Solution:** Split into two calls or introduce a façade that orchestrates the separate services.

```go
// Instead of: CreateAndReturnUser(...)
// Do:
userID := userService.CreateUser(...)  // Command
user := userService.GetUser(userID)    // Query
```

---

## Synergy: Cursor-Based Pagination

CQRS pairs well with cursor-based pagination for read paths. Consistent envelope:

```json
{
  "data": [...],
  "meta": {
    "next_cursor": "eyJpZCI6MTIzfQ==",
    "has_more": true
  }
}
```

Queries become composable: filter → sort → paginate → return.

---

## Related Concepts

- [[⚠️ Clean Architecture]] — CQRS fits naturally in layered architecture
- [[⚠️ Mocking]] — Separate paths are easier to test
- [[Strategy Pattern]] — Different strategies for read vs write paths
- [[Outbox Pattern]] — Commands write to outbox; events flow to read models
- [[Idempotency Keys]] — Only commands need idempotency; queries are naturally idempotent

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
