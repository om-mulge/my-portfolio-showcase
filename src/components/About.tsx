import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Sparkles } from "lucide-react";

const education = [
  { program: "B.E (AI & ML)", institute: "Bangalore Technological Institute", year: "2026", score: "8.71 CGPA" },
  { program: "12th PUC", institute: "Sankalp Independent PU College", year: "2022", score: "75%" },
  { program: "10th SSLC", institute: "Shri Basaveshwar EM & HS", year: "2020", score: "88.96%" },
];

const certifications = [
  "Published research paper: 'ChatXpert: A Smart Assistant Using NLP' in IJCRT Journal, 2025",
  "Certificate on completing ChatGPT for Beginners",
  "National Level Robot Fight Competition Participant",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
} as const;

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
            Get to know me
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate AI enthusiast with a strong foundation in machine learning, 
            natural language processing, and computer vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-card rounded-2xl p-8 shadow-card hover-lift"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 relative">
                <GraduationCap className="w-6 h-6 text-primary" />
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md -z-10" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </motion.div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.program}
                  variants={itemVariants}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-all duration-300 group"
                >
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-gradient-primary -translate-x-[7px] shadow-glow" />
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{edu.program}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institute}</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-primary font-mono">{edu.year}</span>
                    <span className="text-xs text-accent font-mono font-medium">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-card rounded-2xl p-8 shadow-card hover-lift"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 relative">
                <Award className="w-6 h-6 text-accent" />
                <div className="absolute inset-0 bg-accent/20 rounded-xl blur-md -z-10" />
              </div>
              <h3 className="text-xl font-semibold">Achievements</h3>
            </motion.div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group cursor-default"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <BookOpen className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <span className="text-sm text-primary font-medium">Languages:</span>
            <div className="flex gap-2">
              {["English", "Kannada", "Hindi", "Marathi"].map((lang, i) => (
                <span key={lang} className="text-sm text-muted-foreground">
                  {lang}{i < 3 && <span className="text-primary/50 ml-2">•</span>}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
