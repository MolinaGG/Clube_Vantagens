import React from 'react';
import { X, QrCode, Copy, Check } from 'lucide-react';
import type { Appointment } from '../types';

interface TokenModalProps {
  appointment: Appointment;
  onClose: () => void;
}

export default function TokenModal({ appointment, onClose }: TokenModalProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (appointment.token) {
      navigator.clipboard.writeText(appointment.token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-slate-900">Token de Validação</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center space-y-6">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">{appointment.serviceName}</h4>
            <p className="text-slate-600">{appointment.clinicName}</p>
            <p className="text-slate-500 text-sm">{appointment.date} às {appointment.time}</p>
          </div>

          {/* QR Code Placeholder */}
          <div className="bg-slate-100 rounded-xl p-8 flex items-center justify-center">
            <div className="text-center">
              <QrCode className="w-24 h-24 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-500">QR Code do Token</p>
            </div>
          </div>

          {/* Token Code */}
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-slate-600 mb-2">Código do Token:</p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl font-mono font-bold text-blue-600">{appointment.token}</span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-500 bg-yellow-50 p-3 rounded-lg">
            <p className="font-medium text-yellow-800 mb-1">Instruções:</p>
            <p>Apresente este token na clínica no dia do seu agendamento. O token é válido apenas uma vez e expira após o uso.</p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}