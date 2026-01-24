import { motion } from "framer-motion";
import { Bot, Brain, MessageSquare, Calendar, Cpu, Eye, Cog } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "ChatXpert - AI Smart Assistant",
    description:
      "An AI-based smart assistant for iterative dialogues featuring NLP capabilities including lemmatization, tokenization, and sentiment analysis. Built with a hybrid architecture combining rule-based and ML approaches.",
    status: "In Progress",
    date: "March 2025 - Present",
    icon: MessageSquare,
    tech: ["Python", "NLTK", "spaCy", "DialogFlow", "RASA"],
    highlights: [
      "Published research paper in IJCRT Journal, 2025",
      "Hybrid architecture for flexible interaction",
      "BLEU score & cosine similarity evaluation",
    ],
    gradient: "from-primary to-accent",
  },
  {
    title: "AI-based Fake Reviews Detection",
    description:
      "Developed an NLP-based model to detect fake and genuine product reviews using text preprocessing, TF-IDF, and machine learning algorithms for classification.",
    status: "Completed",
    date: "Nov 2023 - Feb 2024",
    icon: Brain,
    tech: ["Python", "NLTK", "scikit-learn", "TensorFlow", "LSTM"],
    highlights: [
      "Compared Logistic Regression and LSTM models",
      "TF-IDF feature extraction",
      "High classification accuracy",
    ],
    gradient: "from-accent to-primary",
  },
  {
    title: "Autonomous Football Robot",
    description:
      "Built an autonomous robot for a National Level Competition at NIE, Mysuru. Implemented computer vision for ball detection and goal tracking with precise motor control.",
    status: "Completed",
    date: "Oct 2023 - Dec 2023",
    icon: Bot,
    tech: ["Python", "OpenCV", "Arduino", "Raspberry Pi", "Sensors"],
    highlights: [
      "Computer vision for object detection",
      "Real-time goal tracking",
      "National Level Competition project",
    ],
    gradient: "from-primary to-accent",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building intelligent systems that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <Badge
                    variant={project.status === "In Progress" ? "default" : "secondary"}
                    className={project.status === "In Progress" ? "bg-primary/20 text-primary border-primary/30" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Title & Date */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="w-3 h-3" />
                  {project.date}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <Cog className="w-3 h-3 text-primary shrink-0 mt-1" />
                      <span className="text-xs text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;