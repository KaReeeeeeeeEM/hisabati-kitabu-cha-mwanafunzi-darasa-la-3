(() => {
  const section = document.querySelector('#content > section');
  const page = Number(document.querySelector('meta[name="page-section-id"]')?.content || 0);
  if (!section || !page) return;

  if (page >= 20) document.querySelector('#content').classList.add('book-after-page13');
  if (page >= 21) document.querySelector('#content').classList.add('book-after-page14');
  if (page >= 22) document.querySelector('#content').classList.add('book-after-page15');
  if (page >= 25) document.querySelector('#content').classList.add('book-after-page18');
  document.querySelector('#content').classList.add(`book-source-page-${page}`);

  const fitLegacyPage = () => {
    /* Page content keeps the same print width as page iv. Density is corrected
       inside individual components; never shrink the complete page section. */
    section.classList.remove('book-height-fitted');
    section.style.removeProperty('zoom');
    section.style.removeProperty('transform');
    section.style.removeProperty('transform-origin');
    section.style.removeProperty('margin-bottom');
  };
  window.setTimeout(fitLegacyPage, 80);
  window.setTimeout(fitLegacyPage, 700);
  window.setTimeout(fitLegacyPage, 1600);

  if (page > 1 && !document.querySelector('#content > .source-page-number')) {
    const roman = ['','i','ii','iii','iv','v','vi'];
    const marker = document.createElement('div');
    marker.className = 'source-page-number';
    marker.setAttribute('aria-hidden', 'true');
    marker.textContent = page <= 6 ? roman[page] : String(page - 6);
    document.querySelector('#content').append(marker);
  }

  const cleanFlattenedAccessibilityCopy = () => {
    document.querySelectorAll('#content [data-id]').forEach((element) => {
      let text = element.textContent.trim();
      const exampleOrdinals = {
        kwanza: '1', pili: '2', tatu: '3', nne: '4', tano: '5', sita: '6',
        saba: '7', nane: '8', tisa: '9', kumi: '10',
      };
      const wordedExample = text.match(/^Mfano wa (\S+)$/i);
      if (wordedExample && exampleOrdinals[wordedExample[1].toLowerCase()]) {
        element.textContent = `Mfano wa ${exampleOrdinals[wordedExample[1].toLowerCase()]}`;
        text = element.textContent.trim();
      }
      if (/^Mfano wa\b/i.test(text)) {
        element.classList.add('book-example-label');
        element.closest('[class*="border"]')?.classList.add('book-example-card');
      }
      if (/^Zoezi\b/i.test(text)) {
        element.classList.add('book-exercise-heading');
        const headingRow = element.parentElement === section ? element : element.parentElement;
        headingRow?.classList.add('book-exercise-heading-row');
        element.closest('[class*="border"]')?.classList.add('book-exercise-panel');
        let panel = element;
        while (panel.parentElement && panel.parentElement !== section) panel = panel.parentElement;
        if (panel !== element) panel.classList.add('book-exercise-panel');
      }
      if (/^Jibu$/i.test(text) && element.closest('.book-example-card')) {
        element.classList.add('book-example-answer-heading');
      }
      const part = text.match(/^(\([a-z]\))\s*Sehemu\s+[a-z]:$/i);
      if (part) element.textContent = part[1];
    });

    /* A Zoezi may be emitted as a heading, a nested card, or a whole section.
       Always mark its complete top-level exercise wrapper so every page uses
       one shared cream exercise surface. */
    document.querySelectorAll('#content h1, #content h2, #content h3, #content [data-id]').forEach((heading) => {
      if (!/^Zoezi\b/i.test(heading.textContent.trim())) return;
      let exercise = heading;
      while (exercise.parentElement && exercise.parentElement !== section) exercise = exercise.parentElement;
      (exercise === heading ? section : exercise).classList.add('book-exercise-panel');
    });

    if (page === 20) {
      const underlinedOptions = {
        pg020_n0017: '(a) 4<u>7</u>65',
        pg020_n0019: '(b) <u>3</u>926',
        pg020_n0021: '(c) 186<u>7</u>',
        pg020_n0023: '(d) 45<u>1</u>9',
      };
      Object.entries(underlinedOptions).forEach(([id, html]) => {
        const option = document.querySelector(`[data-id="${id}"]`);
        if (option && !option.querySelector('u')) option.innerHTML = html;
      });
    }

    /* Second pass makes the answer-label rule independent of converter DOM
       order and card nesting on later pages. */
    document.querySelectorAll('#content [data-id]').forEach((element) => {
      if (!/^Jibu$/i.test(element.textContent.trim())) return;
      let container = element.parentElement;
      while (container && container.id !== 'content') {
        if (container.querySelector('.book-example-label')) {
          container.classList.add('book-example-card');
          element.classList.add('book-example-answer-heading');
          break;
        }
        container = container.parentElement;
      }
    });
    if (page === 9) {
      const heading = document.querySelector('[data-id="pg009_n0035"]');
      if (heading && heading.textContent.trim() !== 'Zoezi la I') {
        heading.textContent = 'Zoezi la I';
      }
      /* The converter also emitted a single-line screen-reader transcription
         of the full-page example artwork. It is duplicated by the visible
         page and expands the layout by several thousand pixels, so discard
         that non-visual duplicate after its metadata has been normalised. */
      document.querySelectorAll('#content .sr-only').forEach((copy) => copy.remove());
    }
  };

  /* Later converter pages used several unrelated wrappers for examples.  Work
     backwards safely by identifying the actual "Mfano" leaf label, then give
     its complete panel the same card and tab used by the early book pages. */
  const normaliseLateExampleCards = () => {
    if (page < 125) return;

    const labels = [...document.querySelectorAll('#content *')].filter((element) =>
      element.childElementCount === 0 && /^Mfano(?:\s+wa\s+.+)?$/i.test(element.textContent.trim())
    );

    labels.forEach((label) => {
      let card = label.closest('.book-example-card');
      if (!card) {
        card = label.closest('[class*="border"]');
      }
      if (!card || card === section) return;

      card.classList.add('book-example-card', 'book-late-example-card');

      const hiddenBody = label.closest('.hidden');
      const hiddenCopy = hiddenBody && hiddenBody.querySelectorAll('[data-id], p, h2, ol, table').length > 2;
      const screenReaderCopy = label.classList.contains('sr-only') && card.querySelectorAll('.sr-only').length > 2;
      const compositeImage = [...card.querySelectorAll('img')].find((image) =>
        /^Mfano\b/i.test(image.alt.trim()) || /_seg\d+_v\d+\./i.test(image.src)
      );

      if (hiddenCopy) {
        hiddenBody.classList.remove('hidden');
        hiddenBody.removeAttribute('aria-hidden');
        compositeImage?.classList.add('book-hidden-example-raster');
      } else if (screenReaderCopy) {
        card.querySelectorAll('.sr-only').forEach((element) => element.classList.remove('sr-only'));
        compositeImage?.classList.add('book-hidden-example-raster');
      }

      const hasHtmlBody = hiddenCopy || screenReaderCopy || !label.classList.contains('hidden');
      if (!hasHtmlBody) {
        card.classList.add('book-late-example-raster');
        return;
      }

      label.classList.remove('hidden', 'sr-only');
      label.removeAttribute('aria-hidden');
      label.classList.add('book-example-label');
      if (label.parentElement !== card) card.prepend(label);
    });
  };

  /* Preserve every established hierarchy while raising the whole book by the
     same two-pixel increment requested during the print comparison. */
  const increaseBookTypeScale = () => {
    /* Pages 22–184 are rebuilt by page-layout.js and already use the measured
       shared type scale in fonts.css. Inline boosting here made those pages
       grow again after render, producing inconsistent 20–30px body copy and
       overflow. Keep the legacy adjustment only for the untouched opening. */
    if (page >= 22) return;
    const coverType = {
      pg001_n0002: '90px',
      pg001_n0003: '36px',
      pg001_n0004: '30px',
      pg001_n0017: '32px',
    };
    const pageOneType = {
      pg007_n0002: '31px',
      pg007_n0003: '36px',
      pg007_n0005: '24px',
      pg007_n0012: '24px',
    };
    document.querySelectorAll('#content *').forEach((element) => {
      if (element.dataset.bookTypeBoost === '2' || element.matches('.sr-only, script, style, input, textarea, select, option')) return;
      if (page === 1 && coverType[element.dataset.id]) {
        element.style.setProperty('font-size', coverType[element.dataset.id], 'important');
        element.dataset.bookTypeBoost = '2';
        return;
      }
      if (page === 7 && pageOneType[element.dataset.id]) {
        element.style.setProperty('font-size', pageOneType[element.dataset.id], 'important');
        element.dataset.bookTypeBoost = '2';
        return;
      }
      if (page === 2 && element.closest('[data-section-type="inside_cover"]') && !element.matches('.source-page-number')) {
        const ownsText = [...element.childNodes].some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        if (ownsText) {
          element.style.setProperty('font-size', '24px', 'important');
          element.dataset.bookTypeBoost = '2';
        }
        return;
      }
      if (page === 4 && element.closest('[data-section-type="credits"]') && !element.matches('.source-page-number')) {
        const ownsText = [...element.childNodes].some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        if (ownsText) {
          element.style.setProperty('font-size', element.closest('h1') ? '44px' : '24px', 'important');
          element.dataset.bookTypeBoost = '2';
        }
        return;
      }
      if (page === 5 && element.closest('[data-section-type="credits"]') && !element.matches('.source-page-number')) {
        const ownsText = [...element.childNodes].some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        if (ownsText) {
          element.style.setProperty('font-size', '24px', 'important');
          element.dataset.bookTypeBoost = '2';
        }
        return;
      }
      if (page === 6 && element.closest('[data-section-type="foreword"]') && !element.matches('.source-page-number')) {
        const ownsText = [...element.childNodes].some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        if (ownsText) {
          element.style.setProperty('font-size', element.closest('h1') ? '44px' : '24px', 'important');
          element.dataset.bookTypeBoost = '2';
        }
        return;
      }
      if (element.matches(':is(.book-page48-chapter,.book-page77-chapter,.book-page93-chapter,.book-page110-chapter) > h2')) {
        element.style.setProperty('font-size', '27px', 'important');
        element.dataset.bookTypeBoost = '2';
        return;
      }
      if (element.matches(':is(.book-page48-chapter,.book-page77-chapter,.book-page93-chapter,.book-page110-chapter) > h1')) {
        element.style.setProperty('font-size', '31px', 'important');
        element.dataset.bookTypeBoost = '2';
        return;
      }
      const ownsText = [...element.childNodes].some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (!ownsText) return;
      const size = Number.parseFloat(getComputedStyle(element).fontSize);
      if (!Number.isFinite(size) || size < 8) return;
      element.style.setProperty('font-size', `${size + 2}px`, 'important');
      element.dataset.bookTypeBoost = '2';
    });
  };

  /* The printed book is static. Converted activity controls must never turn
     its questions into an interactive form, and the SCORM bundle must not
     expose a submission action after those fields have been removed. */
  const removeAnswerInteractions = () => {
    window.correctAnswers = {};
    document.querySelectorAll('#content input, #content textarea, #content select').forEach((field) => {
      const label = field.closest('label');
      const wrapper = label || field.parentElement;
      const q10Continuation = page === 14 && field.closest('[data-id="pg014_n0005"],[data-id="pg014_n0008"],[data-id="pg014_n0011"],[data-id="pg014_n0014"]');
      if (q10Continuation) {
        field.replaceWith(document.createTextNode(' _____'));
        return;
      }
      const type = (field.getAttribute('type') || '').toLowerCase();
      const isPrintedRule = field.tagName === 'TEXTAREA' || field.tagName === 'SELECT' || !['radio', 'checkbox', 'hidden', 'button', 'submit', 'reset'].includes(type);
      if (isPrintedRule) {
        const box = field.getBoundingClientRect();
        const rule = document.createElement('span');
        rule.className = field.tagName === 'TEXTAREA' ? 'book-static-answer-area' : 'book-static-answer-rule';
        rule.setAttribute('aria-hidden', 'true');
        const width = Math.max(42, Math.min(180, Math.round(box.width || 80)));
        rule.style.setProperty('--book-answer-width', `${width}px`);
        if (field.tagName === 'TEXTAREA') {
          const height = Math.max(44, Math.min(150, Math.round(box.height || 70)));
          rule.style.setProperty('--book-answer-height', `${height}px`);
        }
        field.replaceWith(rule);
      } else {
        field.remove();
      }
      if (label && !label.textContent.trim() && !label.querySelector('img, svg, math, .book-static-answer-rule, .book-static-answer-area')) label.remove();
      if (wrapper?.matches('div, label')) {
        const visibleText = [...wrapper.childNodes].some((node) => {
          if (node.nodeType === Node.TEXT_NODE) return Boolean(node.textContent.trim());
          return node.nodeType === Node.ELEMENT_NODE && !node.matches('.sr-only') && Boolean(node.textContent.trim());
        });
        if (!visibleText && !wrapper.querySelector('img, svg, math, canvas, table')) wrapper.remove();
      }
    });
    document.querySelectorAll('button').forEach((button) => {
      const text = button.textContent.trim();
      const label = button.getAttribute('aria-label') || '';
      if (/\b(Tuma|Submit|Check|Angalia jibu)\b/i.test(text) || /tuma|submit|check answer/i.test(label)) {
        button.remove();
      }
    });
  };

  /* Body copy in the reference pages uses one consistent optical size. Some
     late converter templates dropped prose, questions, table copy, and list
     items to 18–21px; raise only undersized body text to the established 24px
     size without flattening the separate title and component-label scale. */
  const normaliseBodyTypeScale = () => {
    const excluded = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      '.source-page-number', '.book-example-label', '.book-exercise-heading',
      '.book-work-heading', '.book-recall-heading', '.sr-only',
      'script', 'style', 'input', 'textarea', 'select', 'option', 'button',
    ].join(',');
    document.querySelectorAll('#content *').forEach((element) => {
      if (element.matches(excluded) || element.closest('h1,h2,h3,h4,h5,h6,.source-page-number,.book-example-label,.book-exercise-heading,.book-work-heading,.book-recall-heading,.sr-only')) return;
      if (page === 35 && element.closest('.book-page29-example')) return;
      if (page === 36 && element.closest('.book-page30-sheet')) return;
      if (page === 37 && element.closest('.book-page31-sheet')) return;
      if (page === 38 && element.closest('[data-section-id="pg038_sec001"]')) return;
      if (page === 41 && element.closest('.book-page35-example')) return;
      if (page === 57 && element.closest('.book-page51-exercise,.book-page51-heading,.book-page51-example')) return;
      if (page === 58 && element.closest('.book-page52-example')) return;
      if (page === 59 && element.closest('.book-page53-example,.book-page53-exercise')) return;
      if (page === 60 && element.closest('.book-page54-example')) return;
      if (page === 61 && element.closest('.book-page55-example')) return;
      if (page === 62 && element.closest('.book-page56-example,.book-page56-exercise')) return;
      if (page === 63 && element.closest('.book-page57-heading,.book-page57-example')) return;
      if (page === 64 && element.closest('.book-page58-example')) return;
      if (page === 67 && element.closest('.book-page61-dule,.book-page61-example')) return;
      if (page === 68 && element.closest('.book-page62-solution,.book-page62-exercise')) return;
      if (page === 69 && element.closest('.book-page63-sheet,.book-page63-intro')) return;
      if (page === 70 && element.closest('.book-page64-example')) return;
      if (page === 71 && element.closest('.book-page65-cont,.book-page65-exercise,.book-page65-example')) return;
      if (page === 72 && element.closest('.book-page66-cont,.book-page66-example')) return;
      if (page === 73 && element.closest('.book-page67-exercise,.book-page67-example')) return;
      if (page === 74 && element.closest('.book-page68-cont,.book-page68-example')) return;
      if (page === 75 && element.closest('.book-page69-cont,.book-page69-exercise')) return;
      if (page === 76 && element.closest('.book-page70-example')) return;
      if (page === 77 && element.closest('.book-page71-cont,.book-page71-example,.book-page71-exercise')) return;
      if (page === 78 && element.closest('.book-page72-sheet,.book-page72-example')) return;
      if (page === 79 && element.closest('.book-page73-example,.book-page73-exercise')) return;
      if (page === 80 && element.closest('.book-page74-sheet')) return;
      if (page === 81 && element.closest('.book-page75-work,.book-page75-reminder,.book-page75-review')) return;
      if (page === 82 && element.closest('.book-page76-sheet')) return;
      if (page === 83 && element.closest('.book-page77-intro,.book-page77-copy')) return;
      if (page === 84 && element.closest('.book-page78-work,.book-page78-copy')) return;
      if (page === 85 && element.closest('.book-page79-lead,.book-page79-tools,.book-page79-work')) return;
      if (page === 86 && element.closest('.book-page80-work,.book-page80-copy,.book-page80-example')) return;
      if (page === 87 && element.closest('.book-page81-exercise,.book-page81-copy,.book-page81-work')) return;
      if (page === 88 && element.closest('.book-page82-copy,.book-page82-exercise')) return;
      if (page === 89 && element.closest('.book-page83-copy')) return;
      if (page === 90 && element.closest('.book-page84-copy,.book-page84-work,.book-page84-exercise')) return;
      if (page === 91 && element.closest('.book-page85-exercise,.book-page85-copy')) return;
      if (page === 92 && element.closest('.book-page86-copy,.book-page86-work')) return;
      if (page === 93 && element.closest('.book-page87-copy')) return;
      if (page === 94 && element.closest('.book-page88-copy,.book-page88-work,.book-page88-exercise')) return;
      if (page === 95 && element.closest('.book-page89-exercise,.book-page89-work')) return;
      if (page === 96 && element.closest('.book-page90-reminder,.book-page90-vocab,.book-page90-review')) return;
      if (page === 97 && element.closest('.book-page91-sheet')) return;
      if (page === 98 && element.closest('.book-page92-sheet')) return;
      if (page === 99 && element.closest('.book-page93-intro,.book-page93-copy')) return;
      if (page === 100 && element.closest('.book-page94-work,.book-page94-copy,.book-page94-example')) return;
      if (page === 101 && element.closest('.book-page95-copy,.book-page95-work')) return;
      if (page === 102 && element.closest('.book-page96-work,.book-page96-copy,.book-page96-example')) return;
      if (page === 103 && element.closest('.book-page97-example')) return;
      if (page === 104 && element.closest('.book-page98-exercise,.book-page98-copy')) return;
      if (page === 105 && element.closest('.book-page99-work,.book-page99-example')) return;
      if (page === 106 && element.closest('.book-page100-example,.book-page100-work,.book-page100-exercise')) return;
      if (page === 107 && element.closest('.book-page101-exercise,.book-page101-copy,.book-page101-work')) return;
      if (page === 108 && element.closest('.book-page102-work,.book-page102-exercise')) return;
      if (page === 109 && element.closest('.book-page103-copy')) return;
      if (page === 110 && element.closest('.book-page104-work,.book-page104-example')) return;
      if (page === 111 && element.closest('.book-page105-exercise')) return;
      if (page === 112 && element.closest('.book-page106-work,.book-page106-reminder,.book-page106-vocab')) return;
      if (page === 113 && element.closest('.book-page107-review')) return;
      if (page === 114 && element.closest('.book-page108-review')) return;
      if (page === 115 && element.closest('.book-page109-review')) return;
      if (page === 116 && element.closest('.book-page110-intro,.book-page110-copy,.book-page110-work')) return;
      if (page === 117 && element.closest('.book-page111-example')) return;
      if (page === 118 && element.closest('.book-page112-exercise')) return;
      if (page === 119 && element.closest('.book-page113-exercise')) return;
      if (page === 120 && element.closest('.book-page114-exercise')) return;
      if (page === 121 && element.closest('.book-page115-copy,.book-page115-example')) return;
      if (page === 122 && element.closest('.book-page116-example,.book-page116-exercise')) return;
      if (page === 123 && element.closest('.book-page117-exercise')) return;
      if (page === 124 && element.closest('.book-page118-title,.book-page118-example')) return;
      if (page === 125 && element.closest('.book-page119-exercise')) return;
      if (page === 126 && element.closest('.book-page120-exercise,.book-page120-copy,.book-page120-example')) return;
      if (page === 127 && element.closest('.book-page121-cont')) return;
      if (page === 128 && element.closest('.book-page122-example')) return;
      if (page === 129 && element.closest('.book-page123-cont,.book-page123-exercise')) return;
      if (page === 130 && element.closest('.book-page124-title,.book-page124-example')) return;
      if (page === 131 && element.closest('.book-page125-cont,.book-page125-exercise')) return;
      if (page === 132 && element.closest('.book-page126-exercise,.book-page126-work,.book-page126-reminder')) return;
      if (page === 133 && element.closest('.book-page127-vocab,.book-page127-review')) return;
      if (page === 134 && element.closest('.book-page128-review')) return;
      if (page === 135 && element.closest('.book-page129-review')) return;
      if (page === 136 && element.closest('.book-page130-review')) return;
      if (page === 137 && element.closest('.book-page131-intro,.book-page131-copy')) return;
      if (page === 138 && element.closest('.book-page132-copy,.book-page132-exercise')) return;
      if (page === 139 && element.closest('.book-page133-copy')) return;
      if (page === 140 && element.closest('.book-page134-copy')) return;
      if (page === 141 && element.closest('.book-page135-example')) return;
      if (page === 142 && element.closest('.book-page136-copy,.book-page136-example')) return;
      if (page === 143 && element.closest('.book-page137-example')) return;
      if (page === 144 && element.closest('.book-page138-cont')) return;
      if (page === 145 && element.closest('.book-page139-answers,.book-page139-exercise')) return;
      if (page === 146 && element.closest('.book-page140-exercise')) return;
      if (page === 147 && element.closest('.book-page141-exercise')) return;
      if (page === 148 && element.closest('.book-page142-exercise,.book-page142-copy')) return;
      if (page === 149 && element.closest('.book-page143-copy')) return;
      if (page === 150 && element.closest('.book-page144-example,.book-page144-exercise')) return;
      if (page === 151 && element.closest('.book-page145-exercise')) return;
      if (page === 152 && element.closest('.book-page146-copy')) return;
      if (page === 153 && element.closest('.book-page147-copy,.book-page147-exercise,.book-page147-calendar')) return;
      if (page === 154 && element.closest('.book-page148-copy')) return;
      if (page === 155 && element.closest('.book-page149-copy')) return;
      if (page === 156 && element.closest('.book-page150-exercise,.book-page150-work,.book-page150-reminder,.book-page150-vocab')) return;
      if (page === 157 && element.closest('.book-page151-review')) return;
      if (page === 158 && element.closest('.book-page152-review')) return;
      if (page === 159 && element.closest('.book-page153-intro,.book-page153-copy,.book-page153-example')) return;
      if (page === 160 && element.closest('.book-page154-example,.book-page154-exercise')) return;
      if (page === 161 && element.closest('.book-page155-exercise,.book-page155-copy,.book-page155-example')) return;
      if (page === 162 && element.closest('.book-page156-exercise')) return;
      if (page === 163 && element.closest('.book-page157-exercise')) return;
      if (page === 164 && element.closest('.book-page158-noteqs,.book-page158-exercise')) return;
      if (page === 165 && element.closest('.book-page159-copy,.book-page159-example')) return;
      if (page === 166 && element.closest('.book-page160-exercise')) return;
      if (page === 167 && element.closest('.book-page161-exercise,.book-page161-copy,.book-page161-example')) return;
      if (page === 168 && element.closest('.book-page162-example')) return;
      if (page === 169 && element.closest('.book-page163-exercise')) return;
      if (page === 170 && element.closest('.book-page164-title,.book-page164-example')) return;
      if (page === 171 && element.closest('.book-page165-exercise')) return;
      if (page === 172 && element.closest('.book-page166-cont,.book-page166-copy,.book-page166-example')) return;
      if (page === 173 && element.closest('.book-page167-cont,.book-page167-example')) return;
      if (page === 174 && element.closest('.book-page168-example,.book-page168-exercise')) return;
      if (page === 175 && element.closest('.book-page169-exercise')) return;
      if (page === 176 && element.closest('.book-page170-exercise')) return;
      if (page === 177 && element.closest('.book-page171-title,.book-page171-example')) return;
      if (page === 178 && element.closest('.book-page172-exercise')) return;
      if (page === 179 && element.closest('.book-page173-work,.book-page173-reminder,.book-page173-vocab')) return;
      if (page === 180 && element.closest('.book-page174-review')) return;
      if (page === 181 && element.closest('.book-page175-review')) return;
      if (page === 182 && element.closest('.book-page176-review')) return;
      if (page === 183 && element.closest('.book-page177-review')) return;
      if (page === 184 && element.closest('.book-page178-review')) return;
      if (element.closest('[data-section-type="front_cover"],[data-section-type="inside_cover"],[data-section-type="credits"],[data-section-type="foreword"]')) return;
      const ownsText = [...element.childNodes].some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (!ownsText) return;
      const size = Number.parseFloat(getComputedStyle(element).fontSize);
      if (Number.isFinite(size) && size !== 24) element.style.setProperty('font-size', '24px', 'important');
    });
  };

  const restorePageFiveArtwork = () => {
    if (page !== 11 || document.querySelector('.book-page5-q7-artwork')) return;
    const prompt = document.querySelector('[data-id="pg011_n0036"]');
    if (!prompt) return;
    let question = prompt;
    while (question.parentElement && question.parentElement !== section) question = question.parentElement;
    const heading = question.firstElementChild;
    if (!heading) return;
    const image = document.createElement('img');
    image.src = 'images/pg011_q7_options.png';
    image.alt = 'Chaguo (a) hadi (j) zenye tarakimu zilizotiwa kivuli';
    image.className = 'book-page5-q7-artwork';
    question.replaceChildren(heading, image);
  };

  /* Canonical vertical arithmetic used by both Mfano and Zoezi.  The rules
     live in the same wrapper as the operation sign, so they begin at +/−,
     retain the printed gap, and never inherit the width of the outer card. */
  const normaliseVerticalArithmetic = () => {
    const selector = [
      '.book-page51-stack', '.book-page52-stack', '.book-page53-stack',
      '.book-page57-stack', '.book-page58-stack', '.book-page65-stack',
      '.book-page66-stack', '.book-page70-stack', '.book-page70-work',
      '.book-page71-stack', '.book-page71-work',
    ].join(',');
    document.querySelectorAll(selector).forEach((stack) => {
      if (stack.querySelector(':scope > .book-vertical-operation')) return;
      const children = [...stack.children];
      const operand = children.find((child) => child.matches('span') && /^[+−-]/.test(child.textContent.trim()));
      const rules = children.filter((child) => child.matches('i'));
      if (!operand || rules.length < 2) return;
      const match = operand.textContent.trim().match(/^([+−-])\s*(.*)$/);
      if (!match) return;
      const firstRuleIndex = children.indexOf(rules[0]);
      const secondRuleIndex = children.indexOf(rules[1]);
      const result = children.slice(firstRuleIndex + 1, secondRuleIndex).find((child) => child.matches('span'));
      const operation = document.createElement('div');
      operation.className = 'book-vertical-operation';
      const row = document.createElement('span');
      const sign = document.createElement('b');
      sign.textContent = match[1] === '-' ? '−' : match[1];
      const value = document.createElement('span');
      value.textContent = match[2];
      row.append(sign, value);
      operation.append(row, rules[0]);
      if (result) {
        result.classList.add('book-vertical-result');
        operation.append(result);
      }
      operation.append(rules[1]);
      operand.replaceWith(operation);
    });
  };

  /* Kazi ya kufanya is always semantic HTML.  A few converter pages retained
     a full-panel raster with an equivalent sr-only transcription; rebuild
     those panels from that transcription, then apply one shared component to
     every Kazi panel in the book. */
  const normaliseWorkDialogs = () => {
    document.querySelectorAll('#content .sr-only').forEach((hidden) => {
      const children = [...hidden.children];
      const titleIndex = children.findIndex((child) => /^Kazi ya kufanya\b/i.test(child.textContent.trim()));
      const image = hidden.parentElement?.querySelector(':scope > img');
      if (titleIndex < 0 || !image) return;
      const panel = hidden.parentElement;
      const heading = document.createElement('h1');
      heading.className = 'book-work-heading';
      heading.textContent = children[titleIndex].textContent.trim();
      const body = document.createElement('div');
      body.className = 'book-work-body';
      children.slice(titleIndex + 1).forEach((child, index) => {
        const clone = child.cloneNode(true);
        if (index === 0) clone.classList.add('book-work-subtitle');
        if (/^Maelezo$/i.test(clone.textContent.trim())) clone.classList.add('book-work-subheading');
        body.append(clone);
      });
      panel.replaceChildren(heading, body);
      panel.className = 'book-work-dialog';
    });

    document.querySelectorAll('#content *').forEach((candidate) => {
      if (candidate.children.length || candidate.closest('.sr-only')) return;
      if (!/^Kazi ya kufanya\b/i.test(candidate.textContent.trim())) return;
      let panel = candidate.closest('.book-work-dialog,[class*="book-page"][class*="-work"]');
      if (!panel) panel = candidate.closest('[class*="rounded"], article, section > div');
      if (!panel || panel === section || panel.closest('.book-example-card')) return;
      panel.classList.add('book-work-dialog');
      const heading = candidate.closest('h1,h2,h3') || candidate;
      if (!heading.classList.contains('book-work-heading')) {
        const title = candidate.textContent.trim();
        const full = heading.textContent.trim();
        if (candidate !== heading && full.length > title.length) {
          const subtitleText = full.slice(full.indexOf(title) + title.length).trim();
          heading.textContent = title;
          if (subtitleText) {
            const subtitle = document.createElement('p');
            subtitle.className = 'book-work-subtitle';
            subtitle.textContent = subtitleText;
            heading.after(subtitle);
          }
        }
        heading.classList.add('book-work-heading');
      }
      [...panel.querySelectorAll('h2,h3,p,strong')].forEach((element) => {
        if (/^Maelezo$/i.test(element.textContent.trim())) element.classList.add('book-work-subheading');
      });
    });
  };

  /* Printed Zoezi questions share one continuous exercise surface.  Remove
     only converter-created question cards; keep the outer Zoezi dialogue and
     genuine tables/figures intact. */
  const normaliseZoeziQuestionCards = () => {
    document.querySelectorAll('#content :is(article,div,label)[class*="rounded"][class*="border"]').forEach((card) => {
      if (card.closest('.book-work-dialog,.book-example-card')) return;
      if (card.querySelector('.book-exercise-heading,.book-exercise-title')) return;
      const text = card.textContent.replace(/\s+/g, ' ').trim();
      if (!/^(?:\d+\.|\([a-z]\))/i.test(text)) return;
      card.classList.add('book-zoezi-question');
    });
    document.querySelectorAll('#content :is(article,label)[class*="rounded"]').forEach((card) => {
      if (card.closest('.book-work-dialog,.book-example-card')) return;
      const text = card.textContent.replace(/\s+/g, ' ').trim();
      if (/^(?:\d+\.|\([a-z]\))/i.test(text)) card.classList.add('book-zoezi-question');
    });
  };

  /* A converter wrapper occasionally leaves the leading question number at
     its default size even though the adjacent question copy has the audited
     book size. Match only standalone numeric labels inside Zoezi/exercise
     surfaces to their neighbouring question text; do not touch contents,
     table cells, option letters, or the footer page-number badge. */
  const normaliseExerciseQuestionNumbers = () => {
    const exercises = document.querySelectorAll(
      '#content :is(.book-exercise-sheet,.book-exercise-panel,.book-zoezi-dialog,[class*="-exercise"])'
    );
    exercises.forEach((exercise) => {
      exercise.querySelectorAll('span').forEach((number) => {
        if (number.children.length || !/^\d{1,3}[.)]$/.test(number.textContent.trim())) return;
        if (number.closest('table,.source-page-number,.book-exercise-title,.book-exercise-heading')) return;
        const row = number.parentElement;
        if (!row) return;
        const peer = [...row.children].find((child) => child !== number && child.textContent.trim());
        if (!peer) return;
        const text = peer.matches('p,li,span')
          ? peer
          : peer.querySelector('p,li,span') || peer;
        const size = Number.parseFloat(getComputedStyle(text).fontSize);
        if (!Number.isFinite(size) || size < 8) return;
        number.style.setProperty('font-size', `${size}px`, 'important');
        number.dataset.bookQuestionNumber = 'matched';
      });
    });
  };

  /* Jikumbushe is a semantic summary component.  Rebuild converter raster
     panels from their embedded transcription and preserve list numbering as
     aligned HTML rows. */
  const normaliseRecallDialogs = () => {
    document.querySelectorAll('#content .sr-only').forEach((hidden) => {
      const children = [...hidden.children];
      const titleIndex = children.findIndex((child) => /^Jikumbushe\b/i.test(child.textContent.trim()));
      const image = hidden.parentElement?.querySelector(':scope > img');
      if (titleIndex < 0 || !image) return;
      const panel = hidden.parentElement;
      const heading = document.createElement('h1');
      heading.className = 'book-recall-heading';
      heading.textContent = 'Jikumbushe';
      const body = document.createElement('div');
      body.className = 'book-recall-body';
      const rest = children.slice(titleIndex + 1);
      for (let index = 0; index < rest.length; index += 1) {
        const child = rest[index];
        if (/^\d+\.$/.test(child.textContent.trim()) && rest[index + 1]) {
          const row = document.createElement('div');
          row.className = 'book-recall-row';
          row.append(child.cloneNode(true), rest[index + 1].cloneNode(true));
          body.append(row);
          index += 1;
        } else {
          body.append(child.cloneNode(true));
        }
      }
      panel.replaceChildren(heading, body);
      panel.className = 'book-recall-dialog';
    });

    document.querySelectorAll('#content *').forEach((candidate) => {
      if (candidate.children.length || candidate.closest('.sr-only')) return;
      if (!/^Jikumbushe\b/i.test(candidate.textContent.trim())) return;
      const panel = candidate.closest('.book-recall-dialog,[class*="rounded"]') || candidate.parentElement;
      if (!panel || panel === section) return;
      panel.classList.add('book-recall-dialog');
      const heading = candidate.closest('h1,h2,h3') || candidate;
      heading.classList.add('book-recall-heading');
      const body = heading.nextElementSibling;
      body?.classList.add('book-recall-body');
      body?.querySelectorAll(':scope > .flex').forEach((row) => row.classList.add('book-recall-row'));
    });

    document.querySelectorAll('#content .book-recall-dialog [data-book-type-boost]').forEach((node) => {
      node.style.removeProperty('font-size');
    });
  };

  /* From printed page 50 onward, prefer a background-free asset whenever the
     audited transparent counterpart exists. Missing assets keep the original. */
  const useTransparentFigureAssets = () => {
    if (page < 56) return;
    document.querySelectorAll('#content img[src]').forEach((image) => {
      if (image.dataset.transparentAudit || /_transparent\.png(?:$|\?)/i.test(image.src)) return;
      image.dataset.transparentAudit = 'checked';
      const original = image.getAttribute('src');
      const candidate = original.replace(/\.(?:jpe?g|png)(?=$|\?)/i, '_transparent.png');
      if (candidate === original) return;
      const probe = new Image();
      probe.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = Math.min(probe.naturalWidth, 96);
          canvas.height = Math.min(probe.naturalHeight, 96);
          const context = canvas.getContext('2d', { willReadFrequently: true });
          context.drawImage(probe, 0, 0, canvas.width, canvas.height);
          const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
          let opaque = 0;
          let dark = 0;
          for (let index = 0; index < pixels.length; index += 4) {
            if (pixels[index + 3] < 20) continue;
            opaque += 1;
            if (pixels[index] < 32 && pixels[index + 1] < 32 && pixels[index + 2] < 32) dark += 1;
          }
          if (!opaque || dark / opaque <= 0.45) image.setAttribute('src', candidate);
        } catch (_) {
          /* Keep the original extraction when a candidate cannot be audited. */
        }
      };
      probe.src = candidate;
    });
  };

  document.querySelectorAll(
    '#content [data-section-type="activity_fill_in_a_table"] table input'
  ).forEach((input) => {
    input.setAttribute('autocomplete', 'off');
    input.removeAttribute('value');
    input.defaultValue = '';
    input.value = '';
  });

  if (page === 18) {
    const exercise = document.querySelector('[data-section-id="pg018_sec001"]');
    const abacusItems = exercise?.firstElementChild?.querySelectorAll(':scope > ol > li');
    abacusItems?.forEach((item, index) => {
      if (index > 3) return;
      item.querySelector('input')?.remove();
      const generatedDiagram = item.querySelector(':scope > div:nth-child(2)');
      if (!generatedDiagram) return;
      const image = document.createElement('img');
      image.src = `images/pg018_abacus_${index + 3}.jpg`;
      image.alt = `Abakasi ${index + 3}`;
      image.className = 'pg018-restored-abacus';
      generatedDiagram.replaceWith(image);
    });
  }

  if (page === 19) {
    const examples = document.querySelector('[data-section-id="pg019_sec001"]');
    const cards = examples?.children;
    if (cards?.length >= 3) {
      cards[0].innerHTML = `
        <div data-id="pg019_n0002" class="book-example-label">Mfano wa 1</div>
        <p><span data-id="pg019_n0003">Andika thamani ya kila tarakimu katika namba 9672.</span></p>
        <div data-id="pg019_n0004" class="pg019-answer-heading">Jibu</div>
        <div class="pg019-place-value-chart" role="img" aria-label="9 ni 9000, 6 ni 600, 7 ni 70, na 2 ni 2">
          <span class="digit d1">9</span><span class="digit d2">6</span><span class="digit d3">7</span><span class="digit d4">2</span>
          <span class="place-line l1"></span><span class="place-line l2"></span><span class="place-line l3"></span><span class="place-line l4"></span>
          <span class="value v1">9000</span><span class="value v2">600</span><span class="value v3">70</span><span class="value v4">2</span>
        </div>`;

      cards[1].innerHTML = `
        <div data-id="pg019_n0011" class="book-example-label">Mfano wa 2</div>
        <p><span data-id="pg019_n0012">Andika thamani ya tarakimu zilizopigiwa mstari katika namba <span class="pg019-underlined-digit">8</span>7<span class="pg019-underlined-digit">9</span>4.</span></p>
        <div data-id="pg019_n0013" class="pg019-answer-heading">Jibu</div>
        <p><span data-id="pg019_n0014">Thamani ya 8 ni 8000 na thamani ya 9 ni 90.</span></p>`;

      const nestedExample = cards[2].firstElementChild;
      if (nestedExample) nestedExample.replaceWith(...nestedExample.childNodes);
    }
  }

  if (page === 20) {
    const underlinedOptions = {
      pg020_n0017: '(a) 4<u>7</u>65',
      pg020_n0019: '(b) <u>3</u>926',
      pg020_n0021: '(c) 186<u>7</u>',
      pg020_n0023: '(d) 45<u>1</u>9',
    };
    Object.entries(underlinedOptions).forEach(([id, html]) => {
      const option = document.querySelector(`[data-id="${id}"]`);
      if (option) option.innerHTML = html;
    });
  }

  if (page >= 21) {
    document.querySelectorAll('#content figure').forEach((figure) => {
      const sourceImage = figure.querySelector('img[data-id*="_seg"]');
      const caption = figure.querySelector('figcaption');
      const spans = caption ? [...caption.querySelectorAll(':scope > span[data-id]')] : [];
      if (!sourceImage || !spans.length || !/^Mfano wa\b/i.test(spans[0].textContent.trim())) return;

      const answerIndex = spans.findIndex((span) => /^Jibu$/i.test(span.textContent.trim()));
      const beforeAnswer = answerIndex >= 0 ? spans.slice(1, answerIndex) : spans.slice(1);
      const afterAnswer = answerIndex >= 0 ? spans.slice(answerIndex + 1) : [];
      const instruction = beforeAnswer.shift();
      const longestOption = Math.max(0, ...beforeAnswer.map((span) => span.textContent.trim().length));

      const label = document.createElement('div');
      label.className = 'book-example-label';
      label.dataset.id = spans[0].dataset.id;
      label.textContent = spans[0].textContent.trim();

      const body = document.createElement('div');
      body.className = 'book-html-example-body';
      if (instruction) {
        const prompt = document.createElement('p');
        prompt.className = 'book-example-prompt';
        prompt.append(instruction.cloneNode(true));
        body.append(prompt);
      }
      if (beforeAnswer.length) {
        const options = document.createElement('div');
        options.className = `book-example-options ${longestOption > 22 ? 'wide' : 'compact'}`;
        beforeAnswer.forEach((span) => options.append(span.cloneNode(true)));
        body.append(options);
      }
      if (answerIndex >= 0) {
        const answerHeading = document.createElement('div');
        answerHeading.className = 'book-example-answer-heading';
        answerHeading.dataset.id = spans[answerIndex].dataset.id;
        answerHeading.textContent = 'Jibu';
        body.append(answerHeading);
      }
      if (afterAnswer.length) {
        const answers = document.createElement('div');
        answers.className = 'book-example-answers';
        afterAnswer.forEach((span) => answers.append(span.cloneNode(true)));
        body.append(answers);
      }

      figure.replaceChildren(label, body);
      figure.className = 'book-example-card book-html-example';
    });
  }

  removeAnswerInteractions();

  normaliseLateExampleCards();
  restorePageFiveArtwork();
  normaliseVerticalArithmetic();
  normaliseWorkDialogs();
  normaliseZoeziQuestionCards();
  normaliseExerciseQuestionNumbers();
  normaliseRecallDialogs();
  useTransparentFigureAssets();
  increaseBookTypeScale();
  normaliseBodyTypeScale();
  removeAnswerInteractions();
  cleanFlattenedAccessibilityCopy();
  window.setTimeout(() => {
    normaliseLateExampleCards();
    restorePageFiveArtwork();
    normaliseVerticalArithmetic();
    normaliseWorkDialogs();
    normaliseZoeziQuestionCards();
    normaliseExerciseQuestionNumbers();
    normaliseRecallDialogs();
    useTransparentFigureAssets();
    increaseBookTypeScale();
    normaliseBodyTypeScale();
    removeAnswerInteractions();
    cleanFlattenedAccessibilityCopy();
    normaliseVerticalArithmetic();
  }, 0);
  const cleanupObserver = new MutationObserver(() => {
    cleanFlattenedAccessibilityCopy();
    normaliseWorkDialogs();
    normaliseZoeziQuestionCards();
    normaliseExerciseQuestionNumbers();
    normaliseRecallDialogs();
    useTransparentFigureAssets();
    increaseBookTypeScale();
    normaliseBodyTypeScale();
    removeAnswerInteractions();
  });
  cleanupObserver.observe(document.querySelector('#content'), {
    childList: true,
    characterData: true,
    subtree: true,
  });
  window.setTimeout(() => cleanupObserver.disconnect(), 2500);

  /* The interface bundle loads after this file. Watch briefly at document
     level so a delayed "Tuma" button cannot reappear. */
  const interactionObserver = new MutationObserver(removeAnswerInteractions);
  interactionObserver.observe(document.body, { childList: true, subtree: true });
  window.setTimeout(() => {
    removeAnswerInteractions();
    interactionObserver.disconnect();
  }, 10000);

  /* Load the audited, page-specific HTML layouts on every page. Keeping this
     here makes the shared correction layer authoritative without duplicating
     a script tag across 184 generated HTML files. */
  if (!document.querySelector('script[data-book-page-layout]')) {
    const pageLayout = document.createElement('script');
    pageLayout.src = './assets/page-layout.js?v=20260821-page-audit-11';
    pageLayout.dataset.bookPageLayout = 'true';
    document.head.append(pageLayout);
  }
})();
