'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { useAuthStore } from '@/store/auth';

const benefits = [
  'Mais de 500 benefícios exclusivos',
  'Descontos de até 70% em saúde',
  'Tokens seguros antifraude',
  'Suporte prioritário',
  'Sem fidelidade ou multa',
];

export default function CTA() {
  const { isAuthenticated } = useAuthStore();

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para começar a economizar?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Junte-se a mais de 40 mil pessoas que já economizam com o Clube de Vantagens. 
            Comece hoje mesmo e tenha acesso imediato a todos os benefícios.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Plano Mensal</h3>
              <div className="text-4xl font-bold mb-2">R$ 14,90</div>
              <div className="text-primary-100 mb-6">por mês</div>
              <ul className="space-y-2 text-left">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 text-green-300" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl p-8 border-2 border-white/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Plano Anual</h3>
              <div className="text-4xl font-bold mb-2">R$ 149,90</div>
              <div className="text-primary-100 mb-2">por ano</div>
              <div className="text-green-300 text-sm font-medium mb-6">
                Economize R$ 28,90 (2 meses grátis)
              </div>
              <ul className="space-y-2 text-left">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 text-green-300" />
                    <span>{benefit}</span>
                  </li>
                ))}
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-green-300" />
                  <span>Benefícios premium exclusivos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={isAuthenticated ? "/assinatura" : "/criar-conta"}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors group"
            >
              {isAuthenticated ? "Escolher Plano" : "Criar Conta Grátis"}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/beneficios"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Ver Benefícios
            </Link>
          </div>

          <p className="text-primary-100 text-sm mt-6">
            Sem fidelidade • Cancele quando quiser • Suporte 24/7
          </p>
        </div>
      </div>
    </section>
  );
}