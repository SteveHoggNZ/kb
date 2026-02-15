# AI Prompting & Agent Strategies — Workshop Summary

Summary of key concepts from the knowledge base, organised for brainstorming M365 Copilot agent ideas for local government.

---

## 1. Prompting Techniques and Frameworks

- **[[Conditioning the Distribution]]** — An LLM's training data spans beginner to expert. A generic prompt samples from the average; a specialised prompt acts as a Bayesian prior, shifting the model toward higher-quality "corners" of its knowledge. You're not making it smarter — you're selecting which knowledge it draws from.
  - *Example:* Instead of "Draft a comms plan," try "You are a senior local government communications manager with 15 years' experience in public consultation. Draft a comms plan for a proposed rate increase." The expert vocabulary forces expert-level reasoning.

- **Persona-Logic Chain (Role Prompting)** — Forcing the model to adopt an expert persona constrains its vocabulary, which constrains its logical paths to more rigorous ones. Mimicking the style of an expert forces the model to access better reasoning. See [[Teams Of Agents - LLM Specialisation+Personas]] for the mechanism.
  - *Example:* "You are a procurement compliance officer" will produce more precise contract review output than a generic request, because the model's token predictions now favour technical/regulatory language.

- **High-Quality Intent Specification** — The vital skill for working with AI. Articulating exactly what "correct" looks like before the AI works. The clearer your spec, the better the output. This is the central skill in [[Colleague vs Tool-Shaped AI]].
  - *Example:* Rather than "Summarise this report," specify: "Summarise this report for elected members. Focus on budget impact, timeline risks, and community feedback themes. Keep it under 300 words. Use plain language."

- **[[Strategic vs Tactical Documentation]]** — Two-tier knowledge structure for AI consumption. Strategic docs (the WHY — principles, vision, constraints) are stable and loaded at session start. Tactical docs (the HOW — procedures, templates) are volatile and loaded per-task. Stability correlates with importance.
  - *Example:* A Copilot agent for council report writing loads the organisation's style guide and governance principles (strategic) always, but pulls in the specific report template and recent data (tactical) only when needed.

- **Reflection Prompting (XML Structure)** — Structure prompts with explicit `<thinking>`, `<reflection>`, and `<output>` sections. The thinking section forces step-by-step reasoning, the reflection section checks for errors, and the output section delivers the final answer. This makes the model's reasoning visible and improvable. See [[AI & LLM Tools]] for the template.
  - *Example:* "Before answering, work through this in `<thinking>` tags, then check your reasoning in `<reflection>` tags, then give your final answer in `<output>` tags."

- **Structured Outputs with Chain-of-Thought** — When requesting structured (JSON) responses, include a "reason" field at the top of the schema. Property order matters — putting reasoning first forces the model to think before it answers. Prompt chaining (multiple focused steps) beats trying to do everything in one shot. See [[AI & LLM Tools]] for patterns.
  - *Example:* For a document classifier: request JSON with `{"reason": "why this category", "category": "...", "confidence": 0.0}`. The reason field at the top forces the model to reason before committing to a category.

- **Automations vs Agents** — 95% of profitable AI tools are automations with smart features, not full agents. Automations are predictable; agents are complex and expensive. Default to automation unless the task genuinely requires autonomous reasoning. See [[AI & LLM Tools]].
  - *Example:* Auto-tagging incoming emails by topic = automation (predictable, cheap). Researching a complex planning question across multiple policy documents and drafting a response = agent (requires judgment, iteration).

---

## 2. Pre-Question Strategies

- **Context Setting via Session Briefing** — Develop a standard briefing you refine each time: Goal (one sentence), Constraints (what's non-negotiable), Current state (where we are), Open questions (what needs resolving). What survives multiple re-uses becomes your strategic documentation. From the [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]].
  - *Example:* Before asking Copilot to draft a policy, provide: "Goal: Update our social media policy. Constraints: Must comply with Local Government Act and our existing code of conduct. Current state: Policy last updated 2021. Open questions: How to handle staff personal accounts."

- **Kill the Contribution Badge** — Resist the urge to over-structure input before giving it to AI. Modern models handle unstructured input and "progressive intent discovery" well. Your excessive pre-thinking often adds noise, not clarity. From [[The 2026 Builder Operating System]].
  - *Example:* Instead of spending an hour organising your notes into a perfect brief, dump your raw meeting notes into Copilot and ask it to identify the three most important action items. Iterate from there.

- **[[Colleague vs Tool-Shaped AI|Colleague vs Tool Mode Selection]]** — Before you start, decide: Can I define "correct" precisely? If yes, use Tool mode (detailed spec → autonomous execution). If no, use Colleague mode (iterate together, discover "correct" through dialogue). Match the approach to the task.
  - *Example:* Writing a standard monthly report = Tool mode (you know exactly what it should contain). Exploring options for a new community engagement strategy = Colleague mode (you need to discover what "good" looks like).

- **[[Agents vs Long Context]]** — Agents are workers traversing a maze (good for action/execution). Long context is an architect viewing blueprints (good for insight/synthesis). Choose based on whether you need to *do* things or *understand* things.
  - *Example:* Use an agent to process 50 resource consent applications sequentially. Use long context to load an entire policy document and ask "Where are the contradictions between sections 4 and 7?"

---

## 3. Post-Question Strategies

- **The Self-Rating Trick** — LLMs are "extroverts" — their first output is version 1.0, not their best work. Ask "Rate that response out of 10," and the model will identify its own shortcomings. Then ask it to improve. Self-reflection is cheap but not automatic. From [[Thinking Out Loud]].
  - *Example:* After Copilot drafts a community newsletter: "Rate this draft out of 10 for clarity, tone, and completeness." It might say "6/10 — too formal, missing the key date for submissions." Then: "Revise to a 9."

- **The Critique Prompt** — Ask "What's wrong with this response? What did you miss?" to force the model to evaluate its own output from a critical angle. This surfaces gaps that the first pass didn't address. See [[Thinking Out Loud]] for variations.
  - *Example:* After generating a risk assessment: "What risks did you miss? What assumptions are you making that might be wrong?"

- **Iterative Refinement vs Upfront Specialisation** — Two ways to narrow the quality distribution. Upfront specialisation (persona, constraints) gets better first drafts. Iterative refinement (self-rating, critique) climbs the quality curve after generation. Both work; use upfront when you know what "good" looks like, iterative when you're discovering it. See [[Conditioning the Distribution]] for the statistical framing.
  - *Example:* For a routine staff memo, invest in a good upfront prompt. For a novel policy proposal, start broad and refine through 2-3 rounds of critique and revision.

- **The Pre-Commitment Prompt** — Signal to the model that you want quality, not speed: "Take your time. Give me your best work, not your first draft." This shifts the model from satisficing to optimising. From [[Thinking Out Loud]].
  - *Example:* When asking Copilot to draft a submission to central government: "This is a formal submission. Take your time. Give me your most thorough, well-reasoned response."

- **Multiple Versions** — Ask for three versions: quick draft, improved, and polished. This gives you options and reveals the model's quality range. From [[Thinking Out Loud]].
  - *Example:* "Give me three versions of this public notice: a quick draft, an improved version, and a polished final version suitable for the council website."

---

## 4. Agent Design Patterns

- **[[Agent Autonomy Levels]]** — Five levels adapted from [[Monkey Management]]: (1) Wait until told, (2) Ask what to do, (3) Recommend then act, (4) Act then report, (5) Act independently. Push agents toward the highest level they can reliably handle. Higher autonomy requires better instrumentation (logs, guardrails, escalation paths).
  - *Example:* A Copilot agent that triages incoming public enquiries could operate at Level 4 (categorise and route automatically, report daily). A procurement approval agent should operate at Level 3 (recommend a decision, wait for human sign-off).

- **Two-Tier Architecture (Planners + Workers)** — Avoid flat "team" structures for agents. Use a strict two-tier hierarchy: Planners create tasks and evaluate results; Workers execute in isolation. Workers should have minimum viable context (only what they need for the immediate task) and small toolsets (3-5 tools). From [[Scalable Multi-Agent Architecture]].
  - *Example:* A "Council Meeting Prep" system: Planner agent identifies what's needed (agenda items, officer reports, public submissions). Separate worker agents each handle one task — one summarises submissions, one checks policy alignment, one drafts the chair's notes.

- **Semantic Router** — Users shouldn't need to remember which agent to talk to. A semantic router analyses intent and routes to the right specialist agent automatically. Users just ask their question; the system finds the right expert. See [[AMP - Semantic Router]].
  - *Example:* A local government staff member asks "Is this expense compliant?" — the router sends it to the Procurement Policy agent, not the HR agent or the IT agent.

- **Governed State Machine (Four-Eyes Principle)** — Chain agents in a governance workflow: Worker drafts → Validator checks compliance → Controller manages state (e.g., locks a period). You get the speed of automation with the governance rigour of manual controls. See [[AMP - Semantic Router]] for the full pattern.
  - *Example:* An invoicing workflow: Worker agent processes the invoice, Validator agent checks it against budget and contract terms, Controller agent manages period-end lockdown. Non-compliant invoices are blocked automatically.

- **[[Agent as Device Shadow]]** — An agent that maintains your state when you're unavailable (like an IoT device shadow). It stores your reported state (context, preferences), desired state (goals, standing instructions), and handles the delta when you return.
  - *Example:* A Copilot agent for a council manager that handles routine approvals within set boundaries while they're in meetings, and queues anything outside those boundaries for review when they're back.

- **Multi-Persona / Simulated Stakeholder Panel** — Spawn multiple agents with distinct personas to review a decision from different angles. Three simulated experts beat one generalist because they break the "yes-man" consistency loop and force genuine debate. From [[Teams Of Agents - LLM Specialisation+Personas]].
  - *Example:* Before finalising a new parking policy, spawn three reviewers: "Community Advocate" (checks for equity impacts), "Finance Analyst" (checks for revenue implications), "Legal Advisor" (checks for regulatory compliance). Aggregate their feedback.

- **Living Prompts** — Agents evolve over time. The prompt is owned by the business (not individual users), updated as policies change, and the agent improves without users needing to learn new commands. See [[AMP - Semantic Router]].
  - *Example:* A "Building Consent Advisor" agent whose prompt is updated whenever legislation changes. Staff always get current advice without needing to know the rules changed.

- **Knowledge Grounding ([[AI Second Brain Architecture]])** — Move from passive document storage to active AI loops. Eight building blocks: Dropbox (frictionless input), Sorter (AI routing), Form (consistent schema), Filing Cabinet (storage), Receipt (audit trail), Bouncer (confidence guardrails), Tap on the Shoulder (proactive notifications), Fix Button (feedback loop).
  - *Example:* Council staff drop notes into a channel. AI classifies them (project update, action item, FYI), routes to the right database, and pushes a daily digest of top 3 actions. Low-confidence classifications get flagged for human review.

---

## 5. Meta-Prompting and Advanced Techniques

- **[[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]]** — Use session boundaries as forcing functions for clarity. Each new session requires re-articulating context, which progressively distills thinking to its essence. What survives multiple re-articulations is the signal. Amnesia is a feature, not a bug.
  - *Example:* After a series of workshops on a Long-Term Plan, start each Copilot session by re-briefing the AI on what matters. By session 5, your brief will be crystallised to the irreducible core — and that brief becomes your strategic document.

- **The Orchestration Pattern (Hybrid Workflow)** — Deliberately alternate between three modalities: Long context for holistic synthesis ("see everything"), Agentic review for critical scrutiny ("poke holes"), and Session boundaries for distillation ("compress to essence"). Each compensates for the others' blind spots. Extends [[Agents vs Long Context]] from either/or to orchestrated dialogue.
  - *Example:* Developing an Annual Plan: (1) Load all strategic docs into long context and draft the plan, (2) Spawn a fresh agent to play devil's advocate — "What's missing? What assumptions are hidden?", (3) Start a new session and re-explain the plan from scratch — what survives is your final version.

- **Post-Hoc Distribution Conditioning** — The self-rating trick is a form of meta-prompting where AI evaluates and improves its own output. The rating prompt conditions the model to sample from higher in its quality distribution after the fact. See [[Conditioning the Distribution]] for the statistical explanation.
  - *Example:* After any Copilot output, append: "Now rate this on accuracy (1-10), completeness (1-10), and readability (1-10). Then produce a version that scores 9+ on all three."

- **Agent Amnesia for Unbiased Review** — Spawn a sub-agent with deliberately no accumulated context to review work. Fresh eyes catch what familiarity obscures. The lack of context isn't a limitation — it's the point. From [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]].
  - *Example:* After weeks of drafting a District Plan change, give the final document to a fresh Copilot session with no history and ask: "Read this as if you're a concerned ratepayer. What's unclear? What would you object to?"

- **Altitude Shifting** — Fluidly zoom between high-level strategy and ground-level detail. Know exactly where to inspect to ensure quality. Stay too high = technical debt; stay too low = lose the big picture. From [[The 2026 Builder Operating System]].
  - *Example:* When managing an agent that's processing building consent applications, periodically drop from the dashboard view ("how many processed today?") to spot-check a specific application ("did the agent correctly flag this heritage overlay?").

- **Temporal Separation (Reflect)** — After high-speed AI-assisted execution, deliberately pause to review: Which prompts succeeded? Which agents got stuck? How did the system perform? This is what separates "getting faster" from "getting better." From [[The 2026 Builder Operating System]].
  - *Example:* At the end of each week, review the Copilot interactions that worked well and those that didn't. Refine the prompts and agent configurations based on what you learn. This compounds over time.

---

## Cross-Cutting Themes for the Workshop

These themes recur across all five categories and may be useful framing for the workshop:

- **[[The Great Inversion]]** — Execution is now cheap; clarity is the bottleneck. The meeting to discuss the work costs more than doing the work. Optimise for clarity and speed, not protection of execution time.

- **[[Scarcity to Abundance - A Unifying Lens|Scarcity to Abundance Mindset]]** — Most organisations still use scarcity-era habits (permission loops, polish as procrastination, consensus before action). The workshop should help participants identify which habits to break. See [[Eight Habits to Break]] for the full list.

- **Taste and Judgment as the Human Job** — AI can execute; humans provide taste, judgment, and accountability. Two types of architecture: Type 1 (explicit rules — delegatable to AI) and Type 2 (vision, coherence, "feel" — not delegatable). The human job is protecting Type 2. See [[The Bottleneck Economy]] and [[The 2026 Builder Operating System]].

- **Trust is Earned, Not Granted** — Agent autonomy should increase progressively as reliability is demonstrated. Start conservative, expand with evidence. Build in guardrails, escalation paths, and audit trails. See [[Agent Autonomy Levels]] and [[Reversibility-Calibrated Action]].

---

## Related

- [[_MOCs/AI-Assisted Development]] — The parent MOC for most concepts referenced here
- [[SAGE Synthesis]] — Cross-domain synthesis log
- [[AI & LLM Tools]] — Practical tools and frameworks reference
