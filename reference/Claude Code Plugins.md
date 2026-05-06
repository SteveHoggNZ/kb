# Claude Code Plugins

Curated community plugins for Claude Code — third-party extensions installed via the plugin marketplace or npm.

> For built-in slash commands (`/powerup`, `/insights`), see [[Claude Code Built-In Commands]].

---

## Memory & Context

### claude-mem — Persistent Memory Across Sessions

Automatically captures everything Claude does during coding sessions, compresses it with AI, and injects relevant context back into future sessions. Solves the blank-slate problem that [[Context Distillation Loop - amnesia as a feature|Context Distillation]] addresses at the methodology level — claude-mem solves it at the tooling level.

| | |
|---|---|
| **Repo** | https://github.com/thedotmack/claude-mem |
| **Install** | `npx claude-mem install` or `/plugin marketplace add thedotmack/claude-mem` |

**Key features:**
- **Automatic session capture** — no manual intervention; everything Claude does is recorded
- **AI-compressed memory** — progressive disclosure with token cost visibility so you know what you're spending on context injection
- **Natural language search** — `mem-search` skill for querying past sessions
- **Web viewer** — real-time memory monitoring UI at `localhost:37777`
- **Privacy controls** — `<private>` tags to exclude sensitive data from capture

**Connection to KB concepts:** This is a concrete implementation of [[Outcome Agent Architecture|Layer 1 (Knowledge Store)]] — persistent memory that survives session boundaries. It also addresses the friction pattern identified in our own [[claude-insights-2026-04-12|monthly insights]]: schema guessing and repeated context setup would be reduced if Claude remembered previous sessions' learnings.

---

### context-mode — Context Window Optimisation

Reduces tool output by ~98%, keeping raw data out of the conversation context. Executes code in sandboxed subprocesses where only stdout enters the context window, and maintains session continuity via SQLite.

| | |
|---|---|
| **Repo** | https://github.com/mksglu/context-mode |
| **Install** | `/plugin marketplace add mksglu/context-mode` (Claude Code) or `npm install -g context-mode` (14+ other platforms) |

**Key features:**
- **Sandboxed execution** — code runs in isolated subprocesses; only stdout enters context
- **Session continuity** — tracks file edits, tasks, errors, and decisions in SQLite; restores state after conversation compaction
- **Knowledge base** — full-text search with BM25 ranking for indexed content and fetched URLs
- **Output compression** — enforces terse, technical responses to minimise token consumption
- **Multi-platform** — supports Claude Code, Gemini CLI, VS Code Copilot, Cursor, JetBrains, and more

**Connection to KB concepts:** Directly operationalises [[Agentic Harness Primitives|Primitive 5 (Strict Token Budgeting)]] and [[Agentic Harness Primitives|Primitive 10 (Automatic Transcript Compaction)]]. The sandboxed execution model echoes [[Harnesses Matter More Than Models|Codex's sandboxed isolation]] philosophy — keep the context window lean by never letting raw output pollute it. The SQLite-backed session continuity is a lightweight version of [[Agentic Harness Primitives|Primitive 3 (Session Persistence That Survives Crashes)]].

---

## See Also

- [[Claude Code Built-In Commands]] — Built-in `/powerup` and `/insights`
- [[AI & LLM Tools]] — Broader AI tooling reference
- [[Agentic Harness Primitives]] — Infrastructure primitives these plugins implement
- [[Outcome Agent Architecture]] — claude-mem as a Layer 1 Knowledge Store implementation
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [I Tried 100+ Claude Code Skills. These 6 Are The Best (YouTube)](https://www.youtube.com/watch?v=eRS3CmvrOvA)

---

*Created [[2026-04-14]] — Initial list: claude-mem (persistent memory) and context-mode (context window optimisation)*
