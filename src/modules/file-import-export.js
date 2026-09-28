export async function exportTextAsFile(text, filename = "document.txt") {
  const blob = new Blob([text], { type: "text/plain" });
  const handle = await window.showSaveFilePicker({
    suggestedName: filename,
    types: [{ description: "Text", accept: { "text/plain": [".txt"] } }]
  });
  const writable = await handle.createWritable();
  await writable.write(blob);
  await writable.close();
}

export async function importTextFile() {
  const [fileHandle] = await window.showOpenFilePicker({
    types: [{ description: "Text", accept: { "text/plain": [".txt"] } }]
  });
  const file = await fileHandle.getFile();
  return await file.text();
}
