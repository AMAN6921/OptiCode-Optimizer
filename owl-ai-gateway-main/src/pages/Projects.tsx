import { useState } from "react";
import { Search, ExternalLink, Eye } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const categories = ["All", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI"];

const projects = [
  {
    id: 1,
    title: "AI-Powered Medical Diagnosis",
    category: "Computer Vision",
    description: "Built a deep learning model to detect diseases from X-ray images with 97% accuracy.",
    fullDescription: "This project demonstrates the power of convolutional neural networks in medical imaging. Students built a complete pipeline from data preprocessing to model deployment, achieving state-of-the-art accuracy in disease detection from chest X-rays. The model was trained on over 100,000 images and deployed as a web application for healthcare professionals.",
    tech: ["PyTorch", "FastAPI", "Docker", "AWS"],
    image: "🏥",
    students: "Team of 4",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "Real-Time Translation App",
    category: "NLP",
    description: "Developed a multilingual translation system supporting 50+ languages with context awareness.",
    fullDescription: "Using transformer-based architectures, this team created a production-ready translation service. The system handles context-aware translations, idiom detection, and maintains conversation history for improved accuracy. Deployed as both a mobile app and API service.",
    tech: ["Transformers", "HuggingFace", "React Native", "GCP"],
    image: "🌐",
    students: "Team of 3",
    duration: "10 weeks",
  },
  {
    id: 3,
    title: "Autonomous Drone Navigation",
    category: "Deep Learning",
    description: "Created a reinforcement learning system for autonomous drone path planning.",
    fullDescription: "This advanced project combined computer vision with reinforcement learning to enable drones to navigate complex environments autonomously. The system can detect obstacles, plan optimal paths, and adapt to changing conditions in real-time.",
    tech: ["TensorFlow", "ROS", "OpenCV", "Python"],
    image: "🚁",
    students: "Team of 5",
    duration: "12 weeks",
  },
  {
    id: 4,
    title: "Fraud Detection System",
    category: "Machine Learning",
    description: "Implemented an ML pipeline that reduced fraud by 89% for a fintech company.",
    fullDescription: "Working with real financial data, students developed an anomaly detection system using ensemble methods. The pipeline includes feature engineering, model training, and real-time inference capabilities. Now in production handling millions of transactions daily.",
    tech: ["XGBoost", "Scikit-learn", "Kafka", "PostgreSQL"],
    image: "🔒",
    students: "Team of 3",
    duration: "6 weeks",
  },
  {
    id: 5,
    title: "AI Art Generator",
    category: "Generative AI",
    description: "Built a custom diffusion model for generating unique digital artwork.",
    fullDescription: "This creative project explored the frontiers of generative AI. Students trained a custom diffusion model on curated art datasets, implementing techniques like classifier-free guidance and LoRA fine-tuning. The resulting platform allows users to create stunning artwork from text prompts.",
    tech: ["Stable Diffusion", "PyTorch", "Gradio", "Hugging Face"],
    image: "🎨",
    students: "Team of 2",
    duration: "8 weeks",
  },
  {
    id: 6,
    title: "Predictive Maintenance IoT",
    category: "Machine Learning",
    description: "Developed an IoT-based system for predicting equipment failures in manufacturing.",
    fullDescription: "Combining sensor data with machine learning, this project predicts equipment failures before they occur. The system reduced downtime by 45% in pilot testing. Features include real-time monitoring, alert systems, and maintenance scheduling optimization.",
    tech: ["Time Series", "LSTM", "Raspberry Pi", "InfluxDB"],
    image: "⚙️",
    students: "Team of 4",
    duration: "10 weeks",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Student <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore real-world AI projects built by our students during their training programs
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass rounded-xl overflow-hidden card-hover group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <Button size="sm" variant="secondary">
                      <Eye className="mr-2" size={16} />
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/20 text-primary">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl">
                    {selectedProject.image}
                  </div>
                  <div>
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/20 text-primary">
                      {selectedProject.category}
                    </span>
                    <DialogTitle className="mt-2">{selectedProject.title}</DialogTitle>
                  </div>
                </div>
              </DialogHeader>
              <DialogDescription className="text-foreground">
                <p className="text-muted-foreground mb-6">{selectedProject.fullDescription}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Team</p>
                    <p className="font-medium">{selectedProject.students}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Duration</p>
                    <p className="font-medium">{selectedProject.duration}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-lg bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-6 glow-primary">
                  <ExternalLink className="mr-2" size={16} />
                  View Full Case Study
                </Button>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
