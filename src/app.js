import { createTipTapEditor } from "./editor/tiptap-setup.js";
import { exportTextAsFile, importTextFile } from "./modules/file-import-export.js";
import { saveVersion, listVersions } from "./modules/version-history.js";
import { generateOutline, renderOutline } from "./modules/outline.js";

const editorElement = document.getElementById("editor");
const outlineContainer = document.getElementById("outline");

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
