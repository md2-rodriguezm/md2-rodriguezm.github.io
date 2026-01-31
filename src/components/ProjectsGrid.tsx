import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section-py bg-background">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="caption text-primary">Portfolio</span>
          <h2 className="heading-lg mt-4">Selected Works</h2>
          <div className="w-16 h-px bg-primary mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
