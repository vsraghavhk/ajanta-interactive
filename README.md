# Ajanta — An Interactive Guide
### Content Editor's Handbook

A self-contained interactive guide to the Ajanta cave paintings and sculptures, by **S. Swaminathan, IIT Delhi**.

---

## Running the guide locally

You must serve the files through a local web server — opening `index.html` directly from your file manager will not work (the browser blocks the content loading for security reasons).

```bash
cd /path/to/ajanta-interactive
python -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

---

## How the content is organised

Each page in the guide is made up of one or more small HTML files stored in the `content/` folder. A central index file called `manifest.json` tells the guide which files belong to each page and what to show in the sidebar.

```
ajanta-interactive/
├── index.html              ← the app shell (navigation, styling, UI)
├── manifest.json           ← index of all pages and their files
└── content/
    ├── foreword.html
    ├── bibliography.html
    ├── about.html
    ├── overview/
    │   ├── intro.html
    │   ├── ov-1.html
    │   └── ...
    ├── cave1/
    │   ├── intro.html
    │   ├── c1-shibi.html
    │   └── ...
    └── cave17/
        └── ...
```

---

## Editing existing content

1. Find the file in `content/` that contains the section you want to edit.
   - Cave pages are in `content/cave1/`, `content/cave2/`, etc.
   - Each painting or topic has its own file (e.g. `content/cave1/c1-shibi.html`).
   - The `intro.html` inside each cave folder is the introductory overview for that cave.

2. Open the file and edit the text inside the `<p>` tags. Do not remove or change the `id=` attribute on the first paragraph — this is used for navigation.

3. Save the file. Reload the browser to see the change.

**Do not change** image reference links — they look like this and must be left exactly as written:
```html
<span class="img-ref" onclick="showImgPh('Kbl 069')" title="Image: Kbl 069">[Kbl 069]</span>
```

---

## Adding a new section to an existing cave page

### Step 1 — Create the content file

Create a new `.html` file in the cave's folder. The filename should reflect the subject (e.g. `c1-newpainting.html`).

The file must follow this structure:

```html
<p id="c1-newpainting" class="">Title of the Section</p>
<p class="">Cave 1, 6th century AD</p>
<p class="">Your descriptive text here...</p>
<p class="">More paragraphs as needed.</p>
```

Rules:
- The **first paragraph must have an `id`** — this is the anchor used for sidebar navigation. Use the filename without `.html` as the id (e.g. file `c1-newpainting.html` → id `c1-newpainting`).
- All other paragraphs use `class=""` (no id needed).
- Plain text only inside `<p>` tags — no extra HTML elements except image references (see below).
- Save the file as **UTF-8**.

### Step 2 — Add the file to manifest.json

Open `manifest.json` and find the entry for the cave you are editing. Add the new filename to the `"files"` array, and add a new entry to the `"toc"` array:

```json
{
  "id": "cave1",
  "title": "Cave One",
  "subtitle": "Vihaara · End of 5th century AD",
  "files": [
    "content/cave1/intro.html",
    "content/cave1/c1-shibi.html",
    "content/cave1/c1-newpainting.html"
  ],
  "toc": [
    { "label": "· Shibi Jaataka",    "anchor": "c1-shibi" },
    { "label": "· New Painting",     "anchor": "c1-newpainting" }
  ]
}
```

- The `"anchor"` value in `toc` must exactly match the `id` on the first paragraph of the file.
- The `"label"` is what appears in the sidebar. Use `·` (a middle dot) as the bullet prefix.
- The order of files in `"files"` controls the order the sections appear on the page.

### Step 3 — Reload and test

Reload http://localhost:8000, navigate to the cave, and verify:
- The new section appears on the page in the correct position.
- Clicking the sidebar entry scrolls to the section.

---

## Adding a brand new cave or page

### Step 1 — Create the content folder and files

Create a new folder under `content/` (e.g. `content/cave3/`) and add at minimum an `intro.html` file, plus one file per section, following the format above.

### Step 2 — Add the page to manifest.json

Add a new entry to the `"pages"` array in `manifest.json`. Insert it in the position you want it to appear in the sidebar (cave pages are grouped together automatically):

```json
{
  "id": "cave3",
  "title": "Cave Three",
  "subtitle": "Vihaara · 5th century AD",
  "files": [
    "content/cave3/intro.html",
    "content/cave3/c3-firstsection.html"
  ],
  "toc": [
    { "label": "· First Section", "anchor": "c3-firstsection" }
  ]
}
```

The `"id"` must start with `cave` for the page to appear under the **The Caves** group in the sidebar. Pages with id `foreword` or `overview` appear under **Introduction**. Pages with id `bibliography` or `about` appear under **Reference**.

---

## Adding image references to text

When you want to reference a photograph, add this snippet at the relevant point in a paragraph:

```html
<span class="img-ref" onclick="showImgPh('Kbl 069')" title="Image: Kbl 069">[Kbl 069]</span>
```

Replace `Kbl 069` with the correct catalogue ID. The ID must match one of the entries in `image_manifest.csv`.

When a reader clicks this link, a popup appears showing the photograph (if the image file has been placed in the correct `images/` subfolder) or a labelled placeholder (if the image is not yet available).

For instructions on adding actual photograph files, see [HOW_TO_ADD_IMAGES.md](HOW_TO_ADD_IMAGES.md).

---

## Editing the Foreword, Bibliography, or About page

These pages each use a single file:

| Page | File |
|---|---|
| Foreword | `content/foreword.html` |
| Bibliography | `content/bibliography.html` |
| About the Author | `content/about.html` |

Edit the `<p>` elements inside directly. No changes to `manifest.json` are needed for these pages.

---

## Editing the Glossary

The Glossary is defined directly inside `index.html` — it is not a separate content file. Search for the variable `const GL = {` in `index.html` to find it. Each entry follows this pattern:

```javascript
'term': 'Definition text here.',
```

Adding or editing entries here will update the Glossary page immediately.

---

## Publishing to GitHub Pages

1. Commit and push all changes to the `main` branch.
2. Go to **Settings → Pages** in the repository.
3. Under *Source*, select **Deploy from a branch → main → / (root)**.
4. Click **Save**. The live site updates within a minute or two.

---

## Quick reference: content file format

```html
<p id="section-id" class="">Section Title</p>
<p class="">Subtitle or date line</p>
<p class="">Paragraph of text. Image reference: <span class="img-ref" onclick="showImgPh('Kbl 069')" title="Image: Kbl 069">[Kbl 069]</span></p>
<p class="">More paragraphs as needed...</p>
```

- First `<p>` must have `id="section-id"` — match this to the `anchor` in `manifest.json`.
- All other `<p>` tags use `class=""`.
- Save as **UTF-8** to avoid garbled characters.
- Do not add any `<div>`, `<h1>`, `<br>`, or other HTML tags — only `<p>` and `<span class="img-ref">`.
