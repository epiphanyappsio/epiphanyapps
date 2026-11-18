import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const worker = readFileSync(new URL("../public/sw.js", import.meta.url), "utf8");

async function activate({ cacheFailure = false } = {}) {
  const handlers = {};
  const deleted = [];
  let unregistered = false;
  const scope = "https://example.test/";
  runInNewContext(worker, {
    self: {
      registration: { scope, unregister: async () => { unregistered = true; } },
      addEventListener: (type, handler) => { handlers[type] = handler; },
      skipWaiting: async () => {},
      clients: { claim: async () => {}, matchAll: async () => [] },
    },
    caches: {
      keys: async () => {
        if (cacheFailure) throw new Error("cache unavailable");
        return [`workbox-precache-v2-${scope}`, "firebase-messaging", "onesignal", "unrelated", "workbox-precache-v2-https://example.test/other/"];
      },
      delete: async (name) => { deleted.push(name); },
    },
  });
  let completion;
  handlers.activate({ waitUntil: (promise) => { completion = promise; } });
  await Promise.resolve(completion).catch(() => {});
  return { deleted, unregistered };
}

test("retirement removes only this app's Workbox cache, preserving messaging caches", async () => {
  const result = await activate();
  assert.deepEqual(result.deleted, ["workbox-precache-v2-https://example.test/"]);
  assert.equal(result.unregistered, true);
});

test("retirement unregisters even if cache enumeration fails", async () => {
  const result = await activate({ cacheFailure: true });
  assert.equal(result.unregistered, true);
});