# RLS-First Authorization

Database as the final enforcement point.

---

## The Pattern

Push authorization to PostgreSQL Row-Level Security policies. The database becomes the ultimate authority on who can see/modify what.

```
Request → Middleware (fast-fail) → Database (RLS enforced)
```

Middleware provides convenience; database provides correctness.

---

## Why Database-Level?

### Defense in Depth
Application bugs can bypass middleware. Database RLS cannot be bypassed—it's enforced at query execution.

### Single Source of Truth
Authorization logic lives in one place (SQL policies), not scattered across handlers.

### Auditable
RLS policies are declarative SQL. Review them, version them, test them.

---

## Session Context Pattern

Identity flows from HTTP layer into database via session variables:

```sql
-- Set in transaction
SET LOCAL app.current_agent_id = 'uuid';
SET LOCAL app.current_platform_id = 'uuid';

-- RLS policy uses it
CREATE POLICY agent_isolation ON messages
  USING (platform_id = app.current_platform_id());
```

`SET LOCAL` scopes to the transaction—no leakage between pooled connections.

---

## Implementation Checklist

1. **Define minimal policy set** for each table
2. **Pair each RLS change** with integration test using real Postgres
3. **Middleware short-circuits obvious failures** (missing org, invalid token)
4. **Database is source of truth**—middleware is optimization, not security

---

## Common Policies

```sql
-- Users see only their org's data
CREATE POLICY org_isolation ON documents
  USING (org_id = app.current_org_id());

-- Agents see only their platform's data
CREATE POLICY platform_isolation ON messages
  USING (platform_id = app.current_platform_id());

-- Owners can modify, others can only read
CREATE POLICY owner_write ON resources
  FOR UPDATE USING (created_by = app.current_user_id());
```

---

## Testing RLS

Use **real Postgres containers** (testcontainers-go), not mocks:

```go
// Test that RLS actually filters
func TestAgentCanOnlySeeOwnPlatform(t *testing.T) {
    // Insert data for platform A and platform B
    // Set session context to platform A
    // Query all messages
    // Assert only platform A messages returned
}
```

---

## Related Concepts

- [[⚠️ Mocking]] — Integration tests prove RLS works
- [[⚠️ Clean Architecture]] — Database at inner layer, HTTP at outer
- [[Session Context Pattern]] — How identity propagates

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
