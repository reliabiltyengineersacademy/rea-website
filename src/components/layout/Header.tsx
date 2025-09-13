'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
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
        description: 'Explore our comprehensive reliability engineering services',
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
        description: 'Reliability maturity and organizational capability building',
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

const ListItem = ({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string; title: string }) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (pathname == '/') setIsScrolled(false);
    else setIsScrolled(true);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background border-b shadow-sm'
          : 'bg-transparent border-b-0'
      )}
    >
      <div className='xl:container px-4 flex h-16 items-center justify-between'>
        <div className='mr-4 flex'>
          <Link href='/' className='mr-6'>
            <Image
              priority
              width={120}
              height={56}
              src='/logo-transparent.png'
              alt='Reliability Engineers Academy'
              className={cn(
                'h-14 w-auto transition-all duration-300',
                isScrolled
                  ? 'brightness-100 dark:brightness-0 dark:invert'
                  : 'brightness-0 invert'
              )}
            />
          </Link>
        </div>

        <div className='flex items-center'>
          <NavigationMenu className='hidden lg:flex' viewport={false}>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          'group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow]',
                          pathname === item.href
                            ? isScrolled
                              ? 'text-primary font-bold'
                              : 'text-white font-bold'
                            : isScrolled
                            ? 'text-muted-foreground'
                            : 'text-white'
                        )}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                          {item.children.map((child) => (
                            <ListItem
                              key={child.name}
                              title={child.name}
                              href={child.href}
                            >
                              {child.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className='group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow]'
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'transition-all duration-300',
                          pathname === item.href
                            ? isScrolled
                              ? 'text-primary font-bold'
                              : 'text-white font-bold'
                            : isScrolled
                            ? 'text-muted-foreground'
                            : 'text-white'
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className='hidden lg:flex items-center'>
            <div
              className={cn(
                'transition-colors duration-300',
                isScrolled ? 'text-foreground' : 'text-white'
              )}
            >
              <ThemeToggle />
            </div>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='lg:hidden'>
              <Button
                variant='ghost'
                size='icon'
                className={cn(
                  'transition-colors duration-300',
                  isScrolled
                    ? 'text-foreground hover:bg-accent'
                    : 'text-white hover:bg-white/10'
                )}
              >
                <Menu className='size-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-full sm:w-[400px] p-0'>
              <div className='flex flex-col h-full'>
                <div className='flex items-center justify-between p-6 border-b'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src='/logo-transparent.png'
                      alt='Reliability Engineers Academy'
                      width={80}
                      height={32}
                      className='h-8 w-auto'
                    />
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setIsOpen(false)}
                    className='size-8 text-foreground hover:bg-accent'
                  >
                    <X className='size-4' />
                    <span className='sr-only'>Close menu</span>
                  </Button>
                </div>

                <div className='flex-1 overflow-y-auto p-6'>
                  <nav className='space-y-6'>
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <div className='space-y-3'>
                            <div className='text-lg font-semibold text-foreground border-b border-border pb-2'>
                              {item.name}
                            </div>
                            <div className='space-y-2 pl-4'>
                              {item.children.map((child) => (
                                <div
                                  key={child.name}
                                  className={cn(
                                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                    pathname === child.href
                                      ? 'bg-accent text-accent-foreground'
                                      : ''
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <Link href={child.href} className='block'>
                                    <div className='text-sm font-medium leading-none'>
                                      {child.name}
                                    </div>
                                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                      {child.description}
                                    </p>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              'flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground group',
                              pathname === item.href
                                ? 'bg-accent text-accent-foreground'
                                : 'text-foreground'
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{item.name}</span>
                            <ChevronRight className='size-4 opacity-50 group-hover:opacity-100 transition-opacity' />
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                <div className='border-t p-6 space-y-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium text-foreground'>
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>
                  <div className='text-xs text-muted-foreground text-center'>
                    © 2025 Reliability Engineers Academy
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
