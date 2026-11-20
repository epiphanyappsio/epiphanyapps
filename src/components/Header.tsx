import { Search, X, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { APPS, sortedApps } from "@/data/apps";
import { WaitlistModal } from "@/components/WaitlistModal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistApp, setWaitlistApp] = useState<string | null>(null);

  const matches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return sortedApps().filter(
      (a) => a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery]);

  const openApp = (a: typeof APPS[number]) => {
    if (a.externalUrl) window.open(a.externalUrl, "_blank", "noopener,noreferrer");
    else setWaitlistApp(a.name);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (matches[0]) {
      openApp(matches[0]);
      setSearchOpen(false);
      setSearchQuery("");
    } else if (searchQuery) {
      toast.info(`No app matched "${searchQuery}"`);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary/10 border-b border-primary/20"
      style={{ boxShadow: "0 0 20px hsl(271 81% 56% / 0.15)" }}
    >
      <div className="mx-auto pl-2 pr-[max(0.5rem,env(safe-area-inset-right))] sm:px-4">
        <div className="flex items-center justify-between h-11">
          <Link to="/" className="flex items-center gap-1.5 shrink-0 active:scale-95 transition-transform">
            <img
              src="/logo.png"
              alt="Epiphany Apps logo"
              width={28}
              height={28}
              loading="eager"
              decoding="async"
              className="w-7 h-7 rounded-full"
              style={{ boxShadow: "0 0 12px hsl(271 81% 56% / 0.6)" }}
            />
            <span className="text-sm sm:text-base font-sans font-medium text-white tracking-tight">
              Epiphany Apps
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="relative flex items-center gap-1 pr-0.5">
                <Input
                  type="search"
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-32 sm:w-56 h-7 bg-white/10 border-white/20 text-sm text-white placeholder:text-white/40 rounded-2xl"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-1 text-white/70 hover:text-white transition-colors shrink-0"
                  aria-label="Close search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                {matches.length > 0 && (
                  <ul className="absolute top-full right-0 mt-2 w-56 rounded-2xl border border-primary/30 bg-background/95 backdrop-blur-xl shadow-xl overflow-hidden">
                    {matches.map((m) => (
                      <li key={m.name}>
                        <button
                          type="button"
                          onClick={() => {
                            openApp(m);
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-white whitespace-nowrap hover:bg-primary/30 active:bg-white active:text-primary transition-colors"
                        >
                          {m.name}
                          {m.comingSoon && (
                            <span className="ml-2 text-xs text-primary font-semibold">Waitlist</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden sm:block p-1.5 text-white/70 hover:text-white transition-colors"
                aria-label="Open search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-1.5 text-white/70 hover:text-white transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="rounded-l-2xl flex flex-col h-[100dvh] max-h-[100dvh] w-[85vw] sm:w-[380px] p-0 overflow-hidden">
                <SheetHeader className="px-6 pt-6 pb-2 shrink-0">
                  <SheetTitle className="inline-block pb-1 border-b-2 border-primary text-foreground">
                    All Apps
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 mt-2 flex flex-col gap-1">
                  {sortedApps().map((a) => (
                    <button
                      key={a.name}
                      onClick={() => {
                        openApp(a);
                        setMenuOpen(false);
                      }}
                      className="flex items-center justify-between gap-2 rounded-2xl px-3 py-2 text-left text-sm text-foreground hover:bg-primary/20 active:bg-primary active:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                      <span className="truncate text-[13px] sm:text-sm">{a.name}</span>
                      {a.comingSoon && (
                        <span className="text-[10px] text-primary shrink-0 font-semibold">Waitlist</span>
                      )}
                    </button>
                  ))}
                </nav>
                <div className="shrink-0 border-t border-border/50 px-6 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] bg-background flex flex-col gap-1 text-sm">
                  <Link to="/privacy" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-2xl bg-primary/15 text-foreground hover:bg-primary/25 active:bg-white active:text-primary transition-colors">Privacy</Link>
                  <Link to="/terms" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-2xl bg-primary/15 text-foreground hover:bg-primary/25 active:bg-white active:text-primary transition-colors">Terms</Link>
                  <Link to="/dmca" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-2xl bg-primary/15 text-foreground hover:bg-primary/25 active:bg-white active:text-primary transition-colors">Legal / DMCA</Link>
                  <Link to="/support" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-2xl bg-primary/15 text-foreground hover:bg-primary/25 active:bg-white active:text-primary transition-colors">Contact</Link>
                  <a
                    href="https://epiphanyapps.featurebase.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2 rounded-2xl bg-primary/15 text-foreground hover:bg-primary/25 active:bg-white active:text-primary transition-colors"
                  >
                    Request a Feature
                  </a>
                </div>
              </SheetContent>

            </Sheet>

            <WaitlistModal
              open={waitlistApp !== null}
              onOpenChange={(open) => { if (!open) setWaitlistApp(null); }}
              appName={waitlistApp ?? ""}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
