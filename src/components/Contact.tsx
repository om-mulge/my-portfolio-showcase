import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ommulge@gmail.com",
    href: "mailto:ommulge@gmail.com",
    color: "primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8105928223",
    href: "tel:+918105928223",
    color: "accent",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "om-mulge-187161267",
    href: "https://linkedin.com/in/om-mulge-187161267",
    external: true,
    color: "primary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, Karnataka",
    color: "accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
} as const;

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

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
            Let's talk
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about AI and technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => {
                const isLink = !!item.href;
                const Component = isLink ? motion.a : motion.div;
                
                return (
                  <Component
                    key={item.label}
                    variants={itemVariants}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    whileHover={isLink ? { x: 8, scale: 1.02 } : undefined}
                    className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-card shadow-card transition-all duration-300 group ${
                      isLink ? "cursor-pointer hover:shadow-glow" : ""
                    }`}
                  >
                    <motion.div 
                      className={`p-3 rounded-xl bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-colors relative`}
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className={`w-6 h-6 text-${item.color}`} />
                      <div className={`absolute inset-0 bg-${item.color}/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className={`font-medium ${isLink ? `group-hover:text-${item.color}` : ""} transition-colors`}>
                        {item.value}
                      </p>
                    </div>
                    {isLink && (
                      <ArrowRight className={`w-4 h-4 text-muted-foreground group-hover:text-${item.color} opacity-0 group-hover:opacity-100 transition-all`} />
                    )}
                  </Component>
                );
              })}
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-gradient-card shadow-card relative overflow-hidden group"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mb-6 shadow-glow relative z-10"
                animate={{ 
                  boxShadow: [
                    "0 0 40px hsl(186 100% 50% / 0.2)",
                    "0 0 60px hsl(186 100% 50% / 0.3)",
                    "0 0 40px hsl(186 100% 50% / 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Send className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-3 relative z-10">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 shadow-glow hover:shadow-[0_0_60px_hsl(186_100%_50%_/_0.3)] transition-all duration-300 relative z-10"
                >
                  <a href="mailto:ommulge@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
