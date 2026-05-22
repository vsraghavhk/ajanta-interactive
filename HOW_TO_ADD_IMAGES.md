# How to Add Images to the Ajanta Interactive Guide
**Document:** `index.html`  
**Prepared by:** IIT Delhi — S. Swaminathan  
**Guide version:** May 2026

---

## Overview

The interactive guide currently shows labelled **placeholder boxes** when you click an image reference like `[Kbl 069]`. This guide explains how to supply actual photograph files so those placeholders are replaced by real images — **without modifying any HTML code**.

The HTML has already been updated to auto-detect and load image files from a specific folder structure. You only need to copy files into the right place.

---

## Folder Structure

Place the `index.html` file and the `images/` folder **in the same directory** (this is already the case in this repository):

```
(repository root)/
│
├── index.html             ← the interactive guide
│
└── images/
    ├── cave1/             ← 40 images for Cave One
    ├── cave2/             ← 19 images for Cave Two
    ├── cave6/             ← 3 images for Cave Six
    ├── cave9/             ← 1 image for Cave Nine
    ├── cave10/            ← 3 images for Cave Ten
    ├── cave16/            ← 4 images for Cave Sixteen
    ├── cave17/            ← 47 images for Cave Seventeen
    ├── cave19/            ← 7 images for Cave Nineteen
    ├── cave26/            ← 4 images for Cave Twenty-six
    ├── line_sketches/     ← 20 line drawings
    └── overview/          ← 68 general/overview images
```

Each subfolder already contains a `README.txt` listing the exact filenames expected.

---

## File Naming Rules

Each image file must be named **exactly** after its catalogue ID, with spaces replaced by underscores and `/` replaced by `-`.

| Catalogue ID | File to create |
|---|---|
| `Kbl 069` | `Kbl_069.jpg` |
| `ASI 028` | `ASI_028.jpg` |
| `Nou 210` | `Nou_210.jpg` |
| `Kbl 083B/L` | `Kbl_083B-L.jpg` |
| `Kbl 228/229` | `Kbl_228-229.jpg` |
| `Line 01` | `Line_01.jpg` |

**Naming rules summary:**
- Replace every space ( ) with an underscore (`_`)
- Replace every forward-slash (`/`) with a hyphen (`-`)
- Keep the case exactly as shown (e.g. `Kbl`, `ASI`, `Nou`, `Mjt`)
- The extension can be `.jpg`, `.jpeg`, `.png`, or `.webp` — the guide tries all four automatically

---

## Step-by-Step: Adding Images

### Step 1 — Identify the image

Open `image_manifest.csv` in Excel or any spreadsheet app. It has four columns:

| Column | Meaning |
|---|---|
| `image_id` | The ID shown in the guide (e.g. `Kbl 069`) |
| `folder` | Which subfolder to use (e.g. `cave1`) |
| `filename` | The base filename without extension (e.g. `Kbl_069`) |
| `expected_file` | The full filename you must use (e.g. `Kbl_069.jpg`) |
| `caption` | The painting's title and location |

### Step 2 — Rename your image file

Take your photograph or scan and rename it to match the `expected_file` column exactly.

**Example:** You have a photograph of *Bodhi-sattva Padma-paani* from Cave 1.  
Its ID is `Kbl 069`. Rename the file to `Kbl_069.jpg`.

### Step 3 — Place the file in the correct subfolder

Put the renamed file into the subfolder shown in the `folder` column.

**Example:** `Kbl_069.jpg` goes into `images/cave1/`

Final path in the repository: `images/cave1/Kbl_069.jpg`

### Step 4 — Commit and push (or upload via GitHub)

On GitHub.com you can upload images directly:

1. Navigate to the correct folder (e.g. `images/cave1/`).
2. Click **Add file → Upload files**.
3. Drag your renamed image file(s) in.
4. Click **Commit changes**.

The live site will update within a minute or two.

---

## Batch Renaming (for many files at once)

If you have many files to rename, use the manifest CSV to guide a bulk rename.

**On Windows** — use the free tool "Bulk Rename Utility" or PowerShell:
```powershell
Rename-Item "old_name.jpg" "Kbl_069.jpg"
```

**On Mac/Linux** — use the terminal:
```bash
mv "your_photo.jpg" "images/cave1/Kbl_069.jpg"
```

---

## Important Notes

### Case sensitivity
File names **are case-sensitive** on Linux/Mac servers and on GitHub Pages (which runs on Linux). The ID `Kbl 069` must become `Kbl_069.jpg` — not `kbl_069.jpg` or `KBL_069.jpg`.

### Mixed-case IDs in the guide
Some image references in the text use inconsistent capitalisation (e.g. `kbl 091`, `asi 028`). The guide's image-loading code normalises these automatically, so you only need one file per image, named with standard capitalisation as shown in the manifest.

### Supported formats
The guide tries extensions in this order: `.jpg` → `.jpeg` → `.png` → `.webp`  
If a file isn't found (or the name is wrong), it silently falls back to the placeholder — no error message.

### Running locally vs on GitHub Pages
- **GitHub Pages:** Works in all browsers. Push to the `main` branch and enable Pages in repository Settings.
- **Local file (double-click to open):** Works in Chrome and Firefox. Safari and some browsers block local image loading for security. Use a local web server (see below) if images don't appear.

**Quick local web server (if needed):**
```bash
# Python 3 (any platform)
cd /path/to/your/repository
python3 -m http.server 8080
# Then open: http://localhost:8080/
```

---

## Image Sources Reference

The catalogue IDs use the following photographer/source prefixes:

| Prefix | Source |
|---|---|
| `Kbl` | Khandalavala collection |
| `ASI` | Archaeological Survey of India |
| `Nou` | Nougier collection |
| `Mjt` | Majumdar collection |
| `Line` | Line sketch / architectural drawing |

---

## Complete Image Checklist

Open `image_manifest.csv` and use the **filter** feature to work through images folder by folder. Mark each row as "Done" when you have placed the file.

Total images referenced: **216**

| Folder | Count | Priority |
|---|---|---|
| `cave1` | 40 | High — most referenced cave |
| `cave17` | 47 | High — largest narrative section |
| `cave2` | 19 | High |
| `overview` | 68 | Medium — general views |
| `line_sketches` | 20 | Medium — architectural drawings |
| `cave16` | 4 | Lower |
| `cave19` | 7 | Lower |
| `cave26` | 4 | Lower |
| `cave6` | 3 | Lower |
| `cave9` | 1 | Lower |
| `cave10` | 3 | Lower |

---

## Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| Placeholder still shows after adding file | Wrong filename or wrong folder | Check `image_manifest.csv` for exact name and folder |
| Image appears broken (torn icon) | File is corrupt or wrong format | Re-export the image as standard JPEG |
| Works on Windows but not on GitHub Pages | Case mismatch in filename | Match case exactly as in manifest |
| Works when opened locally but not on web | Browser security restriction | Use a local web server (see above) |
| Image is too large / slow to load | High-resolution source file | Resize to 1200–1600px wide before placing |

---

*For questions about the guide content, contact S. Swaminathan, IIT Delhi.*
