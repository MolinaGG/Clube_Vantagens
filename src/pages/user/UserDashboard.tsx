import React, { useState } from 'react';
import { Search, Filter, Heart, Calendar, User, LogOut } from 'lucide-react';
import Layout from '../../components/Layout';
import ServiceCard from '../../components/ServiceCard';
import { mockServices } from '../../data/mockData';
import type { Service } from '../../types';

interface UserDashboardProps {
  onServiceSelect: (service: Service) => void;
  onAppointments: () => void;
  onProfile: () => void;
  onLogout: () => void;
}

export default function UserDashboard({ onServiceSelect, onAppointments, onProfile, onLogout }: UserDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    { id: '', name: 'Todos' },
    { id: 'ocupacional', name: 'Ocupacional' },
    { id: 'exames', name: 'Exames' },
    { id: 'cardiologia', name: 'Cardiologia' },
    { id: 'laboratorial', name: 'Laboratorial' },
    { id: 'respiratorio', name: 'Respiratório' },
    { id: 'consulta', name: 'Consultas' }
  ];

  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout title="Catálogo de Serviços" userType="user">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Olá, João! 👋</h2>
              <p className="text-blue-100 text-lg">Encontre os melhores serviços de saúde com desconto</p>
            </div>
            <div className="hidden md:flex space-x-4">
              <button
                onClick={onAppointments}
                className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendamentos</span>
              </button>
              <button
                onClick={onProfile}
                className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Perfil</span>
              </button>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar exames, consultas ou serviços..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-slate-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredServices.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onServiceSelect}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg">Nenhum serviço encontrado</div>
            <p className="text-slate-500 mt-2">Tente ajustar os filtros de busca</p>
          </div>
        )}

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2">
          <div className="flex justify-around">
            <button
              onClick={onAppointments}
              className="flex flex-col items-center space-y-1 py-2 text-slate-600 hover:text-blue-600"
            >
              <Calendar className="w-6 h-6" />
              <span className="text-xs">Agendamentos</span>
            </button>
            <button
              onClick={onProfile}
              className="flex flex-col items-center space-y-1 py-2 text-slate-600 hover:text-blue-600"
            >
              <User className="w-6 h-6" />
              <span className="text-xs">Perfil</span>
            </button>
            <button
              onClick={onLogout}
              className="flex flex-col items-center space-y-1 py-2 text-slate-600 hover:text-red-600"
            >
              <LogOut className="w-6 h-6" />
              <span className="text-xs">Sair</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}