import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo, breadcrumbLd } from "@/components/Seo";

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
            We're here to help. Reach out and we'll get back to you within 24 hours.
          </p>

          <div className="rounded-3xl border border-border/50 backdrop-blur-xl bg-card/40 p-8 mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">Email Support</h2>
            <p className="text-muted-foreground mb-6">
              Tap below — your email app opens with our address pre-filled. Just write your subject and message.
            </p>
            <a href="mailto:support@epiphanyapps.org">
              <Button size="lg" className="rounded-2xl bg-gradient-hero hover:opacity-90 font-semibold">
                Email Us
              </Button>
            </a>
          </div>

          <div className="rounded-3xl border border-border/50 backdrop-blur-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
            <h2 className="text-2xl font-display font-bold mb-4">Feature Requests & Feedback</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Have an idea for a new feature or want to vote on what we build next?
              Join our community board and help shape the future of Epiphany Apps.
            </p>
            <a href="https://epiphanyapps.featurebase.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-2xl bg-gradient-hero hover:opacity-90 font-semibold">
                Request a Feature
              </Button>
            </a>
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
