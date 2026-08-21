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
        element.parentElement?.classList.add('book-exercise-heading-row');
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
    document.querySelectorAll('#content *').forEach((element) => {
      if (element.dataset.bookTypeBoost === '2' || element.matches('.sr-only, script, style, input, textarea, select, option')) return;
      if (element.matches(':is(.book-page48-chapter,.book-page77-chapter,.book-page93-chapter,.book-page110-chapter) > h2')) {
        element.style.setProperty('font-size', '33px', 'important');
        element.dataset.bookTypeBoost = '2';
        return;
      }
      if (element.matches(':is(.book-page48-chapter,.book-page77-chapter,.book-page93-chapter,.book-page110-chapter) > h1')) {
        element.style.setProperty('font-size', '42px', 'important');
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

  if (page >= 20) {
    document.querySelectorAll('#content input, #content textarea').forEach((field) => {
      field.parentElement?.classList.add('book-removed-answer-wrapper');
      field.remove();
    });
  }

  normaliseLateExampleCards();
  normaliseVerticalArithmetic();
  normaliseWorkDialogs();
  normaliseZoeziQuestionCards();
  normaliseRecallDialogs();
  useTransparentFigureAssets();
  increaseBookTypeScale();
  cleanFlattenedAccessibilityCopy();
  window.setTimeout(() => {
    normaliseLateExampleCards();
    normaliseVerticalArithmetic();
    normaliseWorkDialogs();
    normaliseZoeziQuestionCards();
    normaliseRecallDialogs();
    useTransparentFigureAssets();
    increaseBookTypeScale();
    cleanFlattenedAccessibilityCopy();
    normaliseVerticalArithmetic();
  }, 0);
  const cleanupObserver = new MutationObserver(() => {
    cleanFlattenedAccessibilityCopy();
    normaliseWorkDialogs();
    normaliseZoeziQuestionCards();
    normaliseRecallDialogs();
    useTransparentFigureAssets();
    increaseBookTypeScale();
  });
  cleanupObserver.observe(document.querySelector('#content'), {
    childList: true,
    characterData: true,
    subtree: true,
  });
  window.setTimeout(() => cleanupObserver.disconnect(), 2500);
})();
