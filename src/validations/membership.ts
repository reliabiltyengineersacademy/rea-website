import { z } from 'zod';

export const membershipSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name.'),
  lastName: z.string().min(1, 'Please enter your last name.'),
  email: z.string().email('Enter a valid email address.'),
  phone: z.string().optional(),
  company: z.string().min(1, 'Please enter your organization.'),
  role: z.string().min(1, 'Please enter your role/title.'),
  country: z.string().min(1, 'Select your country/region.'),
  experience: z.string().min(1, 'Select your experience band.'),
  industry: z.string().min(1, 'Select your industry.'),
  interests: z.array(z.string()).optional(),
  certs: z.string().optional(),
  referrer: z.string().optional(),
  statement: z.string().min(1, 'Please share a short statement.').max(600, 'Statement should be 600 characters or less.'),
  tier: z.string().min(1, 'Please choose a membership tier.'),
  chapter: z.string().optional(),
  payment: z.string().optional(),
  ethics: z.boolean().refine(val => val === true, 'You must agree to the Code of Ethics.'),
  privacy: z.boolean().refine(val => val === true, 'You must consent to data processing.'),
  news: z.boolean().optional(),
  hpt: z.string().optional(), // Honeypot field
});

export type MembershipFormData = z.infer<typeof membershipSchema>;

export const membershipTiers = [
  'Student',
  'Professional',
  'Corporate (3 seats)',
  'Corporate (10 seats)',
  'Fellow',
  'Lifetime',
] as const;

export const countries = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Oman',
  'Qatar',
  'Bahrain',
  'Kuwait',
  'India',
  'Other',
] as const;

export const experienceLevels = [
  '0–2',
  '3–5',
  '6–10',
  '11–15',
  '16–20',
  '20+',
] as const;

export const industries = [
  'Power & Water Utilities',
  'Oil & Gas / Petrochemicals',
  'Ports & Terminals / Marine',
  'Manufacturing / FMCG',
  'Mining / Metals',
  'Transportation / Logistics',
  'Consulting / Training',
  'Other',
] as const;

export const professionalInterests = [
  { value: 'RCM', label: 'RCM2/RCM3' },
  { value: 'FMECA', label: 'FMECA' },
  { value: 'APM', label: 'APM / Asset Twins' },
  { value: 'RAM', label: 'RAM / RBD / LCC' },
  { value: 'PdM', label: 'PdM / CM / IIoT' },
  { value: 'ISO55000', label: 'ISO 55000' },
  { value: 'RCA', label: 'RCA / FRACAS' },
  { value: 'Leadership', label: 'Reliability Leadership' },
] as const;

export const referrerOptions = [
  'LinkedIn',
  'Conference / Event',
  'Colleague / Friend',
  'Training / Workshop',
  'Search Engine',
  'Other',
] as const;

export const chapters = [
  'UAE (MENA)',
  'Saudi Arabia',
  'India',
  'Qatar',
  'Oman',
  'Global / Virtual',
] as const;

export const paymentOptions = [
  'Invoice (Bank Transfer)',
  'Card (Stripe)',
  'UPI',
] as const;
