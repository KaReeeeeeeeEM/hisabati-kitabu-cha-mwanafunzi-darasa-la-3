#!/usr/bin/env python3
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEXTS = json.loads((ROOT / "content/i18n/sw-TZ/texts.json").read_text())
AUDIOS_PATH = ROOT / "content/i18n/sw-TZ/audios.json"
AUDIOS = json.loads(AUDIOS_PATH.read_text())
AUDIO_DIR = ROOT / "content/i18n/sw-TZ/audio"

targets = []
for item_id, value in TEXTS.items():
    if not isinstance(value, str) or not re.match(r"pg\d{3}_(n|im)", item_id):
        continue
    page = int(item_id[2:5])
    if page in {89, 95, 153, 180} and re.search(r"[A-Za-z0-9]", value):
        targets.append(item_id)
    elif page == 129 and "<math" in value:
        targets.append(item_id)

for item_id in sorted(set(targets)):
    old_name = AUDIOS[item_id]
    new_name = f"{item_id}-nova-matrix6.mp3"
    source = AUDIO_DIR / old_name
    target = AUDIO_DIR / new_name
    if not target.exists() or target.read_bytes() != source.read_bytes():
        shutil.copy2(source, target)
    AUDIOS[item_id] = new_name

AUDIOS_PATH.write_text(json.dumps(AUDIOS, ensure_ascii=False, indent=2) + "\n")
print(f"Versioned {len(set(targets))} Matrix 6 audio files")
