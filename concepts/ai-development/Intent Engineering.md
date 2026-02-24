# Intent Engineering

The discipline of translating organisational goals, values, trade-offs, and decision boundaries into machine-readable parameters for autonomous systems. Context Engineering tells the AI what to *know*; Intent Engineering tells the AI what to *want*.

> **The one-sentence version:** Don't just give agents data — give them purpose.

---

## The Evolution

| Era | Discipline | Question Answered | Artefact |
|-----|-----------|-------------------|----------|
| 1 | **Prompt Engineering** | How do I phrase this request? | Text prompt |
| 2 | **Context Engineering** | What data does the agent need? | RAG pipelines, MCP servers, vector DBs |
| 3 | **Intent Engineering** | What should the agent *want*? | Goal hierarchies, trade-off parameters, decision boundaries |

Each era subsumes the previous. You still need good prompts and good context. But without intent, a capable agent will efficiently optimise for the wrong things.

[[Twelve-Factor Agents]] captures the Context Engineering era well: "own your prompts" means controlling every token the model sees. Intent Engineering is the layer above — controlling what the model *does* with those tokens when operating autonomously over days and weeks.

---

## The Klarna Lesson

The canonical cautionary tale:

1. **Deploy:** AI handles 2.3M customer service conversations in month one. Resolution time drops from 11 to 2 minutes. Saves $40–60M.
2. **Discover:** Customers complain about robotic tone, inability to exercise judgment. Quality collapses.
3. **Reverse:** CEO admits AI cost more in long-term value than it saved. Rehiring begins.

**The diagnosis:** The AI didn't fail technically — it operated perfectly within its prompt ("resolve tickets fast"). But it lacked the company's *true* intent: building lasting customer relationships. A human agent naturally knows when to bend a policy or spend extra time to save an angry customer. The AI only knew how to close tickets quickly.

This is the gap between [[Law vs Physics in Agent Design|Law]] (the prompt) and **Intent** (the organisation's actual values). The prompt said "resolve fast." The company *meant* "resolve well, and fast when possible, but never at the cost of the relationship."

---

## The Intent Gap

The disconnect between an organisation's true long-term goals and the narrow metrics an AI is told to optimise for.

Humans close this gap through **cultural osmosis** — months of observing managers, attending all-hands, absorbing unwritten rules. A human agent *knows* that saving an angry 4-year customer matters more than closing the ticket quickly. AI cannot do this. It has no osmosis. If the prompt says "resolve fast," it will resolve fast — even if that means robotic answers that drive loyal customers away.

> **The one-liner:** You cannot just give an AI a login and a prompt. You must provide it with unified data (Layer 1), standardised workflows (Layer 2), and explicitly coded goals and boundaries (Layer 3).

To close the Intent Gap, organisations must build three layers:

---

### Layer 1: Unified Context Infrastructure

**What it addresses:** Data and Access.

Companies suffer from **"Shadow AI"** — the AI-era equivalent of Shadow IT, but with higher stakes. Teams independently build fragmented AI tools: one builds a custom RAG pipeline for Slack, another exports Google Docs into a vector store, a third connects an AI to Salesforce but ignores Jira, and a fourth doesn't know the other three exist.

**Why Shadow AI is worse than Shadow IT:** Shadow IT tools *accessed* data. Shadow AI agents *act on* data. An unvetted agent running on a developer's laptop, connecting to corporate systems, doesn't just read customer PII — it makes decisions based on it. Three specific dangers:

1. **Security and compliance risk** — Rogue agents connecting to sensitive data (customer PII, financial records, healthcare data) with no centralised access controls or audit trail
2. **Blind spots** — Agents making decisions on incomplete, siloed information. A customer service agent decides based on a Slack thread, unaware of a formal policy update in Google Docs
3. **No governance** — No way to audit what the AI accessed, what decisions it made, or who authorised it to act

**The solution:** A centralised, vendor-agnostic architecture (using protocols like MCP) that provides **sanctioned channels** for AI to access corporate data with strict access controls, security guardrails, and governance already in place. Any AI agent deployed in the company accesses data through this infrastructure — not through rogue, disconnected pipelines.

This is the infrastructure [[Twelve-Factor Agents]] assumes: own your prompts, own your state. But at organisational scale, it requires governance that individual Context Engineering doesn't address.

---

### Layer 2: Coherent AI Worker Toolkit

**What it addresses:** Workflow and Standardisation — the gap between **AI Activity** and **AI Fluency**.

| | AI Activity | AI Fluency |
|--|------------|------------|
| **Pattern** | Individual, fragmented | Systemic, coherent |
| **Who benefits** | The one employee who figured it out | The entire organisation |
| **Transferable?** | No — stays in one person's head | Yes — formalised, distributed, measurable |
| **Workflow change** | Bolt AI onto existing process | Rethink the process around AI capabilities |
| **Typical ROI** | ~30% gains (speed up existing work) | ~300% gains (fundamentally redesigned workflows) |
| **Analogy** | Having one good hire | Having a system that makes everybody better |

The AI landscape today is highly individualised: one employee uses ChatGPT for drafting, another uses Claude for research, an engineer uses Cursor for coding. Dashboards show high tool usage and lots of prompts — the *illusion* of productivity. But the underlying human workflow hasn't changed; it's just been slightly sped up.

**The problem:** AI Activity creates lots of motion but no leverage. Individual heroics are unmeasurable, non-transferable, and non-improvable. Buying Copilot licenses without standardising how tools are used is paying for Activity, not Fluency.

**The solution:** Shared systems where AI workflows are captured, standardised, and distributed across the organisation. When one team discovers an effective process, it becomes available to all teams — measurable, improvable, and transferable. The goal is to move from isolated chat windows to coherent systems aligned with broader organisational goals.

---

### Layer 3: The Goal Translation Layer (Intent Engineering Proper)

**What it addresses:** Purpose and Boundaries.

Human goals live in slide decks, OKR documents, and leadership principles. An AI agent cannot read "Increase Customer Satisfaction" and autonomously know how to execute it in a nuanced situation. Without this layer, AI agents are "loaded weapons with no targets."

**The solution:** A translation layer that explicitly codes organisational intent into machine-actionable parameters:

| Component | What It Encodes | Example |
|-----------|----------------|---------|
| **Actionable Objectives** | What data signals equal success? | Customer retention rate > ticket closure speed |
| **Trade-off Hierarchies** | When to prioritise speed vs thoroughness, cost vs quality | "If customer tenure > 4 years: generosity > efficiency. Otherwise: efficiency > generosity." |
| **Decision Boundaries** | Hard rules and escalation triggers | "Auto-refund up to $50. Anything higher → human. Any legal threat → immediate escalation." |
| **Feedback Loops** | Measurement of intent alignment | "Weekly audit: did AI decisions match what a senior agent would have done?" |

The key insight: these four components are what experienced employees carry as tacit knowledge. Intent Engineering makes that knowledge explicit and machine-readable.

---

## Connection to Existing Concepts

### The Articulation Gap Made Operational

[[Taste in Software]] identifies the **Articulation Gap**: the distance between "feeling something's off" and being able to explain *why*. Intent Engineering is the organisational equivalent — the distance between "we value customer relationships" (felt) and the machine-readable parameters that encode that value (articulated).

```
Organisation "values" → [Intent Engineering] → Machine-readable parameters
                          ↕ same gap as
Developer "taste" → [Articulation work] → Delegatable specification
```

The [[Seven Dimensions of Hard Work]] maps this precisely. The dimensions that humans own — **EQ** (Dim 4), **Judgment/Courage** (Dim 5), **Ambiguity** (Dim 7) — are exactly what Intent Engineering tries to encode into parameters. It doesn't replace human judgment; it provides enough structure that agents can approximate it within defined boundaries.

### Layer 2 of the Barbell Economy, Operationalised

[[The Barbell Economy]] identifies **Layer 2** (Judgment & Accountability) as the new bottleneck. Intent Engineering is how you operationalise that layer — not by replacing human judgment, but by encoding enough of it into parameters that agents can handle routine decisions while escalating the genuinely hard ones.

| Barbell Layer | What It Needs | How Intent Engineering Helps |
|--------------|--------------|---------------------------|
| **Layer 1** (Tokenisable Cognition) | Context Engineering | Already addressed — RAG, prompts, state |
| **Layer 2** (Judgment & Accountability) | Intent Engineering | Trade-off hierarchies, decision boundaries, feedback loops |
| **Layer 3** (Physical Execution) | Humans | Not addressable by any engineering discipline |

### Law, Physics, and Intent

[[Law vs Physics in Agent Design]] distinguishes what agents *should* do (Law) from what they *can't* do (Physics). Intent Engineering adds a third dimension: what agents *should want*. Law says "follow this protocol." Physics says "you cannot exceed this limit." Intent says "when these two goals conflict, here's how to prioritise."

```
Intent:  "Customer retention > ticket speed"          (purpose)
    ↓
Law:     "Spend up to 15 minutes on churning customers"  (instruction)
    ↓
Physics: "Session timeout at 30 minutes"                   (hard limit)
```

Intent informs Law. Law operates within Physics. All three are necessary.

### The Decompose-Route-Recompose Connection

[[Decompose-Route-Recompose]] routes sub-problems to the right engine. Intent Engineering determines *how* to route: which dimensions require human judgment (escalate), which are routine enough for agents (automate), and what the boundary conditions are.

---

## Why Organisations Fail at AI

Despite massive investment ($700M average AI spend for $13B-revenue companies), over 70% report no tangible value. The speaker's diagnosis: this is an **intent failure**, not a technology failure.

| Failure Mode | Root Cause | What's Missing |
|-------------|-----------|----------------|
| AI does wrong things efficiently | No intent encoding | Trade-off hierarchies |
| Tool adoption stalls after pilot | No organisational integration | Unified context + worker toolkit |
| Individual heroics don't scale | No shared workflows | Coherent AI worker toolkit |
| Outputs are technically correct but wrong | Prompt ≠ purpose | Decision boundaries + feedback loops |

### The Copilot Case Study: Scale Without Intent

Microsoft's Copilot rollout is the enterprise-scale version of the Klarna problem:

- **85% of Fortune 500** adopted Copilot initially — massive distribution success
- **Only 5%** of organisations moved from pilot to larger deployment (Gartner)
- **Only ~3%** of the total Microsoft 365 user base became paid Copilot users
- **Bloomberg** reported Microsoft slashing internal sales targets as teams missed goals
- Engineers at multi-billion-dollar companies downgraded licenses, preferring ChatGPT or Claude

The standard diagnosis blames UX or model quality. The Intent Engineering diagnosis is deeper: dropping an AI tool across an enterprise without aligning it to organisational goals is like hiring 40,000 employees and never telling them what the company does. Dashboards showed high AI usage metrics but zero measurable impact on what the organisation was actually trying to accomplish.

The contrast is instructive:
- **Copilot** = Context Engineering done well (embedded in every Office app, access to your data) + Intent Engineering absent (no goal alignment, no trade-off hierarchies)
- **Result** = Lots of activity, no value

The analogy: deploying autonomous agents without Intent Engineering is like hiring 40,000 employees and never telling them what the company values or how to make decisions. They'll be busy. They won't be aligned.

---

## The Warning

As agents become more autonomous — running for weeks, making thousands of decisions without human review — the cost of misaligned intent compounds. A customer service bot that optimises for speed over relationships doesn't just lose one customer. It systematically degrades trust at scale, efficiently.

> The risk of AI isn't that it fails. It's that it succeeds at the wrong things.

This is [[Physics Thinking]] applied to organisational design: make catastrophic misalignment *impossible* by encoding intent as constraints, not just instructions.

---

## See Also

- [[Twelve-Factor Agents]] — Context Engineering: own your prompts and state
- [[Law vs Physics in Agent Design]] — Intent informs Law, which operates within Physics
- [[Seven Dimensions of Hard Work]] — Dims 4-7 are what Intent Engineering encodes
- [[The Barbell Economy]] — Layer 2 (Judgment) is the bottleneck Intent Engineering addresses
- [[Taste in Software]] — The Articulation Gap: same problem at individual vs organisational scale
- [[Decompose-Route-Recompose]] — Intent determines routing decisions
- [[Contextual Breadcrumbs]] — One implementation of intent: persistent reminders that encode purpose
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Intent Engineering — Enterprise AI's Missing Layer](https://www.youtube.com/watch?v=QWzLPn164w0) (YouTube, 2026)

---

*Created [[2026-02-24]] — Captured from Enterprise AI video on Intent Engineering*
