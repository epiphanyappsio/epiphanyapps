import { Hero } from "@/components/Hero";
import { AppShowcase } from "@/components/AppShowcase";
import { RevolutionaryShowcase } from "@/components/RevolutionaryShowcase";
import { StudioShowcase } from "@/components/StudioShowcase";
import { SeoAuthority } from "@/components/SeoAuthority";
import { SocialMediaSection } from "@/components/SocialMediaSection";
import { SubscribeSection } from "@/components/SubscribeSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";
import { sortedApps } from "@/data/apps";
import { SITE_URL, absUrl } from "@/config/site";

const TITLE = "Epiphany Apps | AI Tools, App Builders & Automation Software";
const DESCRIPTION =
  "Epiphany Apps builds AI-powered tools, app builders, branding software and automation utilities for creators and businesses. Fast, lightweight, built to scale.";

const Index = () => {
  const appList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Epiphany Apps product catalog",
    itemListElement: sortedApps().map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: app.name,
        description: app.description,
        url: absUrl(app.url),
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Epiphany Apps",
    url: SITE_URL,
    description: DESCRIPTION,
    publisher: { "@type": "Organization", name: "Epiphany Apps", url: SITE_URL },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title={TITLE} description={DESCRIPTION} path="/" jsonLd={[website, appList]} />
      <Header />
      <main>
        <Hero />
        <AppShowcase />
        <RevolutionaryShowcase />
        <SocialMediaSection />
        <StudioShowcase />
        <SeoAuthority />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
