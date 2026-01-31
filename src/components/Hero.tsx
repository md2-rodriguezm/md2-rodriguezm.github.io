import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-architecture.jpg';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative full-viewport flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern architecture with geometric concrete forms and dramatic lighting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="caption mb-6 text-primary">Architect & Designer</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="heading-xl mb-8"
        >
          Marcus Chen
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="body-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Creating spaces where light, form, and function 
          <br className="hidden md:block" />
          converge in perfect harmony
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={scrollToProjects}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted-foreground hover:text-primary transition-colors focus-ring"
        aria-label="Scroll to projects"
      >
        <span className="caption">Scroll</span>
        <ChevronDown size={20} className="scroll-indicator" />
      </motion.button>

      {/* Decorative Lines */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-px h-24 bg-border-subtle" />
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-px h-24 bg-border-subtle" />
    </section>
  );
}
