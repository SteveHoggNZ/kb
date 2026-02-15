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

### [[concepts/ai-development/Scalable Multi-Agent Architecture|Scalable Multi-Agent Architecture]]
The "human team" fallacy: mimicking human collaboration fails at scale. Coordination overhead kills parallelism. Five rules: (1) Two tiers not teams (planners + isolated workers), (2) Workers stay ignorant (minimum viable context), (3) No shared state (3-5 tools max), (4) Plan for endings (episodic operation), (5) Sophisticated orchestration, simple agents. At scale, 10,000 dumb workers beat 100 smart ones. *Contrasts with Multi-Persona approach — different tools for different scales.*

### [[concepts/ai-development/Law vs Physics in Agent Design|Law vs Physics in Agent Design]]
Law (prompts) tells agents what to do; Physics (platform/API) ensures they can't do what they shouldn't. Law is voluntary and degrades under context pressure. Physics is involuntary — a 429 is a 429. **Design rule:** For every Law, ask "What happens when the agent ignores this?" If catastrophic → add Physics. Both layers are necessary: Law without Physics → agents drift; Physics without Law → agents crash blindly.

### [[concepts/ai-development/Strategic vs Tactical Documentation|Strategic vs Tactical Documentation]]
Two-tier documentation for AI agent consumption. Strategic (the WHY) = stable, foundational, load at session start. Tactical (the HOW) = volatile, actionable, load per-task. Stability correlates with importance — things that change least are foundational constraints that must always be respected.

### [[concepts/ai-development/Colleague vs Tool-Shaped AI|Colleague vs Tool-Shaped AI]]
Choose AI shape based on task clarity: Colleague (Claude) = active collaborator, continuous feedback, discover "correct" through iteration. Tool (Codex) = autonomous agent, precise spec up front, executes without interruption. The vital skill is High-Quality Intent Specification. Senior engineers prefer Tool (can write specs); juniors prefer Colleague (need dialogue).

### [[concepts/ai-development/The 2026 Builder Operating System|The 2026 Builder Operating System]]
Six practices that separate the top 1% of builders: Engineering Manager Mindset (manage AI like a team), Kill the Contribution Badge (measure by impact not LOC), Altitude Shifting (zoom in/out fluidly), Temporal Separation (deep work vs shallow), Two Types of Architecture (Type 1 delegatable, Type 2 taste is not), Experience Not Compressible (judgment can't be fast-forwarded). The bottleneck has moved from AI capability to human cognitive architecture.

### [[concepts/ai-development/Agentation - UI Element Annotation|Agentation (UI Element Annotation)]]
Visual feedback instrument for AI coding agents. Click page elements, annotate them, and generate structured markdown with CSS selectors that help AI agents locate corresponding code. Bridges the gap between "that button" (visual) and grep-searchable selectors (code). A tool for High-Quality Intent Specification.

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
