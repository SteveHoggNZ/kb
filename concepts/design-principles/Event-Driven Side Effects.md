# Event-Driven Side Effects

Background work via events, not direct method calls.

---

## The Pattern

API surfaces emit events onto a queue/streamer. Workers consume them asynchronously.

```
API Handler → Persist → Emit Event → Return to Client
                              ↓
Worker Pool → Consume Event → Execute Side Effect
```

---

## Why Not Direct Calls?

Direct method calls:
- Block the request until side effect completes
- Fail the request if side effect fails
- Couple producer to consumer

Event-driven:
- Request returns immediately
- Side effect failures don't break the request
- Producer and consumer evolve independently

---

## Benefits

### Loose Coupling
Write path doesn't know about side effects. Adding analytics, auditing, notifications = new subscriber, no API changes.

### Replayability
Workers can be restarted without losing context. Events persist until acknowledged.

### Operational Control
Individual workers can be paused, rescaled, or replaced without redeploying the API.

---

## Emit Early, Consume Later

> Prefer emitting domain events even if only one worker currently consumes them.

Future features subscribe without touching the API:
- Analytics
- Audit logging
- Notifications
- Search indexing
- Cache invalidation

---

## Event Shape

```json
{
  "type": "message.created",
  "channel_id": "uuid",
  "message_id": "uuid",
  "timestamp": "2024-01-15T12:00:00Z",
  "payload": { ... }
}
```

Keep events **domain-focused**, not implementation-focused:
- ✅ `message.created`
- ❌ `send_webhook_to_agent`

---

## Worker Patterns

### Stateless Workers
Scale horizontally. No coordination needed.

### Coordinated Workers
Need locks (Postgres advisory locks, Redis locks) for:
- Ordered processing
- Exclusive access
- Distributed rate limiting

---

## Related Concepts

- [[CQRS]] — Events bridge commands to downstream effects
- [[Strategy Pattern]] — Queue implementation as swappable strategy
- [[Graduated Defense]] — Rate limit event consumers separately
- [[Outbox Pattern]] — Guarantees event emission within the same transaction

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
