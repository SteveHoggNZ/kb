# Trinity Protocol

A multi-agent coordination framework built on three primitives and one law, with Physics backstops to catch protocol failures.

> **The one-sentence version:** Semaphore tracks state, Bell moves work, Watchdog prevents stalls.

---

## Origin: When Law Fails

A multi-agent workflow stalled permanently:

1. **Risk Radar** (webhook-only Commander) created a SEQUENTIAL thread and mentioned The Hawk
2. **The Hawk** (SSE-enabled) completed analysis but posted without mentions
3. Risk Radar has no SSE — it never learned The Hawk posted
4. Thread remains open forever. No recovery.

**Root cause:** The system relied on prompt-based [[Law vs Physics in Agent Design|"Law"]] without "Physics" backup. The prompt distinguished between "reactive" (SSE, mention optional) and "managed" (webhook, mention required) coordination modes. This ambiguity caused The Hawk to skip the mention. When Law fails, there is no recovery.

---

## The Three Primitives

| Primitive | Metaphor | Implementation | Role |
|-----------|----------|----------------|------|
| **Semaphore** | The Scoreboard | `_data` frame | STATE — persistent, versioned ground truth |
| **Bell** | The Wake-up Call | `mentions=[uuid]` | SIGNAL — the energy that moves work forward |
| **Watchdog** | The Safety Net | Timer API | ENTROPY — prevents the infinite wait |

These map to physics concepts:
- **Semaphore** = Position (where things are)
- **Bell** = Force (what causes change)
- **Watchdog** = Time (things decay without energy input)

---

## One Law: Show and Tell

> When you complete a task: **Show** your work (patch the state) and **Tell** the room (mention the next person). Use the same `stream_id` for both.

This works at every capability tier:

| Tier | Capability | Behavior |
|------|------------|----------|
| **Simple** | Text-only | Just "Tells" — Commander updates state for them |
| **Capable** | Webhook + tools | "Shows" (patches `_data`) and "Tells" (mentions) — standard path |
| **Elite** | SSE + tools | "Shows" and "Tells" — SSE sees state change instantly; mention arrives later, gets deduped |

**Key principle:** Always mention. SSE is a speed bonus, never a protocol replacement.

---

## Physics Backstops

The Trinity Protocol follows [[Physics Thinking]] — Law handles the happy path, Physics catches failures.

### 1. Watchdog Timers

When you delegate work, set a timer as a safety net:

```python
create_timer(channel_id=CH, fire_after_seconds=300, label="check_progress")
```

When the timer fires, you receive a system mention. Read the manifest and re-mention stalled agents.

**This is the Physics.** If all agents crash, the timer fires and wakes the Commander.

### 2. Sticky Streams

When an agent does "Show and Tell" correctly but forgets `stream_id`, the system auto-coalesces entries from the same agent within a 3-second window.

This is [[Database Physics vs Policy|Physics at the API layer]] — the system corrects for imperfect Law compliance:

| Agent Behavior | System Response |
|----------------|-----------------|
| Both entries have `stream_id` | Grouped (explicit) |
| First has `stream_id`, second doesn't | Second inherits first's ID |
| Neither has `stream_id` | Both get auto-generated shared ID |
| Different agents, same window | Not grouped (correct isolation) |

---

## Thread Contract Format

The protocol makes handoff chains explicit with arrow notation:

```
THREAD CONTRACT
  Mode: SEQUENTIAL
  Budget: 4 messages
  Rounds:
    R1 (Commander): This briefing → mentions Specialist A
    R2 (Specialist A): Analysis → mentions Specialist B
    R3 (Specialist B): Review → mentions Specialist B
    R4 (Specialist B): Synthesis → mentions Commander
  Reporter: Specialist B
```

The `→ mentions X` notation removes ambiguity about who owns the next handoff.

---

## Connection to Physics Thinking

The Trinity Protocol is a concrete implementation of [[Physics Thinking]] at the coordination layer:

| Component | Law | Physics |
|-----------|-----|---------|
| **State Updates** | "Update the manifest when done" | Versioned `_data` frames with optimistic locking |
| **Handoffs** | "Mention the next agent" | Watchdog timers fire if no mention arrives |
| **Grouping** | "Use same `stream_id` for related entries" | Sticky Streams auto-coalesce within window |
| **Budget** | "Stay within 4 rounds" | `max_entries` limit returns 429 |

The pattern: **Law teaches the protocol. Physics catches violations.**

---

## Design Decisions

### What Was Included

- **Timer MCP Tools** — Agents can create, list, cancel timers (the Watchdog primitive)
- **Universal Show-and-Tell** — Injected into all agent prompts via `_amp_protocols.md`
- **Delivery Mode Awareness** — Agents know if they're webhook-only or SSE-enabled
- **Sticky Streams** — API-level Physics for stream grouping

### What Was Deliberately Left Out

| Rejected Pattern | Reason |
|------------------|--------|
| **Subscriber notification engine** | Over-engineered — standard mention-back covers the need |
| **Assignment-gated writes (Talking Stick)** | Adds API complexity — threads + budgets already constrain |
| **Per-persona coordination fragments** | Folded into universal `_amp_protocols.md` — one file, not three |

---

## See Also

- [[Physics Thinking]] — The umbrella meta-principle this implements
- [[Law vs Physics in Agent Design]] — Deep-dive on Law/Physics distinction
- [[Scalable Multi-Agent Architecture]] — Complementary patterns for agent coordination
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

---

*Created [[2026-02-17]] — Captured from AMP multi-agent coordination planning*
