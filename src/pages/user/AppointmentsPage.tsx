import React, { useState } from 'react';
import { Calendar, QrCode } from 'lucide-react';
import Layout from '../../components/Layout';
import AppointmentCard from '../../components/AppointmentCard';
import TokenModal from '../../components/TokenModal';
import { mockAppointments } from '../../data/mockData';
import type { Appointment } from '../../types';

interface AppointmentsPageProps {
  onBack: () => void;
}

export default function AppointmentsPage({ onBack }: AppointmentsPageProps) {
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const handleViewToken = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setShowTokenModal(true);
  };

  const upcomingAppointments = mockAppointments.filter(apt => 
    apt.status === 'confirmed' || apt.status === 'pending'
  );
  const pastAppointments = mockAppointments.filter(apt => 
    apt.status === 'completed' || apt.status === 'cancelled'
  );

  return (
    <Layout title="Meus Agendamentos" showBack onBack={onBack} userType="user">
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Meus Agendamentos</h2>
          </div>
          <p className="text-blue-100">Gerencie seus exames e consultas agendados</p>
        </div>

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
              <QrCode className="w-6 h-6 text-green-600" />
              <span>Próximos Agendamentos</span>
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingAppointments.map(appointment => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onViewToken={handleViewToken}
                  showToken
                />
              ))}
            </div>
          </div>
        )}

        {/* Past Appointments */}
        {pastAppointments.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Histórico</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {pastAppointments.map(appointment => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        )}

        {mockAppointments.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">Nenhum agendamento encontrado</h3>
            <p className="text-slate-500">Você ainda não possui agendamentos. Explore nosso catálogo!</p>
          </div>
        )}

        {/* Token Modal */}
        {showTokenModal && selectedAppointment && (
          <TokenModal
            appointment={selectedAppointment}
            onClose={() => setShowTokenModal(false)}
          />
        )}
      </div>
    </Layout>
  );
}