(function removeBookAnswerInputs() {
  "use strict";

  const answerControlSelector = [
    "main input",
    "main textarea",
    "main select",
    "main [contenteditable='true']",
    "main [data-abacus-action]",
    "main [data-fraction-add]",
    "main [data-fraction-remove]",
    "main [data-shape-preset]",
    "main [data-shape-clear]",
    "main .activity-underline-option",
  ].join(",");

  const submissionLabels = new Set(["tuma", "wasilisha", "submit"]);

  function removeControls(root) {
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

    if (root.nodeType === Node.ELEMENT_NODE && root.matches(answerControlSelector)) {
      root.remove();
      return;
    }

    root.querySelectorAll(answerControlSelector).forEach((control) => control.remove());
    root.querySelectorAll("button").forEach((button) => {
      const label = (button.textContent || "").trim().toLocaleLowerCase("sw");
      if (submissionLabels.has(label)) button.remove();
    });
  }

  const style = document.createElement("style");
  style.textContent = `${answerControlSelector}{display:none!important}`;
  document.head.appendChild(style);

  removeControls(document);

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach(removeControls);
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
