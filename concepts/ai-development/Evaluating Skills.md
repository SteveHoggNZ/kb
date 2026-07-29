# Evaluating Skills

Philipp Schmid's (Google DeepMind) argument: **don't ship skills on vibe checks — ship them with evals.** Most teams add custom agent skills and eyeball whether they "seem" to work, which lets silent failures reach production. Structured evaluation is what makes a skill reliable.

This is the **testing** companion to [[Writing Great Skills]] (authoring). The two overlap on purpose — description/trigger quality, keeping instructions lean, killing no-ops, and setting the right level of freedom show up in both — but this note is about *proving* a skill works, where Pocock's is about *structuring* it.

---

## Agents we use vs. agents we build

- **Agents we use** (Cursor, Claude Code): the developer is the *engineer in the loop*. If the agent slips, a human catches and corrects it, or triggers the skill manually.
- **Agents we build** (e.g. a customer-support bot for end-users): **no human safety net.** It has to work first try, so reliability is paramount — and evals are how you earn that confidence.

This is why the eval bar rises with autonomy — the further up [[Agent Autonomy Levels]] and the closer to production ([[The Implementation Layer]]), the less you can rely on a human catching mistakes.

## Two kinds of skill

1. **Capability skills** — temporary patches teaching the model something it currently struggles with. **Retire them as foundation models improve.** This is [[Preparing for Next-Gen AI Models|stripping scaffolding the bitter lesson will obsolete]].
2. **Preference skills** — durable rules encoding team workflows, coding style, company conventions. These persist regardless of model progress.

Knowing which kind you're writing tells you whether to expect it to live forever or be deleted next model release.

## Best practices

1. **Nail the description (the trigger).** For model-invoked skills the description is how the model knows *when* to use it — define the *what, why, and when* so it neither over-triggers nor gets ignored. (The trigger-reliability problem [[GitHub Copilot Skills and Plugins|Sensei]] automates, and the reason [[Writing Great Skills]] favours explicit invocation.)
2. **Write directives, not essays.** Clear commands beat passive, wordy explanation.
3. **Keep it lean; layer information.** The description sits in context every turn — minimise it and load deep reference only when the skill fires (progressive disclosure).
4. **Set the right level of freedom.** Define the end goal and constraints, not every step. *If a task needs an exact, unvarying sequence, write a script — not an AI skill.*
5. **Test negative cases.** Test prompts where the skill *should not* fire, not just where it should, so it doesn't hijack unrelated requests.
6. **Test early with real prompts.** Start with 10–20 real-world prompts: happy paths, negative cases, and actual production traces.
7. **Kill "no-ops".** Remove fluff like "be thorough" or "write clean code" — it wastes tokens and distracts from real instructions. (Pocock's "deletion test," same idea.)
8. **Use LLM-as-a-judge.** For qualitative checks (does the output match the style guide?), score with another LLM against a **strict rubric** — the eval mechanism the [[The New SDLC with Vibe Coding|SDLC paper]] calls LM judges, and leaders' reminder that "an eval without a clear rubric measures nothing."
9. **Retire skills when models catch up.** Run **ablation tests** (with vs. without the skill). If the base model now succeeds without it, retire it to save tokens and latency.

## Real-world impact

Applying these practices with a dedicated eval suite to a new **Gemini Interactions API** skill moved the model's success rate from **~19.6% to nearly 90%.** The eval suite is what turned a vibe-checked skill into a reliable one.

## The "Monday" homework

1. Pick your most-used skill and write **5 test cases** for it.
2. Remove all **no-ops** and fluff from its instructions.
3. Run an **ablation test** — with and without the skill — to prove it actually helps.

---

## The through-line

A skill without evals is a hope, not a capability — the [[Ontologies as Agent Guardrails|"a spec sentence is a hope"]] point applied to skills. Evals convert "seems to work" into a measured success rate, tell you *when to retire* a skill (ablation), and are non-negotiable precisely when there's no human in the loop. Pair this with [[Writing Great Skills]]: author the skill well, then prove it with evals before it ships.

## See Also

- [[AI-Assisted Development]] — Back to the MOC
- [[Writing Great Skills]] — The authoring companion (Trigger, Structure, Steering, Pruning)
- [[Preparing for Next-Gen AI Models]] — Why capability skills should be ablation-tested and retired
- [[Testing Strategy]] — Tests + evals as the contract with the agent

## Sources

- [Don't Ship Skills Without Evals — Philipp Schmid, Google DeepMind (YouTube)](https://www.youtube.com/watch?v=0vphxNt4wyk)

---

*Added [[2026-06-27]] — Recorded Schmid's "Don't Ship Skills Without Evals" (agents we use vs build, capability vs preference skills, nine best practices, ablation tests, Gemini API 19.6%→~90% case study).*
