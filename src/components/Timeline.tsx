import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export default function Timeline() {
  // Get unique years sorted descending
  const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <section className="section-py bg-background border-t border-border-subtle overflow-hidden">
      <div className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="caption text-primary">Timeline</span>
          <h2 className="heading-md mt-4">Project Years</h2>
        </motion.div>
      </div>

      {/* Horizontal Scroll Timeline */}
      <div className="relative">
        <div className="horizontal-scroll pb-8 px-6 md:px-12 lg:px-16">
          {years.map((year, index) => {
            const yearProjects = projects.filter((p) => p.year === year);
            
            return (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 snap-start mr-16 last:mr-0"
              >
                <div className="relative">
                  {/* Year */}
                  <span className="font-heading text-6xl md:text-8xl text-border">
                    {year}
                  </span>
                  
                  {/* Projects under year */}
                  <div className="mt-4 space-y-2">
                    {yearProjects.map((project) => (
                      <p key={project.id} className="body-md text-muted-foreground">
                        {project.title}
                      </p>
                    ))}
                  </div>

                  {/* Connector line */}
                  <div className="absolute top-1/2 -right-8 w-8 h-px bg-border-subtle" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll hint gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
