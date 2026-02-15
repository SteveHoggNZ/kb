# Idempotency Keys

Exactly-once semantics despite retries.

---

## The Pattern

Clients include `Idempotency-Key` header (UUID). Middleware caches responses by key.

```
First request with key K  → execute, cache result
Retry with key K          → return cached result (no re-execution)
New request with key K'   → execute, new cache entry
```

---

## Implementation

```go
// Scope by identity to prevent cross-tenant collisions
cacheKey := fmt.Sprintf("%s:%s:%s", platformID, agentID, idempotencyKey)

if cached := cache.Get(cacheKey); cached != nil {
    return cached  // Return cached response
}

result := executeOperation()
cache.Set(cacheKey, result, ttl)
return result
```

**Scoping:** `(platform_id, agent_id, idempotency_key)` prevents collisions across tenants.

**TTL:** Default 24 hours. Long enough to catch retries, short enough to not bloat storage.

---

## Why It Matters

Network failures happen. Clients retry. Without idempotency:

- Duplicate charges
- Duplicate records
- Corrupted state

With idempotency keys:

- Safe to retry any request
- Client controls deduplication window
- Server maintains consistency

---

## Client Responsibility

Generate a new UUID for each **logical operation**, not each **HTTP request**.

```javascript
// Good: Same key for retries of same operation
const key = crypto.randomUUID();
await fetch(url, { headers: { 'Idempotency-Key': key } });
// On failure, retry with same key

// Bad: New key per attempt
await fetch(url, { headers: { 'Idempotency-Key': crypto.randomUUID() } });
// Retry creates duplicate!
```

---

## Related Pattern: ETag/Conditional Requests

`ETag` + `If-None-Match` for caching; `If-Match` for optimistic concurrency on writes.

```
GET /users/123
→ ETag: "abc123"

PUT /users/123
If-Match: "abc123"
→ 200 OK (if unchanged) or 412 Precondition Failed (if modified)
```

Complementary to idempotency keys:
- **Idempotency keys:** Prevent duplicate *creation*
- **ETags:** Prevent conflicting *updates*

---

## Related Concepts

- [[CQRS]] — Only commands need idempotency; queries are naturally idempotent
- [[Definition of Done]] — Test idempotency as part of integration tests
- [[Exponential Backoff]] — Use with idempotency for resilient retries
- [[Outbox Pattern]] — Guarantees event emission; consumers need idempotency

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
