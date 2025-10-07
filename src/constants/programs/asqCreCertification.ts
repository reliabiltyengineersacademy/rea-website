import { Users, Shield, TrendingUp, Search } from 'lucide-react';

export const benefits = [
  'Global recognition as a certified reliability engineering professional',
  'Enhanced career opportunities and earning potential in reliability engineering',
  'Comprehensive knowledge of reliability engineering principles and practices',
  'Access to exclusive ASQ member resources and professional network',
  'Demonstrated expertise in product and system reliability enhancement',
  'Industry credibility and professional validation in reliability engineering',
];

export const targetAudience = [
  {
    title: 'Reliability Engineers',
    description:
      'Professionals responsible for ensuring product and system reliability throughout the lifecycle',
  },
  {
    title: 'Quality Engineers',
    description:
      'Quality professionals seeking to expand expertise into reliability engineering',
  },
  {
    title: 'Design Engineers',
    description:
      'Engineers involved in product design who need reliability engineering knowledge',
  },
  {
    title: 'Maintenance Engineers',
    description:
      'Maintenance professionals looking to enhance their reliability engineering skills',
  },
];

export const examDomains = [
  {
    domain: 'Reliability Program Management',
    percentage: '20%',
    topics: [
      'Reliability program planning',
      'Life cycle management',
      'Reliability standards and regulations',
      'Program evaluation and improvement',
    ],
  },
  {
    domain: 'Design Review and Control',
    percentage: '18%',
    topics: [
      'Design for reliability',
      'Reliability requirements',
      'Design review processes',
      'Configuration management',
    ],
  },
  {
    domain: 'Prediction, Estimation, and Apportionment',
    percentage: '15%',
    topics: [
      'Reliability prediction methods',
      'Failure rate estimation',
      'Reliability allocation',
      'Statistical analysis',
    ],
  },
  {
    domain: 'Failure Mode Effects and Analysis',
    percentage: '12%',
    topics: [
      'FMEA methodology',
      'Failure mode identification',
      'Effects analysis',
      'Risk assessment',
    ],
  },
  {
    domain: 'Reliability Testing',
    percentage: '15%',
    topics: [
      'Test planning and design',
      'Accelerated testing',
      'Environmental testing',
      'Test data analysis',
    ],
  },
  {
    domain: 'Field Failure Analysis',
    percentage: '10%',
    topics: [
      'Failure investigation',
      'Root cause analysis',
      'Field data collection',
      'Corrective action',
    ],
  },
  {
    domain: 'Human Factors in Reliability',
    percentage: '5%',
    topics: [
      'Human reliability analysis',
      'Human-machine interface',
      'Error prevention',
      'Safety considerations',
    ],
  },
  {
    domain: 'Reliability Information Systems',
    percentage: '5%',
    topics: [
      'Data management',
      'Reliability databases',
      'Information systems',
      'Data quality',
    ],
  },
];

export const careerBenefits = [
  {
    icon: Shield,
    title: 'Professional Credibility',
    description:
      'Establish yourself as a recognized reliability engineering expert',
  },
  {
    icon: TrendingUp,
    title: 'Career Advancement',
    description: 'Open doors to senior reliability engineering positions',
  },
  {
    icon: Search,
    title: 'Technical Expertise',
    description:
      'Develop advanced skills in reliability analysis and prediction',
  },
  {
    icon: Users,
    title: 'Network Access',
    description: 'Join the global ASQ community of reliability professionals',
  },
];

export const eligibilityOptions = [
  {
    title: 'Option 1: Experience Only',
    requirements: [
      '8 years of on-the-job experience in CRE Body of Knowledge areas',
      'Minimum 3 years in a decision-making position',
    ],
  },
  {
    title: 'Option 2: Education + Experience',
    requirements: [
      'Bachelor&apos;s degree in engineering or related field',
      '4 years of experience (degree waives 4 years)',
    ],
  },
  {
    title: 'Option 3: Advanced Degree + Experience',
    requirements: [
      'Master&apos;s or doctorate degree',
      '3 years of experience (degree waives 5 years)',
    ],
  },
];

export const examDetails = {
  duration: '4 hours 18 minutes',
  questions: '165 multiple-choice questions (150 scored, 15 unscored)',
  cost: '$533 (retakes $333)',
  validity: '3 years',
  recertification: '18 recertification units required',
  format: 'Computer-based or paper-based',
};

export const preparationModules = [
  {
    title: 'Reliability Fundamentals',
    description: 'Core principles of reliability engineering and terminology',
    topics: [
      'Reliability definitions and metrics',
      'Failure mechanisms and modes',
      'Reliability mathematics',
      'Probability and statistics',
    ],
  },
  {
    title: 'Design for Reliability',
    description: 'Integrating reliability into product design processes',
    topics: [
      'Design review methodologies',
      'Reliability requirements specification',
      'Design optimization techniques',
      'Configuration management',
    ],
  },
  {
    title: 'Reliability Analysis Methods',
    description: 'Advanced analytical techniques for reliability assessment',
    topics: [
      'FMEA and FMECA',
      'Fault tree analysis',
      'Reliability block diagrams',
      'Markov analysis',
    ],
  },
  {
    title: 'Reliability Testing',
    description: 'Planning and executing reliability test programs',
    topics: [
      'Test planning and design',
      'Accelerated life testing',
      'Environmental stress testing',
      'Test data analysis and interpretation',
    ],
  },
  {
    title: 'Reliability Program Management',
    description: 'Managing reliability programs throughout the lifecycle',
    topics: [
      'Program planning and organization',
      'Lifecycle management',
      'Standards and regulations',
      'Continuous improvement',
    ],
  },
];
