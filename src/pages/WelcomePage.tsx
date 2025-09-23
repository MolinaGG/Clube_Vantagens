import React from 'react';
import { User, Building2, Shield, Clock, CreditCard, Gift } from 'lucide-react';

interface WelcomePageProps {
  onUserLogin: () => void;
  onClinicLogin: () => void;
}

export default function WelcomePage({ onUserLogin, onClinicLogin }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Clube de Vantagens</h1>
                <p className="text-sm text-slate-500">Benefícios exclusivos para você</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Benefícios Exclusivos
            <span className="text-red-600 block">Para Você</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Acesse descontos especiais em saúde, seguros, lazer e muito mais. 
            Uma assinatura, milhares de vantagens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onUserLogin}
              className="flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <User className="w-6 h-6" />
              <span>Área do Cliente</span>
            </button>
            <button
              onClick={onClinicLogin}
              className="flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <Building2 className="w-6 h-6" />
              <span>Área da Clínica</span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mb-4">
              <Gift className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Benefícios Exclusivos</h3>
            <p className="text-slate-600 leading-relaxed">
              Descontos especiais em saúde, seguros, lazer e educação com parceiros selecionados.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Acesso Imediato</h3>
            <p className="text-slate-600 leading-relaxed">
              Ative sua assinatura e tenha acesso instantâneo a todos os benefícios disponíveis.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Seguro e Confiável</h3>
            <p className="text-slate-600 leading-relaxed">
              Tokens seguros para validação e histórico completo de todos os seus benefícios utilizados.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">40k+</div>
              <div className="text-red-100">Usuários ativos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">Benefícios disponíveis</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <div className="text-red-100">Parceiros exclusivos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}