# Technical Debt

The implied cost of future rework caused by choosing an expedient solution now instead of a better approach that would take longer.

**The Inversion:** In the age of cheap execution, technical debt is less terrifying. The cost of paying it down has collapsed.

---

## The Classic Definition

Ward Cunningham's original metaphor: debt you take on to ship faster, with the understanding you'll "pay interest" (maintenance burden) until you "pay it back" (refactor).

| Debt Type | Description | Example |
|-----------|-------------|---------|
| **Deliberate** | Conscious trade-off for speed | "Ship now, refactor next sprint" |
| **Accidental** | Discovered after the fact | "We didn't know the framework had this limitation" |
| **Bit rot** | Code degrades as context changes | Dependencies update, requirements shift |

---

## The Traditional Fear

Technical debt was terrifying because:
1. **Refactoring was expensive** — Engineering time was scarce
2. **Risk of regression** — Changes might break things
3. **Compound interest** — Small debts accumulate into unmaintainable systems
4. **Opportunity cost** — Time refactoring = time not building features

This created a culture of **debt avoidance** — extensive upfront design, careful architecture, "do it right the first time."

---

## The Inversion: Execution is Cheap Now

[[The Great Inversion]] changes the calculus:

| Old Reality | New Reality |
|-------------|-------------|
| Refactoring is expensive | Refactoring is cheap (AI-assisted) |
| Regression risk is high | Test generation is cheap, coverage improves |
| Debt compounds dangerously | Debt can be paid down rapidly |
| Upfront design prevents debt | Iteration reveals what "right" looks like |

**The new fear isn't accumulating debt — it's premature optimization.**

If you can refactor a module in an afternoon with AI assistance, spending a week on upfront design is waste. Ship the "wrong" thing, learn, then fix it cheaply.

---

## Technical Debt in the Agentic Era

### What's Changed

| Aspect | Before | After |
|--------|--------|-------|
| **Cost to pay down** | Days/weeks of engineering time | Hours with AI assistance |
| **Refactoring scope** | Scary, avoided | Routine, embraced |
| **Test coverage** | Expensive to backfill | Cheap to generate |
| **Documentation** | Often skipped | AI can generate from code |
| **Code comprehension** | Limited by human reading speed | AI can explain any codebase |

### New Heuristics

1. **Take debt deliberately** — Ship fast, iterate faster
2. **Don't fear large refactors** — AI makes them tractable
3. **Defer architecture decisions** — Learn from running code
4. **Document less, generate more** — AI can explain on demand
5. **Test coverage is cheap** — No excuse for untested debt

### The New Risk: Premature Abstraction

The old risk was **too much debt**. The new risk is **too much architecture**.

Over-engineering before you understand the problem creates:
- Abstractions that don't fit real requirements
- Complexity that slows iteration
- Lock-in to wrong patterns

Better to ship simple code, learn, then let AI help you refactor to the *right* abstraction.

---

## Debt as Signal, Not Shame

From [[Signal in the Scar]]: Technical debt isn't shameful — it's **evidence of shipping**.

| Perspective | Implication |
|-------------|-------------|
| **Shame view** | Hide debt, don't discuss it |
| **Signal view** | Document debt, make trade-offs explicit |

Visible debt is manageable debt. Hidden debt compounds.

### Good Debt Documentation

```markdown
## Known Technical Debt

### Auth Module
- **What:** Using session cookies instead of JWT
- **Why:** Faster to ship for MVP
- **Cost:** Can't scale to mobile apps
- **Trigger to fix:** When mobile client starts

### Database Schema
- **What:** Denormalized user preferences
- **Why:** Avoided migration complexity
- **Cost:** Update anomalies possible
- **Trigger to fix:** When we need preference history
```

---

## Connection to Other Concepts

### [[The Great Inversion]]
Execution is cheap → Paying down debt is cheap → Take debt more freely

### [[Reversibility-Calibrated Action]]
Technical debt decisions are now *more reversible* than before. Move fast.

### [[The Barbell Economy]]
- Layer 1 (code) → Easily refactored, debt is cheap
- Layer 2 (architecture decisions) → Still expensive to change, be careful here

### [[Colleague vs Tool-Shaped AI]]
- **Tool AI** excels at paying down debt (clear spec: "refactor X to pattern Y")
- **Colleague AI** helps discover *which* debt matters

### [[Steel Thread Delivery]]
Ship thin slices with known debt. Iterate. Pay down debt on the paths that matter.

---

## The Meta-Point

The old wisdom was: "Avoid technical debt."

The new wisdom is: **"Take debt strategically, pay it down cheaply."**

The cost structure has changed. Optimize for learning speed, not upfront correctness.

---

## Related Concepts

- [[The Great Inversion]] — Execution is cheap; debt paydown is cheap
- [[Signal in the Scar]] — Debt is evidence of shipping, not shame
- [[Reversibility-Calibrated Action]] — Debt is now more reversible
- [[Steel Thread Delivery]] — Ship with known debt, iterate
- [[Colleague vs Tool-Shaped AI]] — Tool AI pays down debt efficiently

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
