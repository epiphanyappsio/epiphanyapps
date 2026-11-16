import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Extra JSON-LD blocks to emit (Article, SoftwareApplication, BreadcrumbList, ...) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

export const Seo = ({ title, description, path, jsonLd, noindex }: SeoProps) => {
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={path} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : <meta name="robots" content="index, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Epiphany Apps" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={path} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {blocks.map((block, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

/** Breadcrumb JSON-LD: Home > page */
export const breadcrumbLd = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name, item: path },
  ],
});

/** SoftwareApplication JSON-LD for an app landing page */
export const softwareAppLd = (opts: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: opts.name,
  description: opts.description,
  url: opts.path,
  applicationCategory: opts.category ?? "BusinessApplication",
  operatingSystem: "Web",
  publisher: { "@type": "Organization", name: "Epiphany Apps", url: "https://epiphanyapps.org" },
});
