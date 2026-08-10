#!/usr/bin/env python3
from pathlib import Path
import re
import json

ROOT = Path(__file__).resolve().parent.parent

# Page 31: replace unconstrained mark text boxes with two explicit choices.
p = ROOT / "pg031_sec001.html"
s = p.read_text()
answers = {1: "✓", 2: "✗", 3: "✗", 4: "✓", 5: "✗", 6: "✗", 7: "✗", 8: "✗", 9: "✓", 10: "✗"}
for i in range(1, 11):
    pattern = rf'<input id="item-{i}" type="text" data-activity-item="item-{i}" aria-label="([^"]+)" class="[^"]+">'
    replacement = (
        f'<fieldset class="flex justify-center gap-3" aria-label="Chagua alama kwa namba \\1">'
        f'<legend class="sr-only">Chagua ikiwa jibu ni sahihi au si sahihi</legend>'
        f'<label class="cursor-pointer rounded border border-slate-300 bg-white px-2 py-1">'
        f'<input type="radio" name="mark-{i}" value="✓" class="mr-1">✓ Sahihi</label>'
        f'<label class="cursor-pointer rounded border border-slate-300 bg-white px-2 py-1">'
        f'<input type="radio" name="mark-{i}" value="✗" class="mr-1">✗ Si sahihi</label>'
        f'<input id="item-{i}" type="text" data-activity-item="item-{i}" aria-label="Alama iliyochaguliwa kwa \\1" class="sr-only" tabindex="-1">'
        f'</fieldset>'
    )
    s, count = re.subn(pattern, replacement, s)
    if count == 0 and f'name="mark-{i}"' not in s:
        raise SystemExit(f"Could not find page 31 input or choices for item-{i}")
    s = s.replace(f'"item-{i}":"✗"', f'"item-{i}":"{answers[i]}"')

sync = '''<script>
document.querySelectorAll('input[type="radio"][name^="mark-"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    const item = document.getElementById('item-' + radio.name.slice(5));
    item.value = radio.value;
    item.dispatchEvent(new Event('input', { bubbles: true }));
    item.dispatchEvent(new Event('change', { bubbles: true }));
  });
});
</script>'''
if sync not in s:
    s = s.replace('</body>', sync + '\n</body>')
p.write_text(s)

# Page 162: visibly mark every illustrative banknote as a specimen.
p = ROOT / "pg162_sec001.html"
s = p.read_text()
if '>SPECIMEN</span>' not in s:
    s = s.replace('figure class="bg-white/40 rounded-xl p-2"', 'figure class="relative overflow-hidden bg-white/40 rounded-xl p-2"')
    s = re.sub(
        r'(<img data-id="pg162_im00[1-4]"[^>]+>)',
        r'\1<span aria-hidden="true" class="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-black tracking-[0.18em] text-red-700/50 rotate-[-18deg]">SPECIMEN</span>',
        s,
    )
if s.count('>SPECIMEN</span>') != 4:
    raise SystemExit('Expected four SPECIMEN overlays')
p.write_text(s)

# Pages 64 and 173: keep columns vertically aligned using tabular numerals.
for page in (64, 173):
    p = ROOT / f"pg{page:03d}_sec001.html"
    s = p.read_text()
    s = s.replace('tracking-wide">228186', 'tracking-wide font-mono tabular-nums text-right">228186')
    s = s.replace('tracking-wide">+ 374899', 'tracking-wide font-mono tabular-nums text-right">+ 374899')
    s = s.replace('class="w-full border-collapse text-left"', 'class="w-full border-collapse font-mono tabular-nums"')
    s = re.sub(r'class="adt-body py-0\.5( border-b border-zinc-500)?">', r'class="adt-body py-0.5\1 text-right">', s)
    p.write_text(s)

print('Applied Matrix 5 interaction, watermark, and alignment fixes')

# Preserve MathML in the speech catalogue so fractions are announced as
# numerator "juu ya" denominator instead of concatenated whole numbers.
texts_path = ROOT / "content/i18n/sw-TZ/texts.json"
texts = json.loads(texts_path.read_text())
fraction_ids = []
for page in (129, 135):
    source = (ROOT / f"pg{page:03d}_sec001.html").read_text()
    for tag in ("p", "span"):
        pattern = re.compile(rf'<{tag}\b([^>]*)>(.*?)</{tag}>', re.S)
        for attrs, inner_html in pattern.findall(source):
            id_match = re.search(r'data-id="([^"]+)"', attrs)
            if id_match and "<math" in inner_html:
                item_id = id_match.group(1)
                texts[item_id] = inner_html.strip()
                fraction_ids.append(item_id)
texts_path.write_text(json.dumps(texts, ensure_ascii=False, indent=2) + "\n")
print(f"Preserved MathML for {len(fraction_ids)} fraction speech items")
