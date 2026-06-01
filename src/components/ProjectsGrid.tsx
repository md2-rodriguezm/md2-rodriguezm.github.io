import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsGrid() {
  // Newest projects first (descending by year)
  const ordered = [...projects].sort((a, b) => b.year - a.year);

  return (
    <section id="projects" className="pb-32 bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ordered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
