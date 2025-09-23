'use client';

import { useEffect } from 'react';
import { useBenefitsStore } from '@/store/benefits';

export function Providers({ children }: { children: React.ReactNode }) {
  const fetchBenefits = useBenefitsStore(state => state.fetchBenefits);

  useEffect(() => {
    fetchBenefits();
  }, [fetchBenefits]);

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
  }, []);

  return <>{children}</>;
}