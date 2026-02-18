# Agent Ergonomics

Borrow cockpit design principles to reduce cognitive load across every interface in an agentic system. Different controls should look, feel, and behave differently — whether the "pilot" is a human, an LLM, or a tool.

> **The one-sentence version:** If two things do different things, they must feel different in every available sense channel.

---

## Origin: Cockpit Shape Coding

Aircraft controls are designed so pilots can identify them without looking:

| Control | Shape | Colour | Texture | Why |
|---------|-------|--------|---------|-----|
| Throttle | Rectangular handle | Blue | Smooth | Power — the thing you grab most |
| Mixture | Round knob | Red | Ridged | Fuel mixture — different feel prevents confusion with throttle |
| Gear lever | Shaped like a wheel | Black | Rubber | You're lowering *wheels* — the shape tells you |
| Flap switch | Shaped like a wing | White | Flat | You're extending *wing surfaces* |

Three senses — **sight** (colour), **touch** (shape/texture), and **proprioception** (position/motion path) — converge so the correct action is intuitive. Pilots don't need to *remember* which lever — they *feel* it.

---

## The Law-Affordance-Physics Spectrum

This reveals a middle layer that [[Physics Thinking]] captures implicitly but doesn't name:

```
     Law                    Affordance                 Physics
      │                        │                          │
 "You should"          "This feels right/wrong"      "You cannot"
      │                        │                          │
   Training              Shape coding                Mechanical
   Checklists            Colour coding               interlocks
   Procedures            Tactile feedback             Hard limits
```

| Layer | Mechanism | Relies on | Failure mode |
|-------|-----------|-----------|--------------|
| **Law** | Memory and discipline | Compliance | Forgotten under pressure |
| **Affordance** | Intuition and perception | Design | Unfamiliar operators miss cues |
| **Physics** | Hard constraints | Infrastructure | Blocks legitimate edge cases |

**Affordance reduces cognitive load so the right action is intuitive and the wrong action feels wrong** — without requiring memorisation (Law) or preventing all flexibility (Physics).

---

## Two Dimensions of Agent Ergonomics

### 1. Human → Agent Ergonomics

How humans instruct and interact with agents. The goal: make it intuitive to give the right instruction and hard to give the wrong one.

| Principle | Bad Ergonomics | Good Ergonomics |
|-----------|---------------|-----------------|
| **Distinct modes** | Same interface for chat, commands, and config | [[Colleague vs Tool-Shaped AI]] — different shapes for different interactions |
| **Intent specification** | Free-text everything | Structured templates, guided prompts, autocomplete |
| **Feedback loops** | Silent execution, result at end | Progressive disclosure — drafts, confirmations, advisories |
| **Error recovery** | "Task failed" | Explain what went wrong, suggest correction, offer undo |

**The cockpit principle applied:** A human should be able to *feel* the difference between "asking the agent to explore" and "telling the agent to execute." Different interaction modes should have different shapes.

### 2. Agent → Tool Ergonomics

How agents interact with the tools and APIs available to them. LLMs are probabilistic — they're the ultimate "pilots under cognitive load." Tool design must account for this.

| Principle | Bad Ergonomics | Good Ergonomics |
|-----------|---------------|-----------------|
| **Distinct tool names** | `do_action(type="patch")`, `do_action(type="append")` | `patch_entry()`, `append_entry()`, `create_timer()` — verbs that feel different |
| **Different parameter shapes** | Every tool takes `{"data": {...}}` | Timer needs `fire_after_seconds`; entry needs `content` — structurally impossible to confuse |
| **Response shape coding** | All responses `{"status": "ok", "data": {...}}` | Success, advisory, and error all look structurally different |
| **Semantic naming** | `field_1`, `field_2` | `budget_remaining`, `thread_status` — names that carry meaning |
| **Progressive disclosure** | Dump everything in one response | Core fields always present; `_advisory` fields appear when relevant |

**The cockpit principle applied:** An agent should be able to "feel" the difference between updating state, sending a signal, and setting a timer. The [[Trinity Protocol]]'s three primitives (Semaphore, Bell, Watchdog) succeed partly because they use completely different tools with different parameter shapes.

---

## Shape Coding Patterns for Software

### Type-Level Shape Coding

Make wrong usage a compile error, not a runtime bug:

```python
# Bad: Both are just UUIDs — easy to swap
def close_thread(thread_id: UUID, channel_id: UUID) → ...

# Good: Different types — compiler catches the swap
ChannelID = NewType("ChannelID", UUID)
ThreadID = NewType("ThreadID", UUID)
def close_thread(thread_id: ThreadID, channel_id: ChannelID) → ...
```

This is the [[Bijection Principle]] applied to type safety — one type per domain concept.

### API Response Shape Coding

Every response type should be structurally distinct:

```json
// Creation — has "entry" + "_advisory"
{"entry": {...}, "_advisory": {"budget_remaining": 1}}

// List — has "entries" + "cursor"
{"entries": [...], "cursor": "abc123"}

// Error — has "error" + "code"
{"error": "budget_exhausted", "code": 429}
```

An agent (or developer) can identify the response type from its shape alone, without checking a status field.

### Tool Differentiation

| Signal | Same-shaped tools (bad) | Shape-coded tools (good) |
|--------|------------------------|-------------------------|
| **Name** | `action("patch")`, `action("post")` | `patch_entry()`, `append_entry()` |
| **Parameters** | Both take `payload` | Patch takes `patch` + `expected_version`; append takes `content` + `mentions` |
| **Return shape** | Both return `{"result": {...}}` | Patch returns version; append returns entry with `_advisory` |

---

## Connection to Physics Thinking

Affordance sits in the [[Physics Thinking#The Advisory Layer|Advisory Layer]] — it's the "you're about to" warning made structural:

| Layer | Physics Thinking | Agent Ergonomics |
|-------|-----------------|-----------------|
| **Law** | Prompts, docs | Training, checklists |
| **Advisory** | `_advisory` fields, warnings | Affordance — shape/colour/texture cues |
| **Physics** | Hard errors, limits | Mechanical interlocks, type errors |

The Advisory Layer in Physics Thinking is *information*. Affordance is *design* — it makes the information perceptible without requiring the actor to actively check. A pilot doesn't read a label to identify the gear lever; they feel the wheel shape. An agent shouldn't parse a status field to know if a response is an error; the response shape tells it.

---

## Design Heuristics

### The Blindfold Test
> "Could the actor identify which control they're using without looking?"

- For humans: Can you tell which mode you're in from the interaction shape alone?
- For agents: Can the tool be identified from its parameter signature alone?
- For APIs: Can the response type be identified from its structure alone?

### The Swap Test
> "If you accidentally swapped two similar things, would something immediately feel wrong?"

- Types: Would the compiler catch it?
- Tools: Would the parameters make no sense?
- Responses: Would the consumer fail to parse?

### The Pressure Test
> "Under cognitive load (time pressure, long context, competing objectives), would the actor still choose correctly?"

This is where affordance beats Law. Law degrades under pressure. Affordance persists — the gear lever still feels like a wheel at 2am in an emergency.

---

## See Also

- [[Physics Thinking]] — The umbrella framework; Affordance fills the Advisory Layer
- [[Law vs Physics in Agent Design]] — The binary that Affordance bridges
- [[Trinity Protocol]] — Shape-coded primitives in practice
- [[Bijection Principle]] — One representation per concept; the type-level foundation
- [[Colleague vs Tool-Shaped AI]] — Human→Agent ergonomics for interaction mode selection
- [[_MOCs/Design Principles]] — Back to the MOC

---

*Created [[2026-02-17]] — Extracted from cockpit shape coding analysis*
