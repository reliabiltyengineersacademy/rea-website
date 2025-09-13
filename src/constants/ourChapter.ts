import { Award, Shield, TrendingUp, Network, Zap } from 'lucide-react';

export const values = [
  {
    icon: Award,
    title: 'Technical Excellence',
    description:
      'We promote mastery in reliability tools and techniques such as FMEA, RCM, RCA, CMMS, PdM, and Asset Health Indexing.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Professional Integrity',
    description:
      'We operate with ethical responsibility and industry compliance supporting ISO 55000, SMRP, IAM, and other global standards.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    title: 'Skills Development',
    description:
      'We focus on practical skill-building across core areas including failure analysis, condition monitoring, data analytics, and maintenance optimization.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Network,
    title: 'Cross-Industry Collaboration',
    description:
      'We enable knowledge exchange between sectors—oil & gas, power, water, manufacturing, pharma, ports, and utilities to benchmark and uplift maintenance maturity.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Innovation & Digitalization',
    description:
      'We drive adoption of Industry 4.0 technologies—AI/ML, IoT, digital twins, and APM platforms—to enhance decision-making and reliability outcomes.',
    color: 'from-red-500 to-red-600',
  },
];

export const missionPoints = [
  'To build a global network of skilled reliability and maintenance professionals equipped with the latest tools, standards, and technologies.',
  'To promote competency-based training, certification, and knowledge sharing that supports lifecycle asset management and sustainable operational performance.',
  'To foster alignment between industry needs and professional capabilities in reliability engineering, predictive maintenance, and digital transformation.',
];

export const industries = [
  'Oil & Gas',
  'Power Generation',
  'Water Treatment',
  'Manufacturing',
  'Pharmaceuticals',
  'Ports & Marine',
  'Utilities',
  'Mining',
];

export const technologies = [
  'AI/ML',
  'IoT',
  'Digital Twins',
  'APM Platforms',
  'Predictive Analytics',
  'CMMS',
  'Asset Health Indexing',
  'Condition Monitoring',
];

export const certificationTiers = [
  {
    title: 'GARMT',
    subtitle: 'Global Associate Reliability & Maintenance Technician',
    target: 'Technicians and entry-level engineers',
    focus:
      'Foundational knowledge of maintenance practices, safety, and basic reliability',
    exam: '100 MCQs (knowledge-based)',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'GARMP',
    subtitle: 'Global Associate Reliability & Maintenance Professional',
    target: 'Engineers, analysts, planners',
    focus: 'Preventive, predictive, and reliability engineering practices',
    exam: '150 MCQs + case study scenario',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'GARML',
    subtitle: 'Global Reliability & Maintenance Leader',
    target: 'Managers, supervisors, leaders',
    focus:
      'Leadership, strategy, cost optimization, and asset management governance',
    exam: '150 MCQs + written essay + practical project',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'GARME',
    subtitle: 'Global Expert in Reliability & Maintenance',
    target: 'Senior experts, consultants',
    focus:
      'Global authority level, advanced analytics, and digital transformation expertise',
    exam: 'Peer-reviewed portfolio + viva + white paper publication',
    color: 'from-orange-500 to-orange-600',
  },
];

export const competencyDomains = [
  {
    title: 'Maintenance Practices',
    topics: [
      'Preventive',
      'Predictive',
      'Corrective',
      'Condition-based',
      'Lubrication',
      'Alignment',
    ],
  },
  {
    title: 'Reliability Engineering',
    topics: [
      'RCM',
      'FMECA',
      'Weibull Analysis',
      'Reliability Modeling (RBD, LCC)',
    ],
  },
  {
    title: 'Asset Management & Strategy',
    topics: [
      'ISO 55000 Alignment',
      'Criticality',
      'Lifecycle Costing',
      'AHI/ACI',
    ],
  },
  {
    title: 'Digitalization & Analytics',
    topics: ['APM Tools', 'IoT', 'AI/ML', 'Big Data in Reliability'],
  },
  {
    title: 'Work Management & Planning',
    topics: ['CMMS/EAM (Maximo, SAP, IPS)', 'Planning', 'Scheduling', 'KPIs'],
  },
  {
    title: 'Leadership, Safety & Sustainability',
    topics: [
      'Organizational Culture',
      'EHS',
      'ESG',
      'Financial Risk Trade-offs',
    ],
  },
];
