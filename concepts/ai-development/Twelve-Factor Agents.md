# Twelve-Factor Agents

Agents are just software. To build reliable ones, stop treating them as magical entities and apply sound software engineering principles. LLMs are pure functions — tokens in, tokens out. Reliability comes from controlling those inputs.

> **The one-sentence version:** Stop looking for a magic wrapper. Build the hard parts yourself.

---

## The Quality Wall

Most agent builders follow a predictable path:

```
1. Decide to build an agent
2. Grab a framework to move fast
3. Achieve 70-80% reliability quickly
4. THE WALL: 80% isn't production-grade
5. Framework prevents fixing the last 20%
6. Throw code away and start from scratch
```

Frameworks try to abstract away the "hard AI parts" (prompting, context management) — but those are exactly the parts engineers *need* to control to reach production quality.

---

## Core Philosophy: De-Mystify the Agent

**"Tool Use" is a harmful abstraction.** It implies the agent is an ethereal being interacting with the world. In reality:

```
LLM outputs JSON → Switch statement → Deterministic function runs → Result feeds back
```

There's no magic. The only "intelligence" is the LLM turning natural language into structured JSON. Once you have JSON, you're back in standard software engineering.

This is [[Law vs Physics in Agent Design|Law vs Physics]] applied to agent architecture: the LLM is Law (probabilistic, can fail). The switch statement, the function call, the database write — that's Physics (deterministic, cannot fail in the same way).

---

## The Key Factors

### 1. Own Your Control Flow

Don't rely on infinite loops where the LLM figures everything out on its own.

| Approach | Pattern | Problem |
|----------|---------|---------|
| **Traditional (DAG)** | Strict If/Else, predetermined flow | Too rigid for novel tasks |
| **"Agent" loop** | `while True: ask LLM → execute → repeat` | Fails with long context; no explicit breaks |
| **Production** | Standard code with LLM calls where reasoning is needed | You control the flow; LLM handles the hard decisions |

**The principle:** Use deterministic code for deterministic work. Inject LLM calls only where reasoning is genuinely needed. A "DeployBot" where CI/CD is code but the rollback decision based on error logs is an LLM call.

### 2. Own Your Prompts

Frameworks that hide prompts prevent optimisation. To pass the 80% reliability bar, you must control every token in the context window. This connects to [[Contextual Breadcrumbs]] — the position and content of every token matters.

### 3. Manage State Explicitly

Track both **execution state** (current step, retries, tool results) and **business state** (messages, data shown to user). Serialize to a database, not memory.

**Pause and Resume:** Real-world tasks (human approval, long deploys) take time. You cannot keep an API request open.

```
Agent state → Serialize to DB → External event triggers webhook →
  Load state from DB → Resume the loop
```

This is [[Dumb Pipe Smart Edge]] at the agent level: the database stores state (Physics), the agent is stateless (reconstructed from context each time).

### 4. Compact Errors

When a tool fails, **do not feed the full stack trace back to the LLM**. It causes "spin-outs" — the model sees failure tokens and generates more failure.

| Bad | Good |
|-----|------|
| Feed 200-line stack trace back | Summarise: "Deploy failed: timeout on health check. Retry?" |
| LLM sees pattern of failure | LLM sees clean recovery signal |

This is the same insight as [[Decompose-Route-Recompose]]'s "Dumb Zone" — failure tokens in the context window degrade reasoning. Compact them.

### 5. Humans as Tools

There shouldn't be a special "Human in the Loop" architecture. **Humans are just another tool call.**

```python
# The agent emits this like any other tool call:
{"tool": "request_clarification", "args": {"question": "Should I proceed with rollback?"}}

# System pauses (serializes state to DB)
# Human responds
# System resumes (loads state, injects human response as tool result)
```

This preserves [[Dumb Pipe Smart Edge|the dumb pipe principle]]: the agent doesn't know whether it's calling a database, an API, or a human. The infrastructure handles the routing.

### 6. Micro-Agents Over Mega-Agents

**The Mega-Agent fails:** one agent with 100 tools and generic instructions hits the quality wall fast.

**The fix: Micro-Agents.**
- Limit to ~10 tools and ~20 steps per agent
- Use a pipeline of mostly deterministic code
- Inject small, focused LLM calls only where reasoning is needed

This directly echoes [[Scalable Multi-Agent Architecture]]'s Rule 5: **sophisticated orchestration, simple agents**. The orchestration layer is code. The agents are small, focused, and disposable.

| Mega-Agent | Micro-Agent Pipeline |
|------------|---------------------|
| 100 tools, generic prompt | 10 tools, specific prompt |
| LLM controls all flow | Code controls flow, LLM reasons at decision points |
| Hard to debug | Each micro-agent is testable in isolation |
| Fragile at scale | Robust — failure is contained |

### 7. Stateless Reducers

Agents should be treated as pure functions:

```
f(Context, Input) → Next Step
```

No hidden state. No session memory. Everything the agent needs is in the context window. This makes agents:
- **Resumable** — reload context from DB, continue
- **Testable** — same input always produces same output (modulo LLM variance)
- **Deployable** — no sticky sessions, no memory leaks

---

## Connection to Existing Concepts

### The Physics Thinking Stack

The twelve factors map cleanly onto the [[Physics Thinking]] enforcement spectrum:

| Factor | Layer | Why |
|--------|-------|-----|
| **Explicit state in DB** | Physics | Cannot lose state on crash |
| **Own control flow** | Physics | Code controls flow, not probabilistic LLM |
| **Compact errors** | [[Agent Ergonomics\|Ergonomics]] | Clean recovery signals, not raw failure tokens |
| **Own prompts** | Law | You control the instructions |
| **Micro-agents** | Architecture | [[Dumb Pipe Smart Edge\|Dumb pipe]] orchestration + smart edge agents |

### Scalable Multi-Agent Architecture

[[Scalable Multi-Agent Architecture]]'s five rules and the twelve factors converge:

| Scalable Architecture Rule | 12-Factor Equivalent |
|---------------------------|---------------------|
| Two tiers (planners + workers) | Micro-agent pipeline (orchestrator + focused agents) |
| Workers stay ignorant | Agents are stateless; context is curated |
| No shared state | State serialised to DB, not shared between agents |
| Plan for endings | Pause and resume; explicit breaks |
| Sophisticated orchestration | Own your control flow |

### Decompose-Route-Recompose

[[Decompose-Route-Recompose]]'s Research-Plan-Implement workflow is a specific instance of the twelve-factor approach: each phase is a micro-agent with its own context, producing a dense artifact for the next phase.

---

## The Meta-Insight

> **Frameworks abstract away the hard parts. But the hard parts are where production quality lives.**

The last 20% of reliability requires:
- Controlling every token (prompts)
- Managing every state transition (control flow)
- Curating every context window (compaction)
- Isolating every failure (micro-agents)

These are software engineering problems, not AI problems. The twelve factors are a reminder: **agents are just software.**

---

## See Also

- [[Scalable Multi-Agent Architecture]] — Five rules; micro-agents echo "simple agents + smart orchestration"
- [[Law vs Physics in Agent Design]] — LLM = Law (probabilistic); code/DB = Physics (deterministic)
- [[Dumb Pipe Smart Edge]] — State in DB (dumb pipe), reasoning in agent (smart edge)
- [[Contextual Breadcrumbs]] — Context engineering for what the agent sees
- [[Decompose-Route-Recompose]] — RPI as twelve-factor workflow in practice
- [[Agent Ergonomics]] — Compact errors = ergonomic context management
- [[Physics Thinking]] — The enforcement spectrum the factors map onto
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [12-Factor Agents — Dex Horthy, AI Engineer World's Fair (YouTube)](https://youtu.be/8kMaTybvDUw?si=Fo2ojzfBurz_9VCt)
- [humanlayer/12-factor-agents (GitHub)](https://github.com/humanlayer/12-factor-agents)

---

*Created [[2026-02-17]] — Extracted from Dex Horthy's 12-Factor Agents talk*
