import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Wrench, Users, Brain } from "lucide-react";

const technicalSkills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "C++ with DSA", "SQL"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    category: "App Development",
    icon: Smartphone,
    items: ["Android Studio", "Flutter", "Firebase"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["VS Code", "Git/GitHub", "Jupyter Notebook", "Google Colab"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const softSkills = [
  { name: "Team Leadership", icon: Users },
  { name: "Problem Solving", icon: Brain },
  { name: "Communication", icon: Users },
  { name: "Project Management", icon: Brain },
];

const interests = [
  "AI & Chatbot Development",
  "NLP",
  "Deep Learning",
  "Computer Vision",
  "App & Web Development",
  "Competitive Programming",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for building intelligent systems and applications.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${skill.bgColor} mb-4`}>
                <skill.icon className={`w-6 h-6 ${skill.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Row */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card rounded-2xl p-6 shadow-card"
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
                  className="flex items-center gap-2 p-3 rounded-xl bg-muted/30"
                >
                  <skill.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{skill.name}</span>
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
            className="bg-gradient-card rounded-2xl p-6 shadow-card"
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
                  className="px-4 py-2 text-sm rounded-full bg-gradient-primary text-primary-foreground font-medium"
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