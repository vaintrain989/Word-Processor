import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

export function createTipTapEditor(element) {
  return new Editor({
    element,
    extensions: [
      StarterKit,
    ],
    content: "<p>Start writing…</p>"
  });
}
