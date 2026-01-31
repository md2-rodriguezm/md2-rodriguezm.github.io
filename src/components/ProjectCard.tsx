import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block project-card focus-ring"
        aria-label={`View ${project.title} project`}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={`${project.title} - ${project.category} architecture in ${project.location}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="project-card-overlay flex flex-col justify-end p-6">
            <span className="caption text-primary mb-2">{project.category}</span>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.location}</p>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 border border-border">
            <span className="caption">{project.year}</span>
          </div>
        </div>

        {/* Info (visible on mobile/hover) */}
        <div className="mt-4 md:hidden">
          <span className="caption text-primary">{project.category}</span>
          <h3 className="font-heading text-xl mt-1">{project.title}</h3>
        </div>
      </Link>
    </motion.article>
  );
}
