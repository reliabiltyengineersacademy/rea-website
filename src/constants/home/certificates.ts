import { Award, TrendingUp, Shield, Zap, Search, Settings } from 'lucide-react';

export const certifications = [
  {
    icon: Award,
    title: 'CAMA Certification',
    subtitle: 'Certified Asset Management Assessor',
    description:
      'Advanced certification in asset management assessment and optimization strategies.',
    duration: '8 months',
    level: 'Expert',
    features: [
      'Asset Strategy',
      'Risk Assessment',
      'Performance Metrics',
      'Lifecycle Management',
    ],
    link: '/programs/cama',
  },
  {
    icon: Shield,
    title: 'CMRP Certification',
    subtitle: 'Certified Maintenance & Reliability Professional',
    description:
      'Comprehensive certification covering maintenance and reliability fundamentals, planning, and execution.',
    duration: '6 months',
    level: 'Professional',
    features: [
      'Asset Management',
      'Maintenance Planning',
      'Reliability Analysis',
      'Work Management',
    ],
    link: '/programs/cmrp',
  },
  {
    icon: TrendingUp,
    title: 'CMRT Certification',
    subtitle: 'Certified Maintenance & Reliability Technician',
    description:
      'Technical certification focused on hands-on maintenance and reliability practices.',
    duration: '4 months',
    level: 'Technician',
    features: [
      'Preventive Maintenance',
      'Troubleshooting',
      'Equipment Care',
      'Safety Protocols',
    ],
    link: '/programs/cmrt',
  },
  {
    icon: Zap,
    title: 'Vibration Analysis',
    subtitle: 'ISO 18436 Certified Program',
    description:
      'Comprehensive vibration analysis training for predictive maintenance applications.',
    duration: '3 months',
    level: 'Specialist',
    features: [
      'Signal Processing',
      'Fault Diagnosis',
      'Machinery Health',
      'Data Analysis',
    ],
    link: '/programs/vibration',
  },
  {
    icon: Search,
    title: 'Infrared Thermography',
    subtitle: 'Level I & II Certification',
    description:
      'Professional thermography training for electrical and mechanical inspections.',
    duration: '2 months',
    level: 'Specialist',
    features: [
      'Thermal Imaging',
      'Heat Patterns',
      'Electrical Inspection',
      'Report Writing',
    ],
    link: '/programs/thermography',
  },
  {
    icon: Settings,
    title: 'Lube Oil Analysis',
    subtitle: 'Tribology & Oil Analysis',
    description:
      'Specialized training in lubricant analysis and tribological principles.',
    duration: '3 months',
    level: 'Specialist',
    features: [
      'Oil Testing',
      'Contamination Analysis',
      'Wear Patterns',
      'Lubrication Programs',
    ],
    link: '/programs/lube-oil',
  },
];
