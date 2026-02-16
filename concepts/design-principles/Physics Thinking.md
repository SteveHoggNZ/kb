# Physics Thinking

A design meta-principle: at every layer of your system, distinguish between what components *should* do and what they *can* do. Ensure catastrophic failures are prevented by Physics, not just discouraged by Law.

> **The one-sentence version:** Law tells; Physics prevents.

---

## The Core Insight

Every system has two categories of constraint:

| Category | Nature | Enforcement | Failure Mode |
|----------|--------|-------------|--------------|
| **Law / Policy** | What components *should* do | Voluntary — requires compliance | Gradual drift, ignored under pressure |
| **Physics** | What components *can* do | Involuntary — impossible to violate | Hard stop, forces adaptation |

**The design question:** For every constraint, ask *"What happens when this is ignored?"*

- If catastrophic → it must be Physics
- If inconvenient → Law is sufficient

---

## Physics Across Layers

The same pattern applies at every layer of a system:

| Layer | Law / Policy | Physics |
|-------|--------------|---------|
| **Agent/Prompt** | "Stay within budget", "Don't acknowledge" | `max_entries` limit (429), `status=closed` (423) |
| **API** | Documentation, conventions, best practices | Rate limits, authentication, validation errors |
| **Database** | Application-enforced rules, JSONB policies | Foreign keys, NOT NULL, CHECK constraints, RLS |
| **UI** | Validation messages, guidelines | Disabled buttons, form constraints, auth guards |
| **Infrastructure** | Runbooks, alerts, on-call rotations | Circuit breakers, resource limits, quotas |

**See:**
- [[Law vs Physics in Agent Design]] — Agent layer deep-dive
- [[Database Physics vs Policy]] — Infrastructure layer deep-dive

---

## The Three Failure Modes

### 1. Law Without Physics
Components drift. Rules get ignored under pressure. You find out at 2am.

> Example: "Budget: 4 messages" in a prompt, but no hard limit. Agent posts 122 messages.

### 2. Physics Without Law
Components crash blindly. No graceful degradation. Poor UX.

> Example: Hard `max_entries=6` with no prompt guidance. Agent hits 429, retries in a loop.

### 3. Law + Physics (The Goal)
Components follow rules voluntarily most of the time. Physics catches the rest. Failures are bounded.

> Example: Prompt says "Budget: 4 messages." Platform enforces `max_entries=6` (with buffer). Agent respects soft limit; hard limit catches edge cases.

---

## When Law is Better Than Physics

Physics isn't always the answer. There are situations where Law is the *preferred* approach:

### 1. When You Need Flexibility

Physics is rigid. It can't handle edge cases, exceptions, or nuance.

| Scenario | Physics | Law |
|----------|---------|-----|
| "Usually 4 messages, but complex analysis might need 6" | Hard fail at 4 | Guidance + soft monitoring |
| "Don't share externally, unless it's a partner" | Binary block | Contextual judgment |

**Rule:** If legitimate exceptions exist, prefer Law with Physics as a backstop.

### 2. When the Constraint is Evolving

Changing Physics is expensive — schema migrations, API versioning, deployment coordination. Changing Law is cheap — update a prompt, edit a doc.

| Stage | Approach |
|-------|----------|
| **Exploring** | Law only — learn what constraints actually matter |
| **Stabilizing** | Law + soft monitoring — measure violation rates |
| **Hardening** | Promote proven constraints to Physics |

**Rule:** Start with Law. Graduate to Physics when the constraint is proven and stable.

### 3. When You Need Explanation

Physics just says "no." Law can explain *why*, teach better behavior, and guide toward compliance.

```
Physics: HTTP 429 Too Many Requests

Law: "You've used 5 of 6 messages. The remaining budget should be
      used for your final synthesis. Consider consolidating your
      remaining points into a single response."
```

**Rule:** If learning and improvement matter, pair Physics with Law that explains intent.

### 4. When False Positives Are Costly

Physics can't distinguish legitimate use from abuse. It blocks both.

| Scenario | Physics Risk |
|----------|--------------|
| Rate limiting an API | Blocks legitimate burst traffic during incidents |
| Max file size | Blocks valid large uploads |
| Consecutive message limit | Blocks legitimate multi-part responses |

**Rule:** When blocking legitimate use is worse than allowing occasional abuse, prefer permissive Physics + Law guidance.

### 5. When You Want Observability

Law violations can be logged, measured, and learned from. Physics violations just bounce — you see the rejection but not the intent.

| Approach | Observability |
|----------|---------------|
| **Physics only** | "Request rejected" — no context |
| **Law + logging** | "Agent tried X, which violates Y — pattern suggests Z" |

**Rule:** For constraints you want to understand and iterate on, start with Law + observability.

### 6. When Actors Have Different Trust Levels

Physics treats all actors identically. Law can be advisory for trusted actors, strict for untrusted.

| Actor | Approach |
|-------|----------|
| Internal admin | Law: "Please don't do X" |
| External API user | Physics: Hard rate limit |
| New agent | Physics: Strict guardrails |
| Proven agent | Law: Looser guidance, earned trust |

**Rule:** Use Physics for untrusted actors; graduate trusted actors to Law-based guidance.

### The Law-First Principle

> **Start with Law. Add Physics when you have evidence it's needed.**

Physics is a one-way door — once you add a hard constraint, removing it is risky. Law is reversible — you can tighten or loosen based on what you learn.

The progression:
1. **Law only** — observe behavior, measure violations
2. **Law + Advisory** — warn before limits
3. **Law + Soft Physics** — permissive limits with logging
4. **Law + Hard Physics** — strict limits for proven catastrophic risks

---

## The Advisory Layer

Binary Law/Physics misses a middle ground: **warnings before hard limits**.

```
     Law                    Advisory                 Physics
      │                        │                        │
 "You should"            "You're about to"         "You cannot"
      │                        │                        │
   Prompts              _advisory fields           Hard errors
   Docs                 Warning states              429 / 423
   Conventions          Yellow indicators           Disabled UI
```

Advisories let components adjust behavior *before* hitting walls — reducing wasted work while maintaining safety.

---

## Design Heuristics

### 1. The Catastrophe Test
> "If this rule is violated, what's the blast radius?"

- **Small blast radius** (noise, inefficiency) → Law is sufficient
- **Large blast radius** (data corruption, cost explosion, security breach) → Physics required

### 2. The Probabilistic Actor Test
> "Is this component deterministic or probabilistic?"

LLMs, humans, and distributed systems are probabilistic. They *will* violate rules eventually. Physics is insurance.

### 3. The 2am Test
> "If this fails at 2am, will it wake someone up or fix itself?"

Physics failures are often self-limiting (request rejected, component blocked). Law failures compound silently until they explode.

### 4. The Hierarchy Test
> "At what layer should this constraint live?"

Push Physics as **low** as possible in the stack:
- Database constraints > API validation > Application logic > UI hints
- Lower layers can't be bypassed by bugs in higher layers

---

## The Economics of Physics

[[The Great Inversion]] changes the Law/Physics calculus:

| Era | Execution Cost | Optimal Strategy |
|-----|----------------|------------------|
| **Scarcity** | Expensive | Invest in perfect prompts/specs (Law) to avoid retries |
| **Abundance** | Cheap | Invest in hard limits (Physics) and let components retry |

When compute is cheap, it's more economical to let a component hit a wall and retry than to craft perfect instructions that never fail.

---

## Connection to Other Principles

| Principle | Connection |
|-----------|------------|
| [[Trinity Protocol]] | Three primitives (Semaphore, Bell, Watchdog) with Physics backstops for multi-agent coordination |
| [[Reversibility-Calibrated Action]] | Calibrate Physics strictness to reversibility — irreversible actions need stronger guards |
| [[Scalable Multi-Agent Architecture]] | Hard ceilings are Physics; the "5 rules" are Law backed by Physics |
| [[RLS-First Authorization]] | Database as final Physics layer — middleware is optimization, DB is truth |
| [[Graduated Defense]] | Multiple Physics layers with escalating consequences |
| [[Idempotency Keys]] | Physics for exactly-once semantics — DB-enforced uniqueness |

---

## Summary

**Physics Thinking is defensive design.** Assume components will misbehave. Design systems where misbehavior is bounded, not catastrophic.

The goal isn't perfect compliance. It's **bounded failure**.

```
┌─────────────────────────────────────────────────┐
│              Physics Thinking                    │
│                                                  │
│   1. Start with Law — observe and learn         │
│   2. Ask: "What if this is violated?"           │
│   3. If catastrophic → add Physics              │
│   4. If needs flexibility → keep as Law         │
│   5. Graduate proven constraints to Physics     │
│                                                  │
│   Law teaches. Physics prevents.                 │
└─────────────────────────────────────────────────┘
```

---

## Related Concepts

- [[Law vs Physics in Agent Design]] — Deep-dive on agent/prompt layer
- [[Database Physics vs Policy]] — Deep-dive on database/schema layer
- [[Trinity Protocol]] — Concrete implementation for multi-agent coordination
- [[The Great Inversion]] — Economics that make Physics-heavy design viable
- [[Reversibility-Calibrated Action]] — Calibrate Physics strictness to reversibility
- [[RLS-First Authorization]] — Database as final Physics enforcement
- [[Scalable Multi-Agent Architecture]] — Physics applied to multi-agent coordination
- [[Graduated Defense]] — Multi-layer Physics with escalation

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
- [[_MOCs/AI-Assisted Development]] — Agent-layer applications

---

*Updated [[2026-02-16]] — Added "When Law is Better Than Physics" section for balance*
