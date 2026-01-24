import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Wrench, Users, Brain, Zap, Target, Sparkles } from "lucide-react";

const technicalSkills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "C++ with DSA", "SQL"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB"],
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    category: "App Development",
    icon: Smartphone,
    items: ["Android Studio", "Flutter", "Firebase"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["VS Code", "Git/GitHub", "Jupyter Notebook", "Google Colab"],
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
];

const softSkills = [
  { name: "Team Leadership", icon: Users },
  { name: "Problem Solving", icon: Brain },
  { name: "Communication", icon: Zap },
  { name: "Project Management", icon: Target },
];

const interests = [
  "AI & Chatbot Development",
  "NLP",
  "Deep Learning",
  "Computer Vision",
  "App & Web Development",
  "Competitive Programming",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
} as const;

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
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
            What I work with
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for building intelligent systems and applications.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-transparent hover:${skill.borderColor} group`}
            >
              <motion.div 
                className={`inline-flex p-3 rounded-xl ${skill.bgColor} mb-4 relative`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <skill.icon className={`w-6 h-6 ${skill.color}`} />
                <div className={`absolute inset-0 ${skill.bgColor} rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Row */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card rounded-2xl p-6 shadow-card hover-lift"
          >
            <h3 className="font-semibold text-lg mb-4 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-muted/30 hover:bg-primary/10 transition-colors cursor-default group"
                >
                  <skill.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card rounded-2xl p-6 shadow-card hover-lift"
          >
            <h3 className="font-semibold text-lg mb-4 text-center">Interests</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 text-sm rounded-full bg-gradient-primary text-primary-foreground font-medium cursor-default shadow-sm hover:shadow-glow transition-all duration-300"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
