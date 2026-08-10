#!/usr/bin/env python3
import asyncio
import html
import json
import os
import re
import subprocess
import sys
import urllib.request
from pathlib import Path
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parent.parent
LOCALE = ROOT / "content/i18n/sw-TZ"
TEXTS_PATH = LOCALE / "texts.json"
AUDIOS_PATH = LOCALE / "audios.json"
AUDIO_DIR = LOCALE / "audio"
CHECKPOINT_PATH = Path(os.environ.get("AUDIO_CHECKPOINT_PATH", "/tmp/hisabati-openai-audio-completed.json"))
MODEL = os.environ.get("OPENAI_TTS_MODEL", "gpt-4o-mini-tts")
VOICE = os.environ.get("OPENAI_TTS_VOICE", "nova")

AUDIO_REVIEW_PAGES = {
    1, 2, 13, 14, 26, 27, 31, 35, 37, 39, 41, 44, 45, 47, 48, 51,
    52, 56, 58, 60, 63, 64, 68, 69, 70, 71, 73, 75, 76, 77, 78,
    79, 80, 81, 82, 89, 94, 95, 99, 100, 102, 117, 121, 123, 124,
    125, 126, 127, 129, 131, 133, 135, 153, 162, 163, 168, 169, 170,
    171, 172, 173, 174, 175, 176, 177, 178, 180, 181, 182, 183, 184,
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
    if n >= 1_000_000:
        q, r = divmod(n, 1_000_000)
        return f"milioni {number_words(str(q))}" + (f" {number_words(str(r))}" if r else "")
    if n >= 1_000:
        q, r = divmod(n, 1_000)
        # Tanzanian primary-school convention for hundred-thousands:
        # 123,456 = mia moja ishirini na tatu elfu, mia nne hamsini na sita.
        prefix = f"{number_words(str(q))} elfu" if q >= 100 else f"elfu {number_words(str(q))}"
        return prefix + (f" {number_words(str(r))}" if r else "")
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
    # Contact details are identifiers, not quantities. Read them one character
    # at a time so a telephone number is never announced as millions.
    if item_id == "pg002_n0014":
        value = value.replace("+", " namba ya kimataifa ").replace("/", ", au ")
        value = re.sub(r"\d", lambda m: ONES[int(m.group(0))] + " ", value)
        return re.sub(r"\s+", " ", value).strip(" .")
    # ISBN punctuation must be announced as a dash, not interpreted as a range.
    if item_id in {"pg001_n0013", "pg002_n0006"}:
        value = value.replace("-", " dash ")
        value = re.sub(r"\d", lambda m: ONES[int(m.group(0))] + " ", value)
        return re.sub(r"\s+", " ", value).strip(" .")
    value = re.sub(r"(?<!\d)(\d+)\s*/\s*(\d+)(?!\d)", r"\1 juu ya \2", value)
    value = re.sub(r"(?<=\d),(?=\d)", "", value)
    value = re.sub(r"\bmL\b", "mililita", value, flags=re.I)
    value = re.sub(r"\bSh\b|\bsh\b", "shilingi", value)
    value = re.sub(r"\bst\b", "senti", value, flags=re.I)
    value = re.sub(r"\bC\b", "sii", value)
    value = value.replace("/", " au ")
    value = re.sub(r"\bminus\b", "toa", value, flags=re.I)
    value = re.sub(r"\bplus\b", "jumlisha", value, flags=re.I)
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
    return page in AUDIO_REVIEW_PAGES and bool(re.search(r"[A-Za-z0-9]", text))

def openai_mp3(speech: str, api_key: str) -> bytes:
    payload = json.dumps({
        "model": MODEL,
        "voice": VOICE,
        "input": speech,
        "instructions": (
            "Speak in natural Tanzanian Swahili like a warm primary-school mathematics teacher. "
            "Use a measured pace, crisp pronunciation, and clear pauses between number place-value groups. "
            "Read only the supplied text."
        ),
        "response_format": "mp3",
        "speed": 0.92,
    }).encode()
    request = urllib.request.Request(
        "https://api.openai.com/v1/audio/speech",
        data=payload,
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        return response.read()

async def render(item_id: str, text: str, semaphore: asyncio.Semaphore, api_key: str):
    output = AUDIO_DIR / f"{item_id}.mp3"
    speech = spoken_text(item_id, text)
    async with semaphore:
        for attempt in range(8):
            try:
                output.write_bytes(await asyncio.to_thread(openai_mp3, speech, api_key))
                return item_id, speech
            except Exception as error:
                print(f"OpenAI attempt {attempt + 1}/8 failed for {item_id}: {error}", flush=True)
                if attempt == 7:
                    raise
                await asyncio.sleep(3 * (attempt + 1))

async def main():
    api_key = os.environ.get("OPENAI_API_KEY", "").strip()
    key_file = os.environ.get("OPENAI_API_KEY_FILE", "/tmp/openai_api_key").strip()
    if not api_key and key_file:
        api_key = Path(key_file).read_text().strip()
    if not api_key:
        raise SystemExit("Set OPENAI_API_KEY or OPENAI_API_KEY_FILE before generating audio")
    texts = json.loads(TEXTS_PATH.read_text())
    audios = json.loads(AUDIOS_PATH.read_text())
    requested_ids = {item_id for item_id in os.environ.get("AUDIO_IDS", "").split(",") if item_id}
    if requested_ids:
        targets = [(item_id, texts[item_id]) for item_id in requested_ids if isinstance(texts.get(item_id), str)]
    else:
        targets = [(item_id, text) for item_id, text in texts.items() if isinstance(text, str) and should_regenerate(item_id, text)]
    if os.environ.get("RESUME_AUDIO") == "1":
        checkpoint = set(json.loads(CHECKPOINT_PATH.read_text())) if CHECKPOINT_PATH.exists() else set()
        changed = subprocess.run(
            ["git", "status", "--porcelain", "--", str(AUDIO_DIR)],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        ).stdout
        completed = checkpoint | {
            Path(line[3:]).stem
            for line in changed.splitlines()
            if line[3:].endswith(".mp3") and (ROOT / line[3:]).stat().st_size > 1000
        }
        for item_id in completed:
            audios[item_id] = f"{item_id}.mp3"
        AUDIOS_PATH.write_text(json.dumps(audios, ensure_ascii=False, indent=2) + "\n")
        targets = [(item_id, text) for item_id, text in targets if item_id not in completed]
        print(f"Resuming with {len(targets)} unfinished audio files", flush=True)
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    semaphore = asyncio.Semaphore(int(os.environ.get("AUDIO_CONCURRENCY", "3")))
    completed = 0
    batch_size = int(os.environ.get("AUDIO_BATCH_SIZE", "1"))
    checkpoint = set(json.loads(CHECKPOINT_PATH.read_text())) if CHECKPOINT_PATH.exists() else set()
    for start in range(0, len(targets), batch_size):
        batch = targets[start:start + batch_size]
        results = await asyncio.gather(*(render(item_id, text, semaphore, api_key) for item_id, text in batch))
        for item_id, _ in results:
            audios[item_id] = f"{item_id}.mp3"
            checkpoint.add(item_id)
        AUDIOS_PATH.write_text(json.dumps(audios, ensure_ascii=False, indent=2) + "\n")
        CHECKPOINT_PATH.write_text(json.dumps(sorted(checkpoint), ensure_ascii=False, indent=2) + "\n")
        completed += len(results)
        print(f"Generated {completed}/{len(targets)} audio files", flush=True)
    AUDIOS_PATH.write_text(json.dumps(audios, ensure_ascii=False, indent=2) + "\n")

if __name__ == "__main__":
    asyncio.run(main())
