export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Meet the Founder', href: '/about' },
  { name: 'Our Chapter', href: '/our-chapter' },
  {
    name: 'Our Services',
    href: '/our-services',
    children: [
      {
        name: 'All Services',
        href: '/our-services',
        description:
          'Explore our comprehensive reliability engineering services',
      },
      {
        name: 'Reliability Engineering',
        href: '/our-services/reliability-engineering',
        description: 'RCM frameworks, FMEA, and maintenance strategy advisory',
      },
      {
        name: 'Condition Monitoring',
        href: '/our-services/condition-monitoring',
        description: 'Predictive maintenance and real-time asset monitoring',
      },
      {
        name: 'Root Cause Analysis',
        href: '/our-services/root-cause-analysis',
        description: 'Structured RCFA process and failure investigation',
      },
      {
        name: 'Asset Integrity',
        href: '/our-services/asset-integrity',
        description: 'Risk-based inspection and compliance assurance',
      },
      {
        name: 'Enterprise Transformation',
        href: '/our-services/enterprise-transformation',
        description:
          'Reliability maturity and organizational capability building',
      },
      {
        name: 'Professional Training',
        href: '/our-services/professional-training',
        description: 'Certification programs and workforce development',
      },
      {
        name: 'Digital Enablement',
        href: '/our-services/digital-enablement',
        description: 'Digital transformation and technology consulting',
      },
      {
        name: 'Why Choose REA',
        href: '/our-services/why-choose-us',
        description: 'Learn why leading organizations trust REA',
      },
    ],
  },
  {
    name: 'Programs & Certifications',
    href: '/programs',
    children: [
      {
        name: 'All Programs',
        href: '/programs',
        description:
          'Explore all our certification programs and training courses',
      },
      {
        name: 'Vibration Analysis',
        href: '/programs/vibration',
        description: 'ISO 18436 Certified Vibration Analysis Program',
      },
      {
        name: 'Infrared Thermography',
        href: '/programs/thermography',
        description: 'Level I & II Thermography Certification',
      },
      {
        name: 'CMRP Certification',
        href: '/programs/cmrp',
        description: 'Certified Maintenance & Reliability Professional',
      },
      {
        name: 'CMRT Certification',
        href: '/programs/cmrt',
        description: 'Certified Maintenance & Reliability Technician',
      },
      {
        name: 'CAMA Certification',
        href: '/programs/cama',
        description: 'Certified Asset Management Assessor',
      },
    ],
  },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Articles', href: '/articles' },
  { name: 'Pricing', href: '/pricing' },
];
