# Exponential Backoff with Jitter

Resilient retry strategy that prevents thundering herds.

---

## The Formula

```
delay = min(InitialBackoff × 2^attempt, MaxBackoff) × (0.5 + random(0.5))
```

**Parameters:**
- Initial backoff: 200ms
- Max backoff: 2s
- Max attempts: 3
- Jitter: 50-100% of calculated delay

---

## Why Jitter Matters

Without jitter, retries synchronize:

```
Server fails at t=0
1000 clients retry at t=200ms  → Server overwhelmed again
1000 clients retry at t=400ms  → Still overwhelmed
```

With jitter, retries spread:

```
Server fails at t=0
Clients retry between 100-200ms  → Load distributed
Clients retry between 200-400ms  → Recovery possible
```

---

## Implementation

```go
func backoff(attempt int) time.Duration {
    base := initialBackoff * time.Duration(1<<attempt)
    if base > maxBackoff {
        base = maxBackoff
    }
    jitter := 0.5 + rand.Float64()*0.5  // 0.5 to 1.0
    return time.Duration(float64(base) * jitter)
}
```

---

## When to Use

**Always use for:**
- External API calls
- Database reconnection
- Queue consumer retries
- Webhook delivery

**Don't use for:**
- User-facing latency-sensitive paths (fail fast instead)
- Operations where retry makes no sense (auth failures)

---

## Combined with Idempotency

Exponential backoff + [[Idempotency Keys]] = resilient and safe:

```go
key := generateIdempotencyKey()
for attempt := 0; attempt < maxAttempts; attempt++ {
    resp, err := client.Do(req, key)
    if err == nil {
        return resp, nil
    }
    time.Sleep(backoff(attempt))
}
return nil, ErrMaxRetriesExceeded
```

---

## Related Concepts

- [[Idempotency Keys]] — Safe to retry with idempotency
- [[Graduated Defense]] — Backoff is part of defense-in-depth
- [[⚠️ Mocking]] — Test retry behavior with fake HTTP servers

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
