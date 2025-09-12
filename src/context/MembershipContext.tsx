import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export type MembershipType = 'none' | 'student' | 'professional';

interface MembershipContextType {
  membershipType: MembershipType;
  setMembershipType: (type: MembershipType) => void;
  hasMembership: boolean;
}

const MembershipContext = createContext<MembershipContextType | undefined>(undefined);

export const useMembership = () => {
  const context = useContext(MembershipContext);
  if (context === undefined) {
    throw new Error('useMembership must be used within a MembershipProvider');
  }
  return context;
};

interface MembershipProviderProps {
  children: ReactNode;
}

export const MembershipProvider: React.FC<MembershipProviderProps> = ({ children }) => {
  const [membershipType, setMembershipType] = useState<MembershipType>('none');
  const { user } = useAuth();
  const hasMembership = user !== null && membershipType !== 'none';

  return (
    <MembershipContext.Provider value={{ membershipType, setMembershipType, hasMembership }}>
      {children}
    </MembershipContext.Provider>
  );
};