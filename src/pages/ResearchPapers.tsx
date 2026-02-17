import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Paper {
  id: string;
  code: string;
  title: string;
  type: string;
  year: number;
  institution: string;
  abstract: string;
}

const papers: Paper[] = [
  {
    id: 'tfg',
    code: 'TFG',
    title: 'Tectonics of Light: Material Strategies for Daylighting in Mediterranean Climates',
    type: 'Bachelor\'s Thesis',
    year: 2019,
    institution: 'ETSAM — Universidad Politécnica de Madrid',
    abstract: 'An investigation into how traditional Mediterranean construction techniques can inform contemporary daylighting strategies, analysing the interplay between thermal mass, aperture geometry, and interior luminance distribution.'
  },
  {
    id: 'tfm',
    code: 'TFM',
    title: 'Adaptive Reuse as Urban Catalyst: Post-Industrial Heritage in the Iberian Peninsula',
    type: 'Master\'s Thesis',
    year: 2021,
    institution: 'ETSAB — Universitat Politècnica de Catalunya',
    abstract: 'A comparative study of adaptive reuse strategies across six post-industrial sites in Spain and Portugal, proposing a framework for evaluating social, economic, and spatial outcomes of heritage conversion projects.'
  },
  {
    id: 'lta',
    code: 'LtA',
    title: 'Letters to Architecture: On the Ethics of Spatial Practice',
    type: 'Publication / Essay Collection',
    year: 2022,
    institution: 'Independent Publication',
    abstract: 'A series of critical essays examining the ethical responsibilities of architects in contexts of inequality, displacement, and climate crisis. Published independently and presented at the Venice Architecture Biennale fringe programme.'
  },
  {
    id: 'acs',
    code: 'ACS',
    title: 'Autonomous Construction Systems: Earth-Based 3D Printing for Emergency Shelter',
    type: 'Research Paper',
    year: 2023,
    institution: 'AA Visiting School — London',
    abstract: 'Technical research into robotic earth-based additive manufacturing for rapid deployment of emergency shelters. The paper documents material testing, structural analysis, and a pilot build conducted in collaboration with humanitarian organisations.'
  },
];

export default function ResearchPapers() {
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
              <span className="caption text-primary">Archive</span>
              <h1 className="heading-lg mt-4">Research & Papers</h1>
              <div className="w-16 h-px bg-primary mt-6" />
              <p className="body-md text-muted-foreground mt-8 max-w-2xl">
                Academic work, theoretical investigations, and published writings that inform and extend the architectural practice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Papers List */}
        <section className="pb-32 bg-background">
          <div className="section-container">
            <div className="space-y-0">
              {papers.map((paper, index) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border-t border-border-subtle py-10 first:border-t-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                    {/* Code */}
                    <div className="lg:col-span-1">
                      <span className="font-heading text-2xl text-primary">{paper.code}</span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8">
                      <span className="caption block mb-2">{paper.type} — {paper.year}</span>
                      <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                        {paper.title}
                      </h2>
                      <p className="caption text-muted-foreground mb-4">{paper.institution}</p>
                      <p className="body-md text-muted-foreground leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-3 flex lg:flex-col lg:items-end gap-4">
                      <button className="flex items-center gap-3 px-5 py-3 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors focus-ring">
                        <ExternalLink size={16} />
                        <span className="caption">Read</span>
                      </button>
                      <button className="flex items-center gap-3 px-5 py-3 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors focus-ring">
                        <Download size={16} />
                        <span className="caption">PDF</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
