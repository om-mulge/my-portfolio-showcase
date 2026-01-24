import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  { program: "B.E (AI & ML)", institute: "Bangalore Technological Institute", year: "2026", score: "8.71 CGPA" },
  { program: "12th PUC", institute: "Sankalp Independent PU College", year: "2022", score: "75%" },
  { program: "10th SSLC", institute: "Shri Basaveshwar EM & HS", year: "2020", score: "89.96%" },
];

const certifications = [
  "Published research paper: 'ChatXpert: A Smart Assistant Using NLP' in IJCRT Journal, 2025",
  "Certificate on completing ChatGPT for Beginners",
  "National Level Robot Fight Competition Participant",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate AI enthusiast with a strong foundation in machine learning, 
            natural language processing, and computer vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.program}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                  <h4 className="font-medium text-foreground">{edu.program}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institute}</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-primary font-mono">{edu.year}</span>
                    <span className="text-xs text-muted-foreground font-mono">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{cert}</p>
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
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-medium">Languages:</span>{" "}
            English, Kannada, Hindi, Marathi
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;