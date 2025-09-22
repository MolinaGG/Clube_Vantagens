import React, { useState } from 'react';
import { QrCode, Search, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import Layout from '../../components/Layout';

interface TokenValidationPageProps {
  onBack: () => void;
}

export default function TokenValidationPage({ onBack }: TokenValidationPageProps) {
  const [tokenInput, setTokenInput] = useState('');
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    patient?: string;
    service?: string;
    date?: string;
    time?: string;
    message?: string;
  } | null>(null);

  const validateToken = () => {
    // Mock validation logic
    if (tokenInput === 'ABC123DEF') {
      setValidationResult({
        isValid: true,
        patient: 'João Silva',
        service: 'Exame Admissional Completo',
        date: '2024-01-15',
        time: '14:30'
      });
    } else if (tokenInput === 'XYZ789GHI') {
      setValidationResult({
        isValid: false,
        message: 'Token já foi utilizado'
      });
    } else if (tokenInput) {
      setValidationResult({
        isValid: false,
        message: 'Token inválido ou expirado'
      });
    }
  };

  const confirmService = () => {
    setValidationResult({ ...validationResult!, isValid: false, message: 'Serviço confirmado e token consumido' });
    setTokenInput('');
  };

  return (
    <Layout title="Validação de Token" showBack onBack={onBack} userType="clinic">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <QrCode className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Validação de Token</h2>
          </div>
          <p className="text-green-100">Valide os tokens dos pacientes para confirmar o atendimento</p>
        </div>

        {/* Token Input */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Inserir Token</h3>
          
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Digite ou escaneie o token..."
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value.toUpperCase())}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors font-mono"
                />
              </div>
              <button
                onClick={validateToken}
                disabled={!tokenInput}
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Validar
              </button>
            </div>

            <div className="text-center">
              <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 mx-auto">
                <QrCode className="w-5 h-5" />
                <span>Escanear QR Code</span>
              </button>
            </div>
          </div>
        </div>

        {/* Validation Result */}
        {validationResult && (
          <div className={`rounded-2xl p-6 shadow-sm border ${
            validationResult.isValid 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                {validationResult.isValid ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600" />
                )}
              </div>
              <div className="flex-1">
                {validationResult.isValid ? (
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">Token Válido ✓</h4>
                    <div className="space-y-2 text-sm text-green-800">
                      <p><strong>Paciente:</strong> {validationResult.patient}</p>
                      <p><strong>Serviço:</strong> {validationResult.service}</p>
                      <p><strong>Data:</strong> {validationResult.date}</p>
                      <p><strong>Horário:</strong> {validationResult.time}</p>
                    </div>
                    <button
                      onClick={confirmService}
                      className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Confirmar Atendimento
                    </button>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Token Inválido</h4>
                    <p className="text-sm text-red-800">{validationResult.message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Test Tokens */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">Tokens de Teste</h4>
              <div className="space-y-2 text-sm text-yellow-800">
                <p><code className="bg-yellow-100 px-2 py-1 rounded">ABC123DEF</code> - Token válido</p>
                <p><code className="bg-yellow-100 px-2 py-1 rounded">XYZ789GHI</code> - Token já utilizado</p>
                <p><code className="bg-yellow-100 px-2 py-1 rounded">INVALID</code> - Token inválido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}