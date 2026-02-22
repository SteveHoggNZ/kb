# Dumb Pipe, Smart Edge

Push intelligence toward the agent. Keep your API as a dumb pipe that stores and returns data without opinions. Put interpretation, injection, and ergonomics in the edge layer closest to the consumer.

> **The one-sentence version:** The API should never have opinions. The edge should have all of them.

---

## The Architecture

```
Agent    ← writes its own rules        (Law — autonomous)
Edge     ← interprets and injects      (Ergonomics — smart)
API      ← stores and returns          (Dumb pipe — no opinions)
Database ← final enforcement           (Physics — cannot be bypassed)
```

| Layer | Intelligence | Change Velocity | Risk of Change | Failure Mode |
|-------|-------------|-----------------|----------------|--------------|
| **Database** | Physics — constraints, RLS, foreign keys | Slowest — migrations | Highest — data at risk | Blocks bad writes |
| **API** | None — CRUD only | Slow — deploys, versioning | Medium — breaking changes | Returns data faithfully |
| **Edge (MCP)** | Smart — interprets metadata, injects context, enforces protocols | Fast — Python deploy | Low — stateless, fail-open | Falls back to no injection |
| **Agent** | Autonomous — writes own breadcrumbs, updates own reminders | Instant — metadata writes | Zero — only affects itself | Suboptimal behavior |

---

## Why Dumb Pipes Win

### 1. Reliability Through Simplicity

An API that doesn't interpret data can't misinterpret it. A CRUD endpoint that stores JSONB and returns it verbatim has almost no failure modes. Every opinion you add to the API is a potential bug, a breaking change, a migration.

### 2. Change Velocity

The closer to the agent, the faster you can iterate:

| Change | Dumb Pipe API | Smart Edge |
|--------|--------------|------------|
| New breadcrumb type | Schema migration + API deploy | Edge config change |
| New protocol enforcement | API endpoint + validation logic | Edge handler |
| New advisory field | API response schema change | Edge injection rule |
| New agent behavior | API doesn't care | Agent writes new metadata |

### 3. Independence of Concerns

The API team and the agent team can move independently. The API contract is stable (store this, return that). The edge layer absorbs all the domain complexity — protocol awareness, breadcrumb injection, advisory generation — without touching the API.

---

## The Three Responsibilities

### Database: Physics

[[RLS-First Authorization]] — the database is the final enforcement layer. Row-Level Security, foreign keys, NOT NULL, CHECK constraints. These cannot be bypassed by bugs in higher layers.

```
Database says: "You cannot write to a closed thread." (423)
Database says: "This entry exceeds max_entries." (429)
Database says: "This agent has no access to this channel." (403)
```

### API: Dumb Pipe

The API stores data and returns it. It enforces database constraints (Physics) but adds no domain interpretation. It doesn't know what `on_turn_reminder` means — it just stores it in JSONB and returns it when asked.

```
API says: "Here's the thread metadata you asked for."
API says: "I stored your entry. Here's the ID."
API does NOT say: "You should update your checklist."
```

### Edge (MCP): Smart Interpreter

The edge layer reads metadata and makes it useful. It's where [[Contextual Breadcrumbs]] get injected, where [[Agent Ergonomics]] lives, where protocol enforcement happens.

```
Edge says: "Entry stored. REMINDER: Update checklist items via patch_entry."
Edge says: "Cannot close thread: 2 items still pending."
Edge says: "RELAY protocol requires @mentioning the next agent."
```

---

## The Fail-Open Principle

The smart edge must **fail open**. If metadata is missing, malformed, or the edge crashes — the API still works. The agent still functions. It just doesn't get breadcrumbs.

This is the key design constraint:

| Layer | Failure Mode | Impact |
|-------|-------------|--------|
| **Database down** | Everything stops | Catastrophic — by design (Physics) |
| **API down** | Agents can't act | Severe — expected for infrastructure |
| **Edge down** | Agents lose breadcrumbs/ergonomics | Degraded — agents still function, just less well |
| **Agent confused** | Suboptimal output | Minor — retry or human review |

The further from the database, the more graceful the degradation. This is [[Physics Thinking]] applied to failure modes.

---

## Connection to Existing Principles

[[Physics Thinking]] provides the enforcement spectrum. The dumb pipe architecture maps each layer to the spectrum:
- Database = Physics (cannot be bypassed)
- API = neutral transport (no opinions to violate)
- Edge = [[Agent Ergonomics|Ergonomics/Affordance]] (makes correct action intuitive)
- Agent = Law (autonomous, probabilistic)

[[Contextual Breadcrumbs]] is the proof case. The API stores `metadata` JSONB without interpreting it. The MCP edge reads it and injects `_system_context` into tool results. Zero API changes were needed to add the entire breadcrumb system.

[[Logical Resource Separation]] applies the same philosophy to config: separate concerns at the boundary so you can change infrastructure without changing code.

[[RLS-First Authorization]] is the database half of this pattern: push Physics as low as possible. Dumb Pipe, Smart Edge is the complement: push intelligence as high as possible.

---

## The Sandwich Rule

> **Physics sinks to the bottom. Intelligence rises to the top. The middle stays dumb.**

```
┌─────────────────────────────────┐
│  Agent        Intelligence ↑    │
│  Edge         Ergonomics        │
│  API          Dumb pipe         │
│  Database     Physics ↓         │
└─────────────────────────────────┘
```

When in doubt about where to put logic:
- **Will data be corrupted if this rule is violated?** → Database (Physics)
- **Does this interpret domain context?** → Edge (Smart)
- **Is this just storage and retrieval?** → API (Dumb)
- **Is this self-directed behavior?** → Agent (Autonomous)

---

## See Also

- [[Physics Thinking]] — The enforcement spectrum
- [[RLS-First Authorization]] — Physics sinks to the bottom
- [[Contextual Breadcrumbs]] — The proof case for smart edge injection
- [[Agent Ergonomics]] — What the smart edge provides
- [[Logical Resource Separation]] — Separation of concerns at the config layer
- [[_MOCs/Design Principles]] — Back to the MOC

---

*Created [[2026-02-17]] — Extracted from AMP Goldilocks Layering architecture*
