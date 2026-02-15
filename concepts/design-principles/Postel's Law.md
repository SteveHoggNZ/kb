# Postel's Law (Robustness Principle)

Be conservative in what you send, liberal in what you accept.

---

## The Principle

> "Be conservative in what you do, be liberal in what you accept from others."
> — Jon Postel, RFC 761

Originally for TCP, but applies universally to API design.

---

## In Practice

### Conservative Output
Send well-formed, minimal, spec-compliant responses:
- No extra fields that might confuse clients
- Consistent formatting
- Clear error messages

### Liberal Input
Accept variations gracefully:
- Extra fields → ignore them
- Missing optional fields → use defaults
- Different formats → normalize internally

---

## API Example

**Conservative (sending):**
```json
{
  "id": "123",
  "status": "active",
  "created_at": "2024-01-15T12:00:00Z"
}
```

**Liberal (receiving):**
```json
// All of these should work:
{ "content": "hello" }
{ "content": "hello", "extra_field": "ignored" }
{ "Content": "hello" }  // case-insensitive
{ "message": "hello" }  // alias accepted
```

---

## Benefits

### Forward Compatibility
New fields don't break old clients (they're ignored).

### Backward Compatibility
Old clients can talk to new servers (defaults fill gaps).

### Reduced Friction
Small errors don't cause failures. Systems interoperate despite minor differences.

---

## Limits

Don't be **too** liberal:
- Validate security-critical fields strictly
- Reject malformed data that could corrupt state
- Log unexpected input for debugging

The goal is **graceful handling**, not **accepting anything**.

> **Caveat:** Document "liberal" behaviors explicitly so clients don't accidentally depend on undocumented leniency. Liberal ≠ silent data loss.

---

## Anti-Pattern: Strict Input

```go
// Too strict: rejects valid-enough input
if req.ContentType != "application/json" {
    return BadRequest
}

// Better: accept common variations
if !strings.HasPrefix(req.ContentType, "application/json") {
    return BadRequest
}
```

---

## Related Concepts

- [[⚠️ Clean Architecture]] — Input validation at boundaries
- [[Strategy Pattern]] — Accept multiple input formats via strategies
- [[⚠️ Mocking]] — Test with varied/malformed input
- [[API Anti-Patterns]] — Silent failures are Postel's Law gone wrong
- [[RFC 7807 Problem Details]] — When you do reject, be clear about why

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
