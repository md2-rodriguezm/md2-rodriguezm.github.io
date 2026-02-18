import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

// The Gambia images
import gambia1 from '@/assets/cross-cultural/the-gambia/gambia.png';
import gambia2 from '@/assets/cross-cultural/the-gambia/img-0950.jpg';
import gambia3 from '@/assets/cross-cultural/the-gambia/59dd8ba2-4d07-4b8b-b70f-b7ccd2fff192.jpg';
import gambia4 from '@/assets/cross-cultural/the-gambia/8d9abe02-c509-4602-9a19-8ac0950aa31a.jpg';
import gambia5 from '@/assets/cross-cultural/the-gambia/c194f246-0768-49ee-8396-f9fa667a7376.jpg';

// Grand Iftar image
import iftarImg from '@/assets/cross-cultural/st-marks-rd-and-community/community-grand-iftar.jpg';

// MUN images
import mun1 from '@/assets/cross-cultural/mun/img-2525.jpg';
import mun2 from '@/assets/cross-cultural/mun/escaner-pc1-21-20191129-145924.jpg';

interface JournalEntry {
  id: string;
  title: string;
  location: string;
  year: string;
  collaborators: string;
  image: string;
  gallery: string[];
  description: string;
}

const journalEntries: JournalEntry[] = [
  {
    id: 'the-gambia',
    title: 'The Gambia — Daughters of Africa NGO',
    location: 'Abuko, The Gambia',
    year: '2024/2025',
    collaborators: 'Daughters of Africa NGO, USET',
    image: gambia1,
    gallery: [gambia1, gambia2, gambia3, gambia4, gambia5],
    description: 'For the Daigo 9 Project, my team worked with the Daughters of Africa NGO to achieve eco-tourism projects for the Abuko Wild-Life Park in the Gambia. Collaborating with Gambian students from the University of Science Engineering and Technology (USET) helped us finalise plans and construct the bird hides within a 2 week time frame, using local material, such as raphia fibre. I had the opportunity to organise and lead an architecture course on perspective and spatial awareness at St. Peter\'s Technical Junior and Senior School in Lamin, where we learned to appreciate different points of view and adjust our original cultural and environmental aims.\n\nCollaborative decisionmaking with the NGO enhanced local ownership and efficiency. As Godfrey (1996) notes, "there are considerable differences between truly international work and performing work at home for a foreign location," highlighting the importance of respecting local contexts. These efforts embodied the UWE 2030 strategy as a "catalyst for social change," linking expertise with communities to create sustainable solutions. The project demonstrated all RIBA stages, up to the in-use phase. Stakeholders saw our ideas reflected in the final outcomes, fostering trust and a sense of ownership.',
  },
  {
    id: 'grand-iftar',
    title: 'The Grand Iftar in St. Marks Road, Bristol',
    location: 'Easton, Bristol',
    year: '2024/2025',
    collaborators: 'Bristol Sweetmart, Bhogal\'s, Gulzar\'s',
    image: iftarImg,
    gallery: [iftarImg],
    description: 'The Grand Iftar is an event that Bristol has been hosting for the last few years during the month of Ramadan. The event takes place on St Marks Road in Easton, Bristol.\n\nThe event encourages all ethnicities and backgrounds to join muslims in breaking their fast. It also invites people to join in and fast and get the whole experience.\n\nThe Grand Iftar is very special as the whole road has an involvement in putting the event together, the local restaurants help with providing the food and decorations.\n\nWe, students of Masters of Architecture were tasked with designing a roof/shelter to cover St Marks Road. Ramadan moves back by around 10 days every year meaning the weather will be getting colder as we head into winter. The roof will protect the event taking place and shelter the attendees from harsh weather conditions.',
  },
  {
    id: 'mun',
    title: 'Model United Nations (THIMUN)',
    location: 'The Hague, Netherlands',
    year: 'Jan 2018, 2019 & 2020',
    collaborators: 'THIMUN, MUNITY Press Team',
    image: mun1,
    gallery: [mun1, mun2],
    description: 'In THIMUN, I had the opportunity to be a delegate representing Australia and Cape Verde in the Economic and Social Council, focusing on the issue of "Encouraging the Private Sector to Invest in Developing Educational Tools and Facilities."\n\nI was also an artist in the MUNITY Press Team, where I illustrated global issues fostering political, economic and social growth.\n\n"Human impact, environmental change, global warming crisis, poverty, the great diminishment of the wilderness! These don\'t even comprise 50% of the potential disasters we create. Miracles, the \'I\'ll do this tomorrow\'... don\'t exist any more. This must be done today. Hence, this is one of the most, if not the most important thing you may have on your \'to do\' lists.\n\nLet\'s open our eyes, let\'s be aware of our harmful situation and let\'s contribute to our planet which needs us as much as it needs the brightness of the sun."',
  },
];

export default function CrossCultural() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
            {journalEntries.map((entry) => (
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

                {/* Main Image */}
                <button
                  onClick={() => openLightbox(entry.gallery, 0)}
                  className="w-full image-container aspect-[21/9] mb-8 cursor-pointer focus-ring"
                  aria-label={`View ${entry.title} gallery`}
                >
                  <img
                    src={entry.image}
                    alt={`${entry.title} — field documentation`}
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Gallery Thumbnails */}
                {entry.gallery.length > 1 && (
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-12">
                    {entry.gallery.slice(1).map((img, i) => (
                      <button
                        key={i}
                        onClick={() => openLightbox(entry.gallery, i + 1)}
                        className="image-container aspect-square cursor-pointer focus-ring border border-border-subtle"
                        aria-label={`View image ${i + 2}`}
                      >
                        <img
                          src={img}
                          alt={`${entry.title} gallery ${i + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="max-w-3xl space-y-4">
                  {entry.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="body-md text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
