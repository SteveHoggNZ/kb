# Code Knowledge Graphs for Agents

Tools that pre-build a map of a codebase — functions, classes, modules, and their relationships — so an AI agent can ask "how do these connect?" in **one tool call** instead of grepping and reading file after file.

The problem they solve is **structural blindness**: without a graph, agents fall back on text search and sequential file reads, which burns tokens and produces excessive tool calls (15+ per query). A knowledge graph collapses that to a single traversal — the video cites a **58% reduction in tool calls**. This is the direct answer to the "grep doesn't scale" tactic in [[Scaling Agents in Large Codebases]] (LSP-over-MCP for precise symbol navigation instead of grep), and an instance of [[Structure-Preserving Data]]: a graph keeps traversal paths intact where flattening code into text destroys them. It's also part of the [[Harnesses Matter More Than Models|harness]] — the retrieval substrate around the model, not the model itself.

All three share plumbing — **Tree-sitter** parsing, caching for speed, and the **Model Context Protocol (MCP)** to talk to agents — but take very different approaches.

---

## The three tools

| | **Graphify** | **GitNexus** | **CodeGraph** |
|---|---|---|---|
| **Focus** | Content breadth + visualization | Cross-repo architecture + control | Automation + agent simplicity |
| **Indexes** | Code (36 langs), docs, PDFs, images, video/audio, Google Workspace | Code (14 langs), markdown, API routes, ORM models, DI patterns | Code only (20+ langs) |
| **Standout strength** | Breadth of context; best human visualization (7 export formats — HTML, SVG, Obsidian, Neo4j…) | Multi-repo: cross-repo impact, contract registries, tracing across service boundaries | Index freshness: native OS file-watching auto-syncs in ~2s; understands dynamic code |
| **Dynamic code** | Struggles (callbacks, events, routing) | — | Handles callbacks, EventEmitters, React `setState` re-renders, C function pointers |
| **Freshness** | Manual updates / git hooks | Manual re-run (fast, incremental) | Automatic (file watcher), zero commands |
| **Agent UX** | 7 MCP tools (NL queries + traversal) | 17 specialized MCP tools (granular, but cluttered) | **1 MCP tool** (agents prefer fewer) |
| **Human UX** | Rich visual exploration | Some | CLI only, no visualization |
| **License** | MIT (free commercial) | PolyForm Noncommercial (paid for business) | MIT (free commercial) |

**Graphify** — the multi-modal knowledge builder. Wins when project context lives in design docs, research papers, and architecture diagrams, and when humans want to *see* the graph.

**GitNexus** — the precomputed architecture engine. Wins for microservices/enterprise: analyzing cross-repo impacts and tracing breaking changes across service boundaries, with power-user precision.

**CodeGraph** — the zero-maintenance accelerator. A standalone binary, "set it and forget it," strong on dynamic code flows grep misses, and deliberately exposing just one MCP tool. CodeGraph's single-tool choice is the sharp end of a recurring lesson: agents behave better with fewer tools, echoing [[Twelve-Factor Agents]] (~10 tools max) and the metadata-first, deferred-loading tool discipline in [[Agentic Harness Primitives]]. GitNexus's 17 tools are the cautionary opposite.

---

## Shared limitations

None of these tools can:

- Analyze **runtime** behaviour — they read static code only.
- Add much value on very small projects (< 20 files).
- Support niche languages (Haskell, OCaml, F#, Clojure).
- See dynamically computed file paths, reflection, or `eval()`.

The static-only ceiling is the boundary of this whole category: a graph captures *structure*, not *execution*. It sharpens retrieval and impact analysis but can't tell you what actually happens at runtime — the verification/observability job that stays with tests, evals, and tracing.

---

## Choosing

- **Graphify** — context leans on external docs, PDFs, video walkthroughs, or you want rich visual diagrams.
- **GitNexus** — you work across multiple repos/microservices and must track breaking changes across service boundaries.
- **CodeGraph** — you want instant auto-updating, strong dynamic-code understanding, and the simplest possible agent UX.

This is a [[Decompose-Route-Recompose|routing]] decision at tool level: match the tool to the shape of the work (multi-modal vs. multi-repo vs. single-project-hands-off), not to a feature-count leaderboard. For structured retrieval more broadly, see [[Agent Memory Architecture]] — retrieval units should match the work.

## See Also

- [[AI-Assisted Development]] — Back to the MOC
- [[Scaling Agents in Large Codebases]] — Symbol navigation over grep; context discipline at repo scale
- [[Structure-Preserving Data]] — Why graphs-as-graphs beat flattened text for agents

## Sources

- [Comparing Code Knowledge Graph Tools: Graphify vs GitNexus vs CodeGraph (YouTube)](https://youtu.be/-Fb1SBC_nmg)

---

*Added [[2026-06-27]] — Recorded a comparison of code knowledge-graph tools (Graphify, GitNexus, CodeGraph) that give agents structural awareness.*
