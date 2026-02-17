import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

interface JournalEntry {
  id: string;
  title: string;
  location: string;
  year: string;
  collaborators: string;
  image: string;
  entries: { date: string; text: string }[];
}

const journalEntries: JournalEntry[] = [
  {
    id: 'the-gambia',
    title: 'The Gambia — Community School Build',
    location: 'Brikama, The Gambia',
    year: '2021–2022',
    collaborators: 'ASF España, Local Masons Guild',
    image: project4,
    entries: [
      {
        date: 'Day 01 — Arrival',
        text: 'Landed in Banjul at dusk. The humidity hit immediately. Met Amadou, the village liaison, who drove us three hours inland to Brikama. The site is a cleared plot behind the existing primary school—red laterite earth, mango trees marking the boundary.'
      },
      {
        date: 'Day 14 — Foundations',
        text: 'The compressed earth blocks are curing well. We adapted the mix ratio after soil testing revealed higher clay content than expected. The masons taught us their bonding pattern—more efficient than what we had drawn. The design evolved on site.'
      },
      {
        date: 'Day 42 — Handover',
        text: 'The school was inaugurated today with a ceremony that involved the entire village. Three classrooms, a covered courtyard, and rainwater collection. The children sang. Architecture disappeared into use—exactly as it should.'
      },
    ],
  },
  {
    id: 'grand-iftar',
    title: 'Grand Iftar — Public Space Activation',
    location: 'Lavapiés, Madrid',
    year: '2022',
    collaborators: 'Casa Árabe, Collective MUR',
    image: project5,
    entries: [
      {
        date: 'Concept',
        text: 'The Grand Iftar project transforms a public square during Ramadan into a shared dining space for 300 people. The intervention is deliberately temporary—a long table, fabric canopies, and lighting designed to create intimacy at urban scale.'
      },
      {
        date: 'Build Week',
        text: 'Volunteers from twelve different cultural associations assembled the structure over five days. The modular timber frame system we designed allowed non-specialists to build without power tools. Every joint is a wedge connection.'
      },
      {
        date: 'The Evening',
        text: 'Three hundred strangers sat together at sundown. The canopy softened the hard plaza into something resembling a room. Conversations crossed languages. The architecture was the table and the light—nothing more was needed.'
      },
    ],
  },
  {
    id: 'mur',
    title: 'MUR — Urban Research Collective',
    location: 'Various, Spain & Morocco',
    year: '2020–Present',
    collaborators: 'MUR Collective (co-founder)',
    image: project6,
    entries: [
      {
        date: 'Origins',
        text: 'MUR began as a reading group in the final year of architecture school—five students frustrated by the distance between academic discourse and the built reality of our neighbourhoods. We started mapping vacancy in Madrid\'s historic centre.'
      },
      {
        date: 'Methodology',
        text: 'Our process: walk, map, talk, draw, build. Each project begins with weeks of fieldwork before a single line is drawn. We document through photography, interviews, and hand-drawn surveys. The drawings become the project brief.'
      },
      {
        date: 'Current Work',
        text: 'We are currently working on a cross-border study of informal market architectures in northern Morocco and southern Spain—how commerce shapes space without architects, and what we can learn from those spatial logics.'
      },
    ],
  },
];

export default function CrossCultural() {
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
              <span className="caption text-primary">Field Notes</span>
              <h1 className="heading-lg mt-4">Cross-Cultural Collaboration</h1>
              <div className="w-16 h-px bg-primary mt-6" />
              <p className="body-md text-muted-foreground mt-8 max-w-2xl">
                International projects, community builds, and social practice—architecture 
                as a tool for dialogue and exchange.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Journal Entries */}
        <section className="pb-32 bg-background">
          <div className="section-container">
            {journalEntries.map((entry, entryIndex) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-24 last:mb-0"
              >
                {/* Entry Header */}
                <div className="border-t border-border-subtle pt-10 mb-10">
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={14} className="text-primary" />
                      <span className="caption">{entry.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={14} className="text-primary" />
                      <span className="caption">{entry.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users size={14} className="text-primary" />
                      <span className="caption">{entry.collaborators}</span>
                    </div>
                  </div>
                  <h2 className="heading-md text-foreground">{entry.title}</h2>
                </div>

                {/* Image */}
                <div className="image-container aspect-[21/9] mb-12">
                  <img
                    src={entry.image}
                    alt={`${entry.title} — field documentation`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Log Entries */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {entry.entries.map((log, logIndex) => (
                    <motion.div
                      key={logIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: logIndex * 0.1 }}
                      className="border-l border-border-subtle pl-6"
                    >
                      <span className="caption text-primary block mb-3">{log.date}</span>
                      <p className="body-md text-muted-foreground leading-relaxed">{log.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
