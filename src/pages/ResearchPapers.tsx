import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { papers } from '@/data/papers';

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
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
