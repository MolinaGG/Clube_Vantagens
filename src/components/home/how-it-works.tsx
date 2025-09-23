import { UserPlus, Search, CreditCard, Gift } from 'lucide-react';

const steps = [
  {
    name: 'Crie sua conta',
    description: 'Cadastre-se gratuitamente e escolha o plano ideal para você.',
    icon: UserPlus,
    color: 'text-blue-600 bg-blue-100',
  },
  {
    name: 'Explore benefícios',
    description: 'Navegue pelo catálogo e encontre os melhores descontos.',
    icon: Search,
    color: 'text-green-600 bg-green-100',
  },
  {
    name: 'Assine o plano',
    description: 'Escolha entre plano mensal ou anual e ative sua assinatura.',
    icon: CreditCard,
    color: 'text-purple-600 bg-purple-100',
  },
  {
    name: 'Use os benefícios',
    description: 'Gere tokens seguros e aproveite descontos exclusivos.',
    icon: Gift,
    color: 'text-orange-600 bg-orange-100',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em apenas 4 passos simples você já pode começar a economizar 
            e aproveitar benefícios exclusivos.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.name} className="relative text-center">
                  <div className="relative z-10 bg-white">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${step.color} mx-auto`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}