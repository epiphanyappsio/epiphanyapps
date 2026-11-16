import underwaterBg from "@/assets/underwater-bg.jpg";


export const SeoAuthority = () => {
  return (
    <section
      className="py-28 px-4 relative overflow-hidden"
      aria-label="An Expanding AI App Studio"
    >
      {/* Underwater submerged background with caustic motion */}
      <div
        className="absolute inset-0 will-change-transform animate-water-drift"
        style={{
          backgroundImage: `url(${underwaterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Caustic light overlay */}
      <div className="absolute inset-0 pointer-events-none animate-caustics opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, hsl(188 100% 70% / 0.4), transparent 40%), radial-gradient(circle at 70% 80%, hsl(200 100% 80% / 0.3), transparent 50%)",
        }}
      />
      {/* Rising bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(20)].map((_, i) => {
          const size = 4 + Math.random() * 16;
          return (
            <span
              key={i}
              className="absolute rounded-full border border-white/40 bg-white/10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                bottom: "-30px",
                animation: `bubble-rise ${6 + Math.random() * 8}s linear ${i * 0.5}s infinite`,
              }}
            />
          );
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      <style>{`
        @keyframes water-drift {
          0%, 100% { transform: scale(1.05) translate(0, 0); }
          50% { transform: scale(1.08) translate(-1%, 1%); }
        }
        .animate-water-drift { animation: water-drift 14s ease-in-out infinite; }
        @keyframes caustics {
          0%, 100% { opacity: 0.35; transform: translate(0, 0); }
          50% { opacity: 0.55; transform: translate(2%, -1%); }
        }
        .animate-caustics { animation: caustics 9s ease-in-out infinite; }
        @keyframes bubble-rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          50% { transform: translateY(-50vh) translateX(15px); }
          90% { opacity: 0.8; }
          100% { transform: translateY(-110vh) translateX(-15px); opacity: 0; }
        }
      `}</style>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            An Expanding <span className="text-gradient">AI App Studio</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dive deep. New AI apps, automation engines, API tools and developer infrastructure surfacing constantly.
          </p>
        </div>

      </div>
    </section>
  );
};
