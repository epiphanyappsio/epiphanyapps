import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SocialProof } from "@/components/SocialProof";


export const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! You'll be the first to know about new apps.");
      setEmail("");
    }
  };

  return (
    <section
      className="py-20 px-4 border-y border-primary/25"
      style={{ background: "linear-gradient(180deg, hsl(262 80% 6%) 0%, hsl(271 60% 14%) 100%)" }}
      aria-label="Subscribe for updates"
    >
      <div className="container mx-auto max-w-xl text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Stay Updated</h2>
        <p className="text-muted-foreground text-base sm:text-lg px-4">
          Be first in line when it launches.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center max-w-md w-full px-2"
        >
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 text-sm sm:text-base bg-card/80 backdrop-blur border-border/50 rounded-2xl text-center sm:text-left"
            required
          />
          <Button
            type="submit"
            className="w-full sm:w-auto h-11 px-6 bg-gradient-hero hover:opacity-90 active:bg-white active:text-primary font-semibold group rounded-2xl whitespace-nowrap"
          >
            Subscribe
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <SocialProof />
      </div>

    </section>
  );
};
