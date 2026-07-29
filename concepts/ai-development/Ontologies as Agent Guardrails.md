# Ontologies as Agent Guardrails

Frank P. Coyle's argument for **neurosymbolic AI**: pair a probabilistic LLM agent (the creative engine) with a symbolic ontology (the logical boundary), so the agent proposes and the ontology permits or rejects. It's the formal, reasoner-backed version of the [[Law vs Physics in Agent Design|Law vs Physics]] split — and a direct match for our **Goldilocks Layering** (see [[Dumb Pipe Smart Edge]]): keep hard rules in a layer the agent cannot talk its way past.

> Teaching-philosophy aside from the talk (Sister Corita Kent): *"Nothing is a mistake. There's no win and no fail. There's only make."* — learn by hands-on creation.

---

## Two lineages of AI

- **Agents (probabilistic)** — from AI's 1950s founders (McCarthy, Minsky): perceive → decide → act. Modern LLMs are probabilistic agents: powerful but inherently uncertain. Hallucination is a *feature* of their creative, probabilistic nature, not merely a bug.
- **Ontologies (symbolic)** — from Aristotle's categories of being: formal specifications of shared concepts that define what exists in a domain and how it's categorised. Rigid, rule-based, dictating exactly what is logically permitted.

Neither is sufficient alone.

## The convergence: neurosymbolic AI

- **Probabilistic reasoning inside** — the LLM proposes actions and generates ideas.
- **Logical guardrails outside** — the ontology is a strict boundary that permits or rejects proposals against formalised rules.

This is the same shape as [[Law vs Physics in Agent Design]]: prose instructions are *Law* (voluntary, degrade under context pressure); ontology axioms are *Physics* (involuntary — a violation is simply rejected). The neurosymbolic frame gives that split a formal reasoner.

## Building and reusing ontologies

Ontologies represent data as **graphs (nodes and edges)** — far more flexible than rigid relational tables, and an instance of [[Structure-Preserving Data]] (keep knowledge in graph shape rather than flattening it).

- **Top-down vs bottom-up:** classic "Expert Systems" tried to have experts define every rule top-down and failed to scale. Better to build **bottom-up**, extracting entities and relationships from real data (e.g. customer interactions).
- **Reuse existing taxonomies:** don't start from scratch — `schema.org`, FOAF (Friend of a Friend), DBpedia (structured Wikipedia).

## Adding logic: RDFS and OWL

- **RDFS (inference):** define domains and ranges. If `teaches` requires a Teacher and a Student, then from "Bob teaches Scooter" the system infers Bob is a Teacher and Scooter a Student.
- **OWL (constraints):** the Web Ontology Language enforces strict rules —
    - *Transitive* properties (A ancestor-of B, B ancestor-of C ⇒ A ancestor-of C).
    - *Functional* properties = "at most one" (one biological father). Told both Bob and Jim are the father, OWL infers Bob and Jim are the *same person*.

## The danger of agentic loops

Agents run a loop (perceive → decide → act → repeat) — a 1960s idea. But a **probabilistic engine in an unbounded loop is dangerous**: infinite loops, goal drift, token-cost blowups. This is why [[Twelve-Factor Agents]] insists you *own your control flow* rather than letting an LLM loop forever, and why coordination frameworks add a **watchdog** — e.g. [[Trinity Protocol]]'s timer that fires when a loop stalls.

## The solution: two gates of validation

Keep the agent **pure** (it calculates, it has no direct side effects) and wrap every tool call in two guardrails:

1. **Gate 1 — input / pre-tool (shape):** validate the LLM's output structure with **Pydantic** — types, shape, required parameters. LLMs emit unstructured text; Gate 1 ensures the parameters actually match the tool signature.
2. **Gate 2 — output / post-tool (meaning):** validate the *proposed action* against real-world domain rules and state coherence using the **ontology**.

Gate 1 checks *shape*; Gate 2 checks *meaning*. Together they're the layered enforcement of our Goldilocks Layering — validation close to the tool, hard rules in a layer that can't be bypassed ([[Dumb Pipe Smart Edge]]: the database/physics layer blocks bad writes no matter what the agent intends).

## OWL catches what prose cannot

Natural-language instructions are vague; OWL axioms enforce business logic exactly.

> *A sentence in a spec is a hope; an OWL axiom is a rule a machine enforces.*

| The rule, in English | The OWL axiom | The error it catches |
|----------------------|---------------|----------------------|
| An order can be refunded at most once. | `:refunded a owl:FunctionalProperty` | A second refund on the same order — the double-payout bug. |
| A buyer and a support-desk employee are never the same account. | `:Customer owl:disjointWith :SupportRep` | A payout sent to the support desk instead of the buyer. |
| Order status is one of a fixed set — not free text. | `:Status owl:oneOf (paid shipped refunded)` | A made-up value like "probably shipped" that no tool can read. |
| A refund must point back to an order that exists. | `:refunded rdfs:domain :Order` | A refund attached to the wrong kind of thing — a bad call. |

Each axiom converts a rule the model might *forget* into one the reasoner *cannot skip*: `owl:FunctionalProperty` = "at most one," `owl:disjointWith` = "these classes never overlap," `owl:oneOf` = "closed enumeration, no invented values," `rdfs:domain` = "this property only applies to this type." The punchline is the [[Law vs Physics in Agent Design|Physics-over-Law]] lesson with teeth: don't *ask* the model to remember the rule — make the rule structurally unbreakable.

## Connection to Other Concepts

### Goldilocks Layering ([[Dumb Pipe Smart Edge]])
Ontology-as-guardrail is Goldilocks Layering applied to correctness: the probabilistic agent proposes (smart edge / Law), while hard axioms sit in a base layer that cannot be bypassed (physics). Two gates = the "right amount" of enforcement at the right layer.

### [[Law vs Physics in Agent Design]]
The conceptual twin. Ontologies/OWL are Physics with a formal reasoner; prompts are Law. "OWL catches what prose cannot" is this note's thesis in one line.

### [[Structure-Preserving Data]]
Ontologies are graphs — they keep entities and relationships in their native shape, which is exactly why they can reason where flattened text can't.

## See Also

- [[AI-Assisted Development]] — Back to the MOC
- [[Ontology-Based Semantic Layer]] — The other sense of "ontology": a shared data substrate for discovery/trust/learning (vs. this note's correctness gate)
- [[Twelve-Factor Agents]] — Own your control flow; structured tool I/O (Gate 1)
- [[Trinity Protocol]] — Watchdog timers as the physics backstop for runaway loops
- [[Harnesses Matter More Than Models]] — Validation + ontology are harness, not model

## Sources

- [Why Agentic Systems Need Ontologies — Frank P. Coyle (YouTube)](https://youtu.be/Sir59K8ZDPU)

---

*Added [[2026-06-27]] — Recorded Coyle's neurosymbolic argument (ontologies as logical guardrails, RDFS/OWL, two gates of validation); linked to Goldilocks Layering and Law vs Physics.*

*Updated [[2026-06-27]] — Added the full "OWL catches what prose can't pin down" table (four axioms: FunctionalProperty, disjointWith, oneOf, rdfs:domain) with the errors each prevents.*

*Updated [[2026-06-27]] — Linked to [[Ontology-Based Semantic Layer]] to distinguish the two senses of "ontology" (constraint gate vs. data substrate).*
