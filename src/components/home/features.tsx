import { Shield, Clock, CreditCard, Users, Star, Smartphone } from 'lucide-react';

const features = [
  {
    name: 'Segurança Total',
    description: 'Tokens antifraude e pagamentos seguros com criptografia de ponta.',
    icon: Shield,
    color: 'text-green-600 bg-green-100',
  },
  {
    name: 'Acesso Imediato',
    description: 'Ative sua assinatura e tenha acesso instantâneo a todos os benefícios.',
    icon: Clock,
    color: 'text-blue-600 bg-blue-100',
  },
  {
    name: 'Pagamento Flexível',
    description: 'Pague com cartão ou PIX. Planos mensais ou anuais com desconto.',
    icon: CreditCard,
    color: 'text-purple-600 bg-purple-100',
  },
  {
    name: 'Rede Confiável',
    description: 'Mais de 500 parceiros verificados em todo o Brasil.',
    icon: Users,
    color: 'text-orange-600 bg-orange-100',
  },
  {
    name: 'Qualidade Garantida',
    description: 'Avaliação 4.8/5 com mais de 40 mil usuários satisfeitos.',
    icon: Star,
    color: 'text-yellow-600 bg-yellow-100',
  },
  {
    name: 'Fácil de Usar',
    description: 'Interface intuitiva e processo simples: busque, agende e use.',
    icon: Smartphone,
    color: 'text-indigo-600 bg-indigo-100',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o Clube de Vantagens?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma completa e segura para acessar os melhores benefícios 
            em saúde, seguros e lazer com a melhor experiência do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.name}
                className="relative p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}