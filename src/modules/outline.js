export function generateOutline(editorElement) {
  const headings = [...editorElement.querySelectorAll("h1, h2, h3")];

  return headings.map(h => ({
    level: h.tagName,
    text: h.innerText,
    id: h.id || (h.id = "h-" + Math.random().toString(36).slice(2))
  }));
}

export function renderOutline(outline, container) {
  container.innerHTML = outline
    .map(item => `<div class="outline-${item.level}" onclick="document.getElementById('${item.id}').scrollIntoView()">${item.text}</div>`)
    .join("");
}
