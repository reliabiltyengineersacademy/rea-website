import { Award, Users, TrendingUp, Shield, Globe, Target } from 'lucide-react';

export const certifications = [
  'IAM - Institute of Asset Management',
  'CMRP - Certified Maintenance & Reliability Professional',
  'CRL - Certified Reliability Leader',
  'CAMA - Certified Asset Management Assessor',
  'RCM3™ - Reliability Centered Maintenance',
  'PROACT® RCA - Root Cause Analysis',
  'ARP-E - Asset Reliability Practitioner',
  'ASQ-CRE - Certified Reliability Engineer',
  'Six Sigma Green Belt',
  'CAT II Vibration Analyst',
];

export const expertiseAreas = [
  {
    icon: Shield,
    title: 'Reliability Frameworks',
    description: 'RCM, RAM, RCA, and Reliability Analytics Projects',
    details: [
      'Reliability Centered Maintenance',
      'Risk Assessment & Management',
      'Root Cause Analysis',
      'Predictive Analytics',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Asset Health & Integrity',
    description:
      'Asset Aging Assessments, Replacement Decision-Making, and Asset Integrity Management',
    details: [
      'Asset Health Index',
      'Aging Assessment',
      'Replacement Strategies',
      'Integrity Management',
    ],
  },
  {
    icon: Globe,
    title: 'Digitization & IIoT Solutions',
    description:
      'Leveraging predictive analytics and cutting-edge technologies for smarter asset management',
    details: [
      'Predictive Analytics',
      'IIoT Implementation',
      'Digital Transformation',
      'Smart Asset Management',
    ],
  },
  {
    icon: Target,
    title: 'Documentation & Process Excellence',
    description:
      'Development of RCM, FMEA, RAM Studies, RCA reports, and reliability procedures',
    details: [
      'RCM Studies',
      'FMEA Analysis',
      'RAM Studies',
      'Reliability Procedures',
    ],
  },
];

export const tools = [
  'GE APM',
  'IPS APM/AIP',
  'DNV MAROS',
  'SAP',
  'IBM Maximo',
  'Reliasoft',
  'JMP',
  'Power BI',
  'Tableau',
];

export const industries = [
  {
    name: 'Utilities',
    description: 'Power generation, transmission, and distribution systems',
  },
  {
    name: 'Petrochemicals',
    description: 'Oil & gas, refining, and chemical processing facilities',
  },
  {
    name: 'Ports & Marine',
    description:
      'Port operations, marine terminals, and shipping infrastructure',
  },
];

export const achievements = [
  {
    icon: Users,
    number: '1000+',
    label: 'Professionals Trained',
    description:
      'Reliability engineers and maintenance professionals certified',
  },
  {
    icon: Globe,
    number: '25+',
    label: 'Countries Served',
    description: 'Global reach across multiple continents and industries',
  },
  {
    icon: TrendingUp,
    number: '40%',
    label: 'Average Downtime Reduction',
    description: 'Achieved through implemented reliability frameworks',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years of Excellence',
    description: 'Dedicated to advancing reliability engineering practices',
  },
];
