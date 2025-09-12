import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Programs & Certifications', href: '/programs' },
  { name: 'Training Modules', href: '/training' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Contact', href: '/contact' },
];

const programs = [
  { name: 'CMRP Certification', href: '/programs#cmrp' },
  { name: 'CMRT Certification', href: '/programs#cmrt' },
  { name: 'CAMA Certification', href: '/programs#cama' },
  { name: 'Vibration Analysis', href: '/programs#vibration' },
  { name: 'Infrared Thermography', href: '/programs#thermography' },
];

const resources = [
  { name: 'Case Studies', href: '/webinars' },
  { name: 'White Papers', href: '/webinars' },
  { name: 'Monthly Webinars', href: '/webinars' },
  { name: 'Training Modules', href: '/training' },
  { name: 'Pricing Plans', href: '/pricing' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Youtube, href: '#', name: 'YouTube' },
  { icon: Facebook, href: '#', name: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className='bg-accent'>
      <div className='container py-16'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
          <div className='lg:col-span-1'>
            <div className='mb-6'>
              <Image
                src='/logo-transparent.png'
                alt='Reliability Engineers Academy'
                width={120}
                height={48}
                className='h-12 w-auto mb-4'
              />
              <p className='text-muted-foreground leading-relaxed'>
                Empowering engineers and organizations with world-class
                training, certifications, and expertise in asset reliability
                engineering.
              </p>
            </div>

            <div className='space-y-3'>
              <div className='flex items-center'>
                <Mail className='h-5 w-5 text-primary mr-3' />
                <span className='text-muted-foreground'>
                  info@reliabilityengineers.academy
                </span>
              </div>
              <div className='flex items-center'>
                <Phone className='h-5 w-5 text-primary mr-3' />
                <span className='text-muted-foreground'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-start'>
                <MapPin className='h-5 w-5 text-primary mr-3 mt-1' />
                <span className='text-muted-foreground'>
                  123 Reliability Drive, Suite 100
                  <br />
                  Houston, TX 77001, USA
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6'>Programs</h3>
            <ul className='space-y-3'>
              {programs.map((program, index) => (
                <li key={index}>
                  <Link
                    href={program.href}
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6'>Resources</h3>
            <ul className='space-y-3 mb-6'>
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h4 className='text-sm font-semibold mb-4 text-muted-foreground'>
                Follow Us
              </h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant='outline'
                    size='icon'
                    asChild
                    className='h-10 w-10'
                  >
                    <a href={social.href} aria-label={social.name}>
                      <social.icon className='h-5 w-5' />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className='my-12' />

        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Stay Updated</h3>
            <p className='text-muted-foreground'>
              Subscribe to our newsletter for the latest reliability engineering
              insights and updates.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Input
              type='email'
              placeholder='Enter your email'
              className='flex-1 bg-background min-h-12'
            />
            <Button className='shrink-0 min-h-12'>Subscribe</Button>
          </div>
        </div>

        <Separator className='my-8' />

        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-muted-foreground text-sm mb-4 md:mb-0'>
            © 2025 Reliability Engineers Academy. All rights reserved.
          </div>
          <div className='flex space-x-6 text-sm'>
            <Link
              href='#privacy'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='#terms'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              Terms of Service
            </Link>
            <Link
              href='#cookies'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
