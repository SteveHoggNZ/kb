# Agentic Primitives

Three building blocks that move AI from "pseudo-work" (summarising, briefing — tasks that still leave you reading) to "real work" (tasks genuinely off your desk). Together they function like having a team of engineers you can dispatch from your phone.

> **The one-sentence version:** Scheduled Tasks, Dispatch, and Computer Use are the primitives that turn AI from a chat assistant into a background workforce.

---

## Pseudo-Work vs Real Work

Most AI demos today show pseudo-work: the AI summarises an article, provides a proactive briefing, or drafts a response you still need to review. The user's desk doesn't get lighter — it gets a different pile.

**Real work** means genuine delegation: you hand off a commitment and it comes back done. The three primitives below are what make this possible.

| | Pseudo-Work | Real Work |
|--|------------|-----------|
| **Pattern** | AI assists → human still reviews/acts | AI executes → human receives completed output |
| **Example** | "Summarise this email thread" | "Reply to this thread, schedule the meeting, and update the project tracker" |
| **User's desk** | Same size, slightly reorganised | Actually lighter |
| **Autonomy level** | [[Agent Autonomy Levels|Level 1-3]] (wait, ask, recommend) | [[Agent Autonomy Levels|Level 4-5]] (act then report, act independently) |

---

## The Three Primitives

### 1. Scheduled Tasks — Your Computer in the Cloud

Prompts or scripts that run automatically on a schedule, regardless of whether your laptop is on.

**What it enables:**
- Recurring tasks that are important but non-urgent, running silently in the background
- Continuous monitoring without human attention

**Use cases:**
- Automatically syncing codebases across languages (Anthropic uses this internally)
- Compiling a daily morning briefing of domain-specific news
- Monitoring airline prices and alerting when they drop below a threshold
- Running nightly data quality checks

**The value:** Handles the "important but I'll never remember to check" category. [[Agent Autonomy Levels|Level 5]] autonomy — acts independently, you may never know unless something needs attention.

### 2. Dispatch — Mobile Orchestration Layer

Manage multiple persistent AI sessions in parallel, controlled from your phone.

**What it enables:**
- Spawning independent agent sessions that run concurrently on your desktop
- A mobile command centre: initiate complex tasks while away from your desk

**Use cases:**
- One agent doing competitor research while another drafts a report
- Dispatching three agents to prepare for tomorrow's meetings while you're commuting
- Handing off open commitments immediately instead of carrying the mental burden

**Current limitations:**
- Host desktop must remain on (expected to be resolved)
- File transfer between phone and desktop agents isn't seamless yet (workaround: sync via Google Drive/Dropbox)

**The value:** Parallel execution + location independence. This is [[Scalable Multi-Agent Architecture]] made personal — multiple simple agents grinding in parallel while you do something else entirely.

### 3. Computer Use — Rescuing Trapped Data

Claude interacts with applications via keyboard and mouse, like a human would — bridging the gap where APIs and MCP integrations don't exist.

**What it enables:**
- Accessing old databases, bespoke ERP screens, legacy CRMs
- Automating tedious manual data extraction from archaic systems

**Use cases:**
- Logging into a legacy system, pulling data, compiling it into a spreadsheet
- Navigating a vendor portal that has no API
- Filling forms across multiple systems that don't talk to each other

**The value:** Unlocks automation for the long tail of enterprise software that will never get an API. Turns hours of agonising manual work into a background task.

---

## The Manager Mindset

The biggest barrier to using these primitives isn't technical — it's behavioural. Users must shift from "do the work myself with AI assistance" to "delegate the work to agents."

[[The 2026 Builder Operating System]] calls this the **Engineering Manager Mindset**: manage AI like a team, not like a tool. Three specific habits:

### 1. Delegate Open Commitments Immediately

Throughout the day, we make promises: "I'll send you that revised scope by Thursday." Instead of carrying these as mental burden, dispatch them to an agent the moment you make the commitment.

This is [[Monkey Management]] applied to AI: the commitment is a "monkey" — don't let it sit on your back. Hand it to an agent immediately.

### 2. Gather Deep Context Before Deciding

Stop using AI for quick, low-context answers. Instead, dispatch an agent to gather comprehensive research *before* you need to make a decision. Let the agent spend 30 minutes going deep while you do other work.

This is [[Decompose-Route-Recompose]] at the individual level: decompose your decision into the research phase (agent) and the judgment phase (you).

### 3. Trust the Background Process

The hardest habit: trusting that the computer is doing the work without constantly checking. This is the same trust shift managers learn with human reports — micromanagement doesn't scale.

[[Agent Autonomy Levels]] maps this directly: the goal is to push agents from Level 3 (recommend, wait for approval) to Level 4-5 (act then report, act independently). Your job is to raise the autonomy ceiling, not lower it.

---

## Self-Hosted vs Managed Infrastructure

The speaker draws a useful analogy to historical infrastructure shifts:

| Era | Self-Hosted | Managed | What Won |
|-----|-----------|---------|----------|
| Email | Your own mail server | Gmail | Managed |
| Compute | Rack servers in a closet | AWS | Managed |
| AI Agents | Open-source orchestration (OpenClaw etc.) | Claude Dispatch | TBD — but managed enables mass adoption |

Self-hosted offers limitless freedom but requires managing servers, networking, and security. Managed infrastructure (like Dispatch) is the key to mass adoption — just like Gmail made email accessible to everyone, not just sysadmins.

---

## Connection to Existing Concepts

The three primitives map onto the KB's existing frameworks:

### Agent Autonomy Levels

[[Agent Autonomy Levels]] provides the five-level scale. The primitives collectively push agents toward Level 5:

| Primitive | Autonomy Level | Why |
|-----------|---------------|-----|
| **Computer Use** | Level 3-4 | Executes specific tasks, may need guidance on ambiguous screens |
| **Dispatch** | Level 4 | Acts and reports; user reviews output |
| **Scheduled Tasks** | Level 5 | Acts independently; user may never know |

### Scalable Multi-Agent Architecture

[[Scalable Multi-Agent Architecture]]'s Rule 1 (two tiers: planners + isolated workers) describes the architecture Dispatch enables at the individual level. You are the planner. Each dispatched agent is an isolated worker with minimum viable context.

### The Great Inversion

[[The Great Inversion]] says execution is cheap. The three primitives make this tangible: execution is now not just cheap but *background*. The meeting to discuss the work still takes your time. The work itself doesn't.

---

## See Also

- [[Agent Autonomy Levels]] — The five levels; primitives push toward Level 5
- [[Scalable Multi-Agent Architecture]] — Dispatch is personal multi-agent orchestration
- [[The 2026 Builder Operating System]] — Engineering Manager Mindset
- [[Commitment Loops]] — Pseudo-work vs real work; close loops by delegating to completion
- [[Monkey Management]] — Delegate commitments immediately
- [[Decompose-Route-Recompose]] — Research phase (agent) → judgment phase (human)
- [[Colleague vs Tool-Shaped AI]] — Dispatch enables Tool-shaped delegation at scale
- [[Intent Engineering]] — What agents need to act autonomously at Level 5
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Agentic Primitives — Scheduled Tasks, Dispatch, Computer Use](https://youtu.be/3e7gmNPr5Vo?si=5NBy1hiBPL7LHYUH) (YouTube, 2026)

---

*Created [[2026-02-24]] — Captured from video on Claude's agentic building blocks*
