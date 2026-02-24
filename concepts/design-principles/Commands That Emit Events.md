# Commands That Emit Events

A unifying philosophy for API design: every API endpoint is a **command** that expresses business intent and **emits events** as a side effect. Stop thinking "endpoints that mutate state" — start thinking "actions that announce what happened."

> **The one-sentence version:** Design APIs as commands that emit events, not endpoints that mutate state.

---

## The Cultural Shift

Most API design starts from the database and works outward: "I have a `users` table, so I need CRUD endpoints." This produces generic REST that leaks implementation details and tightly couples consumers to your data model.

The inversion: **start from business intent and work inward.**

| Traditional Thinking | Command + Event Thinking |
|---------------------|--------------------------|
| "What data do I expose?" | "What actions can consumers take?" |
| `PUT /orders/{id}` with status field | `POST /orders/{id}/ship` |
| Consumers infer what happened | Events announce what happened |
| Coupling is in the schema | Coupling is in the contract |
| Side effects are afterthoughts | Side effects are the architecture |

This isn't just a style preference — it changes how systems evolve. When your API expresses **intent**, you can add downstream behavior (analytics, notifications, audit) without touching the API. When your API expresses **data mutation**, every new behavior requires schema changes.

---

## Action URLs: Hybrid REST

Pure REST maps HTTP verbs to CRUD. Real business domains don't fit CRUD.

**Action URLs** extend REST with intent-based endpoints:

```
# Standard REST (what?)
PUT /orders/123  { "status": "shipped" }

# Action URL (why?)
POST /orders/123/ship  { "carrier": "fedex", "tracking": "1Z999..." }
```

| Aspect | Pure REST | Action URLs |
|--------|-----------|-------------|
| **Verb** | Generic (PUT) | Specific (ship, cancel, approve) |
| **Validation** | Generic field-level | Action-specific business rules |
| **Events** | Must infer from diff | Explicit: `order.shipped` |
| **Discoverability** | Read the schema | Read the URL |
| **Idempotency** | Complex (partial updates) | Natural ([[Idempotency Keys]] per action) |

The guideline: **use standard REST for CRUD, action URLs for business operations.** If the operation has a name in the domain language ("ship", "approve", "escalate"), it deserves its own endpoint.

---

## The Architecture: CQRS-Lite

[[CQRS]] separates commands from queries. Combined with [[Event-Driven Side Effects]] and the [[Outbox Pattern]], this produces a powerful architecture:

```
Client → Command Endpoint → Validate → Write + Outbox Event → 202 Accepted
                                              ↓
                                    Outbox Poller publishes
                                              ↓
                              ┌───────────────┼───────────────┐
                              ↓               ↓               ↓
                         Projections     Notifications     Analytics
                        (read models)    (webhooks/email)  (event store)
```

Each component has a single responsibility:
- **Command endpoints** validate and persist (the [[Dumb Pipe Smart Edge|dumb pipe]])
- **Outbox** guarantees event emission within the same transaction
- **Projections** build optimised read models from events
- **Subscribers** handle side effects independently

This is [[Async-First Design]] applied structurally: the command returns `202 Accepted`, and everything downstream flows from the event.

---

## Three Levels of Decoupling

Events enable decoupling at three distinct levels, each progressively harder to achieve but more valuable:

### Level 1: Temporal Decoupling

Producer and consumer don't need to be running at the same time. Events persist; consumers process when ready.

```
Order Service emits order.shipped at 2:00 AM
Notification Service processes it at 2:05 AM (was scaling up)
```

This is what [[Async-First Design]] provides — the producer doesn't wait.

### Level 2: Spatial Decoupling

Producer doesn't know (or care) who consumes the event. Adding a new consumer requires zero changes to the producer.

```
order.shipped → Notification Service  (original)
order.shipped → Analytics Pipeline    (added later, no API changes)
order.shipped → Partner Webhook       (added later, no API changes)
```

This is what [[Event-Driven Side Effects]] provides — loose coupling through domain events.

### Level 3: Protocol Decoupling

Consumers choose their own delivery mechanism. The event contract is stable; the transport varies.

```
order.shipped → Webhook (HTTP POST to partner)
order.shipped → Queue (SQS for internal service)
order.shipped → SSE (real-time to dashboard)
```

This is the [[Dumb Pipe Smart Edge|dumb pipe]] extended: the event is the contract, the transport is infrastructure.

---

## The Reactive Contract

Traditional API documentation describes endpoints. A reactive API needs to document three things together — **The Trifecta**:

### 1. Actions (Commands)

What the consumer can *do*:

```yaml
POST /orders/{id}/ship:
  intent: Mark order as shipped
  input: { carrier, tracking_number }
  emits: order.shipped
  idempotency: Required (Idempotency-Key header)
```

### 2. Events (What Happened)

What the system *announces*:

```yaml
order.shipped:
  version: 2
  payload:
    order_id: uuid
    carrier: string
    tracking_number: string
    shipped_at: timestamp
  subscribers: [notifications, analytics, partner-webhooks]
```

### 3. Subscriptions (Who Listens)

What reacts to each event:

```yaml
notifications:
  listens_to: [order.shipped, order.delivered, order.cancelled]
  delivery: webhook
  retry: exponential backoff, max 5 attempts
```

**Document all three together.** An action without its events is half a contract. An event without its subscribers is a promise without accountability.

---

## Event Versioning Strategy

Events are contracts. Breaking them breaks consumers. Two principles:

### Stable Event Types, Versioned Payloads

The event *type* (`order.shipped`) stays stable forever. The *payload* evolves with explicit versioning:

```json
{
  "type": "order.shipped",
  "version": 2,
  "payload": {
    "order_id": "uuid",
    "carrier": "fedex",
    "tracking_number": "1Z999...",
    "shipped_at": "2026-02-24T12:00:00Z",
    "warehouse_id": "wh-east-1"  // Added in v2
  }
}
```

### Additive-Only Changes

New fields are added; old fields are never removed or renamed. Consumers ignore fields they don't recognise ([[Postel's Law]] applied to events). Breaking changes require a new event type (`order.shipped.v3` or `order.dispatched`).

---

## Idempotency in the Event World

The [[Outbox Pattern]] guarantees at-least-once delivery. This means consumers **must** be idempotent. Three patterns:

| Pattern | How | When |
|---------|-----|------|
| **Deduplication table** | Store `(event_id, consumer)` in DB; skip if seen | Most common |
| **Natural idempotency** | Operation is inherently safe to repeat (e.g., SET, not INCREMENT) | When possible |
| **[[Idempotency Keys]]** | Client-provided key scoped to action | Command-side |

The combination of [[Idempotency Keys]] (command-side) and deduplication tables (consumer-side) creates end-to-end exactly-once semantics over at-least-once infrastructure.

---

## Connection to Existing Principles

### The Dumb Pipe Realised

[[Dumb Pipe Smart Edge]] describes the architecture in layers. Commands That Emit Events is the *data flow* through those layers:

- **Command** enters the dumb pipe (API validates, persists, emits to outbox)
- **Event** flows through infrastructure (outbox → queue → subscribers)
- **Smart edge** interprets events for each consumer (projections, notifications, webhooks)

The API never decides *what to do* with the event. It just announces what happened. Intelligence lives at the edges.

### Physics Thinking Applied

[[Physics Thinking]] says: make catastrophic failures impossible by design.

| Concern | Physics Enforcement |
|---------|-------------------|
| Event loss | [[Outbox Pattern]] — same transaction as domain write |
| Duplicate processing | Deduplication table — database constraint |
| Consumer failure | At-least-once + retry — events persist until acknowledged |
| Schema breakage | Additive-only versioning — old consumers still work |

### The CQRS Foundation

[[CQRS]] provides the conceptual split: commands mutate, queries read. Commands That Emit Events extends this: commands don't just mutate — they **announce**. The announcement (event) becomes the bridge between the write model and everything downstream.

---

## When to Use This

| Use Commands + Events | Use Simple REST |
|----------------------|-----------------|
| Multiple downstream consumers | Single consumer |
| Side effects matter (notifications, audit) | Pure CRUD with no side effects |
| Systems evolve independently | Monolith with shared codebase |
| Business operations with domain language | Generic data access |
| Audit trail required | No audit requirements |

**Start simple, evolve toward events.** Even if you have one consumer today, emitting domain events via the [[Outbox Pattern]] costs little and enables everything later.

---

## See Also

- [[CQRS]] — The conceptual foundation: commands vs queries
- [[Event-Driven Side Effects]] — The event consumption pattern
- [[Outbox Pattern]] — Guaranteeing event emission
- [[Async-First Design]] — Return 202, process later
- [[Idempotency Keys]] — Safe retries for commands
- [[Dumb Pipe Smart Edge]] — The architectural layering this data flow inhabits
- [[Physics Thinking]] — Making event loss impossible by design
- [[Postel's Law]] — Be liberal in what events you accept
- [[_MOCs/Design Principles]] — Back to the MOC

## Sources

- Multi-agent ROUNDTABLE discussion on API & Database Design (internal session, 2026-02-24)

---

*Created [[2026-02-24]] — Synthesised from ROUNDTABLE discussion on reactive API design*
