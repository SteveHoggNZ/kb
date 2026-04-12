---
date: 2026-04-12
type: claude-insights
tags:
  - claude-code
  - monthly-review
---

# Claude Code Monthly Review — 2026-04-12

## At a Glance

### What's Working
You've built a genuinely impressive multi-agent orchestration practice — webhook-triggered workflows where Claude coordinates specialist agents through design, review, and revision cycles with minimal hand-holding. You also use Claude effectively as an architectural thinking partner, running iterative critique rounds to harden plans before committing, and you're comfortable driving large cross-language changes across Go, TypeScript, and Python in a single session.

### What's Hindering
On Claude's side, manifest schema formatting has been a real pain point — Claude repeatedly guesses wrong on field names and structure, sometimes failing 10+ times before landing it. On your side, environment drift (stale artifacts, overwritten .env files, reverted renames leaking into builds) and unchecked permission gaps (missing thread access, channel 404s, RLS blocks) are turning what should be smooth sessions into multi-hour debugging spirals.

### Quick Wins
Create a custom skill (`/workflow-manifest`) that pre-loads your manifest schema and a working reference example so Claude never has to guess the format again. You could also set up a hook that auto-validates agent permissions and channel access at session start before kicking off orchestration workflows, catching those permission walls before they stall you mid-task.

## Top Friction Points

### Workflow Manifest Schema Struggles
You repeatedly hit errors when defining workflow manifests, with Claude failing many times on field names, formats, and structure before getting it right. Providing a reference manifest or asking Claude to read the schema definition first would drastically cut these retry cycles.

**Examples:**
- Claude made ~10 failed attempts to propose an e-commerce API workflow due to incorrect manifest format and field names, and one session ended with the workflow never created at all
- Multiple sessions showed Claude retrying task completion with wrong output schema formatting (missing/wrong field types), burning context window on trial-and-error

### Environment and Configuration Drift Causing Debug Spirals
You frequently encounter cascading runtime failures from stale artifacts, wrong env vars, and reverted renames polluting your workspace. Establishing a reset/validation script before major refactors would prevent these multi-hour debugging sessions.

**Examples:**
- The 'cnic' rename leaked beyond scope, stale Docker volumes and overwritten .env files from a reverted rename broke your dev environment across multiple services
- OpenSSL errors, key format mismatches, double transport.start(), and missing env vars required iterative debugging across your Go/Python/TypeScript monorepo, with Claude occasionally needing course-correction on architecture

### Permission and Access Gaps Blocking Completion
You hit permission walls mid-task — missing create_thread rights, channel 404s, RLS policy blocks, and claim_task failures — that stall otherwise working sessions. Pre-validating agent permissions and channel access before kicking off orchestration workflows would save you from partial outcomes.

**Examples:**
- Persistent channel-not-found errors prevented Claude from ever responding in one session, and a separate session's thread budget exhausted before a specialist could respond, leaving schema review incomplete
- Claude lacked create_thread permission to collaborate with AMP Expert, and couldn't broadcast frames to a main channel due to permission issues, leaving multiple tasks partially achieved

## Suggested CLAUDE.md Rules

### Validate schemas before submitting
> When working with workflow manifests or API schemas, always validate the exact field names, types, and structure against the actual schema definition before submitting. Never guess at manifest formats - read the schema first.

**Why:** Multiple sessions show 10+ failed attempts due to incorrect manifest format, wrong field names, and schema mismatches — this was the #1 friction pattern.
**Where:** Add under a `## Workflows & Manifests` section

### Verify root causes before fixing
> When debugging deployment or API errors, verify the actual root cause before proposing fixes. Check RLS policies, org membership, and permission issues before assuming application-level bugs.

**Why:** Sessions show Claude repeatedly misidentifying root causes (e.g., blaming SSE when it was RLS/org membership), wasting debugging cycles.
**Where:** Add under a `## Debugging` section

### Be aware of stale state in polyglot monorepo
> This is a polyglot monorepo with Go, TypeScript, Python, and Shell. When making changes, be aware of build artifacts, .env files, and Docker volumes that may contain stale state from previous renames or refactors. Never overwrite .env files without backing up.

**Why:** Multiple sessions had friction from stale build artifacts, overwritten .env files, and cross-language dependency issues in the monorepo.
**Where:** Add under a `## Project Structure` section at the top

### Verify tool availability before orchestrating
> When coordinating multi-agent workflows, always verify tool availability with a single ToolSearch before starting, and confirm you can access specialist outputs before reporting completion.

**Why:** Multiple workflow orchestration sessions failed because Claude couldn't find tools or retrieve specialist outputs, requiring many retries.
**Where:** Add under a `## Multi-Agent Workflows` section

## Features to Try

### Custom Skills — Reusable prompts that run with a single /command
**Why for me:** You already use context-dump skills heavily (14 sessions). Creating skills for your repeated workflows like /security-review, /workflow-manifest, and /api-design would eliminate the manifest format errors that caused 10+ retries per session.

```bash
mkdir -p .claude/skills/workflow-manifest && cat > .claude/skills/workflow-manifest/SKILL.md << 'EOF'
# Workflow Manifest Creator
1. First read the manifest schema from docs/workflow-schema.json
2. Validate all field names and types against the schema
3. Check agent capabilities match available agents via list_agents
4. Submit the manifest only after validation passes
EOF
```

### Hooks — Shell commands that auto-run at specific lifecycle events
**Why for me:** With 40 buggy_code and 39 wrong_approach friction events, auto-running type checks and linting after edits would catch errors before they compound into long debugging cycles across your Go/TS/Python code.

```json
// .claude/settings.json
{
  "hooks": {
    "postEdit": [
      { "match": "*.go", "command": "cd $(git rev-parse --show-toplevel) && go vet ./..." },
      { "match": "*.ts", "command": "npx tsc --noEmit" }
    ]
  }
}
```

### Task Agents — Claude spawns focused sub-agents for parallel exploration
**Why for me:** Your multi-agent workflow orchestration sessions often stall when Claude can't find tools or understand specialist outputs. Using task agents to pre-explore available tools and schema structures before starting coordination would prevent the repeated failures.

## Usage Patterns to Adopt

### Schema Validation Before Submission
Always ask Claude to read and confirm the schema before attempting manifest/API submissions. Your biggest friction source is Claude guessing at manifest formats and failing 10+ times. By explicitly prompting Claude to read the schema definition first, you can eliminate these retry loops.

**Prompt:**
> Before creating the workflow manifest, read the schema definition file and list all required fields with their exact types. Then create the manifest strictly following that schema.

### Root Cause Isolation for Deployment Bugs
Force a systematic check of infrastructure-level causes before diving into application code. In multiple sessions, Claude spent time debugging application code when the real issue was RLS policies, org membership, permissions, or stale Docker state.

**Prompt:**
> This deployment is failing. Before changing any application code, systematically check: 1) RLS/permission policies 2) org/team membership provisioning 3) environment variables and secrets 4) stale Docker volumes or build artifacts. Report findings before proposing fixes.

### Prevent Tool Discovery Loops
Pre-load available tools at the start of orchestration sessions. Multiple sessions show Claude calling list_tasks or ToolSearch 49+ times in loops.

**Prompt:**
> List all available MCP tools and their descriptions once. Save this as your reference. Do not call ToolSearch again during this session - use the list you already have.

## On the Horizon

### Self-Healing Multi-Agent Workflow Orchestration
Agents could autonomously validate their own output schemas against specs, retry with corrective context, and escalate only after exhausting self-repair strategies — eliminating the loops where Claude tried 10+ times to get a manifest right.

**How to try:** Use Claude Code with a CLAUDE.md that encodes your workflow manifest schema and validation rules, so the agent can lint its own outputs before submission.

### Parallel Test-Driven Debugging Across Languages
Launch parallel Claude agents that each own one language's test suite — running tests, diagnosing failures, applying fixes, and re-running until green, all simultaneously. This turns serial debugging sessions into a 3x parallel pipeline.

**How to try:** Use Claude Code's headless mode to spawn parallel agents per language, each iterating against their test suite with `claude -p` and reporting back.

### Autonomous Deploy-Debug-Fix Feedback Loops
An autonomous agent could deploy to staging, tail logs, detect errors, correlate them with recent code changes, apply fixes, and redeploy — closing the loop without human intervention for common failure classes.

**How to try:** Set up a Claude Code agent with access to your deploy scripts and log tailing commands, using a structured runbook in CLAUDE.md for common deployment failure patterns.

## Impressive Things I Did

### Multi-Agent Workflow Orchestration at Scale
You've built and repeatedly exercised sophisticated multi-agent coordination patterns — triggering webhook-based workflows where Claude orchestrates parallel specialists (API Designer, Database Architect, Security Auditor) through design, review, and revision cycles. Your iteration on manifest-driven orchestration across dozens of sessions shows a serious commitment to autonomous agent pipelines that complete end-to-end with minimal human intervention.

### Cross-Language Monorepo Feature Development
You're driving substantial feature work spanning Go, TypeScript, and Python simultaneously — including federated auth, MCP HTTP transport with tool profiles, a Slack bridge, and a full TypeScript port of a Python SDK. Your ability to leverage Claude across 62+ file changes in a single session while navigating real integration complexity is impressive.

### Strategic Architecture Through Iterative Critique
You use Claude as a genuine thought partner for architectural decisions, running multiple rounds of critique and counter-critique to harden strategic plans before committing. Your feasibility analysis workflow — grounding proposals against internal docs with LSP verification — shows a disciplined approach to ensuring AI-assisted planning stays anchored in reality.

---
*Generated by /monthly-insights on 2026-04-12*
