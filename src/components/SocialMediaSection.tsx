import { AppCard } from "@/components/AppCard";
import { getAppsByCategory } from "@/data/apps";

export const SocialMediaSection = () => {
  const apps = getAppsByCategory("social");

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden" aria-label="Social media tools">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Social Media <span className="text-gradient">Automation Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From a single piece of content to viral clips across every platform — our automation engines handle scheduling, captions, hashtags and posting while you build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-14">
          {apps.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} total={apps.length} />
          ))}
        </div>
      </div>
    </section>
  );
};
