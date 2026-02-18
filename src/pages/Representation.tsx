import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

// Modelling
import m1 from '@/assets/representation/modelling/experimental-model-label-template.png';
import m2 from '@/assets/representation/modelling/model-bano-publico.jpg';
import m3 from '@/assets/representation/modelling/sculpture.jpeg';
import m4 from '@/assets/representation/modelling/img-7595.jpg';

// Paint
import p1 from '@/assets/representation/paint/canary-marine-fish-stamps.png';
import p2 from '@/assets/representation/paint/img-4868.jpg';
import p3 from '@/assets/representation/paint/pie-piano.jpg';
import p4 from '@/assets/representation/paint/paco-beige.png';
import p5 from '@/assets/representation/paint/dialectic-drawing-label-template.png';
import p6 from '@/assets/representation/paint/cisma.png';

// Technical Drawing
import t1 from '@/assets/representation/technical-drawing/img-0788.jpg';
import t2 from '@/assets/representation/technical-drawing/playing-with-perspective-color.jpg';
import t3 from '@/assets/representation/technical-drawing/section-bb.png';
import t4 from '@/assets/representation/technical-drawing/skm-364e20022714240.jpg';
import t5 from '@/assets/representation/technical-drawing/persp-arm.png';
import t6 from '@/assets/representation/technical-drawing/962dc66b-9d59-4b98-9141-930a984a976a.jpg';
import t7 from '@/assets/representation/technical-drawing/img-7650.jpg';
import t8 from '@/assets/representation/technical-drawing/p4.png';

// Expo
import expo from '@/assets/representation/element-a-expo.png';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

const galleryItems: GalleryItem[] = [
  // Modelling
  { id: 'm1', title: 'Experimental Model', category: 'Physical Models', image: m1, aspect: 'aspect-[4/3]' },
  { id: 'm2', title: 'Public Bath Model', category: 'Physical Models', image: m2, aspect: 'aspect-[3/4]' },
  { id: 'm3', title: 'Sculptural Form', category: 'Physical Models', image: m3, aspect: 'aspect-[3/4]' },
  { id: 'm4', title: 'Model Detail', category: 'Physical Models', image: m4, aspect: 'aspect-[4/3]' },

  // Paint
  { id: 'p1', title: 'Canary Marine Life', category: 'Paintings', image: p1, aspect: 'aspect-[4/3]' },
  { id: 'p2', title: 'Abstract Composition', category: 'Paintings', image: p2, aspect: 'aspect-[3/4]' },
  { id: 'p3', title: 'Piano Study', category: 'Paintings', image: p3, aspect: 'aspect-[4/3]' },
  { id: 'p4', title: 'Beige Composition', category: 'Paintings', image: p4, aspect: 'aspect-[3/4]' },
  { id: 'p5', title: 'Dialectic Drawing', category: 'Paintings', image: p5, aspect: 'aspect-[4/3]' },
  { id: 'p6', title: 'Cisma', category: 'Paintings', image: p6, aspect: 'aspect-[4/3]' },

  // Technical
  { id: 't1', title: 'Technical Draft I', category: 'Technical Drawings', image: t1, aspect: 'aspect-[4/3]' },
  { id: 't2', title: 'Perspective Study', category: 'Technical Drawings', image: t2, aspect: 'aspect-[4/3]' },
  { id: 't3', title: 'Section BB', category: 'Technical Drawings', image: t3, aspect: 'aspect-[16/9]' },
  { id: 't4', title: 'Detail Sketch', category: 'Technical Drawings', image: t4, aspect: 'aspect-[4/3]' },
  { id: 't5', title: 'Armature Perspective', category: 'Technical Drawings', image: t5, aspect: 'aspect-[4/3]' },
  { id: 't6', title: 'Technical Drawing II', category: 'Technical Drawings', image: t6, aspect: 'aspect-[3/4]' },
  { id: 't7', title: 'Technical Drawing III', category: 'Technical Drawings', image: t7, aspect: 'aspect-[3/4]' },
  { id: 't8', title: 'Structure Perspective', category: 'Technical Drawings', image: t8, aspect: 'aspect-[3/4]' },

  // Expo
  { id: 'e1', title: 'Exhibition Element', category: 'Physical Models', image: expo, aspect: 'aspect-[4/3]' },
];

const categories = ['All', 'Physical Models', 'Paintings', 'Technical Drawings'];

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
                  className={`caption px-5 py-2 border transition-colors focus-ring ${activeCategory === cat
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
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
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
