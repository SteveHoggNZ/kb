# Async-First Design

Return 202 and process work asynchronously.

---

## The Pattern

```
Client Request → Validate → 202 Accepted → Background Processing
                                               ↓
                                         Post Results Later
```

Don't block the request waiting for work to complete.

---

## Status Code Semantics

| Code | Meaning | Use When |
|------|---------|----------|
| **200** | Synchronous success | Work completed, here's the result |
| **202** | Async accepted | Work queued, results delivered later |
| **204** | No content | Success, nothing to return |

**202 signals intent:** "I heard you, I'll handle it, don't wait."

---

## Why Async-First?

### Better UX
Client gets immediate acknowledgment. No hanging requests.

### Resilience
If processing fails, the request already succeeded. Retry happens server-side.

### Scalability
Decouple request handling from work execution. Scale them independently.

### Timeout Safety
Long operations don't risk HTTP timeouts.

---

## Implementation

```go
func handleRequest(w http.ResponseWriter, r *http.Request) {
    // Validate immediately
    req, err := parseAndValidate(r)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    // Enqueue for background processing
    jobID := queue.Enqueue(req)

    // Return immediately
    w.Header().Set("X-Job-ID", jobID)
    w.WriteHeader(http.StatusAccepted)
    json.NewEncoder(w).Encode(map[string]string{
        "status": "accepted",
        "job_id": jobID,
    })
}
```

---

## Delivering Results

Options for notifying clients of completion:

1. **Webhook** — Server calls client's endpoint
2. **Polling** — Client checks `GET /jobs/{id}`
3. **SSE/WebSocket** — Server pushes to connected client
4. **Out-of-band** — Email, Slack, etc.

---

## When to Use Sync (200)

- Operation completes in <100ms
- Client needs result immediately
- Simplicity outweighs benefits
- No downstream effects

---

## Related Concepts

- [[Event-Driven Side Effects]] — Async processing pattern
- [[Idempotency Keys]] — Safe retries for async operations
- [[CQRS]] — Commands are naturally async

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
