import React from 'react';
import { User, Building2, Shield, Clock, CreditCard, MapPin } from 'lucide-react';

interface WelcomePageProps {
  onUserLogin: () => void;
  onClinicLogin: () => void;
}

export default function WelcomePage({ onUserLogin, onClinicLogin }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Clube de Vantagens</h1>
                <p className="text-sm text-slate-500">Saúde e bem-estar com desconto</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Saúde e Bem-estar
            <span className="text-blue-600 block">com Desconto</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Acesse uma rede exclusiva de clínicas de saúde ocupacional com descontos de até 50%. 
            Agende, pague e valide seus exames em poucos cliques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onUserLogin}
              className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <User className="w-6 h-6" />
              <span>Sou Usuário</span>
            </button>
            <button
              onClick={onClinicLogin}
              className="flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <Building2 className="w-6 h-6" />
              <span>Sou Clínica</span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Seguro e Confiável</h3>
            <p className="text-slate-600 leading-relaxed">
              Tokens antifraude únicos e pagamentos 100% seguros com validação em tempo real.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Agendamento Rápido</h3>
            <p className="text-slate-600 leading-relaxed">
              Agende seus exames em segundos com nossa agenda inteligente e integrada.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Pagamento Fácil</h3>
            <p className="text-slate-600 leading-relaxed">
              PIX instantâneo ou cartão com 3DS 2.0. Você escolhe como prefere pagar.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">40k+</div>
              <div className="text-blue-100">Usuários ativos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50%</div>
              <div className="text-blue-100">Desconto médio</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Clínicas parceiras</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}