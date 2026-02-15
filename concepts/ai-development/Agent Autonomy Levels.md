# Agent Autonomy Levels

The Five Degrees of Initiative — a 1974 framework for managing subordinates — maps directly to AI agent autonomy. The same principles apply: push toward the highest level they can reliably handle.

---

## The Five Levels

Adapted from [[Monkey Management]]:

| Level | Human Subordinate | AI Agent | Example |
|-------|-------------------|----------|---------|
| **1. Wait until told** | Does nothing until directed | Prompt-response only | ChatGPT default, no tools |
| **2. Ask what to do** | Seeks instruction | Asks clarifying questions | "Which approach do you prefer?" |
| **3. Recommend, then act** | Proposes and waits for approval | Plan mode | "Here's my plan. Approve?" |
| **4. Act, then report** | Takes action, informs manager | Autonomous with reporting | Executes, shows diff, explains |
| **5. Act independently** | Handles it; manager may never know | Background agents, scheduled tasks | Cron jobs, monitoring agents |

---

## The Manager's Job

Just as with human subordinates, the goal is to **push agents toward the highest autonomy level they can reliably handle**.

| If you're stuck at... | The cost is... |
|-----------------------|----------------|
| Level 1-2 | You're the bottleneck; no leverage |
| Level 3 | Approval overhead; still limited throughput |
| Level 4-5 | Maximum leverage — if the agent is reliable |

**The trap:** Defaulting to low autonomy because it feels safer. This is micromanagement. You're paying the cost of having an agent without getting the leverage.

---

## When to Use Each Level

### Level 1-2: Active Direction
- **Novel tasks** — Agent has no established pattern
- **High stakes** — Mistakes are expensive or irreversible
- **Discovery phase** — You're figuring out what "correct" looks like

### Level 3: Recommend, Then Act
- **Complex tasks** — Multiple valid approaches; human judgment needed
- **Learning phase** — Building trust in agent's judgment
- **Reversible but consequential** — Worth a sanity check

### Level 4: Act, Then Report
- **Established patterns** — Agent has proven reliable on this task type
- **Reversible actions** — Can undo if wrong
- **Time-sensitive** — Approval delay costs more than occasional mistakes

### Level 5: Act Independently
- **Routine operations** — Monitoring, maintenance, scheduled tasks
- **Well-defined success criteria** — Agent can self-verify
- **Low consequence** — Mistakes are cheap to fix

---

## Insuring the Monkey

From Monkey Management: "Set a follow-up time" — accountability without taking ownership.

For agents, this translates to:

| Human Practice | Agent Equivalent |
|----------------|------------------|
| "Check back Thursday" | Checkpoints, progress reports |
| Status meetings | Logs, observability |
| Escalation paths | Guardrails, human-in-the-loop triggers |
| Performance reviews | Evaluations, A/B testing |

**The principle:** Higher autonomy requires better instrumentation. You're not watching every move, so you need reliable signals when things go wrong.

---

## Trust-Building Progression

Autonomy is earned, not granted. The progression:

```
Level 1 → Prove basic competence
Level 2 → Show good judgment in questions
Level 3 → Recommendations are reliably good
Level 4 → Actions match what you would have approved
Level 5 → Outcomes are consistently correct
```

**Regression triggers:**
- Novel domain (back to Level 2-3)
- Major failure (back to Level 3 until trust rebuilt)
- Changed requirements (back to Level 3 to verify understanding)

This mirrors how you'd handle a new employee vs. a trusted veteran.

---

## Connection to Colleague vs Tool AI

[[Colleague vs Tool-Shaped AI]] maps to different default positions on this spectrum:

| | Default Level | Interaction Pattern |
|--|---------------|---------------------|
| **Colleague AI** | 2-3 | Continuous dialogue, frequent handoffs |
| **Tool AI** | 4-5 | Spec up front, autonomous execution |

**The skill gap paradox explained:** Seniors can use Tool AI (Level 4-5) because they can write specs that make autonomous execution reliable. Juniors need Colleague AI (Level 2-3) because they can't yet define "correct" precisely enough for autonomous execution.

But even seniors drop to Level 2-3 during discovery — when *the problem* is undefined, not just the solution.

---

## The Monkey Question for Agents

Before ending any agent interaction, ask:

> **Who has the monkey?**

- If you're waiting on the agent → Good, you have leverage
- If the agent is waiting on you → You're the bottleneck
- If nobody owns the next action → Failure mode; clarify immediately

**Anti-pattern:** Treating agent output as a starting point for your own work. The agent did the work; you're now doing it again. Either trust the output or give better instructions.

---

## Matching Autonomy to Task

```
Is "correct" well-defined?
    │
    ├── NO → Level 2-3 (Colleague mode)
    │        Discover "correct" through iteration
    │
    └── YES → Is the agent proven on this task type?
                  │
                  ├── NO → Level 3-4 (verify then trust)
                  │
                  └── YES → Is it reversible?
                                │
                                ├── YES → Level 5 (full autonomy)
                                │
                                └── NO → Level 4 (act, report, verify)
```

---

## Related Concepts

- [[Monkey Management]] — The original framework; delegation and accountability
- [[Colleague vs Tool-Shaped AI]] — Two philosophies mapping to different autonomy defaults
- [[Agent as Device Shadow]] — Persistent agent proxy; autonomy varies by your availability
- [[Reversibility-Calibrated Action]] — Reversibility determines safe autonomy level
- [[The 2026 Builder Operating System]] — "Engineering Manager Mindset" = managing agent autonomy
- [[The Barbell Economy]] — Level 1-3 work is increasingly Layer 1; Level 4-5 orchestration is Layer 2
- [[The Inference Crunch]] — Agentic systems (Level 4-5) drive 100x token consumption; efficiency matters

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC
- [[_MOCs/Leadership & Teams]] — The human management parallel

## Sources

- Oncken, W. & Wass, D. (1974). "Management Time: Who's Got the Monkey?" — The original five degrees of initiative
- Synthesis connecting leadership frameworks to AI agent design
