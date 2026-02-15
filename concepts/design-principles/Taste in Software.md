# Taste in Software

The "Quality Without a Name" — why some products *feel* right while others, though technically correct, feel generic.

**In the agentic era, taste is the irreducible human contribution.** You can delegate construction. You cannot delegate vision.

---

## Christopher Alexander's Insight

Architect Christopher Alexander described a quality present in great buildings that he couldn't precisely name — a coherence, aliveness, and "rightness" that transcended measurable properties.

In software, this manifests as:
- Why an iPhone feels different than a generic Android phone
- Why some CLIs feel elegant and others feel hostile
- Why certain APIs are a joy to use and others technically work but create friction

---

## Two Types of Architecture

From [[The 2026 Builder Operating System]]:

| Type | Name | Nature | Delegatable to AI? |
|------|------|--------|-------------------|
| **Type 1** | Civil Engineering | Explicit rules, standards, conventions | ✅ Yes |
| **Type 2** | Quality Without a Name | Taste, coherence, vision, feel | ❌ No |

**Type 1** can be written down:
- Code style guides
- API conventions
- Architecture decision records
- Test coverage requirements

**Type 2** cannot be fully specified:
- "Make it feel snappy"
- "This interaction should feel natural"
- "The error message should be helpful, not hostile"
- "It should feel like *us*"

---

## Why AI Can't Replace Taste

AI excels at pattern matching and optimization against explicit criteria. Taste involves:

| Taste Requires | AI Limitation |
|----------------|---------------|
| Knowing what to optimize *for* | Optimizes against given metrics |
| Coherence across unspecified dimensions | Handles specified dimensions |
| Sensing when something is "off" | Needs explicit error criteria |
| Balancing competing goods | Optimizes single objectives |
| Knowing when rules should be broken | Follows rules consistently |

**The paradox:** The better AI gets at Type 1, the more valuable Type 2 becomes.

---

## Developing Taste

Taste isn't innate genius — it's developed through:

### 1. Exposure
Using great products. Reading great code. Experiencing good design.

### 2. Contrast
Using *bad* products. Reading bad code. Noticing what's missing.

### 3. Articulation
Trying to explain *why* something works or doesn't. The act of articulation refines perception.

### 4. Practice
Making things. Getting feedback. Iterating on feel, not just function.

### 5. Curation
Choosing what to keep and what to discard. Editing is taste in action.

---

## Taste as the New Moat

From [[The Barbell Economy]]:
- Layer 1 (execution) is collapsing in value
- Layer 2 (judgment) is the new bottleneck

Taste *is* judgment applied to product decisions. As AI commoditizes construction, taste becomes the differentiator.

| Commoditized by AI | Protected by Taste |
|--------------------|--------------------|
| Writing code | Deciding *what* code to write |
| Generating options | Choosing between options |
| Following style guides | Defining the style |
| Implementing features | Prioritizing features |
| Producing content | Curating content |

---

## Protecting Taste in Agentic Workflows

When managing AI agents, your job is to **protect Type 2 quality**:

### Review for Feel, Not Just Function
- Does this *feel* right?
- Would I be proud to ship this?
- Does this match our product's voice?

### Establish Taste Anchors
- Reference implementations
- "This is what good looks like" examples
- Anti-examples: "We don't do this"

### Create Feedback Loops
- Use the product yourself
- Watch users interact with it
- Notice friction that metrics miss

### Trust Your Discomfort
If something feels wrong but you can't articulate why, don't ship it. Articulate the problem first.

---

## The Articulation Gap

Often, taste manifests as discomfort before it manifests as words.

```
Feeling "something's off"
         ↓
    [Articulation work]
         ↓
"The spacing creates visual tension"
         ↓
    [Now delegatable to AI]
```

Your job is to do the articulation work — to convert tacit taste into explicit guidance that AI can follow.

---

## Related Concepts

- [[The 2026 Builder Operating System]] — Two types of architecture
- [[The Barbell Economy]] — Taste is Layer 2 judgment
- [[Colleague vs Tool-Shaped AI]] — Colleague AI helps discover taste through iteration
- [[Signal in the Scar]] — Authentic imperfection vs generic polish
- [[Leverage Selection]] — Taste is high-leverage (shapes everything downstream)

## See Also

- [[_MOCs/Design Principles]] — Back to the MOC
