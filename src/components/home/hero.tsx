'use client';

import Link from 'next/link';
import { ArrowRight, Star, Users, Shield } from 'lucide-react';
import { useAuthStore } from '@/store/auth';

export default function Hero() {
  const { isAuthenticated } = useAuthStore();

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-100">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">Mais de 40 mil usuários</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Benefícios Exclusivos em{' '}
                <span className="text-primary-200">Saúde e Bem-estar</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Acesse mais de 500 benefícios com descontos de até 70% em exames médicos, 
                consultas, seguros e lazer. Assinatura a partir de R$ 14,90/mês.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={isAuthenticated ? "/dashboard" : "/criar-conta"}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors group"
              >
                {isAuthenticated ? "Acessar Dashboard" : "Começar Agora"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/beneficios"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Ver Benefícios
              </Link>
            </div>

            <div className="flex items-center space-x-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">40k+ usuários</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">100% seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm">4.8/5 avaliação</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Seus Benefícios
                  </h3>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Ativo
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Exame Admissional</p>
                      <p className="text-sm text-gray-500">Clínica Ravim Centro</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">R$ 150,00</p>
                      <p className="font-bold text-green-600">R$ 89,90</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Consulta Cardiológica</p>
                      <p className="text-sm text-gray-500">CardioClínica</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">R$ 300,00</p>
                      <p className="font-bold text-green-600">R$ 200,00</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Economia total:</span>
                    <span className="text-lg font-bold text-green-600">R$ 160,10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}