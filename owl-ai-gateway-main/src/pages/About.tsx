import { Layout } from "@/components/layout";
import { Target, Eye, Heart, Lightbulb, Award, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Alexandra Chen",
    role: "Founder & CEO",
    bio: "Former AI Lead at Google with 15+ years in machine learning research.",
    avatar: "👩‍💼",
  },
  {
    name: "Marcus Williams",
    role: "Head of Curriculum",
    bio: "PhD in Computer Science, author of 3 AI textbooks.",
    avatar: "👨‍🏫",
  },
  {
    name: "Priya Sharma",
    role: "Lead Instructor",
    bio: "ML engineer with experience at Meta and OpenAI.",
    avatar: "👩‍💻",
  },
  {
    name: "James Rodriguez",
    role: "Head of Partnerships",
    bio: "Previously VP at edtech unicorn, connecting students with opportunities.",
    avatar: "🧑‍💼",
  },
];

const milestones = [
  { year: "2021", title: "Founded Owl AI", description: "Started with a vision to democratize AI education" },
  { year: "2022", title: "First 1,000 Students", description: "Launched our flagship AI Fundamentals course" },
  { year: "2023", title: "Industry Partnerships", description: "Partnered with top tech companies for job placement" },
  { year: "2024", title: "Global Expansion", description: "Opened offices in 5 countries, 10,000+ students" },
  { year: "2025", title: "AI Research Lab", description: "Launched our own research division for cutting-edge AI" },
];

const values = [
  { icon: Lightbulb, title: "Innovation First", description: "We stay at the cutting edge of AI technology" },
  { icon: Users, title: "Community Driven", description: "Learning is better together with peers and mentors" },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards" },
  { icon: Heart, title: "Accessibility", description: "Quality AI education should be available to everyone" },
];

export default function About() {
  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Owl AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to empower the next generation of AI innovators through world-class education and hands-on experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass rounded-xl p-8 card-hover">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To democratize AI education by providing accessible, practical, and industry-relevant training that transforms careers and drives innovation globally.
              </p>
            </div>
            <div className="glass rounded-xl p-8 card-hover">
              <Eye className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                A world where anyone with curiosity and dedication can master AI, regardless of their background, location, or resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Our <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="glass rounded-xl p-6 flex-1 card-hover">
                  <p className="text-xs text-primary font-medium mb-1">{milestone.year}</p>
                  <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry experts and passionate educators dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center card-hover">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
