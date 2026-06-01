import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, ExternalLink, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import architectPortrait from '@/assets/fotito.jpg';


const experience = [
  { period: '2022 – Present', role: 'Project Architect', firm: 'Independent Practice', location: 'Madrid' },
  { period: '2020 – 2022', role: 'Junior Architect', firm: 'Estudio Herreros', location: 'Madrid' },
  { period: '2019 – 2020', role: 'Architectural Intern', firm: 'David Chipperfield Architects', location: 'Berlin' },
];

const education = [
  { period: '2019 – 2021', degree: 'MArch — Master in Architecture', institution: 'University of the West of England (UWE), Bristol' },
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

        {/* Contact CTA */}
        <ContactCTA />

      </main>
      <Footer />
    </>
  );
}
