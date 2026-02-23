# Seven Dimensions of Hard Work

We've been lazy in defining "hard work." We lump various types of difficulty into one bucket, but AI impacts them very differently. Disentangling these dimensions reveals which are being automated, which are contested, and which remain irreducibly human.

> **The one-sentence version:** Stop asking "Is this hard?" Start asking "What *kind* of hard is this?"

---

## The Problem: Monolithic Difficulty

When someone says "this is hard work," they could mean any of seven fundamentally different things:

- "The logic is deep" (Reasoning)
- "The volume is massive" (Effort)
- "The people don't agree" (Coordination)
- "The emotions are complex" (EQ)
- "The stakes are terrifying" (Judgment/Courage)
- "You need to have seen this before" (Domain Expertise)
- "Nobody knows what the problem is" (Ambiguity)

Each dimension requires different tools, different skills, and has a different automation trajectory. Treating them as one category leads to bad predictions about what AI will and won't replace.

---

## The Seven Dimensions

### 1. Reasoning — The "Deep Think" Problem

**Nature:** Multi-step logical deduction where inputs are well-defined but interaction effects are complex. Vertical difficulty — going deep into a single problem.

| Examples |
|----------|
| Multi-jurisdiction tax optimisation across 12 countries |
| Tracing layered financial transactions to detect structural fraud |
| Disproving a mathematical conjecture |
| Finding a binding site for a drug molecule |

**Status: Solved by pure intelligence.** Google's Gemini 3.1 Pro scored 77.1% on ARC-AGI-2 (novel reasoning), a 46-point single-generation jump. Raw compute and thinking time win here.

**The analogy:** If intelligence is the **engine**, tools are the **drive train**. Google built a better engine. Anthropic built a better car.

---

### 2. Effort — The "Endurance" Problem

**Nature:** Individual steps are straightforward, but scale is massive. The challenge is sustained attention and thoroughness without error.

| Examples |
|----------|
| Auditing 3,000 vendor contracts for a compliance clause |
| Migrating 2 million lines of legacy COBOL |
| Reviewing every support ticket from last quarter to tag churn signals |

**Status: Solved by agents.** This is where [[Scalable Multi-Agent Architecture]] shines — 10,000 dumb workers grinding through volume. Not deeper thinking, just more of it.

---

### 3. Coordination — The "Alignment" Problem

**Nature:** Getting entities with different contexts, priorities, and information to move together. The friction is human inertia and communication gaps.

| Examples |
|----------|
| Six engineering teams agreeing on a shared architecture |
| Managing dependencies so backend doesn't block frontend |
| Ensuring the right people have the right information before a meeting |

**Status: Mixed, human-led.** The [[Trinity Protocol]] shows agents coordinating via Semaphore/Bell/Watchdog, but the hard part — resolving human disagreement — remains human.

---

### 4. Emotional Intelligence — The "Human Dynamics" Problem

**Nature:** Reading unstated motivations, tone, and timing. The "data" is often invisible — body language, history, ego, grief.

| Examples |
|----------|
| Delivering critical feedback to someone going through a divorce |
| Negotiating where the client argues "price" but actually fears losing "control" |
| Reading the CFO's silence in a board meeting as opposition, not agreement |

**Status: Human domain.** Models cannot observe the full context of human dynamics. They can simulate empathy textually, but they cannot *read a room*.

---

### 5. Judgment & Willpower — The "Courage" Problem

**Nature:** The difficulty isn't computing the answer — it's having the nerve to execute it. Involves identity, reputation, and career risk.

| Examples |
|----------|
| Killing a feature your team spent six months building because the market shifted |
| Saying "no" to a lucrative client whose values don't align |
| Making a strategically correct but politically dangerous decision the exec team doesn't want to hear |

**Status: Human domain.** AI can analyse the data and recommend the decision. It cannot take the career risk, bear the consequences, or exercise the courage to act. This connects to [[The Barbell Economy]]'s Layer 2 — judgment and accountability cannot be delegated.

---

### 6. Domain Expertise — The "Pattern Matching" Problem

**Nature:** Speed and accuracy from lived experience and repetition, not calculation. Knowing *where* to look because you've seen the pattern before.

| Examples |
|----------|
| A senior engineer debugging a crash instantly from a stack trace they saw three years ago |
| An M&A attorney knowing which warranty clauses actually get litigated vs. boilerplate |
| A doctor recognising a rare presentation because they've seen it once, fifteen years ago |

**Status: Contested.** AI is getting better at simulating this via training data, but humans hold the edge in "reality checks" — knowing the difference between theory and practice. This is the [[Taste in Software]] territory: experience that hasn't been (and perhaps can't be) articulated into rules.

---

### 7. Ambiguity — The "Strategy" Problem

**Nature:** The difficulty is defining *what the problem is*. Data is contradictory or incomplete. Multiple valid interpretations exist.

| Examples |
|----------|
| Creating a product roadmap when customer data supports three directions equally |
| Figuring out what a customer actually wants when they ask for "better reporting" (when they really want their boss to stop bothering them) |
| Deciding company strategy when the macro signals conflict |

**Status: Human domain.** Models can explore options, but they cannot resolve ambiguity because there is no "correct" answer to compute — a choice must simply be made. This is where [[Taste in Software|taste]] and vision live.

---

## The Automation Gradient

| Dimension | Automated By | Status |
|-----------|-------------|--------|
| **1. Reasoning** | Pure intelligence (Gemini) | ✅ Commoditised |
| **2. Effort** | Agents (Opus/Claude) | ✅ Commoditised |
| **3. Coordination** | Agents + Humans | 🟡 Emerging |
| **4. EQ** | Humans | 🔴 Human domain |
| **5. Judgment/Courage** | Humans | 🔴 Human domain |
| **6. Domain Expertise** | Contested | 🟡 Frontier |
| **7. Ambiguity** | Humans | 🔴 Human domain |

**The pattern:** Dimensions 1-2 are being aggressively commoditised. Dimension 3 is emerging. Dimensions 4-7 are where human value is safe and increasing.

---

## Connection to The Barbell Economy

[[The Barbell Economy]] identifies three layers of value. The seven dimensions map onto them:

| Barbell Layer | Dimensions | AI Impact |
|---------------|-----------|-----------|
| **Layer 1: Tokenisable Cognition** | Reasoning + Effort | Collapsing to zero |
| **Layer 2: Judgment & Accountability** | Coordination + EQ + Judgment + Ambiguity | The new bottleneck |
| **Layer 3: Physical Execution** | (Not covered — atoms, not bits) | Protected |

The seven dimensions refine Layer 2. "Judgment & Accountability" is not one thing — it's *four* distinct capabilities (Coordination, EQ, Courage, Ambiguity), each with different characteristics and different automation trajectories.

---

## The Routing Skill

The practical takeaway: the most valuable skill is no longer doing the work yourself, but knowing **which engine to route the work to**.

| Dimension | Route To |
|-----------|----------|
| **Reasoning** | Gemini / deep-think models |
| **Effort** | Agentic models (Opus/Claude) + multi-agent orchestration |
| **Coordination** | AI-assisted but human-led |
| **EQ** | Humans |
| **Judgment** | Humans (AI can prepare the analysis) |
| **Domain Expertise** | AI for known patterns, humans for reality checks |
| **Ambiguity** | Humans (AI can explore option space) |

This is [[Colleague vs Tool-Shaped AI]] extended to the full problem space. The decision isn't just "colleague or tool?" — it's "which of seven problem types am I facing, and what's the right engine for each?"

---

## Connection to Taste and the Moat Discussion

The seven dimensions clarify the "taste as last moat" question:

- [[Taste in Software]] lives primarily in Dimensions 5-7 (Judgment, Expertise, Ambiguity)
- **Taste is the ability to navigate ambiguity with courage, informed by experience**
- It's not one moat — it's the *intersection* of three dimensions that remain human

The [[The 2026 Builder Operating System|2026 Builder Operating System]]'s "experience is not compressible" maps to Dimension 6 (Domain Expertise). "Two types of architecture" maps to the Reasoning/Ambiguity split — Type 1 is solvable by reasoning; Type 2 requires taste.

---

## See Also

- [[The Barbell Economy]] — Three layers of value; seven dimensions refine Layer 2
- [[Taste in Software]] — Lives at the intersection of Judgment, Expertise, and Ambiguity
- [[Scalable Multi-Agent Architecture]] — How Dimension 2 (Effort) gets solved at scale
- [[Colleague vs Tool-Shaped AI]] — Routing skill for the Human↔AI spectrum
- [[Trinity Protocol]] — Agent coordination tackling Dimension 3
- [[The 2026 Builder Operating System]] — Experience (Dim 6) and Taste (Dims 5-7)
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Nate B. Jones — Gemini 3.1 Pro Analysis (YouTube)](https://youtu.be/8jKAT8GNDE0?si=tUTiy2DdFYmccWg9)

---

*Created [[2026-02-17]] — Extracted from Nate B. Jones video on Gemini 3.1 Pro and the taxonomy of hard work*
