# Simplified Technical English (STE)

Can a 1986 aerospace writing standard cure **AI slop**? This video tests the viral claim that **ASD-STE100 (Simplified Technical English)** — a controlled-language spec written to stop fatal misreadings of aircraft maintenance manuals — is the most effective way to strip the "sounds like AI" quality out of model output.

Where [[Framing the AI Slop Problem]] explains *why* slop happens (abundance + cognitive load shifted to the reader), this is a concrete tool for the *form* of it. Keep the pairing in mind: STE fixes surface, not substance.

---

## AI slop, made machine-checkable

The vague feeling of "this sounds like AI" decomposes into six mechanical habits a linter can count:

1. **Synonym rotation** — same thing, different names (user / customer / client).
2. **Hedging** — stacked helper verbs ("may potentially help").
3. **Frozen verbs (nominalisation)** — "perform an analysis" instead of "analyze."
4. **Marketing adjectives** — "seamless," "robust," "cutting-edge."
5. **Run-on sentences** — ideas stitched with em dashes and semicolons.
6. **Phrasal verbs** — "spin up," "reach out," "dive into."

## What STE is

Created in 1986 for aerospace, so non-native speakers couldn't fatally misread a manual. The 434-page spec has two parts:

- **A strict dictionary** — ~900 approved words, each with **exactly one meaning and one grammatical job** ("fall" only = move down by gravity, never "decrease"). Synonyms are eliminated: you may use "start," never "begin / commence / initiate."
- **Strict rules** — sentence-length caps (≤20 words for instructions, ≤25 for descriptions), no semicolons, no complicated verb constructions, no phrasal verbs.

The video's sharpest line: **AI slop is "ambiguity with good posture," and STE was engineered specifically to eliminate ambiguity.** The one-word-one-meaning dictionary is a controlled vocabulary — the same disambiguation instinct behind [[Ontologies as Agent Guardrails|owl:oneOf / functional properties]], applied to prose instead of data.

## The experiment

The creator built a **linter** that counts the six slop habits, then ran six real coding/writing tasks through models under four prompts: **baseline**, a **banned-words list**, **Orwell's six rules**, and a distilled **"STE skill"** prompt.

| Prompt | Claude (slop reduction) | GPT-5.5 |
|--------|-------------------------|---------|
| **STE skill** | **74%** | **50%** (best or tied) |
| Orwell's six rules | 43% | — |
| Banned-words list | 3% | 40% |

The banned-words list barely worked on Claude (3%): blocking "delve" or em dashes just pushes the model into *other* slop habits. **You can't fix AI writing by listing words to avoid — you have to give it a complete, structured writing system.** That's [[Law vs Physics in Agent Design|Law vs Physics]] for prose: a blocklist is Law the model routes around; a full system (STE) changes the distribution it samples from — the mechanism in [[Conditioning the Distribution]] and [[The Inverted Causality of Language]] (constrain the vocabulary, constrain the output).

Note the method itself is a good pattern: a **mechanical linter as an eval** for writing quality, and **prompt ablation** across variants — exactly the discipline in [[Evaluating Skills]], and the "STE skill" is a textbook [[Writing Great Skills|structured skill]] rather than a pile of don'ts.

## Does it help humans?

Studies show STE meaningfully improves **reading comprehension** — a 1996 study brought non-native speakers' comprehension up to native-speaker levels. Caveat: STE improves *understanding and clarity*, not necessarily *memory or recall*.

## Verdict and caveats

STE is highly effective at eliminating slop, but:

- **It fixes form, not substance.** A linter can force a clean, confident paragraph; it can't make a paragraph that has nothing to say worth reading. (Exactly [[Framing the AI Slop Problem]]'s point — the real fix is systems, retrieval, and [[Teach the Delta|saying something new]].)
- **It kills voice.** Perfectly clear, zero personality — "a torque-wrench spec applied to a poem."
- **Use it only where invisible clarity is the whole job:** documentation, pull requests, error messages. Keep it away from marketing copy or anything needing tone.

## The through-line

The takeaway generalises past writing: **you don't change model behaviour by enumerating what not to do; you provide a complete, structured system to do instead.** A blocklist is whack-a-mole (Law); a controlled language is a distribution shift (Physics). STE just happens to be an unusually battle-tested such system — 40 years of eliminating ambiguity — which is why it out-performs both word-bans and Orwell's heuristics. But it's a form tool: pair it with substance and taste, or you get slop with good posture.

## See Also

- [[AI-Assisted Development]] — Back to the MOC
- [[Framing the AI Slop Problem]] — Why slop happens (form's conceptual companion)
- [[Conditioning the Distribution]] — Why a full system beats a blocklist
- [[Writing Great Skills]] · [[Evaluating Skills]] — The "STE skill" + linter-as-eval as method

## Sources

- [Is Simplified Technical English the cure for AI slop? (YouTube)](https://youtu.be/uJblcC4lKYw)
- Standard: ASD-STE100 (Simplified Technical English), ASD/AIA

---

*Added [[2026-06-27]] — Recorded the STE-vs-AI-slop experiment (six slop habits, linter, STE skill cut slop 74% on Claude / 50% on GPT-5.5; fixes form not substance, kills voice).*
