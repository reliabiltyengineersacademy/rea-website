import { Activity, Thermometer, Volume2, Droplets, Zap } from 'lucide-react';

export const services = [
  {
    title: 'Vibration Analysis',
    description:
      'Advanced vibration monitoring and analysis to detect mechanical faults, misalignment, and bearing issues.',
    icon: Activity,
    benefits: [
      'Early fault detection',
      'Prevents catastrophic failures',
      'Reduces maintenance costs',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Infrared Thermography',
    description:
      'Thermal imaging analysis to identify electrical faults, insulation problems, and heat-related issues.',
    icon: Thermometer,
    benefits: [
      'Non-contact inspection',
      'Electrical fault detection',
      'Energy efficiency optimization',
    ],
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Ultrasonic Inspection',
    description:
      'High-frequency sound analysis for detecting leaks, electrical discharges, and mechanical anomalies.',
    icon: Volume2,
    benefits: [
      'Leak detection',
      'Electrical arcing detection',
      'Bearing condition assessment',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Lubrication and Oil Analysis',
    description:
      'Comprehensive oil analysis to monitor contamination, wear particles, and lubricant condition.',
    icon: Droplets,
    benefits: [
      'Contamination control',
      'Wear particle analysis',
      'Lubricant optimization',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Electrical Signature & Motor Diagnostics',
    description:
      'Advanced electrical testing to assess motor health, power quality, and electrical system integrity.',
    icon: Zap,
    benefits: [
      'Motor health assessment',
      'Power quality analysis',
      'Electrical fault detection',
    ],
    color: 'from-yellow-500 to-yellow-600',
  },
];

export const technologies = [
  'IIoT-enabled monitoring sensors',
  'Cloud-based data analytics platforms',
  'Machine learning algorithms',
  'Real-time dashboard systems',
  'Predictive maintenance software',
  'Mobile inspection applications',
];

export const benefits = [
  'Real-time asset health monitoring',
  'Early detection of performance degradation',
  'Optimized maintenance schedules',
  'Minimized failure risks',
  'Avoided unscheduled shutdowns',
  'Improved asset utilization',
  'Reduced maintenance costs',
  'Enhanced safety compliance',
];

export const implementationProcess = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description:
      'Comprehensive evaluation of current maintenance practices and asset criticality analysis.',
  },
  {
    step: '02',
    title: 'Technology Selection',
    description:
      'Customized selection of monitoring technologies based on asset types and failure modes.',
  },
  {
    step: '03',
    title: 'Installation & Integration',
    description:
      'Professional installation and integration with existing systems and workflows.',
  },
  {
    step: '04',
    title: 'Training & Support',
    description:
      'Comprehensive training and ongoing support to ensure successful adoption and utilization.',
  },
];
