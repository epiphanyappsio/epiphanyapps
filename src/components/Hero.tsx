import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const ORB_COUNT = 45;

interface Orb {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  speedX: number;
  speedY: number;
  pulse: number;
  pulseSpeed: number;
  color: string;
  blur: number;
}

const OrbCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbs = useRef<Orb[]>([]);
  const animFrame = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "271, 81%, 65%",   // purple
      "188, 100%, 55%",  // cyan
      "328, 86%, 70%",   // pink
      "260, 100%, 75%",  // violet
      "200, 100%, 70%",  // light blue
      "300, 80%, 70%",   // magenta
    ];

    orbs.current = Array.from({ length: ORB_COUNT }, () => {
      const size = Math.random() * 18 + 3; // 3 - 21px
      return {
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size,
        baseOpacity: Math.random() * 0.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(Math.random() * 0.5 + 0.1),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.025 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: size > 10 ? size * 0.8 : 4,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      orbs.current.forEach((p) => {
        p.pulse += p.pulseSpeed;
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -30) {
          p.y = canvas.offsetHeight + 30;
          p.x = Math.random() * canvas.offsetWidth;
        }
        if (p.x < -30) p.x = canvas.offsetWidth + 30;
        if (p.x > canvas.offsetWidth + 30) p.x = -30;

        const glow = Math.sin(p.pulse) * 0.3 + 0.7;
        const alpha = p.baseOpacity * glow;

        // Outer glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grad.addColorStop(0, `hsla(${p.color}, ${alpha})`);
        grad.addColorStop(0.4, `hsla(${p.color}, ${alpha * 0.4})`);
        grad.addColorStop(1, `hsla(${p.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `hsla(${p.color}, ${Math.min(alpha + 0.3, 1)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
      });
      animFrame.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
};

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ height: "60vh", minHeight: "420px" }}
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(${1 + scrollY * 0.0004})`,
        }}
      />

      {/* Ambient drifting light — adds depth and a sense of life */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none ambient-drift mix-blend-screen"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(45% 55% at 25% 30%, hsl(271 81% 56% / 0.45) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none ambient-drift-slow mix-blend-screen"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(40% 50% at 78% 65%, hsl(189 94% 60% / 0.35) 0%, transparent 72%)",
        }}
      />
      {/* Depth vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 40%, hsl(262 85% 4% / 0.75) 100%)",
        }}
      />
      <OrbCanvas />

    </section>
  );
};
