import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import img1 from '@/assets/sketches/10fc248a-f141-476f-b51d-4157046c0b26.jpg';
import img2 from '@/assets/sketches/escaner-20240509-6.png';
import img3 from '@/assets/sketches/sketching.jpg';
import img4 from '@/assets/sketches/spatial-iterations-1.jpg';
import img5 from '@/assets/sketches/spatial-iterations-2.jpg';
import img6 from '@/assets/sketches/untitled-5.jpg';
import img7 from '@/assets/sketches/sketches.jpg';
import img8 from '@/assets/sketches/sketchiing.jpg';
import img9 from '@/assets/sketches/faltaba-1.jpeg';
import img10 from '@/assets/sketches/faltaba-2.jpeg';

// Newly extracted sketches
import sketchImg11 from '@/assets/sketches/IMG_6475.jpeg';
import sketchImg12 from '@/assets/sketches/LANDSCAPING.JPG';
import sketchImg13 from '@/assets/sketches/PLANS.JPG';
import sketchImg14 from '@/assets/sketches/QQ.jpg';
import sketchImg15 from '@/assets/sketches/SECT.jpg';
import sketchImg16 from '@/assets/sketches/sketch initial.png';
import sketchImg17 from '@/assets/sketches/SKETCH SOA.jpeg';
import sketchImg18 from '@/assets/sketches/SOA sketch.jpeg';
import sketchImg19 from '@/assets/sketches/WW.jpg';
import sketchImg20 from '@/assets/sketches/img-9033.jpg';
import sketchImg21 from '@/assets/sketches/img-2705.jpg';

interface Sketch {
  id: string;
  title: string;
  medium: string;
  image: string;
}

const sketches: Sketch[] = [
  { id: '1', title: 'Spatial Iteration I', medium: 'Process Sketch', image: img4 },
  { id: '2', title: 'Spatial Iteration II', medium: 'Process Sketch', image: img5 },
  { id: '3', title: 'Architectural Detail', medium: 'Technical Drawing', image: img2 },
  { id: '4', title: 'Structural Concept', medium: 'Digital Sketch', image: img6 },
  { id: '5', title: 'Form Study', medium: 'Hand Sketch', image: img1 },
  { id: '6', title: 'Sketching Process', medium: 'Photography', image: img3 },
  { id: '7', title: 'Design Development', medium: 'Mixed Media', image: img7 },
  { id: '8', title: 'Studio Work', medium: 'Photography', image: img8 },
  { id: '9', title: 'Conceptual Study I', medium: 'Hand Sketch', image: img9 },
  { id: '10', title: 'Conceptual Study II', medium: 'Hand Sketch', image: img10 },
  { id: '11', title: 'Conceptual Study III', medium: 'Hand Sketch', image: sketchImg11 },
  { id: '12', title: 'Landscaping Concept', medium: 'Hand Sketch', image: sketchImg12 },
  { id: '13', title: 'Plan Details', medium: 'Technical Drawing', image: sketchImg13 },
  { id: '14', title: 'Conceptual Perspective', medium: 'Process Sketch', image: sketchImg14 },
  { id: '15', title: 'Sectional Study', medium: 'Technical Drawing', image: sketchImg15 },
  { id: '16', title: 'Initial Concept Study', medium: 'Freehand Sketch', image: sketchImg16 },
  { id: '17', title: 'SOA Spatial Study', medium: 'Process Sketch', image: sketchImg17 },
  { id: '18', title: 'SOA Structural Concept', medium: 'Process Sketch', image: sketchImg18 },
  { id: '19', title: 'Elevation Study', medium: 'Technical Drawing', image: sketchImg19 },
  { id: '20', title: 'Form Iteration Study', medium: 'Hand Sketch', image: sketchImg20 },
  { id: '21', title: 'Site Planning Study', medium: 'Process Sketch', image: sketchImg21 },
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
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        <ContactCTA />
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
