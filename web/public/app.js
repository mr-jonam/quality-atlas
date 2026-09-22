// SPDX-License-Identifier: MIT
const state = { notas: [], filtered: [], active: null };
const elements = {
  content: document.querySelector("#content"),
  navigation: document.querySelector("#navigation"),
  search: document.querySelector("#search"),
  level: document.querySelector("#level-filter"),
  role: document.querySelector("#role-filter"),
  count: document.querySelector("#note-count"),
  crumb: document.querySelector("#crumb"),
  source: document.querySelector("#source-link"),
  progress: document.querySelector("#reading-progress"),
  sidebar: document.querySelector("#sidebar"),
  scrim: document.querySelector("#scrim"),
  toast: document.querySelector("#toast")
};

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

const slug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

function noteTarget(raw, currentId) {
  const [target, anchor] = raw.split("#");
  if (!target) return `#/doc/${currentId}${anchor ? `#${slug(anchor)}` : ""}`;
  const clean = target.replace(/\.md$/i, "").replaceAll("\\", "/");
  const base = currentId.split("/").slice(0, -1);
  const parts = clean.startsWith(".") ? [...base, ...clean.split("/")] : clean.split("/");
  const normalized = [];
  for (const part of parts) {
    if (part === "..") normalized.pop();
    else if (part !== "." && part) normalized.push(part);
  }
  let id = normalized.join("/");
  if (!state.notas.some((note) => note.id === id)) {
    const match = state.notas.find((note) => note.id.endsWith(`/${clean}`) || note.id.endsWith(`/${clean.replace(/^.*\//, "")}`));
    if (match) id = match.id;
  }
  return `#/doc/${id}${anchor ? `#${slug(anchor)}` : ""}`;
}

function inlineMarkdown(value, currentId) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  text = text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) =>
    `<a href="${noteTarget(target, currentId)}">${label || target.replace(/^.*\//, "")}</a>`);
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  text = text.replace(/\[([^\]]+)\]\(([^\s)]+\.md(?:#[^\s)]*)?)\)/g, (_, label, target) =>
    `<a href="${noteTarget(target, currentId)}">${label}</a>`);
  return text;
}

function renderMarkdown(markdown, currentId) {
  const lines = markdown.replaceAll("\r", "").split("\n");
  const output = [];
  let paragraph = [];
  let list = null;
  let inCode = false;
  let code = [];

  const flushParagraph = () => {
    if (paragraph.length) output.push(`<p>${inlineMarkdown(paragraph.join(" "), currentId)}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (list) output.push(`</${list}>`);
    list = null;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.startsWith("```")) {
      flushParagraph(); closeList();
      if (inCode) { output.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`); code = []; }
      inCode = !inCode;
      continue;
    }
    if (inCode) { code.push(line); continue; }
    if (!line.trim()) { flushParagraph(); closeList(); continue; }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph(); closeList();
      const level = heading[1].length;
      const text = heading[2];
      output.push(`<h${level} id="${slug(text)}">${inlineMarkdown(text, currentId)}</h${level}>`);
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph(); closeList();
      output.push(`<blockquote>${inlineMarkdown(line.slice(2), currentId)}</blockquote>`);
      continue;
    }

    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const desired = ordered ? "ol" : "ul";
      if (list !== desired) { closeList(); output.push(`<${desired}>`); list = desired; }
      let item = (unordered || ordered)[1];
      const checkbox = item.match(/^\[([ xX])\]\s*(.*)$/);
      if (checkbox) {
        output.push(`<li><input type="checkbox" disabled ${checkbox[1].toLowerCase() === "x" ? "checked" : ""}> ${inlineMarkdown(checkbox[2], currentId)}</li>`);
      } else {
        output.push(`<li>${inlineMarkdown(item, currentId)}</li>`);
      }
      continue;
    }

    if (line.includes("|") && lines[index + 1]?.match(/^\s*\|?\s*:?-+/)) {
      flushParagraph(); closeList();
      const rows = [line, lines[index + 1]];
      let cursor = index + 2;
      while (cursor < lines.length && lines[cursor].includes("|") && lines[cursor].trim()) {
        rows.push(lines[cursor]);
        cursor += 1;
      }
      const bodyRows = rows.slice(2);
      const cells = (row) => row.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
      output.push("<div class=\"table-wrap\"><table><thead><tr>" + cells(rows[0]).map((cell) => `<th>${inlineMarkdown(cell, currentId)}</th>`).join("") + "</tr></thead><tbody>");
      for (const row of bodyRows) output.push("<tr>" + cells(row).map((cell) => `<td>${inlineMarkdown(cell, currentId)}</td>`).join("") + "</tr>");
      output.push("</tbody></table></div>");
      index += bodyRows.length + 1;
      continue;
    }

    paragraph.push(line.trim());
  }
  flushParagraph(); closeList();
  return output.join("\n");
}

function unique(field) {
  return [...new Set(state.notas.flatMap((note) => Array.isArray(note[field]) ? note[field] : [note[field]]))].filter(Boolean).sort();
}

function fillFilters() {
  for (const level of unique("level")) elements.level.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(level)}">${escapeHtml(level)}</option>`);
  for (const role of unique("roles")) elements.role.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(role)}">${escapeHtml(role.replaceAll("-", " "))}</option>`);
}

function applyFilters() {
  const query = elements.search.value.trim().toLowerCase();
  state.filtered = state.notas.filter((note) => {
    const haystack = [note.title, note.body, ...note.tags, ...note.roles].join(" ").toLowerCase();
    return (!query || haystack.includes(query)) && (!elements.level.value || note.level === elements.level.value)
      && (!elements.role.value || note.roles.includes(elements.role.value));
  });
  renderNavigation();
}

function renderNavigation() {
  elements.count.textContent = `${state.filtered.length} of ${state.notas.length} notas`;
  if (!state.filtered.length) {
    elements.navigation.innerHTML = '<div class="empty-state"><strong>No matching notas</strong><span>Prueba con menos palabras o elimina un filtro.</span><button type="button" id="clear-filters">Limpiar filtros</button></div>';
    document.querySelector("#clear-filters").addEventListener("click", () => {
      elements.search.value = ""; elements.level.value = ""; elements.role.value = ""; applyFilters();
    });
    return;
  }
  const groups = new Map();
  for (const note of state.filtered) groups.set(note.group, [...(groups.get(note.group) || []), note]);
  elements.navigation.innerHTML = [...groups.entries()].map(([group, notas]) => `
    <section class="nav-group">
      <h2>${escapeHtml(groupLabel(group))}</h2>
      ${notas.map((note) => `<a href="#/doc/${note.id}" data-id="${note.id}" class="${note.id === state.active?.id ? "active" : ""}"><span>${escapeHtml(note.title)}</span><small>${escapeHtml(note.level)}</small></a>`).join("")}
    </section>`).join("");
}

function showNote(id) {
  const note = state.notas.find((item) => item.id === id) || state.notas.find((item) => item.id.endsWith("/home")) || state.notas[0];
  if (!note) return;
  state.active = note;
  document.title = `${note.title} | Quality Atlas`;
  elements.crumb.textContent = `${groupLabel(note.group)} / ${note.title}`;
  elements.source.href = `https://github.com/mr-jonam/quality-atlas/blob/lang/es/${note.path}`;
  elements.content.innerHTML = `
    <article class="note">
      <div class="note-meta"><span>${escapeHtml(note.level)}</span><time datetime="${escapeHtml(note.updated)}">Actualizado ${escapeHtml(note.updated)}</time></div>
      ${renderMarkdown(note.body, note.id)}
      <div class="tag-list" aria-label="Etiquetas">${note.tags.map((tag) => `<button type="button" data-tag="${escapeHtml(tag)}">#${escapeHtml(tag)}</button>`).join("")}</div>
    </article>`;
  elements.content.querySelectorAll("[data-tag]").forEach((button) => button.addEventListener("click", () => {
    elements.search.value = button.dataset.tag; applyFilters(); elements.search.focus();
  }));
  renderNavigation();
  closeNav();
  requestAnimationFrame(() => {
    const anchor = location.hash.split("#").at(-1);
    if (anchor && anchor !== `/doc/${note.id}`) document.getElementById(anchor)?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  });
}

function route() {
  const match = location.hash.match(/^#\/doc\/([^#]+)/);
  showNote(decodeURIComponent(match?.[1] || "docs/00-start/home"));
}

function openNav() { elements.sidebar.classList.add("open"); elements.scrim.hidden = false; }
function closeNav() { elements.sidebar.classList.remove("open"); elements.scrim.hidden = true; }
function toast(message) {
  elements.toast.textContent = message; elements.toast.classList.add("visible");
  clearTimeout(toast.timer); toast.timer = setTimeout(() => elements.toast.classList.remove("visible"), 1800);
}

async function initialize() {
  try {
    const response = await fetch("/api/docs");
    if (!response.ok) throw new Error(`Request failed with ${response.status}`);
    state.notas = (await response.json()).notas;
    state.filtered = state.notas;
    fillFilters(); applyFilters(); route();
  } catch (error) {
    elements.navigation.innerHTML = "";
    elements.content.innerHTML = `<div class="error-state"><strong>No se pudo cargar el atlas.</strong><span>${escapeHtml(error.message)}</span><button type="button" id="retry-load">Reintentar</button></div>`;
    document.querySelector("#retry-load").addEventListener("click", () => location.reload());
    elements.count.textContent = "No disponible";
  }
}

[elements.search, elements.level, elements.role].forEach((control) => control.addEventListener("input", applyFilters));
window.addEventListener("hashchange", route);
window.addEventListener("scroll", () => {
  const range = document.documentElement.scrollHeight - innerHeight;
  elements.progress.style.transform = `scaleX(${range > 0 ? Math.min(scrollY / range, 1) : 0})`;
}, { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== elements.search) { event.preventDefault(); elements.search.focus(); }
  if (event.key === "Escape") closeNav();
});
document.querySelector("#open-nav").addEventListener("click", openNav);
document.querySelector("#close-nav").addEventListener("click", closeNav);
elements.scrim.addEventListener("click", closeNav);
document.querySelector("#copy-link").addEventListener("click", async () => {
  await navigator.clipboard.writeText(location.href); toast("Enlace copiado");
});
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next; localStorage.setItem("quality-atlas-theme", next);
});

const savedTheme = localStorage.getItem("quality-atlas-theme");
document.documentElement.dataset.theme = savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
initialize();
