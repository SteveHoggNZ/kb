# The Inference Crunch

The world economy has reorganized around AI capabilities, but there is a severe physical shortage of the compute required to run it. This is not a temporary tech shortage — it's a structural crisis lasting through **2028**.

---

## The Core Thesis

Demand for AI compute is exponential and uncapped. Supply is physically constrained for 3-4 years.

| Factor | Reality |
|--------|---------|
| Demand growth | ~10x annually, no ceiling found |
| Supply relief | Not before 2026; constraints until 2028 |
| Fab lead time | 3-4 years to build new capacity |

Traditional CapEx models assume predictable demand and available supply. Neither exists.

---

## Why Demand is Exploding

Three compounding factors:

### 1. Capability Unlocks Usage
As models get smarter, they're used for more complex tasks. Better models → more use cases → more consumption.

### 2. Ambient Integration
AI moving from standalone tool to embedded in every piece of software — email, coding, CRMs. Continuous background consumption.

### 3. Agentic Systems (The Multiplier)
Unlike humans who need breaks and type slowly, agents run 24/7 loops.

| Mode | Tokens/Worker/Year |
|------|-------------------|
| Human + copilot | ~1 billion |
| Agentic workflows | ~100 billion |

**100x multiplier per worker.**

Leading indicator: Google processes **1.3 quadrillion tokens/month** — 130x increase in just over a year.

---

## The Supply Bottlenecks

A cascading series of physical constraints:

### Memory (Primary Bottleneck)
AI inference is memory-bound, not compute-bound.

- **HBM (High Bandwidth Memory):** Sold out. Manufacturers shifting from consumer to enterprise.
- **DRAM pricing:** Up 50%, expected another 50-60% in early 2026.

### Semiconductor Fabs
- **TSMC:** Controls almost all advanced chip production. Fully allocated.
- **No alternatives:** Intel unproven at scale; Samsung struggling with yields.
- **New fabs (Arizona, Germany):** Won't be ready until 2028.

### GPUs
- **Nvidia:** ~80% market share. H100/Blackwell sold out with 6+ month lead times.
- **Hyperscaler hoarding:** Microsoft, Google, Meta, Amazon have locked up supply via multi-year, multi-billion dollar agreements.

---

## The Hyperscaler Conflict

Cloud providers are no longer neutral utilities — they're product companies competing with their own customers.

**The conflict:**
- Every GPU rented to an enterprise = one less GPU for Gemini, Copilot, or Alexa
- In scarcity, hyperscalers prioritize their own strategic survival
- Rate limits tightening; "available" allocations harder to secure

**Zero-sum game.** Your cloud provider is also your competitor.

---

## Economic Consequences

### Price Spikes
Markets won't clear smoothly. Expect 2-3x cost increases, not gradual rises.

### Margin Compression
AI-native startups face existential threat:
- If AI costs = 10-20% of revenue
- And costs double...
- Business models break overnight

### Budget Shock
Enterprises that approved AI projects at current costs may cancel when prices spike — despite productivity loss.

---

## The Enterprise Playbook

Four strategic principles to survive 2025-2027:

### 1. Secure Capacity Now
Don't rely on spot pricing or on-demand cloud. Sign contracts for guaranteed throughput before the crisis peaks.

### 2. Build a Routing Layer
Intelligent software that routes workloads to different models/providers based on cost and availability. Prevents vendor lock-in. **Most durable competitive advantage.**

### 3. Treat Hardware as Consumable
Abandon 3-5 year depreciation schedules. AI hardware obsolete in 18-24 months. Write it off quickly.

### 4. Invest in Efficiency
In a constrained market, **efficiency is capacity.**

| Technique | Benefit |
|-----------|---------|
| Small Language Models (SLMs) | Right-size for task |
| Caching | Avoid re-generating tokens |
| Quantization | Run on cheaper hardware |
| Prompt optimization | Fewer tokens per request |

---

## Connection to The Bottleneck Economy

This is [[The Bottleneck Economy]]'s "Atoms vs. Bits" bottleneck made concrete:

| Bottleneck Economy Principle | Inference Crunch Reality |
|------------------------------|-------------------------|
| Bits move fast, atoms move slow | Software updates in months; fabs take 4 years |
| Physical infrastructure constrains AI | Memory, fabs, power are the binding constraints |
| Value flows to the constraint | Capacity holders (Nvidia, hyperscalers) capture value |

**The abundance narrative assumes infinite compute.** The reality is severe physical scarcity through 2028.

---

## Implications

### For Builders
- Efficiency isn't optional — it's survival
- Routing/orchestration layers are strategic, not tactical
- Lock in capacity before you need it

### For Investors
- Capacity holders (Nvidia, memory manufacturers) are the chokepoint
- AI-native startups with thin margins are vulnerable
- Infrastructure plays > application plays in constrained market

### For Strategy
- "AI-first" strategies must account for compute cost volatility
- Hybrid approaches (SLMs + LLMs, cached + fresh) beat pure scale
- The window to secure position is closing

---

## Related Concepts

- [[The Bottleneck Economy]] — Atoms vs. Bits; physical infrastructure as binding constraint
- [[The Barbell Economy]] — Efficiency techniques are Layer 2 judgment calls
- [[Scarcity to Abundance - A Unifying Lens]] — The counter-narrative: abundance in capability, scarcity in infrastructure
- [[Agent Autonomy Levels]] — Agentic systems drive 100x token consumption

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [The Inference Crunch (YouTube)](https://youtu.be/pSgy2P2q790?si=b9j6aBHF_dcNhOn1)
