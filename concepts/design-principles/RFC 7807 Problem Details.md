# RFC 7807 Problem Details

Standardized error response format for HTTP APIs.

---

## The Standard

RFC 7807 defines a machine-readable format for HTTP error responses:

```json
{
  "type": "https://api.example.com/errors/insufficient-funds",
  "title": "Insufficient Funds",
  "status": 404,
  "detail": "Account 12345 has $10.00 but transfer requires $50.00",
  "instance": "/transfers/abc123"
}
```

---

## Required Fields

| Field | Purpose |
|-------|---------|
| `type` | URI identifying the error type (documentation link) |
| `title` | Human-readable summary (same for all instances of this type) |
| `status` | HTTP status code (redundant but useful when body is logged separately) |

## Optional Fields

| Field | Purpose |
|-------|---------|
| `detail` | Human-readable explanation specific to this occurrence |
| `instance` | URI identifying the specific occurrence (request ID, resource path) |

---

## Why It Matters

### Machine-Readable Errors

Clients can programmatically handle errors based on `type`:

```javascript
if (error.type === 'https://api.example.com/errors/rate-limited') {
  await sleep(error.retryAfter);
  return retry(request);
}
```

### Consistent Structure

Every error looks the same. No guessing whether it's `{ error: "..." }` or `{ message: "..." }` or `{ errors: [...] }`.

### Self-Documenting

The `type` URI should point to documentation explaining the error and how to resolve it.

---

## Extension Fields

Add domain-specific fields as needed:

```json
{
  "type": "https://api.example.com/errors/validation-failed",
  "title": "Validation Failed",
  "status": 400,
  "detail": "Request body contains invalid fields",
  "errors": [
    { "field": "email", "message": "Invalid email format" },
    { "field": "age", "message": "Must be positive integer" }
  ]
}
```

---

## Content-Type

Always return with:

```
Content-Type: application/problem+json
```

Clients can detect problem responses by media type.

---

## Anti-Pattern: Vague Errors

```json
// Bad: What went wrong? What can client do?
{ "error": "Bad Request" }

// Good: Actionable, machine-readable
{
  "type": "https://api.example.com/errors/missing-field",
  "title": "Missing Required Field",
  "status": 400,
  "detail": "The 'email' field is required but was not provided"
}
```

---

## Related Concepts

- [[Postel's Law]] — Be liberal in input, conservative (and clear) in error output
- [[Clean Code]] — Error messages are part of the API surface
- [[Graduated Defense]] — Different error types for rate limits, auth failures, validation

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
