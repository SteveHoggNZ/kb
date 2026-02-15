# Decision Frameworks

Tools for thinking clearly and solving problems.

---

## Problem Definition

### [[concepts/decision-frameworks/TOSCA Framework|TOSCA Framework]]
Before solving a problem, define it properly:

- **T**rouble — What's wrong?
- **O**wner — Who owns this problem?
- **S**uccess — What does solved look like?
- **C**onstraints — What limits exist?
- **A**ctors — Who's involved?

> **If I can't state the problem in a clear and precise way, I don't understand it properly.**

---

## Heuristics & Rules

### [[concepts/decision-frameworks/Rules of Thumb|Rules of Thumb]]

**On Speed:**
> If a decision is not permanent, it is better to move too fast.
> If a decision is permanent, it is better to move too slow.

**On Planning:**
> Plan with patience, execute with impatience.

**On Direction:**
> Run towards something, not away from something.

---

## Cognitive Traps

### [[concepts/decision-frameworks/Logical Fallacies|Logical Fallacies]]

**Distinction Without Difference:**
> A type of logical fallacy where an author attempts to describe a distinction between two things where no discernible difference exists.

Watch for this in:
- Technical debates (framework X vs framework Y when they're equivalent)
- Process discussions (agile vs "doing agile")
- Architecture decisions

### Common Fallacies in Tech
- Sunk cost fallacy ("we've invested so much already")
- Appeal to authority ("Google does it this way")
- False dilemma ("monolith OR microservices")
- Survivorship bias ("successful companies use X")

---

## Decision Types

### [[concepts/decision-frameworks/Two-Way Doors|Reversible vs. Irreversible]]
Amazon's framework:

**Type 1 (One-way door):**
- Irreversible or nearly so
- Require deliberation
- Examples: major architecture changes, public API contracts

**Type 2 (Two-way door):**
- Easily reversible
- Can move fast
- Examples: internal refactoring, feature flags, experiments

---

## Applied Frameworks

### For Technical Decisions
1. Define problem with TOSCA
2. Identify if reversible (one-way vs two-way door)
3. Check for logical fallacies in reasoning
4. Apply relevant [[Design Principles]]

### For People Decisions
1. What's the real problem (TOSCA)?
2. Consult [[Leadership & Teams]] principles
3. Consider long-term effects ([[Philosophy & Life|Family First]])
4. Check your biases (fallacies)

### For Career Decisions
1. Are you running toward or away?
2. Does it align with [[concepts/philosophy/Ikigai|Ikigai]]?
3. Is this reversible?
4. What would prepared + opportunity look like?

---

## Information Organization

### [[concepts/decision-frameworks/PARA Method|PARA Method]]
Organize by actionability, not topic. Projects (active, time-bound), Areas (ongoing, no deadline), Resources (reference material), Archives (inactive). From "Building a Second Brain."

---

## Mental Models Collection

### From Software
- **Bijection** — One real thing = one code thing
- **Separation of concerns** — Each part does one job
- **Dependency inversion** — Depend on abstractions

### From Leadership
- **Conway's Law** — Structure shapes output
- **Scale Responsibly** — Growth requires foundation
- **4 Ts** — Team, Tech, Tools, Timing

### From Philosophy
- **Preparation × Opportunity** — Make your luck
- **Two speeds** — Plan slow, act fast

---

## Synthesis

### [[concepts/decision-frameworks/Reversibility-Calibrated Action|Reversibility-Calibrated Action]]
A meta-framework emerging across domains: calibrate effort to reversibility. Two-Way Doors, Steel Thread Delivery, "ship ugly and fast," and "plan slow, act fast" all express the same principle — move fast on what's reversible, slow on what's not.

---

## Related MOCs

- [[Design Principles]] - Apply clear thinking to code
- [[Leadership & Teams]] - Apply clear thinking to organizations
- [[Philosophy & Life]] - The "why" behind decisions

---

## Source Notes (from kb.original)

- `TOSCA Framework - Problem Solving.md`
- `Rules of thumb.md`
- `Logical fallacies.md`
- `career-advice.md`
