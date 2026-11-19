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

  // Entry slide: cards are ALWAYS fully visible (opacity never drops). Cards that
  // start below the screen get a small offset, then slide into place ~200px
  // before they reach the screen so they never lag behind your scroll.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const rect = node.getBoundingClientRect();
    const nearScreen = rect.top < window.innerHeight + 200 && rect.bottom > -200;
    if (typeof IntersectionObserver === "undefined" || reduce || nearScreen) {
      setInView(true);
      return;
    }
    setArmed(true);
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );
    obs.observe(node);
    // Safety net: never keep a card offset for long, whatever the browser does.
    const timer = window.setTimeout(() => setInView(true), 4000);
    return () => {
      obs.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  // Scroll glow: the card lights up and lifts while it passes through the
  // middle of the screen, then relaxes as you scroll past.
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setActive(e.isIntersecting));
      },
      { threshold: 0, rootMargin: "-35% 0px -35% 0px" }
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
          active
            ? "border-primary bg-primary/[0.08] shadow-[0_0_60px_hsl(271,81%,56%,0.6),0_0_120px_hsl(188,100%,50%,0.18)]"
            : "border-primary/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        }`}
        style={{
          opacity: 1,
          transform: shown
            ? `translate3d(0,${active ? "-4px" : "0"},0) scale(${active ? 1.03 : 1})`
            : `translate3d(${hiddenTransform}, 24px, 0) scale(0.97)`,
          transition: `transform ${shown && inView && armed ? `1.1s cubic-bezier(0.22,1,0.36,1) ${delay}s` : "0.6s cubic-bezier(0.22,1,0.36,1)"}, border-color 0.5s ease, box-shadow 0.6s ease, background-color 0.5s ease`,
        }}
      >

        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            {app.image ? (
              <div
                className={`w-14 h-14 rounded-full overflow-hidden ring-2 transition-shadow duration-500 ${active ? "ring-primary shadow-[0_0_24px_hsl(271,81%,56%,0.7)]" : "ring-primary/30"} ${app.imageBg ?? "bg-black"}`}
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
