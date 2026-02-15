# API Anti-Patterns

Common mistakes that make APIs painful to use and maintain.

---

## The Top Offenders

### 1. Chatty APIs (N+1 Calls)

**Anti-pattern:** Client must make N requests to get N related items.

```
GET /users/1
GET /users/1/posts
GET /posts/101/comments
GET /posts/102/comments
...
```

**Fix:** Compound endpoints, includes, or GraphQL.

```
GET /users/1?include=posts,posts.comments
```

---

### 2. Leaking Internal Models

**Anti-pattern:** Database schema exposed directly as API.

```json
{
  "user_id": 123,
  "created_at_utc_millis": 1705312800000,
  "is_deleted_flag": false,
  "_internal_version": 7
}
```

**Fix:** Design API contracts independently. Map internal models to external DTOs.

See: [[Bijection Principle]] — One API concept = one API representation.

---

### 3. HTTP Status Code Abuse

**Anti-pattern:** 200 OK with error in body.

```json
HTTP 200 OK
{ "success": false, "error": "User not found" }
```

**Fix:** Use appropriate status codes.

```json
HTTP 404 Not Found
{ "type": "https://api.example.com/errors/not-found", "title": "User Not Found" }
```

See: [[RFC 7807 Problem Details]]

---

### 4. Verbs in URLs

**Anti-pattern:** RPC-style endpoints.

```
POST /getUserById
POST /createNewUser
POST /deleteUserAccount
```

**Fix:** RESTful resources with HTTP verbs.

```
GET    /users/{id}
POST   /users
DELETE /users/{id}
```

---

### 5. Breaking Changes Without Versioning

**Anti-pattern:** Changing response shape, removing fields, renaming without warning.

**Fix:** Version your API. Deprecate gracefully.

```
/v1/users  → stable
/v2/users  → new shape, announced 6 months prior
```

---

### 6. Unbounded Queries

**Anti-pattern:** `GET /users` returns all 10 million users.

**Fix:** Require pagination. Set reasonable defaults and maximums.

```
GET /users?limit=50&cursor=abc123
```

---

### 7. Boolean Blindness

**Anti-pattern:** Multiple booleans that interact confusingly.

```
GET /users?active=true&deleted=false&verified=true&suspended=false
```

**Fix:** Use enums or explicit states.

```
GET /users?status=active
GET /users?status=pending_verification
```

---

### 8. Silent Failures (Postel's Law Gone Wrong)

**Anti-pattern:** Accept garbage, silently drop it.

```json
// Client sends:
{ "emial": "user@example.com" }  // typo

// Server accepts, ignores typo, user has no email
```

**Fix:** Be liberal in what you accept, but **log and warn** about unexpected input. Don't silently lose data.

See: [[Postel's Law]] — Liberal ≠ silent data loss.

---

### 9. Inconsistent Naming

**Anti-pattern:** Mixed conventions across endpoints.

```
GET /users/{userId}
GET /orders/{order_id}
GET /Products/{ID}
```

**Fix:** Pick one convention. Enforce it.

---

### 10. Missing Idempotency

**Anti-pattern:** POST endpoints that create duplicates on retry.

**Fix:** Support [[Idempotency Keys]] for mutating operations.

---

## The Meta-Pattern

Most API anti-patterns violate one principle:

> **The API is a contract, not an implementation detail.**

Design from the client's perspective. Hide internal complexity. Be predictable.

---

## Related Concepts

- [[Bijection Principle]] — One concept = one representation
- [[Postel's Law]] — Liberal input, conservative output (with caveats)
- [[RFC 7807 Problem Details]] — Standardized error responses
- [[Idempotency Keys]] — Safe retries
- [[Clean Code]] — APIs are code too

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
