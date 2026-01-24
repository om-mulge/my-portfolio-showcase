import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about AI and technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <a
                href="mailto:ommulge@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">ommulge@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918105928223"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-accent transition-colors">+91 8105928223</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/om-mulge-187161267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium group-hover:text-primary transition-colors">om-mulge-187161267</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card shadow-card">
                <div className="p-3 rounded-xl bg-accent/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Bangalore, Karnataka</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-gradient-card shadow-card"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8">
                <a href="mailto:ommulge@gmail.com">Send Email</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;