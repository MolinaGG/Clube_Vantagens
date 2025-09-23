import React, { useState } from 'react';
import { CreditCard, Calendar, CheckCircle2, Star, Zap } from 'lucide-react';
import Layout from '../../components/Layout';
import { mockUser, mockSubscriptions } from '../../data/mockData';

interface SubscriptionPageProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function SubscriptionPage({ currentTab, onTabChange }: SubscriptionPageProps) {
  const [showPlans, setShowPlans] = useState(!mockUser.subscription.plan);

  const handleSubscribe = (planId: string) => {
    alert(`Redirecionando para pagamento do plano ${planId === 'monthly' ? 'mensal' : 'anual'}...`);
    setShowPlans(false);
  };

  const handleUpgrade = () => {
    setShowPlans(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'overdue':
        return 'text-red-700 bg-red-50 border-red-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativa';
      case 'overdue':
        return 'Em atraso';
      default:
        return 'Inativa';
    }
  };

  if (showPlans) {
    return (
      <Layout 
        title="Escolha seu Plano" 
        userType="user" 
        showTabs 
        currentTab={currentTab} 
        onTabChange={onTabChange}
      >
        <div className="space-y-8 pb-20">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Escolha seu Plano</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tenha acesso a benefícios exclusivos e descontos especiais
            </p>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockSubscriptions.map(subscription => (
              <div 
                key={subscription.id}
                className={`bg-white rounded-2xl p-8 shadow-sm border-2 transition-all hover:shadow-md ${
                  subscription.popular 
                    ? 'border-red-500 relative' 
                    : 'border-slate-200 hover:border-red-200'
                }`}
              >
                {subscription.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-1 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4" />
                      <span>Mais Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Plano {subscription.plan === 'monthly' ? 'Mensal' : 'Anual'}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-4xl font-bold text-red-600">
                      R$ {subscription.price.toFixed(2)}
                    </span>
                    <span className="text-slate-500">
                      /{subscription.plan === 'monthly' ? 'mês' : 'ano'}
                    </span>
                  </div>
                  {subscription.plan === 'annual' && (
                    <div className="flex items-center justify-center space-x-1 text-green-600 text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      <span>Economize R$ 28,90 por ano</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {subscription.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSubscribe(subscription.id)}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors ${
                    subscription.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Assinar Agora
                </button>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Formas de Pagamento</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-slate-200">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-medium text-slate-900">Cartão de Crédito</div>
                  <div className="text-sm text-slate-500">Visa, Mastercard, Elo</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-slate-200">
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  PIX
                </div>
                <div>
                  <div className="font-medium text-slate-900">PIX</div>
                  <div className="text-sm text-slate-500">Pagamento instantâneo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title="Minha Assinatura" 
      userType="user" 
      showTabs 
      currentTab={currentTab} 
      onTabChange={onTabChange}
    >
      <div className="space-y-8 pb-20">
        {/* Current Subscription */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Minha Assinatura</h2>
            <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(mockUser.subscription.status)}`}>
              {getStatusText(mockUser.subscription.status)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-500">Plano Atual</label>
                <p className="text-lg font-semibold text-slate-900">
                  {mockUser.subscription.plan === 'monthly' ? 'Mensal' : 'Anual'}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-500">Valor</label>
                <p className="text-lg font-semibold text-slate-900">
                  R$ {mockUser.subscription.plan === 'monthly' ? '14,90' : '149,90'}
                  <span className="text-sm text-slate-500 ml-1">
                    /{mockUser.subscription.plan === 'monthly' ? 'mês' : 'ano'}
                  </span>
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-500">Forma de Pagamento</label>
                <div className="flex items-center space-x-2 mt-1">
                  <CreditCard className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-900">
                    {mockUser.subscription.paymentMethod === 'card' ? 'Cartão de Crédito' : 'PIX'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-500">Data de Início</label>
                <p className="text-lg font-semibold text-slate-900">
                  {new Date(mockUser.subscription.startDate!).toLocaleDateString('pt-BR')}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-500">Próxima Cobrança</label>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  <span className="text-lg font-semibold text-slate-900">
                    {new Date(mockUser.subscription.endDate!).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleUpgrade}
              className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors font-medium"
            >
              {mockUser.subscription.plan === 'monthly' ? 'Upgrade para Anual' : 'Alterar Plano'}
            </button>
            <button className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl hover:bg-slate-200 transition-colors font-medium">
              Gerenciar Pagamento
            </button>
          </div>
        </div>

        {/* Benefits Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Benefícios Inclusos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Acesso a todos os benefícios',
              'Descontos exclusivos',
              'Suporte prioritário',
              'Notificações personalizadas',
              'Histórico completo',
              'Tokens de segurança'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Estatísticas de Uso</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">R$ 247</div>
              <div className="text-sm text-slate-600">Economizado</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-slate-600">Benefícios usados</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-slate-600">Parceiros visitados</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">95%</div>
              <div className="text-sm text-slate-600">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}