import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

interface Sketch {
  id: string;
  title: string;
  medium: string;
  image: string;
}

const sketches: Sketch[] = [
  { id: '1', title: 'Research Centre — Concept Sketch', medium: 'Graphite on trace', image: project1 },
  { id: '2', title: 'Bodega — Section Detail', medium: 'Ink on vellum', image: project2 },
  { id: '3', title: 'Hospital — Structural Detail', medium: 'Technical pen, 0.3mm', image: project3 },
  { id: '4', title: 'Wall Section — Earth Block Construction', medium: 'Pencil & watercolour', image: project4 },
  { id: '5', title: 'Canopy Joint — Grand Iftar', medium: 'Ink on Kraft paper', image: project5 },
  { id: '6', title: 'Foundation Detail — Laterite Base', medium: 'Graphite, 1:5 scale', image: project6 },
];

export default function Sketches() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = sketches.map((s) => s.image);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="caption text-primary">Craft</span>
              <h1 className="heading-lg mt-4">Sketches & Tech. Drawing</h1>
              <div className="w-16 h-px bg-primary mt-6" />
              <p className="body-md text-muted-foreground mt-8 max-w-2xl">
                The hand as instrument of thought—freehand sketches, construction details, 
                and technical drawings that trace the evolution of an idea.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sketches Grid */}
        <section className="pb-32 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {sketches.map((sketch, index) => (
                <motion.button
                  key={sketch.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  className="group text-left focus-ring cursor-pointer"
                  aria-label={`View ${sketch.title}`}
                >
                  <div className="image-container aspect-[4/3] border border-border-subtle">
                    <img
                      src={sketch.image}
                      alt={sketch.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-heading text-base text-foreground group-hover:text-primary transition-colors">
                      {sketch.title}
                    </h3>
                    <span className="caption text-muted-foreground">{sketch.medium}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Lightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
