import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

/** First sentence of the description, trimmed to a concise teaser. */
function teaser(description: string): string {
  const firstSentence = description.split('. ')[0].trim();
  if (firstSentence.length <= 180) return firstSentence + '.';
  return firstSentence.slice(0, 177).trimEnd() + '…';
}

export default function FeaturedProjects() {
  // Most recent projects first, shown as editorial "selected work"
  const featured = [...projects].sort((a, b) => b.year - a.year).slice(0, 3);

  return (
    <section id="projects" className="section-py bg-background border-t border-border-subtle">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24"
        >
          <div>
            <span className="caption text-primary">Selected Work</span>
            <h2 className="heading-lg mt-4">Featured Projects</h2>
            <div className="w-16 h-px bg-primary mt-6" />
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 caption text-foreground hover:text-primary transition-colors focus-ring self-start md:self-auto"
          >
            View All Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Editorial alternating rows */}
        <div className="space-y-24 md:space-y-40">
          {featured.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
                >
                  <Link
                    to={`/project/${project.id}`}
                    className="group block image-container aspect-[4/3] focus-ring"
                    aria-label={`View ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category} architecture in ${project.location}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Index marker */}
                    <span className="absolute top-4 left-4 font-heading text-sm text-foreground/90 bg-background/70 backdrop-blur-sm px-3 py-1 border border-border/50">
                      {project.label}
                    </span>
                  </Link>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
                >
                  <div className="flex items-center gap-4 caption text-primary">
                    <span>{project.category}</span>
                    <span className="w-8 h-px bg-primary/50" />
                    <span className="text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="heading-md mt-5">{project.title}</h3>
                  <p className="body-md text-muted-foreground mt-2">{project.location}</p>

                  <p className="body-md text-muted-foreground mt-6 leading-relaxed">
                    {teaser(project.description)}
                  </p>

                  <Link
                    to={`/project/${project.id}`}
                    className="group inline-flex items-center gap-2 mt-8 caption text-foreground hover:text-primary transition-colors focus-ring accent-underline"
                  >
                    View Project
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
