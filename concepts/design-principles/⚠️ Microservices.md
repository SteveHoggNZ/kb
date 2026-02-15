# ⚠️ Anti-Pattern: Microservices (Premature)

Each bespoke service is an extreme version of technical debt.

---

## The Hierarchy

```
Monolith > Apps > Services > Microservices
```

Move down this hierarchy reluctantly, not eagerly.

---

## The Core Insight

> "I'm convinced that one of the biggest architectural mistakes of the past decade was going full microservice."
> — Jason Warner, former GitHub CTO

---

## Definitions

**Monolith** — Your entire site in one deployable unit (e.g., Rails app at xyz.com)

**Apps** — Major value propositions, distinct products (abc.xyz.com). Limited to a few.

**Services** — Supporting infrastructure used across apps. Core compliance functions. Maintained by infra teams, not app teams.

**Microservices** — Few hundred lines of code. Mostly one-offs. Should probably be a library or SDK.

---

## Why Microservices Hurt

### Complexity Compounds
> "It's generally easier for entire engineering teams to work inside one big app than to reason about the ways in which microservices will fail."

Distributed systems are hard enough without introducing dozens or hundreds of services with their own failure modes.

### Services as Debt
> "Each bespoke infra service or microservice is an extreme version of debt. Code is debt, but services are extreme versions of that."

Every service needs:
- Deployment pipeline
- Monitoring
- Alerting
- Runbooks
- On-call coverage
- Dependency management
- Network policies

### You'll Need New Infrastructure
As you go fully micro, you need to introduce new concepts to handle the sprawl: service mesh, distributed tracing, API gateways, service discovery...

Each layer adds operational complexity.

---

## Who Should Use Microservices

> "90% of all companies could probably just be a monolith running against a primary DB cluster with backups, some caches and proxies, and be done with it."

For the 10% at planet scale, it's an art. Each context is different. No specific lessons transfer cleanly.

---

## The Advice

> "If you are at a 5-50 person company... just stick with a monolith. Trust me."

Prefer your debt to be at literal points of highest leverage, not nice-to-haves.

---

## When to Split

Ask yourself:
1. Does this need independent scaling?
2. Does this need independent deployment?
3. Does this need a different tech stack?
4. Does a separate team own this domain?

If all four answers are "no," keep it together.

---

## Related Concepts

- [[Steel Thread Delivery]] — Build thin slices, not separate services
- [[⚠️ Clean Architecture]] — Another over-abstraction anti-pattern
- [[Conway's Law]] — Services should match team boundaries

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC

## Sources

- https://twitter.com/jasoncwarner/status/1592227285024636928
