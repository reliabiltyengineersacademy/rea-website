import { Metadata } from 'next';
import MembershipForm from '@/components/membership/MembershipForm';

export const metadata: Metadata = {
  title: 'Join G-ARMP | Membership Application | Reliability Engineers Academy',
  description:
    'Join the Global Association for Reliability & Maintenance Professionals (G-ARMP). Become part of a global community advancing asset reliability and maintenance excellence.',
  keywords:
    'G-ARMP membership, reliability engineering association, maintenance professionals, global network, professional development',
};

export default function MembershipPage() {
  return <MembershipForm />;
}
