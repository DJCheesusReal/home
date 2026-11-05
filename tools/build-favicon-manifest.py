from pathlib import Path
import json

root = Path(__file__).resolve().parent.parent
icons = sorted(p.name for p in (root / "icons").glob("*.gif"))
(root / "icons" / "manifest.json").write_text(json.dumps(icons, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {len(icons)} icons to icons/manifest.json")
