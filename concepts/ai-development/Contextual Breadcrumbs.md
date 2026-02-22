# Contextual Breadcrumbs

Solve LLM context amnesia by injecting reminders into tool results — the last thing an agent reads before its next thought. Recency beats repetition.

> **The one-sentence version:** Don't tell agents what to remember at Token #1. Whisper it at Token #last.

---

## The Problem: Token Displacement

LLMs in long workflows suffer from **context amnesia**. A rule placed in the system prompt at Token #1 loses its attention weight as the agent reads thousands of tokens of schemas, logs, and chat history. By Token #20,000, the original instruction has been displaced.

Traditional fixes all fail because they place the reminder at Token #1:
- Longer system prompts → more dilution
- Repeated instructions → more tokens, same displacement
- Chain-of-thought prompting → agent "thinks about" the rule once, then forgets

**Token position determines attention weight, and recency wins.**

| Failure Mode | What Happens |
|---|---|
| **Checklist Amnesia** | Agent forgets to mark items done before closing a thread |
| **Handoff Amnesia** | Agent closes a thread without mentioning the owner |
| **Chain Break** | Agent in a relay forgets to @mention the next agent |
| **Mid-Task Drift** | Agent loses track of outstanding tasks mid-conversation |

---

## The Solution: Stigmergy

The fix borrows from biology. **Stigmergy** describes how ants coordinate without direct communication — they leave chemical trails in the environment. Later ants read the trails and act accordingly.

Contextual Breadcrumbs work the same way:

1. **Agent writes breadcrumbs** into thread metadata when creating a thread
2. **Platform stores them** in JSONB (no interpretation, just storage)
3. **Platform echoes them back** in tool results at the exact moment they're needed

When an agent calls `append_entry`, the response includes:

```json
{
  "id": "019c...",
  "entry_type": "speech",
  "_system_context": "Checklist active: update _data frame to mark items done."
}
```

This text lands at the **absolute bottom** of the context window — perfect recency. It cannot be displaced because nothing comes after it.

---

## The Three Breadcrumb Primitives

| Primitive | When Injected | Purpose | Enforcement |
|---|---|---|---|
| **`on_turn_reminder`** | After every speech entry | Constant whisper of current objective | [[Agent Ergonomics\|Ergonomics]] — injected but non-blocking |
| **`on_close_reminder`** | After successful thread close | Tells agent what to do next (e.g., "broadcast synthesis") | [[Agent Ergonomics\|Ergonomics]] — injected but non-blocking |
| **`require_collection_status`** | Before thread close (blocking) | Validates all checklist items meet required status | [[Physics Thinking\|Physics]] — blocks the action |

The split follows [[Physics Thinking]] precisely:
- **Physics for critical paths** — `require_collection_status` blocks thread closure if items are incomplete. The agent *cannot* skip this.
- **Ergonomics for everything else** — turn reminders and close reminders are injected but non-blocking. The agent *could* ignore them, but perfect recency makes that unlikely.

---

## Static vs Dynamic Breadcrumbs

### Static (Set at Thread Creation)

The thread creator declares breadcrumbs upfront:

```python
create_thread(metadata={
    "on_turn_reminder": "Focus on READ queries only. Ignore writes.",
    "on_close_reminder": "Broadcast synthesis to main channel.",
    "require_collection_status": {"frame": "_data", "field": "status", "allowed": ["done", "skipped"]}
})
```

### Dynamic (Updated Mid-Flight)

Agents can rewrite their own breadcrumbs as the task evolves:

```python
update_thread(metadata={
    "on_close_reminder": "IMPORTANT: Run database migration BEFORE posting synthesis."
})
```

This is **dynamic working memory** — the agent modifies its future self's reminders. The biological parallel: an ant strengthening a pheromone trail as it discovers the food source is rich.

---

## How Each Failure Mode Is Solved

| Failure Mode | Mechanism | Layer |
|---|---|---|
| **Checklist Amnesia** | `require_collection_status` blocks thread close until items are done | Physics — cannot be bypassed |
| **Handoff Amnesia** | `on_close_reminder` injects "broadcast synthesis" after close | Ergonomics — perfect recency |
| **Chain Break** | Protocol detection rejects speech without mentions in relay threads | Physics — entry is rejected |
| **Mid-Task Drift** | `on_turn_reminder` whispers objective after every speech entry | Ergonomics — constant reinforcement |

---

## The Architecture: Three Layers

The design follows a clean separation:

| Layer | Role | What It Does |
|---|---|---|
| **API (Physics)** | Storage | Stores `metadata` JSONB on threads. No interpretation. |
| **MCP Server (Transmission)** | Injection | Reads metadata, injects breadcrumbs into tool results. Stateless. |
| **LLM (Law)** | Authorship | Writes its own breadcrumbs. Updates them mid-flight. |

Key invariants:
- **API stays dumb** — zero domain logic; stores and returns metadata
- **MCP stays stateless** — caches metadata once per agent turn, zero memory leaks
- **Agent stays autonomous** — writes its own reminders; platform echoes, doesn't impose

---

## Human → Agent Breadcrumbs

Humans can inject breadcrumbs too via `--instructions` flags. The instruction sits in the database until the agent claims the task, appearing at the bottom of the context window at the exact moment the agent begins planning:

```bash
./run.sh --title "Optimize Database" --instructions "Only focus on read queries, ignore writes."
```

The agent can then propagate human instructions into thread breadcrumbs, ensuring they persist through the entire workflow:

```python
create_thread(metadata={
    "on_turn_reminder": "Focus on READ queries only — per human instructions."
})
```

This is [[Agent Ergonomics]] for the Human→Agent interface: the instruction arrives at perfect recency, not buried in a system prompt.

---

## Design Principles

1. **Recency over repetition** — inject in tool results where attention is highest, not in system prompts where it's lowest
2. **Metadata over code** — breadcrumb rules live in JSONB, not application code. Zero code changes for new breadcrumb types
3. **Fail-open** — if metadata is missing, proceed without breadcrumbs. Never block an agent because of configuration error
4. **Agent autonomy** — agents write their own reminders. The platform echoes, doesn't impose
5. **Physics for critical paths, Ergonomics for everything else** — blocking validation where failure is catastrophic; gentle injection everywhere else

---

## Connection to Existing Concepts

[[Physics Thinking]] provides the enforcement framework: `require_collection_status` is Physics (blocking); turn reminders are the [[Physics Thinking#The Advisory Layer|Advisory Layer]] made structural.

[[Agent Ergonomics]] explains *why* this works. Breadcrumbs are shape-coded by timing — turn reminders feel different from close reminders because they appear at different moments. The agent doesn't need to parse a type field; the *context* tells it what kind of reminder this is.

[[Context Distillation Loop - amnesia as a feature]] captures the upside of amnesia — each session forces re-articulation. Breadcrumbs are the complement: where distillation embraces forgetting, breadcrumbs *selectively prevent* it for critical information.

[[Trinity Protocol]] uses breadcrumbs as the implementation layer for its Show-and-Tell Law — the `on_close_reminder` is what actually prompts agents to "Tell" after they "Show."

---

## See Also

- [[Physics Thinking]] — The enforcement spectrum this sits on
- [[Agent Ergonomics]] — Affordance through recency rather than shape
- [[Trinity Protocol]] — Breadcrumbs as implementation layer for coordination
- [[Context Distillation Loop - amnesia as a feature]] — The complementary pattern
- [[Law vs Physics in Agent Design]] — The framework for blocking vs non-blocking
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

---

*Created [[2026-02-17]] — Extracted from AMP contextual breadcrumbs strategy document*
