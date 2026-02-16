# Strategic vs Tactical Documentation - Split Documentation - 2-tier Documentation

A two-tier documentation structure designed for AI agent consumption, optimizing for context relevance and token efficiency.

**Key insight:** Stability correlates with importance — the things that change least are often the foundational constraints that must always be respected.

---

## The Pattern

```
docs/
├── strategic/    # The WHY - Vision, principles, design decisions
└── tactical/     # The HOW - Implementation guides, patterns, procedures
```

---

## Strategic Documentation (`docs/strategic/`)

**Purpose:** Explains *why* decisions were made and captures the vision.

**Contents:**
- Mission and vision — Why the project exists
- Core principles — Guiding beliefs that inform all decisions
- Design decisions — Architectural choices with rationale
- Engineering patterns — Conventions and their reasoning
- Authentication flows — Security model design
- Protocol specifications — Message formats, API contracts

**Characteristics:**

| Property | Value |
|----------|-------|
| Stability | Changes infrequently (monthly or less) |
| Role | Foundational — referenced for architectural decisions |
| Function | Context-setting — helps agents understand boundaries and constraints |

---

## Tactical Documentation (`docs/tactical/`)

**Purpose:** Explains *how* to implement things day-to-day.

**Contents:**
- Repository setup — Getting started, local development
- Coding philosophy — Code style, conventions
- Testing strategy — How and what to test
- CI/CD automation — Deployment procedures
- Implementation patterns — Code recipes for common tasks
- Database access patterns — Query patterns, migrations
- DevTools usage — Debugging, profiling

**Characteristics:**

| Property | Value |
|----------|-------|
| Stability | Changes frequently as tooling evolves |
| Role | Actionable — step-by-step procedures |
| Function | Reference — looked up during implementation |

---

## The Interplay: Strategy Constrains, Tactics Implement

Strategy and tactics aren't independent — they exist in tension and mutual dependency:

```
Strategy constrains Tactics
Tactics implement Strategy
```

| | Strategy | Tactics |
|--|----------|---------|
| **Question** | *What* and *Why* | *How* |
| **Timeframe** | Long-term, stable | Short-term, adaptive |
| **Change trigger** | Market shift, new insight | Tool change, better method |
| **Without the other** | Just a wish | Wasted effort |

**A good tactic that doesn't serve the strategy is wasted effort.**
A technically excellent implementation that violates architectural principles creates debt.

**A good strategy without tactics is just a wish.**
Vision without executable procedures never ships.

### The Feedback Loop

Tactics also *inform* strategy over time:

```
Strategy → Tactics → Execution → Learning → Strategy (refined)
```

When tactical realities repeatedly conflict with strategic assumptions, that's signal to revisit the strategy. Tactical friction is data.

### Boundary Examples

| Decision | Layer | Why |
|----------|-------|-----|
| "We use event sourcing" | Strategic | Architectural commitment, hard to reverse |
| "Events go to Kafka" | Tactical | Implementation choice, could swap for SQS |
| "All APIs are REST" | Strategic | Cross-team contract, ecosystem constraint |
| "We use OpenAPI for specs" | Tactical | Tooling choice, could change |
| "Auth uses JWT" | Strategic | Security model, trust boundaries |
| "Tokens expire in 1 hour" | Tactical | Tunable parameter |

The test: **If changing it requires rethinking other decisions, it's strategic. If it's isolated, it's tactical.**

---

## Why This Matters for AI Agents

### 1. Right Context at the Right Time

| Agent Task | Load... |
|------------|---------|
| Planning architecture | Strategic docs |
| Writing code | Tactical docs |
| Reviewing a PR | Both — strategic for alignment, tactical for patterns |

### 2. Token Efficiency

Strategic docs (~10-20KB total) can be loaded once per session as they rarely change. Tactical docs can be loaded on-demand for specific tasks.

### 3. Prevents Drift

Agents making decisions without strategic context often produce technically correct but **architecturally misaligned** code. Strategic docs keep them on track.

### 4. Cacheable Knowledge Tiers

```
┌─────────────────────────────────┐
│     Strategic (cached long)     │  ← Load at session start
├─────────────────────────────────┤
│    Tactical (cached short)      │  ← Load per-task
├─────────────────────────────────┤
│   Code (not cached, real-time)  │  ← Read dynamically
└─────────────────────────────────┘
```

---

## Implementation Tips

1. **Keep strategic docs under 20KB combined** — They're meant to be "always loaded" context
2. **Use cross-references** — Strategic docs should point to tactical for "how to implement this"
3. **Version carefully** — Strategic doc changes should trigger agent prompt refreshes
4. **Include decision records** — ADRs (Architecture Decision Records) belong in strategic
5. **Tactical is disposable** — If your CI changes, just update the tactical doc

---

## Example Agent Prompt Integration

```markdown
# System Prompt

## Context
You are working on the AMP project. Before making architectural decisions,
consult the strategic documentation in `docs/strategic/`. For implementation
details, see `docs/tactical/`.

## Document Loading Strategy
- At session start: Read `docs/strategic/principles.md` and `docs/strategic/vision.md`
- When writing code: Read relevant `docs/tactical/` guides
- When unsure: Ask which layer applies to your question
```

---

## Connection to Other Concepts

This pattern applies [[Leverage Selection]] to documentation:
- **Strategic = high leverage** — foundational constraints that shape everything downstream
- **Tactical = lower leverage** — implementation details that can change without affecting architecture

It also connects to [[Agents vs Long Context]]:
- Strategic docs are ideal for **long context loading** (stable, always relevant)
- Tactical docs are better for **agentic retrieval** (task-specific, volatile)

And to [[The Barbell Economy]]'s layer model:
- Strategic docs = **Layer 2** (judgment, accountability, decisions)
- Tactical docs = **Layer 1** (tokenizable procedures, replaceable)

---

## Related Concepts

- [[Leverage Selection]] — Higher-level documentation has more leverage
- [[Agents vs Long Context]] — Different retrieval strategies for different doc types
- [[The Barbell Economy]] — Layer 2 (judgment) vs Layer 1 (execution)
- [[AI Second Brain Architecture]] — Similar principle: structure for AI consumption

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC
