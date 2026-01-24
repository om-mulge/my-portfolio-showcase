import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "About",
  href: "#about"
}, {
  name: "Skills",
  href: "#skills"
}, {
  name: "Projects",
  href: "#projects"
}, {
  name: "Contact",
  href: "#contact"
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"}`}>
      <div className="container px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gradient">
          ​
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.name}
            </a>)}
          <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
            <a href="mailto:ommulge@gmail.com">Hire Me</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-muted-foreground hover:text-primary">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden glass border-t border-border">
            <div className="container px-6 py-4 flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-primary transition-colors py-2">
                  {link.name}
                </a>)}
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground w-full">
                <a href="mailto:ommulge@gmail.com">Hire Me</a>
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};
export default Navbar;