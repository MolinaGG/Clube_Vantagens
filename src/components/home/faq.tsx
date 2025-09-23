'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Como funciona o Clube de Vantagens?',
    answer: 'Você assina um plano mensal ou anual e tem acesso a mais de 500 benefícios exclusivos. Basta gerar um token seguro e apresentar no estabelecimento parceiro para usar o desconto.',
  },
  {
    question: 'Quais são os valores dos planos?',
    answer: 'Oferecemos plano mensal por R$ 14,90 e plano anual por R$ 149,90 (equivalente a R$ 12,49/mês). O plano anual oferece 2 meses grátis e benefícios exclusivos.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas. O cancelamento pode ser feito diretamente no seu perfil.',
  },
  {
    question: 'Como funciona o sistema de tokens?',
    answer: 'Cada benefício gera um token único com QR Code e código alfanumérico. O token tem validade limitada e só pode ser usado uma vez, garantindo segurança total.',
  },
  {
    question: 'Os parceiros são confiáveis?',
    answer: 'Sim, todos os nossos parceiros passam por um processo rigoroso de verificação. Trabalhamos apenas com empresas licenciadas e com boa reputação no mercado.',
  },
  {
    question: 'Posso usar os benefícios em qualquer cidade?',
    answer: 'Os benefícios variam por localização. Alguns são nacionais, outros regionais. No catálogo você pode filtrar por cidade para ver os benefícios disponíveis na sua região.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o Clube de Vantagens
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-gray-500 transition-transform flex-shrink-0',
                    openIndex === index && 'transform rotate-180'
                  )}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}