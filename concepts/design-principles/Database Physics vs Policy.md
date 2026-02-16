# Database Physics vs Policy

A decision framework for **Structured Columns vs. Unstructured JSON** in database schema design. Physics belongs in columns; Policy belongs in JSON.

---

## The Core Distinction

| Aspect | Physics (Columns) | Policy (JSONB) |
|--------|-------------------|----------------|
| **What it is** | Hard constraints enforced by the database engine | Soft configuration interpreted by application code |
| **Enforcement** | Database-level (FK constraints, indexes, triggers) | Application-level (prompts, business logic) |
| **Examples** | `max_entries`, `idle_timeout`, `agent_id` FK | `mode: "sequential"`, `budget_currency`, `required_capabilities` |
| **Change frequency** | Rarely changes schema | Extends freely without migrations |

This mirrors [[Law vs Physics in Agent Design]] at the infrastructure layer: Physics is what the system *cannot* violate; Policy is what the system *should* follow.

---

## The Three Litmus Tests

To decide if a field belongs in a Column or in JSONB, apply these tests. **If it fails any, it goes in a column.**

### 1. The Foreign Key Test

> Can this field reference another table?

**If yes → Column required.**

You cannot put a SQL Foreign Key constraint on a field inside a JSON blob.

| In JSON | In Column |
|---------|-----------|
| Agent deleted → ghost reference → worker crashes | `REFERENCES agents(id)` protects you |
| No cascade options | `ON DELETE SET NULL` degrades gracefully |
| Manual cleanup required | Database enforces integrity |

**Example:** `idle_notify_agent_id` — must be a column with FK constraint.

### 2. The Indexing/Poller Test

> Will a background job query this field to find "needles in a haystack"?

**If yes → Column required.**

```sql
-- With Columns: Uses B-Tree index, instant
SELECT * FROM threads
WHERE last_activity_at < NOW() - idle_timeout;

-- With JSON: Full table scan or complex functional index
SELECT * FROM threads
WHERE last_activity_at < NOW() - (settings->>'idle_timeout')::interval;
```

**Example:** `idle_timeout`, `last_activity_at` — polled every minute by ExpiryWorker.

### 3. The Write-Path Gatekeeper Test

> Is this checked on every write in a hot path?

**If yes → Column recommended.**

Native column access has less CPU overhead than JSONB parsing. For hard "Physics" walls checked on every request, keep it native.

**Example:** `max_entries` — checked on every message POST.

---

## The Hierarchy Problem: Copy-Down vs. Runtime Lookup

When settings can be overridden at multiple levels (Organization → Channel → Thread), you have two patterns:

### Runtime Lookup (Bad for Physics)

```
Worker asks: "Does this thread have a timeout?"
  → No? Check the Channel
    → No? Check the Organization
```

**Problem:** Every check requires joining 3 tables. Kills performance for hot paths.

### Copy-Down (Good for Physics)

```
1. Channel has settings: {"default_idle_timeout": "5m"}
2. On thread creation, agent reads Channel defaults
3. Agent writes "5m" explicitly into threads.idle_timeout
```

**Result:**
- Schema stays simple
- Thread contains **final resolved Physics** for that room
- Worker doesn't need to know about hierarchy
- Just looks at "the clock on the wall"

---

## The Split in Practice

### Hard Physics (Columns)

Enforced by database engine or tight loops:

| Field | Why Column |
|-------|------------|
| `max_entries` | Storage quota, checked every POST |
| `idle_timeout` | Time quota, polled by background worker |
| `idle_notify_agent_id` | Foreign key to agents table |
| `status` | Indexed, queried frequently |
| `created_at` | Indexed, sorted, filtered |

### Soft Policy (JSONB `settings` or `metadata`)

Interpreted by application/agent code:

| Field | Why JSON |
|-------|----------|
| `mode: "sequential"` | Platform doesn't enforce; agent prompt does |
| `budget_currency: "USD"` | Informational only |
| `required_capabilities: ["finance"]` | Router logic, not storage logic |
| `thread_contract: {...}` | Structured but not DB-enforced |

---

## When to Use a Sidecar Table

If the main table gets too messy (approaching 50+ columns), consider a **1:1 sidecar table**:

```sql
CREATE TABLE thread_constraints (
    thread_id UUID PRIMARY KEY REFERENCES threads(id),
    max_entries INT,
    idle_timeout INTERVAL,
    idle_notify_agent_id UUID REFERENCES agents(id),
    -- other physics fields
);
```

**Benefits:**
- Main table stays clean (core identity + status)
- Constraints table holds all Physics
- Single JOIN when needed, no JOIN for simple queries

**Rule of thumb:** Stick to main table until you hit ~50 columns.

---

## Connection to System Design

| Concept | Application |
|---------|-------------|
| [[Law vs Physics in Agent Design]] | Same philosophy — Physics can't be violated, Policy can be ignored |
| [[Scalable Multi-Agent Architecture]] | Copy-Down enables "minimum viable context" for workers |
| [[Idempotency Keys]] | Another Physics primitive — DB-enforced uniqueness |
| [[Outbox Pattern]] | Transactional writes are Physics; event handling is Policy |

---

## Summary

> **Time (indexes) and Relationships (foreign keys) are what relational databases do best. Don't hide them in JSON.**

The three-test framework:
1. **Foreign Key Test** — References another table? → Column
2. **Indexing/Poller Test** — Background job queries it? → Column
3. **Write-Path Gatekeeper Test** — Checked on every hot-path write? → Column

Everything else goes in JSONB `settings` or `metadata`.

---

## Related Concepts

- [[Physics Thinking]] — The umbrella meta-principle this instantiates
- [[Law vs Physics in Agent Design]] — Same principle at the agent layer
- [[Scalable Multi-Agent Architecture]] — These primitives enable the architecture
- [[Idempotency Keys]] — Another Physics primitive
- [[Outbox Pattern]] — Transactional integrity as Physics

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
