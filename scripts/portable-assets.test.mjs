import { test } from "node:test";
import assert from "node:assert/strict";
import { assetOutputPath } from "./portable-assets.mjs";

test("deployment preserves the exact asset request path", () => {
  assert.equal(assetOutputPath("/__l5e/assets-v1/logo-id/logo.webp"), "__l5e/assets-v1/logo-id/logo.webp");
});

test("both browser-selected formats are preserved", () => {
  assert.equal(assetOutputPath("/__l5e/assets-v1/logo-id/logo.png"), "__l5e/assets-v1/logo-id/logo.png");
});

test("rejects paths outside the asset directory", () => {
  assert.throws(() => assetOutputPath("/../../index.html"));
  assert.throws(() => assetOutputPath("/__l5e/assets-v1/../index.html"));
});