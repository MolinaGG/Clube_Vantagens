import React from 'react';
import { ArrowLeft, User, Building2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  userType?: 'user' | 'clinic';
  showTabs?: boolean;
  currentTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Layout({ 
  children, 
  title, 
  showBack, 
  onBack, 
  userType, 
  showTabs = false,
  currentTab,
  onTabChange 
}: LayoutProps) {
  const tabs = [
    { id: 'inicio', name: 'Início', icon: '🏠' },
    { id: 'beneficios', name: 'Benefícios', icon: '🎁' },
    { id: 'assinatura', name: 'Assinatura', icon: '💳' },
    { id: 'historico', name: 'Histórico', icon: '📋' },
    { id: 'perfil', name: 'Perfil', icon: '👤' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {showBack && (
                <button
                  onClick={onBack}
                  className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Clube de Vantagens</h1>
                  <p className="text-sm text-slate-500">{title}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {userType === 'user' ? (
                <div className="flex items-center space-x-2 text-red-600">
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Usuário</span>
                </div>
              ) : userType === 'clinic' ? (
                <div className="flex items-center space-x-2 text-green-600">
                  <Building2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Clínica</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Tab Navigation for User */}
      {showTabs && userType === 'user' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 shadow-lg">
          <div className="flex justify-around max-w-md mx-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => onTabChange?.(tab.id)}
                className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                  currentTab === tab.id
                    ? 'text-red-600 bg-red-50'
                    : 'text-slate-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="text-xs font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}