export interface Webinar {
  id: number;
  title: string;
  description: string;
  speaker: string;
  date: string;
  duration: string;
  category: string;
  videoId: string;
  thumbnail: string;
  views: number;
  status: 'upcoming' | 'completed';
  registrationUrl?: string;
  recordingUrl?: string;
}

export const webinars: Webinar[] = [
  {
    id: 1,
    title: 'Advanced Vibration Analysis Techniques',
    description:
      'Deep dive into advanced vibration analysis methods for predictive maintenance applications in rotating machinery.',
    speaker: 'KVK Subramaniyam Naidu',
    date: 'March 15, 2025',
    duration: '60 minutes',
    category: 'predictive',
    videoId: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail:
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: 1250,
    status: 'completed',
    recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Digital Transformation in Asset Management',
    description:
      'Exploring how digital technologies are revolutionizing asset management practices across industries.',
    speaker: 'KVK Subramaniyam Naidu',
    date: 'March 22, 2025',
    duration: '45 minutes',
    category: 'technology',
    videoId: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: 980,
    status: 'completed',
    recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Root Cause Analysis Best Practices',
    description:
      'Comprehensive guide to conducting effective root cause failure analysis using proven methodologies.',
    speaker: 'KVK Subramaniyam Naidu',
    date: 'March 29, 2025',
    duration: '75 minutes',
    category: 'analysis',
    videoId: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: 1450,
    status: 'completed',
    recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'ISO 55000 Implementation Framework',
    description:
      'Step-by-step approach to implementing ISO 55000 asset management standards in your organization.',
    speaker: 'KVK Subramaniyam Naidu',
    date: 'April 5, 2025',
    duration: '90 minutes',
    category: 'compliance',
    videoId: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: 875,
    status: 'upcoming',
    registrationUrl: '#',
  },
  {
    id: 5,
    title: 'Condition Monitoring Technologies',
    description:
      'Overview of modern condition monitoring technologies and their applications in industrial settings.',
    speaker: 'KVK Subramaniyam Naidu',
    date: 'April 12, 2025',
    duration: '55 minutes',
    category: 'predictive',
    videoId: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail:
      'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: 1120,
    status: 'completed',
    recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: 'AI in Maintenance Optimization',
    description:
      'How artificial intelligence is transforming maintenance scheduling and resource allocation strategies.',
    speaker: 'KVK Subramaniyam Naidu',
    date: 'April 19, 2025',
    duration: '65 minutes',
    category: 'technology',
    videoId: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: 1340,
    status: 'completed',
    recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const categories = [
  'All',
  'Predictive Maintenance',
  'Technology & Innovation',
  'Failure Analysis',
  'Asset Management',
  'Compliance & Standards',
];

export const sortOptions = [
  { value: 'date-desc', label: 'Latest First' },
  { value: 'date-asc', label: 'Earliest First' },
  { value: 'title-asc', label: 'Title A-Z' },
  { value: 'title-desc', label: 'Title Z-A' },
  { value: 'views-desc', label: 'Most Popular' },
];
