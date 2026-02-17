# Logical Resource Separation

Even when multiple concerns share one physical resource, give each concern its own connection string. Future scaling becomes a config change, not a code change.

> **The one-sentence version:** One env var per concern, not one env var per server.

---

## The Problem

A single `REDIS_URL` used across caching, queues, sessions, and pub/sub works fine at small scale. But when you need to scale:

- **Cache** needs a cluster with eviction policies
- **Queue** needs persistence and no eviction
- **Sessions** needs a replica set for read scaling
- **Pub/Sub** needs low-latency, can tolerate data loss

These are fundamentally different workloads with conflicting requirements. If your code imports one `REDIS_URL`, splitting requires finding every usage, categorizing it, and refactoring. That's a code change disguised as an infrastructure change.

---

## The Fix

Introduce indirection at the config layer from day one:

```
# All point to the same place today
REDIS_CACHE_URL=redis://shared:6379/0
REDIS_QUEUE_URL=redis://shared:6379/0
REDIS_SESSION_URL=redis://shared:6379/0
REDIS_PUBSUB_URL=redis://shared:6379/0
```

When scale day arrives:

```
# Each concern gets its own infrastructure
REDIS_CACHE_URL=redis://cache-cluster:6379
REDIS_QUEUE_URL=redis://queue-cluster:6379
REDIS_SESSION_URL=redis://session-replica:6379
REDIS_PUBSUB_URL=redis://pubsub-node:6379
```

Zero code changes. Zero refactoring. Just config.

---

## The Principle Generalised

This isn't just Redis. The pattern applies everywhere a single resource serves multiple logical concerns:

| Resource | Monolithic | Separated |
|----------|-----------|-----------|
| **Database** | `DATABASE_URL` for everything | `DATABASE_URL`, `DATABASE_READONLY_URL`, `ANALYTICS_DATABASE_URL` |
| **Redis** | `REDIS_URL` for everything | `REDIS_CACHE_URL`, `REDIS_QUEUE_URL`, `REDIS_SESSION_URL` |
| **S3** | `S3_BUCKET` for everything | `S3_UPLOADS_BUCKET`, `S3_EXPORTS_BUCKET`, `S3_BACKUPS_BUCKET` |
| **API keys** | `OPENAI_API_KEY` for all calls | `OPENAI_CHAT_KEY`, `OPENAI_EMBEDDING_KEY` (separate rate limits) |

**The test:** If two features would benefit from different scaling, tuning, or lifecycle policies, they deserve separate connection strings — even if they point to the same place today.

---

## Connection to Physics Thinking

This is [[Physics Thinking]] applied to configuration:

| Layer | Law | Physics |
|-------|-----|---------|
| **Documentation** | "Use separate Redis instances for cache and queues" | Nothing stops you using one URL everywhere |
| **Config** | Naming convention (`REDIS_CACHE_URL`) | Each client is constructed from its own env var — physically cannot share without explicit config |

The env var separation is a lightweight form of Physics. It doesn't prevent sharing (all vars can point to the same server), but it **forces the developer to be explicit** about which concern they're connecting. When scale day arrives, the seams are already in place.

This follows the [[Database Physics vs Policy|Copy-Down]] principle — resolve the connection at initialisation time, not at query time. Each module gets its own client instance; it doesn't reach for a shared global.

---

## When to Apply

**Always.** The cost of separate env vars is near zero:
- One extra line in `.env`
- One extra client constructor
- One extra config field

The cost of *not* separating is a refactoring project when you need to scale — finding every usage, classifying it by concern, and hoping you didn't miss one.

This is [[Physics Thinking#The Law-First Principle|The Law-First Principle]] inverted: the config indirection is so cheap that you should start with Physics (separate vars) rather than Law (documentation saying "split this later").

---

## See Also

- [[Physics Thinking]] — The umbrella meta-principle
- [[Database Physics vs Policy]] — Copy-Down vs Runtime Lookup at the schema layer
- [[_MOCs/Design Principles]] — Back to the MOC

---

*Created [[2026-02-17]] — Extracted from Redis configuration review*
