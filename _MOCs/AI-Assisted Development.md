# AI-Assisted Development

How to work effectively when execution is cheap and abundant.

## The Paradigm Shift

> The chaos people feel right now isn't random; it is the friction caused by using **scarcity-mindset habits** in an **abundance-mindset reality**.

AI has inverted the economics of work. For decades, execution was expensive (engineering time was scarce), so we built habits to protect it. Now execution is cheap—but we're still using habits designed for the old world.

---

## Core Principles

### [[concepts/ai-development/The Great Inversion|The Great Inversion]]
The meeting to discuss the work now costs more than doing the work. The PRD takes longer than shipping the prototype. Stop protecting execution time; start optimizing for clarity and speed.

### [[concepts/ai-development/The Barbell Economy|The Barbell Economy]]
AI creates a bifurcated economy: digital/contestable markets get crushed (mid-tier agencies, software shops), while physical/local markets are protected (trades, healthcare). Three layers of value: Layer 1 (tokenizable cognition) → collapsing to zero. Layer 2 (judgment/accountability) → the new bottleneck. Layer 3 (physical execution) → protected by atoms.

---

## The New Bottlenecks

Since execution is no longer the bottleneck, efficiency is no longer the goal. The bottleneck has shifted:

| Old Bottleneck | New Bottleneck |
|----------------|----------------|
| Engineering time | **Clarity** — knowing what's worth building |
| Technical ability | **Ambition** — the risk is timidity, not failure |
| Product quality | **Distribution** — anyone can build; the moat is reach |
| Hard skills | **Relationships** — trust is the durable advantage |

---

## Strategies & Techniques

### [[concepts/ai-development/The New SDLC with Vibe Coding|The New SDLC with Vibe Coding]]
Google whitepaper (Osmani, Saboo, Kartakis, May 2026) mapping the move from ad-hoc prompting to **agentic engineering**. Frames vibe coding ↔ agentic engineering as a *spectrum* whose differentiator is how outputs get verified (tests + evals, not "does it seem to work?"). Core models: **context engineering** (six context types; static vs dynamic; Agent Skills), the **factory model** (your output is the system that produces code), the harness equation **Agent = Model + Harness**, and the **conductor ↔ orchestrator** developer role. Closes with CapEx/OpEx economics of the token economy and a where-to-start checklist for individuals, leaders, and orgs. Source PDF in vault. *"Generation is solved. Verification, judgment, and direction are the new craft."*

### [[concepts/ai-development/Optimizing GitHub Copilot Cost|Optimizing GitHub Copilot Cost]]
Practitioner's guide to Copilot spend under **usage-based billing** (Premium Request Units → **GitHub AI Credits** as of June 2026, billed on input/output/cached tokens). Core reframe: *"the right model, context, and automation for this task."* Levers: **right-size the model** (start cheap, escalate only for deep reasoning), **scope context** (name files/ranges, don't paste whole logs), **lean on inline completions** (not billed against AI credits on paid plans), and keep agent sessions short (history re-sends every turn). Cost control and quality are the same lever — the tool-level version of [[concepts/ai-development/The New SDLC with Vibe Coding|context engineering as a financial lever + intelligent model routing]].

### [[concepts/ai-development/Code Knowledge Graphs for Agents|Code Knowledge Graphs for Agents]]
Tools that pre-map a codebase (functions, classes, modules + relationships) so an agent resolves "how do these connect?" in **one tool call** instead of grepping file-by-file — the video cites a **58% drop in tool calls**. Three approaches compared: **Graphify** (multi-modal breadth + best visualization, MIT), **GitNexus** (cross-repo/microservice architecture, 17 tools, PolyForm Noncommercial), **CodeGraph** (zero-maintenance auto-sync, strong on dynamic code, just **1 MCP tool**, MIT). Shared ceiling: static-only, no runtime analysis. The retrieval-substrate answer to "grep doesn't scale" from [[concepts/ai-development/Scaling Agents in Large Codebases|Scaling Agents in Large Codebases]] and an instance of [[concepts/ai-development/Structure-Preserving Data|Structure-Preserving Data]].

### [[concepts/ai-development/Writing Great Skills|Writing Great Skills]]
Matt Pocock's "missing manual" — a shared rubric for escaping **"Skill Hell"** (lots of skills, no way to judge quality). Four checks: **Trigger** (prefer user-invoked over probabilistic model-invoked), **Structure** (split Steps vs Reference, keep `SKILL.md` minimal, hide branch templates behind context pointers = progressive disclosure), **Steering** ("leading words"/lightvert to seed a phrase the agent must repeat; split a skill in two to force legwork by hiding future steps), and **Pruning** (DRY, clear the "sediment", apply the deletion test to no-ops). The authoring-craft layer beneath [[concepts/ai-development/GitHub Copilot Skills and Plugins|GitHub Copilot Skills and Plugins]].

### [[concepts/ai-development/AI Second Brain Architecture|AI Second Brain Architecture]]
Move from passive note storage to active AI loops. The system classifies, routes, summarizes, and surfaces information without you having to remember to do so. Eight building blocks + 12 engineering principles for non-engineers.

### [[concepts/ai-development/Visual AI as Infrastructure|Visual AI as Infrastructure]]
The highest leverage for visual AI is not making creatives faster — it's automating the "see and show" capabilities of the enterprise. Treat it as infrastructure (300% gains) not a point solution (30% gains). Humans shift from "visual bridge" to "exception handler."

### [[concepts/ai-development/Agents vs Long Context|Agents vs Long Context]]
A trade-off between iterative discovery (agents) and holistic synthesis (long context). Agents simulate a worker traversing a maze; long context simulates an architect looking at blueprints. Use agents for action/execution, long context for insight/synthesis. Strategists gravitate toward long context because they optimize for high-leverage intervention points.

### [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop - amnesia as a feature]]
Session boundaries aren't bugs — they're cognitive discipline. Each new session forces re-articulation, which progressively distills thinking to its essence. The hybrid workflow orchestrates long context (synthesis), agents (scrutiny), and session boundaries (distillation) in dialogue. What survives multiple re-articulations is the signal.

### [[Teams Of Agents - LLM Specialisation+Personas|LLM Specialization and Multi-Persona - Teams Of Agents]]
Specialization navigates the model to high-quality "corners" of latent space by constraining vocabulary → which constrains logic → which produces better output. Multi-persona setups (ensemble effect) break the "yes-man" consistency loop, fact-check hallucinations, and allow cognitive division of labor. Three simulated experts beat one generalist.

### [[concepts/ai-development/The Inverted Causality of Language|The Inverted Causality of Language]]
In humans, expertise produces expert language (language is a *symptom* of thought). In LLMs, expert language produces expertise-shaped output (language is a *driver* of "thought"). The arrow of causality is reversed — and the output can look identical. This is the deeper "why" behind persona prompting and distribution conditioning. Explains why vocabulary seeding is the primary lever, and why fluency is not a reliable signal of correctness.

### [[concepts/ai-development/Commitment Loops|Commitment Loops]]
Every promise opens a loop in your brain that buzzes until completed. The highest-ROI agent use case is **closing these loops immediately** — not by drafting or summarising (pseudo-work that keeps loops open), but by executing to completion (real work that closes them). The test: after the AI finishes, is the task *done*? "A summary for you to read" = pseudo-work. "A report sent for you" = real work. Extends [[Monkey Management]] to self-directed promises; requires Level 4-5 [[Agent Autonomy Levels|autonomy]] and the [[The 2026 Builder Operating System|Manager Mindset]].

### [[concepts/ai-development/Outcome Agent Architecture|Outcome Agent Architecture]]
A three-layer architecture for building custom, outcome-focused AI agents. Layer 1: **Knowledge Store** (persistent memory — feed and ground the agent). Layer 2: **Agent Recipes** (pre-wired workflows that produce editable artifacts, not chat). Layer 3: **Scheduling Loop** (autonomous runs that write learnings back to the Knowledge Store, compounding context over time). Organises [[Agentic Primitives]] into a coherent system and extends [[AI Second Brain Architecture]] from capture into action. Open-source implementation: Open Brain.

### [[concepts/ai-development/Agentic Primitives|Agentic Primitives]]
Three building blocks that move AI from "pseudo-work" (summarising, briefing) to "real work" (tasks genuinely off your desk): **Scheduled Tasks** (your computer in the cloud — recurring background work), **Dispatch** (mobile orchestration of parallel agent sessions), and **Computer Use** (rescuing trapped data from legacy systems with no APIs). Together they push agents toward [[Agent Autonomy Levels|Level 5]] autonomy. Requires the **Manager Mindset**: delegate open commitments immediately, gather deep context before deciding, trust the background process. Managed infrastructure (like Dispatch) enables mass adoption, just as Gmail replaced self-hosted mail servers.

### [[concepts/ai-development/Conway and Intelligence Portability|Conway and Intelligence Portability]]
Anthropic's leaked "Conway" agent — an always-on, Level 5 autonomous agent with webhook triggers, an extension app store, and accumulated behavioural context. The real lock-in isn't data portability (exportable) but **intelligence portability** (not exportable): months of learned preferences, communication patterns, and workflow habits that can't transfer between vendors. Anthropic's five-product enterprise strategy mirrors Microsoft's 1990s arc compressed into 15 months. Conway builds proprietary extensions on top of MCP (the Google Play strategy: open standard for adoption, proprietary layer for value capture). Validates the [[Outcome Agent Architecture]] three-layer pattern but locks all layers inside Anthropic's stack. Strategic foil for AMP's model-agnostic, sovereignty-first approach.

### [[concepts/ai-development/The Implementation Layer|The Implementation Layer]]
The moat in enterprise AI is not the model, the data, or the API — it's the **Implementation Layer**: the custom harness making a model enterprise-grade. Six components (Workflow Design, Data Access, Authority Frameworks, Evals, Audit Trails, Recovery & Ownership) define what it takes to move an agent from demo to production. Four competitive axes squeeze the market: frontier labs moving down-stack, consultancies moving up-stack, systems of record exposing APIs, and private equity acting as distribution channels. "Generic SaaS all tasted like chicken" — agentic value is the opposite, relying entirely on bespoke customisation. Bridges [[The Bottleneck Economy]]'s Integration Gap; scales [[Harnesses Matter More Than Models]] to enterprise strategy; the six components are the enterprise translation of [[Agentic Harness Primitives]].

### [[concepts/ai-development/Structure-Preserving Data|Structure-Preserving Data]]
When you flatten structured data into text for an AI agent, you destroy meaning. Tables lose row-column relationships, documents lose section hierarchy, graphs lose traversal paths. **Agents need knowledge in the shape the business uses it.** Semantic similarity doesn't capture structural relationships — two cells in the same table row are structurally related but semantically distant. Preserve native formats (tables as tables, graphs as graphs), match retrieval units to work types, define the data contract before choosing infrastructure. This is [[Law vs Physics in Agent Design|Physics]] for agent data pipelines: a human reader compensates for lost structure, an agent acts on what it receives. AMP's frame system is structure-preserving by design — JSON patches, not text descriptions.

### [[concepts/ai-development/Agent Memory Architecture|Agent Memory Architecture]]
Classic RAG and vector search were built for chatbots — semantically similar text chunks dumped into context. Agents need **structured operating context**: intent, access policies, data provenance, confidence levels. Three principles: (1) shape data to match how the business uses it (tables stay tables, graphs stay graphs), (2) retrieval units must match the work (FAQ = chunk, support = full customer record, ops = compiled brief), (3) define the contract before choosing infrastructure. The **Bundle Pattern**: write a specific manifest of every data piece the agent needs per workflow — not vague "relevant context." Three steps: define contract → define bundle → choose primitives. Extends [[Outcome Agent Architecture]] Layer 1 with internal structure; offers portable memory as a counter to [[Conway and Intelligence Portability|Conway's]] opaque behavioural lock-in.

### [[concepts/ai-development/Scaling Agents in Large Codebases|Scaling Agents in Large Codebases]]
Seven tactics for building an AI layer that lets coding agents work in massive repos. Core principle: **context discipline scales, context overload doesn't.** (1) Lean global CLAUDE.md — only stack, architecture, conventions, commands. (2) Layer rules via subdirectory CLAUDE.md files. (3) Scope working directory to the task area. (4) Start hooks inject dynamic context (git history, external docs); stop hooks trigger headless Claude to auto-update rules — [[Context Distillation Loop - amnesia as a feature|Context Distillation]] made automatic. (5) Path-scoped skills activate only in relevant subdirectories. (6) LSP via custom MCP servers for precise symbol navigation instead of grep. (7) Sub-agents for exploration vs editing — [[Decompose-Route-Recompose]] in practice. Organisational adoption: a champion team builds the standard AI layer during a quiet investment period.

### [[concepts/ai-development/Agentic Harness Primitives|Agentic Harness Primitives]]
Building agents is **80% plumbing, 20% AI.** Twelve infrastructure primitives from the Claude Code leak, in three tiers. **Day-one non-negotiables:** metadata-first tool registry (207 commands + 184 tools), risk-segmented permissions (18-module security for Bash alone), session persistence that survives crashes, workflow state ≠ conversation state, strict token budgeting, structured streaming events, dual-level verification, system event logging. **Operational maturity:** dynamic tool pool assembly, automatic transcript compaction, permission audit trail (three handler types), sharply constrained agent types (Explore/Plan/Verify/Guide/General/StatusLine). Three meta-principles: assume failure, bias toward simplicity, velocity must not outrun operational discipline. Complements [[Twelve-Factor Agents]] (agent design) with infrastructure that sustains agents at scale.

### [[concepts/ai-development/Scalable Multi-Agent Architecture|Scalable Multi-Agent Architecture]]
The "human team" fallacy: mimicking human collaboration fails at scale. Coordination overhead kills parallelism. Five rules: (1) Two tiers not teams (planners + isolated workers), (2) Workers stay ignorant (minimum viable context), (3) No shared state (3-5 tools max), (4) Plan for endings (episodic operation), (5) Sophisticated orchestration, simple agents. At scale, 10,000 dumb workers beat 100 smart ones. *Contrasts with Multi-Persona approach — different tools for different scales.*

### [[concepts/ai-development/Twelve-Factor Agents|Twelve-Factor Agents]]
Agents are just software — apply sound engineering principles. LLMs are pure functions (tokens in, tokens out); "tool use" is just JSON → switch statement → function. Key factors: own your control flow (don't let LLMs loop forever), own your prompts (frameworks hide the hard parts), manage state explicitly in a database (pause/resume), compact errors (don't feed failure tokens back), humans as tools (not special architecture), and micro-agents over mega-agents (~10 tools, ~20 steps). Frameworks abstract the hard parts, but the hard parts are where production quality lives.

### [[concepts/ai-development/Law vs Physics in Agent Design|Law vs Physics in Agent Design]]
Law (prompts) tells agents what to do; Physics (platform/API) ensures they can't do what they shouldn't. Law is voluntary and degrades under context pressure. Physics is involuntary — a 429 is a 429. **Design rule:** For every Law, ask "What happens when the agent ignores this?" If catastrophic → add Physics. Both layers are necessary: Law without Physics → agents drift; Physics without Law → agents crash blindly.

### [[concepts/ai-development/Trinity Protocol|Trinity Protocol]]
Multi-agent coordination framework with three primitives: **Semaphore** (state — `_data` frames), **Bell** (signal — mentions), **Watchdog** (entropy — timers). One Law: "Show and Tell" — when you complete work, patch the state AND mention the next agent. Physics backstops: Watchdog timers fire if no handoff arrives; Sticky Streams auto-coalesce entries within 3s window. A concrete implementation of [[Law vs Physics in Agent Design|Law vs Physics]] for coordination.

### [[concepts/ai-development/Contextual Breadcrumbs|Contextual Breadcrumbs]]
Solve LLM context amnesia by injecting reminders into tool results — the last thing an agent reads before its next thought. Borrows **stigmergy** from biology: agents leave trails in thread metadata, the platform echoes them back at perfect recency. Three primitives: `on_turn_reminder` (whisper per turn), `on_close_reminder` (post-close instruction), `require_collection_status` (blocking validation). Physics for critical paths, [[Agent Ergonomics|Ergonomics]] for everything else.

### [[Strategic vs Tactical Documentation|Strategic vs Tactical Documentation - Split Documentation]]
Two-tier documentation for AI agent consumption. Strategic (the WHY) = stable, foundational, load at session start. Tactical (the HOW) = volatile, actionable, load per-task. Stability correlates with importance — things that change least are foundational constraints that must always be respected.

### [[concepts/ai-development/Colleague vs Tool-Shaped AI|Colleague vs Tool-Shaped AI]]
Choose AI shape based on task clarity: Colleague (Claude) = active collaborator, continuous feedback, discover "correct" through iteration. Tool (Codex) = autonomous agent, precise spec up front, executes without interruption. The vital skill is High-Quality Intent Specification. Senior engineers prefer Tool (can write specs); juniors prefer Colleague (need dialogue).

### [[concepts/ai-development/The 2026 Builder Operating System|The 2026 Builder Operating System]]
Six practices that separate the top 1% of builders: Engineering Manager Mindset (manage AI like a team), Kill the Contribution Badge (measure by impact not LOC), Altitude Shifting (zoom in/out fluidly), Temporal Separation (deep work vs shallow), Two Types of Architecture (Type 1 delegatable, Type 2 taste is not), Experience Not Compressible (judgment can't be fast-forwarded). The bottleneck has moved from AI capability to human cognitive architecture.

### [[concepts/ai-development/The 15 AI Commandments|The 15 AI Commandments]]
An *organisational* operating system for shipping at AI-native startup pace: push repeatable human coordination into code so humans focus on judgment, taste, and speed. Fifteen rules grouped into three interlocking systems — **Product in Code** (PMs/designers work in the terminal daily; no roadmaps; protect engineering time), **Writing** (replace standing meetings with rigorous docs because agents need precise written intent), and **Human Culture** (assume best intent, bring complete fixes not complaints, build as a team, imitate the faster / teach the slower). The key insight: it's a system, not a menu — adopt the permissions (fewer meetings, no roadmaps) without the disciplines (writing, terminal presence, culture) and it collapses. Org-layer companion to the [[concepts/ai-development/The 2026 Builder Operating System|Builder OS]].

### [[concepts/ai-development/Agentation - UI Element Annotation|Agentation (UI Element Annotation)]]
Visual feedback instrument for AI coding agents. Click page elements, annotate them, and generate structured markdown with CSS selectors that help AI agents locate corresponding code. Bridges the gap between "that button" (visual) and grep-searchable selectors (code). A tool for High-Quality Intent Specification.

### [[concepts/ai-development/GitHub Copilot Skills and Plugins|GitHub Copilot Skills and Plugins]]
GitHub's extensibility model for Copilot agents. Skills (`.github/skills/SKILL.md`) are agent-discoverable, agent-executable behaviours — the key distinction from prompts. Plugins bundle skills, agents, MCPs, and instructions as deployable units via a GitHub repo marketplace. The reactive-to-agentic progression (Zone 1 → Zone 2 → Zone 3) maps adoption maturity: ghost text → workspace chat → autonomous workflows. Sensei (open-source) automates skill refinement via the Ralph loop. Our ADC artefacts are structurally equivalent to Custom Skills; our RPI methodology could be packaged as a `.github/skills/brownfield-refactoring/` skill.

### [[concepts/ai-development/Reductions Not Projections|Reductions, Not Projections]]
*(Coming soon)*

---

## Anti-Patterns to Break

### [[concepts/ai-development/Eight Habits to Break|Eight "Risk Management" Habits to Break]]
Habits we cling to that now slow us down:

1. **The Permission Loop** — Ask before doing → Default to doing
2. **Polish as Procrastination** — Make it perfect → Ship ugly and fast
3. **Meetings as Default** — Gather to align → Replace meeting with demo
4. **Structured Waiting** — Wait for approval → Don't outsource momentum
5. **Inverted Planning** — Massive planning phase → Cut planning by 90%
6. **Deck instead of Demo** — Build consensus via PowerPoint → Build consensus via results
7. **Consensus before Action** — Get agreement first → Act to create alignment
8. **Hoarding until Ready** — Don't show unfinished work → Show raw work immediately

---

### [[concepts/ai-development/Seven Dimensions of Hard Work|Seven Dimensions of Hard Work]]
We've been lazy in defining "hard work." Disentangles difficulty into seven dimensions: (1) **Reasoning** — deep logic, solved by pure intelligence (Gemini), (2) **Effort** — massive volume, solved by agents (Opus/Claude), (3) **Coordination** — alignment between entities, emerging AI-assist, (4) **EQ** — reading unstated human dynamics, human domain, (5) **Judgment/Courage** — having the nerve to execute, human domain, (6) **Domain Expertise** — pattern matching from lived experience, contested frontier, (7) **Ambiguity** — defining what the problem even is, human domain. Refines [[The Barbell Economy|Barbell Economy]]'s Layer 2 into four distinct capabilities.

### [[concepts/ai-development/Intent Engineering|Intent Engineering]]
The missing discipline above Context Engineering. Context tells the AI what to *know*; Intent tells it what to *want*. Three layers to bridge the gap: unified context infrastructure, coherent AI worker toolkit, and the goal translation layer (trade-off hierarchies, decision boundaries, feedback loops). Without intent alignment, capable agents efficiently optimise for the wrong things — the Klarna cautionary tale and Copilot's 5% deployment rate illustrate the cost. Operationalises [[The Barbell Economy|Barbell Economy]]'s Layer 2; encodes [[Seven Dimensions of Hard Work|Dims 4-7]] into machine-actionable parameters.

### [[concepts/ai-development/Preparing for Next-Gen AI Models|Preparing for Next-Gen AI Models]]
The "bitter lesson" of AI scaling applied to production workflows: as model intelligence increases, human-imposed structure should decrease. Eight principles for stripping scaffolding — procedural prompts, hand-crafted retrieval, intermediate review gates — before next-gen models make it obsolete. The meta-pattern: optimal harnesses shift from complex orchestration to clean data + clear intent + hard guardrails.

### [[concepts/ai-development/Decompose-Route-Recompose|Decompose-Route-Recompose]]
The meta-skill for the AI era. **Decompose** complex work into sub-problems by [[Seven Dimensions of Hard Work|dimension]], **Route** each to the right engine (deep-think model, agent swarm, human), **Recompose** with taste and judgment. Includes the brownfield application (Research-Plan-Implement): break codebase work into three phases with fresh context windows and dense handoff artifacts (`research.md` → `plan.md` → code). Sub-agents aren't personas — they're context isolators. Review shifts from code to plans. The 40% Rule: compact when context exceeds 40%.

---

## Synthesis

### [[concepts/ai-development/Scarcity to Abundance - A Unifying Lens|Scarcity to Abundance: A Unifying Lens]]
The Great Inversion isn't just about AI — it's a lens that reframes Leadership, Teams, and Systems Thinking. Monkey Management, Scrum Critique, and other concepts all describe the same shift from scarcity behaviors to abundance behaviors.

---

## Related MOCs

- [[Design Principles]] — The technical practices that remain timeless
- [[Leadership & Teams]] — How team dynamics change with AI
- [[Decision Frameworks]] — Clarity becomes the key bottleneck

---

## Sources

- [The Great Inversion (YouTube)](https://youtu.be/hpDC29JdgjI)
- [The Barbell Economy (YouTube)](https://youtu.be/5Et9WoDCsYs)
- [Visual AI as Infrastructure (YouTube)](https://www.youtube.com/watch?v=Nt7vzMiE0mY)
- [Colleague vs Tool-Shaped AI (YouTube)](https://www.youtube.com/watch?v=hDpjMJw3flk)
- [The 2026 Builder Operating System (YouTube)](https://www.youtube.com/watch?v=RadhS7Jl9sU)
- [Scalable Multi-Agent Architecture (YouTube)](https://youtu.be/2EXyj_fHU48?si=tgjOMKUOdZKp6uBT)
- [Preparing for Claude Mythos (YouTube)](https://youtu.be/hV5_XSEBZNg?si=oeiJO2vhpaspfd5i)
- [Outcome Agent Architecture (YouTube)](https://youtu.be/D-Ww1wLIp60?si=F7rJze31TCv59OJK)
- [Conway Leak: Intelligence Portability & Enterprise Lock-In (YouTube)](https://youtu.be/ro5jpbi5uYc?si=41_0RvsDnquwdGEE)
- [The Agent Memory Problem: Why RAG Isn't Enough (YouTube)](https://www.youtube.com/watch?v=lqiwQiDglGk)
- [The Trillion Dollar Agentic Workflow Opportunity (YouTube)](https://www.youtube.com/watch?v=jwtpMSRAPAQ)
- [Building an AI Layer for Large Codebases (YouTube)](https://www.youtube.com/watch?v=efRIrLXoOVA)
- *The New SDLC with Vibe Coding* — Osmani, Saboo, Kartakis, Google (May 2026). PDF: [[The New SDLC with Vibe Coding.pdf]]
- [The 15 AI Commandments (YouTube)](https://www.youtube.com/watch?v=hYcOFTMesGc&t=60s)
- [The Missing Manual: How To Write Great Skills — Matt Pocock (YouTube)](https://www.youtube.com/watch?v=UNzCG3lw6O0)
