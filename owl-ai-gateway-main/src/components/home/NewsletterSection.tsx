import { useState, FormEvent } from "react";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn("max-w-3xl mx-auto text-center fade-in-up", isVisible && "visible")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Stay Updated</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our <span className="text-gradient">AI Community</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest AI insights, course updates, and exclusive content delivered to your inbox every week.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 glass border-border/50 focus:border-primary"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="glow-primary h-12 px-8"
              >
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-primary animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CheckCircle2 size={24} />
              <span className="font-medium">Thanks for subscribing!</span>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
