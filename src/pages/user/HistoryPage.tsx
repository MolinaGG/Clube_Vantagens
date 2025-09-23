import React, { useState } from 'react';
import { Calendar, Download, QrCode, CheckCircle2, Clock, XCircle } from 'lucide-react';
import Layout from '../../components/Layout';
import { mockBenefitUsage } from '../../data/mockData';

interface HistoryPageProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function HistoryPage({ currentTab, onTabChange }: HistoryPageProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'used':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'generated':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'expired':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-slate-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'used':
        return 'Utilizado';
      case 'generated':
        return 'Gerado';
      case 'expired':
        return 'Expirado';
      default:
        return 'Pendente';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'used':
        return 'text-green-700 bg-green-50';
      case 'generated':
        return 'text-yellow-700 bg-yellow-50';
      case 'expired':
        return 'text-red-700 bg-red-50';
      default:
        return 'text-slate-700 bg-slate-50';
    }
  };

  const handleDownloadInvoice = (usage: any) => {
    if (usage.invoice) {
      alert(`Baixando nota fiscal: ${usage.invoice.number}`);
    }
  };

  const handleExportData = () => {
    alert('Exportando dados do histórico...');
  };

  const totalSaved = mockBenefitUsage.reduce((sum, usage) => sum + usage.value, 0);
  const usedBenefits = mockBenefitUsage.filter(usage => usage.status === 'used').length;

  return (
    <Layout 
      title="Histórico" 
      userType="user" 
      showTabs 
      currentTab={currentTab} 
      onTabChange={onTabChange}
    >
      <div className="space-y-8 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Histórico de Benefícios</h2>
              <p className="text-red-100">Acompanhe todos os benefícios utilizados</p>
            </div>
            <button
              onClick={handleExportData}
              className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Exportar</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">R$ {totalSaved.toFixed(2)}</div>
              <div className="text-sm text-slate-600">Total Economizado</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{usedBenefits}</div>
              <div className="text-sm text-slate-600">Benefícios Usados</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{mockBenefitUsage.length}</div>
              <div className="text-sm text-slate-600">Total de Resgates</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {mockBenefitUsage.filter(u => u.invoice).length}
              </div>
              <div className="text-sm text-slate-600">Notas Fiscais</div>
            </div>
          </div>
        </div>

        {/* Period Filter */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Filtrar por Período</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', name: 'Todos' },
              { id: 'month', name: 'Este Mês' },
              { id: 'quarter', name: 'Últimos 3 Meses' },
              { id: 'year', name: 'Este Ano' }
            ].map(period => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === period.id
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {period.name}
              </button>
            ))}
          </div>
        </div>

        {/* History List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Benefícios Utilizados</h3>
            <p className="text-sm text-slate-500 mt-1">{mockBenefitUsage.length} registros encontrados</p>
          </div>

          <div className="divide-y divide-slate-200">
            {mockBenefitUsage.map(usage => (
              <div key={usage.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-slate-900">{usage.benefitTitle}</h4>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(usage.status)}`}>
                        {getStatusIcon(usage.status)}
                        <span>{getStatusText(usage.status)}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-2">{usage.partnerName}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(usage.usedAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <QrCode className="w-4 h-4" />
                        <span>Token: {usage.token}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    {usage.value > 0 && (
                      <p className="text-lg font-bold text-green-600 mb-2">
                        R$ {usage.value.toFixed(2)}
                      </p>
                    )}
                    {usage.invoice && (
                      <button
                        onClick={() => handleDownloadInvoice(usage)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span>Baixar NF</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {mockBenefitUsage.length === 0 && (
            <div className="p-12 text-center">
              <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-600 mb-2">Nenhum benefício utilizado</h3>
              <p className="text-slate-500">Explore nosso catálogo e comece a economizar!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}