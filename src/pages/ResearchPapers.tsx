import { motion } from 'framer-motion';
import { FileText, Download, Play } from 'lucide-react';
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
  videoUrl?: string;
  pdfUrl?: string;
}

const papers: Paper[] = [
  {
    id: 'tfm',
    code: 'TFM',
    title: '[Re]mediating Diagnosis. A Study of Alexandria\'s Coastal Deteriorated Façades',
    type: 'Master\'s Research',
    year: 2025,
    institution: 'University of the West of England (UWE)',
    abstract: 'Coastal façade deterioration manifests through thermal shifts, structural fatigue and salt erosion, gradually revealed by human and environmental forces. Human intelligence is capable of decoding this matter through the use of accessible tools to inform interventions across the façade lifecycle and apply in future builds. Digital and remote strategies, such as Google Street View, Photoshop effects, hand-drawn segmentation and computational methods like Grasshopper enable scalable anticipations and remediation without on-site risks. This bridges human insight with machine learning, providing a robust method of meditating techniques that dismantle our curiosity. With this, we are able to record decay patterns to come up with new installations alongside training AI for first-stage empirical diagnosis.',
    videoUrl: 'https://www.youtube.com/embed/jzNC-FK5D-8',
    pdfUrl: 'https://drive.google.com/file/d/1SDmZ6Xgtsv3v9ekDUaXrZz1ZaVPQWjj8/view?usp=sharing'
  },
  {
    id: 'tfg',
    code: 'TFG',
    title: 'Orchestrating Architecture and Acoustics: Exploring Sound Dynamics in Performance Venues',
    type: 'Bachelor\'s Dissertation',
    year: 2024,
    institution: 'University of the West of England (UWE)',
    abstract: 'Creating a conceptual performance venue, perhaps flexible or adaptable, must follow practical guidelines and design solutions by applying tools associated with acoustics, natural lighting, thermal satisfaction, air quality and energy efficiency. This thesis will focus on integrating the auditory dimension into an architect\'s design process and emphasise absorbent materials to satisfy human perception. The method to tackle this has been to examine a prominent case study and influential theory that will justify the creation of an architecture that better resonates with users and prioritises human elements.',
    pdfUrl: 'https://drive.google.com/file/d/1vYaxAZi8slfeIW7JKUUmqqk1AJRzLydi/view?usp=sharing'
  },
  {
    id: 'lta',
    code: 'LtA',
    title: 'Computational Project. Testing Evolutive Structures and CFD Wind Tunnel Testing.',
    type: 'Logic to Artefact',
    year: 2025,
    institution: 'University of the West of England (UWE)',
    abstract: 'This project explores computational strategies in evolutive structures and shape optimisation, prioritising wind analysis to develop a parametric shelter. Computational Fluid Dynamics (CFD) is a primary consideration that enables a cohesive environmental analysis for the efficiency and performance of the devised pavilion. Previous knowledge and inspiration leads to the concept development. The Geria, a vernacular agricultural system, and the Möbius strip inform the evolution of the design, or artefact, to make it a suitable pavilion for 1-3 users. Supporting theoretical documentation and experimental data on evolutive structures and CFD is applied to ensure the validity of the artefact throughout the logic process. Several massing and structural iterations eventually converge into the final proposal. Rhino and Grasshopper Software are used to generate relevant coding, definitions and algorithms towards the projection of a solution. A breakdown of each respective system will be provided.',
    pdfUrl: 'https://drive.google.com/file/d/1w2tLCHd9aLNV5GjnPkQzjI1SiPdeeIPJ/view?usp=sharing'
  },
  {
    id: 'acs',
    code: 'ACS',
    title: 'The Interior Heard',
    type: 'Advanced Cultural Studies',
    year: 2025,
    institution: 'University of the West of England (UWE)',
    abstract: 'In the built environment, not all boundaries are marked or visible. Many exist as subtle thresholds that guide our behaviour without signs. Architectural space often influences how we move and act, using quiet cues rather than explicit instructions. We sense these invisible lines instinctively. In my home living room, a grand piano sits within an open-plan space. Its lid, whether closed, half-open or fully raised, forms an unspoken boundary between private thought and public expression. No rule dictates its position, yet it carries meaning, from quiet reflection, to cautious sharing, to open performance. In this domestic setting, the piano becomes a hinge between interior feeling and outward presence.\n\nThis essay responds to the Module of Advanced Cultural Studies, and examines an interior threshold that is not officially marked but clearly felt. Through the piano lid\'s three positions, I explore a movement from inner immensity to public resonance, drawing on Gaston Bachelard\'s theory of intimate space. Alongside this, I reflect on cultural works by Sampha and Ramón Gener, both of whom frame the piano as a vessel of memory and identity. Accompanying this, I also look into the legacy of Arthur Rubinstein and how his trajectory as a renowned pianist helped him maintain these traits. In doing so, I show how a familiar object in a personal space can reveal deep, invisible boundaries that shape how we express ourselves and connect with others.',
    pdfUrl: 'https://drive.google.com/file/d/1GjHx1jHbxEyuZvkDWdCeC9W3My5fAEXK/view?usp=sharing'
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
                      <div className="space-y-4">
                        {paper.abstract.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="body-md text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Video Embed */}
                      {paper.videoUrl && (
                        <div className="mt-8">
                          <div className="relative w-full aspect-video border border-border-subtle overflow-hidden">
                            <iframe
                              src={paper.videoUrl}
                              title={`${paper.title} — Video`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-3 flex lg:flex-col lg:items-end gap-4">
                      {paper.pdfUrl ? (
                        <a
                          href={paper.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-5 py-3 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors focus-ring"
                        >
                          <Download size={16} />
                          <span className="caption">PDF</span>
                        </a>
                      ) : (
                        <button disabled className="flex items-center gap-3 px-5 py-3 border border-border text-muted-foreground/40 cursor-not-allowed">
                          <Download size={16} />
                          <span className="caption">PDF</span>
                        </button>
                      )}
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
