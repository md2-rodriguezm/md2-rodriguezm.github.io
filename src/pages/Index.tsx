import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-architecture.jpg';
import background from '@/assets/background.png';

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={background}
              alt="Modern architecture with geometric concrete forms and dramatic lighting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/50" />
          </div>

          {/* Glassmorphism Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 mx-6 w-full max-w-3xl"
          >
            <div className="backdrop-blur-xl bg-background/30 border border-border/40 p-12 md:p-20 text-center shadow-2xl">
              {/* Caption */}


              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-foreground mb-6"
              >
                Martina D. Rodríguez Marrero
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-base md:text-lg font-light text-muted-foreground tracking-wide max-w-lg mx-auto mb-12"
              >
                Sharing the identity of architectural intimacies:
                <br className="hidden md:block" />
                part of the building massing that propagates
                <br className="hidden md:block" />
                in response to the recurring times.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors focus-ring"
                >
                  View Projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="/MDRM_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/30 text-foreground text-xs uppercase tracking-[0.2em] hover:bg-foreground/10 backdrop-blur-sm transition-colors focus-ring"
                >
                  <Download size={16} />
                  Download Portfolio
                </a>
                <a
                  href="/Martina_D_Rodriguez_Marrero_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/30 text-foreground text-xs uppercase tracking-[0.2em] hover:bg-foreground/10 backdrop-blur-sm transition-colors focus-ring"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Lines */}

        </section>
      </main>
      <Footer />
    </>
  );
}
