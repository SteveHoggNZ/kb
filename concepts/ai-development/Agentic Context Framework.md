# Agentic Context Framework

The Agentic Context Framework (ACF) is an open-source approach to organising the documentation and instructions that AI coding agents need to work effectively in a codebase. It structures agent context through three pillars: agent instructions (`AGENTS.md`), architecture documentation, and Agent Decision Context (ADC) records — versioned decision logs that capture not just what was decided but why, what was rejected, and how to roll back.

---

## What It Gets Right

### Retrieval Discipline

ACF's strongest idea is **Retrieval Discipline** — a section generated in `AGENTS.md` that tells agents exactly how to incrementally load context for a specific repo: which files to read, in what order, when to stop. This directly addresses the problem that agents waste context budget scanning irrelevant code, which pushes them toward the "Dumb Zone" where reasoning degrades past ~40% context usage.

The connection to [[Harnesses Matter More Than Models]] is clear: Retrieval Discipline is a form of harness — it structures the agent's information gathering rather than leaving it to freeform exploration. And the ordering matters because of prompt recency — the last files read have the strongest influence on what the agent does next.

### Agent Decision Context (ADC)

ADCs extend traditional Architecture Decision Records (ADRs) by being forward-looking: they include impact analysis, execution plans, and rollback strategies alongside the decision rationale. For long-running projects where multiple agent sessions work on a codebase over weeks or months, ADCs prevent future agents from re-litigating settled decisions. This is [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]] applied to architectural decisions — each session starts fresh, but the ADC gives it the compressed history it needs.

### Maturity Model

ACF defines four levels: Level 0 (Ad Hoc — no agent context), Level 1 (Onboarded — documentation complete), Level 2 (Practicing — regular maintenance), Level 3 (Trusted — full ADC discipline, autonomous workflows viable). This is useful framing for teams trying to understand where to start.

---

## Where It Falls Short

### LSP solves the Retrieval Discipline problem better

The core limitation of Retrieval Discipline is that it's **static documentation about code structure** — and code structure changes. Modern agents with LSP (Language Server Protocol) access can "go to definition," find all references, and trace call chains dynamically. An agent with LSP access doesn't need a hand-written reading order in AGENTS.md; it follows the type system. The LSP can't go stale. The AGENTS.md can.

Where Retrieval Discipline retains value is for *non-code context* — business rules, tribal knowledge, the reasons behind legacy decisions. The LSP tells you `ShoppingCartService` has 47 public methods; it doesn't tell you why the pricing logic is coupled to cart validation. But ACF doesn't clearly distinguish between these two cases — it treats all retrieval as a documentation problem.

### No strategic alignment layer

ACF operates entirely at the tactical level. Its five stages (Onboard → Instructions → DeepDive → Review → Update) are about **documentation maintenance**, not about aligning agent work to business outcomes. There's no equivalent to a vision document explaining *what success looks like* or a strategy document explaining *why this approach over alternatives*.

This matters because agents don't just need to know *what the system is* — they need to know *what we're trying to achieve*. The [[Agent-First Operating Model]] addresses this with its Phase 1 (Problem Framing) and Phase 2 (Specification) before any agent touches code. ACF skips straight to "document the codebase" without asking whether the agent is working on the right problem.

### Documentation as the sole feedback mechanism

ACF relies on documentation to guide agents — [[Physics Thinking]] would call this "law." The agent *should* read the architecture docs. The agent *should* follow the retrieval discipline. But there's no structural enforcement. Compare this to [[Harnesses Matter More Than Models]] where linters, tests, and compiler errors are physics — the agent *cannot* ignore a failing test.

ACF's five-stage workflow doesn't include building any kind of test harness or feedback loop. Stage 3 (DeepDive) documents complex areas; it doesn't create tests that verify the agent understands them correctly. Stage 5 (Update) detects "architectural drift" by comparing docs to code — but this is a human review step, not a structural enforcement.

---

## What to Borrow

For projects where LSP access isn't available or where tribal knowledge matters, the ADC pattern is worth adopting. The key addition over what we already do with daily notes: ADCs capture *rejected alternatives* and *rollback strategies*, not just what changed. This is especially valuable when multiple agents (or humans) work on the same codebase across sessions.

The maturity model is useful as a communication tool for workshops and consulting — it gives teams a concrete way to assess where they are and what "better" looks like.

---

## Our Extension: ADCs with RPI Phase Artefacts

ACF's ADC records are designed for individual architectural decisions — one flat record per decision, with an optional execution plan in a separate `plans/` directory. [[Decompose-Route-Recompose]] produces *phased artefacts* (research.md, plan.md) that don't fit neatly into that flat structure.

The extension: an ADC record gets a **companion directory** containing its phase artefacts. The ADC wrapper document captures the decision context (motivation, rejected alternatives, rollback, risks) and points to the phase outputs:

```
docs/adc/
├── 2026-03-31--extract-cart-service.md        ← decision record
└── 2026-03-31--extract-cart-service/          ← phase artefacts
    ├── research.md                             ← RPI Phase 1 output
    ├── plan.md                                 ← RPI Phase 2 output
    └── handoff.md                              ← agent context for Phase 3
```

The wrapper document is what an agent reads first — it tells them which phase they're in, what artefacts already exist, and what was decided (and rejected). The phase artefacts are the dense handoff documents that RPI requires. This combines ADC's decision-trail value with RPI's fresh-context-window discipline.

Tested on the nopCommerce brownfield workshop (`docs/adc/2026-03-31--extract-cart-service`).

---

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC
- [[Twelve-Factor Agents]] — Another framework for structuring agent systems

## Sources

- [Agentic Context Framework (GitHub)](https://github.com/ichbinsoftware/agentic-context-framework)

---

*Created [[2026-03-31]]*
