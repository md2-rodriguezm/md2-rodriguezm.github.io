import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  location: string;
  description: string;
  image: string;
  gallery: string[];
  details: {
    area: string;
    client: string;
    status: string;
  };
}

export const projects: Project[] = [
  {
    id: 'zen-house',
    title: 'Zen House',
    category: 'Residential',
    year: 2024,
    location: 'Kyoto, Japan',
    description: 'A contemporary residence that harmonizes modern minimalism with traditional Japanese design principles. The structure features an open floor plan that seamlessly connects indoor and outdoor living spaces through floor-to-ceiling glass walls and a carefully curated zen garden.',
    image: project1,
    gallery: [project1, project1, project1],
    details: {
      area: '450 m²',
      client: 'Private',
      status: 'Completed'
    }
  },
  {
    id: 'gallery-of-light',
    title: 'Gallery of Light',
    category: 'Cultural',
    year: 2023,
    location: 'Copenhagen, Denmark',
    description: 'A contemporary art museum designed to maximize natural light through an innovative skylight system. The interior spaces are defined by pure white walls and polished concrete floors, creating a neutral backdrop that allows art to take center stage.',
    image: project2,
    gallery: [project2, project2, project2],
    details: {
      area: '3,200 m²',
      client: 'City of Copenhagen',
      status: 'Completed'
    }
  },
  {
    id: 'harbour-tower',
    title: 'Harbour Tower',
    category: 'Commercial',
    year: 2023,
    location: 'Vancouver, Canada',
    description: 'A 32-story mixed-use tower positioned at the waterfront, designed to maximize views while minimizing environmental impact. The glass curtain wall facade reflects the changing sky and water, making the building appear to dissolve into its surroundings.',
    image: project3,
    gallery: [project3, project3, project3],
    details: {
      area: '28,000 m²',
      client: 'Harbour Development Corp.',
      status: 'Completed'
    }
  },
  {
    id: 'chapel-of-silence',
    title: 'Chapel of Silence',
    category: 'Religious',
    year: 2022,
    location: 'Helsinki, Finland',
    description: 'A meditative space designed for contemplation and reflection. Inspired by Nordic traditions, the chapel uses raw concrete and natural light to create an atmosphere of profound serenity. A singular cross-shaped aperture channels light into the sacred space.',
    image: project4,
    gallery: [project4, project4, project4],
    details: {
      area: '180 m²',
      client: 'Lutheran Church of Finland',
      status: 'Completed'
    }
  },
  {
    id: 'vertical-garden-hq',
    title: 'Vertical Garden HQ',
    category: 'Commercial',
    year: 2022,
    location: 'Singapore',
    description: 'A biophilic office headquarters that integrates living walls and rooftop gardens throughout the structure. The building achieves net-zero energy consumption through a combination of solar panels, natural ventilation, and rainwater harvesting systems.',
    image: project5,
    gallery: [project5, project5, project5],
    details: {
      area: '12,500 m²',
      client: 'GreenTech Industries',
      status: 'Completed'
    }
  },
  {
    id: 'skyline-penthouse',
    title: 'Skyline Penthouse',
    category: 'Residential',
    year: 2021,
    location: 'New York, USA',
    description: 'A duplex penthouse spanning 6,000 square feet with 360-degree views of Manhattan. The interior design emphasizes clean lines and open spaces, with floor-to-ceiling windows that frame the city as living art.',
    image: project6,
    gallery: [project6, project6, project6],
    details: {
      area: '560 m²',
      client: 'Private',
      status: 'Completed'
    }
  }
];
