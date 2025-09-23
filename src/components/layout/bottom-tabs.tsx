'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Gift, CreditCard, History, User } from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { cn } from '@/lib/utils';

const tabs = [
  { name: 'Início', href: '/dashboard', icon: Home },
  { name: 'Benefícios', href: '/beneficios', icon: Gift },
  { name: 'Assinatura', href: '/assinatura', icon: CreditCard },
  { name: 'Histórico', href: '/historico', icon: History },
  { name: 'Perfil', href: '/perfil', icon: User },
];

export default function BottomTabs() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden z-30">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href || 
            (tab.href === '/dashboard' && pathname === '/');
          
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                'flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors min-w-0',
                isActive
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              )}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="text-xs font-medium truncate">
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}