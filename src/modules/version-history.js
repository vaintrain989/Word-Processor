const DB_NAME = "wordpad-history";
const STORE = "versions";

export async function saveVersion(content) {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE, { keyPath: "timestamp" });
    }
  });

  await db.put(STORE, {
    timestamp: Date.now(),
    content
  });
}

export async function listVersions() {
  const db = await openDB(DB_NAME, 1);
  return await db.getAll(STORE);
}

export async function loadVersion(timestamp) {
  const db = await openDB(DB_NAME, 1);
  return await db.get(STORE, timestamp);
}
