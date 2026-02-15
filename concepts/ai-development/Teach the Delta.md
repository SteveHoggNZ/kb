# Teach the Delta

Agents already know common patterns from training. Context should focus on **exceptions, gotchas, and novelty** — not re-teaching what's already in the weights.

> **Teach the delta, not the baseline.** Context is for exceptions to the rule. The rule is already in the weights.

---

## The Core Principle

| Context Type | Information Value | Why |
|--------------|-------------------|-----|
| **Novel/surprising** | High | Agent couldn't derive this from training; genuine delta |
| **Standard/common** | Low | Redundant with training; pays tokens for what it already knows |

**The waste:** Filling context with things the agent already "knows" — you're paying tokens to describe default behavior.

**The signal:** Exceptions, gotchas, non-intuitive behaviors, project-specific quirks — things that *contradict* or *extend* the agent's priors.

---

## The Information Theory View

From the agent's perspective:

- **High probability tokens** (from training) = low information value when provided
- **Low probability tokens** (surprising/novel) = high information value

Standard API patterns, common error handling, typical architectures — the agent has seen millions of examples. Your context adds nothing.

Your weird timeout behavior, your non-standard auth flow, your counter-intuitive business rule — *that's* information.

---

## The MCP Example

**Low value (teaching to suck eggs):**
> "MCP is a protocol where you call tools by sending JSON-RPC messages with method names and parameters. The server responds with results or errors..."

The agent knows JSON-RPC. It's seen countless API docs. This is noise.

**High value (the delta):**
> "Our MCP implementation has a quirk: tool calls timeout after 5s, but the retry doesn't reset the context, so you need to manually clear state between attempts."

This contradicts default expectations. This is signal.

---

## Work With the Momentum

Agents have "momentum" — strong priors from training about how things typically work:

| Domain | Agent Already Knows |
|--------|---------------------|
| APIs | REST conventions, JSON-RPC, auth patterns |
| Code | Language idioms, common patterns, error handling |
| Docs | Markdown, formatting, structure |
| Process | Git workflows, PR conventions, testing |

**Lean on this momentum.** Don't fight it or re-specify it. Instead:

1. Assume the baseline (common practice)
2. Specify only the delta (where you differ)
3. Highlight surprises (gotchas, exceptions)

---

## Memory Should Be Novel

When agents store memories, the filter should be **novelty**:

### Worth Remembering
- "This surprised me"
- "This contradicted my expectation"
- "This is a gotcha I wouldn't have predicted"
- "This is specific to this project/org"

### Not Worth Remembering
- "Here's how REST APIs work"
- "Here's standard error handling"
- "Here's typical Git workflow"

**The test:** Would the agent have done this anyway without being told? If yes, don't store it.

---

## Context Efficiency

Context windows are scarce resources ([[The Bottleneck Economy]]). Every token spent on redundant information is a token not available for novel signal.

| Context Strategy | Efficiency |
|------------------|------------|
| Dump everything | Low — noise drowns signal |
| Curate for novelty | High — every token carries information |

**The 80/20:** Most of what you could tell an agent, it already knows. Focus on the 20% that's genuinely new.

---

## Practical Application

### For System Prompts
- Skip: "You are a helpful assistant that writes code..."
- Include: "Our codebase uses a non-standard auth pattern where..."

### For Project Context
- Skip: "We use Git for version control with feature branches..."
- Include: "We have a pre-commit hook that fails silently on large files..."

### For Documentation
- Skip: "API endpoints return JSON responses..."
- Include: "The `/sync` endpoint returns 200 even on partial failures — check the `errors` array..."

### For Agent Memory
- Configure agents to flag and store **surprises**
- Prune memories that match common patterns
- Prioritize exceptions, gotchas, and project-specific quirks

---

## The Delta Test

Before adding something to context, ask:

> "Would the agent likely do this anyway based on training?"

- **Yes** → Don't include; it's redundant
- **No** → Include; it's genuine delta
- **It would do the opposite** → Definitely include; it's a correction

---

## Connection to Other Concepts

### [[Conditioning the Distribution]]
Novel information shifts the distribution in ways training can't. Standard information just re-weights toward what would happen anyway.

### [[Context Distillation Loop]]
What survives distillation *should be* the novel stuff. The compression process naturally filters toward signal.

### [[Strategic vs Tactical Documentation]]
Strategic docs should focus on what's non-obvious. Assume standard knowledge; document the delta.

### [[The Bottleneck Economy]]
Context window is scarce. Redundant information is waste — it consumes the constraint without adding value.

### [[Software-Shaped Intent]]
Part of structuring intent well is knowing what NOT to specify — letting the agent's training handle the baseline.

### [[The Collapse of Roles and Time]]
"Software-shaped intent" includes knowing what to omit. The skill isn't just prompting — it's architecting interactions efficiently.

---

## The Inversion

| Old Mental Model | New Mental Model |
|------------------|------------------|
| "Tell the agent everything it needs" | "Tell the agent only what it can't infer" |
| "More context is better" | "More *novel* context is better" |
| "Document all the things" | "Document the exceptions" |

**The baseline is free.** You already paid for it in training. Only the delta costs context.

---

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC

---

*Updated [[2026-02-16]] — Added The Collapse of Roles and Time to Connection section; removed redundant list*
