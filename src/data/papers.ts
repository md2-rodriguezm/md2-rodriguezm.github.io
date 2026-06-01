export interface Paper {
  id: string;
  code: string;
  title: string;
  type: string;
  year: number;
  institution: string;
  abstract: string;
  videoUrl?: string;
  pdfUrl?: string;
}

export const papers: Paper[] = [
  {
    id: 'acs2',
    code: 'ACS2',
    title: 'Nocturnal Excerpts of Personal Reflections: An Architectural Manifesto',
    type: 'Advanced Cultural Studies 2 (Narratives of Architectural Theory)',
    year: 2026,
    institution: 'University of the West of England (UWE)',
    abstract: 'In response to the Advanced Cultural Studies module, this manifesto bridges architectural theory and literature with a curation of Nocturnal Excerpts of Personal Reflections written on a daily basis over the past year to define my future architectural praxis. This approach mirrors American philosopher and professor Donald Schön’s concept of the “reflective practitioner” by interrogating my own context and questioning what it truly means to claim recognition as an architect. The writing unfolds as an explorative conversation with myself, weaving literature, theoretical frameworks, memory and experience to address the psychological, sociological and philosophical dimensions of the discipline.',
    pdfUrl: 'YOUR_GOOGLE_DRIVE_LINK_HERE'
  },
  {
    id: 'tfm',
    code: 'TFM',
    title: '[Re]mediating Diagnosis. A Study of Alexandria\'s Coastal Deteriorated Façades',
    type: 'Master\'s Research',
    year: 2025,
    institution: 'University of the West of England (UWE)',
    abstract: 'Coastal façade deterioration manifests through thermal shifts, structural fatigue and salt erosion, gradually revealed by human and environmental forces. Human intelligence is capable of decoding this matter through the use of accessible tools to inform interventions across the façade lifecycle and apply in future builds. Digital and remote strategies, such as Google Street View, Photoshop effects, hand-drawn segmentation and computational methods like Grasshopper enable scalable anticipations and remediation without on-site risks. This bridges human insight with machine learning, providing a robust method of meditating techniques that dismantle our curiosity. With this, we are able to record decay patterns to come up with new installations alongside training AI for first-stage empirical diagnosis.',
    videoUrl: 'https://www.youtube.com/embed/jzNC-FK5D-8',
    pdfUrl: 'https://drive.google.com/file/d/1SDmZ6Xgtsv3v9ekDUaXrZz1ZaVPQWjj8/view?usp=sharing'
  },
  {
    id: 'lta',
    code: 'LtA',
    title: 'Computational Project. Testing Evolutive Structures and CFD Wind Tunnel Testing.',
    type: 'Logic to Artefact',
    year: 2025,
    institution: 'University of the West of England (UWE)',
    abstract: 'This project explores computational strategies in evolutive structures and shape optimisation, prioritising wind analysis to develop a parametric shelter. Computational Fluid Dynamics (CFD) is a primary consideration that enables a cohesive environmental analysis for the efficiency and performance of the devised pavilion. Previous knowledge and inspiration leads to the concept development. The Geria, a vernacular agricultural system, and the Möbius strip inform the evolution of the design, or artefact, to make it a suitable pavilion for 1-3 users. Supporting theoretical documentation and experimental data on evolutive structures and CFD is applied to ensure the validity of the artefact throughout the logic process. Several massing and structural iterations eventually converge into the final proposal. Rhino and Grasshopper Software are used to generate relevant coding, definitions and algorithms towards the projection of a solution. A breakdown of each respective system will be provided.',
    pdfUrl: 'https://drive.google.com/file/d/1w2tLCHd9aLNV5GjnPkQzjI1SiPdeeIPJ/view?usp=sharing'
  },
  {
    id: 'acs',
    code: 'ACS',
    title: 'The Interior Heard',
    type: 'Advanced Cultural Studies',
    year: 2025,
    institution: 'University of the West of England (UWE)',
    abstract: 'In the built environment, not all boundaries are marked or visible. Many exist as subtle thresholds that guide our behaviour without signs. Architectural space often influences how we move and act, using quiet cues rather than explicit instructions. We sense these invisible lines instinctively. In my home living room, a grand piano sits within an open-plan space. Its lid, whether closed, half-open or fully raised, forms an unspoken boundary between private thought and public expression. No rule dictates its position, yet it carries meaning, from quiet reflection, to cautious sharing, to open performance. In this domestic setting, the piano becomes a hinge between interior feeling and outward presence.\n\nThis essay responds to the Module of Advanced Cultural Studies, and examines an interior threshold that is not officially marked but clearly felt. Through the piano lid\'s three positions, I explore a movement from inner immensity to public resonance, drawing on Gaston Bachelard\'s theory of intimate space. Alongside this, I reflect on cultural works by Sampha and Ramón Gener, both of whom frame the piano as a vessel of memory and identity. Accompanying this, I also look into the legacy of Arthur Rubinstein and how his trajectory as a renowned pianist helped him maintain these traits. In doing so, I show how a familiar object in a personal space can reveal deep, invisible boundaries that shape how we express ourselves and connect with others.',
    pdfUrl: 'https://drive.google.com/file/d/1GjHx1jHbxEyuZvkDWdCeC9W3My5fAEXK/view?usp=sharing'
  },
  {
    id: 'tfg',
    code: 'TFG',
    title: 'Orchestrating Architecture and Acoustics: Exploring Sound Dynamics in Performance Venues',
    type: 'Bachelor\'s Dissertation',
    year: 2024,
    institution: 'University of the West of England (UWE)',
    abstract: 'Creating a conceptual performance venue, perhaps flexible or adaptable, must follow practical guidelines and design solutions by applying tools associated with acoustics, natural lighting, thermal satisfaction, air quality and energy efficiency. This thesis will focus on integrating the auditory dimension into an architect\'s design process and emphasise absorbent materials to satisfy human perception. The method to tackle this has been to examine a prominent case study and influential theory that will justify the creation of an architecture that better resonates with users and prioritises human elements.',
    pdfUrl: 'https://drive.google.com/file/d/1vYaxAZi8slfeIW7JKUUmqqk1AJRzLydi/view?usp=sharing'
  },
];
