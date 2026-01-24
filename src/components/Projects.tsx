import { motion } from "framer-motion";
import { Bot, Brain, MessageSquare, Calendar, Cog, ExternalLink, Sparkles } from "lucide-react";
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
    accentColor: "primary",
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
    accentColor: "accent",
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
    accentColor: "primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
} as const;

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-sm font-mono text-primary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            My recent work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building intelligent systems that solve real-world problems.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500"
            >
              {/* Animated gradient top bar */}
              <motion.div 
                className={`h-1.5 bg-gradient-to-r ${project.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                style={{ transformOrigin: "left" }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <Badge
                    variant={project.status === "In Progress" ? "default" : "secondary"}
                    className={
                      project.status === "In Progress" 
                        ? "bg-primary/20 text-primary border-primary/30 animate-pulse" 
                        : "bg-accent/20 text-accent border-accent/30"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Title & Date */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 font-mono">
                  <Calendar className="w-3 h-3" />
                  {project.date}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <motion.div 
                      key={highlight} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Cog className={`w-3 h-3 text-${project.accentColor} shrink-0 mt-1`} />
                      <span className="text-xs text-muted-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
