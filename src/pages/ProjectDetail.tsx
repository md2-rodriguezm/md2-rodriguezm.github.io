import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh]">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={`${project.title} - ${project.category} architecture project in ${project.location}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 section-container pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="caption text-primary">{project.subtitle}</span>
              <h1 className="heading-xl mt-4">{project.title}</h1>
              <p className="body-lg text-muted-foreground mt-4">{project.location}</p>
            </motion.div>
          </div>
        </section>

        {/* Project Info */}
        <section className="section-py bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="heading-md mb-8">About the Project</h2>
                <div className="space-y-6">
                  {project.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="body-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <span className="caption text-primary">Year</span>
                  <p className="body-md mt-2">{project.year}</p>
                </div>
                <div>
                  <span className="caption text-primary">Location</span>
                  <p className="body-md mt-2">{project.location}</p>
                </div>
                <div>
                  <span className="caption text-primary">Area</span>
                  <p className="body-md mt-2">{project.details.area}</p>
                </div>
                <div>
                  <span className="caption text-primary">Client</span>
                  <p className="body-md mt-2">{project.details.client}</p>
                </div>
                <div>
                  <span className="caption text-primary">Status</span>
                  <p className="body-md mt-2">{project.details.status}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video */}
        {project.videoUrl && (
          <section className="section-py bg-background border-t border-border-subtle">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="caption text-primary">Video</span>
                <h2 className="heading-md mt-4">Project Presentation</h2>
              </motion.div>
              <div className="relative w-full aspect-video border border-border-subtle overflow-hidden">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} — Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        <section className="section-py bg-background-deep border-t border-border-subtle">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="caption text-primary">Gallery</span>
              <h2 className="heading-md mt-4">Project Images</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.gallery.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => openLightbox(index)}
                  className={`image-container aspect-[4/3] focus-ring cursor-pointer ${index === 0 ? 'md:col-span-2 md:aspect-[16/9]' : ''
                    }`}
                  aria-label={`View image ${index + 1} in fullscreen`}
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation to Other Projects */}
        <section className="py-16 bg-background border-t border-border-subtle">
          <div className="section-container">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
              {prevProject ? (
                <Link
                  to={`/project/${prevProject.id}`}
                  className="flex-1 group p-6 border border-border hover:border-primary transition-colors focus-ring"
                >
                  <div className="flex items-center gap-3 text-muted-foreground group-hover:text-primary transition-colors">
                    <ArrowLeft size={20} />
                    <span className="caption">Previous Project</span>
                  </div>
                  <h3 className="font-heading text-xl mt-3 group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </h3>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              <Link
                to="/#projects"
                className="flex items-center justify-center px-8 py-4 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors focus-ring"
              >
                <span className="caption">All Projects</span>
              </Link>

              {nextProject ? (
                <Link
                  to={`/project/${nextProject.id}`}
                  className="flex-1 group p-6 border border-border hover:border-primary transition-colors text-right focus-ring"
                >
                  <div className="flex items-center justify-end gap-3 text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="caption">Next Project</span>
                    <ArrowRight size={20} />
                  </div>
                  <h3 className="font-heading text-xl mt-3 group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </h3>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Lightbox
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
