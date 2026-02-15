# Steel Thread Delivery

Ship a thin, end-to-end slice before expanding scope.

---

## The Pattern

A steel thread is the thinnest possible vertical slice that touches every layer of the system—API, middleware, database, integration—and proves the architecture works.

**Build one complete path through the system before widening it.**

---

## Why It Works

1. **Validates assumptions quickly** — Integration bugs surface on day 1, not day 30
2. **Provides executable templates** — First endpoint becomes the pattern for all others
3. **Prevents pile-up** — Integration problems don't accumulate until the end
4. **Enables parallel work** — Once the thread exists, others can follow the pattern

---

## The Checklist

1. **Choose a high-value flow** — e.g., "List organizations for current user"
2. **Implement the full vertical slice:**
   - Config loading
   - Router/handler
   - Logging
   - Authentication/session context
   - Database migrations
   - RLS policies
   - Integration tests
3. **Only after green** should broader API/migration work proceed

---

## Anti-patterns

- Building all handlers first, then "wiring them up"
- Complete database schema before any API
- "We'll add tests later"
- Horizontal slices that never integrate

---

## Related Concepts

- [[⚠️ Clean Architecture]] — Layers the steel thread passes through
- [[Testing Strategy]] — Integration tests prove the thread works
- [[Definition of Done]] — Steel thread must pass DoD before expanding

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
