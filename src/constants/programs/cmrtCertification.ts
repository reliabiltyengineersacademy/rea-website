import { Wrench, Settings, CheckCircle, BookOpen } from 'lucide-react';

export const benefits = [
  'Recognition as a skilled maintenance and reliability technician',
  'Enhanced technical credibility and career advancement opportunities',
  'Comprehensive knowledge of hands-on reliability practices',
  'Industry-standard certification for technician-level professionals',
  'Improved job security and earning potential',
  'Access to continuing education and professional development',
];

export const eligibilityRequirements = [
  'High school diploma or equivalent',
  '2 years of hands-on maintenance experience',
  'OR completion of a technical training program',
  'Basic understanding of mechanical and electrical systems',
];

export const examTopics = [
  {
    category: 'Maintenance Fundamentals',
    percentage: '25%',
    topics: [
      'Safety procedures',
      'Tools and equipment',
      'Basic maintenance principles',
      'Documentation',
    ],
  },
  {
    category: 'Mechanical Systems',
    percentage: '30%',
    topics: [
      'Pumps and compressors',
      'Bearings and seals',
      'Belts and chains',
      'Gearboxes',
    ],
  },
  {
    category: 'Electrical Systems',
    percentage: '20%',
    topics: [
      'Motor maintenance',
      'Control systems',
      'Electrical safety',
      'Troubleshooting',
    ],
  },
  {
    category: 'Reliability Practices',
    percentage: '25%',
    topics: [
      'Preventive maintenance',
      'Condition monitoring',
      'Root cause analysis',
      'Failure modes',
    ],
  },
];

export const practicalSkills = [
  {
    icon: Wrench,
    title: 'Hands-on Maintenance',
    description:
      'Practical skills in equipment maintenance, repair, and troubleshooting',
  },
  {
    icon: Settings,
    title: 'Condition Monitoring',
    description:
      'Techniques for monitoring equipment condition and performance',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description:
      'Ensuring maintenance work meets quality standards and specifications',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Proper documentation of maintenance activities and findings',
  },
];
