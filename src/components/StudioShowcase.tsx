import { AppCard } from "@/components/AppCard";
import { getAppsByCategory } from "@/data/apps";

export const StudioShowcase = () => {
  const apps = getAppsByCategory("studio");

  return (
    <section
      id="studio"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "hsl(262 80% 10%)" }}
      aria-label="Developer and AI infrastructure tools"
    >
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Expanding <span className="text-gradient">AI Infrastructure</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          The plumbing, keys and guardrails that keep your AI stack running
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {apps.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} total={apps.length} />
          ))}
        </div>
      </div>
    </section>
  );
};
