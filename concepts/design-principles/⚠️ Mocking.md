# ⚠️ Anti-Pattern: Mocking

Heavy use of mock frameworks is a code smell that indicates architectural problems.

---

## The Problem

> Mocks give false security—they only prove you called the mock correctly, not that your system actually works.

Traditional mocking leads to:

- **Brittle tests** — Coupled to implementation details, break when you refactor
- **False confidence** — Tests pass but production fails
- **Maintenance burden** — Mock setup often longer than actual test logic
- **Testing the wrong thing** — You're testing that you called a function, not that it does what you need

---

## Why Mocking Proliferates

Mocking is often a symptom of:

1. **Too many dependencies** — Class needs 8 mocks? It does too much.
2. **Tight coupling** — Can't test in isolation because everything is wired together.
3. **No interface seams** — Concrete classes everywhere, forcing mock injection.
4. **Fear of real dependencies** — "Databases are slow" (they're not, with containers).

If you need heavy mocking, the design is telling you something.

---

## The Alternative: Fakes and Real Implementations

### For Databases
Run tests against a **real database**.

Use containerized PostgreSQL (Docker/testcontainers). This proves your SQL queries and data mapping actually work.

### For External APIs
Use `httptest` (Go) or equivalent to create a **fake HTTP server**.

Returns realistic responses (or errors). Lets you assert correct outbound requests.

### For Internal Interfaces
Write simple **in-memory fake implementations** by hand.

Don't use mock libraries to generate them—hand-written fakes are usually simpler and more readable.

---

## Integration Tests Are the Default

The most valuable tests exercise a complete vertical slice.

### Priority Order
1. **Integration tests** — Real HTTP requests, real database, real responses
2. **Unit tests** — Reserved for complex, isolated logic with no dependencies

### What Integration Tests Prove
- Authentication works
- Authorization (RLS) works
- Handler logic works
- Database queries work
- The whole flow works together

A mock-heavy unit test proves none of this.

---

## Critical Rule: Test the API, Not the Database

**❌ BAD — Direct SQL bypass:**
```go
// Bypasses auth, RLS, and handler logic
env.adminConn.QueryRow(ctx, `INSERT INTO app_frames ...`)
```

**✅ GOOD — API-only testing:**
```go
// Tests what users actually experience
resp := env.post("/api/v2/channels/...", payload, bearerToken)
expectStatus(t, resp, http.StatusOK)
```

Direct SQL creates false confidence. You're not testing what users experience.

---

## When Unit Tests (Without Mocks) Make Sense

- Pure functions with no external dependencies
- Complex calculations or state machines
- Parsing/validation logic

If a function transforms input → output with no side effects, unit test it. No mocks needed.

---

## The Mock Framework Trap

Mock frameworks make it easy to mock *everything*, which makes it easy to test *nothing*.

```go
// This "test" proves nothing useful
mockRepo.On("GetUser", mock.Anything).Return(user, nil)
mockCache.On("Set", mock.Anything, mock.Anything).Return(nil)
mockLogger.On("Info", mock.Anything).Return()
// ... 20 more lines of mock setup
// ... 3 lines of actual test
```

If your test setup is longer than your test, reconsider the approach.

---

## Related Concepts

- [[Steel Thread Delivery]] — Integration tests prove the thread works
- [[⚠️ Clean Architecture]] — Over-abstraction leads to mock explosion
- [[Definition of Done]] — Tests must pass (real tests, not mock theater)
- [[Strategy Pattern]] — Use interface seams with real fakes, not mocks

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
