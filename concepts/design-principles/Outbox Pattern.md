# Outbox Pattern

Guaranteed event emission without distributed transactions.

---

## The Problem

You want to:
1. Save a domain change to the database
2. Publish an event to a message queue

But what if the app crashes *after* the commit but *before* the publish? The database has the change, but no event was emitted. Downstream systems are now inconsistent.

```
BEGIN TRANSACTION
  INSERT INTO orders (...)     ✓ committed
COMMIT
publish_event("order.created")  ✗ app crashes here
```

---

## The Solution

Write the event to a database table (the "outbox") *within the same transaction* as the domain change. A separate process polls the outbox and publishes events.

```
BEGIN TRANSACTION
  INSERT INTO orders (...)
  INSERT INTO outbox (event_type, payload, ...)
COMMIT
-- If commit succeeds, event is guaranteed to be in outbox
-- If commit fails, neither change persists
```

---

## Outbox Table Schema

```sql
CREATE TABLE outbox (
  id            UUID PRIMARY KEY,
  event_type    TEXT NOT NULL,
  payload       JSONB NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT now(),
  published_at  TIMESTAMPTZ,
  attempts      INT DEFAULT 0
);

CREATE INDEX idx_outbox_unpublished
  ON outbox (created_at)
  WHERE published_at IS NULL;
```

---

## Publisher Process

A background worker polls for unpublished events:

```go
for {
  events := db.Query(`
    SELECT * FROM outbox
    WHERE published_at IS NULL
    ORDER BY created_at
    LIMIT 100
    FOR UPDATE SKIP LOCKED
  `)

  for _, e := range events {
    if err := queue.Publish(e); err == nil {
      db.Exec(`UPDATE outbox SET published_at = now() WHERE id = $1`, e.ID)
    } else {
      db.Exec(`UPDATE outbox SET attempts = attempts + 1 WHERE id = $1`, e.ID)
    }
  }

  sleep(pollInterval)
}
```

---

## Guarantees

| Scenario | Outcome |
|----------|---------|
| Commit succeeds, publish succeeds | ✓ Consistent |
| Commit succeeds, publish fails | Event retried from outbox |
| Commit fails | No event in outbox, no domain change |
| App crashes after commit | Event persists in outbox, published on restart |

**Result:** At-least-once delivery. Consumers must be idempotent.

---

## Variants

### CDC-Based (Change Data Capture)
Instead of polling, use database CDC (Debezium, pg_logical) to stream outbox inserts directly to Kafka. Lower latency, more infrastructure.

### Inline Publishing with Saga
For simpler cases, publish inline but implement compensating transactions if publish fails. More complex application logic.

---

## When to Use

- **Use Outbox:** When event emission must be guaranteed (payments, orders, audit logs)
- **Skip Outbox:** For best-effort notifications where occasional loss is acceptable

---

## Related Concepts

- [[Event-Driven Side Effects]] — Outbox feeds the event-driven architecture
- [[Idempotency Keys]] — Consumers need idempotency for at-least-once delivery
- [[CQRS]] — Commands write to outbox; events flow to read models

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
