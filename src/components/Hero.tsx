import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Phone, Linkedin, MapPin, Sparkles, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { useRef } from "react";
import WaveText from "./WaveText";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  } as const;
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  } as const;
  return <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Minimal floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-primary/40" style={{
        left: `${20 + i * 20}%`,
        top: `${25 + i % 2 * 30}%`
      }} animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5
      }} />)}
      </div>
      
      {/* Single subtle gradient orb */}
      <motion.div style={{
      y
    }} className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <motion.div style={{
      y
    }} className="absolute bottom-1/3 -right-48 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <motion.div style={{
      opacity
    }} className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8 gradient-border">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Bangalore, Karnataka</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-glow-pulse" />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-sm font-mono text-primary tracking-wider uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <WaveText text="Hi, I'm " />
              <WaveText text="Disha sarkar" letterClassName="text-shimmer" />
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                AI&ML Engineer
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground/80 mb-10 leading-relaxed max-w-xl">
              Final-year B.E student passionate about building intelligent systems, 
              exploring real-world AI applications, and creating innovative solutions with NLP and Computer Vision.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 shadow-glow hover:shadow-[0_0_60px_hsl(186_100%_50%_/_0.25)] transition-all duration-300">
                <a href="#projects">
                  <Sparkles className="w-4 h-4 mr-2" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary group">
                <a href="#contact">
                  Get in Touch
                  <motion.span className="ml-2" animate={{
                  x: [0, 4, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}>
                    →
                  </motion.span>
                </a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              {[{
             href: "https://mail.google.com/mail/?view=cm&fs=1&to=ommulge@gmail.com",

              icon: Mail,
              label: "Email"
            }, {
              href: "tel:+918105928223",
              icon: Phone,
              label: "Phone"
            },
            {
              href: "https://github.com/om-mulge",
              icon: Github,
              label: "GitHub",
              external: true
            },
            {
              href: "https://linkedin.com/in/om-mulge-187161267",
              icon: Linkedin,
              label: "LinkedIn",
              external: true
            }].map((item, index) => <motion.a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group hover-lift" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>)}
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Rotating gradient ring */}
              <motion.div className="absolute inset-0 rounded-full" style={{
              background: "conic-gradient(from 0deg, hsl(160 84% 45% / 0.4), hsl(160 84% 60% / 0.1), hsl(160 84% 45% / 0.4))",
              padding: "3px"
            }} animate={{
              rotate: 360
            }} transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}>
                <div className="w-full h-full bg-background rounded-full" />
              </motion.div>

              {/* Glow effect behind image */}
              <motion.div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110" animate={{
              opacity: [0.2, 0.4, 0.2]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
              
              {/* Profile image with floating animation */}
              <motion.div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <img src={profileImage} alt="Om Mulge - AI & Machine Learning Engineer" className="w-full h-full object-cover object-top" />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>
              
              {/* Floating tech badges */}
              
              
              
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5,
        duration: 0.6
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors" animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <span className="text-sm font-mono">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;