import re, pathlib

data = pathlib.Path("AJANTA.EXE").read_bytes()

marker = b'{\\rtf1'
out_dir = pathlib.Path("extracted_rtf")
out_dir.mkdir(exist_ok=True)

starts = [m.start() for m in re.finditer(re.escape(marker), data)]
print(f"Found {len(starts)} RTF marker(s)")

for i, start in enumerate(starts):
    depth = 0
    pos = start
    end = start
    while pos < len(data):
        b = data[pos]
        if b == ord('{'):
            depth += 1
        elif b == ord('}'):
            depth -= 1
            if depth == 0:
                end = pos + 1
                break
        pos += 1
    blob = data[start:end]
    fname = out_dir / f"doc_{i+1:03d}.rtf"
    fname.write_bytes(blob)
    print(f"  Wrote {fname}  ({len(blob):,} bytes)")
