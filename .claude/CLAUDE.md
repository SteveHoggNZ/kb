# KB Maintenance Instructions

Instructions for AI agents working on this Obsidian knowledge base.

## Core Principles

### 1. Links close to definitions

**The most important rule:** Keep links and backlinks as close as possible to the concepts they reference. Don't push them to the end of the document — this makes the KB disjointed.

When you mention a concept, link it immediately. When you explain a connection, the link belongs *in that explanation*, not in a separate section at the bottom.

**Bad:**
```markdown
The bike principle applies to AI adoption.

...

## Related Concepts
- [[The Collapse of Roles and Time]] — The bike principle
```

**Good:**
```markdown
[[The Collapse of Roles and Time]] introduces the "bike principle" — a bike is harder to balance when moving slowly. This applies directly: AI adoption is reversible, so move fast.
```

The connection is explained where it matters, not orphaned at the bottom.

### 2. Daily notes for changes

When making updates to the KB, record them in a daily note:

- **Location:** Root folder, named `YYYY-MM-DD.md`
- **Structure:** Include prev/next navigation links at top
- **Content:** Summarise what changed and why

### 3. Backlink from updated notes

Add an update line at the bottom of any modified note:

```markdown
---

*Updated [[2026-02-16]] — Brief description of change*
```

This creates bidirectional linking between daily notes and concept notes.

## Note Structure

### Preferred structure

1. **Title** — `# Note Name`
2. **Summary** — One sentence describing what this note is about
3. **Content** — Main content with contextual links woven in
4. **Connection sections** — If needed, use headed sections like `## Connection to Other Concepts` with subsections explaining each link
5. **See Also** — Minimal navigation links (MOC backlinks, related syntheses)
6. **Sources** — External references if applicable
7. **Update log** — `*Updated [[date]] — description*`

### Avoid

- Orphaned link lists at the bottom without context
- Duplicate links (appearing in content AND in a list)
- Links that don't explain why they're relevant

## When Adding New Content

1. Check if related concepts already exist in the KB
2. Add new note with contextual links to related concepts
3. Update related concepts to link back (with context)
4. Record in daily note
5. Add update lines to any modified notes

## KB Structure

- `concepts/` — Main ideas organised by domain (ai-development, decision-frameworks, etc.)
- `reference/` — Technical reference, snippets, setup guides
- `_MOCs/` — Maps of Content for navigation
- Daily notes at root — Session history (`YYYY-MM-DD.md`)
