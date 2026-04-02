# Preparing for Next-Gen AI Models

As AI models become exponentially more intelligent, human-imposed complexity — scaffolding, step-by-step instructions, intermediate checks — becomes a hindrance rather than a help. The "bitter lesson" of AI scaling: radically simplify your workflows to leverage what's coming.

---

## The Core Thesis

Rich Sutton's "Bitter Lesson" applied to production AI: methods that leverage scale and compute always win over methods that leverage human ingenuity. Every clever prompt chain, every hand-crafted retrieval pipeline, every intermediate human review gate is scaffolding that next-gen models will outperform natively. The preparation strategy is to strip that scaffolding now.

This extends [[The Great Inversion]] from "execution is cheap" to "orchestration is cheap too." Where The Great Inversion identified that the *doing* collapsed in cost, this argues that the *directing* — the procedural scaffolding we built around models — is next to collapse.

---

## Eight Principles for Next-Gen Readiness

### 1. Name the Outcome, Let Go of the Process

Stop writing procedural prompts ("First do X, then do Y, then check Z"). Tell the model exactly *what* you want the final result to be and trust it to figure out the *how*.

This is [[Teach the Delta]] taken to its logical conclusion. If baseline knowledge is already in the weights, then baseline *process* is too. Highly structured prompts re-teach workflow the model already knows — you're paying tokens for choreography it would execute naturally. Only specify process when a simple outcome-statement demonstrably fails.

It also resonates with [[Colleague vs Tool-Shaped AI]]: the Tool-shaped philosophy (precise spec up front, autonomous execution) becomes the default mode as models grow capable enough that even discovery-phase work can be delegated with outcome descriptions rather than step-by-step collaboration.

### 2. Let the Model Drive Data Retrieval

Stop building complex retrieval logic into applications. Provide the model with a clean, organised, searchable repository and let it find data on its own.

This inverts the RAG orthodoxy. Instead of engineering retrieval pipelines that pre-fetch "relevant" chunks, give the model tools to search and let it decide what's relevant. [[Harnesses Matter More Than Models]] already showed that the surrounding system matters more than the model — but the next generation shifts the balance: the model *becomes* the retrieval logic, and the harness simplifies to "well-organised data + search tools."

[[Scalable Multi-Agent Architecture]]'s Rule 2 (Workers Stay Ignorant — Minimum Viable Context) supports this from the opposite direction: don't over-stuff context. Let agents pull what they need.

### 3. Stop Hard-Coding Inferable Knowledge

Don't bloat the context window with basic business rules, policies, or common-sense context that a sufficiently intelligent model can infer. Only add complexity when a simple prompt demonstrably fails.

This is [[Teach the Delta]] as a design principle: the delta shrinks as model capability grows. What required explicit context for today's models may be inferable tomorrow. The practical test remains the same — "Would the agent have done this anyway?" — but the threshold for "yes" keeps rising.

### 4. Replace Intermediate Human Checks with Automated Evals

Humans are becoming too slow and error-prone to manually review AI output at each step. Shift from multiple intermediate human review gates to a single, comprehensive automated evaluation at the end of the pipeline.

[[The Barbell Economy]] frames this precisely: Layer 1 (tokenisable cognition) collapses to zero cost, but Layer 2 (judgment and accountability) remains the bottleneck. Human review is Layer 2 work — don't waste it on intermediate checkpoints where automated evals can serve. Reserve human judgment for the final quality gate and the genuinely ambiguous decisions that [[Intent Engineering]] calls "the cascade of specificity."

[[Agent-First Operating Model]] already structures this: Phase 4 (Autonomous Execution) runs without interruption, and Phase 5 (Review & Hardening) is the single human gate at the end.

### 5. Automate Non-Technical Handoffs

Stop using humans to manually shuttle data between applications — Excel to PowerPoint, CRM to email, spreadsheet to report. Next-gen models handle these basic workflow handoffs natively.

[[Agentic Primitives]] calls this "real work" vs "pseudo-work": a summary for you to read keeps the loop open; a report sent for you closes it. The handoff automation described here is the mundane but high-volume version — moving data between tools is exactly the kind of trapped-data rescue that Computer Use (the third agentic primitive) was designed for.

### 6. Elevate AI to the Planner Role

In multi-agent systems, stop micro-managing the workflow. Define clear intent, establish strict guardrails, provide robust tools, and let the AI orchestrate.

This is [[Scalable Multi-Agent Architecture]]'s Rule 5 ("Sophisticated Orchestration, Simple Agents") extended: the orchestration layer itself becomes an AI. [[Intent Engineering]] provides the framework for how to do this safely — goal structures define what the planner should optimise for, delegation frameworks set decision boundaries, and feedback loops detect drift. Without intent alignment, a powerful planner efficiently optimises for the wrong things (the Klarna lesson).

The [[Law vs Physics in Agent Design]] distinction becomes critical here: guardrails must be Physics (hard stops the planner *can't* violate), not just Law (instructions it *should* follow). A planner powerful enough to orchestrate is powerful enough to ignore suggestions.

### 7. Prepare for High Access Costs

Models like "Mythos" (trained on Nvidia GB300 chips) will be extraordinarily expensive to build and serve. Expect premium subscription tiers. The ROI question becomes: does a superpowered model justify the cost for your specific use case?

[[The Inference Crunch]] already documented the structural compute shortage through 2028 — demand growing 10x annually against physically constrained supply. Next-gen models compound this: they require more compute per inference, not just more training. The Enterprise Playbook from The Inference Crunch applies directly: secure capacity, build routing layers, invest in efficiency. [[The Barbell Economy]]'s Layer 1 collapse assumes cheap inference — expensive next-gen models create a tiered reality where the Layer 1 collapse only applies to *current-gen* models.

### 8. Audit and Simplify Now

Get ready *before* the models launch. Review current prompts, agent architectures, and workflows. If a process relies heavily on human-designed complexity, cut it.

[[Eight Habits to Break]] provides the audit checklist: Permission Loops, Polish as Procrastination, Meetings as Default, Structured Waiting — each is a form of human-designed complexity that next-gen models make obsolete. [[The 2026 Builder Operating System]]'s Engineering Manager Mindset applies: manage AI like a team, not a tool. You wouldn't micro-manage a senior engineer's process; stop micro-managing a frontier model's.

---

## The Meta-Pattern

Every principle above reduces to one insight: **as model intelligence increases, the optimal amount of human-imposed structure decreases.** The scaffolding we built for GPT-4-class models — retrieval pipelines, chain-of-thought templates, multi-step review gates — was necessary *because* those models needed it. Next-gen models won't.

This creates an uncomfortable inversion for teams that have invested heavily in AI infrastructure. The [[Harnesses Matter More Than Models]] thesis doesn't disappear — harnesses still matter — but the *composition* of a good harness shifts from "complex orchestration" to "clean data + clear intent + hard guardrails."

```
GPT-4 era:     Complex harness + moderate model  = good output
Next-gen era:  Simple harness  + powerful model   = better output
```

The risk is clinging to complexity that was once necessary, making it the new version of the [[Eight Habits to Break|scarcity habits]] that The Great Inversion warned about.

---

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Preparing for Claude Mythos (YouTube)](https://youtu.be/hV5_XSEBZNg?si=oeiJO2vhpaspfd5i)

---

*Created [[2026-04-02]]*
