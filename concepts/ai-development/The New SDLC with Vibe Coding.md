# The New SDLC with Vibe Coding

A Google whitepaper (May 2026) tracing the move *from ad-hoc prompting to agentic engineering* — and the central claim that the SDLC is being rebuilt around **intent** rather than syntax.

> Source PDF stored in the vault: [[The New SDLC with Vibe Coding.pdf]] · Authors: Addy Osmani, Shubham Saboo, Sokratis Kartakis.

This is the *Day 1* paper in a series; it forward-references a *Day 3* paper (Context Engineering: Sessions, Skills & Memory) and a *Day 5* paper (Spec-Driven Production-Grade Development).

![[Pasted image 20260627112226.png]]

---

## The core thesis

Programming has always been an act of translation: problem → abstract design → machine syntax, with friction at every step. That friction is collapsing. The most profound shift "isn't a new language, framework, or cloud service. It's the transition from writing code to expressing intent." As of early 2026 the paper cites 85% of professional developers using AI coding agents, 51% daily, and ~41% of new code being AI-generated.

This is the same move named in [[The Great Inversion]] — execution has become cheap, so the bottleneck migrates upward to clarity, judgment, and verification. The paper's closing line is a compact restatement of that inversion: *"Generation is solved. Verification, judgment, and direction are the new craft."*

---

## The spectrum: vibe coding → agentic engineering

The paper's central reframe is to stop treating "vibe coding" as a binary and instead see a **spectrum**. The differentiator is *not whether you use AI* but **how much structure, verification, and human judgment surround the AI's output**.

| Dimension | Vibe Coding | Structured AI-Assisted | Agentic Engineering |
|-----------|-------------|------------------------|---------------------|
| Intent | Casual prompts | Detailed prompts + constraints | Formal specs, architecture docs, memory files |
| Verification | "Does it seem to work?" | Manual testing, spot-checks | Automated tests, CI/CD gates, LM judges |
| Codebase understanding | Minimal | Selective review | Comprehensive review of architecture |
| Error handling | Paste errors back to AI | Human diagnoses, AI fixes | Agents self-diagnose within bounds |
| Scope | Prototypes, hackathons | Features in existing codebases | Production, team-scale |
| Risk | High (disposable) | Moderate | Low (systematic verification) |

The right position depends on stakes: a weekend prototype can be pure vibe coding; a payment system demands agentic engineering. The single biggest differentiator is **how outputs get verified** — *tests* check the deterministic parts, *evals* check the non-deterministic trajectory (right steps, right tools, quality bar). Without both, "the practice is always vibe coding." This is the discipline that [[Testing Strategy]] and a clear [[Definition of Done]] encode, now repurposed as the contract you hand to an agent.

---

## Context engineering: the real skill

Quality depends less on clever prompts than on the **quality of context** provided. The paper names six context types — Instructions, Knowledge, Memory, Examples, Tools, Guardrails — and a key architectural trade-off:

- **Static context** (always loaded): system instructions, rule files (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`), global memory. Expensive — every token is present every turn.
- **Dynamic context** (loaded on demand): Agent Skills triggered by task match, tool results, RAG documents. Efficient — you pay only when needed.

The most powerful pattern for dynamic context is **Agent Skills**: portable packages of procedural knowledge surfaced through progressive disclosure, so a generalist agent flexes into specialist roles while paying token cost only for the skill in use.

The shift from "prompt engineering" to "context engineering" rests on the same insight as [[The Inverted Causality of Language]]: with models, the language and context you supply *drive* the quality of output rather than merely describing a request. The paper's framing — "what would a new team member need to know to contribute effectively?" — is context engineering's practical test.

---

## The new SDLC, phase by phase

AI compresses the cycle **unevenly**: implementation drops from weeks to hours, while requirements, architecture, and verification stay human-paced. The result isn't a faster old SDLC — it's a different workflow where phase boundaries blur and the developer becomes system designer and quality arbiter.

- **Requirements/planning** — AI generates user stories, edge cases, API schemas, and working prototypes; the requirements-to-prototype loop collapses toward zero.
- **Design/architecture** — the most stubbornly human phase (trade-offs need business context); AI implements decisions once made.
- **Implementation** — real gains (25–39%), but nuanced: a METR study found experienced devs took ~19% *longer* on some tasks once verification/debugging time is counted. Work shifts from writing to reviewing and guiding.
- **Testing/QA** — output evaluation (did it compile/pass?) plus trajectory evaluation (was the path sound?); evals become the way you *communicate intent*.
- **Review/deployment** — AI as first-pass reviewer; AI-aware pipelines that predict risk and auto-roll-back.
- **Maintenance** — the most underestimated win: legacy code that was "too risky to touch" becomes navigable, refactorable, migratable. This reframes [[Technical Debt]] — construction debt gets cheap to pay down, but comprehension debt remains the real cost.

---

## The factory model and the harness

The mental model that ties it together is the **factory model**: the developer's primary output is *not code — it's the system that produces code* (specs, agents, tests/gates, feedback loops, guardrails). A factory manager designs the assembly line and quality control rather than assembling each widget by hand.

The machine on that floor is governed by a **harness**. The paper's key equation:

> **Agent = Model + Harness**

The model is the engine; the harness is "the car, the road, and the traffic laws" — instructions/rule files, tools, sandboxes, orchestration logic, guardrails/hooks, and observability. The harness is *the team's surface area, not the model provider's*. Benchmarks make the effect concrete: a coding agent moved from outside the Top 30 to Top 5 on Terminal Bench 2.0 by changing **only the harness**, and "most agent failures, examined honestly, are configuration failures." Practically, the harness shows up in every SDLC phase — configured at planning, run at implementation, looped at testing, and observed at deployment.

This is the same lesson the KB captures elsewhere: harness and configuration dominate behaviour far more than raw model choice.

---

## The developer's evolving role: conductor ↔ orchestrator

Two modes the developer moves between fluidly:

- **Conductor** — real-time, synchronous, in-IDE; keystroke-level control (Copilot, Cursor, Windsurf). Best for complex logic, debugging, unfamiliar code. Risk: becomes a throughput bottleneck.
- **Orchestrator** — async, high-level, multi-agent delegation; reviews outcomes not keystrokes (Jules, Claude Code, Cursor background agents). Demands new skills: **specification, decomposition, evaluation, system design.**

This maps directly onto [[The 2026 Builder Operating System]] — the "engineering manager mindset," altitude-shifting between abstraction levels, and the move from measuring contribution in keystrokes to measuring it in outcomes.

### The 80% problem

Agents generate ~80% of a feature fast; the remaining 20% — edge cases, error handling, integration, subtle correctness — needs deep context models often lack. AI errors have shifted from syntax mistakes to *insidious conceptual failures* that "look right" and may pass basic tests. The winning posture: use AI for well-specified implementation, reserve human attention for ambiguity, trade-offs, and correctness.

---

## Coding agents in practice

Three places agents show up daily (most developers use all three): **in the editor** (inline completion, chat), **in the terminal** (goal-driven, multi-file, runs tools/tests — where serious vibe coding happens), and **in the background** (cloud sandboxes producing PRs). The right starting point depends on the task, not on an "autonomy ladder."

The paper extends this to *building production agents*: the same terminal workflow that produces a prototype now produces a deployable agent (Google's Agents CLI / ADK, coordinated via MCP and the A2A protocol). The bottleneck moves from writing code to specifying and verifying it.

---

## The economics: CapEx vs OpEx

For leaders, the metric is Total Cost of Ownership, and in the AI era OpEx is dominated by the **token economy**:

- **Vibe coding = low CapEx, high OpEx.** Negligible setup, but a compounding "token burn rate" (dumping unstructured files, fixing unverified mistakes), a "maintenance tax" (reverse-engineering spaghetti later), and security remediation cost.
- **Agentic engineering = high CapEx, low OpEx.** Upfront investment in schemas, test suites, and structured context; the marginal cost of shipping/maintaining each feature drops.

Context engineering therefore becomes a **financial lever** (dense, high-signal payloads raise first-pass success), alongside **intelligent model routing** (frontier models for hard tasks, cheaper models for deterministic ones).

---

## Where to start (the practical checklist)

- **Individuals:** set up an `AGENTS.md`/`CLAUDE.md`; install agent-building skills; make one repetitive workflow your first agent; write tests/evals *before* code; review every shipping line; keep core skills sharp.
- **Leaders:** treat context engineering as first-class (review `AGENTS.md`, prompts, evals in PRs); set the bar at the eval, not the demo; reshape code review for AI output; separate prototyping from production; invest in the harness as a shared asset.
- **Organizations:** treat AI as engineering investment not a productivity feature; build the production substrate before scale; adopt open standards (MCP, A2A); plan for hybrid human+agent teams; hire for judgment over implementation.

The unifying principle — *"AI amplifies the engineering culture it lands in"* — is the practical edge of [[Scarcity to Abundance - A Unifying Lens]] and a caution against the speed-without-discipline trap warned about in [[Eight Habits to Break]].

---

## Three durable principles (conclusion)

1. **Structure scales, vibes don't.** Discipline is optional for prototypes, not for software organizations depend on.
2. **AI amplifies your engineering culture.** A force multiplier for both strengths and weaknesses.
3. **The human role is evolving, not diminishing.** Value shifts from implementation to judgment — architecture, specification, evaluation, system design.

---

## Connection to Other Concepts

### [[The Great Inversion]]
The paper is a domain-specific instance of the inversion: cheap generation pushes the bottleneck to clarity, verification, and direction. "Generation is solved" is the SDLC restatement of "execution is cheap."

### [[The 2026 Builder Operating System]]
Conductor/orchestrator modes and the factory model operationalise the engineering-manager mindset and altitude-shifting for software specifically.

### [[The Inverted Causality of Language]]
Why context engineering works: supplied context drives output quality rather than describing a request — the deeper "why" behind static/dynamic context and Agent Skills.

### [[Technical Debt]]
The "maintenance tax" and 80% problem are debt mechanics in the agentic era: construction debt cheapens, comprehension/correctness debt does not.

### [[Testing Strategy]] · [[Definition of Done]]
Tests + evals are the contract with the agent — the verification discipline that separates agentic engineering from vibe coding.

## See Also

- [[AI-Assisted Development]] — Back to the MOC
- [[Scarcity to Abundance - A Unifying Lens]] — The broader scarcity→abundance lens
- [[Eight Habits to Break]] — The discipline traps AI amplifies
- [[Writing Great Skills]] — How to author the Agent Skills this paper relies on (progressive disclosure in practice)

## Sources

- *The New SDLC with Vibe Coding* — Osmani, Saboo, Kartakis, Google (May 2026). PDF: [[The New SDLC with Vibe Coding.pdf]]
- Companion papers referenced: Day 3 (Context Engineering: Sessions, Skills & Memory), Day 5 (Spec-Driven Production-Grade Development)

---

*Added [[2026-06-27]] — Imported and summarised the Google "New SDLC with Vibe Coding" whitepaper; stored source PDF in the vault.*

*Updated [[2026-06-27]] — Linked to [[Writing Great Skills]] (authoring craft for the Agent Skills pattern).*
