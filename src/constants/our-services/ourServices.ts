import {
  Shield,
  TrendingUp,
  Target,
  Users,
  Zap,
  Settings,
  BarChart3,
} from 'lucide-react';

export const services = [
  {
    title: 'Reliability Engineering & Maintenance Strategy Advisory',
    description:
      'Customized RCM frameworks, FMEA, Maintenance Optimization, and Criticality Assessments aligned with business KPIs and asset lifecycle goals.',
    icon: Settings,
    href: '/our-services/reliability-engineering',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Condition Monitoring & Predictive Maintenance Solutions',
    description:
      'Real-time asset health monitoring with vibration analysis, thermography, ultrasonic inspection, and oil analysis.',
    icon: BarChart3,
    href: '/our-services/condition-monitoring',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Root Cause Failure Analysis (RCFA)',
    description:
      'Structured RCFA process to identify and eliminate root causes of recurring failures using globally accepted frameworks.',
    icon: Target,
    href: '/our-services/root-cause-analysis',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Asset Integrity & Risk-Based Inspection (RBI)',
    description:
      'Comprehensive risk-ranking model for inspection planning, compliance assurance, and asset lifecycle optimization.',
    icon: Shield,
    href: '/our-services/asset-integrity',
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Enterprise Reliability Transformation Programs',
    description:
      'Enterprise-wide reliability maturity assessments, governance frameworks, and implementation support.',
    icon: TrendingUp,
    href: '/our-services/enterprise-transformation',
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Professional Training & Organizational Capability Building',
    description:
      'Tailored, role-based training and certification programs through our Center for Reliability Excellence.',
    icon: Users,
    href: '/our-services/professional-training',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'Digital Enablement & Consulting',
    description:
      'Digital transformation in asset management with predictive maintenance software and real-time analytics.',
    icon: Zap,
    href: '/our-services/digital-enablement',
    color: 'from-teal-500 to-teal-600',
  },
];

export const industries = [
  'Oil & Gas',
  'Power Generation',
  'Petrochemicals',
  'Fertilizers',
  'Mining',
  'Utilities',
  'Process Industries',
];
