/** Central domain config. All absolute URLs derive from VITE_SITE_URL. */
const envUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();
export const SITE_URL = (envUrl || (typeof window !== "undefined" ? window.location.origin : "")).replace(/\/+$/, "");
export const SITE_HOST = (() => { try { return new URL(SITE_URL).host; } catch { return ""; } })();
export const LEGACY_HOSTS = ((import.meta.env.VITE_LEGACY_HOSTS as string | undefined) || "")
  .split(",").map((h) => h.trim().toLowerCase()).filter(Boolean);
export const absUrl = (path = "/") => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`);
export const SITE_DOMAIN = ((import.meta.env.VITE_SITE_DOMAIN as string | undefined) || SITE_HOST.replace(/^www\./, "")).trim();
export const siteEmail = (user: string) => `${user}@${SITE_DOMAIN}`;

/** Forward visitors on an old domain to the same path on the current one. */
export const redirectLegacyHost = () => {
  if (typeof window === "undefined" || !SITE_URL) return;
  const host = window.location.hostname.toLowerCase();
  if (LEGACY_HOSTS.includes(host)) {
    const { pathname, search, hash } = window.location;
    window.location.replace(`${SITE_URL}${pathname}${search}${hash}`);
  }
};
