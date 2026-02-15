# Thinking Out Loud

LLMs are "extroverts" — their first output is version 1.0, not their best work. Like extroverts who think by speaking, agents often have latent capacity they don't surface until prompted to reflect.

---

## The Extrovert/Introvert Parallel

From workshop facilitation:

| Type | Processing Style | Output Quality |
|------|------------------|----------------|
| **Extrovert** | Thinks by speaking; externalizes cognition | Version 1.0 — exploratory, tests ideas against the room |
| **Introvert** | Processes internally first | More considered; closer to "final" on first output |

**Key insight:** When an extrovert says something, they don't necessarily mean it yet. They're working out what they think in real time.

---

## Agents as Extroverts

LLMs default to "extrovert mode":
- Generate the first plausible completion
- Satisfice rather than optimize
- Stop at "good enough" without prompting

But they have latent capacity to self-critique and improve — they just don't volunteer it.

---

## The Self-Rating Trick

A simple technique to unlock better outputs:

```
You: [request]
Agent: [response]
You: "Rate that response out of 10"
Agent: "6/10 — I could improve X, Y, Z"
You: "Ok, improve it"
Agent: [significantly better response]
```

**What's happening:**
- The agent *knew* it was a 6, but didn't say so
- Self-reflection is cheap but not automatic
- The rating prompt forces explicit evaluation
- Given permission to iterate, quality improves

---

## Why This Works

### Satisficing vs. Optimizing
First-pass generation optimizes for:
- Plausibility (does this seem reasonable?)
- Completion (did I answer the question?)
- Speed (single forward pass)

It does *not* optimize for:
- Excellence (is this my best work?)
- Completeness (did I miss anything?)
- Polish (could this be clearer?)

### Latent Self-Knowledge
Agents can evaluate quality better than they generate it on first pass. The evaluation capacity exists but isn't invoked automatically.

### Permission to Iterate
"Rate yourself" implies iteration is welcome. Without that signal, agents assume you want the first answer, not the best answer.

---

## When to Use This

### Use Iterative Refinement When:
- Quality matters more than speed
- The task is subjective or creative
- You're not sure what "good" looks like yet
- First output feels underwhelming

### Expect Polish Upfront When:
- You've provided a detailed spec ([[Colleague vs Tool-Shaped AI|Tool mode]])
- The task is well-defined and routine
- Speed matters more than perfection
- You're in execution, not discovery

---

## Variations on the Pattern

### The Rating Prompt
> "Rate that out of 10 and explain what would make it a 9."

### The Critique Prompt
> "What's wrong with this response? What did you miss?"

### The Revision Prompt
> "Now give me version 2, incorporating those improvements."

### The Pre-Commitment
> "Take your time. Give me your best work, not your first draft."

### The Explicit Iteration
> "Give me three versions: quick draft, improved, and polished."

---

## Connection to Colleague vs Tool AI

This maps to [[Colleague vs Tool-Shaped AI]]:

| Mode | Expectation | Iteration |
|------|-------------|-----------|
| **Colleague** | Version 1.0; refine together | Built-in; extrovert mode natural |
| **Tool** | Polished output from spec | Expects introvert mode; may need explicit iteration |

**The mismatch:** If you're in Tool mode but the agent is in Extrovert mode, you get disappointing first drafts. Either switch to Colleague mode (iterate) or prompt for introvert behavior ("give me your best work").

---

## Connection to Agent Autonomy

From [[Agent Autonomy Levels]]:

- **Level 3 (Recommend, then act)** naturally includes reflection — the recommendation *is* the self-evaluation
- **Level 4-5 (Act autonomously)** may skip reflection unless explicitly built in
- Higher autonomy should include self-critique checkpoints

---

## Implications

### For Prompting
- Don't accept first drafts for important work
- Build reflection into your workflow
- "Rate yourself" is a cheap quality multiplier

### For Agent Design
- Self-critique should be automatic, not opt-in
- Agentic loops should include evaluation steps
- "Good enough" detection prevents premature completion

### For Expectations
- First output ≠ best output
- Agents satisfice by default
- Quality requires explicit iteration or upfront signaling

---

## Related Concepts

- [[Conditioning the Distribution]] — Self-rating is post-hoc distribution conditioning; pushing for higher quality samples
- [[Colleague vs Tool-Shaped AI]] — Colleague mode is extrovert mode; Tool mode expects introvert behavior
- [[Agent Autonomy Levels]] — Level 3 includes reflection; higher levels should build it in
- [[Context Distillation Loop]] — Iteration as a feature, not a bug
- [[The 2026 Builder Operating System]] — "Temporal Separation" = deliberate reflection after execution

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC
