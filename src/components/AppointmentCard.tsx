import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import type { Appointment } from '../types';

interface AppointmentCardProps {
  appointment: Appointment;
  onViewToken?: (appointment: Appointment) => void;
  showToken?: boolean;
}

export default function AppointmentCard({ appointment, onViewToken, showToken }: AppointmentCardProps) {
  const getStatusIcon = () => {
    switch (appointment.status) {
      case 'confirmed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusText = () => {
    switch (appointment.status) {
      case 'confirmed':
        return 'Confirmado';
      case 'completed':
        return 'Concluído';
      case 'cancelled':
        return 'Cancelado';
      default:
        return 'Pendente';
    }
  };

  const getStatusColor = () => {
    switch (appointment.status) {
      case 'confirmed':
        return 'text-green-700 bg-green-50';
      case 'completed':
        return 'text-blue-700 bg-blue-50';
      case 'cancelled':
        return 'text-red-700 bg-red-50';
      default:
        return 'text-yellow-700 bg-yellow-50';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-slate-900 text-lg">{appointment.serviceName}</h3>
          <p className="text-slate-600">{appointment.clinicName}</p>
        </div>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
          {getStatusIcon()}
          <span>{getStatusText()}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-slate-600">
          <Calendar className="w-4 h-4" />
          <span>{appointment.date}</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-600">
          <Clock className="w-4 h-4" />
          <span>{appointment.time}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          R$ {appointment.price.toFixed(2)}
        </div>
        {showToken && appointment.status === 'confirmed' && onViewToken && (
          <button
            onClick={() => onViewToken(appointment)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Ver Token
          </button>
        )}
      </div>
    </div>
  );
}