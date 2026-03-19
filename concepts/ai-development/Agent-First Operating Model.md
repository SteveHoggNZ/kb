# Agent-First Operating Model

A unified lifecycle for working with AI coding agents. Humans design the environment for success; agents execute within it autonomously, verifiably, and repeatedly.

---

## Core Principles

- **Context beats clever prompting** — Never ask an agent to "just build a thing". Success depends on contracts, specs, and grounding, not prompt wording. This is [[Harnesses Matter More Than Models]] applied to workflow: the harness (environment, specs, verification) matters more than how you phrase the prompt.

- **Files > chat history** — Anything important (plans, specs, decisions) must live in versioned files, not transient chat context. This operationalises [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]]: if it's not in a file, it doesn't survive session boundaries. Files are durable; chat is ephemeral.

- **Agents are fallible by default** — Assume mistakes. Design verification and review into the system. This is [[Physics Thinking]] at the workflow level: don't rely on the agent's "law" (prompt instructions) alone — build physics (harnesses, tests) that catch failures automatically.

- **Long-lived agents, minimal human loop** — Humans design the environment; agents do the execution. This maps to [[Agent Autonomy Levels]]: the goal is to operate at Level 5 ("Acts, reports routinely") within a well-designed environment.

- **UI is irrelevant** — Chat, IDE, CLI, web UI are interchangeable. Workflow and artefacts matter.

---

## End-to-End Lifecycle

### Phase 1 — Problem Framing & Context Priming

**Goal:** Ensure the agent fully understands *what* is being built and *why*.

Start in **plan mode**, not execution. Provide incomplete instructions deliberately — force the agent to ask clarifying questions and repeat back its understanding. Explicitly state stack, constraints, and out-of-scope items. Instruct the agent to search the web for anything recent or fast-moving.

**Exit criteria:** The agent can accurately restate the problem. Ambiguities are resolved. No code has been written yet.

This is [[Teach the Delta]] in reverse — instead of telling the agent everything, you tell it enough to identify what it *doesn't* know and force it to ask.

### Phase 2 — Specification & Planning (Human-Review Gate)

**Goal:** Create durable artefacts the agent can rely on.

**Artefacts:**
- **Spec file** (what / why / constraints) — behaviour and intent
- **Plan file** (how / sequencing / risks) — implementation approach
- **agents.md / Copilot instructions** — long-term memory anchors
- Optional **code map / index**

Specs ≠ plans. Specs define behaviour and intent; plans define implementation approach. This mirrors [[Strategic vs Tactical Documentation]]: specs are strategic (rarely change), plans are tactical (adapt to implementation realities).

Use a high-reasoning model here. Review the plan before implementation. Optionally cross-check with a second model — a form of [[Context Distillation Loop - amnesia as a feature|agent amnesia for unbiased review]].

**Exit criteria:** Plan is reviewed and accepted. Specs and instructions are committed or saved.

### Phase 3 — Harness & Verification Design

**Goal:** Remove the human from the feedback loop.

Define harnesses *before* implementation: unit tests, scripted runs, compiler warnings as errors, end-to-end checks (e.g. Playwright, browser tools). Make verification hard to fake. Encode "done" as "all harnesses pass."

**If a human has to manually check something, the harness is incomplete.**

This is the linting pattern from [[Harnesses Matter More Than Models]] generalised: every verification mechanism is a feedback loop that teaches the agent what went wrong and how to fix it, delivered at the point of failure (prompt recency). These harnesses are physics, not law — [[Physics Thinking]] applied to the development process.

**Exit criteria:** The agent can independently verify correctness. Clear pass/fail signals exist.

### Phase 4 — Autonomous Execution

**Goal:** Let the agent run without interruption.

Switch to agent/execution mode. Explicit instruction: *"Do not stop until all harnesses pass."* Minimise enabled tools (tool discipline). Use a cheaper/faster model if specs are strong — [[Conditioning the Distribution]] means well-specified context lets simpler models perform well. Keep the session long-lived using question tools; avoid ending the conversation.

**Human role:** Do not micromanage. Use time to run another agent, review plans, or do parallel work.

**Exit criteria:** Harnesses pass. Agent produces verifiable outputs.

### Phase 5 — Review, Hardening & Drift Control

**Goal:** Ensure sustainability and future agent success.

Manually spot-check outputs once. Ensure docs match behaviour and specs are still accurate. Update code, specs, and instructions together — no drift. Clear chat context if moving to a new task.

This is entropy management from [[Harnesses Matter More Than Models]]: without active maintenance, the codebase (and its documentation) drifts toward slop. Keep the artefacts in sync.

---

## Roles

### Human Responsibilities
- Define goals and constraints
- Review plans and specs
- Design harnesses
- Decide when to execute
- Sanity-check results

### Agent Responsibilities
- Ask clarifying questions
- Ground knowledge
- Follow specs and plans
- Execute until verified
- Self-debug using harnesses and logs

This maps to [[The Great Inversion]]: humans own the expensive thing (clarity, intent, judgment) and agents own the cheap thing (execution).

---

## Required Artefacts (Minimum Set)

- `spec.md` — behaviour, intent, constraints
- `plan.md` — implementation steps
- `agents.md` / Copilot instructions — long-term memory
- Code map / index (optional but recommended)
- Harnesses (tests, scripts, checks)

**If it's not in a file, it doesn't exist.**

---

## Decision Rules

- **If the agent guesses → add context**
- **If you review manually → add a harness**
- **If context drifts → move it to a file**
- **If execution is slow → switch model, not workflow**
- **If the UI feels clunky → ignore it**

---

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC

---

*Created [[2026-02-16]]*
