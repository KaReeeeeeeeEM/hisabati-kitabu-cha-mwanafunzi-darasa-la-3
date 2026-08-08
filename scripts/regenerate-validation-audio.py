#!/usr/bin/env python3
import asyncio
import html
import json
import os
import re
import sys
from pathlib import Path
from xml.etree import ElementTree

sys.path.insert(0, "/tmp/hisabati-edge-tts")
import edge_tts

ROOT = Path(__file__).resolve().parent.parent
LOCALE = ROOT / "content/i18n/sw-TZ"
TEXTS_PATH = LOCALE / "texts.json"
AUDIOS_PATH = LOCALE / "audios.json"
AUDIO_DIR = LOCALE / "audio"
VOICE = "sw-TZ-RehemaNeural"

AUDIO_REVIEW_PAGES = {
    24, 35, 37, 41, 44, 47, 48, 56, 58, 60, 62, 63, 64, 65, 66, 67,
    69, 71, 76, 78, 80, 81, 82, 89, 94, 95, 99, 100, 125, 127, 131,
    153, 162, 163, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177,
    178, 180, 181, 182, 183, 184,
}

CHANGED_IDS = {
    "pg014_n0046", "pg024_n0016", "pg025_n0042", "pg026_n0005",
    "pg031_n0024", "pg039_n0040", "pg039_n0045", "pg041_n0002",
    "pg041_n0003", "pg041_n0005", "pg041_n0006", "pg051_n0012",
    "pg057_n0005", "pg057_n0017", "pg057_n0023", "pg060_n0003",
    "pg071_n0024", "pg081_n0028", "pg081_n0038", "pg082_n0015",
    "pg084_n0011", "pg094_n0005", "pg095_n0027", "pg100_n0018",
    "pg102_n0017", "pg123_n0017", "pg165_n0023", "pg169_n0022",
    "pg169_n0024", "pg169_n0026", "pg169_n0028", "pg169_n0030",
    "pg169_n0032", "pg172_n0028",
}

ONES = ["sifuri", "moja", "mbili", "tatu", "nne", "tano", "sita", "saba", "nane", "tisa"]
TENS = ["", "kumi", "ishirini", "thelathini", "arobaini", "hamsini", "sitini", "sabini", "themanini", "tisini"]

def number_words(value: str) -> str:
    digits = value.replace(",", "").replace(" ", "")
    if len(digits) > 1 and digits.startswith("0"):
        return " ".join(ONES[int(d)] for d in digits)
    n = int(digits)
    if n < 10:
        return ONES[n]
    if n < 100:
        q, r = divmod(n, 10)
        return TENS[q] + (f" na {ONES[r]}" if r else "")
    if n < 1000:
        q, r = divmod(n, 100)
        return f"mia {ONES[q]}" + (f" {number_words(str(r))}" if r else "")
    for scale, label in ((1_000_000, "milioni"), (1_000, "elfu")):
        if n >= scale:
            q, r = divmod(n, scale)
            return f"{label} {number_words(str(q))}" + (f" {number_words(str(r))}" if r else "")
    return " ".join(ONES[int(d)] for d in digits)

def spoken_text(item_id: str, text: str) -> str:
    def read_math(node):
        name = node.tag.rsplit("}", 1)[-1]
        children = list(node)
        if name == "mfrac" and len(children) >= 2:
            return f"{read_math(children[0])} juu ya {read_math(children[1])}"
        if children:
            return " ".join(read_math(child) for child in children)
        return node.text or ""

    def replace_math(match):
        try:
            return read_math(ElementTree.fromstring(match.group(0)))
        except ElementTree.ParseError:
            return re.sub(r"<[^>]+>", " ", match.group(0))

    value = html.unescape(text)
    value = re.sub(r"<math\b[^>]*>.*?</math>", replace_math, value, flags=re.S)
    value = re.sub(r"<[^>]+>", " ", value)
    value = re.sub(r"(?<=\d),(?=\d)", "", value)
    value = re.sub(r"\bmL\b", "mililita", value, flags=re.I)
    value = re.sub(r"\bSh\b|\bsh\b", "shilingi", value)
    value = re.sub(r"\bst\b", "senti", value, flags=re.I)
    value = re.sub(r"\bC\b", "sii", value)
    value = value.replace("/", " au ")
    value = value.replace("↔", "mstari mnyoofu ")
    value = value.replace("✓", "alama ya vema").replace("✗", "alama ya mkasi")
    value = value.replace("+", " jumlisha ").replace("−", " toa ").replace("–", " toa ")
    value = value.replace("=", " ni sawa na ").replace(">", " kubwa kuliko ").replace("<", " ndogo kuliko ")
    value = re.sub(r"\d[\d,]*", lambda m: number_words(m.group(0)), value)
    value = re.sub(r"\s+", " ", value).strip(" .")
    return value

def page_number(item_id: str):
    match = re.match(r"pg(\d{3})_", item_id)
    return int(match.group(1)) if match else None

def should_regenerate(item_id: str, text: str) -> bool:
    if item_id in CHANGED_IDS:
        return True
    page = page_number(item_id)
    if page not in AUDIO_REVIEW_PAGES:
        return False
    if "_im" in item_id:
        return True
    return bool(re.search(r"\d{4,}|\b(?:sh|st|mL|nne|C)\b|[+−–=]|\d+\s+\d+", text))

async def render(item_id: str, text: str, semaphore: asyncio.Semaphore):
    output = AUDIO_DIR / f"{item_id}.mp3"
    speech = spoken_text(item_id, text)
    async with semaphore:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(speech, VOICE, rate="-5%").save(str(output))
                return item_id, speech
            except Exception:
                if attempt == 3:
                    raise
                await asyncio.sleep(1.5 * (attempt + 1))

async def main():
    texts = json.loads(TEXTS_PATH.read_text())
    audios = json.loads(AUDIOS_PATH.read_text())
    targets = [(item_id, text) for item_id, text in texts.items() if isinstance(text, str) and should_regenerate(item_id, text)]
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    semaphore = asyncio.Semaphore(8)
    completed = 0
    for start in range(0, len(targets), 80):
        batch = targets[start:start + 80]
        results = await asyncio.gather(*(render(item_id, text, semaphore) for item_id, text in batch))
        for item_id, _ in results:
            audios[item_id] = f"{item_id}.mp3"
        completed += len(results)
        print(f"Generated {completed}/{len(targets)} audio files", flush=True)
    AUDIOS_PATH.write_text(json.dumps(audios, ensure_ascii=False, indent=2) + "\n")

if __name__ == "__main__":
    asyncio.run(main())
