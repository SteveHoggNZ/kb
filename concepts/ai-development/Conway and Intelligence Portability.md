# Conway and Intelligence Portability

Anthropic's leaked "Conway" agent reveals a strategic shift: the AI lock-in of 2026 won't be about holding your **data** hostage — it will be about holding your **behavioural context** hostage. The company that owns the persistent memory layer of how you work owns you.

> **The one-sentence version:** Intelligence portability — the ability to move your accumulated workflow context between AI vendors — is the new battleground, and right now, nobody is solving it.

---

## Conway: The Always-On Agent

Hidden inside the same Claude Code leak that exposed [[Agentic Harness Primitives]], Conway is a standalone, always-on AI agent — fundamentally different from chat-based assistants that wait for a prompt. It has its own dedicated interface with three sections:

| Section | Function |
|---------|----------|
| **Search** | Query the agent's accumulated knowledge |
| **Chat** | Conversational interface |
| **System** | Extension app store, external tool connections (browser, Slack), automated triggers (webhooks) that wake the agent without human intervention |

The **System** section is the critical differentiator. Webhooks mean Conway doesn't need you to initiate — external events (an email arriving, a Slack mention, a calendar trigger) can wake it autonomously. This pushes the agent squarely into [[Agent Autonomy Levels|Level 5 autonomy]]: act independently, the human may never know.

### What Conway Looks Like Six Months In

After months of accumulated behavioural context, Conway operates overnight:

- Triages your inbox based on learned prioritisation patterns
- Drafts replies to routine emails, flags important ones
- Monitors Slack channels, drafts technical responses referencing *your* past design documents
- Cross-references competitor mentions with ongoing research
- Prepares a dashboard with key metrics for your 10 AM board meeting

The agent will make mistakes — but the speed and iteration cycle make it a massive net positive. This is exactly the [[Commitment Loops]] thesis at scale: Conway doesn't just draft (pseudo-work), it *executes to completion* (real work that closes loops).

---

## Anthropic's Five-Product Enterprise Strategy

Conway isn't isolated. It's the capstone of a rapid strategy to own the enterprise stack:

| # | Product | Role |
|---|---------|------|
| 1 | **Claude Code** | Developer tool |
| 2 | **Cowork** | Non-technical enterprise employees |
| 3 | **Conway** (leaked) | Always-on persistent agent |
| 4 | **Marketplace** | Distribution layer for enterprise procurement |
| 5 | **Enforcement** | $100M commitment to consulting firms (Deloitte, Accenture) for training |

**The Microsoft Playbook:** This mirrors Microsoft's 1990s arc — DOS → Windows → Office → Active Directory — but compressed into 15 months. Anthropic is moving from model provider to enterprise agent OS.

---

## The Google Play Strategy: Open Standard, Proprietary Lock-In

A crucial technical detail: Conway uses a **proprietary extension format built on top of MCP** (Model Context Protocol).

Anthropic championed MCP as an open standard — everyone adopted it. But Conway's extensions add a proprietary layer on top, ensuring the most valuable integrations only work within Anthropic's ecosystem. This directly mirrors Google's Android strategy:

| Layer | Android | Anthropic |
|-------|---------|-----------|
| **Open standard** | Android OS (open source) | MCP (open protocol) |
| **Proprietary lock-in** | Google Play Services (maps, payments, notifications) | Conway extensions (app store, webhooks, tool connections) |

The open standard gets adoption. The proprietary layer captures value.

This is [[Law vs Physics in Agent Design|Physics]] applied to market strategy: MCP is Law (voluntary adoption, agents *choose* to use it), but Conway's proprietary extensions become Physics (if you want the premium integrations, you *must* be in the ecosystem).

---

## Intelligence Portability: The New Lock-In

This is the most profound insight. The nature of platform lock-in has fundamentally changed.

### Old Lock-In: Data Portability

Historical platforms held your **data** hostage — files, customer records, chat history. Switching cost = migrating data. Painful but technically solvable.

### New Lock-In: Intelligence Portability

When you use Conway for months, it accumulates your **behavioural context**:

- Which emails you ignore vs prioritise
- How you structure a PowerPoint
- Communication nuances with specific colleagues
- Your decision-making patterns and preferences

This accumulated intelligence — the model of *how you work* — is **not exportable**. Switching from Anthropic's Conway to an OpenAI agent doesn't just lose a tool; it loses months of training. Your new AI assistant becomes a "brilliant stranger."

| Dimension | Data Portability | Intelligence Portability |
|-----------|-----------------|------------------------|
| What's locked in | Files, records, history | Behavioural patterns, preferences, workflow context |
| Switching cost | Migration effort (technical) | Retraining period (temporal) |
| Can you export it? | Yes, with effort | No — it's embedded in the model's adaptation |
| Impact of switching | Lose access to data | Lose *effectiveness* — revert to day-one performance |

### The Employment Implications

If your high productivity depends on an agent that's learned your habits over years, **changing employers means changing AI ecosystems**. Your job choice becomes your agent choice. Moving to a company on a different AI stack means a significant effectiveness drop while the new agent re-learns your patterns.

---

## The Convenience vs Control Choice (2026)

The speaker predicts a stark binary:

- **Convenience:** Use polished, integrated Conway-like systems. Accept total vendor lock-in because your behavioural context cannot be moved.
- **Control:** Build or use open systems where *you* own the memory layer. Sacrifice immediate convenience to maintain ownership of your workflow intelligence.

This is directly relevant to what we're building with AMP. Conway validates the thesis that persistent memory + always-on agents + tool integrations = the winning architecture. But Conway locks that memory inside Anthropic's ecosystem. AMP's approach — where the knowledge store, agent coordination, and tool connections are platform-owned but model-agnostic — offers the **Control** path: you get the always-on agent without surrendering your intelligence portability.

---

## AMP as the Strategic Counter

Conway is the ultimate argument for AMP. It proves the industry is moving toward persistent, always-on agents — but exposes the dangerous lock-in inherent in vendor-owned memory layers. AMP provides the same productivity gains (triage, drafting, cross-referencing) but places the intelligence layer in the hands of the customer.

### City vs Factory

Conway is the **Factory Model** — centralised control, pre-scripted workflows, vertically integrated. AMP is the **City** — horizontal infrastructure where we build the roads, utilities, and zoning laws so users can bring their own agents and swap them at will. Our first core principle (agents decoupled, communication through abstract interfaces) ensures a user is never locked into a specific vendor's extensions.

### Solving Intelligence Portability via the Unified Timeline

Conway hides behavioural memory inside a proprietary persistent layer. AMP's Unified Timeline Architecture solves this:

- **Memory belongs to the platform, not the agent.** Every thought (reasoning), tool call, and speech entry is stored in the `channel_entries` log. This history belongs to the channel owner, not the model provider.
- **[[Contextual Breadcrumbs]] as transferable intelligence.** Stigmergy — injecting reminders into tool results — makes behavioural context a first-class citizen of the *environment*. Fire one agent, hire another: the new agent reads the breadcrumbs of how work was previously performed, effectively transferring the behavioural intelligence Conway keeps proprietary.

### Dumb Pipe vs Proprietary Extensions

Conway builds proprietary extensions on top of MCP for lock-in. AMP's Goldilocks Layering counters this:

- **Physics (Go API):** Intentionally "dumb" — manages RLS, budgets, state transitions but does not understand semantic intent. Impossible to create Conway-style behavioural lock.
- **Open standards:** Any agent that speaks REST/SSE can participate in an AMP channel.
- **Smart wiring at the edge:** SDK/MCP layer translates mechanical actions, but the source of truth remains the open messaging log.

### Zero-Trust vs Absolute Trust

Conway asks for total trust (it triages your inbox and drafts documents while you sleep). AMP implements zero-trust:

- **Sponsor Pattern:** Every autonomous action is backed by a human-accountable identity via the SST/PIT token model.
- **Auditability:** Event-sourcing for all UI frames and messages means every Conway-style action is recorded as an immutable entry — forensic-grade log of *how* the agent reached that result.

### Breaking the "Job = Agent" Lock-In

Conway suggests your job choice becomes your agent choice. AMP's Control Room Pattern and Personal Assistant Pattern break this link:

- **The Sanctum Rule:** Users orchestrate multiple agents from different vendors (Claude for code, GPT for research) within the same mission in a private Control Room.
- **Sovereignty:** By owning the messaging hub, the enterprise ensures employee mobility isn't restricted by a single vendor's behavioural model.

---

## Connection to Existing Concepts

### Outcome Agent Architecture

[[Outcome Agent Architecture]] describes the three-layer pattern (Knowledge Store → Agent Recipes → Scheduling Loop). Conway is Anthropic's enterprise implementation of exactly this architecture. Layer 1 = Conway's accumulated behavioural context. Layer 2 = Conway's extension app store and tool connections. Layer 3 = Conway's webhook triggers and autonomous scheduling. The difference: Outcome Agent Architecture argues for open, self-hosted layers; Conway locks all three inside Anthropic's stack.

### Agentic Harness Primitives

[[Agentic Harness Primitives]] revealed the 12 infrastructure primitives under Claude Code. Conway sits *on top* of that harness — it's the user-facing product that those primitives sustain in production. Session persistence (Primitive 3), workflow state (Primitive 4), and the permission audit trail (Primitive 11) are what enable Conway's always-on operation. Without crash recovery and permission management, an autonomous agent is a liability.

### Harnesses Matter More Than Models

[[Harnesses Matter More Than Models]] argues the harness is the true differentiator, not the model. Conway proves this at the strategy level: the moat isn't Claude's intelligence (models converge) — it's the harness + accumulated behavioural context that creates switching costs.

### Agent Autonomy Levels

[[Agent Autonomy Levels]] defines five tiers from "wait until told" to "act independently." Conway operates at **Level 5** by default — webhook triggers mean the agent acts without human initiation. The speaker's six-month scenario is a portrait of what Level 5 autonomy looks like in practice: the agent works while you sleep.

---

## See Also

- [[Outcome Agent Architecture]] — The three-layer pattern Conway implements (locked inside Anthropic's stack)
- [[Agentic Harness Primitives]] — The 12 infrastructure primitives that sustain Conway in production
- [[Harnesses Matter More Than Models]] — Why the harness, not the model, creates the real moat
- [[Agent Autonomy Levels]] — Conway as Level 5 autonomy in practice
- [[Law vs Physics in Agent Design]] — Proprietary extensions as Physics-level market lock-in
- [[Commitment Loops]] — Conway closes loops autonomously at scale
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Conway Leak: Intelligence Portability & Enterprise Lock-In (YouTube)](https://youtu.be/ro5jpbi5uYc?si=41_0RvsDnquwdGEE)

---

*Created [[2026-04-09]] — Captured Conway leak analysis: always-on agents, the Google Play strategy for MCP, and intelligence portability as the new lock-in*
