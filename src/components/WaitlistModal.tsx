import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2, Mail } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appName: string;
}

export const WaitlistModal = ({ open, onOpenChange, appName }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "verify" | "done">("email");
  const [code, setCode] = useState("");

  const submitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Verification code sent — check your inbox");
    setStep("verify");
  };

  const submitCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().length < 4) {
      toast.error("Enter the 6-digit code from your email");
      return;
    }
    setStep("done");
    toast.success(`You're on the ${appName} waitlist!`);
  };

  const reset = () => {
    setStep("email");
    setEmail("");
    setCode("");
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setTimeout(reset, 200); }}>
      <DialogContent className="rounded-3xl border-primary/40 bg-card/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gradient">Join the {appName} Waitlist</DialogTitle>
          <DialogDescription>
            Be the first in line on app launch.
          </DialogDescription>
        </DialogHeader>

        {step === "email" && (
          <form onSubmit={submitEmail} className="space-y-4 mt-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="pl-10 rounded-2xl h-11"
                autoFocus
                required
              />
            </div>
            <Button type="submit" className="w-full h-11 rounded-2xl bg-gradient-hero font-semibold">
              Send Verification
            </Button>
          </form>
        )}

        {step === "verify" && (
          <form onSubmit={submitCode} className="space-y-4 mt-2">
            <p className="text-sm text-muted-foreground">
              We sent a 6-digit code to <span className="text-foreground">{email}</span>
            </p>
            <Input
              type="text"
              inputMode="numeric"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="123456"
              className="rounded-2xl h-11 text-center tracking-[0.5em] font-mono"
              autoFocus
              required
            />
            <Button type="submit" className="w-full h-11 rounded-2xl bg-gradient-hero font-semibold">
              Verify & Join
            </Button>
            <button type="button" onClick={() => setStep("email")} className="text-xs text-muted-foreground hover:text-foreground w-full">
              Use a different email
            </button>
          </form>
        )}

        {step === "done" && (
          <div className="text-center py-4 space-y-3">
            <CheckCircle2 className="w-14 h-14 mx-auto text-secondary" />
            <h3 className="font-display text-xl font-semibold">You're In!</h3>
            <p className="text-sm text-muted-foreground">We'll email you the moment {appName} is live.</p>
            <Button onClick={() => onOpenChange(false)} className="rounded-2xl bg-gradient-hero">Done</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
