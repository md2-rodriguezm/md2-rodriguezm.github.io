import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, ExternalLink, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import architectPortrait from '@/assets/architect-portrait.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const topProjects = [
  { id: 'research-centre', title: 'Research Centre', category: 'Institutional', image: project1 },
  { id: 'bodega', title: 'Bodega', category: 'Commercial', image: project2 },
  { id: 'hospital', title: 'Hospital', category: 'Healthcare', image: project3 },
];

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
  'Spanish (Native)', 'English (C2)', 'French (B1)', 'Arabic (A2)'
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
                <span className="caption text-primary">Portfolio — 2025</span>
                <h1 className="heading-lg mt-4 mb-4">Martina D. Rodríguez Marrero</h1>
                <p className="font-heading text-xl text-muted-foreground mb-8">
                  Architect · Researcher · M.Arch
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} className="text-primary" />
                    <span className="caption">Madrid, Spain</span>
                  </div>
                  <a
                    href="mailto:hello@marcuschen.arch"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={14} className="text-primary" />
                    <span className="caption">hello@marcuschen.arch</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={14} className="text-primary" />
                    <span className="caption">LinkedIn</span>
                  </a>
                </div>

                <p className="body-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                  Architect with 5+ years of professional experience across institutional,
                  commercial, and healthcare typologies. My practice integrates rigorous
                  technical resolution with a commitment to social responsibility and
                  cross-cultural collaboration. Seeking opportunities to contribute to
                  studios working at the intersection of design excellence and public impact.
                </p>

                {/* Download CTA */}
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors focus-ring">
                  <Download size={18} />
                  Download Full Portfolio
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Top Projects */}
        <section className="py-20 bg-background-deep border-t border-border-subtle">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="caption text-primary">Selected Work</span>
              <h2 className="heading-md mt-4">Top Projects</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/project/${project.id}`}
                    className="group block focus-ring"
                  >
                    <div className="image-container aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-3">
                      <span className="caption text-primary">{project.category}</span>
                      <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section className="py-20 bg-background border-t border-border-subtle">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase size={18} className="text-primary" />
                  <h2 className="font-heading text-xl uppercase tracking-widest">Experience</h2>
                </div>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l border-border-subtle pl-6">
                      <span className="caption text-primary block mb-1">{exp.period}</span>
                      <h3 className="font-heading text-lg text-foreground">{exp.role}</h3>
                      <p className="body-md text-muted-foreground">{exp.firm} — {exp.location}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap size={18} className="text-primary" />
                  <h2 className="font-heading text-xl uppercase tracking-widest">Education</h2>
                </div>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l border-border-subtle pl-6">
                      <span className="caption text-primary block mb-1">{edu.period}</span>
                      <h3 className="font-heading text-lg text-foreground">{edu.degree}</h3>
                      <p className="body-md text-muted-foreground">{edu.institution}</p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="mt-16">
                  <h2 className="font-heading text-xl uppercase tracking-widest mb-8">Skills & Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="caption px-4 py-2 border border-border text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
                Download the full portfolio or get in touch directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors focus-ring">
                  <Download size={18} />
                  Download Full Portfolio
                </button>
                <a
                  href="mailto:hello@marcuschen.arch"
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
