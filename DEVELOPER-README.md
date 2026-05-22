# Ajanta Interactive Guide — Developer Reference

---

## Architecture overview

The app is a static single-page application (SPA) with no build step and no framework dependencies.

```
ajanta-interactive/
├── index.html              ← app shell: all CSS, JS, and two static pages
├── manifest.json           ← content index (pages, files, sidebar TOC)
├── content/                ← HTML fragment files (one per section)
│   ├── foreword.html
│   ├── bibliography.html
│   ├── about.html
│   ├── overview/
│   └── cave1/ … cave26/
├── images/                 ← photograph files (not included in repo)
│   ├── cave1/
│   └── …
└── image_manifest.csv      ← catalogue of expected image files
```

### How pages load

On startup, `loadManifest()` fetches `manifest.json` and builds the sidebar. When the user navigates to a page, `showPage(id)` fetches all the HTML fragment files listed for that page in `manifest.json`, concatenates them, and injects the result into a `<div class="page">` container. Fetched content is cached in `pageCache` so subsequent visits to the same page are instant.

`home` and `glossary` are static pages defined directly in `index.html` — they are not fetched.

---

## index.html structure

The shell contains:

| Section | Description |
|---|---|
| CSS (lines ~1–400) | All styles; uses CSS custom properties for theming |
| Titlebar / menubar | Hard-coded buttons; menubar calls `nav('id')` |
| `#page-home` | Static home page with cave grid |
| `#page-glossary` | Static glossary page; populated by `renderGl()` |
| `#content-area` | Container where dynamic page divs are appended |
| Image popup | `#img-popup` and related elements |
| JavaScript | All logic in a single `<script>` block at the bottom |

---

## JavaScript — key variables

```javascript
let MANIFEST = null;       // parsed manifest.json; null until loadManifest() completes
const pageCache = {};      // { pageId: htmlString } — prevents repeat fetches

const IMAGE_PATHS = { ... }; // { 'Kbl 069': 'images/cave1/Kbl_069', ... }
                              // generated from image_manifest.csv; path has no extension
const PAINTINGS = { ... };   // { 'Kbl 069': 'Caption text', ... }
const GL = { ... };          // { 'term': 'definition', ... } — glossary data
const PT = { ... };          // { pageId: 'Page Title' } — populated by buildSidebar()
const SIDEBAR_LABELS = { ... }; // overrides for sidebar item display names
```

---

## JavaScript — key functions

### `loadManifest()`
```
async loadManifest()
```
- Detects `file://` protocol and shows an error message in the sidebar (fetch is blocked under `file://`).
- Fetches `manifest.json`, checks `r.ok`, parses JSON.
- Calls `buildSidebar()`, then resolves the initial page from `location.hash` and calls `showPage()`.
- Shows a user-visible error in `#sidebar` if fetch fails.

### `buildSidebar()`
```
buildSidebar()
```
- Reads `MANIFEST.pages` to build `pageMap` and populate `PT`.
- Organises pages into three hard-coded groups: *Introduction* (`foreword`, `overview`), *The Caves* (all ids starting with `cave`), *Reference* (`glossary`, `bibliography`, `about`).
- Builds DOM elements `.toc-sec > .toc-lbl + .toc-items > .toc-item + .toc-sub` and appends them to `#sidebar`.
- Each `.toc-item` calls `nav(pageId)`; each `.toc-sub` calls `navSec(pageId, anchorId)`.

### `showPage(id)`
```
async showPage(id)
```
- Updates active state on menu buttons and the status bar text.
- If `id` is `home` or `glossary`: shows the static page div and returns.
- Otherwise: creates a `.page` div if one doesn't exist for this id, marks it active.
- If content is already in `pageCache`: injects cached HTML and returns.
- Otherwise: reads `MANIFEST.pages` to find the page entry, fetches all files in `pageInfo.files` in parallel (`Promise.all`), joins them, stores in `pageCache`, and sets `bodyEl.innerHTML`.
- On fetch error: displays a human-readable error message in the page body.
- Returns early (silently) if `MANIFEST` is null.

### `nav(id)` / `navSec(pageId, sectionId)`
```
nav(id)
async navSec(pageId, sectionId)
```
- `nav` pushes a history state and calls `showPage`.
- `navSec` ensures the target page is loaded (awaits `showPage`), then uses `requestAnimationFrame` + `scrollIntoView` to scroll to the section anchor.
- `window.addEventListener('popstate', ...)` calls `showPage` to handle browser back/forward.

### `showImgPh(ref)`
Image popup logic:
1. Looks up `ref` in `IMAGE_PATHS` (case-insensitive fallback).
2. If a path exists: creates an `<img>` element, tries `.jpg` first, then `.jpeg`, `.png`, `.webp` on `onerror`.
3. If no path (image not yet added): shows the placeholder box.
4. Positions the popup near the click event, clamping to viewport edges.

### `renderGl()`
Renders `GL` entries as definition pairs into `#gl-body`. Called once on page load.

---

## manifest.json schema

```json
{
  "pages": [
    {
      "id": "cave1",
      "title": "Cave One",
      "subtitle": "Vihaara · End of 5th century AD",
      "files": [
        "content/cave1/intro.html",
        "content/cave1/c1-shibi.html"
      ],
      "toc": [
        { "label": "· Shibi Jaataka", "anchor": "c1-shibi" }
      ]
    }
  ]
}
```

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique page id; must start with `cave` for The Caves group |
| `title` | string | Page heading |
| `subtitle` | string | Subheading shown under the title |
| `files` | string[] | Relative paths from repo root; loaded in order and concatenated |
| `toc` | object[] | Sidebar sub-items; `anchor` must match an `id` on a `<p>` in the files |

**Validation:** Run `python -m json.tool manifest.json` to check for syntax errors after editing.

---

## Content file format

Each file contains only `<p>` elements:

```html
<p id="c1-shibi" class="">Shibi Jaataka</p>
<p class="">Cave 1, 6th century AD</p>
<p class="">Descriptive text... <span class="img-ref" onclick="showImgPh('Kbl 072')" title="Image: Kbl 072">[Kbl 072]</span></p>
```

- The first `<p>` carries the `id` used as a scroll anchor and must match the `anchor` field in `manifest.json`.
- `intro.html` files (cave introduction/overview pages) use `class="first"` on the first paragraph instead of an `id` — they have no sidebar sub-entry so no anchor is needed.
- Files are concatenated with `\n` and set as `innerHTML` — no wrapping element is added by the loader.
- Encode as **UTF-8**. Special characters (·, ā, ū, etc.) must be written as literal UTF-8 characters, not HTML entities, to avoid double-encoding artifacts.

---

## Sidebar grouping logic

The three sidebar groups are hard-coded in `buildSidebar()`:

```javascript
const GROUPS = [
  { label: 'Introduction', ids: ['foreword', 'overview'] },
  { label: 'The Caves',    ids: MANIFEST.pages.filter(p => p.id.startsWith('cave')).map(p => p.id) },
  { label: 'Reference',   ids: ['glossary', 'bibliography', 'about'] }
];
```

- Any page with an id starting with `cave` is automatically placed in *The Caves* in the order it appears in `manifest.json`.
- `glossary` is a special case: it has no sub-items even if a `toc` entry is present (hard-coded `if (id === 'glossary') return` in `buildSidebar`).
- Display names for items that don't have a manifest entry (home, glossary, bibliography, about) are taken from `SIDEBAR_LABELS` in `index.html`.

---

## Static pages: home and glossary

These two pages are not loaded dynamically.

- **Home:** A static `<div id="page-home">` in `index.html` containing the cave grid. To add a cave to the grid, add a `.home-card` element here and call `nav('caveN')` on click.
- **Glossary:** A static `<div id="page-glossary">` shell. The entries are rendered by `renderGl()` from the `GL` object in `index.html`. To add or edit glossary entries, edit the `GL` object.

---

## Image system

Images are loaded on demand when a reader clicks an `[Image ID]` link.

**`IMAGE_PATHS`** maps each catalogue ID to a path without extension:
```javascript
'Kbl 069': 'images/cave1/Kbl_069'
```

**`showImgPh(ref)`** tries extensions in order: `.jpg` → `.jpeg` → `.png` → `.webp`.  
The lookup is case-insensitive (falls back to uppercase then lowercase if exact match fails).

Images are not stored in the repository — see `HOW_TO_ADD_IMAGES.md` for placement instructions and `image_manifest.csv` for the full list of expected files.

---

## Adding a new page type (outside the three sidebar groups)

1. Add a `<div id="page-newid" class="page">` to `index.html` with the desired static content, **or** add an entry to `manifest.json` and let it load dynamically.
2. If it must appear in the sidebar under a specific group, add the id to the relevant `ids` array in `buildSidebar()`.
3. If the page needs a menu bar button, add a `.menu-btn` element in the menubar section of `index.html` with `onclick="nav('newid')"`.

---

## Deployment

### GitHub Pages
Push to `main`. Enable Pages under **Settings → Pages → Deploy from branch → main → / (root)**. The `.nojekyll` file is already present (prevents Jekyll from processing the underscored folders).

### Any static host
Upload all files as-is. No build step, no server-side logic required. The only runtime requirement is that `manifest.json` and the `content/` files are served over HTTP — `file://` protocol is not supported.

### Local development
```bash
python -m http.server 8000
# then open http://localhost:8000
```
Any HTTP server works (Node `http-server`, nginx, Apache, etc.).

---

## Common maintenance tasks

### Add a new section to a cave
1. Create `content/caveN/cN-newfile.html` with `<p id="cN-newfile">` as the first line.
2. Add `"content/caveN/cN-newfile.html"` to the `"files"` array for that cave in `manifest.json`.
3. Add `{ "label": "· Section Name", "anchor": "cN-newfile" }` to the `"toc"` array.

### Change a page title or subtitle
Edit the `"title"` or `"subtitle"` fields in `manifest.json`. The page header and status bar update automatically.

### Change a sidebar label
Edit `SIDEBAR_LABELS` in `index.html` for the fixed pages (home, foreword, glossary, bibliography, about), or edit `"title"` in `manifest.json` for cave pages.

### Change the order of sections within a cave page
Reorder the filenames in the `"files"` array and the entries in the `"toc"` array in `manifest.json`.

### Change the order of caves in the sidebar
Reorder the page objects in the `"pages"` array in `manifest.json`. The sidebar reflects the order of entries that start with `cave`.

### Fix a double-encoded character (e.g. `Â·` instead of `·`)
This happens when UTF-8 text is saved as Latin-1. Fix with:
```bash
sed -i 's/Â·/·/g' manifest.json
```
Always save files as UTF-8.

### Clear the client-side page cache
The cache (`pageCache`) is in-memory only and resets on every full page reload. There is no persistent cache to clear. If a user sees stale content, a hard reload (`Ctrl+Shift+R`) will re-fetch everything.
