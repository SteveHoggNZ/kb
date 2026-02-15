# Scalable Multi-Agent Architecture

The current industry approach to multi-agent AI systems is flawed because it mimics human team dynamics. Human-like collaboration works at small scale (3-5 agents) but collapses under **coordination overhead** when scaled to hundreds or thousands.

**Core thesis:** "Simplicity scales, but complexity creates serial dependencies."

To convert compute into capability, move away from complex autonomous agents toward highly orchestrated systems of simple, isolated "workers."

---

## The Problem: The "Human Team" Fallacy

Most AI frameworks recommend agents that share context, coordinate dynamically, and operate continuously. This leads to failure modes:

| Failure Mode | Description |
|--------------|-------------|
| **Coordination Overhead** | Agents spend more time waiting, duplicating work, or resolving conflicts than performing tasks |
| **Serial Dependency** | One agent's work blocks another (e.g., file locks), negating parallelism benefits |
| **Performance Degradation** | Google/MIT study: adding more agents makes systems *worse* once single-agent accuracy passes ~45%, especially in tool-heavy environments |
| **Risk Aversion** | Flat structures with no hierarchy → agents gravitate toward easy tasks, avoid high-stakes problems (diffuse responsibility) |

---

## Five Rules for Scalable Multi-Agent Systems

Counter-intuitive rules from successful practitioners (Cursor, Steve Yegge's "Gastown"):

### 1. Two Tiers, Not Teams

Avoid flat "peer" structures. Use strict two-tier hierarchy:

```
┌─────────────────────────────────┐
│     PLANNERS / JUDGES           │  ← Create tasks, evaluate results
├─────────────────────────────────┤
│  Worker  Worker  Worker  Worker │  ← Execute in total isolation
└─────────────────────────────────┘
```

| Structure | Problem |
|-----------|---------|
| **Deep hierarchy (3+ tiers)** | "Telephone game" drift — intent degrades through layers |
| **Flat teams** | Coordination bottlenecks, diffuse responsibility |
| **Two tiers** | ✓ Clear accountability, minimal coordination |

### 2. Workers Stay Ignorant ("Minimum Viable Context")

Contrary to "smarter is better" — workers should be **ignorant of the big picture**.

| Full Context | Minimum Viable Context |
|--------------|------------------------|
| Agent sees entire project | Agent sees only immediate task data |
| **Scope creep** — refactors whole codebase when asked to fix one function | Stays focused on discrete task |
| Conflicts with other agents' goals | No awareness of other agents |

**The fix:** Provide only the specific data needed for the immediate task.

### 3. No Shared State

Agents should not fight over the same "toolbox" or shared memory.

| Problem | Impact |
|---------|--------|
| **Contention** | Accessing shared tools requires complex locking |
| **Tool Fatigue** | Agent accuracy drops significantly with >30-50 tool choices |

**The fix:**
- Give agents small, specialized toolsets (3-5 tools)
- Use external systems (Git, task queues) to merge results *after* agent terminates

### 4. Plan for Endings (Episodic Operation)

Long-running continuous agents suffer from **"context pollution"** — memory fills with irrelevant noise, agent loses track of priorities ("lost in the middle" phenomenon).

**The fix:** Episodic operation
1. Run agent for short burst
2. Capture output to external storage
3. Kill the agent
4. Next "clean" agent picks up using external scaffold

**Idempotence:** System state lives *outside* the agent. If an agent crashes, the next one resumes exactly where the last left off.

### 5. Sophisticated Orchestration, Simple Agents

Move engineering effort from the **agent layer** to the **orchestration layer**.

> 79% of multi-agent failures stem from coordination and specification issues, not technical bugs.

| Wrong Goal | Right Goal |
|------------|------------|
| Build one "Jason Bourne" super-agent | Coordinate 10,000 "dumb" agents effectively |
| Brilliant autonomous agents | Robust orchestration layer |

---

## The Meta-Insight

```
Human Teams              vs.           Scalable Agent Systems
─────────────────────────────────────────────────────────────
Shared context                         Isolated workers
Dynamic coordination                   Static task assignment
Continuous operation                   Episodic bursts
Peer collaboration                     Two-tier hierarchy
Smart agents                           Simple agents + smart orchestration
```

**The winners of the next phase** will be those who stop building "brilliant" agents and instead build robust orchestration layers.

---

## Tension with Other Concepts

This creates productive tension with [[Teams Of Agents - LLM Specialisation+Personas]]:

| Multi-Persona (Small Scale) | Scalable Architecture (Large Scale) |
|-----------------------------|-------------------------------------|
| 3 simulated experts beat 1 generalist | 10,000 simple workers beat 100 smart ones |
| Agents share context, debate | Workers stay ignorant, isolated |
| Ensemble effect for quality | Parallelism for throughput |

**Resolution:** Different tools for different scales:
- **Small scale (3-5 agents):** Multi-persona for quality, synthesis, fact-checking
- **Large scale (100+ agents):** Isolation + orchestration for throughput

---

## Connection to Existing Patterns

| Concept | Connection |
|---------|------------|
| [[Context Distillation Loop - amnesia as a feature]] | Episodic operation = forced distillation. "Amnesia" is a feature here too. |
| [[The Great Inversion]] | Orchestration is cheap; agent complexity is the bottleneck |
| [[Strategic vs Tactical Documentation]] | Minimum Viable Context = tactical docs only, no strategic loading |
| [[Colleague vs Tool-Shaped AI]] | These are extreme Tool-shaped agents — zero dialogue, pure execution |

---

## Related Concepts

- [[Teams Of Agents - LLM Specialisation+Personas]] — Contrasting approach for small-scale quality
- [[Context Distillation Loop - amnesia as a feature]] — Episodic operation as forced clarity
- [[Agents vs Long Context]] — Another dimension of the agent architecture trade-off
- [[The 2026 Builder Operating System]] — Engineering Manager Mindset applied to agent orchestration

## Sources

- [Scalable Multi-Agent Architecture (YouTube)](https://youtu.be/2EXyj_fHU48?si=tgjOMKUOdZKp6uBT) — Nate B. Jones
