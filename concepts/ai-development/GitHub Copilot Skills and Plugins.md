# GitHub Copilot Skills and Plugins

Skills and plugins are GitHub's extensibility model for Copilot agents — the mechanism that turns a general-purpose coding assistant into a domain-specific expert.

## Skills

A skill is a self-contained folder with a `SKILL.md` instruction file and optional bundled resources (scripts, references, examples). Skills live in `.github/skills/{skill-name}/` and are loaded on-demand when an agent detects a matching trigger condition.

The critical distinction: **a skill can be executed by an agent, whereas a prompt cannot.** A prompt is a one-shot instruction that dies with the conversation. A skill is a persistent, discoverable, reusable behaviour that agents find and apply autonomously. This shifts the investment from correcting the agent each time to building the skill once and refining it until it works reliably.

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
