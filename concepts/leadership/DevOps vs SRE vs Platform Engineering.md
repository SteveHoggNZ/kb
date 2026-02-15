# DevOps vs SRE vs Platform Engineering

Three approaches to the same problem: who runs production?

---

## The Evolution

```
DevOps → Site Reliability Engineering → Platform Engineering
```

Each addresses the tension between developer velocity and operational stability.

---

## The Soccer Analogy

> Dev, SRE, and Ops are positions (forward, midfield, back). DevOps is a formation (4-3-3).

DevOps isn't a job title—it's a system. The others are roles within that system.

---

## DevOps

**Philosophy:** Break down silos between development and operations.

**Problem it created:** Cognitive load. "You build it, you run it" means developers must understand networking, security, Kubernetes, monitoring, on-call...

**Shadow Operations:** Without an explicit ops team, your best developers become the de facto ops team.

---

## Site Reliability Engineering (SRE)

**Google's answer:** Engineering discipline for operations.

> SRE = Upgraded traditional Ops
> - **S**ite infers scale
> - **R**eliability defines responsibility
> - **E**ngineering dictates methodology

**Key concepts:**
- **SLO** (Service Level Objective) — Internal targets
- **SLA** (Service Level Agreement) — External commitments
- **SLI** (Service Level Indicator) — The measurements

This triplet is the contract between SREs and developers for shared goals.

**Responsibilities:** Availability, latency, performance, efficiency, change management, monitoring, emergency response, capacity planning.

---

## Platform Engineering

**The abstraction layer:** Self-service developer platforms.

> Platform engineering designs toolchains and workflows that enable self-service capabilities for software engineering organizations.

**The product:** Internal Developer Platform (IDP).

> "A bridge between developers and platform teams so developers can do their job without being blocked by operations. Operations can ensure standards without putting that on developer shoulders."
> — Chris Stephenson, Humanitec CTO

---

## Golden Paths

Platform engineering's key concept: **paved roads** that make the right thing the easy thing.

Instead of documentation that says "here's how to deploy," provide a platform where deployment is one click.

Where DevOps creates cognitive load, platform engineering alleviates it through abstraction.

---

## When to Use What

| Stage | Approach |
|-------|----------|
| Early startup | DevOps (everyone does everything) |
| Scaling | SRE (dedicated reliability engineers) |
| Large org | Platform Engineering (self-service abstractions) |

---

## Related Concepts

- [[The Four Ts]] — Tools are one of the 4 Ts
- [[Conway's Law]] — Platform teams shape how product teams work
- [[Observability by Default]] — What SREs care about

## See Also

- [[_MOCs/Leadership & Teams]] — Back to the MOC

## Sources

- https://www.bytebase.com/blog/dev-sre-ops-devops-difference
- https://sre.google/sre-book/introduction/
- https://platformengineering.org/
