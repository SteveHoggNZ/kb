# Obsidian Programmatic Configuration

Obsidian stores all configuration as JSON files in the `.obsidian/` folder. This means vaults can be configured programmatically—useful for automation, AI assistants, or sharing configurations across vaults.

---

## Config File Location

All configuration lives in:
```
your-vault/.obsidian/
```

Changes take effect when Obsidian reloads the vault or restarts.

---

## Core Configuration Files

### `graph.json` — Graph View Settings

Controls the graph visualization including **color groups**.

```json
{
  "colorGroups": [
    {
      "query": "path:_MOCs",
      "color": { "a": 1, "rgb": 10494192 }
    },
    {
      "query": "path:concepts/philosophy",
      "color": { "a": 1, "rgb": 5025616 }
    }
  ],
  "showOrphans": true,
  "hideUnresolved": false,
  "nodeSizeMultiplier": 1,
  "lineSizeMultiplier": 1,
  "centerStrength": 0.25,
  "repelStrength": 10,
  "linkStrength": 1,
  "linkDistance": 295
}
```

**Color group queries:**
- `path:folder/subfolder` — Match by file path
- `tag:#tagname` — Match by tag
- `file:filename` — Match specific file

**Color format:** RGB as decimal integer. Convert hex to decimal:
- `#A020F0` (purple) → `10494192`
- `#507FFF` (blue) → `5275647`
- `#4CB050` (green) → `5025616`
- `#FFA500` (orange) → `16744448`

---

### `core-plugins.json` — Enable/Disable Core Plugins

```json
{
  "file-explorer": true,
  "graph": true,
  "backlink": true,
  "daily-notes": true,
  "templates": true,
  "tag-pane": true,
  "outline": true,
  "word-count": true,
  "sync": false,
  "publish": false
}
```

Set `true` to enable, `false` to disable.

---

### `community-plugins.json` — Installed Community Plugins

List of enabled community plugin IDs:

```json
[
  "dataview",
  "periodic-notes",
  "calendar",
  "obsidian-kanban"
]
```

**Note:** The plugin must already be installed in `.obsidian/plugins/plugin-id/` for this to work.

---

### `bookmarks.json` — Saved Bookmarks

```json
{
  "items": [
    {
      "type": "file",
      "path": "_MOCs/Core Concepts.md",
      "title": "Core Concepts"
    },
    {
      "type": "folder",
      "path": "concepts/design-principles",
      "title": "Design"
    }
  ]
}
```

**Types:** `file`, `folder`, `search`, `graph`

---

### `app.json` — Application Settings

Editor behavior, appearance, file handling:

```json
{
  "defaultViewMode": "source",
  "livePreview": true,
  "showLineNumber": true,
  "spellcheck": true,
  "strictLineBreaks": false,
  "readableLineLength": true,
  "tabSize": 4,
  "vimMode": false
}
```

---

### `appearance.json` — Theme Settings

```json
{
  "baseFontSize": 16,
  "theme": "obsidian",
  "cssTheme": "Minimal",
  "interfaceFontFamily": "",
  "textFontFamily": "",
  "monospaceFontFamily": ""
}
```

---

### `workspace.json` — Window Layout

Stores the current pane layout, open files, and sidebar states. Generally don't edit manually—let Obsidian manage this.

---

## Plugin Configuration

Each community plugin stores its config in:
```
.obsidian/plugins/plugin-id/data.json
```

Example for `periodic-notes`:
```json
{
  "weekly": {
    "folder": "_periodic-notes",
    "format": "YYYY-[W]WW",
    "template": "templates/weekly.md"
  }
}
```

---

## Programmatic Use Cases

### 1. Clone a vault configuration
Copy `.obsidian/` folder (except `workspace.json`) to new vault.

### 2. AI-assisted setup
Agents can write graph groups, enable plugins, set bookmarks.

### 3. Team standardization
Share `graph.json`, `app.json`, `core-plugins.json` via git.

### 4. Automation scripts
Python/Node scripts can generate config files before opening vault.

---

## Color Reference (RGB Decimals)

| Color | Hex | RGB Decimal |
|-------|-----|-------------|
| Purple | `#A020F0` | `10494192` |
| Blue | `#507FFF` | `5275647` |
| Green | `#4CB050` | `5025616` |
| Orange | `#FFA500` | `16744448` |
| Yellow | `#FFE100` | `16771584` |
| Red | `#FF4444` | `16728132` |
| Cyan | `#00CED1` | `52945` |
| Pink | `#FF69B4` | `16738740` |

**Conversion:** `parseInt("A020F0", 16)` → `10494192`

---

## Related Concepts

- [[Building a Second Brain]] — PARA system for organizing notes
- [[00-Home]] — This vault's structure

## See Also

- [Obsidian Developer Docs](https://docs.obsidian.md/)
