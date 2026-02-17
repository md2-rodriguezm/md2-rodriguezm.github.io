import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
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
    image: project1,
    gallery: [project1, project1, project1],
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
    location: 'Ribera del Duero, Spain',
    description: 'A contemporary winery that merges the vernacular architecture of the Castilian landscape with precise climate-control engineering. Subterranean barrel halls are carved into the terrain, maintaining constant temperature through thermal mass, while the tasting pavilion opens onto the vineyard with panoramic glazing.',
    image: project2,
    gallery: [project2, project2, project2],
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
