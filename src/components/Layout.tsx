import React from 'react';
import { ArrowLeft, User, Building2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  userType?: 'user' | 'clinic';
}

export default function Layout({ children, title, showBack, onBack, userType }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
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
                <div className="flex items-center space-x-2 text-blue-600">
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Usuário</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-green-600">
                  <Building2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Clínica</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}