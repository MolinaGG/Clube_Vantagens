import React, { useState } from 'react';
import { FileText, TrendingUp, Users, DollarSign, Calendar, Download } from 'lucide-react';
import Layout from '../../components/Layout';

interface ReportsPageProps {
  onBack: () => void;
}

export default function ReportsPage({ onBack }: ReportsPageProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const metrics = {
    totalAppointments: 156,
    completedAppointments: 142,
    cancelledAppointments: 14,
    completionRate: 91.0,
    totalRevenue: 18640.50,
    averageTicket: 119.49,
    noShowRate: 6.4
  };

  const recentTransactions = [
    { date: '15/01/2024', patient: 'João Silva', service: 'Exame Admissional', amount: 89.90, status: 'paid' },
    { date: '15/01/2024', patient: 'Maria Santos', service: 'Audiometria', amount: 55.00, status: 'paid' },
    { date: '14/01/2024', patient: 'Carlos Oliveira', service: 'ECG', amount: 75.00, status: 'paid' },
    { date: '14/01/2024', patient: 'Ana Costa', service: 'Espirometria', amount: 70.00, status: 'paid' },
    { date: '13/01/2024', patient: 'Pedro Alves', service: 'Consulta', amount: 199.00, status: 'pending' }
  ];

  return (
    <Layout title="Relatórios e Métricas" showBack onBack={onBack} userType="clinic">
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Relatórios e Métricas</h2>
                <p className="text-purple-100">Acompanhe o desempenho da clínica</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">
              <Download className="w-5 h-5" />
              <span>Exportar</span>
            </button>
          </div>
        </div>

        {/* Period Selector */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Período</h3>
          <div className="flex space-x-2">
            {[
              { id: 'week', name: 'Esta Semana' },
              { id: 'month', name: 'Este Mês' },
              { id: 'quarter', name: 'Trimestre' },
              { id: 'year', name: 'Ano' }
            ].map(period => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === period.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {period.name}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{metrics.totalAppointments}</p>
                <p className="text-sm text-slate-500">Agendamentos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{metrics.completionRate}%</p>
                <p className="text-sm text-slate-500">Taxa Conclusão</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">R$ {metrics.totalRevenue.toFixed(0)}</p>
                <p className="text-sm text-slate-500">Receita Total</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">R$ {metrics.averageTicket.toFixed(0)}</p>
                <p className="text-sm text-slate-500">Ticket Médio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Agendamentos por Dia</h3>
            <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
              <p className="text-slate-500">Gráfico de linha - Agendamentos diários</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Receita Mensal</h3>
            <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
              <p className="text-slate-500">Gráfico de barras - Receita por mês</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Transações Recentes</h3>
            <p className="text-sm text-slate-500 mt-1">Últimos pagamentos e repasses</p>
          </div>

          <div className="divide-y divide-slate-200">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{transaction.patient}</h4>
                  <p className="text-sm text-slate-600">{transaction.service}</p>
                  <p className="text-xs text-slate-500">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">R$ {transaction.amount.toFixed(2)}</p>
                  <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'paid' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {transaction.status === 'paid' ? 'Pago' : 'Pendente'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}