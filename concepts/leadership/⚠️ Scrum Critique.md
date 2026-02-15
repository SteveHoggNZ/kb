# ⚠️ Anti-Pattern: Scrum

Scrum is a perverted implementation of agile philosophy masquerading as best practice.

---

## The Core Problem

Scrum was designed for manufacturing and assembly-line work where:
- Tasks are predictable and repeatable
- Progress is linear and measurable
- Workers are interchangeable

Software development is none of these things.

---

## Why Scrum Fails for Software

### Daily Standups Are Interrupts
A synchronous meeting to solve an asynchronous problem. Everyone stops work at the same time to share status that could be a Slack message.

**Real cost:** Context switching penalty × team size × every single day.

### Story Points Become Performance Metrics
The moment velocity is tracked, story points inflate. Teams game the system. Points lose meaning. Now you're measuring the wrong thing *and* corrupting your planning tool.

### Sprint Ceremonies Consume Engineering Time
- Sprint planning: 2-4 hours
- Daily standups: 15 min × 10 days = 2.5 hours
- Sprint review: 1-2 hours
- Retrospective: 1-2 hours

**Total: 10-20% of a two-week sprint spent in meetings about work instead of doing work.**

### Artificial Deadlines Create Artificial Stress
Two-week sprints create two-week pressure cycles. Features get rushed to fit arbitrary boundaries. Quality suffers. Technical debt accumulates.

### The Scrum Master Role
A full-time job managing a process that shouldn't exist. The role incentivizes process complexity—simpler process means less job security.

---

## The Evidence Against

Detectives, brokers, lawyers, doctors, and researchers all do knowledge work. They're agile without scrum. They:
- Respond to new information
- Prioritize dynamically
- Collaborate as needed
- Deliver results

No sprints. No velocity. No burndown charts.

---

## What to Do Instead

### Async Status Updates
Weekly written bullet points. Each person shares:
- What they completed
- What they're working on
- What's blocking them

Takes 5 minutes to write, 2 minutes to read. No meeting required.

### Trust the Team
If you can't trust engineers to manage their own work, you have a hiring problem, not a process problem.

### Track Outcomes, Not Activity
Measure what shipped and its impact. Not story points. Not velocity. Not "commitment met."

### Use Tools Without Rituals
Jira, Linear, GitHub Projects—all work fine without the ceremonial overhead. Update tickets as you work. Pull from the backlog when ready.

---

## When Scrum *Might* Work

- Very junior teams needing structure
- Organizations requiring paper trails for compliance
- Teams that genuinely enjoy the rituals

Even then, consider lightweight alternatives first.

---

## External Critiques

- [Why Scrum is the Wrong Way to Build Software](https://typicalprogrammer.com/why-scrum-is-the-wrong-way-to-build-software) — Typical Programmer
- [Agile is Dead](https://www.youtube.com/watch?v=a-BOSpxYJ9M) — Dave Thomas (Agile Manifesto co-author)

---

## Related Concepts

- [[The Process Is Not The Product]] — Don't confuse process compliance with value delivery
- [[concepts/leadership/The Four Ts|The Four Ts]] — Trust as foundational to team effectiveness

## See Also

- [[_MOCs/Leadership & Teams]] — Back to the MOC
