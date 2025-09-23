import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import Layout from '../../components/Layout';
import BenefitCard from '../../components/BenefitCard';
import { mockBenefits } from '../../data/mockData';
import type { Benefit } from '../../types';

interface BenefitsPageProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onBenefitSelect: (benefit: Benefit) => void;
}

export default function BenefitsPage({ currentTab, onTabChange, onBenefitSelect }: BenefitsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const categories = [
    { id: '', name: 'Todas as categorias' },
    { id: 'saude', name: 'Saúde' },
    { id: 'seguros', name: 'Seguros' },
    { id: 'lazer', name: 'Lazer' },
    { id: 'bem-estar', name: 'Bem-estar' },
    { id: 'educacao', name: 'Educação' }
  ];

  const locations = [
    { id: '', name: 'Todas as cidades' },
    { id: 'São Paulo', name: 'São Paulo' },
    { id: 'Rio de Janeiro', name: 'Rio de Janeiro' },
    { id: 'Belo Horizonte', name: 'Belo Horizonte' }
  ];

  const filteredBenefits = mockBenefits.filter(benefit => {
    const matchesSearch = benefit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         benefit.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         benefit.partner.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || benefit.category === selectedCategory;
    const matchesLocation = !selectedLocation || benefit.location?.city === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <Layout 
      title="Benefícios" 
      userType="user" 
      showTabs 
      currentTab={currentTab} 
      onTabChange={onTabChange}
    >
      <div className="space-y-8 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Catálogo de Benefícios</h2>
          <p className="text-red-100">Descubra todos os benefícios disponíveis para você</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar benefícios, parceiros ou serviços..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-slate-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-slate-600" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                >
                  {locations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-slate-600">
            {filteredBenefits.length} benefício{filteredBenefits.length !== 1 ? 's' : ''} encontrado{filteredBenefits.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBenefits.map(benefit => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              onSelect={onBenefitSelect}
            />
          ))}
        </div>

        {filteredBenefits.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg mb-2">Nenhum benefício encontrado</div>
            <p className="text-slate-500">Tente ajustar os filtros de busca</p>
          </div>
        )}
      </div>
    </Layout>
  );
}