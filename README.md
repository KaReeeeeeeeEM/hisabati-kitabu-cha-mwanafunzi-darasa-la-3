# Hisabati: Kitabu cha Mwanafunzi — Darasa la 3

This repository contains the completed accessible digital textbook produced with ADT Studio.

## Shared book-layout rules

- The canonical page-content column is `760px`, matching page 3. Every page
  from the first to the last uses this centered outer content width; narrower
  components may sit inside it only when the PDF shows them narrower.
- Every primary content block is horizontally centered within that column.
  Left and right page clearance must be equal; page-specific CSS may adjust
  vertical spacing but must not introduce a one-sided horizontal margin.
- Mfano frames, titles, prompts, answers and explanatory text are HTML. Actual
  examples, figures and labelled diagrams such as `(a)`–`(d)` remain cropped
  image assets with transparent backgrounds. Never rasterize the entire Mfano.
- A Mfano title has exactly one visible source. Do not combine a real HTML
  label with a CSS `::before`/`::after` fallback containing the same title.
- Every **Kazi ya kufanya** is HTML and uses the shared pale-blue dialogue:
  `#eaf8fd` body, primary-blue heading and divider, asymmetric corners and a
  restrained lower/right shadow. Never keep a full Kazi panel as an image.
- A **Zoezi** has one continuous exercise background. Individual questions
  are plain aligned content without rounded cards, borders, white panels or
  separate shadows unless the PDF explicitly contains a real table/figure.
- Every **Jikumbushe** summary is HTML. It uses the shared pale-purple surface,
  purple heading/border, asymmetric corners, lower/right shadow and aligned
  numbered rows. Never retain a complete Jikumbushe block as a raster image.
- Every **Mfano** uses the approved pages 1–20 dialogue: white card, `#9b8705`
  1.5px border, asymmetric `0 14px 0 14px` corners, no outer shadow, and the
  gold label positioned `22px` above and `50px` from the left. Later cards are
  constrained to the same `704px` dialogue width as Zoezi, with at least `12px` clearance on
  either side; their borders must never exceed the page content column.
- Vertical arithmetic in both **Mfano** and **Zoezi** uses one shared stack.
  Each rule begins exactly beneath the `+` or `−` sign, never extends to its
  left, remains within its panel, and the two empty answer rules retain a
  visible `22px` gap.
- Operands and results use tabular figures on a shared right edge, so every
  digit aligns by place value from the right.
- Arithmetic rules are not stretched to the width of the surrounding card.
  Standard example stacks are `145px`; exercise stacks use the approved
  short/long widths defined in `assets/fonts.css`.
- Do not introduce nested cards, rounded question boxes, answer inputs, or
  textareas unless they are visibly present in the source PDF.
- Keep every primary content section horizontally centred. Later legacy pages
  that exceed the printable height are proportionally fitted from the top
  centre; do not use CSS `zoom`, which the reader ignores.
- Audit transparent figure variants before using them. If a generated variant
  renders predominantly black, retain the original extracted figure until a
  clean background-free crop is available.
