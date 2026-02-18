import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, ExternalLink, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import architectPortrait from '@/assets/fotito.jpg';


const experience = [
  { period: '2022 – Present', role: 'Project Architect', firm: 'Independent Practice', location: 'Madrid' },
  { period: '2020 – 2022', role: 'Junior Architect', firm: 'Estudio Herreros', location: 'Madrid' },
  { period: '2019 – 2020', role: 'Architectural Intern', firm: 'David Chipperfield Architects', location: 'Berlin' },
];

const education = [
  { period: '2019 – 2021', degree: 'MArch — Master in Architecture', institution: 'ETSAB, UPC Barcelona' },
  { period: '2014 – 2019', degree: 'BArch — Bachelor in Architecture', institution: 'ETSAM, UPM Madrid' },
];

const skills = [
  'AutoCAD', 'Revit', 'Rhinoceros', 'Grasshopper', 'V-Ray',
  'Adobe Suite', 'Blender', 'ArchiCAD', 'SketchUp', 'Hand Drawing',
  'Spanish (Native)', 'English (C1)', 'French (C1)'
];

export default function JobApplication() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Portrait */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                <div className="image-container aspect-[3/4]">
                  <img
                    src={architectPortrait}
                    alt="Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Executive Summary */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-8"
              >
                <span className="caption text-primary">Portfolio</span>
                <h1 className="heading-lg mt-4 mb-4">Martina D. Rodríguez Marrero</h1>
                <p className="font-heading text-xl text-muted-foreground mb-8">
                  Architect · Researcher · M.Arch
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} className="text-primary" />
                    <span className="caption">Las Palmas de Gran Canaria, Spain</span>
                  </div>
                  <a
                    href="mailto:martina.rguezmarrero@gmail.com "
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={14} className="text-primary" />
                    <span className="caption">martina.rguezmarrero@gmail.com </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/martina-drm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={14} className="text-primary" />
                    <span className="caption">LinkedIn</span>
                  </a>
                </div>

                <p className="body-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                  Architectural designer with six years of experience training in specializing in high-performance infrastructure rooted in local responsiveness and efficiency. My approach conveys computational methods that emerge from a preliminary understanding of spatial adaptability informed by data-driven design processes.Beyond the technical, I am passionate about wellbeing and motion, where reflecting on architectural sequences as time-lapse episodes, such as the pause at a glass corner where one can anticipate views, embodies sensing the vitality of the built environment. Driven by the belief that attention to human experience has strengthened my cross-cultural communication skills through international collaboration, I am willing to contribute to an architectural practice that balances performative rigor with expressive clarity.
                </p>


              </motion.div>
            </div>
          </div>
        </section>

        {/* Top Projects */}





        {/* Bottom CTA */}
        <section className="py-20 bg-background-deep border-t border-border-subtle">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">Interested in working together?</h2>
              <p className="body-md text-muted-foreground mb-10 max-w-lg mx-auto">
                I'm open to studio positions, collaborations, and freelance commissions.
                Download the full portfolio or CV, or get in touch directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}MDRM_Portfolio.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors focus-ring"
                >
                  <Download size={18} />
                  Download Portfolio
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Martina_D_Rodriguez_Marrero_CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-heading uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
                >
                  <Download size={18} />
                  Download CV
                </a>
                <a
                  href="mailto:martina.rguezmarrero@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-heading uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors focus-ring"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
