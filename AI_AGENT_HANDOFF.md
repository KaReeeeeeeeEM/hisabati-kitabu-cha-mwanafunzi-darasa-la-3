# AI Agent Handoff — Hisabati Darasa la Tatu HTML Book

## Copy/paste prompt for the next agent

Continue the visual-fidelity audit of this converted HTML mathematics book. The objective is to make every printed page an accurate, static HTML reproduction of the corresponding page in the original PDF—not merely a similar design. Start from printed page 126 because printed pages 70–125 have most recently been audited (but see the concurrent-session note in the status log below — verify the live file state before trusting this number). Work slowly, one printed page at a time. For each page, render or open the corresponding PDF page, open the HTML page locally, compare them section-by-section, fix all differences, verify the result in the in-app browser, and only then move to the next page. Use the issue checklist as a guide, but treat the PDF as the final authority whenever the checklist is incomplete or mistaken. Keep the local preview open on the page being audited.

## Main goal

Convert the complete Tanzanian Institute of Education book **Hisabati — Kitabu cha Mwanafunzi, Darasa la Tatu** into a faithful, non-interactive HTML book.

The HTML should reproduce the PDF page by page, including:

- exact text and mathematical symbols;
- the same content order and grouping;
- comparable positioning, alignment, indentation and wrapping;
- matching font family, font sizes, weights and emphasis;
- matching colors, backgrounds, borders, shadows and gradients;
- matching image/diagram size, crop and placement;
- matching tables, arithmetic layouts, fractions and notation;
- a consistent top and bottom page gradient and page-number treatment;
- a shared bottom navigation/control bar.

The converted book is a **static book**. Remove answer inputs, textareas, submit buttons and other answer-entry interaction. Do not invent wording, answers, labels, borders or decorative containers that are absent from the PDF.

## Important locations

- Workspace repository:
  `/Users/kareem/Documents/ChatGPT/Hisabati Kitabu Cha Mwanafunzi Darasa La Tatu/converted-book`
- Original PDF:
  `/Users/kareem/Documents/HISABATI STD 3 SB/HISABATI (DRS 3) to PRESS (Dec 10.pdf`
- Detailed page issue checklist:
  `/Users/kareem/Downloads/book_fix_prompts.md`
- Local preview:
  `http://127.0.0.1:4174/`
- Main shared styling:
  `assets/fonts.css`
- Page reconstruction and page-specific HTML:
  `assets/page-layout.js`
- Shared fidelity/runtime corrections:
  `assets/book-fidelity.js`
- Individual page shells:
  `pgNNN_sec001.html`
- Extracted/cleaned illustrations:
  `images/`

## Page-number mapping

The PDF/HTML physical page number is six pages ahead of the printed book number:

```text
physical HTML/PDF page = printed page + 6
```

Examples:

- printed page 70 → PDF physical page 76 → `pg076_sec001.html`
- printed page 79 → PDF physical page 85 → `pg085_sec001.html`
- printed page 177 → PDF physical page 183 → `pg183_sec001.html`

Always state whether a number is a **printed page** or **physical HTML/PDF page** to avoid editing the wrong file.

## Visual design guide

### Global page structure

- The page dimensions must remain consistent across the book.
- Content should be horizontally centered with balanced side margins, following the original PDF rather than being pushed against an edge.
- Content width and wrapping should match the corresponding PDF page. Do not blindly widen every element.
- The only normal page-wide backgrounds are the far-top and far-bottom blue gradients. Exercise sections may have their own source-matching background.
- Page titles must sit below—not inside—the upper gradient.
- Page numbers sit at the bottom, at the upper edge of the lower gradient, without colliding with content.
- Do not leave a large artificial empty gap between the last content and page number.
- Do not allow content or images to overflow the fixed page area.

### Typography and color

- Use the book’s bundled rounded handwritten-style font consistently; ensure it loads locally and on the deployed site.
- Normal body copy should use one standard size throughout unless the PDF clearly uses a different hierarchy.
- Question numbers, option labels and fractions should not render smaller than peer body content.
- Bold only content that is bold in the PDF.
- Avoid accidental italics.
- Main blue: `#00b0f0`.
- Alternate light blue: `#98def8`.
- Gray requested for specific table rows: `#d1d2d4`.
- Black content headings should normally be the same size as body text unless the PDF shows otherwise.
- Paragraph justification, line endings and indentation should visually follow the source page.

### Mfano dialogs

- Use the design established on printed pages 1–10 as the canonical Mfano design.
- One outer Mfano border/card only.
- Never add another decorative box inside a Mfano card unless the PDF contains an actual table or explicitly bordered answer area.
- The label uses the gold/olive design and sits on the outer border.
- Mfano dialogs should align with the standard content left edge and generally span the same usable width as Zoezi dialogs when the PDF does.
- Leave a small source-matching vertical gap between preceding content and the Mfano dialog.
- Provide modest internal padding.
- Render Mfano text, tables and arithmetic in HTML. Keep only genuine illustrations/diagrams as images.
- `Jibu`, `Njia` and `Hatua` styling must follow the corresponding PDF page; do not create generic boxes automatically.

### Zoezi dialogs

- Use the canonical design established by Zoezi la 1 on printed page 3.
- Use the source-matching pale exercise background and header bar.
- Continuations on later pages retain the same exercise background even when the header is not repeated.
- Questions should not be placed in separate rounded cards or bordered boxes unless the PDF does so.
- Question numbers align with the first line of their question.
- Options and continuation lines align with the question statement, not the question-number column.
- Keep appropriate vertical spacing between questions without causing overflow.

### Kazi ya Kufanya dialogs

- Render in HTML.
- Use the pale blue body and blue title text from the PDF.
- The title starts at the left content inset.
- A thin blue rule runs directly below the title across the dialog width, with a close, thin shadow beneath it.
- The blue rule must not exceed the dialog width.
- Body content has consistent left/right padding.
- Preserve complete source titles and visible numbering.
- Never infer missing title words from the checklist; verify them in the PDF.

### Sura dialogs

- Follow the Sura ya Kwanza design consistently.
- Full content width.
- `Sura ya ...` and the chapter title are centered.
- The chapter title below `Sura ya ...` uses a clearly larger size.
- Corners/shadow follow the approved chapter design.

### Jikumbushe, Msamiati and other dialogs

- Render as HTML.
- Jikumbushe uses the pale purple source background, purple border/title and visible numbering when present.
- Msamiati uses the source background and aligns term/definition content as in the PDF.
- Zoezi la Marudio, Majibu, Maelezo and Hatua each follow the PDF, not a generic substitute.

### Images and diagrams

- Use images only for genuine illustrations, diagrams and figures—not for ordinary text, tables or dialog boxes.
- Extract the correct figure from the corresponding PDF page.
- Crop tightly and accurately.
- Remove white/background pixels so the image takes on its containing section’s background where appropriate.
- Remove extraction noise, stray lines and black corruption.
- Do not redraw a source diagram approximately when the original can be extracted.
- Preserve labels that are integral to the illustration.
- Scale and align against the PDF; do not allow images to escape their section.

### Tables

- Render tables in HTML unless they are inseparable from a genuine source illustration.
- Match column widths, header weight, fills, borders and alignment.
- Avoid zebra striping unless present in the PDF.
- Keep content on one line where the PDF does; widen only the specific table if necessary.
- Numeric columns may require a right-aligned internal number block while the block itself remains visually centered in the cell.

### Vertical arithmetic

- Align digits by place value from the right.
- Operators appear in their own correct position and are not bold unless the PDF shows them bold.
- Use two horizontal lines when shown in the PDF, with a visible gap between them.
- Lines must not extend excessively past the operator/number block.
- Answers belong between/within the correct lines where shown.
- Carry/borrow digits are red when red in the PDF.
- Crossed-out digits and rewritten digits must be reproduced.

### Fractions and mathematical notation

- Fractions must match surrounding body-text size.
- Inline fractions must be vertically centered with the text baseline; they must not look submerged.
- Use stacked numerator/bar/denominator notation where the PDF does.
- Preserve all missing numerators, denominators and operators.
- Do not add a border around every `Hivyo`/`Kwa hiyo` result; add borders only where the PDF shows them.
- Use proper over-arrows/segment/ray notation for letter pairs such as AB, AC and BC.

## Required page-by-page workflow

For every printed page:

1. Calculate its physical page/file using `printed + 6`.
2. Render that single PDF page with Poppler, for example:

   ```bash
   pdftoppm -f 86 -l 86 -png -r 110 \
     "/Users/kareem/Documents/HISABATI STD 3 SB/HISABATI (DRS 3) to PRESS (Dec 10.pdf" \
     tmp/pdfs/page-80/original
   ```

3. Visually inspect the rendered PDF page.
4. Open the matching HTML page at `http://127.0.0.1:4174/pgNNN_sec001.html` in the in-app browser.
5. Compare, in order:
   - top gradient and top spacing;
   - titles/headings;
   - every content/dialog section;
   - text and mathematical symbols;
   - tables and images;
   - bottom spacing, page number and lower gradient.
6. Fix both the checklist items and any additional mismatch seen in the comparison.
7. Reload with a cache-busting query and visually verify again.
8. Check for horizontal/vertical overflow and unwanted interactive controls.
9. Do not move to the next page until the current page resembles the PDF.
10. Keep the browser preview open on the page currently being audited.

## Editing and verification rules

- Use `apply_patch` for manual code edits.
- Prefer shared CSS/component fixes when the same verified issue repeats, but regression-check earlier pages.
- Use page-specific CSS where a global rule would distort pages that already match.
- After JavaScript edits run:

  ```bash
  node --check assets/page-layout.js
  node --check assets/book-fidelity.js
  git diff --check
  ```

- Cache-bust `fonts.css`, `page-layout.js` and `book-fidelity.js` references when necessary so browser verification uses the latest changes. **`assets/book-fidelity.js` also hardcodes its own second, self-injected `<link>` to `fonts.css` near the top of the file (`auditedStyles.href = './assets/fonts.css?v=...'`) — bump that string too, every time, alongside the HTML files' query strings, or the two loaded stylesheets drift apart and the older one silently wins any CSS rule it and the new file both declare with equal specificity** (see printed page 108 in the status log for the concrete bug this caused and how it was found).
- Do not use screenshots alone as proof. Inspect computed styles/DOM for hidden list markers, overflow and accidental controls.
- Do not claim an entire range is fixed after only structural checks; visually compare each page.
- The repository currently contains many existing modified files and cleaned image assets. Preserve them. Do not reset, discard or overwrite unrelated work.
- Do not commit or push until explicitly requested after the audit is complete.

## Current status at handoff

The latest deliberate audit continued from printed page 80 through printed page 90.

- Printed page 70 / physical 76: vertical arithmetic carries/borrows and red digits checked against PDF; artificial nested-result boxes removed.
- Printed page 71 / physical 77: crossed digits and red borrowing restored in the continuation table.
- Printed page 72 / physical 78: vertical arithmetic column wrapping and double-line arrangement corrected.
- Printed pages 73–74 / physical 79–80: visually compared; no new checklist-specific correction required.
- Printed page 75 / physical 81: restored visible decimal numbering in Jikumbushe.
- Printed pages 76–77 / physical 82–83: visually compared; no new checklist-specific correction required.
- Printed page 78 / physical 84: full Kazi title verified from PDF and visible list numbering restored.
- Printed page 79 / physical 85: centered `Futikamba mbalimbali` and restored visible numbering in both Kazi dialogs.
- Printed page 80 / physical 86: `.book-page80-work ol` was missing `list-style`, hiding the "4./5./6." numbering; restored.
- Printed page 81 / physical 87: `Kazi ya kufanya 4:` heading was rendering fully bold/black instead of bold-blue-label + regular-black-title, because the book-wide `#content h1{font-weight:700!important}` and `#content b{color:inherit}` rules were beating the page-specific `.book-page81-work h1`/`h1 b` rules on specificity; fixed by boosting specificity (`#content#content.book-page-81 …`) and restored missing `ol` numbering the same way as page 80.
- Printed page 82 / physical 88: visually compared; removed one dead/fully-overridden `padding` declaration on `.book-page82-exercise` (no visual change — the generic `.book-exercise-sheet` padding already wins and already matches the PDF). Page has a larger-than-other-pages gap between the Zoezi box and the page number, traced to the book-wide uniform 28px body-text policy (`enforceBookWideNormalTypeScale`) making this page's genuinely shorter content fall short of the fixed page canvas; left as-is since forcing it via box `min-height` or exercise padding would only create dead space and contradicts the "don't fix spacing by inflating containers" pitfall below — flagging here in case a future pass wants to revisit the global type-scale policy for exercise-only text.
- Printed page 83 / physical 89: visually compared; no correction required.
- Printed page 84 / physical 90: same `Kazi ya kufanya 5:` heading-color/weight bug and missing `ol` numbering as page 81; fixed the same way.
- Printed page 85 / physical 91: visually compared; no correction required.
- Printed page 86 / physical 92: same heading-color/weight bug and missing numbering (`Kazi ya kufanya 6:`); fixed.
- Printed page 87 / physical 93: visually compared; no correction required.
- Printed page 88 / physical 94: same heading-color/weight bug and missing numbering (`Kazi ya kufanya 7:`); fixed. The shared `.book-page88-work`/`.book-page89-work` rule needed an `:is(.book-page-88, .book-page-89) :is(...)` selector — first attempt left a stray space between the two `:is()` groups, which made it a descendant combinator instead of a compound selector on `#content` and silently failed to match; fixed by removing the space.
- Printed page 89 / physical 95: same heading-color/weight bug and missing numbering (`Kazi ya kufanya 8:`), fixed via the same shared page88/89 rule. Also found and fixed a genuine wording error unrelated to styling: item 3 under "Kazi ya kufanya 8" read "…ulivyovitambua." in the HTML but the PDF says "…ulivyoviona." — corrected in `page-layout.js`.
- Printed page 90 / physical 96: `.book-page90-reminder ol` (the Jikumbushe box) was missing `list-style`, hiding its "1.–6." numbering; restored. Msamiati and Zoezi la Marudio sections (incl. the Fungu A/B table) matched the PDF already.
- Printed page 91 / physical 97: visually compared; found and fixed a genuine bad image crop — `images/pg097_im006_seg004_v1_transparent.png` (the pencil in the Zoezi la Marudio table, row (d)) had the word "Penseli" baked into the extracted PNG itself, duplicating the separate HTML `<span>Penseli</span>` caption underneath it. Re-cropped the PNG (rows 10–50 of the original 75px-tall extraction) to keep only the pencil artwork.
- Printed page 92 / physical 98: visually compared word-for-word (items 4–13 of Zoezi la Marudio); no correction required.
- Printed page 93 / physical 99 (start of **Sura ya Nne**): found a significant missing-styling bug, not just a spacing/number nit — `.book-page93-chapter` (the "Sura ya Nne / Maumbo" banner) and `.book-page93-intro` (the "Utangulizi" box) are built correctly in `page-layout.js` (line ~699) but had **no base CSS rule at all** in `fonts.css`, so the chapter banner rendered as plain centered text with no gradient/shadow and the intro box rendered as plain text with no peach border/background. Fixed by adding `.book-page93-chapter`/`.book-page93-intro` rules mirroring the already-correct `.book-page77-chapter`/`.book-page77-intro` (Sura ya Tatu) styling. The A/B/C points diagram (`.book-page93-points`) already had CSS and rendered correctly.
  - **This same gap likely exists on the other chapter-opener pages that share the sizing-only `:is(.book-page48-chapter,.book-page77-chapter,.book-page93-chapter,.book-page110-chapter,.book-page131-chapter,.book-page153-chapter)` rule at `fonts.css` ~line 1552**: `.book-page110-chapter`/`.book-page110-intro`, `.book-page131-chapter`/`.book-page131-intro`, and `.book-page153-chapter`/`.book-page153-intro` should be checked the same way when printed pages 116, 137, and 159 are reached — grep for `book-page110-chapter {` (bare declaration, not the shared `:is()` one) to see if it's still missing.
- Browser verification found no horizontal overflow and no leftover interactive controls on any of pages 80–93.
- `assets/fonts.css` and `assets/page-layout.js` both pass `node --check`; the shared cache-busting query (`?v=20260822-pagewise-NN`) was bumped repeatedly across all `pgNNN_sec001.html` files as fixes landed — it is currently at `-62`.

- Printed page 94 / physical 100 (Sura ya Nne, "Nukta, mstari, kipande cha mstari na mwale"): the most substantial fix so far. `.book-page94-work` shares its `> h1 { color: #00b0f0 !important }` rule (fonts.css ~line 696) with several other pages (95, 99, 100, 101, 104, 106, 126, 150, 173); that shared rule is correct for pages whose "Kazi ya kufanya" title has no `<b>` prefix (single-tone, e.g. 106/126/150/173) but wrong for 94 (and likely 95/99/100/101/104, not yet checked) which use the two-tone `<b>Kazi ya kufanya N:</b> Title` pattern — fixed with a page-94-scoped override, same technique as the other two-tone pages, without touching the shared rule. Also: `.book-page94-work ol` had the same missing-`list-style` bug as always. Much bigger: the "mistari minyoofu" (straight-line) example diagram was almost entirely missing — the source HTML only rendered the EF diagonal-line image and dumped the vertical CD / horizontal AB line examples as raw unstyled text (`↕CD↔AB` mashed together) because `.book-page94-lines`, `.vertical`, `.horizontal` had **zero CSS**. Rebuilt CD and AB as small inline SVG line-diagrams (dot + arrowhead + label, mirroring the PDF) with new `.line-diagram` CSS. Also replaced the crude `↔EF`/`↔AB`-style prefix notation in the following paragraph with proper `<span class="overarrow-both">EF</span>` spans, reusing the `.overarrow-both`/`.overarrow-left`/`.overarrow-right` classes already defined at fonts.css ~line 667 (established on printed page 98) — these draw a real arrow glyph *above* the letter pair via `::before`, which is the "proper over-arrow notation" the style guide asks for, instead of a same-line `↔` character. Finally, the Mfano's answer diagram (`←────────A sm 10 B────────→` as one garbled text line) was replaced with a second SVG diagram matching the PDF's tick-marks + red inward-arrow + "sm 10" layout almost exactly.
  - **Caching gotcha discovered here**: bumping the shared `?v=...` query string on `<script>`/`<link>` tags across all HTML files was not enough to force the in-app browser to see new `page-layout.js`/`fonts.css` content — it kept executing an old cached version of the *page* even though a fresh `fetch()` proved the server was returning the new file. The fix that reliably worked: navigate to the page URL with an *extra* throwaway query param appended directly (e.g. `pg100_sec001.html?nocache=123456`), which forces the browser to refetch the HTML document (and therefore its scripts) rather than reuse a cached document. Do this whenever a change "isn't showing up" instead of assuming the fix is wrong.
  - **This page also confirmed the `-work` two-tone-title bug list is not exhaustive** — always check every new "Kazi ya kufanya" heading against the PDF for the bold-blue-label-vs-regular-black-title split before assuming the shared rule already handles it correctly.

- Printed page 95 / physical 101 ("Kipande cha mstari", Kazi ya kufanya 2): same two-tone title bug (fixed, page-95-scoped, same pattern). `.book-page95-points` (six lettered points A–F, reused for both the freehand and ruler-and-pencil steps) had **no positioning CSS at all** and rendered as the literal word "ABCDEF" — added absolute-positioned dot+label CSS mirroring the already-working `.book-page93-points` pattern, coordinates read off the PDF. The `.overline` class used for $\overline{AB}$/$\overline{BA}$ in the intro paragraph turned out to already work correctly — it happens to collide with Tailwind's own `.overline` (`text-decoration:overline`) utility class in `content/tailwind_output.css`, so no fix was needed there.
- Printed page 96 / physical 102 ("Sifa za kipande cha mstari", Mfano wa 1): item 4 is a continuation of "Kazi ya kufanya 2" (no repeated header, pale-blue continuation background) showing three plain line **segments** (dot at both ends, no arrow: A–B, F–E, C–D) — `.book-page96-work`/`.book-page96-segments` had no CSS and the "diagrams" were literally the raw characters `──`, `╱`, `│` with no layout. Mfano wa 1's three ray/segment icons ((a) a ray through ticks A and B with an arrowhead, (b) a bounded segment between ticks A and B, (c) a ray from a tick at L to an arrowhead) were the same problem — crude `←`, `├`, `┤` characters with no layout. Rebuilt all six as small inline SVGs (dot-and-line for the plain segments; tick-mark lines plus an SVG `<marker>`-based arrowhead, which auto-orients along the line angle, for the ray/segment icons in Mfano wa 1) with new `.book-page96-segments`/`.book-page96-drawings` flex-row CSS.
  - **Net effect of pages 94/95/96**: this cluster of "Maumbo" (shapes/geometry) pages relies heavily on hand-drawn line/point/ray diagrams that the original converter rendered as bare Unicode arrow/box-drawing characters with zero supporting CSS — i.e. completely broken, not just mis-styled. **Expect the same failure mode on every upcoming geometry page** (mwale/ray, pembetatu/triangle, duara/circle construction steps, etc. — printed pages ~97–110ish per the chapter). When a page's diagram renders as a jumbled one-line string of `←→│├┤╱↔↕` characters, that is this bug, not a spacing nit — check `page-layout.js` for the raw markup and rebuild as an inline SVG (reuse the `.line-diagram` class and the tick/arrowhead/dot conventions established on pages 94/96) rather than trying to CSS-position individual Unicode glyphs.

- Printed page 97 / physical 103 (Mfano wa 2/3/4): Mfano wa 2's three tiny segment diagrams are genuine extracted images and already rendered correctly — not every diagram on these geometry pages is broken, some were already fine. Mfano wa 4's 4-pointed star image also looked "cut off" at first glance but that was only a viewport-scroll artifact during review, not a real bug — the PNG and its CSS were already correct; double-check by scrolling before concluding an image is clipped. Mfano wa 3's genuine bug: five collinear points (A–D, with a 5th unlabeled point) rendered as a dot-string (`●────●────●────●────●`) followed by a single floating text block `"A B C D"` with no per-dot alignment — same missing-diagram-CSS pattern as pages 94/96, fixed the same way with an SVG (`.book-page97-abcd`).

- Printed page 98 / physical 104 (Zoezi la 1, "Mwale"): confirmed the `.overline`/`.overarrow-right`/`.overarrow-both`/`.overarrow-left` notation on this page (the one the pattern was "established" on, per earlier notes) renders correctly and distinctly for all four variants. The Mwale ray diagram (AB/CD/EF) is a genuine correctly-cropped image and needed no change. The one real bug: `.book-page98-lengths` (item 1's seven segment lengths, (a)–(g)) had no layout CSS and ran together on one unbroken line (`...= sm 4(b) CD = sm 5...`) — added a two-column grid matching the PDF's (a,c,e,g)/(b,d,f) layout.

- Printed page 99 / physical 105 (Kazi ya kufanya 3, Mfano wa 1/2 multi-ray diagrams): same two-tone title + missing-`ol`-numbering bug as usual, fixed. **Correction to a mistake made while reviewing this page**: a screenshot briefly looked like the numbering was already fine (misread at a glance) — always confirm with `getComputedStyle(...).listStyleType` / DOM inspection rather than trusting a screenshot glance for this specific bug, since blue-on-white bold text and missing numerals are both easy to misjudge quickly. The two multi-ray diagrams (point A with 3–4 rays radiating out, tick marks on the through-line) are genuine correctly-cropped images and needed no change.

- Printed page 100 / physical 106 (Mfano wa 3 circle-of-rays diagram, Kazi ya kufanya 4, Zoezi la 2): the circle-with-6-rays image and its overarrow Jibu list were already correct. Same recurring two-tone-title + missing-`ol`-numbering bug on "Kazi ya kufanya 4:", fixed. Zoezi la 2 (items 1–6, plain text) needed no changes.

- Printed page 101 / physical 107 (Zoezi la 2 continued, Kazi ya kufanya 5): item 8's M/O/N line used `&nbsp;`-padded text labels that did not line up with the dots at all (labels were shifted noticeably left of their dots) — replaced with an SVG, same as page 97's A/B/C/D line. Usual two-tone title bug on "Kazi ya kufanya 5:". Its four scattered points (A–D, no connecting lines — a plain point-recognition exercise) had no positioning CSS, same as pages 93/95/101 pattern; added.

- Printed page 102 / physical 108 (Kazi ya kufanya 5 continued, Zoezi la 3): the continuation `<ol start="2">` had the usual missing-list-style bug (items 2–4 had no visible numbers), fixed. Zoezi la 3 item 2's four scattered points (E,F,G,H, a "connect to make triangles" exercise with no drawn lines) had no positioning CSS, same pattern as 93/95/101, added. Item 4's A–B–C–D line is a genuine correctly-cropped image and needed no change.

- Printed page 103 / physical 109 ("Majina ya maumbo bapa" — shape names): **most serious bug found in the audit so far — the six shape images were mislabeled**, not a styling issue. The `shapes` array in `page-layout.js` (`renderPage103`) paired each image file with the WRONG name (e.g. the circle image was labeled "Pembetatu", the triangle was labeled "Duara", the square was labeled "Mstatili", etc.) — a child using the book would learn the wrong vocabulary for every shape except Pentagoni. Each extracted PNG happened to have its own correct caption baked into the crop (extraction noise), which is how the mislabeling was caught: the small baked-in caption never matched the large HTML `<figcaption>` beneath it. Fixed by reordering the `shapes` array to the correct image↔name pairing, verified against the PDF. While in there, also cropped the redundant/wrong baked-in caption text (and one stray bled-in pink trapezoid fragment under the circle) out of all six PNGs, since the HTML caption already supplies the label and the old baked-in text was actively misleading before the reorder — `images/pg109_im002/003/004_seg001/004_seg002/005/006_transparent.png`. A faint "FOR ONLINE READING ONLY" watermark bleed remains on a few of them; that's a page-wide PDF watermark artifact seen on many other already-audited images throughout the book, not specific to this fix, and isn't worth chasing per-image.
  - **Takeaway for the rest of the audit**: on any page with multiple extracted images sharing one label array/list in `page-layout.js`, don't just check that the *images render* — check that each **caption actually matches its own image** against the PDF. A shuffled array is an easy, high-impact mistake to miss with a quick glance since everything "looks like a shape with a caption under it."

- Printed page 104 / physical 110 (Kazi ya kufanya 6, Mfano — road-sign shapes): **second image/caption-order bug in a row**, same root cause as page 103's `shapes` array — the `signs` array had the STOP-sign, pedestrian-diamond, and road-work-triangle images assigned to the wrong (a)/(b)/(c) slots, so the printed "Majibu" (oktagoni/mstatili/pembetatu/duara) no longer matched the picture above it (e.g. the octagonal STOP sign sat under label (c) next to the answer "pembetatu" = triangle). Fixed by reordering `signs` to match the PDF. Also the usual two-tone-title + missing-numbering bugs on "Kazi ya kufanya 6:", fixed. One extra wrinkle: this title is long enough to wrap onto two PDF-centered lines ("...TEHAMA" / "(Teknolojia ya Habari na Mawasiliano)"), but a *different*, deliberate book-wide rule (`#content#content.book-from-print-page84 :is([class^="book-page"][class*="-work"],.book-work-dialog) > :is(h1,.book-work-heading):first-child { text-align:left !important; ... }`, fonts.css ~line 1047, applies to every "Kazi ya kufanya" heading from page 84 onward and fixes a real width/margin bug) forces `text-align:left` with high specificity (2 ids + 5 class-equivalents, beats a normal `#content#content.book-page-104 ...` override). To win, the override selector had to match that specificity shape exactly: `#content#content.book-page-104 .book-page104-work.book-work-dialog > h1.book-work-heading:first-child`. Remember this trick (repeat the real classes an element already carries, including `:first-child`, rather than just adding `#content#content` prefixes) whenever a two-id override still loses.
  - **Confirms the page-103 lesson generalizes**: check every multi-image Mfano/Kazi figure's answer key against its picture, not just against the PDF's own picture-to-picture layout — shuffled arrays are apparently a recurring conversion defect on this "maumbo" chapter, not a one-off.

- Printed page 105 / physical 111 (Zoezi la 4, ten labeled shapes a–j, plus a house diagram): the a–j shape order itself was already correct this time (not every multi-image page has the shuffle bug — still worth checking each one). Found a different, new bug class: `.book-page105-shapes img` declared `height:108px` but a **global, higher-specificity rule** `#content#content.book-from-page66 img { height: auto; }` (a broad rule that resets images to their natural aspect ratio unless a page overrides it more specifically) was winning, so several of the shape images rendered at ~190px tall instead of 108px and visibly overlapped upward into the question paragraph above the grid (looked like ghost/duplicate text bleeding through — actually the images' own baked-in watermark noise showing through where they overlapped the text line). Fixed by adding `#content#content.book-page-105` scoping + `!important` to just the `height` declaration, following the same specificity-fight pattern as the recurring title-color bug, but this time on an `img`/layout rule instead of a heading. Found this one the hard way — via `getBoundingClientRect()` measurements and enumerating `document.styleSheets` for every rule matching the element and setting `height`, not from a known pattern. **Worth remembering as a debugging technique**: when a fix "should" apply per the CSS source but doesn't, walk `document.styleSheets` for all matching rules on the specific property rather than guessing — the winning rule is often a broad global one whose selector doesn't obviously look related to the symptom (`.book-from-pageNN img` here, not anything shape/page-105-specific).
  - Also noticed while debugging: the live page loads **two `<link>` tags for `fonts.css`**, one with the current cache-busted `?v=` and one stuck at the old `?v=...-54`. **Corrected on page 108 below** — the second link is self-injected by `assets/book-fidelity.js`, not `offline-preloader.js` as first suspected here; see the page-108 entry for the real mechanism and the fix.

- Printed page 106 / physical 112 (Kazi ya kufanya 7, Jikumbushe, Msamiati): another "zero CSS at all" bug like page 93's chapter banner, but bigger in scope — `.book-page106-reminder` (Jikumbushe) and `.book-page106-vocab` (Msamiati) had **no styling whatsoever** (rendered as plain unstyled paragraphs with no purple/orange boxes and no numbering), and the "Maelezo" `<h2>` subheading (present via a JS-added `.book-work-subheading` class that itself also has zero CSS anywhere in the book) rendered plain black instead of blue. Fixed by mirroring the already-correct page-90 Jikumbushe/Msamiati pattern (same HTML structure: `<h1>` title + `<ol>`/`<dl>`) and adding a blue color rule for `.book-page106-work h2`.
  - **`.book-work-subheading` is unstyled everywhere**, not just page 106 — if a future page's "Maelezo"/similar subheading looks black instead of the PDF's blue, this is why; a one-line global rule (`.book-work-subheading { color:#00b0f0; font-weight:700; }`) would fix it everywhere at once, but wasn't added here to avoid an unreviewed blanket change this late in a page-by-page pass — consider adding it centrally if the pattern keeps recurring.
  - Same likely applies to pages 126, 150, 173 which share `.book-page126-work`/`.book-page150-work`/`.book-page173-work` in the shared selector group with page 106 and, per their `page-layout.js` markup, also have their own `-reminder`/`-vocab` boxes — check each for the same "zero CSS" gap when reached.

- Printed page 107 / physical 113 ("Zoezi la marudio" — review exercise): `.book-page107-review` had no container styling at all (no teal gradient header bar, no pale-blue body background — plain white/transparent instead), fixed by mirroring the already-correct page-90 Zoezi la Marudio pattern. All three geometry diagrams (rays from C, triangle line-count, F/G/A/B/D/E/H crossing lines) are genuine correctly-cropped images and needed no rebuild — this page was a pure missing-CSS issue, not a missing-diagram one.

- Printed page 108 / physical 114 (Zoezi la marudio continued — quadrilateral identification, triangle count): **found and fixed the root cause of the "duplicate stale stylesheet" issue flagged (but not fixed) on page 105.** `assets/book-fidelity.js` itself hardcodes a second `<link>` injection at the top of the file (`auditedStyles.href = './assets/fonts.css?v=20260822-pagewise-NN'`) — this is a **deliberate, long-standing convention from previous agent sessions** (visible in `git log -p` going back through many "-fidelity-pass-NN" commits) where the version number inside `book-fidelity.js` was bumped in lockstep with the HTML files' own `<link>`/`<script>` query strings every single time. This session had been bumping only the `pgNNN_sec001.html` files' query strings and missed updating this internal hardcoded copy, so it stayed frozen at the value from the start of this session (`pagewise-54`) for the entire session so far. Because `book-fidelity.js` runs late (bottom of `<body>`) and appends its stylesheet last, it wins any *cascade tie* (equal-specificity rule present in both the old and new stylesheet) — in practice this only bit one fix so far (page 108's figcaption, where removing a `display:none` declaration relied on the new file having no competing rule, but the frozen old file still had the original `display:none`) because nearly every other fix this session used `!important` + boosted specificity, which wins regardless of load order. **Fixed by updating the hardcoded version in `book-fidelity.js` to match current, and the version-bump routine now includes this file every time (see updated steps below).** This also explains why a few earlier "why doesn't this apply" moments took extra debugging — always suspect this file first from now on when a *non-`!important`* CSS change doesn't show up.
  - **Updated cache-bust routine going forward**: `grep -rl "v=20260822-pagewise-N" --include="*.html" . | xargs sed -i '' 's/.../.../g'` **AND** `sed -i '' 's/.../.../g' assets/book-fidelity.js` — both, every time, or this bug recurs.
  - Also fixed on this page: the four quadrilateral images in item 9 ((a) trapezoid, (b) wavy-edge shape, (c) slanted rectangle, (d) rectangle) had their own baked-in "(a)"/"(b)"/"(c)"/"(d)" caption text and a solid pale-blue background baked into the PNGs — and image (a)'s crop was so wide it captured *both* "(a)" and "(b)"'s labels in one file. The HTML already had a `<figcaption>` for each, correctly labelled, but it was set to `display:none` (presumably as a workaround for the baked-in-label duplication). Fixed by cropping all four PNGs down to just the shape outline on a transparent background (`images/pg114_im002/003/004/005_transparent.png` — im003 was already clean) and re-enabling the `<figcaption>`s instead of relying on baked-in text, consistent with "render text in HTML, images only for genuine illustrations."

- Printed page 109 / physical 115 (Zoezi la marudio continued — house diagram, R/S/T/U/V/W ray diagram): both diagrams (including the red rays) are genuine correctly-cropped/colored images; page needed no changes at all.

- Printed page 110 / physical 116 (start of **Sura ya Tano**, "Sehemu" = fractions): the page-93 prediction was confirmed exactly — `.book-page110-chapter`/`.book-page110-intro` had zero CSS, fixed the same way. Also: the "Hatua" subheading rendered black instead of the PDF's blue (fixed with a page-scoped `h2` color rule — did not touch the still-unstyled-everywhere `.book-work-subheading` class), and the 5-step `<ol>` had the usual missing-`list-style` bug. "Kazi ya kufanya 1:" was already correctly two-toned without any fix needed, and the fraction notation (`½, ⅓, ⅖` via `.book-fraction`) rendered correctly out of the box.
  - Per the same page-93 prediction, **printed pages 137 and 159 (physical 131, 153) likely have the identical `.book-page131-chapter`/`.book-page131-intro` and `.book-page153-chapter`/`.book-page153-intro` gap** — check first when reached.

- Printed page 111 / physical 117 (Mfano wa 1 six shaded-fraction shapes, Mfano wa 2 mango word problem): all six shape images correctly match their Jibu fraction answers this time (½, ⅓, ⅔, ⅛, ⁴⁄₄, ⅜) — no shuffle bug here. Page needed no changes at all.

- Printed page 112 / physical 118 (Zoezi la 1, orange-sharing illustration): matched the PDF exactly already, including the large two-children illustration; no changes needed.

- Printed page 113 / physical 119 (item 5's shade-the-fraction table, item 6(a)): **another image/answer mismatch, worse than pages 103/104 — three of five table rows had the wrong picture next to the fraction**, and one image (the 12-cell strip needed for row (e), fraction 5/12) was **never extracted from the PDF at all**; the converter had silently reused the wrong existing image (the 7-circle picture that actually belongs to question 6(a)) to fill that gap, cascading a second wrong swap into row (a)/(d) too. Concretely: row (a) showed 3 triangles (belongs to row d) instead of 4 rounded rectangles; row (d) showed the 7-circle picture (belongs to Q6a) instead of 3 triangles; row (e) showed the 4-rectangle picture (belongs to row a) instead of a 12-cell strip. Fixed the image order for rows (a)–(d) (`images/pg119_im003/004/005/006_transparent.png`), and since the true 12-cell-strip image doesn't exist in the extracted asset set, built row (e) directly in HTML as 12 plain bordered boxes (`.book-page113-strip`) rather than re-cropping the PDF — simple enough geometry that a raster image isn't needed. Also swapped Q6(a)'s crude Unicode `● ○ ● ○ ● ● ●` text (no borders, wrong fill rendering) for the real extracted circle image (`pg119_im001_transparent.png`), which was sitting unused after the reorder and matches the PDF's bordered/filled circles exactly.
  - **This is now the third image-mislabeling bug in the fractions/shapes material (after pages 103 and 104)** — treat every multi-image row/table on these pages as suspect by default, and specifically check whether an image referenced by the code is actually *missing* from `images/` (a silent fallback to the wrong file, as happened here, can be worse than a merely-shuffled array since the count still looks right).

- Printed page 114 / physical 120 (Q6 b/c/d shaded-strip and pie images, items 7–12 word problems): all three images correctly shaded/ordered matching the PDF, text items match word-for-word. No changes needed.

- Printed page 115 / physical 121 (Kujumlisha sehemu zenye asili moja, Mfano wa 1 fraction-circle diagram): matches the PDF exactly, including the purple/lavender fraction-addition circle diagram (¾ + ¼ = ⁴⁄₄) with its curved arrow and the worked "Hivyo/Kwa hiyo" equation. No changes needed.

- Printed page 116 / physical 122 (Mfano wa 2, Zoezi la 2 items a–j fraction sums): Mfano wa 2's worked example (¹³⁄₂₇+⁷⁄₂₇=²⁰⁄₂₇) was already correct. **Found a genuine data-entry error, not a styling/image bug**: three of the ten exercise fractions in the `sums` array (page-layout.js) had the wrong numbers typed in — (b) was `⅗+⅝` instead of `³⁄₉+⁵⁄₉`, (d) was `⅗+⅖` instead of `³⁄₆+²⁄₆`, (j) was `⅓+⅔` instead of `²⁄₆+⁴⁄₆`. These are plain HTML fraction text (not images), so this wasn't a mislabeled-array-order issue like pages 103/104/113 — it was literally the wrong digits typed into the source. Fixed by correcting the three string values directly; the other seven were already correct.
  - **Broadens the "don't trust it just because it renders" lesson from pages 103/104/113**: even plain-text math content needs the actual numbers checked against the PDF, not just presence/formatting — a fraction can be perfectly well-formatted and still be mathematically wrong.

- Printed page 117 / physical 123 (Zoezi la 2 continued, items k–t and 2a–2j): same pattern as page 116 — two more wrong-digit fraction typos found by checking every value against the PDF: (n) was `⅗+⅗` instead of `³⁄₇+³⁄₇`, (q) was `⅖+⁴⁄₇` instead of `²⁄₇+⁴⁄₇` (both had a `5` where the PDF has a `7`). Fixed in the `a` array in `page-layout.js`. All ten of item 2's fractions were already correct.

- Printed page 118 / physical 124 ("Mafumbo yenye dhana ya kujumlisha sehemu", Mfano wa 1/2 word problems): every fraction in both worked examples (3/9+2/9=5/9, 3/8+4/8=7/8) checked correct against the PDF. No changes needed.

- Printed page 119 / physical 125 (Zoezi la 3, items 1–7 word problems): every fraction (1/6+2/6, 4/8+3/8, 2/5+3/5, 1/7+3/7, 2/4+2/4, 5/10) checked correct against the PDF. No changes needed.
  - **Concurrent-session note**: partway through this page, a *different* agent session was found to have been actively editing this same repository in parallel — the shared `?v=...` cache-bust marker on `fonts.css`/`page-layout.js`/`book-fidelity.js` had jumped from this session's `pagewise-82` baseline to `page147-calendar-align-164` (a different naming convention, `pageNNN-description-counter`, suggesting a series of targeted fixes reaching at least printed pages into the 140s). That other session did **not** touch this handoff doc, so its own progress isn't logged here — if you pick this file up and the "Resume at" pointer looks stale compared to what `git status`/`git diff` shows, **trust the live file state over this document** and spot-check a few pages ahead of the stated resume point before assuming they're unaudited. Do not fight or revert the other session's edits; per this repo's own guidance, treat concurrent changes as deliberate progress. When bumping the cache-bust version from here on, read the *current* value out of any `pgNNN_sec001.html` file first (e.g. `grep -o 'fonts.css?v=[^"]*' pg100_sec001.html`) rather than assuming this log's last-recorded counter, and bump both the HTML files and `assets/book-fidelity.js`'s internal copy together as usual.

- Printed page 120 / physical 126 (items 7–10 continued, "Kutoa sehemu zenye asili moja" intro, Mfano wa 1): items 7–10's fractions all correct. Found one more wrong-digit typo in Mfano wa 1's opening equation — it read `⅓ − ⅓ =` but the PDF says `³⁄₃ − ⅓ =` (numerator 3, not 1). Fixed in `page-layout.js`.
  - **Revised approach to the concurrent-session version churn**: rather than fight the other session's live version bumps (it changed *again*, to `page148-calendar-html-165`, within the same minute), stopped touching the shared `?v=...` strings myself entirely for verification purposes. The `?nocache=<n>` query appended directly to the page URL when navigating is sufficient on its own — it forces a fresh document fetch regardless of what version string the page's own `<link>`/`<script>` tags currently hold, since `python -m http.server` always serves current disk content regardless of query string. Confirmed this works standalone on this page. Recommend continuing this way (skip the `assets/book-fidelity.js` version-bump step from here on) unless a future page's fix genuinely isn't showing up even after a `?nocache=` reload, in which case fall back to checking `document.styleSheets` per the page-105/108 debugging notes above.

- Printed page 121 / physical 127 (Mfano wa 1 continued — Hatua 1–5, pink circle subtraction diagram, worked equation): matches the PDF exactly, all fractions (3/3, 1/3, 2/3) correct throughout. No changes needed.

- Printed page 122 / physical 128 (Mfano wa 2 pink-circle subtraction diagram, Mfano wa 3 intro): all fractions (5/6, 1/6, 4/6, 11/12, 7/12) correct against the PDF. No changes needed.

- Printed page 123 / physical 129 (Mfano wa 3 conclusion, Zoezi la 4 items 1–25): Mfano wa 3 correct. Two more wrong-digit fraction typos in the 25-item exercise, same pattern as pages 116/117/120: item 7 was `⅗−⅙` instead of `³⁄₆−⅙`, item 13 was `⅓−²⁄₆` instead of `²⁄₆−²⁄₆`. Fixed in the `sums` array. The other 23 items were already correct.

- Printed page 124 / physical 130 ("Mafumbo yenye dhana ya kutoa sehemu", Mfano wa 1/2 word problems): all fractions (8/8-5/8=3/8, 12/12, 4/12) correct against the PDF. No changes needed.

- Printed page 125 / physical 131 (Mfano wa 2 conclusion, Zoezi la 5 items 1–7): all fractions (12/12-4/12=8/12, 5/9, 4/9, 7/12, 2/12, 3/10, 4/10) correct against the PDF. No changes needed.

**Resume at printed page 126 / physical page 132 / `pg132_sec001.html`.**

## Known pitfalls from earlier attempts

- Do not treat the Markdown checklist as more authoritative than the PDF. Some notes contain page-number ambiguity or assumptions that the PDF disproves.
- A semantic `<ol>` may still show no numbers because global CSS suppresses markers. Verify computed `list-style-type` and the rendered page. This turned out to be a *recurring*, page-by-page bug specifically on `.book-pageNN-work ol` / `.book-pageNN-reminder ol` rules that forgot the `list-style: decimal outside !important;` declaration present on sibling pages — check every new "Kazi ya kufanya" / Jikumbushe box for this even if the checklist doesn't mention it.
- The two-tone "Kazi ya kufanya N: Title" heading (bold blue label + regular black title) recurs on many pages (78, 79, 81, 84, 86, 88, 89, and likely more ahead). Its `.book-pageNN-work h1 { font-weight: 400 }` and `.book-pageNN-work h1 b { color: rgb(0,176,240) }` rules are silently defeated by the book-wide `#content h1{font-weight:700!important}` and `#content b{color:inherit}` rules (`assets/fonts.css` ~line 16–17) because those are `!important`/ID-scoped. Fix by boosting specificity with an `#content#content.book-page-NN` (or `:is(.book-page-NN, .book-page-MM)`, no stray space before the next compound selector) prefix and `!important` on the two declarations — do not edit the global rule itself, many other pages depend on it.
- When writing a `:is(...)  :is(...)` override selector, do not put a space between an `#content#content:is(.book-page-A, .book-page-B)` compound and the next `:is(...)` group unless you actually mean "descendant of a *different* element" — `#content` itself usually carries the `.book-page-NN` class directly, so a space turns it into a non-matching descendant combinator. Verify with `element.matches(selector)` in the browser console before trusting a CSS fix.
- Global content-width overrides can shorten wrapping and create large bottom gaps. Match the PDF page specifically.
- Avoid fixing spacing by merely changing page height or pushing the page number; correct the actual undersized/over-wide content causing the gap. Confirmed again on page 82: inflating `.book-page82-exercise`'s `min-height` (or restoring its dead `padding-top:59px`) only pushes the header down or creates a blank cream rectangle — it does not reproduce the PDF, which simply has shorter content on that page under the book's uniform-body-font-size policy.
- Do not wrap a legitimate table inside a newly invented “answer box.”
- Do not add generic borders around fraction results.
- Do not leave interactive exercise inputs hidden in the source if the rendered replacement can expose them later.
- Do not claim page-by-page completion from an automated overflow scan alone.
- Browser CSS is cached by the running `python -m http.server`/Chrome tab across navigations even when the file on disk changed — bump the shared `?v=...` query on the `fonts.css`/`page-layout.js`/`book-fidelity.js` `<link>`/`<script>` tags (all `pgNNN_sec001.html` files share one version string) before trusting a "no change" observation, or fetch the CSS fresh with a random query param to confirm the edit is actually on disk first.

## Completion criteria

The work is complete only when:

- every printed page through page 177 has been visually compared with its PDF counterpart;
- every checklist item has been verified against the PDF and resolved where applicable;
- no unintended nested Mfano boxes remain;
- no answer inputs or submit controls remain;
- no missing arithmetic symbols, fractions, labels or diagrams remain;
- no corrupted black/white or noisy figures remain;
- page numbers, gradients, content widths and page heights are consistent;
- the whole book passes browser overflow/regression checks;
- the local preview is left open for user review.

