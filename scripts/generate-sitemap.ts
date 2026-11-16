// Writes public/sitemap.xml and robots.txt from VITE_SITE_URL (runs before dev/build).
import { writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";
const envFile = existsSync(".env.production") ? readFileSync(".env.production", "utf8") : "";
const fromFile = envFile.match(/^VITE_SITE_URL=(.*)$/m)?.[1]?.trim();
const BASE_URL = (process.env.VITE_SITE_URL || fromFile || "https://epiphanyapps.org").replace(/\/+$/, "");
const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/support", changefreq: "yearly", priority: "0.4" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/dmca", changefreq: "yearly", priority: "0.3" },
];
const xml = [`<?xml version="1.0" encoding="UTF-8"?>`, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`),
  `</urlset>`].join("\n");
writeFileSync(resolve("public/sitemap.xml"), xml + "\n");
writeFileSync(resolve("public/robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`);
console.log(`sitemap.xml written for ${BASE_URL}`);
