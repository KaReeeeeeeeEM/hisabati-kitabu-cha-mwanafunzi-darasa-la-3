#!/usr/bin/env python3
import json
import os
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "voice-samples" / "openai"
KEY_FILE = Path(os.environ.get("OPENAI_API_KEY_FILE", "/tmp/openai_api_key"))
API_KEY = os.environ.get("OPENAI_API_KEY", "").strip() or KEY_FILE.read_text().strip()
MODEL = os.environ.get("OPENAI_TTS_MODEL", "gpt-4o-mini-tts")
VOICES = [v for v in os.environ.get("OPENAI_TTS_VOICES", "coral,nova,onyx").split(",") if v]

DEFAULT_TEXT = (
    "Mfano wa usomaji wa Hisabati. Namba laki mbili sabini na tatu elfu, "
    "mia nne hamsini na tatu. Namba milioni mbili, laki mbili sitini na moja elfu, "
    "mia tano na kumi na nne. Sehemu mbili juu ya nne ni sawa na sehemu moja juu ya mbili. "
    "Shilingi laki nne thelathini na tano elfu, mia mbili hamsini; na senti sabini na tano."
)
TEXT = os.environ.get("OPENAI_TTS_TEXT", DEFAULT_TEXT)
OUTPUT_LABEL = os.environ.get("OPENAI_TTS_OUTPUT_LABEL", "tanzania-swahili")

INSTRUCTIONS = (
    "Speak in natural Tanzanian Swahili like a warm, confident primary-school mathematics teacher. "
    "Use a measured pace, crisp consonants, short pauses at commas, and extra clarity for every number, "
    "fraction, and currency amount. Do not use an English accent. Read only the supplied text."
)

OUT.mkdir(parents=True, exist_ok=True)
for voice in VOICES:
    body = {
        "model": MODEL,
        "voice": voice,
        "input": TEXT,
        "response_format": "mp3",
        "speed": 0.92,
    }
    if MODEL == "gpt-4o-mini-tts":
        body["instructions"] = INSTRUCTIONS
    payload = json.dumps(body).encode()
    request = urllib.request.Request(
        "https://api.openai.com/v1/audio/speech",
        data=payload,
        headers={"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"},
        method="POST",
    )
    output = OUT / f"{OUTPUT_LABEL}-{voice}-{MODEL}.mp3"
    with urllib.request.urlopen(request, timeout=180) as response:
        output.write_bytes(response.read())
    print(output)
