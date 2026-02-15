# Definition of Done

A task is "done" only when all criteria are met. Verify each item before submitting work.

---

## The Checklist

### Code Quality
- [ ] Code completes all requirements in the issue
- [ ] Linter passes (no errors)
- [ ] Code is formatted

### Testing
- [ ] All existing tests pass
- [ ] New tests written for new functionality
- [ ] Integration tests prioritized over unit tests

### Documentation
- [ ] Relevant docs updated if patterns learned
- [ ] Work log updated with comprehensive entry

### Process
- [ ] Commits follow Conventional Commits format
- [ ] PR description explains changes and links to issue

---

## Conventional Commit Format

```
type(scope): short summary
```

- **type** — `feat`, `fix`, `chore`, `docs`, `test`, `refactor`
- **scope** — optional (e.g., `auth`, `api`, `docs`)
- **summary** — lowercase imperative, ≤72 chars

**Examples:**
- `feat(auth): add RS256 validator cache metrics`
- `fix(api): handle nil pointer in message handler`
- `docs: update README with setup instructions`

**Avoid:** "WIP" commits, multi-topic commits. Each commit = one logical change.

---

## Why This Matters

Definition of Done prevents:
- "It works on my machine"
- Untested code reaching production
- Knowledge lost when you move to next task
- Reviewers guessing what changed

---

## Related Concepts

- [[Steel Thread Delivery]] — First slice must pass DoD
- [[⚠️ Mocking]] — Tests are part of done
- [[Career Advice]] — "Plan with patience, execute with impatience" — DoD ensures quality execution

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
