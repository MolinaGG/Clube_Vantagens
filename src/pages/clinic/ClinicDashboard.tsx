import React, { useState } from 'react';
import { Calendar, QrCode, FileText, Users, TrendingUp, Clock, LogOut } from 'lucide-react';
import Layout from '../../components/Layout';

interface ClinicDashboardProps {
  onSchedule: () => void;
  onTokenValidation: () => void;
  onReports: () => void;
  onLogout: () => void;
}

export default function ClinicDashboard({ onSchedule, onTokenValidation, onReports, onLogout }: ClinicDashboardProps) {
  const stats = {
    todayAppointments: 12,
    pendingValidations: 3,
    monthlyRevenue: 15420.50,
    completionRate: 94
  };

  const quickActions = [
    {
      title: 'Agenda',
      description: 'Gerencie seus horários e agendamentos',
      icon: Calendar,
      color: 'blue',
      onClick: onSchedule
    },
    {
      title: 'Validar Token',
      description: 'Valide tokens de pacientes',
      icon: QrCode,
      color: 'green',
      onClick: onTokenValidation
    },
    {
      title: 'Relatórios',
      description: 'Acompanhe métricas e repasses',
      icon: FileText,
      color: 'purple',
      onClick: onReports
    }
  ];

  return (
    <Layout title="Painel da Clínica" userType="clinic">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Clínica Ravim Centro</h2>
              <p className="text-green-100 text-lg">Bem-vinda ao painel de gestão</p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden md:inline">Sair</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{stats.todayAppointments}</p>
                <p className="text-sm text-slate-500">Hoje</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{stats.pendingValidations}</p>
                <p className="text-sm text-slate-500">Pendentes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">R$ {stats.monthlyRevenue.toFixed(0)}</p>
                <p className="text-sm text-slate-500">Este mês</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{stats.completionRate}%</p>
                <p className="text-sm text-slate-500">Conclusão</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Ações Rápidas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all text-left group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-${action.color}-100 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className={`w-6 h-6 text-${action.color}-600`} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {action.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {action.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Atividade Recente</h3>
          <div className="space-y-4">
            {[
              { time: '14:30', action: 'Token validado', patient: 'João Silva', service: 'Exame Admissional' },
              { time: '13:15', action: 'Agendamento confirmado', patient: 'Maria Santos', service: 'Audiometria' },
              { time: '11:45', action: 'Pagamento processado', patient: 'Carlos Oliveira', service: 'ECG' },
              { time: '10:00', action: 'Token validado', patient: 'Ana Costa', service: 'Espirometria' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="text-sm font-mono text-slate-500 w-12">{activity.time}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                  <p className="text-xs text-slate-500">{activity.patient} - {activity.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}