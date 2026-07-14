# Structure-Preserving Data

When you flatten structured data into text for an AI agent, you destroy meaning. A table turned into paragraphs loses its rows, columns, and relationships. A document turned into chunks loses its section hierarchy. A graph turned into sentences loses its traversal paths. **Agents need knowledge in the shape the business uses it** — not in the shape that's convenient for a vector database.

> **The one-sentence version:** The structure of a document *is* information. Stripping it out to extract semantics is lossy compression with no recovery path.

---

## The Problem: Semantic Flattening

The default pipeline for feeding data to AI agents is: take a document → split it into text chunks → embed the chunks → retrieve by semantic similarity. This works for simple Q&A ("What is our return policy?") but breaks for anything that requires understanding *structure*:

| Data Shape | What Flattening Destroys | Example |
|-----------|------------------------|---------|
| **Tables** | Row-column relationships, comparisons across cells | A pricing table becomes disconnected sentences — the agent can't compare Plan A to Plan B |
| **Section hierarchy** | Parent-child relationships, scope of applicability | A legal document's exceptions (nested under specific clauses) get chunked into standalone fragments without their governing context |
| **Forms** | Field labels ↔ value mappings | An invoice becomes a wall of text — the agent can't reliably extract "total amount" vs "subtotal" |
| **Graphs / relationships** | Traversal paths, transitive connections | An org chart becomes a flat list — the agent can't answer "who reports to the VP of Engineering?" |
| **Timelines / sequences** | Temporal ordering, causality | Meeting minutes lose the thread of discussion — decisions appear without the reasoning that preceded them |
| **Spreadsheets** | Formulas, cross-sheet references, named ranges | A financial model becomes numbers without the logic that connects them |

The deeper issue: **semantic similarity doesn't capture structural relationships.** Two cells in the same row of a table are structurally related (they describe the same entity) but may be semantically distant ("$49.99" and "Enterprise Plan" don't share many embedding dimensions). Flattening destroys precisely the relationships that make the data useful.

---

## The Principle: Shape Must Match Usage

> "Agents need knowledge in the shape the business uses it."

If the business makes decisions by reading a table, the agent needs to reason over that table — not a text summary of it. If the business navigates a document by section headings, the agent needs the hierarchy intact. The retrieval layer must preserve the shape of knowledge, not just its words.

This has three practical implications:

### 1. Preserve Native Formats

Don't convert everything to text. Keep tables as tables, keep structured documents as structured documents, keep graphs as traversable graphs. The conversion to a flat embedding is what destroys information.

| Business Format | Preserve As | Not As |
|----------------|------------|--------|
| Spreadsheet | Structured table (rows, columns, types) | Paragraph describing the data |
| Legal contract | Section-hierarchical document | Chunked paragraphs |
| Customer record | Typed object with fields | Narrative biography |
| Org chart | Graph with typed edges | Flat list of names |
| API response | JSON/structured payload | Prose description |

### 2. Retrieval Units Must Match the Work

The unit of retrieval should match the unit of work — not a fixed chunk size. This is the [[Agent Memory Architecture]] principle made concrete:

| Work Type | Natural Retrieval Unit | Why Not a Text Chunk? |
|-----------|----------------------|----------------------|
| Answering an FAQ | Single paragraph | Works fine — this is what RAG was built for |
| Processing a financial filing | Full section with subsections | Chunk boundaries bisect clauses; agent misreads scope |
| Resolving a support ticket | Complete customer record | Agent needs profile + history + open tickets as a unit |
| Comparing pricing tiers | Entire pricing table | Individual cells are meaningless without column headers |
| Reviewing a contract clause | Clause + its parent section + defined terms | A clause in isolation can mean the opposite of what it means in context |

### 3. The Data Contract Comes First

> "Don't pick a database first. Pick the contract your agent will have with the data first."

Before choosing a vector DB, graph DB, or any storage layer, define what the agent needs to receive and in what shape. The [[Agent Memory Architecture#The Bundle Pattern|bundle pattern]] makes this concrete: write out every data piece the agent needs, in its native structure, for a specific workflow. Then choose infrastructure that can serve those shapes.

---

## Why This Matters for Agents Specifically

Chatbots retrieve text to *display* to a human — the human reconstructs the structure mentally. Agents retrieve data to *act on* — there is no human in the loop to compensate for lost structure.

| | Chatbot | Agent |
|---|---|---|
| **Retrieves** | Text to display | Data to act on |
| **Compensates for lost structure** | Human reader fills gaps | Nobody — agent acts on what it receives |
| **Cost of structural loss** | Slightly confusing answer | Wrong action — potentially irreversible |

This is why structure preservation is [[Law vs Physics in Agent Design|Physics]], not a nice-to-have. A human reading a flattened table can mentally reconstruct columns. An agent receiving flattened table text will hallucinate relationships that don't exist or miss relationships that do.

---

## Connection to Existing Concepts

### Agent Memory Architecture

[[Agent Memory Architecture]] defines the three-step process (contract → bundle → primitives) and the principle that retrieval units must match the work. Structure-Preserving Data is the *reason* that process exists: if all data were safely flattenable to text, plain RAG would be fine. It's the structural information loss that demands a more thoughtful approach.

### Strategic vs Tactical Documentation

[[Strategic vs Tactical Documentation]] separates narrative *why* docs from structured *how* docs. Structure-Preserving Data extends this: tactical docs are often inherently structured (schemas, configs, checklists, procedures), and flattening them into text chunks for retrieval destroys exactly the structure that makes them actionable.

### Contextual Breadcrumbs

[[Contextual Breadcrumbs]] uses stigmergy — injecting structured reminders into tool results at the point of maximum recency. This is structure preservation applied to *agent memory*: rather than storing behavioural patterns as narrative text, they're stored as typed metadata fields (`on_turn_reminder`, `require_collection_status`) that the platform injects at precisely the right moment. The structure of the breadcrumb *is* the mechanism.

### AMP Frames

AMP's frame system is structure-preserving by design. When an agent patches a dashboard frame, it sends a JSON patch — not a text description of what changed. The UI renders the structured data natively (tables, forms, charts). The agent never has to reconstruct structure from text because structure is never lost. This is the principle applied end-to-end: structured in → structured storage → structured out.

---

## See Also

- [[Agent Memory Architecture]] — Contract → bundle → primitives; the process that structure preservation demands
- [[Strategic vs Tactical Documentation]] — Tactical docs are inherently structured; flattening them loses the structure
- [[Contextual Breadcrumbs]] — Structure preservation applied to agent behavioural memory
- [[Law vs Physics in Agent Design]] — Structure preservation as Physics for agent data pipelines
- [[Outcome Agent Architecture]] — Layer 1 Knowledge Store must serve structured shapes, not just text
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [The Agent Memory Problem: Why RAG Isn't Enough (YouTube)](https://www.youtube.com/watch?v=lqiwQiDglGk)

---

*Created [[2026-04-14]] — Extracted from Agent Memory Architecture as a first-class principle: the structure of a document is information, and flattening it is lossy compression*

*Updated [[2026-06-27]] — Linked to [[Code Knowledge Graphs for Agents]] — a concrete case: code graphs preserve traversal paths grep destroys.*
