import project1Main from '@/assets/project_1/aerial-paco.jpg';
import project1Img2 from '@/assets/project_1/render-entrada.jpg';
import project1Img3 from '@/assets/project_1/aduitorio-nightttt.jpg';
import project1Img4 from '@/assets/project_1/entrada-n.jpg';
import project1Img5 from '@/assets/project_1/structure.jpg';
import project1Img6 from '@/assets/project_1/como-portada-page-1.png';

import project2Main from '@/assets/project_2/como-portada.png';
import project2Img2 from '@/assets/project_2/image12.png';
import project2Img3 from '@/assets/project_2/image13.png';
import project2Img4 from '@/assets/project_2/image15.png';
import project2Img5 from '@/assets/project_2/image16-002.png';
import project2Img6 from '@/assets/project_2/image2-000.png';
import project2Img7 from '@/assets/project_2/image6-000.png';
import project2Img8 from '@/assets/project_2/image9-000.png';
import project2Img9 from '@/assets/project_2/barricas-inhavited.png';

import project3 from '@/assets/project_3/project-3.jpeg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  label: string;
  category: string;
  year: number;
  location: string;
  description: string;
  image: string;
  gallery: string[];
  status: 'completed' | 'wip';
  videoUrl?: string;
  details: {
    area: string;
    client: string;
    status: string;
  };
}

export const projects: Project[] = [
  {
    id: 'research-centre',
    title: "Paquito's Research Centre",
    subtitle: 'Research Centre Proposal',
    label: 'P1',
    category: 'Institutional',
    year: 2024,
    location: 'Bristol, UK',
    description: 'The intersection of human activity and environmental influence is a critical theme in modern architecture, particularly through the lens of \'Ecological Acoustics.\' This concept explores how soundscapes and ecological sustainability intersect with human well-being and ecosystem health (Vanderveer N.J., 1979). By merging visual and acoustic data, architects are pushed to consider spatial elements from nano to macroscale, ultimately influencing the configuration of large-scale structures (Malik, S., 2021). This approach exemplifies the growing trend of parametric architecture, which prioritizes sustainable development by creating adaptive, aesthetically pleasing, and acoustically optimised environments.\n\nThis design philosophy incorporates biomorphism and biomimicry, extending from the landscape to the architectural massing, and includes specialised components to enhance an acoustic ecology. For a Research Centre with an integrated auditorium, 2D structures informed by microscopic tests are transformed into 3D models to explore variations and uniformity. Geometric patterns, particularly Voronoi tessellation, are used to optimise cell structures for specific site needs. With this approach, we redefine \'Generosity in Architecture\' as suggested in the project brief, moving beyond aesthetics and function to enhance human interactions and nurture the environment. This enables architects to design buildings that blend seamlessly with their surroundings, showcasing a new engineering paradigm that combines innovative structure with practical functionality.',
    image: project1Img6,
    gallery: [project1Img2, project1Img3, project1Img4, project1Img5, project1Main],
    status: 'completed',
    details: {
      area: '2,071 m²',
      client: 'University of the West of England (UWE)',
      status: 'Completed'
    }
  },
  {
    id: 'bodega',
    title: 'Bodega The Swirl',
    subtitle: 'Winery Proposal',
    label: 'P2',
    category: 'Commercial',
    year: 2025,
    location: 'La Geria, Lanzarote',
    description: 'This project celebrates the resilience of Lanzarote\'s viticulture, creating a dynamic hub in La Geria where producers, traders, and consumers connect through wine, trade, and cultural exchange. A winery, crafted from local materials and inspired by Nature-Based Solutions, will honour Lanzarote\'s identity and support sustainable agricultural practices. It reflects the story of local winegrowers who have sustained Malvasía production in volcanic soil, the historic influence of British traders since the 17th century, and the enduring prestige that drew praise from Shakespeare: "O knight, thou lackest a cup of canary!"\n\nPositioned within a UNESCO-listed landscape, the design merges tradition and innovation. Inspired by the semi-circle\'s shelter and the Möbius strip\'s fluidity, it creates a timeless connection between architecture and nature. A panoramic view of vineyards, craters, and the Atlantic frames the experience. The winery will invite producers, traders, and consumers to spend the day immersed in Lanzarote\'s wine culture. Dining experiences will feature geothermal cooking, harnessing the island\'s volcanic warmth. Thermal baths and an events space will further enrich the sensory and social experience, blending relaxation with cultural exchange.',
    image: project2Main,
    gallery: [project2Img2, project2Img3, project2Img4, project2Img5, project2Img6, project2Img7, project2Img8, project2Img9, project2Main],
    status: 'completed',
    details: {
      area: '1,747 m²',
      client: 'University of the West of England (UWE)',
      status: 'Completed'
    }
  },
  {
    id: 'hospital',
    title: 'SALT Centre',
    subtitle: 'Cardiology Hospital Proposal',
    label: 'P3',
    category: 'Healthcare',
    year: 2026,
    location: 'Alexandria, Egypt',
    description: 'The proposed SALT Centre (Screening Alexandria Treatment Centre) represents a cardiac health facility that addresses Alexandria\'s high cardiovascular disease. It is more than a cardiac facility. It embodies an evolution in urbanism, expecting health, heritage and accessibility to cooperate and mutually reinforce. This creation complements Sir Magdi Yacoub\'s emerging network of world-class cardiac care. Alexandria\'s one-year mortality rate is 31.8%, more than double the Delta region\'s of 13.2%. This indicates a critical service gap that justifies specialised intervention tailored to the inhabitants of the city of Alexandria.\n\nLocated on the preserved Al-Montazah peninsula, the centre harnesses coastal salt therapy benefits while emphasising its \'free\' benefits to the public. It opens royal gardens to public health access – a democratic reinterpretation of heritage. This last aligns with Egypt\'s 2030 vision regarding health equity. The facility will function as a regionally differentiated complement to the Magdi Yacoub Global Heart Foundation, whose official headquarter is the foundation\'s administrative base in the United States. It will be an additional clinical center to the existing Aswan Heart Center and the new Magdi Yacoub Global Heart Center in Cairo, Egypt. An emphasis on screening, prevention and accessible treatment will validate cardiovascular disease priorities in Alexandria, outlining a schedule of accommodation that uplifts preserved heritage towards public expansion in a contemporary urban health planning framework.',
    image: project3,
    gallery: [project3],
    status: 'wip',
    videoUrl: 'https://www.youtube.com/embed/Hv6bwgAGonM',
    details: {
      area: 'TBD',
      client: 'University of the West of England (UWE)',
      status: 'Work in Progress'
    }
  }
];
