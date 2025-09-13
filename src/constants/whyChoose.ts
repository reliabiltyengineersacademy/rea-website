import { Globe, Award, Users, TrendingUp, Shield } from 'lucide-react';

export const differentiators = [
  {
    icon: Globe,
    title: 'Global Standards Compliance',
    description:
      'Built on internationally recognized standards including ISO 55000, API RP 580/581, and ISO 14224',
    features: [
      'ISO 55000 Asset Management',
      'API RP 580/581 Risk-Based Inspection',
      'ISO 14224 Reliability Data',
      'IEC 62278 Railway Applications',
    ],
  },
  {
    icon: Users,
    title: 'Industry-Trusted Faculty',
    description:
      'Learn from seasoned professionals with decades of real-world reliability engineering experience',
    features: [
      '20+ Years Average Experience',
      'Active Industry Practitioners',
      'Published Researchers',
      'Global Consulting Expertise',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Capability Transfer Focus',
    description:
      'Emphasis on practical knowledge transfer and empowering professionals with actionable skills',
    features: [
      'Hands-on Training',
      'Real Case Studies',
      'Practical Tools',
      'Immediate Application',
    ],
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    description:
      'Demonstrated success in improving organizational reliability and asset performance',
    features: [
      '98% Success Rate',
      '500+ Certified Professionals',
      '25+ Countries Served',
      'Industry Recognition',
    ],
  },
];

export const achievements = [
  { number: '15+', label: 'Years of Excellence', icon: Award },
  { number: '500+', label: 'Certified Engineers', icon: Users },
  { number: '25+', label: 'Countries Served', icon: Globe },
  { number: '98%', label: 'Success Rate', icon: TrendingUp },
];
