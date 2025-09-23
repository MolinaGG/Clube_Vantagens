'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useBenefitsStore } from '@/store/benefits';

export default function Categories() {
  const { categories } = useBenefitsStore();
  const featuredCategories = categories.filter(cat => cat.featured);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Nossas Categorias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre benefícios exclusivos nas áreas que mais importam para você e sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/beneficios?categoria=${category.slug}`}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-primary-600 font-medium">
                  <span>{category.benefitCount} benefícios</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/beneficios"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors group"
          >
            Ver Todos os Benefícios
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}