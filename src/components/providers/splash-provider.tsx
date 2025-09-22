'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import SplashScreen from '@/components/ui/splash-screen';

interface SplashContextType {
  isSplashVisible: boolean;
  hideSplash: () => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export function useSplash() {
  const context = useContext(SplashContext);
  if (context === undefined) {
    throw new Error('useSplash must be used within a SplashProvider');
  }
  return context;
}

interface SplashProviderProps {
  children: ReactNode;
}

export default function SplashProvider({ children }: SplashProviderProps) {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if splash was already shown in this session
    const splashShown = sessionStorage.getItem('rea-splash-shown');
    if (splashShown) {
      setIsSplashVisible(false);
    }
  }, []);

  const hideSplash = () => {
    setIsSplashVisible(false);
    sessionStorage.setItem('rea-splash-shown', 'true');
  };

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <SplashContext.Provider value={{ isSplashVisible, hideSplash }}>
      {isSplashVisible ? (
        <SplashScreen onComplete={hideSplash} />
      ) : (
        children
      )}
    </SplashContext.Provider>
  );
}
