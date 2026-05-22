"""
Extract text content from Ajanta Authorware binary files (WPLI/WPCR format).
Content is stored as null-terminated plain text strings embedded in binary data.
"""
import pathlib
import re
import sys

OUT_DIR = pathlib.Path("extracted_content")
OUT_DIR.mkdir(exist_ok=True)

def extract_text_blocks(data: bytes, label: str, min_len: int = 60) -> list[str]:
    """Find readable text blocks separated by null bytes or binary noise."""
    # Split on runs of non-printable bytes
    segments = re.split(rb'[\x00-\x1f\x80-\xff]{1,}', data)
    blocks = []
    for seg in segments:
        try:
            text = seg.decode('latin-1').strip()
        except Exception:
            continue
        # Keep only segments that look like real text:
        # mostly alphanumeric/punctuation/spaces, min length
        if len(text) < min_len:
            continue
        # Reject if >30% of chars are non-letter/non-space symbols (likely binary noise)
        readable = sum(1 for c in text if c.isalpha() or c.isspace())
        if readable / len(text) < 0.55:
            continue
        blocks.append(text)
    print(f"  {label}: {len(blocks)} text blocks found")
    return blocks


def save_blocks(blocks: list[str], filename: str, source: str):
    out = OUT_DIR / filename
    with out.open("w", encoding="utf-8") as f:
        f.write(f"# Content extracted from: {source}\n\n")
        seen = set()
        for i, block in enumerate(blocks, 1):
            # Deduplicate
            key = block[:80]
            if key in seen:
                continue
            seen.add(key)
            f.write(block)
            f.write("\n\n---\n\n")
    print(f"  Saved to {out}")


# --- Extract from APR ---
print("Processing AJANTA.APR ...")
apr_data = pathlib.Path("AJANTA.APR").read_bytes()
apr_blocks = extract_text_blocks(apr_data, "APR", min_len=30)
save_blocks(apr_blocks, "ajanta_apr_content.txt", "AJANTA.APR")

# --- Extract from EXE content section (after the NE runtime) ---
print("Processing AJANTA.EXE content section ...")
exe_data = pathlib.Path("AJANTA.EXE").read_bytes()
# Content starts at WPCR marker at offset 524288
content_section = exe_data[524288:]
exe_blocks = extract_text_blocks(content_section, "EXE content", min_len=80)
save_blocks(exe_blocks, "ajanta_exe_content.txt", "AJANTA.EXE (content section)")

print(f"\nDone. Files written to: {OUT_DIR}/")
print(f"  ajanta_apr_content.txt  — glossary & reference terms")
print(f"  ajanta_exe_content.txt  — main article text")
