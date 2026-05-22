"""
Organise the raw extracted text blocks into clean Markdown files
ready for MkDocs.
"""
import pathlib
import re

SRC = pathlib.Path("extracted_content")
MD_DIR = pathlib.Path("docs")
MD_DIR.mkdir(exist_ok=True)


def looks_like_noise(text: str) -> bool:
    """Return True for nav labels, image codes, font refs, single words."""
    stripped = text.strip()
    # Very short
    if len(stripped) < 20:
        return True
    # Looks like an image/asset code: "kbl - 91B", "LA - 17"
    if re.match(r'^(kbl|LA|ASI)\s*[-–]\s*\d', stripped):
        return True
    # Mostly digits / punctuation
    alpha = sum(c.isalpha() for c in stripped)
    if alpha / len(stripped) < 0.4:
        return True
    # Repeated short terms (nav index)
    words = stripped.split()
    if len(words) <= 3 and all(len(w) < 15 for w in words):
        return True
    return False


def clean(text: str) -> str:
    # Collapse internal whitespace
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\r\n?', '\n', text)
    text = text.strip()
    return text


# ---------- Glossary (APR) ----------
raw_apr = (SRC / "ajanta_apr_content.txt").read_text(encoding="utf-8")
apr_blocks = [b.strip() for b in raw_apr.split("\n\n---\n\n") if b.strip()]
apr_blocks = [clean(b) for b in apr_blocks if not looks_like_noise(b)]
# Skip the first line (file header comment)
apr_blocks = [b for b in apr_blocks if not b.startswith("#")]

# Sort and format as glossary
glossary_md = "# Glossary\n\n"
glossary_md += "> Definitions of technical, Sanskrit, and architectural terms used in the Ajanta texts.\n\n"
for block in sorted(apr_blocks, key=lambda x: x.lower()):
    # First word/phrase before ':' becomes the term
    if ':' in block[:60]:
        term, defn = block.split(':', 1)
        glossary_md += f"## {term.strip()}\n\n{defn.strip()}\n\n"
    else:
        glossary_md += f"{block}\n\n"

(MD_DIR / "glossary.md").write_text(glossary_md, encoding="utf-8")
print(f"glossary.md: {len(apr_blocks)} entries")


# ---------- Main content (EXE) ----------
raw_exe = (SRC / "ajanta_exe_content.txt").read_text(encoding="utf-8")
exe_blocks = [b.strip() for b in raw_exe.split("\n\n---\n\n") if b.strip()]
exe_blocks = [clean(b) for b in exe_blocks if not b.startswith("#")]
exe_blocks = [b for b in exe_blocks if not looks_like_noise(b)]
exe_blocks = [b for b in exe_blocks if len(b) > 80]  # keep only substantial paragraphs

# Deduplicate
seen = set()
unique_blocks = []
for b in exe_blocks:
    key = b[:100]
    if key not in seen:
        seen.add(key)
        unique_blocks.append(b)

print(f"EXE unique content blocks: {len(unique_blocks)}")

# Try to detect section headings (short all-caps or title-case lines, <80 chars)
def is_heading(text: str) -> bool:
    stripped = text.strip()
    if len(stripped) > 100:
        return False
    words = stripped.split()
    if len(words) > 12:
        return False
    caps = sum(1 for w in words if w[0].isupper())
    return caps / len(words) > 0.6

# Build one big "Main Content" markdown file
content_md = "# Ajanta — Full Content\n\n"
content_md += "_Extracted from the original Macromedia Authorware interactive application._\n\n---\n\n"

for block in unique_blocks:
    if is_heading(block):
        content_md += f"## {block}\n\n"
    else:
        content_md += f"{block}\n\n"

(MD_DIR / "content.md").write_text(content_md, encoding="utf-8")
print(f"content.md: {len(unique_blocks)} paragraphs")

# ---------- Index ----------
index_md = """# Ajanta Interactive — Recovered Texts

This site presents the text content recovered from the original
**Ajanta Interactive** CD-ROM application, created by Prof. S. Swaminathan.
The application was built with Macromedia Authorware for Windows 95.

## Contents

- [Full Content](content.md) — main essays, cave descriptions, art history
- [Glossary](glossary.md) — Sanskrit, architectural, and art-historical terms

---

_Original application © Prof. S. Swaminathan. Texts recovered and republished under MIT licence._
"""
(MD_DIR / "index.md").write_text(index_md, encoding="utf-8")
print("index.md written")
print(f"\nAll files in: {MD_DIR}/")
