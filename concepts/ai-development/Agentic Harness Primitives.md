# Agentic Harness Primitives

Building agents is **80% non-glamorous plumbing work and 20% AI.** The Claude Code leak revealed 12 infrastructure primitives — organised into three tiers — that sustain a $2.5B run-rate agentic product. None of them are about model intelligence. All of them are about backend engineering applied to agentic pipelines.

> **The one-sentence version:** The architecture of scale is boring. Permissions, crash recovery, token budgets, and event logging are what separate a demo from a product.

> [!tip] Relationship to Twelve-Factor Agents
> [[Twelve-Factor Agents]] covers the agent's relationship with LLMs and control flow (own your prompts, own your state, micro-agents). Agentic Harness Primitives covers the **infrastructure that sustains the agent at scale** — the plumbing underneath. They're complementary: Twelve-Factor tells you how to design the agent; Harness Primitives tells you how to keep it alive in production.

---

## Tier 1: Day-One Non-Negotiables

These are the primitives most teams consider late or never. They should be built before any agent logic.

### 1. Metadata-First Tool Registry

**Pattern:** Define capabilities as a data structure before writing implementation code. The registry answers "what exists and what does it do" without executing anything.

**Claude Code's implementation:** Two parallel registries — a command registry (207 entries for user-facing actions) and a tool registry (184 entries for model-facing capabilities). Every entry carries a name, source hint, and responsibility description. Implementations load on demand from the registry.

**Why it matters:** Without a clean tool registry, you can't filter tools by context, you can't introspect without triggering side effects, and every new tool requires changes to orchestration code. The registry is the foundation everything else builds on.

**Build this:**
- A `listTools()` function that returns metadata for all capabilities without invoking them
- Runtime filtering by context, mode, or permission level
- Each tool defined by name + short description before any model interaction

### 2. Risk-Segmented Permission System

**Pattern:** Not all tools carry the same risk. Categorise risk and apply different approval tiers per category. Permissions are not a boolean gate — they're a first-class object.

**Claude Code's implementation:** Three trust tiers:

| Tier | Trust Level | Example |
|------|-----------|---------|
| **Built-in** | Highest — always available | Core file operations |
| **Plugin** | Medium — can be disabled | MCP server tools |
| **Skill** | Lowest — user-defined | Custom skills |

The Bash tool alone has an **18-module security architecture**: pre-approved command patterns, destructive command warnings, git-specific safety checks, sandbox determination. Three separate permission handlers serve different contexts: interactive (human-in-the-loop), coordinator (multi-agent orchestrator), and swarm worker (autonomous execution).

**Why it matters:** If your agent can execute code, call APIs, send messages, or modify files without a permissions layer, you have a demo, not a product. An 18-module security stack for a single tool isn't paranoia — it's what separates safe operation at scale from a notebook experiment.

This maps directly to [[Law vs Physics in Agent Design]]: permissions are **Physics** — they cannot be bypassed regardless of what the LLM wants to do.

**Build this:**
- Pre-classification: read-only / mutating / destructive
- Pre-approved patterns: known-safe commands that skip approval
- Destruction detection: flag actions that delete or overwrite
- Domain-specific safety: targeted checks for your risk vectors
- Permission logging: every decision (granted/denied) recorded with context to replay

### 3. Session Persistence That Survives Crashes

**Pattern:** Your agent session is not just conversation history. It's a recoverable state that includes conversation, usage metrics, permission decisions, and configuration. If any are missing on resume, the session won't work the same.

**Claude Code's implementation:** Sessions persist as JSON files capturing session ID, messages, token usage (in/out), and full query engine state. A crash triggers: load → reconstruct transcript → restore counters → return fully functional engine.

**Why it matters:** Agents crash. Connections drop. Users close tabs. If your agent can't reliably resume — including what tools were available, what permissions were granted, how many tokens were consumed — every interruption is a restart, and every restart is a degraded experience.

**Build this:**
- A session state structure capturing everything needed to resume
- Persist after every significant event, not just at shutdown
- A `resumeSession()` function that reconstructs full agentic state, not just conversation history

### 4. Workflow State ≠ Conversation State

**Pattern:** Resuming a conversation is not the same as resuming a workflow. Chat transcript answers "what have we said?" Workflow state answers "what step are we in, what side effects have happened, is this safe to retry?"

**Why it matters:** Almost every agentic framework conflates conversation state with task state. They're different problems with different solutions. Without workflow state, your agent will survive a crash but may duplicate writes, double-send messages, or re-run expensive operations because it doesn't know where it was in the *task*.

**Build this:**
- Model long-running work as explicit states: `planned`, `awaiting_approval`, `executing`, `waiting_on_external`, `completed`
- Persist checkpoints frequently ("save your game every two seconds")
- Know whether a step is safe to retry (idempotent) or must be skipped on resume

This connects to [[Commands That Emit Events]] and the [[Outbox Pattern]] — if your agent uses event-driven side effects, the outbox guarantees exactly-once semantics even across crashes.

### 5. Strict Token Budgeting

**Pattern:** Prevent runaway loops and unexpected costs by enforcing limits *before* API calls are made, not after.

**Claude Code's implementation:** The query engine defines hard limits: maximum turns per conversation, maximum token budget, and a compaction threshold. Every turn calculates projected usage. If the projection exceeds budget, execution stops with a structured stop reason *before* the API call.

**Why it matters:** Without budget tracking, you'll discover you've exceeded limits after the damage is done. Claude Code puts in checks that aren't beneficial to Anthropic's short-term revenue — they prevent runaway spending to build long-term customer trust. Like Amazon's return policy: short-term cost, long-term loyalty.

**Build this:**
- Input token budget + output token budget per session
- Per-turn projection that checks budget *before* calling the API
- Graceful stop with structured reason, not a crash
- Hard stops as non-negotiable [[Law vs Physics in Agent Design|Physics]]

### 6. Structured Streaming Events

**Pattern:** Streaming isn't just about showing text. Every streaming event is an opportunity to communicate system state: what tools the agent is considering, how many tokens consumed, whether it's wrapping up.

**Claude Code's implementation:** The query engine emits typed events: `message_start`, `command_match`, `tool_match`, plus a special crash event with a reason as the last message if something goes wrong — a "black box" from the crash.

**Why it matters:** Users can see what the agent is thinking and intervene if it goes off track. The speaker notes he constantly reads Claude's stream-of-thought and interrupts when he sees it heading in the wrong direction. This is only possible with structured events, not raw text.

**Build this:**
- Typed events with a defined schema (not freeform text)
- Events for: tool selection, token consumption, phase transitions, completion
- A crash event that captures the failure reason as the final stream message

### 7. Dual-Level Verification

**Pattern:** Verify both the agent's work *and* the system housing the agent.

| Level | What It Verifies | Example |
|-------|-----------------|---------|
| **Level 1: Agent work** | Did this specific run produce correct output? | Agent checks its own work as a distinct step |
| **Level 2: Harness integrity** | Do core guardrails still work after a code change? | Automated tests: "Do destructive tools still require approval?" |

**Why it matters:** Level 1 is obvious. Level 2 is critical and rarely built: when you update the harness, you need confidence that you haven't accidentally broken permissions, crash recovery, or budget enforcement. The harness evolves — your verification must evolve with it.

### 8. System Event Logging

**Pattern:** When something goes wrong, the conversational transcript tells you what the agent *said*. System event logging tells you what it *did*.

**Claude Code's implementation:** A separate history log of system events — context loads, registry initialisation, routing decisions, execution counts, permission approvals/denials. Every event has a category and structured details for reconstruction.

**Why it matters:** This is what you build when you intend for enterprise. You need to provably reconstruct what happened during any agentic run. Conversation transcripts are insufficient — they don't capture tool invocations, permission decisions, or routing logic.

---

## Tier 2: Operational Maturity

Deeper lessons for systems that need to scale and maintain themselves over time.

### 9. Dynamic Tool Pool Assembly

**Pattern:** Don't give the agent every tool on every run. Assemble a session-specific "shortlist" based on mode, permissions, and current task context.

**Claude Code's implementation:** With 184 registered tools, Claude assembles a targeted subset per session based on mode flags, permission context, and deny lists. The agent picks from this filtered pool, not the full catalogue.

**Why it matters:** Tool overload degrades model performance. A focused tool set produces better tool selection. This is the same insight as [[Twelve-Factor Agents]]' "micro-agents over mega-agents" (~10 tools) — but applied at the registry level rather than the agent level.

### 10. Automatic Transcript Compaction

**Pattern:** Conversation history is a token-expensive resource. Manage it automatically, not manually.

**Claude Code's implementation:** Auto-compaction after a configurable number of turns. Keeps recent entries, discards older ones. The transcript store tracks whether it's been persisted to avoid data loss during compaction.

**Why it matters:** This is [[Context Distillation Loop - amnesia as a feature|Context Distillation]] operationalised in the harness. Long-running agents accumulate context that degrades reasoning (the "Dumb Zone" from [[Decompose-Route-Recompose]] — >40% context = degraded performance). Automatic compaction keeps the agent sharp.

### 11. Permission Audit Trail

**Pattern:** Permissions aren't a boolean gate. Permission state is a first-class object that is easy to query, categorise, and audit.

**Claude Code's implementation:** Three separate permission handlers for three contexts:

| Handler | Context | Use Case |
|---------|---------|----------|
| **Interactive** | Human-in-the-loop | User approves/denies in real-time |
| **Coordinator** | Multi-agent orchestration | Orchestrator agent grants permissions to workers |
| **Swarm Worker** | Autonomous execution | Pre-authorised within defined boundaries |

**Why it matters:** Different agent topologies need different permission models. A human-supervised agent, a coordinated multi-agent system, and an autonomous background worker all need permissions — but the approval flow is fundamentally different for each.

### 12. Sharply Constrained Agent Types

**Pattern:** Don't spawn identical agent clones. Define specific, constrained agent types with their own prompts, allowed tools, and behavioural constraints.

**Claude Code's implementation:** Six built-in agent types:

| Type | Constraint | Cannot |
|------|-----------|--------|
| **Explore** | Read-only investigation | Edit files |
| **Plan** | Architecture and strategy | Execute code |
| **Verify** | Check correctness | Modify anything |
| **Guide** | User education | Take actions |
| **General Purpose** | Full capabilities | — |
| **Status Line Setup** | Configuration only | General tasks |

**Why it matters:** This echoes [[Scalable Multi-Agent Architecture]]'s Rule 2 (workers stay ignorant) and Rule 5 (sophisticated orchestration, simple agents). The constraint isn't about trust — it's about focus. An agent that physically cannot edit files will never accidentally edit files, regardless of what the LLM hallucinates. This is [[Law vs Physics in Agent Design|Physics]] applied to agent role design.

---

## The Meta-Principles

Three themes run through all 12 primitives:

### 1. Assume Failure

Good engineering assumes the agent will crash, APIs will drop, and users will close tabs. Every primitive above plans for failure: crash recovery (3), workflow checkpoints (4), budget stops (5), crash events (6), event logging (8). Build around graceful failure and exact state recovery.

### 2. Bias Toward Simplicity

The most common failure mode in agentic systems isn't under-engineering — it's **over-engineering**. Building complex multi-agent coordination before having a working permission system. Implementing a plugin marketplace before sessions can survive crashes.

> Start with a lean, single-agent design. Premature complexity is where most projects go to die.

### 3. Velocity vs Operational Discipline

The leak itself illustrates the tension: when AI writes 90% of your code and engineers ship 5+ releases per day, the surface area for configuration drift is enormous. Two significant Anthropic leaks in one week (Claude Mythos blog + Claude Code source map) suggest velocity outran operational discipline. The fix isn't slowing down — it's exactly the "boring" primitives above: build pipeline validation, publish-step checks, the plumbing that prevents accidents at speed.

---

## Connection to Existing Concepts

### Twelve-Factor Agents + Harness Primitives = Complete Picture

| Twelve-Factor Agents | Harness Primitives |
|---------------------|-------------------|
| Own your control flow | Workflow state separate from conversation |
| Own your prompts (Context Engineering) | Dynamic tool pool assembly |
| Manage state in DB | Session persistence + crash recovery |
| Compact errors | Structured streaming events + event logging |
| Micro-agents (~10 tools) | Dynamic tool pool + constrained agent types |
| Humans as tools | Risk-segmented permissions (interactive handler) |

### Law vs Physics Throughout

[[Law vs Physics in Agent Design]] permeates the harness:
- **Permissions** = Physics (cannot be bypassed)
- **Token budgets** = Physics (hard stop before API call)
- **Agent type constraints** = Physics (Explore agent physically cannot edit)
- **Streaming events** = [[Agent Ergonomics|Ergonomics]] (makes correct intervention intuitive)
- **Workflow state** = Physics (idempotency prevents duplicate actions)

---

## See Also

- [[Twelve-Factor Agents]] — Agent design principles; Harness Primitives covers the infrastructure underneath
- [[Law vs Physics in Agent Design]] — Permissions, budgets, and type constraints as Physics
- [[Scalable Multi-Agent Architecture]] — Constrained agent types echo "simple agents + smart orchestration"
- [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]] — Transcript compaction as operationalised distillation
- [[Decompose-Route-Recompose]] — The Dumb Zone; why compaction matters
- [[Commands That Emit Events]] — Outbox pattern for crash-safe side effects
- [[Agent Autonomy Levels]] — Permission tiers map to autonomy levels
- [[Intent Engineering]] — What the harness needs from business leaders to operate at Layer 3
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Claude Code Leak: 12 Primitives for Production Agents](https://youtu.be/FtCdYhspm7w?si=AMGEVQG7LG6HYYZD) (YouTube, 2026)

---

*Created [[2026-02-24]] — Extracted from Nate B. Jones analysis of the Claude Code source leak*
