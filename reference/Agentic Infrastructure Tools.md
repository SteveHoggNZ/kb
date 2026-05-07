# Agentic Infrastructure Tools

Infrastructure and services purpose-built for running AI agents in production — the picks-and-shovels layer beneath the agent frameworks. Where [[AI & LLM Tools]] covers frameworks and model providers, this note covers the operational infrastructure agents need to actually *do things* in the real world: browse the web, authenticate, execute code, manage sessions, and scale.

> These are the tools that implement the [[Agentic Harness Primitives]] in practice — the plumbing that sustains the 80% of agent work that isn't AI.

---

## Browser Infrastructure

| Tool | What It Does | URL |
|------|-------------|-----|
| **Kernel** | Cloud browser infrastructure for AI agents. Managed headless Chromium with anti-bot bypass, reusable sessions, fast spin-up, autoscaling, and GPU acceleration. YC-backed, SOC 2 + HIPAA compliant. Collaborated with Anthropic on computer-use model evals. 3,000+ teams including Framer and Cash App. Open-source browser image (kerneloss). | https://kernel.sh |

---

## Sandboxed Execution

*Coming soon — add tools for isolated code execution environments (E2B, Modal, etc.)*

---

## Agent Auth & Identity

*Coming soon — add tools for agent authentication, credential management, OAuth flows*

---

## Orchestration & Deployment

*Coming soon — add platforms for deploying and scaling agent workloads*

---

## Observability & Evaluation

*Coming soon — add tools for monitoring agent runs, evals, tracing*

---

## See Also

- [[AI & LLM Tools]] — General AI development tools, frameworks, and model providers
- [[Claude Code Plugins]] — Community plugins for Claude Code specifically
- [[Agentic Harness Primitives]] — The 12 infrastructure primitives these tools implement
- [[Agentic Primitives]] — Computer Use, Scheduled Tasks, Dispatch — the capabilities these tools enable
- [[_MOCs/AI-Assisted Development]] — Back to the MOC

---

*Created [[2026-04-14]] — Started with Kernel (cloud browser infrastructure)*
