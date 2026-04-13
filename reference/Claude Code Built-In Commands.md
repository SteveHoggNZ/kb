# Claude Code Built-In Commands

Reference for Claude Code's built-in slash commands that support self-improvement and feature discovery. These are distinct from user-defined skills — they ship with Claude Code itself.

---

## /powerup

A guided tutorial that analyses how you use Claude Code and suggests features you haven't tried yet.

**What it does:**
- Scans your usage patterns (skills used, hooks configured, MCP servers connected)
- Identifies features you're not leveraging — custom skills, hooks, headless mode, MCP integrations, etc.
- Walks you through trying each suggestion with concrete examples tailored to your workflow

**Why it matters:** Claude Code ships with a large surface area of capabilities (skills, hooks, MCP servers, sub-agents, headless mode, slash commands). Most users discover a fraction of them organically. `/powerup` acts as a personalised onboarding loop — it meets you where you are and recommends the next capability worth adopting.

This is [[Context Distillation Loop - amnesia as a feature|Context Distillation]] applied to tool adoption: each `/powerup` session surfaces the highest-value unlearned feature from the full capability set, compressing discovery into targeted recommendations rather than requiring the user to read documentation end-to-end.

---

## /insights (Monthly Insights)

An automated review of your Claude Code usage over the past month, generating a structured report of what's working, what's causing friction, and what to change.

**What it generates:**
- **At a Glance** — summary of what's working well and what's hindering progress
- **Quick Wins** — low-effort, high-impact changes to make immediately
- **Top Friction Points** — recurring patterns that waste time, with specific session examples
- **Suggested CLAUDE.md Rules** — proposed additions to your project instructions, each with rationale and placement
- **Features to Try** — Claude Code capabilities (skills, hooks, headless mode) matched to your specific friction patterns
- **Usage Patterns to Adopt** — prompt templates and workflow changes based on observed anti-patterns
- **On the Horizon** — forward-looking suggestions for more advanced workflows
- **Impressive Things I Did** — highlights of sophisticated usage worth reinforcing

**Output location:** Generates a dated file (e.g. `claude-insights-2026-04-12.md`). Our KB stores these in `_periodic-notes/`.

**Why it matters:** This is [[Agentic Harness Primitives|Primitive 7 (Dual-Level Verification)]] turned inward — the harness auditing its own operator's effectiveness. The suggested CLAUDE.md rules are particularly powerful: they translate observed friction into [[Law vs Physics in Agent Design|Law]] (prompt-level instructions) that prevent recurrence. Over time, a disciplined `/insights` → update CLAUDE.md loop creates a compounding improvement cycle identical to [[Outcome Agent Architecture|Layer 3 (Scheduling Loop)]]: each review makes the next month's work more effective.

The friction point analysis also connects to [[Harnesses Matter More Than Models]]: most of the friction `/insights` surfaces isn't about model capability — it's about harness configuration (missing schemas, permission gaps, environment hygiene). The model is fine; the plumbing needs work.

See [[claude-insights-2026-04-12]] for a live example from our own usage.

---

## How They Work Together

`/powerup` and `/insights` form a complementary loop:

| Command | Focus | Cadence |
|---------|-------|---------|
| **/powerup** | Feature discovery — "what should I try next?" | Ad-hoc, when you want to level up |
| **/insights** | Retrospective — "what's working and what's broken?" | Monthly, reviews the last 30 days |

`/powerup` expands your capability surface. `/insights` audits how well you're using it. Together they create a [[Commitment Loops|closed loop]]: discover → adopt → review → refine → discover more.

---

## See Also

- [[AI & LLM Tools]] — Broader AI tooling reference
- [[Agentic Harness Primitives]] — The 12 infrastructure primitives; `/insights` operationalises Primitive 7 (Dual-Level Verification)
- [[Outcome Agent Architecture]] — `/insights` as a human-facing Layer 3 scheduling loop
- [[Context Distillation Loop - amnesia as a feature|Context Distillation Loop]] — `/powerup` distills the full feature set into targeted recommendations
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

---

*Created [[2026-04-14]] — Documented /powerup and /insights as Claude Code's built-in self-improvement commands*
