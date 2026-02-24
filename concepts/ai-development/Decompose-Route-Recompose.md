# Decompose-Route-Recompose

The meta-skill for the AI era: break complex work into sub-problems by type, route each to the right engine, and recompose the results with human judgment. This is the operational skill that makes the [[Seven Dimensions of Hard Work]] actionable.

> **The one-sentence version:** Stop asking AI to "solve the problem." Decompose it, route the pieces, recompose the whole.

---

## Why This Matters

AI fails on complex problems not because it lacks intelligence, but because complex problems contain multiple *types* of difficulty mixed together. A single prompt like "fix this system" contains reasoning, effort, coordination, and ambiguity all at once — and no single engine handles all of them well.

The solution: **don't send mixed problems to any engine.** Decompose first.

---

## The Three Steps

### 1. Decompose — Break by Dimension

Analyse the problem and separate it into sub-problems, each belonging to a different [[Seven Dimensions of Hard Work|dimension of difficulty]]:

```
"Migrate our payment system to the new provider"

  → Reasoning:      How do the two APIs differ? What are the edge cases?
  → Effort:         Update 200 integration points across 40 services
  → Coordination:   Get billing, fraud, and checkout teams aligned on cutover
  → Ambiguity:      Should we maintain backward compatibility or break clean?
  → Judgment:       The new provider is cheaper but less proven — accept the risk?
```

Each sub-problem has a different optimal engine.

### 2. Route — Match Engine to Dimension

| Dimension | Route To | Why |
|-----------|----------|-----|
| **Reasoning** | Deep-think models (Gemini) | Raw intelligence for novel logic |
| **Effort** | Agent swarms (Opus/Claude) | Volume throughput, sustained attention |
| **Coordination** | Humans + AI-assisted routing | Human inertia requires human persuasion |
| **EQ** | Humans | Cannot be simulated reliably |
| **Judgment/Courage** | Humans (AI prepares the analysis) | Someone must bear the consequence |
| **Domain Expertise** | AI for known patterns; humans for reality checks | Contested frontier |
| **Ambiguity** | Humans with [[Colleague vs Tool-Shaped AI|Colleague AI]] | Discovery through iteration |

The routing decision itself is a [[Seven Dimensions of Hard Work|Dimension 6]] (Domain Expertise) skill — you get better at it through reps, not rules.

### 3. Recompose — Assemble with Taste

The sub-results don't assemble themselves. Recomposition requires:

- **Coherence checking** — do the pieces fit together?
- **Conflict resolution** — the reasoning output may contradict the ambiguity decision
- **Taste** — does the whole feel right? ([[Taste in Software]])
- **Accountability** — someone signs their name to the assembled result

**Recomposition is irreducibly human.** It lives in [[Seven Dimensions of Hard Work|Dimensions 5-7]] (Judgment, Expertise, Ambiguity).

---

## The Brownfield Application: Research-Plan-Implement

Dex Horthy's "No Vibes Allowed" approach applies Decompose-Route-Recompose to complex codebases. The insight: AI agents fail in brownfield not because they're dumb, but because their **context windows are mismanaged**.

### The "Dumb Zone"

Once an agent uses more than ~40% of its context window, reasoning degrades significantly. Worse: if a human corrects a mistake, the context is now filled with *failure tokens* — the model sees a pattern of failure and correction, making further failure more likely.

### The Fix: Intentional Compaction

Break the work into three phases, each in a **fresh context window**:

| Phase | Goal | Input | Output | Context Strategy |
|-------|------|-------|--------|-----------------|
| **Research** | Understand the system | Codebase, docs | `research.md` — compression of truth | Fresh window. Read only. No fixing. |
| **Plan** | Outline exact steps | `research.md` | `plan.md` — compression of intent | Fresh window. Research is the only context. |
| **Implement** | Write the code | `plan.md` | Code changes | Fresh window. Plan is the only context. |

Each phase produces a **dense artifact** that becomes the *sole context* for the next phase. This is [[Context Distillation Loop - amnesia as a feature|intentional amnesia]] — the agent forgets everything except the distilled essence.

### Why This Works

```
Traditional:  "Fix this bug" → agent reads 50 files → fills context → dumb zone → slop

RPI:          Research (read, compress) → Plan (think, compress) → Implement (execute)
              Each phase: small context, high quality
              Each handoff: dense artifact, zero noise
```

**Sub-agents aren't personas** — they're **context isolators**. Don't call them "QA Engineer" or "Architect." They're fresh context windows with a specific job and a dense input.

### The Review Shift

The most powerful change: **review shifts from code to plans**.

| Traditional Review | RPI Review |
|---|---|
| Review 500 lines of code | Review 20 lines of plan |
| Find bugs in implementation | Find flaws in approach |
| Catch symptoms | Catch root causes |

A bad line in `plan.md` generates exponentially more damage than a bad line of code. Reviewing the plan is the highest-leverage intervention point — this is [[Leverage Selection]] applied to AI workflows.

---

## Connection to Existing Concepts

### Seven Dimensions as Routing Table

[[Seven Dimensions of Hard Work]] provides the *vocabulary* for decomposition. Decompose-Route-Recompose provides the *process*:

1. **Decompose** uses the Seven Dimensions to classify sub-problems
2. **Route** uses the automation gradient to match engines
3. **Recompose** uses Dims 5-7 (the human dimensions) to assemble

### Context Distillation Loop

[[Context Distillation Loop - amnesia as a feature]] describes the *benefit* of session boundaries. RPI operationalises it: each phase is a deliberate session boundary with a compressed handoff artifact.

| Distillation Loop | RPI |
|---|---|
| Session amnesia as feature | Phase boundaries as feature |
| What survives re-articulation is signal | What survives compression into `research.md` is truth |
| Hybrid workflow across sessions | Structured workflow within a task |

### The 2026 Builder Operating System

[[The 2026 Builder Operating System]]'s "Engineering Manager Mindset" is this skill. You don't write the code — you:
- **Decompose** the problem (altitude shifting — zoom out)
- **Route** to the right agent/model (manage throughput)
- **Review the plan** before implementation (fingertip feel)
- **Recompose** with taste (protect Type 2 quality)

### Colleague vs Tool-Shaped AI

The three RPI phases map to [[Colleague vs Tool-Shaped AI]]:

| Phase | AI Shape | Why |
|-------|----------|-----|
| **Research** | Colleague | Discovery — you don't know what matters yet |
| **Plan** | Colleague → Tool | Transition from exploration to specification |
| **Implement** | Tool | Spec is complete — autonomous execution |

### Scalable Multi-Agent Architecture

[[Scalable Multi-Agent Architecture]]'s Rule 2 ("Workers stay ignorant — minimum viable context") is exactly what RPI achieves. Each phase gets *only* the compressed artifact from the previous phase. No accumulated context, no shared state.

---

## Adoption: Bridging the Rift

There's a growing rift in teams:
- **Juniors** use AI to fill skill gaps → create slop
- **Seniors** avoid AI because fixing slop takes too long

RPI bridges this:
- Juniors learn to **decompose before prompting** — structured thinking, not vibes
- Seniors get **plan-level review** — high leverage without wading through generated code
- The artifacts (`research.md`, `plan.md`) become **onboarding documents** for the next developer

### The Onboarding Analogy

You wouldn't drop a new hire into a 5-million-line repo and say "fix this." You'd give them context progressively. Agents need the same treatment — RPI is onboarding for AI.

---

## Design Heuristics

### The 40% Rule
> If your agent has consumed more than 40% of its context window, stop and compact.

Reasoning degrades past this point. Create a checkpoint artifact and start fresh.

### The Artifact Test
> "Would this document be useful to a human who knows nothing about the task?"

If your `research.md` or `plan.md` would confuse a colleague, it'll confuse the next phase's agent too.

### The Leverage Hierarchy
> Review the highest-leverage artifact first.

```
Highest leverage:  research.md  (wrong understanding = everything wrong)
                   plan.md      (wrong approach = bad code)
Lowest leverage:   code         (wrong line = fixable)
```

---

## See Also

- [[Seven Dimensions of Hard Work]] — The vocabulary for decomposition
- [[Context Distillation Loop - amnesia as a feature]] — Session boundaries as compression checkpoints
- [[Colleague vs Tool-Shaped AI]] — AI shape matches phase (discovery → specification → execution)
- [[The 2026 Builder Operating System]] — Engineering Manager Mindset = this skill
- [[Scalable Multi-Agent Architecture]] — Sub-agents as context isolators, not personas
- [[Taste in Software]] — Recomposition requires taste
- [[Contextual Breadcrumbs]] — Within-phase context management
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [No Vibes Allowed: Solving Hard Problems in Complex Codebases — Dex Horthy (YouTube)](https://youtu.be/rmvDxxNubIg?si=Ozio9MM5j5wCXhP-)

---

*Created [[2026-02-17]] — Synthesised from Dex Horthy's brownfield AI talk + Seven Dimensions routing gap*
