import { motion } from 'framer-motion';
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import architectPortrait from '@/assets/fotito.jpg';

const facts = [
  { number: '6+', label: 'Years' },
  { number: 'M.Arch', label: 'UWE · Bristol' },
  { number: '3', label: 'Languages' },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background-deep border-t border-border-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
        >
          {/* Photo — compact */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="image-container aspect-[4/5] w-full max-w-[220px]">
              <img
                src={architectPortrait}
                alt="Martina D. Rodríguez Marrero, architect and computational designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text — condensed */}
          <div className="md:col-span-8 lg:col-span-9">
            <span className="caption text-primary">About</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-3 mb-4">
              Architect · Researcher · M.Arch
            </h2>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={13} className="text-primary" />
                <span className="caption">Las Palmas de Gran Canaria, Spain</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap size={13} className="text-primary" />
                <span className="caption">M.Arch — UWE, Bristol</span>
              </div>
            </div>

            <p className="body-md text-muted-foreground max-w-2xl">
              Architectural designer with six years of experience in high-performance,
              locally-responsive infrastructure—working through computational and
              data-driven design processes, with a sensibility for wellbeing and the
              vitality of the built environment.
            </p>

            {/* Facts + link, inline & compact */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-5 mt-8">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span className="font-heading text-xl text-primary">{fact.number}</span>
                  <span className="caption text-muted-foreground ml-2">{fact.label}</span>
                </div>
              ))}

              <Link
                to="/job-application"
                className="group inline-flex items-center gap-2 caption text-foreground hover:text-primary transition-colors focus-ring ml-auto"
              >
                Full Profile & CV
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
