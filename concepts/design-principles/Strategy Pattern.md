# Strategy Pattern & Interface Seams

Encapsulate interchangeable behaviors behind interfaces.

---

## The Pattern

Every subsystem boundary exposes a narrow interface so alternate implementations can plug in without touching callers.

```
Caller → Interface → Implementation A
                  → Implementation B
                  → Implementation C (test fake)
```

Select strategy at runtime via configuration; callers never know which concrete implementation runs.

---

## Benefits

### Modularity
Swapping implementations only requires wiring changes.

Example: `messaging.Streamer` can point at PostgreSQL LISTEN/NOTIFY, Redis Pub/Sub, or any future transport simply by toggling `STREAM_TRANSPORT` in config.

### Testability
High-fidelity fakes or mocks satisfy the interface. Exercise business logic without external dependencies or flaky network calls.

### Clarity
Interfaces document the contract. Concrete strategies own operational specifics (pool sizing, retries, observability hooks).

---

## Checklist

1. **Define interfaces in consumer package** — So implementations cannot accidentally import consumers

2. **Keep interface methods low** — Smaller contracts are easier to mock and reason about

3. **Instantiate in composition root** — `main.go`, workers, CLIs create concrete implementations and inject everywhere

4. **Document the seam** — So future engineers know where to add new strategies

---

## When Adding a New Strategy

1. Implement the interface
2. Document operational profile (latency, dependencies, failure modes)
3. Add tests for both interface contract and selection logic
4. Wire into composition root with config flag

---

## Examples

| Interface | Strategies |
|-----------|-----------|
| `messaging.Streamer` | PostgreSQL, Redis, Noop |
| `outbound.Dispatcher` | HTTP, in-process |
| `validation.Dispatcher` | External validator, passthrough |
| `cache.Store` | Redis, in-memory |

---

## Related Concepts

- [[⚠️ Clean Architecture]] — Interfaces at layer boundaries
- [[Bijection Principle]] — One interface per behavioral concern
- [[Testing Strategy]] — Fakes implement the interface

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
