import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "ML Engineer at Google",
    avatar: "👩‍💻",
    content: "Owl AI transformed my career. The hands-on projects and expert mentorship gave me the skills I needed to land my dream job at Google.",
  },
  {
    name: "Marcus Johnson",
    role: "AI Researcher",
    avatar: "👨‍🔬",
    content: "The depth of the curriculum is unmatched. I went from knowing basic Python to building production-ready AI models in just 3 months.",
  },
  {
    name: "Emily Rodriguez",
    role: "Data Scientist at Meta",
    avatar: "👩‍🎓",
    content: "The community at Owl AI is incredible. I made connections that helped me grow professionally and personally. Highly recommend!",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    avatar: "🧑‍💼",
    content: "The LLM course gave me the foundation to build my AI startup. The practical knowledge I gained was invaluable.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn("text-center mb-16 fade-in-up", isVisible && "visible")}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Students</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers with Owl AI
          </p>
        </div>

        <div className={cn("relative max-w-4xl mx-auto fade-in-up", isVisible && "visible")} style={{ transitionDelay: "200ms" }}>
          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:glow-primary transition-all duration-500">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20 group-hover:text-primary/30 transition-colors" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed min-h-[120px] transition-all duration-300">
                "{testimonials[current].content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl animate-pulse-glow">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonials[current].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="hover:glow-primary transition-all"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === current ? "w-8 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="hover:glow-primary transition-all"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
