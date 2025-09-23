import React, { useState } from 'react';
import { Download, Calendar, FileText, Filter } from 'lucide-react';
import Layout from '../../components/Layout';
import { mockClinicAppointments } from '../../data/mockData';

interface ExportPageProps {
  onBack: () => void;
}

export default function ExportPage({ onBack }: ExportPageProps) {
  const [exportFormat, setExportFormat] = useState<'xlsx' | 'csv'>('xlsx');
  const [dateRange, setDateRange] = useState({
    start: '2024-01-01',
    end: '2024-01-31'
  });
  const [includeInvoices, setIncludeInvoices] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const handleExport = () => {
    const filteredData = mockClinicAppointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      
      const dateMatch = appointmentDate >= startDate && appointmentDate <= endDate;
      const statusMatch = selectedStatus === 'all' || appointment.status === selectedStatus;
      
      return dateMatch && statusMatch;
    });

    const exportData = {
      appointments: filteredData,
      period: dateRange,
      totals: {
        appointments: filteredData.length,
        revenue: filteredData.reduce((sum, apt) => sum + apt.value, 0),
        completionRate: (filteredData.filter(apt => apt.status === 'completed').length / filteredData.length) * 100
      }
    };

    alert(`Exportando ${filteredData.length} registros em formato ${exportFormat.toUpperCase()}...`);
    console.log('Export Data:', exportData);
  };

  const previewData = mockClinicAppointments.slice(0, 5);

  return (
    <Layout title="Exportar Dados" showBack onBack={onBack} userType="clinic">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Download className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Exportar Dados</h2>
          </div>
          <p className="text-blue-100">Configure e exporte os dados dos agendamentos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Export Configuration */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Configurações de Exportação</h3>

            <div className="space-y-6">
              {/* Format Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Formato do Arquivo</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setExportFormat('xlsx')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      exportFormat === 'xlsx'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-center">
                      <FileText className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">Excel (.xlsx)</div>
                      <div className="text-sm text-slate-500">Planilha completa</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setExportFormat('csv')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      exportFormat === 'csv'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-center">
                      <FileText className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">CSV (.csv)</div>
                      <div className="text-sm text-slate-500">Dados separados</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Período</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Data Inicial</label>
                    <input
                      type="date"
                      value={dateRange.start}
                      onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Data Final</label>
                    <input
                      type="date"
                      value={dateRange.end}
                      onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Status dos Agendamentos</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="all">Todos os status</option>
                  <option value="confirmed">Confirmados</option>
                  <option value="completed">Concluídos</option>
                  <option value="cancelled">Cancelados</option>
                  <option value="no-show">Não compareceu</option>
                </select>
              </div>

              {/* Additional Options */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Opções Adicionais</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={includeInvoices}
                      onChange={(e) => setIncludeInvoices(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-700">Incluir dados de notas fiscais</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Prévia dos Dados</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {mockClinicAppointments.length}
                  </div>
                  <div className="text-blue-700">Total de Registros</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">
                    R$ {mockClinicAppointments.reduce((sum, apt) => sum + apt.value, 0).toFixed(0)}
                  </div>
                  <div className="text-green-700">Receita Total</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round((mockClinicAppointments.filter(apt => apt.status === 'completed').length / mockClinicAppointments.length) * 100)}%
                  </div>
                  <div className="text-purple-700">Taxa Conclusão</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 mb-3">Campos que serão exportados:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    'Nome do Paciente',
                    'Telefone',
                    'Serviço',
                    'Data',
                    'Horário',
                    'Status',
                    'Token',
                    'Valor',
                    ...(includeInvoices ? ['Número NF', 'Data NF', 'Valor NF'] : [])
                  ].map((field, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">{field}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 mb-3">Amostra dos dados:</h4>
                <div className="bg-slate-50 rounded-lg p-3 text-xs">
                  <div className="space-y-1">
                    {previewData.map((appointment, index) => (
                      <div key={index} className="text-slate-600">
                        {appointment.patientName} | {appointment.service} | {appointment.date} | R$ {appointment.value.toFixed(2)}
                      </div>
                    ))}
                    {mockClinicAppointments.length > 5 && (
                      <div className="text-slate-500 italic">
                        ... e mais {mockClinicAppointments.length - 5} registros
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Export Button */}
        <div className="flex justify-center">
          <button
            onClick={handleExport}
            className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <Download className="w-6 h-6" />
            <span>Exportar em {exportFormat.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </Layout>
  );
}