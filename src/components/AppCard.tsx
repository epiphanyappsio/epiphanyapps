import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { WaitlistModal } from "@/components/WaitlistModal";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppCardProps {
  app: {
    name: string;
    description: string;
    icon?: LucideIcon;
    image?: string;
    imageWebp?: string;
    imageBg?: string;

    url: string;
    color: string;
    badge?: string;
    comingSoon?: boolean;
    externalUrl?: string;
  };
  index: number;
  total?: number;
}

export const AppCard = ({ app, index, total = 3 }: AppCardProps) => {
  const Icon = app.icon;
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [inView, setInView] = useState(false);
  const [armed, setArmed] = useState(false);
  const shown = inView || !armed;
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Progressive reveal: visible by default; only "armed" (hidden) once we know
  // the browser can detect scrolling and the card starts below the screen.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const rect = node.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (typeof IntersectionObserver === "undefined" || reduce || onScreen) {
      setInView(true);
      return;
    }
    setArmed(true);
    let timer: number | undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );
    obs.observe(node);
    // Safety net: if the card is on screen but no reveal fired, show it anyway.
    const check = () => {
      const r = node.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => setInView(true), 2500);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", check);
      window.clearTimeout(timer);
    };
  }, []);

  // Highlight the row that is currently crossing the middle of the viewport
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setActive(e.isIntersecting));
      },
      { threshold: 0, rootMargin: "-42% 0px -42% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Desktop: sides slide toward the center, center pops. Mobile: alternate sides.
  const center = Math.floor(total / 2);
  let hiddenTransform: string;
  if (isMobile) {
    hiddenTransform = index % 2 === 0 ? "-56px" : "56px";
  } else {
    hiddenTransform = index === center ? "0px" : index < center ? "-80px" : "80px";
  }
  const delay = index === center && !isMobile ? 0 : Math.min(index, 3) * 0.12;

  return (
    <>
      <div
        ref={ref}
        className={`rounded-2xl border backdrop-blur-2xl bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-primary/60 hover:shadow-[0_0_40px_hsl(271,81%,56%,0.35)] group flex flex-col will-change-transform ${
          active ? "border-primary shadow-[0_0_50px_hsl(271,81%,56%,0.55)]" : shown ? "border-primary/40 shadow-[0_0_25px_hsl(271,81%,56%,0.25)]" : "border-white/15"
        }`}
        style={{
          opacity: shown ? 1 : 0,
          transform: shown
            ? `translate3d(0,0,0) scale(${active ? 1.03 : 1})`
            : `translate3d(${hiddenTransform}, 24px, 0) scale(0.96)`,
          transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}s, border-color 0.4s ease, box-shadow 0.4s ease`,
        }}
      >

        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            {app.image ? (
              <div
                className={`w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30 ${app.imageBg ?? "bg-black"}`}
                role="img"
                aria-label={`${app.name} logo`}
              >
                {imageFailed ? (
                  <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30 px-2 text-center text-xs font-bold tracking-wide text-white">
                    {app.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                ) : (
                  <picture>
                    {app.imageWebp && <source srcSet={app.imageWebp} type="image/webp" />}
                    <img
                    src={app.image}
                    alt={`${app.name} logo`}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                    loading="eager"
                    decoding="async"
                    onError={() => setImageFailed(true)}
                  />
                  </picture>
                )}
              </div>

            ) : Icon ? (
              <div className={`p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 ${app.color}`}>
                <Icon className="w-8 h-8" />
              </div>
            ) : null}
            {app.comingSoon ? (
              <Badge className="bg-primary/20 text-primary border border-primary/40 font-semibold rounded-full">
                Waitlist
              </Badge>
            ) : app.badge ? (
              <Badge className="bg-accent text-accent-foreground font-bold">{app.badge}</Badge>
            ) : null}
          </div>
          <CardTitle className="text-xl sm:text-2xl font-display group-hover:text-gradient transition-all break-words">
            {app.name}
          </CardTitle>
        </CardHeader>
        <div className="p-6 pt-0 flex flex-col flex-1">
          <CardDescription className="text-muted-foreground leading-relaxed flex-1">
            {app.description}
          </CardDescription>
          <div className="pt-4 pb-1 flex flex-col gap-2">
            {app.comingSoon ? (
              <Button
                onClick={() => setWaitlistOpen(true)}
                className="w-full bg-gradient-hero hover:opacity-90 text-white font-semibold rounded-2xl group/btn"
              >
                <Sparkles className="mr-2 w-4 h-4 hidden sm:block" />
                Join the Waitlist
              </Button>

            ) : app.externalUrl ? (
              <a href={app.externalUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary/10 hover:bg-primary/20 active:bg-primary active:text-white text-foreground border border-primary/30 group/btn rounded-2xl">
                  Open App
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            ) : (
              <Link to={app.url}>
                <Button className="w-full bg-primary/10 hover:bg-primary/20 active:bg-primary active:text-white text-foreground border border-primary/30 group/btn rounded-2xl">
                  Open App
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}

          </div>
        </div>
      </div>
      {app.comingSoon && (
        <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} appName={app.name} />
      )}
    </>
  );
};
