import { Wrench, CheckCircle, BookOpen, Settings } from 'lucide-react';

export const benefits = [
  'Master the fundamentals of Reliability Centered Maintenance (RCM2) methodology',
  'Learn to identify failure modes and their consequences systematically',
  'Develop skills in maintenance task selection and optimization',
  'Understand the RCM2 decision-making process and logic trees',
  'Gain practical experience with real-world RCM2 applications',
  'Enhance your maintenance strategy development capabilities',
];

export const targetAudience = [
  {
    title: 'Maintenance Engineers',
    description:
      'Engineers responsible for developing and optimizing maintenance strategies',
  },
  {
    title: 'Reliability Engineers',
    description:
      'Professionals focused on improving equipment reliability and performance',
  },
  {
    title: 'Maintenance Managers',
    description:
      'Managers overseeing maintenance operations and strategy implementation',
  },
  {
    title: 'Plant Engineers',
    description:
      'Engineers involved in plant operations and equipment management',
  },
];

export const courseModules = [
  {
    module: 'Module 1: RCM2 Fundamentals',
    duration: '8 hours',
    description: 'Introduction to RCM2 principles and methodology',
    topics: [
      'RCM2 history and evolution',
      'Basic RCM2 principles',
      'Failure modes and effects',
      'RCM2 vs traditional maintenance',
    ],
  },
  {
    module: 'Module 2: Failure Analysis',
    duration: '8 hours',
    description: 'Systematic approach to failure mode identification',
    topics: [
      'Failure mode identification',
      'Failure effects analysis',
      'Failure consequences assessment',
      'Failure criticality ranking',
    ],
  },
  {
    module: 'Module 3: Maintenance Task Selection',
    duration: '8 hours',
    description: 'Selecting appropriate maintenance tasks using RCM2 logic',
    topics: [
      'RCM2 decision logic trees',
      'Task selection criteria',
      'Task effectiveness evaluation',
      'Task interval optimization',
    ],
  },
  {
    module: 'Module 4: RCM2 Implementation',
    duration: '8 hours',
    description: 'Practical implementation of RCM2 programs',
    topics: [
      'RCM2 program planning',
      'Team formation and roles',
      'Data collection requirements',
      'Program monitoring and improvement',
    ],
  },
];

export const practicalSkills = [
  {
    icon: Wrench,
    title: 'RCM2 Analysis',
    description: 'Conducting systematic RCM2 analysis on equipment and systems',
  },
  {
    icon: CheckCircle,
    title: 'Failure Mode Identification',
    description: 'Identifying and documenting failure modes and their effects',
  },
  {
    icon: Settings,
    title: 'Task Selection',
    description: 'Selecting appropriate maintenance tasks using RCM2 logic',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Creating comprehensive RCM2 documentation and reports',
  },
];

export const equipmentTypes = [
  'Rotating machinery (pumps, motors, compressors)',
  'Electrical systems and components',
  'Instrumentation and control systems',
  'Mechanical systems and components',
  'Safety systems and protective devices',
  'Process equipment and vessels',
  'Utility systems and infrastructure',
  'Mobile equipment and vehicles',
];

export const certificationDetails = {
  duration: '32 hours',
  format: 'Classroom training with hands-on exercises',
  prerequisites: 'Basic understanding of maintenance concepts',
  certification: 'RCM2 Introductory Course Certificate',
  validity: 'No expiration',
  recertification: 'Not required',
};
