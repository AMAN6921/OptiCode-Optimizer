import { useState } from "react";
import { Layout } from "@/components/layout";
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Heart, Zap, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Senior AI Curriculum Developer",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    description: "Design and develop cutting-edge AI courses that shape the future of education.",
    requirements: [
      "5+ years of experience in AI/ML",
      "PhD or Master's in Computer Science or related field",
      "Strong communication and instructional design skills",
      "Experience creating technical content",
    ],
    responsibilities: [
      "Develop comprehensive AI curriculum for various skill levels",
      "Create hands-on projects and assessments",
      "Collaborate with instructors to ensure content quality",
      "Stay updated with latest AI research and trends",
    ],
  },
  {
    id: 2,
    title: "Machine Learning Instructor",
    department: "Teaching",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead live sessions and mentor students through their AI learning journey.",
    requirements: [
      "3+ years of hands-on ML experience",
      "Experience teaching or mentoring",
      "Strong understanding of deep learning frameworks",
      "Excellent presentation skills",
    ],
    responsibilities: [
      "Conduct live online classes and workshops",
      "Provide personalized feedback to students",
      "Develop supplementary learning materials",
      "Mentor students on career development",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain our learning platform and internal tools.",
    requirements: [
      "4+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Understanding of AI/ML concepts is a plus",
    ],
    responsibilities: [
      "Develop new features for the learning platform",
      "Optimize performance and user experience",
      "Collaborate with design and product teams",
      "Write clean, maintainable, and tested code",
    ],
  },
  {
    id: 4,
    title: "Student Success Manager",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    description: "Ensure our students have the support they need to succeed in their AI journey.",
    requirements: [
      "2+ years in customer success or education",
      "Strong interpersonal and communication skills",
      "Experience with CRM and support tools",
      "Passion for education and technology",
    ],
    responsibilities: [
      "Onboard and support students throughout their learning journey",
      "Identify and address student challenges proactively",
      "Collect and analyze feedback for improvements",
      "Coordinate with instructors and curriculum team",
    ],
  },
];

const perks = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance" },
  { icon: Zap, title: "Learning Budget", description: "$2,000 annual budget for courses and conferences" },
  { icon: Users, title: "Team Events", description: "Regular team retreats and virtual social events" },
  { icon: Globe, title: "Remote Flexibility", description: "Work from anywhere with flexible hours" },
];

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Help us shape the future of AI education. We're looking for passionate people who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why Work at <span className="text-gradient">Owl AI</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {perks.map((perk, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                  <perk.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Open <span className="text-gradient">Positions</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="glass rounded-xl overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/20 text-primary">
                        {job.department}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedJob === job.id ? (
                      <ChevronUp className="text-muted-foreground" size={20} />
                    ) : (
                      <ChevronDown className="text-muted-foreground" size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    expandedJob === job.id ? "max-h-[600px]" : "max-h-0"
                  )}
                >
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <p className="text-muted-foreground mb-6">{job.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button className="glow-primary" asChild>
                      <Link to="/connect">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
