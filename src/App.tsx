import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/user/HomePage';
import BenefitsPage from './pages/user/BenefitsPage';
import SubscriptionPage from './pages/user/SubscriptionPage';
import HistoryPage from './pages/user/HistoryPage';
import ProfilePage from './pages/user/ProfilePage';
import ClinicDashboard from './pages/clinic/ClinicDashboard';
import SchedulePage from './pages/clinic/SchedulePage';
import TokenValidationPage from './pages/clinic/TokenValidationPage';
import ReportsPage from './pages/clinic/ReportsPage';
import ExportPage from './pages/clinic/ExportPage';
import type { Benefit } from './types';

type CurrentPage = 
  | 'welcome'
  | 'user-home'
  | 'user-benefits'
  | 'user-subscription'
  | 'user-history'
  | 'user-profile'
  | 'clinic-dashboard'
  | 'clinic-schedule'
  | 'clinic-tokens'
  | 'clinic-reports'
  | 'clinic-export';

type UserTab = 'inicio' | 'beneficios' | 'assinatura' | 'historico' | 'perfil';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('welcome');
  const [currentUserTab, setCurrentUserTab] = useState<UserTab>('inicio');

  const handleUserLogin = () => {
    setCurrentPage('user-home');
    setCurrentUserTab('inicio');
  };

  const handleClinicLogin = () => {
    setCurrentPage('clinic-dashboard');
  };

  const handleUserTabChange = (tab: UserTab) => {
    setCurrentUserTab(tab);
    switch (tab) {
      case 'inicio':
        setCurrentPage('user-home');
        break;
      case 'beneficios':
        setCurrentPage('user-benefits');
        break;
      case 'assinatura':
        setCurrentPage('user-subscription');
        break;
      case 'historico':
        setCurrentPage('user-history');
        break;
      case 'perfil':
        setCurrentPage('user-profile');
        break;
    }
  };

  const handleBenefitSelect = (benefit: Benefit) => {
    alert(`Selecionado: ${benefit.title}\nGerando token de desconto...`);
  };

  const handleLogout = () => {
    setCurrentPage('welcome');
    setCurrentUserTab('inicio');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'welcome':
        return (
          <WelcomePage 
            onUserLogin={handleUserLogin}
            onClinicLogin={handleClinicLogin}
          />
        );
        
      case 'user-home':
        return (
          <HomePage
            currentTab={currentUserTab}
            onTabChange={handleUserTabChange}
            onBenefitSelect={handleBenefitSelect}
          />
        );
        
      case 'user-benefits':
        return (
          <BenefitsPage
            currentTab={currentUserTab}
            onTabChange={handleUserTabChange}
            onBenefitSelect={handleBenefitSelect}
          />
        );
        
      case 'user-subscription':
        return (
          <SubscriptionPage
            currentTab={currentUserTab}
            onTabChange={handleUserTabChange}
          />
        );
        
      case 'user-history':
        return (
          <HistoryPage
            currentTab={currentUserTab}
            onTabChange={handleUserTabChange}
          />
        );
        
      case 'user-profile':
        return (
          <ProfilePage
            currentTab={currentUserTab}
            onTabChange={handleUserTabChange}
          />
        );
        
      case 'clinic-dashboard':
        return (
          <ClinicDashboard
            onSchedule={() => setCurrentPage('clinic-schedule')}
            onTokenValidation={() => setCurrentPage('clinic-tokens')}
            onReports={() => setCurrentPage('clinic-reports')}
            onLogout={handleLogout}
          />
        );
        
      case 'clinic-schedule':
        return (
          <SchedulePage
            onBack={() => setCurrentPage('clinic-dashboard')}
          />
        );
        
      case 'clinic-tokens':
        return (
          <TokenValidationPage
            onBack={() => setCurrentPage('clinic-dashboard')}
          />
        );
        
      case 'clinic-reports':
        return (
          <ReportsPage
            onBack={() => setCurrentPage('clinic-dashboard')}
            onExport={() => setCurrentPage('clinic-export')}
          />
        );
        
      case 'clinic-export':
        return (
          <ExportPage
            onBack={() => setCurrentPage('clinic-reports')}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

export default App;