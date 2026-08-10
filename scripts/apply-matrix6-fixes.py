#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent

def update(page: int, transform):
    path = ROOT / f"pg{page:03d}_sec001.html"
    source = path.read_text()
    result = transform(source)
    path.write_text(result)

def page58(source: str) -> str:
    source = source.replace(
        '<span aria-hidden="true"></span><div data-id="pg058_n0005" class="text-right">45248</div>\n          <span aria-hidden="true" class="text-center">+</span><div data-id="pg058_n0006" class="text-right">20231</div>',
        '<div data-id="pg058_n0005" class="col-span-2 grid grid-cols-[1.5rem_7rem]"><span aria-hidden="true"></span><span class="text-right">45248</span></div>\n          <div data-id="pg058_n0006" class="col-span-2 grid grid-cols-[1.5rem_7rem]"><span aria-hidden="true" class="text-center">+</span><span class="text-right">20231</span></div>',
    )
    old = '''<div class="adt-body leading-relaxed font-medium space-y-1">
          <div data-id="pg058_n0005">45248</div>
          <div data-id="pg058_n0006">+ 20231</div>
          <div data-id="pg058_n0007" class="h-px w-32 bg-gray-500 my-2"></div>
          <div data-id="pg058_n0008" class="h-px w-32 bg-gray-500"></div>
        </div>'''
    new = '''<div class="adt-body inline-grid grid-cols-[1.5rem_7rem] font-mono tabular-nums leading-relaxed">
          <span aria-hidden="true"></span><div data-id="pg058_n0005" class="text-right">45248</div>
          <span aria-hidden="true" class="text-center">+</span><div data-id="pg058_n0006" class="text-right">20231</div>
          <div data-id="pg058_n0007" class="col-span-2 my-2 h-px w-full bg-gray-500"></div>
          <div data-id="pg058_n0008" class="col-span-2 h-px w-full bg-gray-500"></div>
        </div>'''
    if old in source:
        return source.replace(old, new)
    if 'grid-cols-[1.5rem_7rem]' not in source:
        raise SystemExit('Page 58 arithmetic block not found')
    return source

def vertical_addition(source: str, page: int) -> str:
    pairs = {63: [('pg063_n0006','2361'),('pg063_n0007','3899')],
                  64: [('pg064_n0005','228186'),('pg064_n0006','374899')]}[page]
    first_id, first_num = pairs[0]
    second_id, second_num = pairs[1]
    source = re.sub(
        rf'<div data-id="{first_id}" class="([^"]*)">(?:{first_num})</div>',
        rf'<div data-id="{first_id}" class="\1 grid grid-cols-[1.25rem_1fr] font-mono tabular-nums"><span aria-hidden="true"></span><span class="text-right">{first_num}</span></div>',
        source,
    )
    source = re.sub(
        rf'<div data-id="{second_id}" class="([^"]*)">(?:\+ )?{second_num}</div>',
        rf'<div data-id="{second_id}" class="\1 grid grid-cols-[1.25rem_1fr] font-mono tabular-nums"><span aria-hidden="true" class="text-center">+</span><span class="text-right">{second_num}</span></div>',
        source,
    )
    # Page 63 repeats the same operands in each worked step.
    if page == 63:
        source = re.sub(
            r'<div data-id="(pg063_n(?:0025|0038|0051|0062))" class="text-right">2361</div>',
            r'<div data-id="\1" class="grid grid-cols-[1.25rem_4.5rem] font-mono tabular-nums"><span aria-hidden="true"></span><span class="text-right">2361</span></div>',
            source,
        )
        source = re.sub(
            r'<div data-id="(pg063_n(?:0026|0039|0052|0063))" class="text-right">\+ 3899</div>',
            r'<div data-id="\1" class="grid grid-cols-[1.25rem_4.5rem] font-mono tabular-nums"><span aria-hidden="true" class="text-center">+</span><span class="text-right">3899</span></div>',
            source,
        )
    return source

def page175(source: str) -> str:
    hydrated_pattern = re.compile(
        r'<div class="inline-grid grid-cols-\[1\.25rem_2rem_7rem\] font-mono tabular-nums"><span aria-hidden="true"></span><span>sh</span><span data-id="([^"]+)" class="text-right">([0-9 ]+)</span><span aria-hidden="true" class="text-center">&#x2212;</span><span>sh</span><span data-id="([^"]+)" class="text-right">([0-9 ]+)</span></div>'
    )
    source = hydrated_pattern.sub(
        lambda m: (
            '<div class="space-y-0 font-mono tabular-nums">'
            f'<div data-id="{m.group(1)}" class="grid grid-cols-[1.25rem_2rem_7rem]"><span aria-hidden="true"></span><span>sh</span><span class="text-right">{m.group(2)}</span></div>'
            f'<div data-id="{m.group(3)}" class="grid grid-cols-[1.25rem_2rem_7rem]"><span aria-hidden="true" class="text-center">&#x2212;</span><span>sh</span><span class="text-right">{m.group(4)}</span></div>'
            '</div>'
        ),
        source,
    )
    pattern = re.compile(
        r'<div class="font-mono"><div data-id="([^"]+)">sh ([0-9 ]+)</div><div data-id="([^"]+)">&#x2212; sh ([0-9 ]+)</div></div>'
    )
    def replacement(match):
        a_id, a, b_id, b = match.groups()
        return (
            '<div class="inline-grid grid-cols-[1.25rem_2rem_7rem] font-mono tabular-nums">'
            f'<span aria-hidden="true"></span><span>sh</span><span data-id="{a_id}" class="text-right">{a}</span>'
            f'<span aria-hidden="true" class="text-center">&#x2212;</span><span>sh</span><span data-id="{b_id}" class="text-right">{b}</span>'
            '</div>'
        )
    result, count = pattern.subn(replacement, source)
    if count == 0 and 'grid-cols-[1.25rem_2rem_7rem]' not in source:
        raise SystemExit('Page 175 arithmetic blocks not found')
    return result

def page180(source: str) -> str:
    if '>SPECIMEN</span>' in source:
        return source
    pattern = re.compile(r'(<img\b[^>]*data-id="pg180_im00[1-3]"[^>]*>)')
    result, count = pattern.subn(
        r'<figure class="relative mx-auto w-full max-w-[36rem] overflow-hidden">\1<span aria-hidden="true" class="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-black tracking-[0.18em] text-red-700/50 rotate-[-18deg]">SPECIMEN</span></figure>',
        source,
    )
    if count != 3:
        raise SystemExit(f'Expected three page 180 banknotes, found {count}')
    return result

update(58, page58)
update(63, lambda s: vertical_addition(s, 63))
update(64, lambda s: vertical_addition(s, 64))
update(175, page175)
update(180, page180)
print('Applied Matrix 6 arithmetic alignment and watermark fixes')
