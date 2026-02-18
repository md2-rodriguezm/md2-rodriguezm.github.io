import project1Main from '@/assets/project_1/AERIAL PACO.jpg';
import project1Img2 from '@/assets/project_1/RENDER ENTRADA.jpg';
import project1Img3 from '@/assets/project_1/aduitorio nightttt.jpg';
import project1Img4 from '@/assets/project_1/entrada N.jpg';
import project1Img5 from '@/assets/project_1/structure.jpg';
import project1Img6 from '@/assets/project_1/COMO PORTADA_page_1.png';

import project2Main from '@/assets/project_2/COMO PORTADA.png';
import project2Img2 from '@/assets/project_2/Image12.png';
import project2Img3 from '@/assets/project_2/Image13.png';
import project2Img4 from '@/assets/project_2/Image15.png';
import project2Img5 from '@/assets/project_2/Image16_002.png';
import project2Img6 from '@/assets/project_2/Image2_000.png';
import project2Img7 from '@/assets/project_2/Image6_000.png';
import project2Img8 from '@/assets/project_2/Image9_000.png';
import project2Img9 from '@/assets/project_2/barricas inhavited.png';

import project3 from '@/assets/project-3.jpg';

export interface Project {
  id: string;
  title: string;
  label: string;
  category: string;
  year: number;
  location: string;
  description: string;
  image: string;
  gallery: string[];
  status: 'completed' | 'wip';
  details: {
    area: string;
    client: string;
    status: string;
  };
}

export const projects: Project[] = [
  {
    id: 'research-centre',
    title: 'Research Centre',
    label: 'P1',
    category: 'Institutional',
    year: 2024,
    location: 'Madrid, Spain',
    description: 'A multidisciplinary research facility designed to foster collaboration between scientific departments. The building features a central atrium that floods interior laboratories with natural light, while its modular layout allows flexible reconfiguration of research spaces.',
    image: project1Img6,
    gallery: [project1Img2, project1Img3, project1Img4, project1Img5, project1Main],
    status: 'completed',
    details: {
      area: '4,200 m²',
      client: 'University of Madrid',
      status: 'Completed'
    }
  },
  {
    id: 'bodega',
    title: 'Bodega',
    label: 'P2',
    category: 'Commercial',
    year: 2023,
    location: 'Lanzarote, Spain',
    description: 'A contemporary winery that merges the vernacular architecture of the Castilian landscape with precise climate-control engineering. Subterranean barrel halls are carved into the terrain, maintaining constant temperature through thermal mass, while the tasting pavilion opens onto the vineyard with panoramic glazing.',
    image: project2Main,
    gallery: [project2Img2, project2Img3, project2Img4, project2Img5, project2Img6, project2Img7, project2Img8, project2Img9, project2Main],
    status: 'completed',
    details: {
      area: '1,800 m²',
      client: 'Private',
      status: 'Completed'
    }
  },
  {
    id: 'hospital',
    title: 'Hospital',
    label: 'P3',
    category: 'Healthcare',
    year: 2025,
    location: 'Barcelona, Spain',
    description: 'A 200-bed hospital designed around the principle of healing environments. Patient rooms are oriented to maximize daylight and garden views. The circulation system separates clinical logistics from patient flows, creating calm corridors with integrated wayfinding through materiality and light.',
    image: project3,
    gallery: [project3, project3, project3],
    status: 'wip',
    details: {
      area: '18,000 m²',
      client: 'Generalitat de Catalunya',
      status: 'In Progress'
    }
  }
];
