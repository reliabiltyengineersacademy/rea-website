import { Zap, CheckCircle, Users, BookOpen, Award, Settings, TrendingUp } from 'lucide-react';

export const benefits = [
  'ISO 18436-2 Category I internationally recognized certification',
  'Fundamental knowledge of vibration analysis principles and techniques',
  'Ability to collect vibration data using portable analyzers',
  'Basic skills in identifying common machinery faults',
  'Enhanced career prospects in predictive maintenance',
  'Foundation for advanced vibration analysis training',
];

export const targetAudience = [
  {
    title: 'Maintenance Technicians',
    description: 'Technicians responsible for equipment monitoring and basic maintenance tasks',
  },
  {
    title: 'Plant Operators',
    description: 'Operators involved in equipment monitoring and condition assessment',
  },
  {
    title: 'Entry-Level Analysts',
    description: 'New professionals starting their career in vibration analysis',
  },
  {
    title: 'Maintenance Engineers',
    description: 'Engineers seeking basic vibration analysis skills for their work',
  },
];

export const courseModules = [
  {
    module: 'Module 1: Vibration Fundamentals',
    duration: '8 hours',
    description: 'Basic principles of vibration and measurement',
    topics: [
      'What is vibration and why measure it',
      'Vibration parameters and units',
      'Frequency, amplitude, and phase',
      'Time domain vs frequency domain',
    ],
  },
  {
    module: 'Module 2: Data Collection',
    duration: '8 hours',
    description: 'Proper techniques for collecting vibration data',
    topics: [
      'Measurement point selection',
      'Sensor mounting and installation',
      'Data collection procedures',
      'Measurement quality and validation',
    ],
  },
  {
    module: 'Module 3: Basic Analysis',
    duration: '8 hours',
    description: 'Fundamental analysis techniques and interpretation',
    topics: [
      'Spectrum analysis basics',
      'Common fault patterns',
      'Alarm setting and trending',
      'Basic reporting techniques',
    ],
  },
  {
    module: 'Module 4: Equipment Applications',
    duration: '8 hours',
    description: 'Application to common rotating equipment',
    topics: [
      'Pumps and motors',
      'Fans and blowers',
      'Compressors and turbines',
      'Gearboxes and bearings',
    ],
  },
  {
    module: 'Module 5: Safety and Standards',
    duration: '8 hours',
    description: 'Safety procedures and industry standards',
    topics: [
      'Safety procedures and PPE',
      'ISO 18436-2 standard requirements',
      'Documentation and record keeping',
      'Certification process and requirements',
    ],
  },
];

export const practicalSkills = [
  {
    icon: Zap,
    title: 'Data Collection',
    description: 'Proper collection of vibration data using portable analyzers',
  },
  {
    icon: TrendingUp,
    title: 'Basic Analysis',
    description: 'Fundamental analysis of vibration spectra and trends',
  },
  {
    icon: Settings,
    title: 'Fault Detection',
    description: 'Identification of common machinery faults and problems',
  },
  {
    icon: BookOpen,
    title: 'Reporting',
    description: 'Basic reporting and documentation of findings',
  },
];

export const equipmentCovered = [
  'Electric motors and generators',
  'Centrifugal and reciprocating pumps',
  'Fans and blowers',
  'Compressors and turbines',
  'Gearboxes and transmissions',
  'Rolling element bearings',
  'Belt drives and couplings',
  'Basic rotating machinery',
];

export const certificationDetails = {
  duration: '40 hours',
  format: 'Classroom training with hands-on exercises',
  prerequisites: 'High school diploma or equivalent',
  experience: '6 months maintenance experience recommended',
  certification: 'ISO 18436-2 Category I Vibration Analyst',
  validity: 'No expiration',
  recertification: 'Not required',
  exam: 'Written and practical examination required',
};

export const learningOutcomes = [
  'Understand basic vibration theory and measurement principles',
  'Collect vibration data using portable analyzers correctly',
  'Identify common machinery faults from vibration spectra',
  'Set appropriate alarms and trending parameters',
  'Follow safety procedures and industry standards',
  'Document findings and create basic reports',
  'Prepare for Category II vibration analysis training',
];
