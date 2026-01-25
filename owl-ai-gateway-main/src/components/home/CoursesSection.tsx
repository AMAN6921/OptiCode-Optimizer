import { Link } from "react-router-dom";
import { Clock, Users, Star, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "AI Fundamentals Bootcamp",
    description: "Master the basics of artificial intelligence, from algorithms to neural networks.",
    duration: "8 weeks",
    students: "2,500+",
    rating: 4.9,
    level: "Beginner",
    image: "🤖",
  },
  {
    title: "Deep Learning Specialization",
    description: "Dive deep into CNNs, RNNs, GANs, and advanced architectures.",
    duration: "12 weeks",
    students: "1,800+",
    rating: 4.8,
    level: "Intermediate",
    image: "🧠",
  },
  {
    title: "LLM & Prompt Engineering",
    description: "Learn to build and deploy large language model applications.",
    duration: "6 weeks",
    students: "3,200+",
    rating: 4.9,
    level: "Advanced",
    image: "💬",
  },
];

export function CoursesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card/50 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn("flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4 fade-in-up", isVisible && "visible")}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
              <TrendingUp size={14} />
              <span>Most Popular</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Featured <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-muted-foreground">
              Industry-leading courses designed by AI experts
            </p>
          </div>
          <Button variant="outline" className="hover:glow-primary transition-all" asChild>
            <Link to="/projects">
              View All Courses <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={cn(
                "glass rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:glow-primary fade-in-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-40 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-6xl group-hover:scale-125 transition-transform duration-500 relative z-10">
                  {course.image}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-accent">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs text-foreground font-semibold">{course.rating}</span>
                  </div>
                  <div className="ml-auto">
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gradient transition-all">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {course.students}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
