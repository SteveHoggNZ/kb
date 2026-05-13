# Agent Memory Architecture

Classic RAG and vector search were built for chatbots — find semantically similar paragraphs and dump them into context. But agents don't just answer questions; they execute multi-step workflows. Dumping text chunks into an agent's context window is no longer sufficient. Agents need **structured, contextualised operating context** shaped to match how the business actually uses its data.

> **The one-sentence version:** Don't pick a database first. Pick the contract your agent will have with the data first.

---

## Why RAG Breaks for Agents

| | Chatbot (RAG) | Agent |
|---|---|---|
| **Task** | Answer a question | Execute a multi-step workflow |
| **Needs** | Related text | Operating context |
| **Retrieval unit** | Paragraph / text chunk | Structured bundle (records, tables, policies, auth limits) |
| **Failure mode** | Wrong answer | Wrong *action* — potentially irreversible |

A chatbot needs related text. An agent needs **operating context**: intent, access policies, data provenance, confidence levels — not just words that are mathematically similar to the prompt.

This is the data-layer manifestation of [[Law vs Physics in Agent Design]]: giving an agent wrong text produces a bad answer (recoverable). Giving an agent wrong operating context produces a bad *action* (potentially catastrophic). The stakes demand structured retrieval, not fuzzy similarity.

---

## Core Principles

### 1. Shape Data to Match the Business

> "Agents need knowledge in the shape the business uses it."

If your business runs on spreadsheets and tables, flattening that data into text paragraphs destroys its meaning. Agents need to reason over tables natively, read structured documents with section hierarchy intact, and traverse relationship graphs. The retrieval layer must preserve the *shape* of knowledge, not just its words.

This is a deep enough principle to stand on its own — see [[Structure-Preserving Data]] for the full treatment: why semantic flattening destroys meaning, what shapes to preserve, and how this connects to AMP's frame architecture.

### 2. The Retrieval Unit Must Match the Work

> "The retrieval unit needs to match the work you're doing."

Don't blindly chunk all documents the same way:

| Work Type | Retrieval Unit |
|-----------|---------------|
| FAQ / simple Q&A | Single text chunk |
| Financial filing analysis | Section-level structure with hierarchy |
| Customer support workflow | Full customer record (profile + history + tickets) |
| Repeated operational workflows | Compiled briefs (pre-assembled context packages) |

This is the memory-layer equivalent of [[Agentic Harness Primitives|Primitive 9 (Dynamic Tool Pool Assembly)]]: just as you don't give every tool to every agent run, you don't give every chunk to every retrieval. The retrieval must be shaped to the task.

### 3. Define the Contract Before Choosing Infrastructure

> "Don't pick a database first. Pick the contract your agent will have with the data first."

Developers often choose a vector DB or graph DB first and try to fit their data into it. This is backwards. First ask: *what does this agent need to receive, and in what form, to do its job reliably?*

This echoes [[Intent Engineering]]: context tells the AI what to *know*, intent tells it what to *want*. The contract is the intent layer for data — it specifies not just what data exists, but what shape it must arrive in for the agent to act safely.

---

## The Bundle Pattern

> "Write down the bundle your agent needs, not 'relevant context.'"

"Relevant context" is too vague. A **bundle** is a highly specific manifest of exact data pieces an agent needs for a given workflow. Example for a refund agent:

```
Refund Agent Bundle:
├── Customer record (name, tier, history)
├── Product version (exact SKU + purchase date)
├── Purchase history (last 12 months)
├── Refund policy (current version, applicable to this product)
└── Authorization limits (this agent's max refund amount)
```

The bundle is the **data contract** made concrete. It answers: "If I gave the agent exactly this package, could it complete the workflow without asking for more?" If not, the bundle is incomplete.

This is operationally identical to [[Outcome Agent Architecture|Layer 2 (Agent Recipes)]]: a recipe defines the *workflow*; a bundle defines the *data the recipe needs*. Together they form a complete unit of executable work.

---

## Three Steps for Building Agent Memory

| Step | Action | KB Parallel |
|------|--------|-------------|
| **1. Define the contract** | What does the agent need to receive, in what form, to do its job? | [[Intent Engineering]] — specify intent before infrastructure |
| **2. Define the bundle** | Write out every specific data piece the workflow requires | [[Outcome Agent Architecture]] — Layer 2 recipes need explicit data inputs |
| **3. Choose the primitives** | Only now go shopping for infrastructure (Vector DB, Semantic Layer, Graph RAG, Tabular Models) | [[Agentic Infrastructure Tools]] — choose tools after requirements |

This sequence prevents the most common mistake: starting with a database vendor and retrofitting the agent's needs to match it.

---

## Connection to Existing Concepts

### Outcome Agent Architecture — Layer 1 Goes Deeper

[[Outcome Agent Architecture]] defines Layer 1 (Knowledge Store) as "persistent memory, chunked and separate from the model." Agent Memory Architecture goes one level deeper: it specifies *how* that knowledge store should be structured internally. Not all memory is text. The Knowledge Store needs to serve structured bundles shaped to match the business's data, not just semantically similar paragraphs.

### Conway and Intelligence Portability

[[Conway and Intelligence Portability]] warns that behavioural context — the accumulated model of how you work — becomes vendor lock-in. The bundle pattern offers a partial solution: if your agent's memory is explicitly defined as structured bundles with clear contracts, that memory becomes *portable*. You can export a bundle; you can't export an opaque behavioural model. AMP's approach of storing memory in the platform (not the model) aligns with this — bundles belong to the channel, not the agent.

### Agentic Context Framework — Retrieval Discipline

[[Agentic Context Framework]] introduces Retrieval Discipline — telling agents which files to read, in what order, when to stop. This is a form of "define the contract": it specifies the agent's reading list rather than leaving retrieval to fuzzy search. The bundle pattern extends this from code files to arbitrary business data.

### Agents vs Long Context — The Retrieval Problem

[[Agents vs Long Context]] identifies retrieval friction as a key bottleneck: "if search misses crucial context, the agent makes a bad decision, executes it, fails, and retries." The bundle pattern addresses this by pre-defining what retrieval must return, eliminating the stochastic retry loops that make agent workflows feel slow.

---

## See Also

- [[Outcome Agent Architecture]] — Layer 1 (Knowledge Store); bundles specify how to structure it
- [[Intent Engineering]] — Contract-first thinking applied to the data layer
- [[Structure-Preserving Data]] — The foundational principle: structure is information, flattening is lossy
- [[Strategic vs Tactical Documentation]] — Two shapes of knowledge agents need
- [[Agentic Context Framework]] — Retrieval Discipline as a form of contract definition
- [[Agents vs Long Context]] — The retrieval friction that bundles solve
- [[Conway and Intelligence Portability]] — Structured bundles as portable memory vs opaque behavioural lock-in
- [[Agentic Infrastructure Tools]] — Choose infrastructure after defining contracts and bundles
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [The Agent Memory Problem: Why RAG Isn't Enough (YouTube)](https://www.youtube.com/watch?v=lqiwQiDglGk)

---

*Created [[2026-04-14]] — Agent memory as structured bundles, not text chunks: contract → bundle → infrastructure*
