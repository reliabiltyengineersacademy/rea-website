import Link from 'next/link';
import Image from 'next/image';

import {
  quickLinks,
  programs,
  resources,
  socialLinks,
} from '@/constants/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import NewsletterSubscription from '@/components/ui/newsletter-subscription';
import ThemeToggle from '@/components/layout/ThemeToggle';

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
                className='h-12 md:h-14 w-auto mb-4 brightness-100 dark:brightness-0 dark:invert'
              />
              <p className='text-muted-foreground leading-relaxed'>
                Empowering engineers and organizations with world-class
                training, certifications, and expertise in asset reliability
                engineering.
              </p>
            </div>

            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <span className='text-xl flex-shrink-0 mt-0.5'>
                  ✉️
                </span>
                <a 
                  href='mailto:reliabiltyengineersacademy@gmail.com'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed break-words'
                >
                  reliabiltyengineersacademy@gmail.com
                </a>
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
                    <a 
                      href={social.href} 
                      aria-label={social.name}
                      target={social.href !== '#' ? '_blank' : undefined}
                      rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                    >
                      <social.icon className='h-5 w-5' />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className='my-12' />

        <NewsletterSubscription variant='default' />

        <Separator className='my-8' />

        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-muted-foreground text-sm mb-4 md:mb-0'>
            © 2025 Reliability Engineers Academy. All rights reserved.
          </div>
          <div className='flex items-center space-x-6'>
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
            <div className='flex items-center space-x-2'>
              <span className='text-sm text-muted-foreground'>Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
