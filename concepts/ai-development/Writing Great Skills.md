# Writing Great Skills

Matt Pocock's "missing manual" for Agent Skills: a shared rubric for telling a good skill from a bad one. Four checks — **Trigger, Structure, Steering, Pruning**.

The problem he names is **"Skill Hell"**: developers now have access to countless open-source agent skills but no shared framework for judging quality, so libraries fill with bloated, stale, unreliable skills. This is the craft layer beneath [[The New SDLC with Vibe Coding|Agent Skills]] and [[GitHub Copilot Skills and Plugins]] — those explain *what* skills are; this explains *how to write one well*.

---

## 1. Trigger — how the skill is invoked

- **Model-invoked skills** load a description into the agent's context; the agent reads it and decides when to fire. This raises token cost and **context load** on the agent, and the firing is probabilistic.
- **User-invoked skills** are triggered manually. Context load stays small, but **cognitive load** shifts to the user, who must remember when to reach for the skill.

Pocock **prefers user-invoked** skills: relying on the model to autonomously trigger a skill often leads to missed executions even when the context pointer is written perfectly. This is the [[Law vs Physics in Agent Design|Law vs Physics]] trade-off applied to invocation — a description is *Law* (voluntary, degrades under context pressure); an explicit user call is closer to *Physics* (deterministic).

## 2. Structure — the internal layout

- Split every skill into **Steps** (the procedure) and **Reference** (the supporting material to execute it). This is [[Strategic vs Tactical Documentation]] at skill scale — actionable steps vs. the reference they draw on.
- **Keep the main `SKILL.md` minimal.**
- **Hide branching references behind context pointers.** If a skill has multiple branches, don't dump every template into the main file; put situational templates in external files the agent pulls in *only* when that branch is triggered. This is exactly the progressive-disclosure pattern described for Agent Skills in [[The New SDLC with Vibe Coding]]: lightweight metadata up front, deep reference on demand, so you pay the token cost only for the branch in use.

## 3. Steering — getting the agent to actually comply

- **Use "leading words" (a.k.a. "lightvert").** Pack a specific meaning into a short phrase (e.g. "Vertical Slice") and write the prompt so the agent is forced to **repeat that phrase in its reasoning traces**. Once it says the phrase, its subsequent behaviour bends toward the packed meaning. This is [[The Inverted Causality of Language]] turned into a tool — supplied vocabulary *drives* the model's output, so seeding the right term steers the trajectory. Closely related to [[Conditioning the Distribution]].
- **Force legwork by hiding future steps.** Agents eagerly skip planning/clarifying to jump to the final output. If a skill isn't doing enough legwork (e.g. asking clarifying questions before coding), **split it into two separate user-invoked skills** and hide the final step until the first is fully done. Withholding the destination forces focus on the immediate task — the same "context isolation to change behaviour" logic as [[Decompose-Route-Recompose]].

## 4. Pruning — make it as small and efficient as possible

- **DRY:** every piece of reference gets a single source of truth; never repeat instructions across steps or templates. ([[Clean Code]] applied to prompts.)
- **Clear the "sediment":** shared markdown files accumulate outdated, stale, unorganised instructions as many people contribute. Audit regularly so everything is strictly relevant — the maintenance discipline behind [[Scaling Agents in Large Codebases|context discipline scales, context overload doesn't]].
- **Use the deletion test:** delete "no-ops" — paragraphs that *sound* good but don't change the agent's behaviour. Every word removed saves tokens and cost. This is the practical edge of [[Preparing for Next-Gen AI Models]]: strip scaffolding that no longer earns its place.

---

## The through-line

Trigger and Structure decide *what the agent sees and when*; Steering decides *whether it complies*; Pruning keeps the whole thing cheap and legible over time. All four are really one discipline — treating a skill as a token budget with a job to do, where the default failure mode is bloat: too much loaded, too vaguely steered, never pruned. Skills are part of the [[Harnesses Matter More Than Models|harness]], so their quality shows up directly in agent behaviour.

## See Also

- [[AI-Assisted Development]] — Back to the MOC
- [[GitHub Copilot Skills and Plugins]] — What skills are and how they're packaged/distributed
- [[Agentic Harness Primitives]] — Skills as one primitive in the broader harness

## Sources

- [The Missing Manual: How To Write Great Skills — Matt Pocock (YouTube)](https://www.youtube.com/watch?v=UNzCG3lw6O0)
- Example skill: `mattpocock/skills` → `/writing-great-skills` (GitHub)
- Matt Pocock's AI Coding Crash Course — [aihero.dev](https://aihero.dev)

---

*Added [[2026-06-27]] — Recorded Matt Pocock's "How To Write Great Skills" rubric (Trigger, Structure, Steering, Pruning).*
