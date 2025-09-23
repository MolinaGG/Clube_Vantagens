import React from 'react';
import { Star, TrendingUp, MapPin, Clock } from 'lucide-react';
import Layout from '../../components/Layout';
import BenefitCard from '../../components/BenefitCard';
import { mockBenefits, mockUser } from '../../data/mockData';
import type { Benefit } from '../../types';

interface HomePageProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onBenefitSelect: (benefit: Benefit) => void;
}

export default function HomePage({ currentTab, onTabChange, onBenefitSelect }: HomePageProps) {
  const featuredBenefits = mockBenefits.filter(benefit => benefit.featured).slice(0, 3);
  const recentBenefits = mockBenefits.slice(0, 4);

  return (
    <Layout 
      title="Início" 
      userType="user" 
      showTabs 
      currentTab={currentTab} 
      onTabChange={onTabChange}
    >
      <div className="space-y-8 pb-20">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Olá, {mockUser.name.split(' ')[0]}! 👋
              </h2>
              <p className="text-red-100 text-lg mb-4">
                Aproveite seus benefícios exclusivos
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Assinatura Ativa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Válida até {new Date(mockUser.subscription.endDate!).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">R$ 247</p>
                <p className="text-sm text-slate-500">Economizado</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">12</p>
                <p className="text-sm text-slate-500">Benefícios usados</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">8</p>
                <p className="text-sm text-slate-500">Parceiros próximos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">3</p>
                <p className="text-sm text-slate-500">Agendamentos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Benefits */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
              <Star className="w-6 h-6 text-red-600" />
              <span>Benefícios em Destaque</span>
            </h3>
            <button 
              onClick={() => onTabChange('beneficios')}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Ver todos
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredBenefits.map(benefit => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                onSelect={onBenefitSelect}
              />
            ))}
          </div>
        </div>

        {/* Recent Benefits */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Adicionados Recentemente</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recentBenefits.map(benefit => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                onSelect={onBenefitSelect}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => onTabChange('beneficios')}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-colors"
            >
              <span className="text-2xl">🎁</span>
              <span className="text-sm font-medium text-slate-700">Explorar Benefícios</span>
            </button>
            <button 
              onClick={() => onTabChange('historico')}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-colors"
            >
              <span className="text-2xl">📋</span>
              <span className="text-sm font-medium text-slate-700">Ver Histórico</span>
            </button>
            <button 
              onClick={() => onTabChange('assinatura')}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-colors"
            >
              <span className="text-2xl">💳</span>
              <span className="text-sm font-medium text-slate-700">Minha Assinatura</span>
            </button>
            <button 
              onClick={() => onTabChange('perfil')}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-colors"
            >
              <span className="text-2xl">👤</span>
              <span className="text-sm font-medium text-slate-700">Meu Perfil</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}