# Observability by Default

Build monitoring in from the start, not as an afterthought.

---

## The Principle

> Every decision point is logged, metrics are exposed, identity flows are traceable.

Ship control and observability hooks with the **first iteration**.

---

## The Three Pillars

### Metrics
Quantitative measurements over time.

```
validation_attempts_total: 1523
validation_failures_total: 42
pg_pool_connections_active: 15
outbound_latency_p99: 234ms
```

### Logs
Structured events with context.

```json
{
  "level": "info",
  "msg": "message processed",
  "request_id": "abc123",
  "agent_id": "xyz789",
  "duration_ms": 45
}
```

### Traces
Request flow across services.

```
[request_id: abc123]
  → API Gateway (12ms)
  → Auth Service (8ms)
  → Message Service (45ms)
    → Database (23ms)
    → Queue (5ms)
```

---

## Standard Metrics Endpoint

Expose at predictable path: `/debug/metrics` or `/metrics`

**Metric types:**
- **Counters** — Cumulative totals (requests, errors)
- **Gauges** — Current snapshots (queue depth, connections)
- **Histograms** — Distributions (latency percentiles)

---

## Structured Logging

Always JSON. Always include:
- `request_id` — Correlation across services
- `timestamp` — When it happened
- `level` — Severity (debug, info, warn, error)
- Domain context — `agent_id`, `channel_id`, etc.

```go
slog.Info("message processed",
    "request_id", ctx.RequestID,
    "agent_id", agentID,
    "duration_ms", elapsed.Milliseconds(),
)
```

---

## Key Health Indicators

| Signal | What It Tells You |
|--------|-------------------|
| Error rate | Something is broken |
| Latency p99 | User experience |
| Queue depth | Backpressure building |
| Pool utilization | Resource exhaustion |
| Cache hit ratio | Efficiency |

---

## Alerting Guidance

Document what warrants alerts:
- Error rate > 1% for 5 minutes
- p99 latency > 500ms
- Queue depth growing > 100/min
- Pool utilization > 80%

---

## Related Concepts

- [[Definition of Done]] — Observability is part of done
- [[Steel Thread Delivery]] — Include metrics in first slice
- [[⚠️ Mocking]] — Test that metrics are emitted

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
