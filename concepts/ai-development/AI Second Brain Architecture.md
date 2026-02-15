# AI Second Brain Architecture

A methodology for building an active, agentic knowledge system using AI automation—designed for non-engineers.

---

## The Core Problem

The human brain has limited working memory and poor retrieval capabilities. Traditional productivity systems fail because they rely on the user to manually organize, tag, and file information—often requiring cognitive effort at the most inconvenient times.

Result: Most "Second Brains" become junk drawers that users stop trusting.

---

## The Shift: From Storage to AI Loops

The key insight is moving from **passive storage** to **active processing**. Instead of just storing data, the system works on it while you're doing other things—classifying, routing, summarizing, and surfacing information without you having to remember to do so.

---

## The Recommended Tech Stack

A simple, accessible stack for non-engineers:

| Layer | Tool | Purpose |
|-------|------|---------|
| Capture | Slack | Private channel as frictionless input |
| Storage | Notion | Four simple databases |
| Automation | Zapier/Make | Connects the apps |
| Intelligence | Claude/ChatGPT | Processes, classifies, formats data |

---

## The 8 Building Blocks

### 1. The Dropbox (Ingress)
A single, frictionless place to dump thoughts. One message = one thought. No tagging or organizing required at input.

### 2. The Sorter (Router)
AI determines where the thought belongs (People, Project, Idea, or Admin). You don't make taxonomy decisions in the moment.

### 3. The Form (Schema)
A consistent set of fields for every entry (Name, Status, Next Action). Consistency enables automation.

### 4. The Filing Cabinet (Storage)
The actual databases where information lives.

### 5. The Receipt (Audit Trail)
A separate "Inbox Log" that records what came in, how the AI classified it, and its confidence score. This builds trust by making errors traceable.

### 6. The Bouncer (Guardrails)
A confidence threshold (e.g., 0.6). If the AI isn't sure where a note goes, it asks for clarification instead of filing it. Prevents database garbage.

### 7. The Tap on the Shoulder (Notification)
The system pushes a daily digest (top 3 actions) and weekly summary to you. You don't have to remember to search your notes.

### 8. The Fix Button (Feedback Loop)
Reply to the message (e.g., "Fix: This is a project") to correct misclassification without opening the database.

---

## 12 Engineering Principles for Non-Engineers

### Input & Capture
1. **Reduce human input to one behavior** — The only job is to capture the thought. Everything else is automation.
2. **Decouple memory, compute, and interface** — Keep storage (Notion), logic (Zapier/AI), and input (Slack) separate so you can swap tools without breaking the system.

### AI & Processing
3. **Treat prompts like APIs** — Prompts should be rigid contracts requiring structured data (JSON) returns, not creative writing exercises.
4. **Build a trust mechanism** — You must be able to see *why* the system made a decision (via logs) to trust it.
5. **Default to safety** — When uncertain, the system should do nothing and ask for help rather than file incorrectly.

### Output & Action
6. **Make outputs small and frequent** — Daily digests should fit on a phone screen (under 150 words).
7. **"Next Action" is the unit of execution** — Don't store vague intentions ("Work on website"); store concrete next steps ("Email Sarah").

### Organization
8. **Prefer Routing over Organizing** — Let the AI route items into a few stable buckets rather than maintaining complex folder structures.
9. **Keep categories painfully small** — Limit to four databases: **People, Projects, Ideas, Admin**. Richness creates friction; simplicity scales.

### Sustainability
10. **Build for restart, not perfection** — Handle gaps in usage (vacations, bad weeks) without creating a "backlog monster" that induces guilt.
11. **Build one workflow, then attach modules** — Start with core text capture. Add voice or calendar integrations only after the core is stable.
12. **Optimize for maintainability** — The system should be easy to fix when connections break so you don't abandon it.

---

## Quick Implementation

1. Create a private **Slack** channel
2. Create 5 **Notion** databases: People, Projects, Ideas, Admin, Inbox Log
3. Set up **Zapier** to:
   - Trigger on new Slack message
   - Send to AI for classification (structured JSON response)
   - Route to correct Notion database based on response
4. Schedule Zaps for daily morning digest and weekly Sunday review

---

## The Promise

By following this architecture, you can close "open loops" in your brain, reduce anxiety, and create a system that compounds the value of your work over time.

---

## Related Concepts

- [[The Great Inversion]] — AI has flipped the cost of thinking vs. doing
- [[Eight Habits to Break]] — Scarcity-era habits to unlearn

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- [Building a Second Brain with AI (YouTube)](https://www.youtube.com/watch?v=0TpON5T-Sw4)
