import { Metadata } from 'next';

import Contact from '@/components/home/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Reliability Engineers Academy',
  description:
    'Get in touch with our team to start your reliability engineering journey. Contact us for questions about our programs and services.',
  keywords:
    'contact reliability engineering, CMRP support, maintenance training contact, asset management help',
};

export default function ContactPage() {
  return <Contact />;
}
