import {
  Award,
  TrendingUp,
  Shield,
  Zap,
  Search,
  Settings,
  Cog,
  Users,
  BarChart3,
} from 'lucide-react';

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
  {
    icon: Cog,
    title: 'ASQ CRE Certification',
    subtitle: 'Certified Reliability Engineer',
    description:
      'Advanced certification in reliability engineering principles and practices for product and system enhancement.',
    duration: '6 months',
    level: 'Professional',
    features: [
      'Reliability Analysis',
      'Failure Mode Analysis',
      'Reliability Testing',
      'Program Management',
    ],
    link: '/programs/asq-cre',
  },
  {
    icon: Users,
    title: 'Prosci Change Management',
    subtitle: 'Certified Change Management Specialist',
    description:
      'World-class certification program that equips you with tools and expertise to lead successful organizational change.',
    duration: '3-5 days',
    level: 'Professional',
    features: [
      'ADKAR Model',
      '3-Phase Process',
      'Change Planning',
      'Organizational Change',
    ],
    link: '/programs/prosci-change-management',
  },
  {
    icon: BarChart3,
    title: 'Asset Performance Management',
    subtitle: 'APM Certification',
    description:
      'Master the art of optimizing asset reliability, availability, and performance while minimizing costs and operational risks.',
    duration: '40+ hours',
    level: 'Professional',
    features: [
      'Predictive Maintenance',
      'Asset Optimization',
      'Risk Management',
      'Performance Metrics',
    ],
    link: '/programs/asset-performance-management',
  },
];
