import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import UserDashboard from './pages/user/UserDashboard';
import BookingPage from './pages/user/BookingPage';
import AppointmentsPage from './pages/user/AppointmentsPage';
import ClinicDashboard from './pages/clinic/ClinicDashboard';
import SchedulePage from './pages/clinic/SchedulePage';
import TokenValidationPage from './pages/clinic/TokenValidationPage';
import ReportsPage from './pages/clinic/ReportsPage';
import type { Service } from './types';

type CurrentPage = 
  | 'welcome'
  | 'user-dashboard'
  | 'user-booking' 
  | 'user-appointments'
  | 'clinic-dashboard'
  | 'clinic-schedule'
  | 'clinic-tokens'
  | 'clinic-reports';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('welcome');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleUserLogin = () => {
    setCurrentPage('user-dashboard');
  };

  const handleClinicLogin = () => {
    setCurrentPage('clinic-dashboard');
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentPage('user-booking');
  };

  const handleConfirmBooking = (bookingData: any) => {
    // Mock booking confirmation
    alert(`Agendamento confirmado! Você receberá um e-mail de confirmação.`);
    setCurrentPage('user-appointments');
  };

  const handleLogout = () => {
    setCurrentPage('welcome');
    setSelectedService(null);
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
        
      case 'user-dashboard':
        return (
          <UserDashboard
            onServiceSelect={handleServiceSelect}
            onAppointments={() => setCurrentPage('user-appointments')}
            onProfile={() => alert('Perfil do usuário em desenvolvimento')}
            onLogout={handleLogout}
          />
        );
        
      case 'user-booking':
        return selectedService ? (
          <BookingPage
            service={selectedService}
            onBack={() => setCurrentPage('user-dashboard')}
            onConfirmBooking={handleConfirmBooking}
          />
        ) : null;
        
      case 'user-appointments':
        return (
          <AppointmentsPage
            onBack={() => setCurrentPage('user-dashboard')}
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