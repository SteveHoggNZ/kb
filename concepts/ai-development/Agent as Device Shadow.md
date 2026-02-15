# Agent as Device Shadow

An agent that acts as your persistent virtual twin — maintaining your state, representing you when unavailable, and syncing when you return.

Borrowed from IoT architecture, where "device shadows" solve the problem of unreliable, intermittent devices.

---

## The IoT Pattern

In AWS IoT, a **device shadow** is:

- A virtual representation of a physical device
- Maintains **reported state** (last known actual state)
- Accepts **desired state** (what you want it to become)
- Syncs bidirectionally when the device reconnects
- Enables interaction with offline/unreliable devices

**The key insight:** The shadow is always available, even when the device isn't.

---

## Applied to People

People are "unreliable devices" — we sleep, focus, attend meetings, go offline.

| Device Shadow | Person Shadow |
|---------------|---------------|
| Device offline | Person unavailable |
| Reported state | Your context, preferences, work-in-progress |
| Desired state | Intentions, delegated decisions, queued actions |
| Sync on reconnect | Review + approve when you return |
| Always available | Shadow interacts on your behalf 24/7 |

---

## What the Shadow Maintains

### Reported State (What's True About You)
- Current projects and their status
- Preferences and decision patterns
- Communication style
- Availability and focus modes
- Recent context (what you were working on)

### Desired State (What You Want)
- Goals and priorities
- Standing instructions ("always escalate X")
- Delegation boundaries ("can approve up to Y")
- Scheduled intentions ("remind me to Z")

### Delta (What Needs Your Attention)
- Decisions that exceeded delegation authority
- Novel situations the shadow couldn't handle
- Conflicts between your stated preferences
- Opportunities that require human judgment

---

## Interaction Patterns

### Shadow-to-Shadow
Your shadow interacts with others' shadows while you're unavailable:

```
Alice's Shadow: "Does Bob have capacity for the API review?"
Bob's Shadow: "Bob is focused until 2pm. Based on his priorities,
              this fits. Tentatively yes — will confirm when he syncs."
```

Neither human was interrupted. When Bob syncs, he confirms or overrides.

### Shadow-to-Human
Others can interact with your shadow directly:

```
Carol: "What's Steve's take on the deployment timeline?"
Steve's Shadow: "Based on his recent comments and priorities,
                he'd likely push for Thursday. Want me to queue
                this for confirmation when he's available?"
```

### Human-to-Shadow (Your Own)
You interact with your shadow to:
- Set desired state ("prioritize X this week")
- Review accumulated delta ("what happened while I was out?")
- Adjust delegation boundaries ("you can now approve Y")

---

## Autonomy Levels in Shadow Mode

The shadow operates at different [[Agent Autonomy Levels]] based on situation:

| Situation | Shadow Level | Behavior |
|-----------|--------------|----------|
| Within delegation bounds | Level 4-5 | Act independently or act-then-report |
| Edge case, reversible | Level 3 | Queue recommendation for sync |
| Novel or high-stakes | Level 2 | Acknowledge, defer to human |
| Human present | Level 2-3 | Colleague mode, real-time collaboration |

**The key shift:** When you're unavailable, the shadow operates at the highest level your trust boundaries allow. When you return, it drops to collaborative mode.

---

## Eventually Consistent

Unlike real-time collaboration, the shadow model is **eventually consistent**:

- You and your shadow sync periodically, not continuously
- Divergence is expected and managed
- Conflicts are resolved at sync time
- The shadow optimizes for "good enough now" over "perfect later"

This matches how async work actually happens — you don't need real-time consensus for most decisions.

---

## Trust and Boundaries

The shadow only works if boundaries are clear:

### Hard Boundaries (Never Cross)
- Financial commitments above $X
- Public statements on behalf of the person
- Irreversible actions without confirmation

### Soft Boundaries (Use Judgment)
- Scheduling within stated availability
- Responding to routine requests
- Providing context others request

### Learning Boundaries (Expand Over Time)
- Patterns the shadow learns from your corrections
- Delegation authority that increases with demonstrated reliability

This maps to [[Agent Autonomy Levels]] — trust is earned through demonstrated reliability.

---

## The Sync Ritual

When you reconnect with your shadow:

1. **Review delta** — What happened? What needs attention?
2. **Approve/override** — Confirm queued decisions or correct them
3. **Update state** — New context, changed priorities, learned preferences
4. **Adjust boundaries** — Expand or contract delegation based on performance

This is the "insure the monkey" pattern from [[Monkey Management]] — accountability without micromanagement.

---

## Why This Matters

### For Individuals
- **Continuity** — Context persists across sessions; no cold start
- **Availability** — You're "reachable" even when focused or offline
- **Leverage** — Routine interactions handled without your attention

### For Teams
- **Async collaboration** — Shadows negotiate while humans focus
- **Reduced interruption** — Query someone's shadow before pinging them
- **Timezone bridging** — Shadows interact across time zones

### For Organizations
- **Institutional memory** — Shadows accumulate organizational knowledge
- **Succession** — Shadow captures how someone operates, easing transitions
- **Scale** — More interactions without more human attention

---

## Failure Modes

| Failure | Cause | Mitigation |
|---------|-------|------------|
| Shadow diverges too far | Sync too infrequent | Regular sync rituals |
| Over-delegation | Boundaries too loose | Start conservative, expand with trust |
| Uncanny valley | Shadow acts "off" | Clear disclosure that it's a shadow |
| Accountability diffusion | "My shadow did it" | Human remains accountable for shadow actions |

---

## Connection to Other Concepts

### [[Agent Autonomy Levels]]
Shadow operates at Level 4-5 in your absence, Level 2-3 when you're present.

### [[Async-First Design]]
Shadows are the agent equivalent of async communication patterns.

### [[The Barbell Economy]]
Shadow handles Layer 1 accumulation. Human provides Layer 2 judgment at sync.

### [[Colleague vs Tool-Shaped AI]]
Shadow is a colleague that knows you well enough to represent you — not a tool you invoke.

---

## Open Questions

- How do you bootstrap a shadow? Cold start problem.
- What's the right sync frequency? Too often = interruption; too rare = divergence.
- How do shadows handle conflicting instructions from multiple people?
- Legal/ethical status of shadow commitments?

---

## Related Concepts

- [[Agent Autonomy Levels]] — Delegation framework the shadow operates within
- [[Async-First Design]] — Architectural pattern shadows enable
- [[The Barbell Economy]] — Layer 1 vs Layer 2 value split
- [[Colleague vs Tool-Shaped AI]] — Shadow as ultimate colleague
- [[Monkey Management]] — Sync ritual as "insuring the monkey"

## See Also

- [[_MOCs/AI-Assisted Development]] — Back to the MOC

## Sources

- AWS IoT Device Shadows — The original pattern
- Synthesis applying IoT concepts to human-agent interaction
