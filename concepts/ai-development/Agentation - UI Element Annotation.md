# Agentation (UI Element Annotation)

A visual feedback instrument for AI coding agents. Click page elements, annotate them, and generate structured markdown with CSS selectors that help AI agents locate corresponding code via grep searches.

**The bridge:** Visual UI → Structured selectors → Code references

---

## Why This Matters

AI coding agents work with text — code, selectors, file paths. But humans think visually — "that button," "this card," "the header." Agentation closes the gap:

| Without Agentation | With Agentation |
|--------------------|-----------------|
| "Fix the button in the top right" | Structured selector + position + context |
| Agent guesses which component | Agent greps for exact selector |
| Multiple round-trips to locate code | Direct path to implementation |

This is [[Colleague vs Tool-Shaped AI]] in practice — giving the AI precise specs instead of vague intent.

---

## Installation

Already installed as a dev dependency in `apps/ui`. Only included in development builds.

---

## Usage

### 1. Wrap Your App (Dev Mode Only)

```tsx
import { Agentation } from 'agentation';

function App() {
  return (
    <>
      <YourApp />
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}
```

### 2. Annotate Elements

- **Toolbar** appears in lower-right corner
- **Click** elements to annotate with automatic selector identification
- **Drag** to batch-select multiple elements or draw regions
- **Highlight text** for text-based annotations
- **Freeze animations** to capture specific visual states

### 3. Generate Output

Produces markdown with:
- CSS selectors
- Element positions
- Contextual notes

AI agents use this to locate corresponding code via grep searches.

---

## Requirements

- React 18+
- Desktop browser only

---

## Connection to AI-Assisted Development

Agentation embodies several principles:

| Principle | Application |
|-----------|-------------|
| [[Strategic vs Tactical Documentation]] | Generates tactical, actionable context for agents |
| [[Colleague vs Tool-Shaped AI]] | Converts vague visual intent into precise specs |
| [[The Great Inversion]] | Removes friction between "what I see" and "what AI can act on" |

It's a tool for **High-Quality Intent Specification** — the vital skill for working with autonomous AI agents.

---

## Related Concepts

- [[Colleague vs Tool-Shaped AI]] — Precise specs enable Tool-shaped workflows
- [[Strategic vs Tactical Documentation]] — Tactical context for agent tasks
- [[The 2026 Builder Operating System]] — Altitude shifting between visual and code

## Resources

- [Agentation Docs](https://agentation.dev)
