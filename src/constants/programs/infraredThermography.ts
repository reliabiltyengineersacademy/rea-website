import { Eye, Thermometer, Zap, Shield } from 'lucide-react';

export const benefits = [
  'ASNT Level I & II certified thermography training',
  'Enhanced ability to detect electrical and mechanical problems',
  'Non-contact inspection capabilities for safety-critical applications',
  'Increased earning potential and career advancement opportunities',
  'Professional credibility in predictive maintenance and inspection',
  'Access to advanced thermal imaging technologies and techniques',
];

export const targetAudience = [
  {
    title: 'Electrical Technicians',
    description:
      'Professionals responsible for electrical system maintenance and inspection',
  },
  {
    title: 'Maintenance Engineers',
    description:
      'Engineers overseeing facility maintenance and equipment reliability',
  },
  {
    title: 'Building Inspectors',
    description:
      'Inspectors evaluating building envelope and energy efficiency',
  },
  {
    title: 'Quality Assurance Personnel',
    description:
      'QA professionals using thermal imaging for process monitoring',
  },
];

export const certificationLevels = [
  {
    level: 'Level I',
    duration: '40 hours training + exam',
    description: 'Basic thermography principles and equipment operation',
    topics: [
      'Heat transfer theory',
      'Camera operation',
      'Basic analysis',
      'Safety procedures',
    ],
    capabilities: [
      'Operate thermal imaging equipment under supervision',
      'Collect thermal data following established procedures',
      'Identify obvious thermal anomalies',
      'Document findings with basic reporting',
    ],
  },
  {
    level: 'Level II',
    duration: '40 hours training + exam',
    description: 'Advanced analysis and independent inspection capabilities',
    topics: [
      'Advanced analysis',
      'Report writing',
      'Program setup',
      'Standards compliance',
    ],
    capabilities: [
      'Perform independent thermal inspections',
      'Analyze complex thermal patterns',
      'Write comprehensive inspection reports',
      'Train and supervise Level I personnel',
    ],
  },
];

export const applicationAreas = [
  {
    icon: Zap,
    title: 'Electrical Systems',
    description:
      'Switchgear, transformers, motors, and electrical connections inspection',
    applications: [
      'Overheating connections',
      'Load imbalances',
      'Insulation defects',
      'Arc flash prevention',
    ],
  },
  {
    icon: Thermometer,
    title: 'Mechanical Systems',
    description:
      'Rotating equipment, bearings, and mechanical component analysis',
    applications: [
      'Bearing problems',
      'Belt misalignment',
      'Coupling issues',
      'Pump cavitation',
    ],
  },
  {
    icon: Shield,
    title: 'Building Envelope',
    description: 'Insulation defects, air leakage, and moisture detection',
    applications: [
      'Insulation gaps',
      'Air infiltration',
      'Moisture intrusion',
      'Energy audits',
    ],
  },
  {
    icon: Eye,
    title: 'Process Monitoring',
    description: 'Industrial process temperature monitoring and control',
    applications: [
      'Furnace monitoring',
      'Heat exchanger efficiency',
      'Process optimization',
      'Quality control',
    ],
  },
];

export const equipmentTypes = [
  'Handheld thermal cameras',
  'Fixed-mount thermal systems',
  'Drone-mounted thermal sensors',
  'High-resolution thermal imagers',
  'Specialized lenses and filters',
  'Calibration sources and references',
  'Analysis and reporting software',
  'Environmental measurement tools',
];

export const industryStandards = [
  {
    standard: 'ASNT SNT-TC-1A',
    description: 'Personnel qualification and certification guidelines',
  },
  {
    standard: 'ASTM E1934',
    description:
      'Standard guide for examining electrical and mechanical equipment',
  },
  {
    standard: 'NETA MTS',
    description: 'Maintenance testing specifications for electrical equipment',
  },
  {
    standard: 'ISO 18434-1',
    description: 'Condition monitoring and diagnostics of machines',
  },
];
