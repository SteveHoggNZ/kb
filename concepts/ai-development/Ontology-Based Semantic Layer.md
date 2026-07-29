# Ontology-Based Semantic Layer

Emil Eifrem's (Neo4j) blueprint for preparing enterprise data for AI agents: stop building "thick" agents with hardwired data connections, and instead put **thin agents on a smarter shared substrate** — an ontology-based semantic layer every agent draws on.

> Two senses of "ontology" in this KB — keep them distinct. This note is the ontology as a **shared data/knowledge substrate** (discovery, trust, reuse, learning). [[Ontologies as Agent Guardrails]] is the ontology as a **logical constraint** (OWL/RDFS validating actions). Same technology, different job: retrieval substrate vs. correctness gate.

---

## The problem: enterprise data is scattered

An agent has two parts: **business logic** (interpret intent, plan, act, loop) and **data sources** (find, assess, resolve the data to act). A startup keeps everything in one database; an enterprise has data spread across hundreds of disparate sources (Oracle, Snowflake, Databricks, S3…). Building agents against that mess creates four problems:

- **Discovery** — every new agent re-finds the required data services from scratch.
- **Trust** — each agent independently verifies currency, version, and access permission.
- **Violates DRY** — a change in a data source means manually rewiring every agent that used it.
- **No learning** — agents don't learn from their data interactions, and there's no cross-agent learning.

Eifrem's aside: **markdown files alone can't guide agents** through complex enterprise data architectures — a caveat on the "just write a good `AGENTS.md`" approach in [[The New SDLC with Vibe Coding|context engineering]]. Rule files handle conventions; they don't substitute for a modelled data substrate.

## The shift: thin agents on a smarter substrate

Move the data-finding intelligence out of each agent and into a shared **ontology-based semantic layer**. Agents get thinner; the substrate gets smarter and is reused across the whole fleet. This is [[Harnesses Matter More Than Models|harness over model]] at the data tier, and the enterprise **Data Access** component of [[The Implementation Layer]] made concrete.

## The three pillars

1. **Business-facing ontology** — a simple, high-level map of the real-world concepts in the org (customers, accounts, debit cards) and how they relate, in **everyday language business users understand** ("First Name," not `f_name`).
2. **Technical ontology** — the metadata mapping the entire data-asset landscape: where data lives (which databases/buckets), schemas, attributes, physical locations.
3. **Execution traces (mapping + learning)** — the bridge. It (a) **maps** business concepts to specific technical columns, and (b) captures **runtime signals** every time an agent acts: what it tried, the context, whether retrieval succeeded — assigning **reliability scores** to data sources.

The three pillars are [[Structure-Preserving Data|structured knowledge kept in graph shape]] — concepts and relationships as nodes and edges, not flattened text — which is why the layer can reason about where data lives and how concepts map.

## How it works (Account Opening Agent)

The agent follows a business process from the **business ontology**. At the **Compliance Check** step it needs a government-issued ID. The **technical ontology** surfaces two candidate sources: Motor Vehicle Records and Passport Verification. The agent tries them; success/failure lands in **execution traces**. If MVR proves highly reliable *for that context*, the system learns it — and the next day that agent **and every other agent on the network** uses the learned score to prioritise the best source automatically.

That runtime-learning loop is the enterprise-data version of two patterns already in the KB: [[Outcome Agent Architecture]]'s scheduling loop writing learnings back into the Knowledge Store, and [[Contextual Breadcrumbs]]' stigmergy — the environment accumulates "what worked" so later agents inherit it.

## The benefits (mapped to the four problems)

- **Discovery & Trust** — data is discoverable, and trust is established both top-down (human curation of the ontologies) and bottom-up (execution traces).
- **DRY-compliant** — the business→technical mapping is centralised, so a database change is updated once and cascades to every agent.
- **Continuous, shared learning** — agents get smarter over time, and the learning is shared across the whole organisation's agent ecosystem.

---

## The through-line

The move is to treat the **data substrate as a first-class, shared asset** rather than something each agent re-solves: model concepts in business language, map them to physical data once, and let runtime traces score reliability so the fleet compounds knowledge. It's [[Agent Memory Architecture|structured operating context]] at organisation scale — and a reminder that the durable value sits in the substrate (the ontologies + traces), not in any single agent. That shared, accumulating trace layer is also an [[Conway and Intelligence Portability|intelligence-portability]] question: whoever owns the execution traces owns the compounding advantage.

## See Also

- [[AI-Assisted Development]] — Back to the MOC
- [[Ontologies as Agent Guardrails]] — The other sense of "ontology": OWL/RDFS as correctness gates
- [[Structure-Preserving Data]] — Why the substrate is a graph, not flattened text
- [[The Implementation Layer]] — Data Access as one of the six enterprise-harness components

## Sources

- [Preparing Enterprise Data for AI Agents — Emil Eifrem, Neo4j (YouTube)](https://www.youtube.com/watch?v=VGN22pPpb-8&t=492s)

---

*Added [[2026-06-27]] — Recorded Eifrem/Neo4j's ontology-based semantic layer (thin agents on a smart substrate; business + technical ontology + execution traces).*
