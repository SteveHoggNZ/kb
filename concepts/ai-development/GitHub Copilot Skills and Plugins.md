# GitHub Copilot Skills and Plugins

Skills and plugins are GitHub's extensibility model for Copilot agents — the mechanism that turns a general-purpose coding assistant into a domain-specific expert.

## The Extensibility Stack

GitHub's agent extensibility model is a seven-layer stack. Each layer builds on the one below:

| Layer | Name | Role |
|-------|------|------|
| **7** | **Plugins** | Package and share via an org marketplace |
| **6** | **Hooks** | Deterministic lifecycle control points |
| **5** | **Skills** | Deterministic, portable, discoverable building blocks |
| **4** | **Agents** | Specialist personas with scoped tool access |
| **3** | **MCP** | Core tooling (e.g. AppMod MCP NuGet) |
| **2** | **Prompts** | Fading away — convert to skills |
| **1** | **Instructions** | Always-on repo/path conventions (`.github/copilot-instructions.md`) |

The trajectory is clear: **prompts are being displaced by skills.** Prompts are ephemeral, human-triggered, and non-deterministic. Skills are persistent, agent-triggered, and deterministic. The investment should flow upward in the stack — from writing better prompts to building better skills, hooks, and plugins.

Skills follow an open standard at [agentskills.io](https://agentskills.io), making them portable across agent platforms — not locked to Copilot.

## Skills

A skill is a self-contained folder with a `SKILL.md` instruction file and optional bundled resources (scripts, references, examples). Skills live in `.github/skills/{skill-name}/` and are loaded on-demand when an agent detects a matching trigger condition.

The critical distinction: **a skill can be executed by an agent, whereas a prompt cannot.** A prompt is a one-shot instruction that dies with the conversation. A skill is a persistent, discoverable, reusable behaviour that agents find and apply autonomously. This shifts the investment from correcting the agent each time to building the skill once and refining it until it works reliably.

### Why Skills Beat Prompts

Skills are superior to prompts across three dimensions:

- **Deterministic** — A skill encodes a specific procedure with defined steps, inputs, and expected outputs. The same skill produces consistent results regardless of who triggers it or how the conversation started. Prompts rely on the model's interpretation, which varies with context window state, phrasing, and model version.
- **Portable** — Skills are files in a repository. They can be copied, version-controlled, shared across teams, packaged into plugins, and published to a marketplace. A prompt lives in someone's clipboard or a Slack message. The [agentskills.io](https://agentskills.io) open standard makes skills portable across agent platforms, not just Copilot.
- **Discoverable** — Agents find and apply skills autonomously based on trigger conditions in the description. No human needs to remember to paste the right prompt. The agent reads the skill registry and loads what's relevant. This is what enables the shift from human-triggered to agent-triggered workflows.

The implication for teams: stop refining your prompts and start converting them into skills. Every prompt that gets reused more than twice should become a skill.

### Skill Structure

```
.github/skills/
  my-pattern/
    SKILL.md              # Instructions, triggers, usage patterns
    references/           # Documentation, technical details
    scripts/              # Automation (Python, PowerShell, shell)
    examples/             # Sample code, config files
    assets/               # Templates, data files
```

The `SKILL.md` file contains the description (used for discovery), trigger conditions (when agents should apply it), bundled asset references, and step-by-step usage patterns. The description field is critical — it's what the agent uses to decide whether the skill is relevant.

### Skill Discovery

Agents discover skills through the folder structure. Skills support **progressive disclosure** — they're registered but kept on the shelf to save context, loaded only when the agent detects a matching request. This is the same pattern as [[Agentic Harness Primitives|deferred tools]] in Claude Code: the agent sees the name but not the full schema until it explicitly loads it.

### Sensei: The Skill Refiner

An open-source project called **Sensei** automates skill refinement using the Ralph loop — it keeps running the agent against the skill, testing whether the agent can reliably discover and apply it, and updating the skill's description until it triggers correctly. The focus is on the skill's discoverability and reliability, not on prompt engineering around agent behaviour.

This aligns with [[Law vs Physics in Agent Design|Physics over Law]]: instead of telling the agent how to behave (law), you build a skill that structurally ensures the right behaviour (physics). Sensei makes the skill itself the unit of quality, not the conversation.

### Skills Reduce Model Cost

A well-built skill encodes domain knowledge, step-by-step procedures, and decision logic that would otherwise need to live in the model's reasoning. This means a smaller, cheaper model can execute reliably — it doesn't need to *figure out* the approach, it just needs to *follow* it. The skill carries the intelligence, not the model.

This is a direct economic lever: organisations can drop from frontier models to mid-tier or even small models for routine tasks, as long as the skill is good enough. The cost savings compound across an organisation running thousands of agent invocations daily. It also reduces latency and context window pressure, since the skill provides focused instructions rather than relying on the model's general knowledge.

This reinforces [[concepts/ai-development/Agentic Harness Primitives|Harnesses Matter More Than Models]] from a cost perspective — investing in the harness (the skill) lets you spend less on the model.

## Plugins

A plugin is a **packaged collection** of skills, agents, MCP servers, and instructions — bundled together as a deployable unit. Where a skill is a single capability, a plugin is a coherent product that can be:

- Installed into VS Code
- Deployed into a user's environment
- Shared via a marketplace

The reference implementation is [github/awesome-copilot](https://github.com/github/awesome-copilot), which demonstrates diverse skill types across infrastructure, development, automation, data analysis, and go-to-market domains.

### Marketplace Model

The marketplace is a GitHub repository that can be added to VS Code. This is deliberately simple — no app store infrastructure, no review process, just a repo you point your editor at. Skills and plugins are discovered, installed, and updated through git. This mirrors how package managers (npm, pip) started: a shared index backed by version control.

## The Reactive-to-Agentic Progression

GitHub frames Copilot adoption as a three-zone progression, each representing a shift in how the agent operates:

| Zone | Mode | Scope | Examples |
|------|------|-------|----------|
| **Zone 1: Foundational** | Reactive, single-task | IDE / Editor | Ghost text completion, `/fix` slash commands, basic CLI suggest |
| **Zone 2: Intermediate** | Collaborative, context-aware | Repository / Team | `@workspace` chat, interactive CLI, knowledge bases, 1st party extensions |
| **Zone 3: Advanced** | Agentic, goal-oriented | Architect / Org | Copilot Spaces, CLI Autopilot Mode, AI Code Review Agent, Modernization Agent |

Skills and plugins are the mechanism that enables the Zone 2 → Zone 3 transition. Without reusable, agent-discoverable context, Copilot stays reactive. With skills, it becomes proactive — applying domain patterns without being asked, validating against org standards autonomously, running multi-step workflows to completion.

The 4S Prompting Framework (Single, Specific, Short, Surround) operates at Zone 1-2. Skills and plugins operate at Zone 2-3. The [[Decompose-Route-Recompose]] methodology we tested in the brownfield workshop maps to Zone 3 — each RPI phase could be packaged as a Custom Skill.

## The Meta-Insight: Build the Process, Not the Code

The goal of AI-assisted modernization is not to modernize the code. **The goal is to build the process that modernizes the code** — and then let agents execute that process repeatedly, predictably, at scale.

This means the real deliverable of a brownfield engagement isn't refactored source code. It's the skills, hooks, and plugins that encode *how* to refactor — the research templates, the harness requirements, the risk-to-harness mappings, the extraction patterns. The refactored code is a byproduct. The process is the product.

This reframes the economics entirely. When the process is encoded in skills rather than living in an engineer's head or a prompt they paste each time, three things follow:

1. **Predictability enables cheaper models.** A well-defined skill makes outcomes deterministic enough that you don't need a frontier model to reason through ambiguity. Smaller, faster, cheaper models can follow the procedure reliably. The skill carries the intelligence, as noted in [[#Skills Reduce Model Cost]].

2. **The process compounds.** Each engagement refines the skills. The 100x pattern — `/troubleshoot` → diagnose → update skill → permanently fix — means every failure makes the process better. After ten extractions, the skill handles edge cases that the first attempt never anticipated.

3. **The process is shareable.** Package the skills as a plugin, share it via the org marketplace, and every team benefits from the accumulated knowledge. This is [[concepts/ai-development/The Great Inversion|The Great Inversion]] applied to process: the hard part isn't doing the work, it's capturing the *how* so others can do it too.

This connects to [[Decompose-Route-Recompose]] — each RPI phase (Research, Plan, Implement) becomes a skill. The ADC pattern becomes the decision-tracking skill. The harness stack becomes the verification skill. Together they form a plugin: "Brownfield Service Extraction."

## Connection to Our Work

Our [[concepts/ai-development/Agentic Context Framework|ADC artefacts]] (`docs/adc/`) are structurally equivalent to Custom Skills — both are agent-discoverable context folders with bundled resources. The key difference is scope: ADCs record decisions about a specific extraction; Skills encode reusable patterns across projects.

The natural next step: package our RPI methodology as a `.github/skills/brownfield-refactoring/` skill, with the research template, plan template, harness requirements, and risk-to-harness mapping as bundled references. This would fill a gap the [[concepts/ai-development/GitHub Copilot Skills and Plugins#The Reactive-to-Agentic Progression|Modernization Agent]] doesn't cover — it handles framework upgrades, not architectural refactoring.

## See Also

- [[_MOCs/AI-Assisted Development|AI-Assisted Development]] MOC
- [[concepts/ai-development/Agentic Context Framework|Agentic Context Framework]] — ADCs as the decision-tracking equivalent
- [[concepts/ai-development/Law vs Physics in Agent Design|Law vs Physics in Agent Design]] — Skills are physics; prompts are law
- [[concepts/ai-development/Agentic Harness Primitives|Agentic Harness Primitives]] — Deferred tool loading parallels skill discovery
- [[concepts/ai-development/Decompose-Route-Recompose|Decompose-Route-Recompose]] — RPI phases as potential Custom Skills

## Sources

- [awesome-copilot Skills Documentation](https://github.com/github/awesome-copilot/blob/main/docs/README.skills.md)
- [Creating Agent Skills — GitHub Docs](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills)
- [Customize the Modernization Agent — Microsoft Learn](https://learn.microsoft.com/en-us/azure/developer/github-copilot-app-modernization/modernization-agent/customization)

---

*Created [[2026-04-13]] — New note capturing GitHub Copilot's skill/plugin extensibility model, the reactive-to-agentic progression, and connection to our brownfield methodology.*

*Updated [[2026-04-14]] — Added 7-layer extensibility stack, skills vs prompts analysis (deterministic/portable/discoverable), agentskills.io open standard, the meta-insight on building the process not the code, and the 100x pattern.*
