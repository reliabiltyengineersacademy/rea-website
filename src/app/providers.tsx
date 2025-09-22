'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import SplashProvider from '@/components/providers/splash-provider';

export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <SplashProvider>
        {children}
      </SplashProvider>
    </NextThemesProvider>
  );
}
