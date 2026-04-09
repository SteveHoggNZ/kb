# Harnesses Matter More Than Models

AI models are converging in capability. The true differentiator is the **harness** — the system surrounding the model that dictates how it interacts with your environment, manages memory, uses tools, and coordinates tasks. The same model scores 78% in one harness and 42% in another.

If the model is a "brain in a jar," the harness is the body.

---

## Linting as a Feedback Loop

The most powerful pattern from this analysis: **linters where the error messages double as remediation instructions.**

When OpenAI used Codex to write a million lines of code, agents initially struggled because the environment was under-specified. The fix wasn't better prompting — it was implementing rigid, layered architectural rules enforced by linters. When an agent violates an architectural boundary, the linter catches it and feeds back not just what went wrong, but *how to fix it*.

This works because of **prompt recency** — the most recent tokens in the context window have the strongest influence on the next generation. A linter error arriving mid-task lands in exactly the right place: recent context, immediately actionable, tied to the specific mistake. Compare this to stuffing architectural rules into a system prompt at the top of the context — distant, generic, easy to drift from under context pressure.

This is [[Physics Thinking]] in action. A linter is physics, not law — the agent can't ignore a build failure. The error message is the teaching moment, delivered at precisely the point where the agent needs it. This connects to [[Teach the Delta]]: the linter only fires when the agent deviates from the baseline, teaching exactly the exception it needs to learn.

---

## Two Philosophies: Codex vs Claude Code

Claude Code and Codex represent fundamentally divergent harness architectures:

### OpenAI Codex: Sandboxed Isolation

- Agents run in **isolated cloud containers**, internet disabled by default
- The repository is the sole source of truth — external knowledge is illegible
- Multi-agent coordination happens through **Git branches and PRs**, not shared state
- Automated background agents constantly scan the repo against golden principles, opening PRs to refactor deviations
- Tools (MCP) are treated as files on a filesystem — agents must semantically search for the tool they want and read its instructions only when needed

This maps to [[Scalable Multi-Agent Architecture]]: workers stay ignorant, no shared state, plan for endings. Codex enforces these rules through sandboxing — physics, not law.

### Anthropic Claude Code: Local Execution

- Runs directly in your **local terminal** with full shell access
- Combats the "shift worker" problem through **structural incrementalism**: an initial agent breaks work into a rigid JSON feature list, then a coding agent works on exactly *one* feature per session
- Relies on composable **Unix primitives** (grep, git, npm) rather than custom tools — "Bashes All You Need"
- State passes between sessions via progress files and git commit histories

This is [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]] made operational: each session starts fresh, reads a compressed briefing, and works on a bounded scope. Amnesia is managed, not eliminated.

### The Divergence

| Dimension | Codex | Claude Code |
|-----------|-------|-------------|
| Execution | Sandboxed cloud | Local terminal |
| Memory | Repo is truth, background agents maintain it | Progress files + git history |
| Multi-agent | Git-based coordination (isolated) | Orchestrated sub-agents (delegated) |
| Tools | Semantic search, load on demand | Full shell access, Unix pipes |
| Guardrails | Linters as physics | Structural incrementalism |

---

## Managing Entropy at Scale

Without active management, AI-generated codebases drift toward slop — [[Framing the AI Slop Problem]] at the code level. Codex's approach: automated background agents that continuously scan the repo against golden principles and open remediation PRs. This is a form of [[Conditioning the Distribution]] — constantly pulling output back toward the desired quality distribution.

The key insight from [[The Bottleneck Economy]] applies: the model (execution) is abundant. The harness (judgment about architecture, quality standards, feedback loops) is the bottleneck where value concentrates.

---

## The Strategic Lock-In

Choosing an AI coding tool is no longer just a technical decision — it's a strategic commitment to a specific workflow architecture. Organisations aren't buying a subscription; they're adopting a philosophy of how human-AI collaboration should be structured. This creates a new kind of **process-based vendor lock-in** distinct from traditional data or API lock-in.

---

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Codex vs Claude Code — Harness Architecture (YouTube)](https://youtu.be/09sFAO7pklo?si=1htyc8lgXm47k5iV)

---

*Created [[2026-02-16]]*
*Updated [[2026-04-02]] — Referenced from [[Preparing for Next-Gen AI Models]]: harnesses still matter, but the optimal harness shifts from complex orchestration to clean data + clear intent + hard guardrails*
*Updated [[2026-04-09]] — [[Conway and Intelligence Portability]] confirms at the strategy level: the moat isn't model intelligence (models converge) — it's the harness + accumulated behavioural context that creates switching costs*
