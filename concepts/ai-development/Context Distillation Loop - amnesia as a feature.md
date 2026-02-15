# Context Distillation Loop

The practice of using **session boundaries as forcing functions** for clarity — each new LLM session requires re-articulating context, which progressively distills thinking to its essence.

**Core insight:** What feels like a limitation (limited context, session amnesia) is actually a feature. The "tax" of re-explaining creates compounding returns in clarity.

---

## The Mechanism

When you start a fresh session with an LLM:

1. **You cannot dump everything** — you must choose what matters
2. **You must re-articulate** — stale framing gets refreshed
3. **You notice contradictions** — explaining reveals what you don't actually believe
4. **You compress** — verbose thinking becomes crisp

Each session is a **compression checkpoint**. What survives the re-articulation is the signal.

```
Session 1: Raw thoughts → Session 2: Refined context → Session 3: Distilled essence
                ↑                        ↑                         ↑
         "What matters?"          "What still matters?"     "What's irreducible?"
```

---

## The Paradox of Forgetting

| Framing | Implication |
|---------|-------------|
| **Bug** | "I have to re-explain everything — so inefficient" |
| **Feature** | "I get to re-evaluate what's worth explaining" |

The friction of re-articulation is **cognitive exercise**. Just as writing clarifies thinking, *re-writing for a fresh audience* clarifies it further.

**Infinite context would rob you of this benefit.** You'd never be forced to compress.

---

## The Hybrid Workflow: Orchestrating Both Modalities

The most powerful pattern isn't choosing between limited context (distillation) and long context (synthesis) — it's **using both in dialogue**:

```
┌─────────────────────────────────────────────────────────────┐
│                    The Orchestration Pattern                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Long Context (1M tokens)          Agentic Review          │
│   ┌─────────────────────┐          ┌─────────────────────┐  │
│   │  Holistic Synthesis │ ───────→ │  Critical Scrutiny  │  │
│   │  "See everything"   │          │  "Poke holes"       │  │
│   └─────────────────────┘          └─────────────────────┘  │
│            ↑                                  │              │
│            └──────────────────────────────────┘              │
│                     Iterate until robust                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Example: Strategic Planning Workflow

| Step | Modality | Purpose |
|------|----------|---------|
| 1. **Draft plan** | Long context | Load all strategic docs, codebase, constraints. Synthesize holistically. |
| 2. **Agentic review** | Agent | Fresh perspective. "What's missing? What assumptions are hidden?" |
| 3. **Incorporate feedback** | Long context | Revise plan with new considerations in full view |
| 4. **Stress test** | Agent | "Play devil's advocate. Where does this fail?" |
| 5. **Final distillation** | New session | Explain the plan fresh. What survives? |

**Why this works:**

- Long context provides **synthesis** — seeing relationships and contradictions
- Agents provide **scrutiny** — focused, adversarial, fresh eyes
- Session boundaries provide **distillation** — compression to essence

Each modality compensates for the others' blind spots.

### Example: Agent Amnesia for Unbiased Review

Spawn a subagent *with deliberate amnesia* (no accumulated context) to review work:

```
Main agent: [has full history, assumptions, prior decisions]
     ↓
Subagent: [fresh, no baggage]
     → "Review this code/plan/doc. What's wrong with it?"
```

**Why this works:**
- The main agent has accumulated biases and blind spots
- The subagent sees only what's in front of it — no "sunk cost" thinking
- Fresh eyes catch what familiarity obscures

**The pattern:** Deliberately invoke amnesia to get unbiased assessment. The lack of context isn't a limitation — it's the point.

---

## The Distillation Progression

Over multiple sessions, your context naturally stratifies:

| Session | Context Quality |
|---------|-----------------|
| 1 | Raw dump — everything feels important |
| 2 | Prioritized — you notice what you re-included vs. dropped |
| 3 | Structured — you develop a "briefing format" |
| 5+ | Crystallized — irreducible core + extensible details |

This progression mirrors how experts develop **chunked knowledge** — complex concepts compressed into retrievable patterns.

---

## Connection to Existing Patterns

### Strategic vs Tactical Documentation

The distillation loop naturally produces the [[Strategic vs Tactical Documentation]] structure:

- What you **always re-include** → Strategic (the irreducible core)
- What you **pull in as needed** → Tactical (context-dependent details)

Your "session briefing" evolves into your strategic docs.

### The Great Inversion

This is [[The Great Inversion]] applied to thinking itself:

| Old Scarcity | New Abundance |
|--------------|---------------|
| "I must remember everything" | "I can offload to AI; clarity is my job" |
| "Context loss is failure" | "Context compression is value" |
| "Sessions should be infinite" | "Session boundaries are features" |

### Agents vs Long Context

Extends [[Agents vs Long Context]] from "either/or" to "orchestrated dialogue":

| Original Framing | Extended Framing |
|------------------|------------------|
| Agents for action, long context for insight | **Plus**: session boundaries for distillation |
| Choose based on task | **Plus**: alternate between modalities deliberately |

### Teach the Delta

What survives distillation *should be* the novel stuff — [[Teach the Delta]]. Redundant information (what the agent already knows from training) gets naturally filtered out through compression.

### The Modality Toggle as Leverage Selection

Choosing the right modality is choosing the right intervention level ([[Leverage Selection]]). "Altitude shifting" from [[The 2026 Builder Operating System]] is a form of modality toggling.

### Scarcity Reframed

This is [[Scarcity to Abundance - A Unifying Lens]] applied to context windows: what looks like a limitation (amnesia, finite context) is actually a feature (forced clarity, compression).

---

## Practical Implementation

### 1. The Session Briefing

Develop a standard "briefing" you refine each session:

```markdown
## Context for this session:

**Goal:** [One sentence]
**Constraints:** [Bullet list — what's non-negotiable]
**Current state:** [Where we are]
**Open questions:** [What needs resolving]

## Reference material:
[Links or summaries of key docs]
```

What survives multiple sessions becomes your strategic documentation.

### 2. The Handoff Document

When concluding a session, write a handoff for your future self:

```markdown
## Session summary:

**Decisions made:** [What's now settled]
**Insights gained:** [New understanding]
**Next session should:** [Continue from here]
**Drop from context:** [What turned out to be noise]
```

The "drop from context" section is the distillation in action.

### 3. The Modality Toggle

Deliberately switch modalities mid-problem:

| When you feel... | Switch to... | Because... |
|------------------|--------------|------------|
| Lost in details | Long context | Need to see the whole |
| Overconfident | Agentic review | Need fresh scrutiny |
| Verbose/muddled | New session | Need compression checkpoint |

---

## The Meta-Insight

The constraint isn't the enemy of good thinking — it's the **forcing function** for it.

- Limited context forces prioritization
- Session amnesia forces re-articulation
- Multiple modalities force perspective-taking

**Infinite context with no boundaries would produce infinite sprawl.** The boundaries are the discipline.

---

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC
