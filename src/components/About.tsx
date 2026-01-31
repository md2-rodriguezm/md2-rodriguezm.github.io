import { motion } from 'framer-motion';
import architectPortrait from '@/assets/architect-portrait.jpg';

export default function About() {
  return (
    <section id="about" className="section-py bg-background-deep border-t border-border-subtle">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="image-container aspect-[3/4]">
              <img
                src={architectPortrait}
                alt="Marcus Chen, architect and designer, in his minimalist studio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="caption text-primary">About</span>
            <h2 className="heading-md mt-4 mb-8">Philosophy & Vision</h2>
            
            <div className="space-y-6 text-muted-foreground body-md">
              <p>
                Architecture is more than the creation of structures—it's the art of 
                shaping human experience through space, light, and material.
              </p>
              <p>
                With over 15 years of experience spanning residential, commercial, and 
                cultural projects across three continents, I've developed a practice 
                rooted in modernist principles while remaining responsive to local 
                contexts and sustainable imperatives.
              </p>
              <p>
                Each project begins with deep listening—understanding not just what 
                a space needs to do, but what it needs to feel. The result is 
                architecture that serves its purpose with quiet elegance.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border-subtle">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '48', label: 'Projects Completed' },
                { number: '12', label: 'Design Awards' },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-heading text-3xl md:text-4xl text-primary">{stat.number}</span>
                  <p className="caption mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
