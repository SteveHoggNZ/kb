# Canonical Log Lines

One authoritative log line per request, packed with context.

---

## The Pattern

Instead of scattered log statements, emit one information-dense line at the end of each request that summarizes everything important.

```
[2019-03-18 22:48:32.999] canonical-log-line
  alloc_count=9123
  auth_type=api_key
  database_queries=34
  duration=0.009
  http_method=POST
  http_path=/v1/charges
  http_status=200
  key_id=mk_123
  request_id=req_123
  user_id=usr_123
```

---

## Why This Works

### Traditional Logging Problem
> "Relevant information is spread across many individual log lines. Even with powerful log processing, searching for details is slow and requires intricate query syntax."

### The Solution
Colocate key characteristics in single lines. Queries and aggregations become faster to write and run.

---

## Stripe's Implementation

### Protocol Buffers for Schema
Canonical log field names become muscle memory for engineers. Stripe formalized the contract with protocol buffers—changes require deliberate versioning.

### Always Emit
The logging statement is wrapped in exception handling so any problem constructing the line never fails the request. Use `ensure` (Ruby) or `finally` (other languages).

### Pipeline to Analytics
Beyond logging systems, canonical lines are serialized to Kafka, accumulated to S3, and ingested into Presto/Redshift for long-term analytics.

---

## Structured Logs as Tables

A structured log implicitly defines a relational table:
- Keys = columns
- Values per log line = rows
- Implicit columns: host, timestamp, service

### Tracing as JOINs
When you manually propagate request_id across services, you're implementing the hardest part of distributed tracing via one-off hacks.

> "When a modern observability solution assembles a trace, it's really executing a JOIN across the entire distributed transaction."

Use OpenTelemetry instead.

---

## Cardinality Warning

When adding tags to metrics, each tag creates a **set** of metric time series.

`customer_id` tag × `version` tag × `host` tag = cardinality explosion.

> "Distributed systems can fail for a staggeringly large number of reasons. You can't use metrics cardinality to isolate each one."

Canonical logs handle high-cardinality data better than metrics do.

---

## Observability ≠ Monitoring

- **Monitoring** = Understanding health
- **Observability** = Understanding change

Both are vital. Monitoring got a bad name because operators tried to monitor every possible failure mode. That doesn't scale.

Effective workflows start with metrics but pivot to multi-telemetry, multi-service guided analysis.

---

## Related Concepts

- [[Observability by Default]] — The three pillars
- [[Steel Thread Delivery]] — Include observability from first slice
- [[Definition of Done]] — Logging is part of done

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC

## Sources

- https://stripe.com/blog/canonical-log-lines
- https://medium.com/lightstephq/why-tracing-might-replace-almost-all-logging-790c7d7c5c2c
