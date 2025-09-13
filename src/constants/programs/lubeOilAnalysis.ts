import { Droplets, Microscope, BarChart, Cog } from 'lucide-react';

export const benefits = [
  'Comprehensive understanding of tribology and lubrication principles',
  'Enhanced ability to optimize lubrication programs and extend equipment life',
  'Professional expertise in oil analysis and contamination control',
  'Increased earning potential and career advancement opportunities',
  'Industry recognition as a lubrication and oil analysis specialist',
  'Access to advanced testing methods and diagnostic techniques',
];

export const targetAudience = [
  {
    title: 'Lubrication Engineers',
    description:
      'Engineers responsible for lubrication program development and optimization',
  },
  {
    title: 'Maintenance Technicians',
    description:
      'Technicians performing oil sampling and basic analysis interpretation',
  },
  {
    title: 'Reliability Engineers',
    description:
      'Engineers using oil analysis data for equipment reliability improvement',
  },
  {
    title: 'Laboratory Technicians',
    description:
      'Technicians performing oil analysis testing and data interpretation',
  },
];

export const certificationLevels = [
  {
    level: 'Fundamentals',
    duration: '24 hours training + exam',
    description: 'Basic lubrication principles and oil analysis fundamentals',
    topics: [
      'Lubrication basics',
      'Oil properties',
      'Sampling techniques',
      'Basic tests',
    ],
    competencies: [
      'Understand lubrication fundamentals',
      'Perform proper oil sampling',
      'Interpret basic oil analysis reports',
      'Implement contamination control measures',
    ],
  },
  {
    level: 'Advanced',
    duration: '40 hours training + exam',
    description:
      'Advanced tribology and comprehensive oil analysis program management',
    topics: [
      'Advanced tribology',
      'Program management',
      'Trend analysis',
      'Failure investigation',
    ],
    competencies: [
      'Design comprehensive oil analysis programs',
      'Perform advanced data interpretation',
      'Investigate lubrication-related failures',
      'Optimize lubrication programs for maximum ROI',
    ],
  },
];

export const testMethods = [
  {
    icon: Droplets,
    title: 'Physical Properties',
    description: 'Viscosity, density, flash point, and pour point analysis',
    tests: [
      'Kinematic viscosity',
      'Viscosity index',
      'Density measurement',
      'Flash/fire point',
    ],
  },
  {
    icon: Microscope,
    title: 'Contamination Analysis',
    description:
      'Particle counting, water content, and contamination identification',
    tests: ['Particle counting', 'Water content', 'Acid number', 'Base number'],
  },
  {
    icon: BarChart,
    title: 'Wear Metal Analysis',
    description: 'Elemental analysis for wear metals and additive depletion',
    tests: ['ICP spectroscopy', 'Atomic absorption', 'Ferrography', 'PQ index'],
  },
  {
    icon: Cog,
    title: 'Additive Analysis',
    description:
      'Antioxidants, anti-wear additives, and performance monitoring',
    tests: [
      'FTIR spectroscopy',
      'Additive screening',
      'Oxidation analysis',
      'Thermal stability',
    ],
  },
];

export const equipmentTypes = [
  'Industrial gearboxes and transmissions',
  'Hydraulic systems and power units',
  'Compressors and vacuum pumps',
  'Steam and gas turbines',
  'Internal combustion engines',
  'Bearing lubrication systems',
  'Circulating oil systems',
  'Grease-lubricated equipment',
];

export const analysisParameters = [
  {
    category: 'Physical Properties',
    parameters: [
      'Viscosity @ 40°C & 100°C',
      'Viscosity Index',
      'Density',
      'Flash Point',
      'Pour Point',
    ],
  },
  {
    category: 'Contamination',
    parameters: [
      'Water Content',
      'Particle Count',
      'Acid Number',
      'Base Number',
      'Insolubles',
    ],
  },
  {
    category: 'Wear Metals',
    parameters: [
      'Iron',
      'Copper',
      'Lead',
      'Tin',
      'Aluminum',
      'Chromium',
      'Silver',
      'Nickel',
    ],
  },
  {
    category: 'Additives',
    parameters: [
      'Zinc',
      'Phosphorus',
      'Calcium',
      'Magnesium',
      'Barium',
      'Boron',
      'Molybdenum',
    ],
  },
  {
    category: 'Contaminants',
    parameters: [
      'Silicon',
      'Sodium',
      'Potassium',
      'Fuel Dilution',
      'Glycol',
      'Soot',
    ],
  },
];

export const industryApplications = [
  {
    industry: 'Power Generation',
    applications: [
      'Turbine oil analysis',
      'Generator bearing monitoring',
      'Transformer oil testing',
    ],
  },
  {
    industry: 'Manufacturing',
    applications: [
      'Hydraulic system monitoring',
      'Gearbox analysis',
      'Compressor oil testing',
    ],
  },
  {
    industry: 'Transportation',
    applications: [
      'Engine oil analysis',
      'Transmission fluid testing',
      'Differential oil monitoring',
    ],
  },
  {
    industry: 'Mining & Construction',
    applications: [
      'Heavy equipment monitoring',
      'Hydraulic system analysis',
      'Engine oil programs',
    ],
  },
];
