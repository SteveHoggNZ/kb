# Law vs Physics in Agent Design

A fundamental distinction for building reliable agentic systems: **Law** tells agents what to do; **Physics** ensures they can't do what they shouldn't.

---

## The Core Distinction

| Aspect | Law (Prompts) | Physics (Platform/API) |
|--------|---------------|------------------------|
| **What it is** | Instructions in system prompts | Guards enforced by infrastructure |
| **Enforcement** | Voluntary — the LLM decides whether to comply | Involuntary — the system rejects violations |
| **Can be violated?** | Yes. LLMs are probabilistic. Rules get ignored under context pressure. | No. A 429 is a 429. No prompting bypasses it. |
| **Failure mode** | Gradual degradation — agent drifts from instructions | Hard stop — agent receives error, must adapt |
| **Role** | Defines *intent* — what agents *should* do | Defines *reality* — what agents *can* do |
| **Analogy** | Traffic laws (you *should* stop at red lights) | Physics of walls (you *cannot* drive through concrete) |

---

## Why This Matters

LLMs are **probabilistic systems**. Even well-crafted prompts get ignored under:
- Context pressure (long conversations dilute instructions)
- Competing objectives (helpfulness vs. constraints)
- Edge cases (novel situations not covered by examples)

**Law alone is insufficient.** A system that relies entirely on prompt compliance will eventually fail. The question isn't *if* an agent will violate instructions — it's *when* and *what happens next*.

**Physics provides the safety net.** Hard limits catch what prompts miss. The agent can drift, forget, or misinterpret — but it cannot exceed the budget, cannot write to a closed resource, cannot bypass rate limits.

---

## The Design Rule

> For every Law, ask: "What happens when the agent ignores this?"
>
> - If the answer is **catastrophic failure** → there must be a corresponding Physics guard
> - If the answer is **mild inefficiency** → Law alone is sufficient

| Constraint | Category | Catastrophic if violated? |
|------------|----------|---------------------------|
| "Post only during your assigned turn" | Law | No — just noise |
| "Maximum 6 messages per thread" | Physics | Yes — runaway loops, cost explosion |
| "Don't acknowledge other agents" | Law | No — just wasteful |
| "Thread is closed" | Physics | Yes — corrupts completed work |
| "Summarize findings before finishing" | Law | No — incomplete but recoverable |
| "Rate limit: 10 requests/minute" | Physics | Yes — system overload |

---

## The Three Failure Modes

### 1. Law Without Physics
Agents ignore rules under pressure.

**Example:** "Budget: 4 messages" in the prompt, but no hard limit. Agent posts 122 messages analyzing a 5-row CSV.

**Result:** Runaway costs, context pollution, user frustration.

### 2. Physics Without Law
Agents slam into walls with no understanding of why.

**Example:** Hard `max_entries=6` limit, but no prompt guidance. Agent hits 429, retries in a loop, wastes LLM invocations.

**Result:** Poor UX, wasted compute, confused agents.

### 3. Law + Physics (The Goal)
Agents follow rules voluntarily most of the time; the platform catches the rest.

**Example:** Prompt says "Budget: 4 messages, consolidate findings." Platform enforces `max_entries=6` (with buffer). Agent respects the soft limit; hard limit catches edge cases.

**Result:** Graceful operation with guaranteed bounds.

---

## Implementation Patterns

### Physics Primitives

| Primitive | What It Prevents |
|-----------|------------------|
| **Hard entry limits** (`max_entries`) | Runaway message counts |
| **Consecutive-message detection** | Feedback loops (A→A→A) |
| **Resource locking** (`status=closed`) | Writes to completed work |
| **Rate limiting** | Request floods |
| **Timeout/TTL** | Infinite hangs, stale state |
| **Payload size limits** | Context window pollution |

### Law Primitives

| Primitive | What It Guides |
|-----------|----------------|
| **Budget statements** | Expected message counts |
| **Turn/round protocols** | Sequencing behavior |
| **Silence rules** | When NOT to speak |
| **Consolidation guidance** | How to handle limits |
| **Error handling instructions** | What to do on 429/423 |

---

## The Advisory Layer (Advanced)

Binary Law/Physics misses a **warning layer**. Agents compose responses, hit a wall, and waste the LLM invocation.

**Solution:** Return advisory fields in successful responses:

```json
{
  "id": "...",
  "_advisory": {
    "budget_remaining": 1,
    "hint": "Budget nearly exhausted. Consolidate remaining work."
  }
}
```

This lets agents adjust behavior *before* hitting physics limits — the best of both worlds.

---

## Connection to Existing Patterns

### Scalable Multi-Agent Architecture

[[Scalable Multi-Agent Architecture]] prescribes hard ceilings as a universal pattern. Every production framework (AutoGen, CrewAI, LangGraph, OpenAI Agents SDK) uses iteration limits. This is Physics applied to agent orchestration.

The "episodic operation" rule (run agent, capture output, kill agent) is Physics for context pollution — you can't instruct an agent to "forget irrelevant context," but you can terminate it and start fresh.

### Colleague vs Tool-Shaped AI

[[Colleague vs Tool-Shaped AI]] describes the spectrum from collaborative (high dialogue) to autonomous (precise spec). **Tool-shaped AI requires more Physics** — the spec must be complete because there's no mid-task correction. Colleague-shaped AI can rely more on Law because the human provides real-time feedback.

### Strategic vs Tactical Documentation

[[Strategic vs Tactical Documentation]] is Law for agent behavior — stable docs for foundational constraints, tactical docs for per-task guidance. But documentation alone can't prevent violations. Physics (token limits, context windows) provides the hard constraints that make the two-tier structure necessary.

### The Great Inversion

[[The Great Inversion]] means execution is cheap. This changes the Law/Physics calculus:
- **Old world:** Execution is expensive → optimize for efficiency → complex prompts (Law)
- **New world:** Execution is cheap → optimize for reliability → simple agents + hard limits (Physics)

The abundance of compute makes Physics-heavy architectures viable. It's cheaper to let an agent hit a wall and retry than to craft perfect prompts that never fail.

---

## The Meta-Insight

> **Law tells agents what to do. Physics ensures they can't do what they shouldn't. Both layers are necessary.**

A well-designed agentic system has:
1. **Clear Law** — agents understand expected behavior
2. **Hard Physics** — catastrophic failures are impossible
3. **Advisory bridges** — agents get warnings before hitting walls

The goal isn't perfect compliance. It's **bounded failure** — when things go wrong (and they will), the damage is contained.

---

## Related Concepts

- [[Database Physics vs Policy]] — Same principle at the infrastructure layer (columns vs JSONB)
- [[Scalable Multi-Agent Architecture]] — Hard ceilings as universal pattern
- [[Colleague vs Tool-Shaped AI]] — Spec precision determines Physics requirements
- [[Strategic vs Tactical Documentation]] — Law for agent behavior guidance
- [[The Great Inversion]] — Cheap execution enables Physics-heavy design
- [[Context Distillation Loop - amnesia as a feature]] — Episodic operation as Physics for context pollution
- [[Reversibility-Calibrated Action]] — Calibrate Physics strictness to reversibility

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC
- [[_MOCs/Design Principles]] — Infrastructure-level patterns

---

*Updated [[2026-02-16]] — Added Database Physics vs Policy cross-reference*
