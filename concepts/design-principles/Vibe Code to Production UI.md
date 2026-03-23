# Vibe Code to Production UI

A practical checklist for upgrading AI-generated ("vibe-coded") interfaces into polished, professional SaaS products. AI code generators make predictable UI mistakes — knowing the patterns lets you fix them systematically.

> **The one-sentence version:** AI builds functional UI. [[Taste in Software|Taste]] turns it into a product people trust.

---

## The Predictable AI UI Mistakes

AI-generated interfaces share a remarkably consistent set of flaws. Each one erodes trust and makes the product feel amateur. Fixing them follows a repeatable pattern:

### 1. Emojis → Professional Icons

AI defaults to emojis for visual markers. They read as playful, not professional.

| AI Default | Professional Fix |
|-----------|-----------------|
| 🔗 📊 ⚙️ as UI indicators | Icon libraries: **Phosphor**, **Lucide**, or **Heroicons** |
| Inline emoji in headings | SVG icons with consistent stroke weight and sizing |

**Why it matters:** Icons from a coherent library share visual weight, stroke style, and proportions. Emojis vary wildly across platforms and look inconsistent.

### 2. AI Colour Palettes → Subdued, Complementary Palettes

AI picks bright, saturated, clashing colours. They demand attention everywhere, leaving nothing to emphasise.

| AI Default | Professional Fix |
|-----------|-----------------|
| Bright primary colours everywhere | Subdued palette (dark blue → dark green range) |
| Every element competing for attention | Colour hierarchy: one accent colour, neutral backgrounds, muted secondaries |

**The rule:** Never let AI choose your colours. Start from a design system (Tailwind defaults, Radix colours) and constrain to 2-3 hues maximum.

### 3. KPI Boxes → Micro-Charts

AI generates large, repetitive boxes that display a single number each. They waste space and provide no context.

| AI Default | Professional Fix |
|-----------|-----------------|
| Four big boxes showing "Total Links: 42" | Compact KPI cards with **micro-charts** (sparklines, trend arrows) |
| Numbers without context | Numbers with comparison ("+12% vs last week") and inline visualisation |

**Why it matters:** A number without trend is meaningless. A sparkline next to the number tells the user whether to celebrate or worry — in the same amount of space.

### 4. Sprawling Layouts → Condensed, Purposeful Space

AI creates layouts with excessive whitespace, repetitive elements, and cluttered navigation.

**Sidebar bloat → Account pop-over:**
- Move settings, billing, profile links out of the main sidebar
- Collapse into a clean, avatar-triggered pop-over menu
- Sidebar is now purely for navigation between core features

**Button sprawl → Contextual menus:**
- Replace rows of action buttons with triple-dot (⋯) dropdown menus
- Actions appear on demand, not all the time
- Primary action stays visible; secondary actions collapse

**The principle:** Every pixel should earn its place. If an element isn't actively helping the user complete their current task, it should be hidden behind a click — not permanently visible.

### 5. Flyout Forms → Centred Modals with Progressive Disclosure

AI often creates flyout panels (slide-in from edge) for forms with only 2-3 fields, wasting the remaining space.

| AI Default | Professional Fix |
|-----------|-----------------|
| Flyout panel with 2 sparse fields | Centred modal, appropriately sized |
| All options visible at once | **Progressive disclosure**: essential fields visible, advanced options behind a collapsible "Advanced" toggle |
| Missing obvious fields | Add missing essentials (custom domains, descriptions, metadata) |

**The rule:** Show the 80% case by default. Hide the 20% behind a toggle. Never make the user scroll past fields they'll never use.

### 6. Billing Pages That Work

AI-generated billing pages are typically non-functional display cards.

**Fix the structure:**
- Remove "Current Plan" cards that don't show actionable data
- Replace with a two-column layout: **usage tracking** (donut charts showing limits) + **plan management**
- Add standard forms: billing email, payment method, invoice history

**Fix the pricing:**
- Consolidate unnecessary tiers (3 plans maximum for most products)
- Clearly show discounted annual rates
- Highlight the value difference between tiers, not just the price difference

### 7. Analytics That Tell Stories

AI generates basic bar charts with minimal context.

**Upgrades:**
- Add **aggregate ↔ individual** toggle (all links vs specific link stats)
- Replace flat bar charts with **shaded region maps** for geographic data
- Add coloured icons for device/browser/source tracking
- Show **comparative** data, not just absolute numbers

### 8. Landing Pages That Build Trust

AI uses generic placeholder icons for feature sections. These communicate nothing.

| AI Default | Professional Fix |
|-----------|-----------------|
| Generic icons (🔒 for "Secure") | **Actual UI screenshots** of the feature |
| Abstract descriptions | Skewed/perspective images of real app screens |
| "We're the best" copy | Visual proof: show the dashboard, the analytics, the settings |

**Why it matters:** Visitors deciding whether to sign up are answering one question: "Is this real?" Screenshots of polished UI answer that question instantly. Icons don't.

---

## The Meta-Pattern

Every fix follows the same pattern:

```
AI generates functional but generic UI
    ↓
Apply taste: what would make a user trust this?
    ↓
Remove noise, add context, show don't tell
```

This is [[Taste in Software]] applied to UI: the AI handles Type 1 architecture (functional, correct, follows conventions). The human applies Type 2 (cohesion, trust, feel). The checklist above makes the Type 2 work systematic enough to do quickly, without requiring a full redesign.

---

## Quick Reference Checklist

- [ ] Replace all emojis with icons from one library (Phosphor/Lucide)
- [ ] Constrain to 2-3 colour hues; use a design system as base
- [ ] Add sparklines/trends to every standalone number
- [ ] Move settings/billing to account pop-over
- [ ] Collapse secondary actions into ⋯ menus
- [ ] Convert flyouts to centred modals with progressive disclosure
- [ ] Add usage visualisation to billing page
- [ ] Consolidate to ≤3 pricing tiers
- [ ] Add aggregate/individual toggle to analytics
- [ ] Replace feature icons with actual UI screenshots on landing page

---

## See Also

- [[Taste in Software]] — Type 1 (AI-delegatable) vs Type 2 (taste, cohesion, feel)
- [[Agent Ergonomics]] — If two things do different things, they must feel different
- [[_MOCs/Design Principles]] — Back to the MOC

## Sources

- [Vibe Coded to Professional SaaS UI](https://www.youtube.com/watch?v=PDcQJOPby1k) (YouTube, 2026)

---

*Created [[2026-02-24]] — Extracted from vibe-code-to-production UI redesign walkthrough*
