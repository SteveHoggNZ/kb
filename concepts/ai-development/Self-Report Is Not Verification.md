# Self-Report Is Not Verification

A model's confidence in its own output is produced by the same process that produced the output — so it carries no independent information. Verification has to come from outside the generating process.

> **The one-sentence version:** Asking the model "are you sure?" samples the error again; it doesn't check it.

---

## The Core Claim

[[The Honesty Gap]] states the problem sharply: a model that hallucinated an answer will confidently rate that answer 9/10. The confidence score isn't a measurement — it's another generation, drawn from the same distribution, inheriting the same mistake. Errors between an output and its self-assessment are *correlated*, which is exactly the property a verifier must not have.

This is why [[Harnesses Matter More Than Models]] finds its leverage in linters rather than prompts: a linter's error message is an independent signal about the code. The model cannot talk it out of being wrong. [[The New SDLC with Vibe Coding]] makes the same point at the level of a whole discipline — *"generation is solved; verification, judgment, and direction are the new craft"* — and treats how outputs get verified as the actual differentiator between vibe coding and agentic engineering.

## The Exception That Proves It

[[Thinking Out Loud]] shows self-rating genuinely working: "rate that out of 10" reliably produces a better second draft. That isn't a counter-example, because the rating there is used as a **trigger, not as a truth**. Nobody records the 6/10 as a fact about quality; it's a prompt to iterate, and the iteration is what pays.

The distinction is the task type:

| Task | What self-rating does | Safe? |
|------|----------------------|-------|
| Creative / drafting | Triggers a revision pass; the number is discarded | Yes — the rating is instrumental |
| Extraction / verification | Asserts a fact about correctness you then act on | **No** — the rating is the error, restated |

Confusing the two is the failure: importing a habit that works in drafting into work where the number gets believed.

## Four Sources of Independent Signal

Ranked by how little they depend on the model's cooperation:

**1. Structure — make uncertainty impossible to hide.** [[The Honesty Gap]]'s three rules (force blanks, penalise guessing, label EXTRACTED vs INFERRED) don't ask the model how sure it is; they change the output *shape* so gaps become scannable. This is [[Physics Thinking]] applied to prompt design, and the same Law/Physics split that [[Law vs Physics in Agent Design]] draws — a self-assessment is Law (the agent may ignore it), a required blank is closer to Physics.

**2. Deterministic tooling — a 429 is a 429.** Linters, type checkers, tests, schema validation. [[Simplified Technical English (STE)]] is the strongest evidence here: an actual linter cut slop 74%, while a banned-words list in the prompt moved Claude 3%. Telling the model what to avoid is not the same as measuring whether it did. [[Definition of Done]] and [[Testing Strategy]] are the pre-AI form of the same instinct.

**3. Evals — verification with a held-out rubric.** [[Evaluating Skills]] refuses to ship on vibe checks: 10–20 real prompts, negative cases, ablation tests, LLM-as-judge against a strict rubric. Note the honest tension — the judge is itself a model. What saves it is not being non-model but being *independent of the generating process*: different prompt, fixed rubric, cases the author didn't write to.

**4. Human judgment, spent where it counts.** [[Framing the AI Slop Problem]] names the real cost of unreliable output — it shifts the verification burden onto the reader. The structural techniques above are worth it precisely because they let a human review only the INFERRED rows instead of everything, i.e. they buy back the [[Seven Dimensions of Hard Work|judgment and ambiguity]] dimensions that remain human.

## The Design Rule

For any agent output, ask: **what would tell me this is wrong, that isn't the agent?**

If the only answer is "the agent would say so," there is no verification — only a second opinion from the same mind. The gap matters most where nobody is watching: [[Evaluating Skills]] distinguishes *agents we use* (human in the loop, slips get caught) from *agents we build* (no safety net), and [[Agent Autonomy Levels]] Levels 4–5 remove the reviewer by design. Autonomy should be granted in proportion to how much external verification exists, not to how confident the agent sounds.

The corollary for memory: [[Four-Tier Memory Model]]'s procedural tier is built from *corrections* — moments where an external signal contradicted the agent. Those are the highest-value thing in a transcript, and they only exist because something outside the model disagreed. In the same spirit, [[Teach the Delta]] says the context worth paying for is what the model would have got wrong on its own.

## See Also

- [[The Honesty Gap]] — The structural techniques in full
- [[Thinking Out Loud]] — Where self-rating does work, and why
- [[Evaluating Skills]] — Verification as a shipping gate
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- Synthesised from existing KB notes; no new external source.

---

*Created [[2026-08-09]] — Synthesis note drawing together The Honesty Gap, Thinking Out Loud, Evaluating Skills, Harnesses Matter More Than Models, and STE around one claim: verification must be independent of generation.*
