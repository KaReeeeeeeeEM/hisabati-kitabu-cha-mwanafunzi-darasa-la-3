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
    const content = document.querySelector('#content');
    if (page < 125 || content.classList.contains('book-page')) return;
    const currentScale = Math.min(0.85, Number.parseFloat(section.style.zoom || '0.85'));
    const top = section.getBoundingClientRect().top;
    const visualHeight = Math.max(...Array.from(section.querySelectorAll('*'), (node) => node.getBoundingClientRect().bottom - top), section.getBoundingClientRect().height);
    const scale = Math.min(currentScale, currentScale * 1080 / Math.max(visualHeight, 1));
    section.style.zoom = String(scale);
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
  cleanFlattenedAccessibilityCopy();
  window.setTimeout(() => {
    normaliseLateExampleCards();
    cleanFlattenedAccessibilityCopy();
  }, 0);
  const cleanupObserver = new MutationObserver(cleanFlattenedAccessibilityCopy);
  cleanupObserver.observe(document.querySelector('#content'), {
    childList: true,
    characterData: true,
    subtree: true,
  });
  window.setTimeout(() => cleanupObserver.disconnect(), 2500);
})();
