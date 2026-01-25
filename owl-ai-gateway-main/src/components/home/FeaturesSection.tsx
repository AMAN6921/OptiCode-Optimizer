import { Cpu, BookOpen, Rocket, Zap, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Cpu,
    title: "Cutting-Edge Curriculum",
    description: "Learn the latest AI technologies including transformers, LLMs, and neural networks.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Hands-On Projects",
    description: "Build real-world AI applications with mentorship from industry professionals.",
    color: "secondary",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Get job-ready with portfolio projects and interview preparation.",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Interactive Learning",
    description: "Engage with live sessions, coding exercises, and AI-powered feedback.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Industry Certification",
    description: "Earn recognized certificates that validate your AI expertise.",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect with learners and professionals from around the world.",
    color: "accent",
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16 fade-in-up", isVisible && "visible")}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Learn with <span className="text-gradient">Owl AI</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in the AI industry, from foundational knowledge to advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group glass rounded-xl p-6 transition-all duration-500 hover:scale-[1.05] cursor-pointer fade-in-up",
                feature.color === "primary" && "hover:glow-primary",
                feature.color === "secondary" && "hover:glow-secondary",
                feature.color === "accent" && "hover:glow-accent",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                  feature.color === "primary" && "bg-primary/20 text-primary group-hover:bg-primary/30",
                  feature.color === "secondary" && "bg-secondary/20 text-secondary group-hover:bg-secondary/30",
                  feature.color === "accent" && "bg-accent/20 text-accent group-hover:bg-accent/30"
                )}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gradient transition-all">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
