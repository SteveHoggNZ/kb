# Conway's Law

Any organisation that designs a system will produce a design whose structure is a copy of the organisation's communication structure. Architecture mirrors the org chart — whether you intend it to or not.

> **Not to be confused with** [[Conway and Intelligence Portability]], which is about Anthropic's leaked *Conway agent*. Different Conway, unrelated idea.

---

## The original claim

Melvin Conway, 1968, in *How Do Committees Invent?*:

> Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.

The mechanism is mundane. An interface between two components requires the two teams building them to agree — on a contract, a protocol, a release cadence. Agreement is expensive, so teams minimise the number of interfaces they must negotiate and maximise what they can decide alone. The resulting module boundaries land exactly where the communication boundaries already were.

This makes Conway's Law a **Level 3 observation** in [[Systems Thinking Levels]] terms: the org chart is the structure generating the architectural patterns, which is why arguing about the architecture at the level of individual design reviews (Level 1 events) rarely changes anything. It is also the reason [[Leverage Selection]] treats team topology as a higher-leverage intervention than code review — you are choosing which architectures are cheap to build and which are expensive to even discuss.

## The Inverse Conway Manoeuvre

If structure determines architecture, then structure is a *design tool*. Decide the architecture you want, then organise teams to match — the law will do the rest of the work for you.

This is the honest version of what [[Small Teams]] achieves: autonomous 2–6 person teams that own a product area end-to-end will produce loosely-coupled, independently-deployable components, because that is the only shape they can build without constant cross-team negotiation. The org design is the architectural decision.

The manoeuvre also explains the standard [[⚠️ Microservices]] failure. Splitting a monolith into services without splitting the teams gives you a distributed monolith: the services still need coordinated releases because the humans behind them still need coordinated decisions. **Service boundaries that don't match team boundaries won't hold** — the coupling reappears as release trains, shared databases, and cross-team tickets. The same warning applies to [[⚠️ Clean Architecture]]'s layers: a layer boundary is only real if crossing it costs a conversation someone would rather avoid.

## Why platform teams are a Conway intervention

[[DevOps vs SRE vs Platform Engineering]] describes the evolution of "who runs production," and Conway's Law is why the endpoint is a platform team rather than an embedded-ops model. A platform team's golden paths are a deliberate, narrow communication interface: product teams consume a self-service surface instead of negotiating with operations per deployment. Change the interface between the teams and you change what the product teams are able to build cheaply — which is the whole point.

Read the other way, it is a warning. Whatever your platform team makes awkward, your product teams will architect around. The platform's API surface *is* your architecture, one level removed.

## The agent-era restatement

The law generalises past humans. [[Scalable Multi-Agent Architecture]] argues that mimicking human team structures with agents fails because coordination overhead kills parallelism — which is Conway's Law read as a constraint on *machine* organisations. Two-tier planner/worker topologies with no shared state produce episodic, loosely-coupled work products, exactly as the equivalent human topology would. If you want isolated, composable outputs from agents, give them an isolated, composable communication structure; they cannot produce a design their coordination structure forbids.

## Using it

The practical test, before any significant architectural change: **which conversations does this design require, and do those conversations currently happen?** If a proposed boundary sits between two people who talk daily, it will erode. If it sits between two teams in different time zones with different roadmaps, it will hold — and may hold harder than you wanted.

## See Also

- [[_MOCs/Leadership & Teams]] — Back to the MOC
- [[Systems Thinking Levels]] · [[Leverage Selection]] — Org structure as the high-leverage intervention point
- *Team Topologies* (Skelton & Pais) — the book-length treatment of the Inverse Conway Manoeuvre

## Sources

- Melvin E. Conway, "How Do Committees Invent?", *Datamation*, April 1968.

---

*Added [[2026-08-10]] — Wrote the vault's most-referenced missing note: six inbound references from [[⚠️ Microservices]], [[⚠️ Clean Architecture]], [[Systems Thinking Levels]] and [[DevOps vs SRE vs Platform Engineering]] were all waiting on the same one-paragraph idea.*
