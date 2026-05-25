import csv, re, shutil
from pathlib import Path

BASE = Path("c:/Users/vsrag/codebase/ajanta-interactive")
PICTURES_ROOT = BASE / "pictures" / "01 Ajanta-Pictures"

with open(BASE / "index.html", encoding="utf-8") as f:
    html = f.read()

m = re.search(r'const IMAGE_PATHS\s*=\s*\{(.*?)\};', html, re.DOTALL)
image_paths_raw = {}
for line in m.group(1).splitlines():
    lm = re.match(r'\s*"([^"]+)":\s*"([^"]+)"', line)
    if lm:
        image_paths_raw[lm.group(1)] = lm.group(2)

print(f"Parsed {len(image_paths_raw)} IMAGE_PATHS entries")

def norm_id(s):
    s = s.lower().strip()
    s = s.replace("\\", "-").replace("/", "-").replace(" ", "_")
    return s

# Keep original-case exact dict too for priority matching
id_to_dest_exact = {k: v for k, v in image_paths_raw.items()}
id_to_dest = {norm_id(k): v for k, v in image_paths_raw.items()}

mapped = []
with open(BASE / "images_mapping.csv", newline="", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        mapped.append(row)

print(f"Found {len(mapped)} rows in images_mapping.csv")

copied = []
errors = []

for row in mapped:
    image_id = row["image_id"].strip()
    source_relpath = row["source_relpath"].strip()

    src = PICTURES_ROOT / source_relpath
    if not src.exists():
        errors.append(f"SOURCE MISSING: {image_id} | {src}")
        continue

    # Exact match first, then lowercase fallback
    dest_base = id_to_dest_exact.get(image_id) or id_to_dest.get(norm_id(image_id))
    if not dest_base:
        errors.append(f"NOT IN IMAGE_PATHS: '{image_id}' (norm='{nid}')")
        continue

    ext = src.suffix.lower()
    dest = BASE / (dest_base + ext)
    dest.parent.mkdir(parents=True, exist_ok=True)

    try:
        shutil.copy2(str(src), str(dest))
        copied.append(f"{image_id} -> {dest.relative_to(BASE)}")
    except Exception as e:
        errors.append(f"COPY ERROR {image_id}: {e}")

print(f"\nCopied: {len(copied)}")
for c in copied:
    print(f"  OK  {c}")

print(f"\nErrors/skipped: {len(errors)}")
for e in errors:
    print(f"  !! {e}")
