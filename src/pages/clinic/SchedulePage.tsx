import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MapPin } from 'lucide-react';
import Layout from '../../components/Layout';

interface SchedulePageProps {
  onBack: () => void;
}

export default function SchedulePage({ onBack }: SchedulePageProps) {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  
  const appointments = [
    {
      id: '1',
      time: '08:00',
      patient: 'João Silva',
      phone: '(11) 99999-9999',
      service: 'Exame Admissional',
      status: 'confirmed',
      duration: '45 min'
    },
    {
      id: '2',
      time: '09:00',
      patient: 'Maria Santos',
      phone: '(11) 88888-8888',
      service: 'Audiometria',
      status: 'pending',
      duration: '30 min'
    },
    {
      id: '3',
      time: '10:30',
      patient: 'Carlos Oliveira',
      phone: '(11) 77777-7777',
      service: 'ECG',
      status: 'confirmed',
      duration: '20 min'
    },
    {
      id: '4',
      time: '14:00',
      patient: 'Ana Costa',
      phone: '(11) 66666-6666',
      service: 'Espirometria',
      status: 'completed',
      duration: '25 min'
    },
    {
      id: '5',
      time: '15:30',
      patient: 'Pedro Alves',
      phone: '(11) 55555-5555',
      service: 'Consulta Medicina do Trabalho',
      status: 'confirmed',
      duration: '60 min'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'pending':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'completed':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'cancelled':
        return 'text-red-700 bg-red-50 border-red-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmado';
      case 'pending':
        return 'Pendente';
      case 'completed':
        return 'Concluído';
      case 'cancelled':
        return 'Cancelado';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <Layout title="Agenda da Clínica" showBack onBack={onBack} userType="clinic">
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Agenda da Clínica</h2>
          </div>
          <p className="text-blue-100">Gerencie os agendamentos e horários disponíveis</p>
        </div>

        {/* Date Selector */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Selecionar Data</h3>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
            {[
              '2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18',
              '2024-01-19', '2024-01-22', '2024-01-23'
            ].map(date => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`p-3 rounded-lg border text-sm transition-colors ${
                  selectedDate === date
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {new Date(date + 'T00:00:00').toLocaleDateString('pt-BR', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short'
                })}
              </button>
            ))}
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Agendamentos - {new Date(selectedDate + 'T00:00:00').toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{appointments.length} agendamentos</p>
          </div>

          <div className="divide-y divide-slate-200">
            {appointments.map(appointment => (
              <div key={appointment.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900">{appointment.time}</div>
                      <div className="text-xs text-slate-500">{appointment.duration}</div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1 flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{appointment.patient}</span>
                      </h4>
                      <div className="space-y-1 text-sm text-slate-600">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{appointment.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{appointment.service}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(appointment.status)}`}>
                    {getStatusText(appointment.status)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {appointments.length === 0 && (
            <div className="p-12 text-center">
              <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-600 mb-2">Nenhum agendamento</h3>
              <p className="text-slate-500">Não há agendamentos para esta data.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}