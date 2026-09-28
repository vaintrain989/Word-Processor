import { createEditor } from "lexical";

export function createLexicalEditor(element) {
  const editor = createEditor();
  editor.setRootElement(element);
  return editor;
}
