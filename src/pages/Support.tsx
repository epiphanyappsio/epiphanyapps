import { siteEmail } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo, breadcrumbLd } from "@/components/Seo";
import playWebp from "@/assets/google-play-icon.webp.asset.json";
import playPng from "@/assets/google-play-icon.png.asset.json";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Support & Contact | Epiphany Apps"
        description="Get help with Epiphany Apps tools, report an issue or request a feature from our team."
        path="/support"
        jsonLd={breadcrumbLd("Support", "/support")}
      />
      <Header />
      <main className="container mx-auto px-4 py-24">
        <Link to="/">
          <Button variant="ghost" className="mb-8 rounded-2xl">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold mb-6">Need Help?</h1>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            We're here to help.
          </p>

          <div className="rounded-lg border border-secondary/40 bg-card/40 p-6 sm:p-8 mb-6">
            <h2 className="text-3xl font-display font-bold mb-6">Leave a Review</h2>
            <Button asChild variant="ghost" className="h-auto w-full rounded-lg py-5 px-3 sm:px-6">
              <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" aria-label="Play Store (opens in a new tab)">
                <picture className="shrink-0">
                  <source srcSet={playWebp.url} type="image/webp" />
                  <img src={playPng.url} alt="" width="136" height="136" fetchPriority="high" className="h-24 w-24 sm:h-32 sm:w-32 object-contain" />
                </picture>
                <span className="ml-4 sm:ml-8 text-2xl sm:text-3xl font-display font-semibold">Play Store</span>
                <ArrowUpRight className="ml-auto shrink-0 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/40 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-display font-bold mb-4">Feature Requests</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Have an idea for a new feature or want to vote on what we build next?
              Join our community board and help shape the future of Epiphany Apps.
            </p>
            <Button asChild size="lg" className="rounded-lg bg-gradient-hero hover:opacity-90 font-semibold">
              <a href="https://epiphanyapps.featurebase.app/" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />Request a Feature
              </a>
            </Button>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/40 p-6 sm:p-8">
            <h2 className="text-2xl font-display font-bold mb-4">Email Support</h2>
            <p className="text-muted-foreground mb-6">Need a hand? Send us a message.</p>
            <Button asChild size="lg" className="rounded-lg bg-gradient-hero hover:opacity-90 font-semibold">
              <a href={`mailto:${siteEmail("support")}`}>
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />Email Us
              </a>
            </Button>
          </div>

          <div className="mt-12 text-muted-foreground">
            <p>Looking for more information?</p>
            <div className="flex justify-center gap-6 mt-4">
              <Link to="/terms" className="text-primary hover:text-primary/80 transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-primary hover:text-primary/80 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
