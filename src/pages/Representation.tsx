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

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

const categories = ['All', '3D Renders', 'Physical Models', 'Diagrams'];

const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Research Centre — Exterior Render', category: '3D Renders', image: project1, aspect: 'aspect-[4/3]' },
  { id: '2', title: 'Bodega — Section Model 1:100', category: 'Physical Models', image: project2, aspect: 'aspect-[3/4]' },
  { id: '3', title: 'Hospital — Aerial Perspective', category: '3D Renders', image: project3, aspect: 'aspect-[16/9]' },
  { id: '4', title: 'Community School — Site Diagram', category: 'Diagrams', image: project4, aspect: 'aspect-[4/3]' },
  { id: '5', title: 'Bodega — Interior Render', category: '3D Renders', image: project5, aspect: 'aspect-[3/4]' },
  { id: '6', title: 'Research Centre — Concept Model', category: 'Physical Models', image: project6, aspect: 'aspect-[4/3]' },
];

export default function Representation() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const allImages = filtered.map((item) => item.image);

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
              <span className="caption text-primary">Technical</span>
              <h1 className="heading-lg mt-4">Representation & Modelling</h1>
              <div className="w-16 h-px bg-primary mt-6" />
              <p className="body-md text-muted-foreground mt-8 max-w-2xl">
                3D visualisations, physical scale models, and analytical diagrams—the tools 
                through which architectural ideas are tested and communicated.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="pb-8 bg-background">
          <div className="section-container">
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`caption px-5 py-2 border transition-colors focus-ring ${
                    activeCategory === cat
                      ? 'border-primary text-primary'
                      : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-32 bg-background">
          <div className="section-container">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
              {filtered.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  className="block w-full mb-4 md:mb-6 group cursor-pointer focus-ring break-inside-avoid"
                  aria-label={`View ${item.title}`}
                >
                  <div className={`image-container ${item.aspect}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-2 text-left">
                    <span className="caption text-muted-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
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
