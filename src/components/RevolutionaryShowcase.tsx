import { AppCard } from "@/components/AppCard";
import { getAppsByCategory } from "@/data/apps";

export const RevolutionaryShowcase = () => {
  const apps = getAppsByCategory("revolutionary");

  return (
    <section
      className="relative py-24 px-4 overflow-hidden bg-background"
      aria-label="Revolutionary AI Apps"
    >
      {/* Vertical beams flowing down the left and right edges */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <span
            key={`l-${i}`}
            className="absolute w-[2px] rounded-full"
            style={{
              left: `${10 + i * 18}%`,
              top: "-40%",
              height: "60%",
              background: "linear-gradient(to bottom, transparent, hsl(271 81% 65% / 0.9), hsl(188 100% 60% / 0.6), transparent)",
              boxShadow: "0 0 12px hsl(271 81% 65% / 0.8)",
              animation: `beam-down ${5 + (i % 3)}s linear ${i * 0.6}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <span
            key={`r-${i}`}
            className="absolute w-[2px] rounded-full"
            style={{
              right: `${10 + i * 18}%`,
              bottom: "-40%",
              height: "60%",
              background: "linear-gradient(to top, transparent, hsl(328 86% 70% / 0.9), hsl(188 100% 60% / 0.6), transparent)",
              boxShadow: "0 0 12px hsl(328 86% 70% / 0.8)",
              animation: `beam-up ${5 + (i % 3)}s linear ${i * 0.8}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Sideways beams crossing the section horizontally */}
      <div className="absolute inset-x-0 inset-y-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <span
            key={`h-${i}`}
            className="absolute h-[2px] rounded-full"
            style={{
              top: `${15 + i * 22}%`,
              left: "-40%",
              width: "40%",
              background: "linear-gradient(to right, transparent, hsl(188 100% 60% / 0.9), hsl(271 81% 65% / 0.6), transparent)",
              boxShadow: "0 0 12px hsl(188 100% 60% / 0.8)",
              animation: `beam-right ${6 + (i % 3)}s linear ${i * 1.1}s infinite`,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <span
            key={`h2-${i}`}
            className="absolute h-[2px] rounded-full"
            style={{
              top: `${25 + i * 22}%`,
              right: "-40%",
              width: "40%",
              background: "linear-gradient(to left, transparent, hsl(328 86% 70% / 0.9), hsl(271 81% 65% / 0.6), transparent)",
              boxShadow: "0 0 12px hsl(328 86% 70% / 0.8)",
              animation: `beam-left ${6 + (i % 3)}s linear ${i * 1.4}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes beam-down {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(240vh); opacity: 0; }
        }
        @keyframes beam-up {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-240vh); opacity: 0; }
        }
        @keyframes beam-right {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(350%); opacity: 0; }
        }
        @keyframes beam-left {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-350%); opacity: 0; }
        }
      `}</style>


      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-4">
          1st-to-Market <span className="text-gradient">Revolutionary AI Apps</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Bold ideas no one else has shipped
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
