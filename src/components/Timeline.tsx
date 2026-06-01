import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { papers } from '@/data/papers';

// Sketch imagery used as the card covers (more expressive than the project logos)
import cover1 from '@/assets/sketches/spatial-iterations-1.jpg';
import cover2 from '@/assets/sketches/spatial-iterations-2.jpg';
import cover3 from '@/assets/sketches/escaner-20240509-6.png';

const covers = [cover1, cover2, cover3];

interface TimelineWork {
  key: string;
  kind: 'Project' | 'Paper';
  title: string;
  detail: string;
  href: string;
}

function worksForYear(year: number): TimelineWork[] {
  const projectWorks: TimelineWork[] = projects
    .filter((p) => p.year === year)
    .map((p) => ({
      key: `project-${p.id}`,
      kind: 'Project',
      title: p.title,
      detail: p.category,
      href: `/project/${p.id}`,
    }));

  const paperWorks: TimelineWork[] = papers
    .filter((p) => p.year === year)
    .map((p) => ({
      key: `paper-${p.id}`,
      kind: 'Paper',
      title: p.title,
      detail: p.code,
      href: '/research',
    }));

  return [...projectWorks, ...paperWorks];
}

export default function Timeline() {
  // Every year that has any work (projects or papers), chronological order
  const years = [...new Set([...projects, ...papers].map((w) => w.year))].sort(
    (a, b) => a - b
  );

  return (
    <section className="section-py bg-background border-t border-border-subtle overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="caption text-primary">Timeline</span>
          <h2 className="heading-lg mt-4">Project Years</h2>
          <div className="w-16 h-px bg-primary mt-6 mx-auto" />
          <p className="body-md text-muted-foreground mt-6 max-w-xl mx-auto">
            Built work and written research, mapped year by year.
          </p>
        </motion.div>

        {/* Centered year cards */}
        <div className="flex flex-wrap items-start justify-center gap-5 md:gap-8 mt-14 md:mt-20">
          {years.map((year, index) => {
            const works = worksForYear(year);

            return (
              <motion.article
                key={year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group w-full sm:w-[340px] md:w-[380px] bg-card border border-border-subtle"
              >
                {/* Cover */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={covers[index % covers.length]}
                    alt={`${year} — selected work`}
                    className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <span className="absolute bottom-4 left-6 font-heading text-5xl md:text-6xl font-light tracking-tighter text-foreground pointer-events-none">
                    {year}
                  </span>
                  <span className="absolute top-4 right-5 caption text-muted-foreground">
                    {works.length} {works.length === 1 ? 'work' : 'works'}
                  </span>
                </div>

                {/* Works of the year */}
                <div className="p-6">
                  {works.map((work) => (
                    <Link
                      key={work.key}
                      to={work.href}
                      className="group/item block py-4 border-t border-border-subtle first:border-t-0 first:pt-1 focus-ring"
                      aria-label={`View ${work.title}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="caption text-primary">{work.kind}</span>
                        <span className="caption text-muted-foreground">{work.detail}</span>
                      </div>
                      <h3 className="font-heading text-base text-foreground mt-2 flex items-start gap-1.5 transition-colors group-hover/item:text-primary">
                        <span className="line-clamp-2">{work.title}</span>
                        <ArrowUpRight
                          size={15}
                          className="mt-0.5 flex-shrink-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                        />
                      </h3>
                    </Link>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
