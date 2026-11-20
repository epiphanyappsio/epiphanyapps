import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export function assetOutputPath(url) {
  if (!url.startsWith("/__l5e/assets-v1/") || url.includes("..") || /[?#\\]/.test(url)) {
    throw new Error(`Invalid asset path: ${url}`);
  }
  return url.slice(1);
}

/**
 * Safety net: if code imports a CDN pointer (*.asset.json), copy its bytes into
 * the deployment. App logos are real files in src/assets, so normally nothing is
 * imported this way and the build needs no outside network access.
 */
export function portableAssetsPlugin() {
  const imported = new Set();
  return {
    name: "portable-lovable-assets",
    apply: "build",
    buildStart() {
      imported.clear();
    },
    transform(_code, id) {
      const file = id.split("?")[0];
      if (file.endsWith(".asset.json")) imported.add(file);
      return null;
    },
    async generateBundle() {
      if (imported.size === 0) {
        console.log("No CDN asset pointers imported; all images are bundled from project files.");
        return;
      }
      const config = JSON.parse(await readFile(resolve("asset-hosting.json"), "utf8"));
      const source = process.env.LOVABLE_ASSET_SOURCE_URL || config.sourceUrl;
      const origin = new URL(source).origin;
      const pointers = await Promise.all(
        [...imported].map(async (file) => JSON.parse(await readFile(file, "utf8"))),
      );
      const unique = [...new Map(pointers.map((pointer) => [pointer.url, pointer])).values()];
      let next = 0;
      await Promise.all(Array.from({ length: Math.min(6, unique.length) }, async () => {
        while (next < unique.length) {
          const pointer = unique[next++];
          const fileName = assetOutputPath(pointer.url);
          const response = await fetch(new URL(pointer.url, origin), {
            signal: AbortSignal.timeout(60000),
          });
          const type = response.headers.get("content-type")?.split(";")[0];
          if (!response.ok || type !== pointer.content_type) {
            throw new Error(`Cannot package ${pointer.original_filename}: HTTP ${response.status}, type ${type}. Check LOVABLE_ASSET_SOURCE_URL; expected ${pointer.content_type}.`);
          }
          const bytes = new Uint8Array(await response.arrayBuffer());
          if (bytes.length !== pointer.size) {
            throw new Error(`Incomplete asset: ${pointer.original_filename}`);
          }
          this.emitFile({ type: "asset", fileName, source: bytes });
        }
      }));
      console.log(`Packaged ${unique.length} original assets for independent hosting.`);
    },
  };
}