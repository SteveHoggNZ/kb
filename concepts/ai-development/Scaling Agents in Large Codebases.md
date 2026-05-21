# Scaling Agents in Large Codebases

Seven tactics for building an effective AI layer (harness) that lets coding agents navigate and work within massive, complex repositories. The underlying principle: **context discipline is the entire game at scale.** Bloated context degrades model performance; lean, layered, scoped context amplifies it.

> **The one-sentence version:** Don't give the agent your entire codebase. Give it the right slice, in the right shape, at the right moment.

---

## 1. Lean Global Rules (CLAUDE.md)

Over-bloating the root `CLAUDE.md` with thousands of lines of rules actively degrades model performance — it pushes the agent into the [[Decompose-Route-Recompose|Dumb Zone]] (>40% context = degraded reasoning). Only provide:

- Core tech stack
- High-level architecture
- General conventions
- Critical commands (test runner, dev server)

**Layer your rules:** Place a general `CLAUDE.md` at the repo root for global guidelines, then create specific `CLAUDE.md` files in subdirectories. Claude Code walks up the directory tree and loads them, so the agent only adopts subdirectory conventions when actually working there.

This is [[Strategic vs Tactical Documentation]] applied to agent instructions: the root file is strategic (stable, foundational constraints), subdirectory files are tactical (volatile, context-specific procedures). The stability gradient naturally maps to the directory hierarchy.

---

## 2. Scope the Working Directory

If you know where a task lives, `cd` into that subdirectory before starting Claude Code. This bounds the agent's scope, forcing it to focus on editing files in that section rather than exploring the entire repo.

This is the simplest form of [[Agentic Harness Primitives|Primitive 9 (Dynamic Tool Pool Assembly)]] — you're manually narrowing the agent's operational surface by constraining its starting position. No code needed, just discipline.

---

## 3. Hooks for Continuous Improvement

### Start Hooks: Feed Context Dynamically

Use a session start hook to inject relevant context based on:
- Git history (recent changes in the area you're working)
- Unstaged changes (current state of work-in-progress)
- External documentation pulled from tools like Confluence

This is [[Contextual Breadcrumbs]] applied at session initialisation: instead of relying on the agent to discover context through exploration, you inject it at the point of maximum recency — the very start of the session.

### Stop Hooks: Self-Updating Rules

Set up an end-of-session hook that triggers a headless Claude process to:
1. Review what changes were made during the session
2. Suggest updates to your `CLAUDE.md` files
3. Evolve your global rules alongside the codebase

This is the [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]] made fully automatic. Each session's learnings get distilled into persistent rules — what survives multiple sessions is the signal. It also operationalises [[Agentic Harness Primitives|Primitive 7 (Dual-Level Verification)]] at the harness level: the stop hook verifies whether the session's work should change how future sessions operate.

The monthly [[Claude Code Built-In Commands|/insights]] command does this at a higher level (reviewing patterns across all sessions). Stop hooks do it at the micro level (after every session).

---

## 4. Path-Scoped Skills

Skills are reusable prompts for specific engineering tasks (e.g., "add an API route", "create a migration"). To prevent flooding the agent with irrelevant workflows, scope skills to subdirectories using the `path` parameter — they only activate when the agent works in relevant parts of the codebase.

This mirrors [[Agentic Harness Primitives|Primitive 9 (Dynamic Tool Pool Assembly)]] and [[Agentic Harness Primitives|Primitive 12 (Constrained Agent Types)]]: just as Claude Code's internal architecture assembles a session-specific tool pool and constrains agent types by role, path-scoped skills constrain available workflows by location.

---

## 5. LSP via MCP Servers

Traditional string-searching tools (`grep`) become incredibly slow and token-inefficient in repositories with hundreds of thousands of lines. The solution: custom MCP servers that hook into your project's Language Server Protocol (LSP), giving the agent IDE-like capabilities:

- Exact symbol definitions (not string matches)
- Variable references across the codebase
- Type-aware navigation ("go to definition", "find all references")

This validates what [[Agentic Context Framework]] argues: LSP access is structurally superior to static retrieval discipline for *code* navigation. An LSP can't go stale. A hand-written reading order can. The MCP wrapper makes this available to the agent as a first-class tool rather than requiring manual exploration.

For *non-code* context (business rules, tribal knowledge, architectural rationale), static documentation still has value — the LSP tells you *what* the code does, not *why*.

---

## 6. Sub-Agents for Exploration vs Editing

Split codebase exploration from actual editing by dispatching research tasks to sub-agents. Let sub-agents consume hundreds of thousands of tokens exploring architecture or documentation, then return a tight, dense summary to your primary editing session.

This is [[Decompose-Route-Recompose]] in practice:
- **Decompose:** Separate "understand the codebase" from "edit the code"
- **Route:** Exploration → sub-agent (can afford large context). Editing → primary session (needs clean context).
- **Recompose:** Sub-agent returns a dense summary; primary session acts on it.

It also maps to [[Scalable Multi-Agent Architecture]]'s rules: workers stay ignorant (sub-agent gets minimum viable context for its exploration task), no shared state (results pass as a summary, not shared memory), and plan for endings (sub-agent is episodic).

---

## 7. Organisational Adoption Strategy

Instead of letting every engineer build separate, chaotic AI setups, task a small champion team with building a standard organisational AI layer:

1. **Quiet investment period:** Build the rules, skills, hooks, and MCP servers first
2. **Consistent first experience:** Other developers get high-quality results from their very first interaction
3. **Centralised evolution:** The champion team maintains and improves the layer over time

This is the [[The Implementation Layer|Implementation Layer]] applied to internal developer tooling. The same principle holds: the value isn't in the model — it's in the harness. A well-configured organisational AI layer is the difference between "Claude Code works amazingly" and "Claude Code is a toy."

It also connects to [[The 2026 Builder Operating System]]'s Engineering Manager Mindset: the champion team manages the AI layer like a product, not a side project.

---

## The Underlying Pattern

All seven tactics serve the same principle: **context discipline scales, context overload doesn't.**

| Tactic | Context Discipline Applied |
|--------|---------------------------|
| Lean CLAUDE.md | Don't bloat the global context window |
| Scoped working directory | Narrow the operational surface |
| Start hooks | Inject the *right* context, dynamically |
| Stop hooks | Distill session learnings into persistent rules |
| Path-scoped skills | Only load relevant workflows |
| LSP via MCP | Precise navigation instead of brute-force search |
| Sub-agents | Isolate exploration tokens from editing tokens |

This is the practical manifestation of [[Agentic Harness Primitives|Primitive 10 (Automatic Transcript Compaction)]] and [[Agents vs Long Context]]'s retrieval friction problem: at scale, the agent that *doesn't* see irrelevant context outperforms the agent that sees everything.

---

## See Also

- [[Strategic vs Tactical Documentation]] — Root CLAUDE.md = strategic; subdirectory = tactical
- [[Decompose-Route-Recompose]] — Sub-agents as decomposed exploration
- [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]] — Stop hooks as automatic distillation
- [[Agentic Context Framework]] — LSP > static retrieval discipline for code; static docs still valuable for business context
- [[Contextual Breadcrumbs]] — Start hooks as session-level breadcrumbs
- [[Scalable Multi-Agent Architecture]] — Sub-agent patterns: workers stay ignorant, no shared state
- [[Agentic Harness Primitives]] — Primitives 7, 9, 10, 12 operationalised
- [[The Implementation Layer]] — Organisational adoption as internal implementation layer
- [[Claude Code Built-In Commands]] — /insights as macro-level stop hook; /powerup for feature discovery
- [[Claude Code Plugins]] — Community tools (context-mode, claude-mem) that complement these tactics
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Building an AI Layer for Large Codebases (YouTube)](https://www.youtube.com/watch?v=efRIrLXoOVA)

---

*Created [[2026-04-14]] — Seven tactics for scaling coding agents: lean rules, scoped directories, hooks, path-scoped skills, LSP via MCP, sub-agents, organisational adoption*
