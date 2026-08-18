import { motion } from 'framer-motion';
import { Mail, Linkedin, Download } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="section-py bg-background-deep border-t border-border-subtle">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="caption text-primary">Contact</span>
          <h2 className="heading-lg mt-4 mb-6">Let's Create Together</h2>
          <p className="body-md text-muted-foreground mb-12 max-w-xl mx-auto">
            Open to studio positions, collaborations, and freelance commissions.
            Reach out directly or download the full portfolio and CV.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:martina.rguezmarrero@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors focus-ring"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href={`${import.meta.env.BASE_URL}MDRM_ARCHITECTURE_PORTFOLIO.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-heading uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
            >
              <Download size={18} />
              Portfolio
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Martina_D_Rodriguez_Marrero_CV_v2.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-heading uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors focus-ring"
            >
              <Download size={18} />
              CV
            </a>
            <a
              href="https://www.linkedin.com/in/martina-drm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-heading uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors focus-ring"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
