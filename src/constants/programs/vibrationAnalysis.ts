import { Zap, TrendingUp, Settings, BarChart } from 'lucide-react';

export const benefits = [
  'ISO 18436 internationally recognized certification',
  'Enhanced expertise in machinery diagnostics and fault detection',
  'Improved ability to predict equipment failures before they occur',
  'Increased earning potential and career advancement opportunities',
  'Access to advanced vibration analysis tools and techniques',
  'Professional credibility in predictive maintenance field',
];

export const targetAudience = [
  {
    title: 'Maintenance Engineers',
    description:
      'Engineers responsible for equipment reliability and maintenance planning',
  },
  {
    title: 'Reliability Technicians',
    description:
      'Technicians performing condition monitoring and predictive maintenance tasks',
  },
  {
    title: 'Vibration Analysts',
    description:
      'Professionals specializing in machinery vibration analysis and diagnostics',
  },
  {
    title: 'Plant Engineers',
    description:
      'Engineers overseeing plant operations and equipment performance',
  },
];

export const certificationLevels = [
  {
    level: 'Category I',
    duration: '40 hours training + exam',
    description:
      'Basic vibration analysis principles and data collection techniques',
    topics: [
      'Vibration fundamentals',
      'Data collection',
      'Basic analysis',
      'Safety procedures',
    ],
    requirements: [
      'High school diploma',
      '6 months experience',
      'Basic mechanical knowledge',
    ],
  },
  {
    level: 'Category II',
    duration: '80 hours training + exam',
    description:
      'Advanced analysis techniques and fault diagnosis capabilities',
    topics: ['Advanced analysis', 'Fault diagnosis', 'Trending', 'Reporting'],
    requirements: [
      'Category I certification',
      '18 months experience',
      'Technical background',
    ],
  },
  {
    level: 'Category III',
    duration: '120 hours training + exam',
    description:
      'Expert-level analysis and program management responsibilities',
    topics: [
      'Program management',
      'Advanced diagnostics',
      'Training others',
      'Standards development',
    ],
    requirements: [
      'Category II certification',
      '36 months experience',
      'Engineering degree preferred',
    ],
  },
];

export const technicalTopics = [
  {
    icon: Zap,
    title: 'Signal Processing',
    description:
      'FFT analysis, filtering, windowing, and signal conditioning techniques',
  },
  {
    icon: TrendingUp,
    title: 'Fault Identification',
    description:
      'Identifying imbalance, misalignment, bearing defects, and gear problems',
  },
  {
    icon: Settings,
    title: 'Machinery Diagnostics',
    description:
      'Rotating equipment analysis including pumps, motors, and compressors',
  },
  {
    icon: BarChart,
    title: 'Data Analysis',
    description:
      'Trending, alarm setting, and predictive maintenance scheduling',
  },
];

export const equipmentCovered = [
  'Centrifugal and reciprocating pumps',
  'Electric motors and generators',
  'Centrifugal and screw compressors',
  'Fans and blowers',
  'Gearboxes and transmissions',
  'Rolling element and sleeve bearings',
  'Belt drives and couplings',
  'Steam and gas turbines',
];
