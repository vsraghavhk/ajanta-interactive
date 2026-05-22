# Ajanta — An Interactive Guide

A self-contained interactive guide to the Ajanta cave paintings and sculptures, by **S. Swaminathan, IIT Delhi**.

Live site: [https://&lt;your-username&gt;.github.io/&lt;repo-name&gt;/](https://github.com)

## Contents

| File / Folder | Purpose |
|---|---|
| `index.html` | The complete interactive guide (all text, CSS and JS in one file) |
| `images/` | Place photograph files here (see below) |
| `image_manifest.csv` | Lists every image: ID, folder, filename, caption |
| `HOW_TO_ADD_IMAGES.md` | Step-by-step instructions for adding photographs |

## Adding photographs

Photographs are **not** included in this repository. To display images in the guide:

1. Open `image_manifest.csv` — it lists every expected image file and its folder.
2. Rename each photograph file to match the `expected_file` column (e.g. `Kbl_069.jpg`).
3. Place it in the subfolder shown in the `folder` column (e.g. `images/cave1/`).
4. Commit and push — the guide will display the photograph automatically.

See `HOW_TO_ADD_IMAGES.md` for full instructions.

## Editing the text

All text is inside `index.html`. To edit:

1. Open `index.html` on GitHub (click the file, then the pencil icon).
2. Make your changes and commit directly to `main`.
3. GitHub Pages will update within a minute or two.

## Enabling GitHub Pages

1. Go to **Settings → Pages** in your repository.
2. Under *Source*, select **Deploy from a branch**.
3. Choose **`main`** branch and **`/ (root)`** folder.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`.
