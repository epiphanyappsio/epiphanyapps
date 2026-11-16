import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";

const SOCIALS = [
  { label: "X (Twitter)", href: "https://x.com/epiphanyapps", Icon: Twitter },
  { label: "Instagram", href: "https://instagram.com/epiphanyapps", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@epiphanyapps", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/epiphanyapps", Icon: Linkedin },
  { label: "Discord", href: "https://discord.gg/epiphanyapps", Icon: MessageCircle },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4" style={{ background: "hsl(262 85% 4%)" }}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link to="/" className="flex items-center gap-2.5 active:scale-95 transition-transform" aria-label="Back to home">
            <img src="/logo.png" alt="Epiphany Apps logo" className="w-8 h-8 rounded-full" />
            <span className="text-lg font-sans font-semibold text-foreground tracking-tight hover:text-primary transition-colors">Epiphany Apps</span>
          </Link>

          <p className="text-sm font-medium" style={{ color: "hsl(0 0% 92%)" }}>Global Tools for Everyone</p>

          <nav className="flex items-center justify-center gap-4" aria-label="Social media">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full text-primary hover:text-white hover:bg-primary/25 transition-colors"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </nav>


          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" aria-label="Footer navigation">
            <Link to="/privacy" className="text-primary hover:text-white active:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-primary hover:text-white active:text-white transition-colors">Terms</Link>
            <Link to="/support" className="text-primary hover:text-white active:text-white transition-colors">Contact</Link>
            <Link to="/dmca" className="text-primary hover:text-white active:text-white transition-colors">Legal / DMCA</Link>
            <a
              href="https://epiphanyapps.featurebase.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white active:text-white transition-colors"
            >
              Request Feature / Report Bug
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
