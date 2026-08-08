# Four-Tier Memory Model

A clean way to reason about agent "memory": it isn't one thing but **four tiers**, each with a different storage, retrieval, and failure profile. Naming them separately stops teams from reaching for a vector store when the real need is a query, a constraint, or a correction.

The four tiers: **Working → Episodic → Semantic → Procedural.**

---

## The tiers

**Working — in-thread and ephemeral.** What the agent is holding right now. Best solved *without a store*: inject the right thing at perfect recency as the last thing the agent reads before its next step. This is exactly [[Contextual Breadcrumbs]] — stigmergy via tool-result reminders, not instruction repetition. The KB has arguably solved this tier better than most memory vendors, precisely by *not* building a store.

**Episodic — what happened, retrievable by time, participant, and thread.** Mostly a **query problem, not an embedding problem.** Most "what did we decide about X?" questions are answered by filtering on structure (channel, participant, date range) and then reading — not by cosine similarity. Ties to [[Agent Memory Architecture]] (retrieval units must match the work; a support query wants the full customer record, not a chunk).

**Semantic — durable facts that outlive the episode.** The tier everyone *means* when they say "memory," and where the **invalidation problem** lives: a fact isn't wrong, it's *superseded at a time*. This is where structure and constraints matter — [[Ontologies as Agent Guardrails]] (OWL/RDFS keep facts consistent), [[Structure-Preserving Data]] (keep facts in graph shape), and at enterprise scale [[Ontology-Based Semantic Layer]] (a shared, curated fact substrate). Open gap worth noting: OWL enforces *consistency* but not *temporal supersession* — versioning "true as of when" is still a design problem.

**Procedural — how the work gets done, learned from correction.** "Always cite the entry ID." "This reviewer wants the schema diff first." **Highest ROI, almost universally neglected, and the cheapest to build — because the corrections are already in your transcript.** In this KB, procedural memory is [[Writing Great Skills|Agent Skills]] ("portable packages of *procedural* knowledge") plus the correction-capture loop of [[Contextual Breadcrumbs]]. Proving a procedural skill works is [[Evaluating Skills]].

---

## Why the split matters

Each tier fails differently, so each needs a different tool:

| Tier | Store? | Retrieval | Main failure | KB home |
|------|--------|-----------|--------------|---------|
| Working | No | Perfect-recency injection | Context rot | [[Contextual Breadcrumbs]] |
| Episodic | Log/DB | Filter on structure, then read | Reaching for embeddings | [[Agent Memory Architecture]] |
| Semantic | Graph/ontology | Look up + constrain | Stale facts (superseded) | [[Ontologies as Agent Guardrails]] · [[Structure-Preserving Data]] |
| Procedural | Skills + traces | Load on task match | Never captured | [[Writing Great Skills]] · [[Evaluating Skills]] |

The common mistake is treating all four as one "RAG + vector DB" problem. Working memory needs no store; episodic is a query; semantic needs structure and invalidation; procedural is corrections turned into skills. The highest-leverage, cheapest win is usually **procedural** — the corrections are already sitting in your transcripts.

## See Also

- [[AI-Assisted Development]] — Back to the MOC
- [[Agent Memory Architecture]] — Structured operating context (episodic/semantic retrieval)
- [[Contextual Breadcrumbs]] — Working memory without a store
- [[Ontologies as Agent Guardrails]] · [[Ontology-Based Semantic Layer]] — The semantic tier
- [[Writing Great Skills]] · [[Evaluating Skills]] — The procedural tier

## Sources

- Synthesised from a four-tier memory framing (working / episodic / semantic / procedural) and mapped onto existing KB notes.

---

*Added [[2026-06-27]] — Synthesis note: the four memory tiers (working/episodic/semantic/procedural) mapped to Contextual Breadcrumbs, Agent Memory Architecture, Ontologies, and Skills.*
