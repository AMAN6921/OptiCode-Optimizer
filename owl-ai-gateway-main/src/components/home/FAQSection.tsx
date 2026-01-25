import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What prerequisites do I need to start learning AI?",
    answer: "Basic programming knowledge (preferably Python) and fundamental math skills are helpful, but not required. Our beginner courses start from the ground up and guide you through all necessary concepts.",
  },
  {
    question: "How long does it take to complete a course?",
    answer: "Course duration varies from 6 to 12 weeks depending on the program. You can learn at your own pace with lifetime access to all course materials, recorded sessions, and resources.",
  },
  {
    question: "Do I get a certificate upon completion?",
    answer: "Yes! Upon successfully completing a course, you'll receive an industry-recognized certificate that you can add to your LinkedIn profile and resume to showcase your AI expertise.",
  },
  {
    question: "What kind of support do students receive?",
    answer: "Students get access to live Q&A sessions, dedicated mentorship, a vibrant community forum, and 24/7 support through our AI-powered chatbot. You're never alone in your learning journey.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course within the first 30 days, you can request a full refund, no questions asked.",
  },
  {
    question: "Are the courses updated with the latest AI trends?",
    answer: "Absolutely! We continuously update our curriculum to reflect the latest developments in AI, including new models, techniques, and industry best practices. You'll always learn cutting-edge content.",
  },
];

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16 fade-in-up", isVisible && "visible")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <HelpCircle size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI training programs
          </p>
        </div>

        <div className={cn("max-w-3xl mx-auto fade-in-up", isVisible && "visible")} style={{ transitionDelay: "200ms" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-lg px-6 border-border/50 hover:glow-primary transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
