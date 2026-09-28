import { createTipTapEditor } from "./editor/tiptap-setup.js";
import { exportTextAsFile, importTextFile } from "./modules/file-import-export.js";
import { saveVersion, listVersions } from "./modules/version-history.js";
import { generateOutline, renderOutline } from "./modules/outline.js";

const editorElement = document.getElementById("editor");
const outlineContainer = document.getElementById("outline");
const headerBtn = document.getElementById("header-btn");
const headerDropdown = document.getElementById("header-dropdown");

headerBtn.addEventListener("click", (e) => {
  const rect = headerBtn.getBoundingClientRect();
  headerDropdown.style.top = rect.bottom + "px";
  headerDropdown.style.left = rect.left + "px";
  headerDropdown.style.display =
    headerDropdown.style.display === "block" ? "none" : "block";
});

headerDropdown.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.execCommand("formatBlock", false, btn.dataset.header);
    headerDropdown.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!headerDropdown.contains(e.target) && e.target !== headerBtn) {
    headerDropdown.style.display = "none";
  }
});

const editor = createTipTapEditor(editorElement);

document.getElementById("saveVersion").onclick = () => {
  saveVersion(editor.getHTML());
};

document.getElementById("exportFile").onclick = () => {
  exportTextAsFile(editor.getHTML(), "document.html");
};

document.getElementById("importFile").onclick = async () => {
  const text = await importTextFile();
  editor.commands.setContent(text);
};

setInterval(() => {
  const outline = generateOutline(editorElement);
  renderOutline(outline, outlineContainer);
}, 1000);

const fontColorBtn = document.getElementById("fontColorBtn");
const fontColorPicker = document.getElementById("fontColorPicker");
const fontColorPreview = document.getElementById("fontColorPreview");

fontColorBtn.addEventListener("click", () => fontColorPicker.click());

fontColorPicker.addEventListener("input", () => {
  document.execCommand("foreColor", false, fontColorPicker.value);
  fontColorPreview.style.background = fontColorPicker.value;
});

const highlightBtn = document.getElementById("highlightBtn");
const highlightPicker = document.getElementById("highlightPicker");

highlightBtn.addEventListener("click", () => highlightPicker.click());

highlightPicker.addEventListener("input", () => {
  document.execCommand("hiliteColor", false, highlightPicker.value);
});

const insertImageBtn = document.getElementById("insertImageBtn");
const imageInput = document.getElementById("imageInput");

insertImageBtn.addEventListener("click", () => imageInput.click());

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    document.execCommand("insertImage", false, reader.result);
  };
  reader.readAsDataURL(file);
});
