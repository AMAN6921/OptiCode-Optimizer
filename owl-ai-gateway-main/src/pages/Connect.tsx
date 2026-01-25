import { useState } from "react";
import { Layout } from "@/components/layout";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Youtube, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Connect() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent! 🎉",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about our programs? Want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-muted rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.name ? "ring-2 ring-destructive" : ""
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-muted rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? "ring-2 ring-destructive" : ""
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-muted rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.subject ? "ring-2 ring-destructive" : ""
                    }`}
                  >
                    <option value="">Select a topic...</option>
                    <option value="courses">Course Information</option>
                    <option value="enrollment">Enrollment Help</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-muted rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                      errors.message ? "ring-2 ring-destructive" : ""
                    }`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full glow-primary" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <a
                    href="mailto:hello@owlai.com"
                    className="flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:glow-primary transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <p>hello@owlai.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0 group-hover:glow-secondary transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <p>+1 (234) 567-890</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Visit Us</p>
                      <p>123 AI Boulevard<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                <p className="text-muted-foreground mb-6">
                  Stay updated with our latest courses, tutorials, and AI insights
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-xl p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday: 10:00 AM - 4:00 PM PST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
