# How to Document a Project

A practical guide for developers who want to set up and maintain project documentation that stays useful over time — for both humans and AI agents.

---

## Before You Write Anything

The biggest mistake is starting with a blank wiki and trying to document everything. Instead, answer two questions first:

1. **Who reads this?** New joiners ramping up, future-you debugging at 2am, and increasingly, AI agents loading context. Each reader needs different things.
2. **What decisions would be wrong without this?** That's what you document first. Everything else can wait.

This aligns with [[Strategic vs Tactical Documentation]] — start with the *why* (strategic) before the *how* (tactical). If you only document procedures without the reasoning behind them, the docs rot the moment the tooling changes.

---

## The Minimum Viable Docs

Every project needs at least these four artefacts. You can expand later, but shipping without these means someone (probably you) will suffer.

### README.md

One screen of text. What is this, why does it exist, and how do I run it locally. Nothing more. If your README has a table of contents, it's too long — move the detail into dedicated docs.

### Architecture Decision Records (ADRs)

Short documents capturing *why* you chose X over Y. Format doesn't matter much, but each record should include the context, the options considered, the decision, and the consequences. These are [[Strategic vs Tactical Documentation|strategic documentation]] — they change rarely and have high leverage.

A lightweight template:

```markdown
# ADR-001: Use PostgreSQL over DynamoDB

## Context
We need a primary data store. Read patterns are complex (joins, aggregations).

## Decision
PostgreSQL via RDS.

## Consequences
- Gives us relational queries without an ORM abstraction layer
- Requires managing connection pooling and read replicas at scale
- Team has existing expertise
```

### Runbook / Getting Started

Step-by-step: clone, install, configure, run. Test this by having someone new follow it. If they ask questions, the runbook is incomplete. This is tactical documentation — expect it to change often and keep it close to the code it describes.

### API or Interface Contracts

If other systems or teams depend on your project, document the interface. OpenAPI specs, protobuf definitions, event schemas — whatever fits. The format matters less than the commitment to keep it current.

---

## Structuring the Docs Folder

A two-tier structure works well for most projects. Keep strategic docs (the *why*) separate from tactical docs (the *how*):

```
docs/
├── strategic/       # Vision, principles, ADRs, design decisions
│   ├── vision.md
│   ├── principles.md
│   └── adrs/
└── tactical/        # Setup guides, coding standards, deployment
    ├── getting-started.md
    ├── coding-conventions.md
    └── deployment.md
```

This separation pays off when working with AI agents — you can load strategic docs at session start as stable context, and pull tactical docs on-demand per task. See [[Strategic vs Tactical Documentation]] for the full rationale.

---

## Writing Docs That Don't Rot

Documentation decays because it lives outside the workflow. Three practices that fight this:

**Docs-as-code.** Store docs in the repo, review them in PRs, and deploy them with CI. If changing the API requires a PR, the API docs update should be in that same PR. Proximity to code is proximity to truth.

**Link, don't repeat.** If something is documented in one place, link to it from everywhere else. Duplication is where staleness starts. A single source of truth with many pointers beats multiple sources that slowly diverge.

**Scheduled audits.** Set a calendar reminder — quarterly is enough — to scan your docs folder. Delete anything that describes a system that no longer exists. Outdated docs are worse than no docs because they erode trust in all your documentation.

---

## Making Docs AI-Agent Friendly

If you're working with AI coding assistants or agentic tools, your documentation doubles as agent context. A few adjustments help:

**Keep strategic docs small.** Aim for under 20KB combined so they can be loaded as always-on context without blowing token budgets.

**Use clear headers and structure.** Agents parse markdown well. Consistent heading levels, code blocks, and tables make retrieval more reliable than prose-heavy walls of text.

**Include a CLAUDE.md or equivalent.** A top-level file that tells agents what matters, where to find things, and what conventions to follow. Think of it as onboarding documentation for your AI colleague — the same principles from [[Colleague vs Tool-Shaped AI]] apply.

---

## Common Pitfalls

**Over-documenting upfront.** You don't need a wiki on day one. Start with the four minimum artefacts and grow organically based on the questions people actually ask.

**Orphaned confluence pages.** Docs that live outside the repo tend to drift. If you must use an external tool, at least link to it from a `docs/` index in the repo so there's a breadcrumb trail.

**No ownership.** If nobody owns the docs, nobody updates them. Assign a docs maintainer per project, or make "update docs" a checklist item in your PR template.

---

## See Also

- [[Strategic vs Tactical Documentation]] — The two-tier model in depth
- [[_MOCs/AI-Assisted Development]] — Broader patterns for working with AI agents
