import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Users, Trophy, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StatsCounter } from "./StatsCounter";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-700 hover:scale-105 cursor-pointer",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">The Future of AI Education</span>
          </div>

          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Master The Art Of{" "}
            <span className="text-gradient relative inline-block">
              Engineering
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-gradient" />
            </span>
          </h1>

          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Button size="lg" className="glow-primary text-base px-8 group hover:scale-105 transition-transform" asChild>
              <Link to="/connect">
                Start Learning 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 group hover:glow-secondary transition-all" asChild>
              <Link to="/projects">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                View Projects
              </Link>
            </Button>
          </div>

          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {[
              { icon: Users, value: 10000, suffix: "+", label: "Students Trained", color: "primary" },
              { icon: Brain, value: 50, suffix: "+", label: "AI Courses", color: "secondary" },
              { icon: Trophy, value: 95, suffix: "%", label: "Success Rate", color: "accent" },
            ].map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "glass rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group",
                  stat.color === "primary" && "hover:glow-primary",
                  stat.color === "secondary" && "hover:glow-secondary",
                  stat.color === "accent" && "hover:glow-accent"
                )}
              >
                <stat.icon className={cn(
                  "w-8 h-8 mb-3 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
                  stat.color === "primary" && "text-primary",
                  stat.color === "secondary" && "text-secondary",
                  stat.color === "accent" && "text-accent"
                )} />
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
                  <StatsCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-16 h-16 rounded-xl bg-primary/20 animate-float hidden lg:block" />
      <div className="absolute bottom-32 right-16 w-12 h-12 rounded-full bg-secondary/20 animate-float hidden lg:block" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/3 right-20 w-8 h-8 rounded-lg bg-accent/20 animate-float hidden lg:block" style={{ animationDelay: "1s" }} />
    </section>
  );
}
