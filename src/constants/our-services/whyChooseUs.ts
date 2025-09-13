import {
  Award,
  Users,
  Target,
  BarChart3,
  Shield,
  Globe,
  Lightbulb,
} from 'lucide-react';

export const reasons = [
  {
    title: 'Proven Expertise Across Asset-Intensive Industries',
    description:
      'With a strong foundation in engineering principles and sector-specific knowledge, REA brings extensive experience serving Oil & Gas, Power Generation, Petrochemicals, Fertilizers, Water Utilities, and Mining.',
    icon: Award,
    details: [
      'Deep industry knowledge and experience',
      'Understanding of unique technical challenges',
      'Regulatory and commercial expertise',
      'Tailored solutions for each domain',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Standards-Based, Globally Recognized Methodologies',
    description:
      'Our methodologies align with leading international frameworks, including ISO 55000, ISO 14224, API RP 580/581, and client-specific reliability protocols such as ADNOC, ARAMCO, BP, and SHELL.',
    icon: Shield,
    details: [
      'ISO 55000 compliance',
      'API standards alignment',
      'Client-specific protocols',
      'Global recognition and credibility',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Comprehensive, End-to-End Service Model',
    description:
      'REA provides a unified suite of reliability engineering and asset management services including RCM, RCFA, RBI, Condition Monitoring, Asset Lifecycle Planning, and Technical Training & Advisory.',
    icon: Target,
    details: [
      'Integrated service delivery',
      'Seamless implementation',
      'Comprehensive coverage',
      'Long-term performance monitoring',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Data-Driven, Technology-Enabled Intelligence',
    description:
      'Our digital capabilities enhance decision-making at every level. REA integrates IIoT, cloud-based platforms, and AI-assisted diagnostics to provide real-time visibility into asset conditions.',
    icon: BarChart3,
    details: [
      'Real-time asset visibility',
      'AI-assisted diagnostics',
      'Predictive maintenance strategies',
      'Cost optimization insights',
    ],
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Customized Strategies Aligned with Business Objectives',
    description:
      "We reject templated solutions. Every engagement begins with a deep understanding of your organization's operational priorities, asset criticality, and performance benchmarks.",
    icon: Lightbulb,
    details: [
      'Business-aligned solutions',
      'Customized approaches',
      'Measurable outcomes',
      'Strategic alignment',
    ],
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Knowledge Transfer and Workforce Enablement',
    description:
      'Through our Center for Reliability Excellence, we build in-house capability within client organizations. Our structured training programs equip professionals with competencies to manage reliability initiatives internally.',
    icon: Users,
    details: [
      'Internal capability building',
      'Structured training programs',
      'Role-based curriculum',
      'Long-term self-sufficiency',
    ],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'Partnership-Focused Approach',
    description:
      'At REA, we go beyond project delivery. We build enduring partnerships grounded in transparency, performance accountability, and continuous improvement.',
    icon: Globe,
    details: [
      'Enduring partnerships',
      'Transparency and accountability',
      'Continuous improvement',
      'Strategic value delivery',
    ],
    color: 'from-teal-500 to-teal-600',
  },
];

export const industries = [
  'Oil & Gas',
  'Power Generation',
  'Petrochemicals',
  'Fertilizers',
  'Water Utilities',
  'Mining',
  'Manufacturing',
  'Process Industries',
];

export const standards = [
  'ISO 55000 (Asset Management)',
  'ISO 14224 (Reliability Data)',
  'API RP 580/581 (Risk-Based Inspection)',
  'ADNOC Standards',
  'ARAMCO Protocols',
  'BP Guidelines',
  'SHELL Standards',
];
