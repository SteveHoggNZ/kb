# Small Teams

PostHog's answer to the question every scaling company faces: how do you keep a startup's shipping speed as you grow? Their model is to organise the **entire workforce into autonomous "small teams"** that each operate like a mini-startup — so growth adds teams, not coordination overhead.

The problem is the default decay: as headcount grows, process and communication overhead grow with it, and the company slows down. This is the org-design face of [[The Great Inversion]] — scarcity-era coordination habits (roadmaps, sign-offs, PM layers) become the bottleneck once execution is cheap. Small Teams is the structural counter to that decay, and a close cousin of the [[The 15 AI Commandments|15 AI Commandments]] operating system (protect speed, no bureaucracy, build as a team).

---

## The four golden rules

1. **Keep them genuinely small — 2 to 6 people.** Beyond that you need complex coordination, traditional product managers, and slow process (Jira et al.). If a team's scope gets too broad, **split it into two** rather than growing it.
2. **Own everything end-to-end.** Each team fully owns its product area — roadmap, pricing, support, performance monitoring — and ships **without sign-off** from design, execs, or other departments. This is [[Monkey Management|pushing ownership all the way down]]: the team leaves every interaction with the next action, not upward for approval.
3. **Everyone is a driver.** Each team has an accountable lead, but that lead is primarily an **individual contributor**, not a pure manager. Their job is setting context, keeping the team happy, and holding a high talent bar — *not* HR mechanics like pay reviews or holiday approval, which are centralised.
4. **Stay flexible and easy to change.** Restructuring a team should take **no more than a few days**. Companies ossify as they grow; this model treats team boundaries as cheap to redraw — the "autotomy" idea (teams can shed and reform parts to survive).

## Three trade-offs (and how they're managed)

1. **Fuzzy ownership / overlap.** The cost of many small autonomous teams is confusion about who owns what. Mitigation: **radical transparency** — a clear, public ownership list down to the individual engineer. For big cross-platform efforts, engineers **temporarily form a project team**, then return to their home team.
2. **Speed over seamlessness.** They deliberately choose fast iteration over perfect initial polish. Horizontal **"glue teams"** (e.g. billing) exist for cross-product infrastructure, but they're **reluctant to create them** unless speed truly demands it — every glue team is coordination surface.
3. **Hiring is critical.** The autonomy only works with a specific kind of person: **high ownership, proactive, low ego.** Engineers are expected to talk to users and make product calls themselves. That's not for everyone, and the model collapses without that talent bar — which is why "maintain a high talent bar" is the lead's core job.

---

## The through-line

Small Teams is a bet that **structure, not exhortation, preserves speed**: keep the unit small enough that coordination is unnecessary, give it full ownership so nothing waits on sign-off, and keep boundaries cheap to redraw so the org never calcifies. It's the human-organisation mirror of [[Scalable Multi-Agent Architecture]] — many small, autonomous units with minimal shared state beat a few large ones drowning in coordination — and the practical opposite of the ceremony-heavy world critiqued in [[⚠️ Scrum Critique]] (async updates, trust the team, measure outcomes not velocity). It also assumes [[The Collapse of Roles and Time|role convergence]]: when an engineer owns product, support, and pricing, the old departmental boundaries have already dissolved.

## Connection to Other Concepts

### [[The Four Ts]]
Small Teams is a **Team + Timing** strategy: the model lives or dies on talent (attract high-ownership people, hold the bar) and on scaling *responsibly* — adding autonomous units instead of process layers.

### [[Systems Thinking Levels]]
Choosing team structure is a **structural** intervention (level 3), the high-leverage place to preserve speed — far more effective than exhorting people to "move faster" at the level of events.

## See Also

- [[Leadership & Teams]] — Back to the MOC
- [[The 15 AI Commandments]] — The AI-era operating-system companion (product-in-code, kill meetings, build as a team)
- [[The Great Inversion]] — Why process overhead is the thing to fight as you scale

## Sources

- [How to keep startup speed as you grow: small teams — PostHog (YouTube)](https://youtu.be/clHDEg9xsvg)

---

*Added [[2026-06-27]] — Recorded PostHog's "small teams" org model (four golden rules, three trade-offs) for keeping startup speed at scale.*
