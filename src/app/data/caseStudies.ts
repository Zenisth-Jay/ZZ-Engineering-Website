import londonBimImage from 'figma:asset/c72b4137d97e3e5fc9095beaa0c7d3b901f598e1.png';
import londonRealImage from 'figma:asset/9bc6275b6c9836e928c42e8bc98e3755ff4bb298.png';
import univPlanImage from 'figma:asset/525a429b85cd0546fcc84962911cf2c5f1a15d39.png';
import univ3dImage from 'figma:asset/3acea04b43caedb1c9163aa4d404ee61740e2e28.png';
import univRealImage from 'figma:asset/df67c3c948fa920a4d965a2d1fdb98b9649ac35b.png';
// New University Images
import univDetail1 from 'figma:asset/cf2815102ad1bdaa2630bba726f6a8372953585e.png';
import univDetail2 from 'figma:asset/51cb620f33fdee76d233736b88657c5f5ecbd2bf.png';
import univDetail3 from 'figma:asset/605ae46c33613b0718e2a6971a2aa31ebb81ffd9.png';

import bungalowMain from 'figma:asset/c8325140c210bd74956f9e0f7948e6ad7611a921.png';
import bungalowDetail1 from 'figma:asset/2eac1440b478ac7de258bfefb618a5ca7cd3d318.png';
import bungalowDetail2 from 'figma:asset/2c47f65c422f00b22eb3961c9429447585d3ee8b.png';
import bungalowDetail3 from 'figma:asset/185ad4b5ad9b97bb309573b58fd72787af76a3a2.png';
import bungalowDetail4 from 'figma:asset/a3b86647c217e73c9052b7180ed4fa3032a80a7a.png';
import bungalowDetail5 from 'figma:asset/327d76349a29bea14e162e0f52f1b911ccf979b5.png';

// Commercial Office Images
import officePointCloud from 'figma:asset/f334b761c78c1fcd6fb8e794e539ebf805f26e67.png';
import officeBimModel from 'figma:asset/6c1fcf885fc021ee21551b9d516a2918b0e19c0a.png';
import officeElevation from 'figma:asset/de67c29ec3af41683cd46b9aa6957efe02f189fa.png';

// Semi-Detached House Images
import semiDetachedMain from 'figma:asset/bc330959f78a0b5b2b7dcc689d331e853af81e94.png';
import semiDetachedModel from 'figma:asset/c5878beda494d7a7652148b1095eece56f072a47.png';
import semiDetachedPlan1 from 'figma:asset/717d4ca01df4620e7b47b2ad5459b876f4c22505.png';
import semiDetachedPlan2 from 'figma:asset/5ccafe8c223e25ab7b38bdd4fcb84c1d35447d71.png';

// Detached House Images
import detachedPointCloud from 'figma:asset/d7a45b8434b16d472a117a7009cf4d7f4d13ef21.png';
import detachedBimModel from 'figma:asset/c8ed8821dd54ebe7fa4a70efed0c1b8c0ce1c809.png';

export type CaseStudyDetail = {
  brief?: string[];
  scope?: string[];
  challenges?: string[];
  solution?: string;
  deliverables?: string[];
  tools?: string[];
};

export type CaseStudy = {
  id: number;
  title: string;
  category: string;
  image: string;
  secondaryImages?: string[];
  shortDescription: string;
  fullDescription: string;
  stats: { label: string; value: string }[];
  details?: CaseStudyDetail;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Heritage Hospitality Building — Architectural Scan‑to‑BIM',
    category: 'Hospitality & Heritage',
    image: londonBimImage,
    secondaryImages: [londonBimImage, londonRealImage],
    shortDescription: 'LOD 300+ architectural model for a 50-year-old, 8-storey heritage building (10,000 sq ft).',
    fullDescription: 'A 50-year-old, eight-storey building with a large basement and premium public spaces—including a luxurious hallway, restaurant, concierge, bar, and conference areas—required an accurate architectural BIM deliverable for documentation and coordination. The property totals approximately 10,000 sq ft gross area.',
    stats: [
      { label: 'Building', value: 'Heritage / Hospitality' },
      { label: 'Floors', value: '8 + Basement' },
      { label: 'Area', value: '10,000 sq ft' },
      { label: 'LOD', value: '300+' }
    ],
    details: {
      brief: [
        'An Architectural BIM model (LOD 300+) developed from point cloud data',
        'An exterior façade modeled to match point cloud and validated with Google Maps context',
        'A complete set of shop drawings generated from the BIM model: Floor plans, Sections, Elevations'
      ],
      scope: [
        'Development of the Architectural model (LOD 300+) for the full property',
        'External façade detailing to reflect real site conditions',
        'Production of shop drawings extracted from the coordinated model',
        'Delivery planning to match a short expected turnaround requirement'
      ],
      challenges: [
        'Complex point cloud with significant noise, requiring careful interpretation and validation',
        'Façade detailing complexity, especially when scan quality varied across elevations',
        'Maintaining accuracy while meeting an accelerated schedule expectation'
      ],
      solution: 'Resource deployment of 8 engineers over 15 days with milestone-driven planning (3-day sprints). We implemented a quality-first workflow with thorough checks per task and reality validation using site images to cross-check point cloud noise and verify façade geometry.',
      tools: [
        'Autodesk Revit 2020',
        'Autodesk ReCap'
      ],
      deliverables: [
        'Structured LOD 300+ architectural model',
        'Model-driven drawing set (plans/sections/elevations)',
        'Validated exterior façade geometry'
      ]
    }
  },
  {
    id: 2,
    title: 'University Building Scan-to-BIM',
    category: 'Education / Institutional',
    image: univ3dImage,
    secondaryImages: [univDetail1, univDetail2, univDetail3, univ3dImage, univRealImage, univPlanImage],
    shortDescription: 'LOD 400 model & 2D sheets for a 10,000 sq ft facility.',
    fullDescription: 'A university facility (10,000 sq ft) required a high-detail Scan-to-BIM deliverable to support accurate documentation, coordination, and future renovation/asset planning. We produced a LOD 400 Architectural BIM model and a complete sheet set directly from the coordinated Revit model.',
    stats: [
      { label: 'Area', value: '10,000 sq ft' },
      { label: 'LOD', value: '400' },
      { label: 'Software', value: 'Revit 2024' },
      { label: 'Output', value: 'Model + Sheets' }
    ],
    details: {
      solution: 'We delivered a fully structured Revit 2024 LOD 400 BIM model and a drawing/sheet package aligned with the scan data.',
      brief: [
        'A high-accuracy Scan-to-BIM model at LOD 400',
        'A clean, usable Revit 2024 model suitable for construction-level documentation',
        'A complete set of 2D sheets extracted from the model for review and issue/permit workflows'
      ],
      deliverables: [
        'LOD 400 3D BIM Model (Revit 2024)',
        'Model organized by levels, grids, and worksets',
        'Detailed architectural elements suitable for fabrication/installation-level intent',
        'Sheets / Drawing Set: Floor plans, Elevations, Sections, Key details',
        'Door/window schedules'
      ],
      scope: [
        'Scan-to-BIM modeling for a 10,000 sq ft university building',
        'Development of LOD 400 geometry and detail',
        'Production of 2D sheets extracted from Revit',
        'Model checks to ensure alignment between the model and scan reference'
      ],
      tools: [
        'Autodesk Revit 2024'
      ]
    }
  },
  {
    id: 3,
    title: 'Luxury Bungalow Scan‑to‑BIM',
    category: 'Residential',
    image: bungalowMain,
    secondaryImages: [bungalowDetail1, bungalowDetail2, bungalowDetail3, bungalowDetail4, bungalowDetail5],
    shortDescription: 'LOD 300 model & exact topography for a 10,000 sq ft luxury bungalow.',
    fullDescription: 'A luxury bungalow (10,000 sq ft) required an accurate Scan‑to‑BIM model in Autodesk Revit 2025, developed to LOD 300, with exact site topography integrated into the same coordinated environment. The objective was to create a dependable existing‑conditions model for design coordination and generate all plans/drawings directly from the Revit file.',
    stats: [
      { label: 'Area', value: '10,000 sq ft' },
      { label: 'LOD', value: '300' },
      { label: 'Software', value: 'Revit 2025' },
      { label: 'Topography', value: 'Exact' }
    ],
    details: {
      brief: [
        'A Revit 2025 Scan‑to‑BIM model at LOD 300 (accurate and documentation‑ready)',
        'Exact topography based on survey/scan inputs (true site surface, not an approximate mass)',
        'A complete set of drawings extracted from the coordinated model to maintain full 2D/3D consistency'
      ],
      solution: 'We converted the scan/survey inputs into a structured Revit dataset that combined building geometry + site context, then produced the full drawing output from that same model.',
      scope: [
        'Scan‑to‑BIM modeling (LOD 300) for a 10,000 sq ft luxury bungalow',
        'Development and integration of exact topography in Revit 2025',
        'Production of a complete plan/drawing set extracted from the BIM model (model‑driven outputs)'
      ],
      challenges: [
        'Converting real‑world scan information into a clean LOD 300 model that remains practical for documentation',
        'Creating an accurate topo that is both faithful to scan/survey data and readable on drawings',
        'Ensuring drawings stay model‑driven (minimizing manual 2D drafting and reducing mismatch risk)'
      ],
      deliverables: [
        'LOD 300 3D BIM Model (Revit 2025) aligned to scan reference',
        'Exact Topography Model with clear slopes and grade transitions',
        'Drawing / Sheet Package (Floor plans, Elevations, Sections, Roof plan, Site plan)'
      ],
      tools: [
        'Autodesk Revit 2025'
      ]
    }
  },
  {
    id: 4,
    title: 'Commercial Office Building (G+7) — Scan‑to‑BIM LOD 400',
    category: 'Commercial / Mixed-Use',
    image: officeBimModel,
    secondaryImages: [officePointCloud, officeElevation],
    shortDescription: 'LOD 400 Architecture, Structure, & MEP model for a G+7 office building.',
    fullDescription: 'A commercial office building (G+7 floors) required a comprehensive Scan‑to‑BIM deliverable at LOD 400, covering Architecture, Structure, and MEP, along with a complete drawing package generated directly from the coordinated model. The purpose was to create a construction-ready digital twin that supports coordination, approvals, and execution.',
    stats: [
      { label: 'Floors', value: 'G+7' },
      { label: 'LOD', value: '400' },
      { label: 'Disciplines', value: 'Arch + Str + MEP' },
      { label: 'Output', value: 'Model + Sheets' }
    ],
    details: {
      brief: [
        'A high-detail, construction-ready Scan‑to‑BIM model (LOD 400) for a multi-storey office building',
        'Full documentation to support accurate multi-discipline coordination (Arch/Str/MEP)',
        'Construction execution with model-driven drawings'
      ],
      scope: [
        'LOD 400 Scan‑to‑BIM Modeling: Architecture, Structure, and MEP (HVAC, Plumbing, Firefighting, Electrical)',
        'Model-Based Drawing Production: Plans, Sections, Elevations, and Schedules'
      ],
      solution: 'We established coordinated levels, grids, and discipline model structure to support LOD 400 detailing. Multi-discipline models were developed with consistent standards for naming and view templates. Internal QA/QC ensured model consistency across Architecture, Structure, and MEP, minimizing 2D/3D mismatch. This provided a single, coordinated source model that kept the drawing package consistent and traceable.',
      deliverables: [
        'Single, coordinated LOD 400 Scan‑to‑BIM source model (Arch, Str, MEP)',
        'Complete drawing package generated from the model (Plans, Sections, Elevations)',
        'Detailed drawings and schedules'
      ],
      tools: [
        'Autodesk Revit 2024/2025'
      ]
    }
  },
  {
    id: 5,
    title: 'Semi‑Detached House — Scan‑to‑BIM',
    category: 'Residential',
    image: semiDetachedMain,
    secondaryImages: [semiDetachedMain, semiDetachedModel, semiDetachedPlan1, semiDetachedPlan2],
    shortDescription: 'Scan‑to‑BIM conversion & drawing production for a 2,500 sq ft home with 2-day TAT.',
    fullDescription: 'A semi‑detached residential house (approx. 2,500 sq ft) required a fast, accurate Scan‑to‑BIM conversion to produce a reliable 3D model and a full drawing set for design, coordination, and documentation purposes.',
    stats: [
      { label: 'Area', value: '2,500 sq ft' },
      { label: 'LOD', value: '300' },
      { label: 'TAT', value: '2 Days' },
      { label: 'Software', value: 'Revit 2025' }
    ],
    details: {
      brief: [
        'A Revit 2025 BIM model generated from scan data (as-built conditions)',
        'A model suitable for producing accurate 2D documentation',
        'Drawings extracted directly from the BIM model to ensure consistency between 2D and 3D'
      ],
      scope: [
        'Scan-to-BIM modeling for a 2,500 sq ft semi-detached house',
        'Preparation of a sheet-ready Revit model',
        'Extraction and compilation of all required drawings from the model'
      ],
      solution: 'We converted the scan information into a clean, structured BIM dataset and produced drawings from the coordinated model. We achieved a 2-day turnaround through fast standardized project setup, parallel production workflows, and rigorous QA/QC checkpoints.',
      challenges: [
        'Very short turnaround time (2 days) while maintaining accuracy and deliverable quality',
        'Ensuring drawing outputs remained fully aligned with the model (minimal manual 2D edits)',
        'Maintaining consistent modeling standards so the client could reuse the model for future updates'
      ],
      deliverables: [
        '3D BIM Model (Revit 2025) with levels and grids set up',
        'Architectural elements modeled to match existing conditions',
        'Drawing / Sheet Package (Floor plans, Elevations, Sections, Key details)'
      ],
      tools: [
        'Autodesk Revit 2025'
      ]
    }
  },
  {
    id: 6,
    title: 'Detached House — Scan‑to‑BIM + Exact Topography',
    category: 'Residential',
    image: detachedBimModel,
    secondaryImages: [detachedBimModel, detachedPointCloud],
    shortDescription: 'LOD 300 model with exact topography for a 2,500 sq ft detached house.',
    fullDescription: 'A detached residential house (approx. 2,500 sq ft) required an accurate Scan‑to‑BIM conversion with exact site topography integrated into the BIM environment. The objective was to create a dependable existing-conditions model and generate a complete drawing set directly from the coordinated Revit file.',
    stats: [
      { label: 'Area', value: '2,500 sq ft' },
      { label: 'LOD', value: '300' },
      { label: 'Topography', value: 'Exact' },
      { label: 'Software', value: 'Revit 2025' }
    ],
    details: {
      brief: [
        'A Revit 2025 as-built BIM model created from scan/survey inputs',
        'Exact topography (true site surface based on survey/scan data—not an approximate mass)',
        'A model prepared to produce accurate plans, elevations, sections, and site views directly from Revit'
      ],
      scope: [
        'Scan‑to‑BIM modeling for a 2,500 sq ft detached house',
        'Development of exact topography suitable for design coordination and documentation',
        'Production of drawings extracted from the BIM model to ensure 2D/3D consistency'
      ],
      solution: 'We converted scan/survey inputs into a coordinated Revit dataset that includes both the building and site context. This ensured drawings were generated from the same coordinated Revit model, reducing inconsistencies and providing a single source of truth.',
      challenges: [
        'Converting real-world conditions into a clean, usable BIM model while maintaining accuracy',
        'Creating a topo surface that is both faithful to survey/scan data and practical for documentation',
        'Ensuring sheets remain consistent and update-ready (minimizing manual 2D drafting)'
      ],
      deliverables: [
        '3D BIM Model (Revit 2025) aligned to scan reference',
        'Exact Topography Model with correct datums and levels',
        'Drawing / Sheet Package (Floor plans, Elevations, Sections, Site/topo drawings)'
      ],
      tools: [
        'Autodesk Revit 2025'
      ]
    }
  }
];
