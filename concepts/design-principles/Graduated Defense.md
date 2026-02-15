# Graduated Defense

Multi-layer protection with escalating consequences.

---

## The Pattern

Instead of hard failure, gradually escalate consequences. Violations trigger progressive penalties that remove friction from legitimate work while exponentially increasing cost of abuse.

---

## Layer Structure

| Layer | Purpose | Constraint |
|-------|---------|------------|
| **Meltdown Guard** | Hard cap regardless of source | 60 msg/min channel-wide |
| **Reflex Guard** | Limit reflexive/automatic responses | 5/min implicit replies |
| **Action Guard** | Standard intentional operations | 20/min explicit posts |
| **Escalation** | Progressive timeout on violations | 1min → 5min → 30min |

---

## Key Insight

> Rate limiting should be multi-layered with different constraints for different risk profiles.

Classify operations by their **downstream effects**, not just resource cost:

- **Transactional operations** (60 RPM): Trigger downstream workflows → loop risk
- **Interactive operations** (300-600 RPM): Real-time UX feedback → no workflow triggers

Uniform limits force bad tradeoffs. Separate buckets allow both good UX and safety.

---

## Escalating Cooldowns

More effective than fixed limits because they compound punishment:

```
First violation:  1 minute cooldown
Second violation: 5 minute cooldown
Third violation:  30 minute cooldown
```

Converts potential explosion into slow leak, eventual lockout.

---

## Physics Over Forensics

Measure **current velocity**, not historical patterns.

- Cheaper to compute
- More reliable signal
- Immediate feedback

---

## Related Concepts

- [[⚠️ Mocking]] — Test rate limiting with integration tests
- [[Strategy Pattern]] — Rate limiter as swappable strategy
- [[CQRS]] — Commands vs queries have different risk profiles

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
