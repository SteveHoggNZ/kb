# Knowledge Trails

You cannot learn to work with AI by being told — you need a real mission and hands-on frustration. But the mental-model shifts that come out of that frustration stop looking non-obvious the moment you have them, so they never get handed on. A **dated** knowledgebase fixes this: not a list of tips, but a trail showing what triggered each shift and when.

---

## The transmission problem

Two claims that sound contradictory but aren't:

1. **There is no substitute for a mission and getting hands-on.** Reading about agents doesn't produce the shift. The shift arrives when something you needed to work didn't.
2. **Learning from others is a great accelerator.** Someone else's technique can save you weeks of the frustration that would otherwise have taught it to you.

The resolution: nobody can give you the mission, but they *can* shorten the frustration. The mission is non-transferable; the technique is transferable — and today almost none of it gets transferred.

## Why the people who know are the worst at passing it on

The failure isn't unwillingness. It's that **the acquisition process destroys the evidence**.

| Stage | What it feels like |
|---|---|
| Before | The technique is invisible — you don't know the question |
| During | Frustration; several failed attempts; one thing eventually works |
| After | The technique feels obvious, like something you always did |

By the time you're able to teach it, you've lost the memory of not knowing it. So you don't mention it — it doesn't feel like information any more.

This is the exact inverse of [[Teach the Delta]]. That note says the only context worth spending tokens on is the delta between what the reader already knows and what's true here. The problem for a human expert is that **expertise erases your ability to see your own delta**: everything hard-won has been re-filed as baseline. Teaching the delta requires knowing where the baseline was — and only a record kept *at the time* preserves that.

## The trail, not the tip

A tip is the technique stated flat. A trail is the technique plus its provenance:

- **The trigger** — what went wrong, or who said what
- **The date** — where it sits relative to everything else you knew
- **The order** — which shift had to land before this one made sense

The trigger is what makes it teachable, because the reader recognises the trigger before they can appreciate the technique. "Use Simplified Technical English" is a tip nobody acts on. "A colleague told me my Terraform comments read like AI slop, and this is what I found" is a trail someone can walk — see the personal trigger now recorded on [[Simplified Technical English (STE)]].

Other breadcrumbs already sitting in this vault as flat technique, and worth re-telling as trails:

| Breadcrumb | Where it lives |
|---|---|
| Ask the agent to rate its response out of 10 — it says 6 — ask it to go again | [[Thinking Out Loud]], with the caveat from [[Self-Report Is Not Verification]] |
| "Who would be a good group of people to ask about this feature, and what would they say?" | [[Teams Of Agents - LLM Specialisation+Personas]] — the simulated stakeholder panel |

## Stigmergy at human timescale

[[Contextual Breadcrumbs]] solves the same problem for agents: an agent can't hold everything in context, so the platform leaves marks in the environment that the next reader picks up at the moment they need them. Ants and pheromone trails, not direct instruction.

Knowledge trails are that pattern on a human timescale. The knowledgebase is the environment, the dated entry is the pheromone, and the next person is a future agent with no shared context. The difference is the injection point: an agent gets its breadcrumb pushed into a tool result at perfect recency, whereas a human has to come looking — so the trail has to be *findable*, which is a harder design problem than the agent case.

## What publishing this actually requires

A vault like this one already has two axes, and they do different jobs:

| Axis | Where | Answers |
|---|---|---|
| **Concept** | `concepts/` + `_MOCs/` | "What is the idea, fully formed?" |
| **Time** | `_periodic-notes/` | "When did this land, and what caused it?" |

Sharing a knowledgebase usually means sharing the concept axis — the polished notes. But the concept axis is the axis with the trigger stripped out. **The trail is the time axis**, and it's the half nobody publishes. Opening up knowledge trails means exposing the dated layer, or at minimum keeping the trigger attached to each concept note rather than letting the polish absorb it.

The cheap version, available immediately: whenever a genuine shift lands, record the trigger and the date alongside the technique. That costs one sentence and is the whole difference between a tip and a trail.

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC

---

*Created [[2026-09-07]] — Steve's own note, not a source summary. Written because the vault already held every worked example (STE, self-rating, stakeholder panels) but not the idea that the record of **when and why** each one landed is itself the thing worth sharing.*
