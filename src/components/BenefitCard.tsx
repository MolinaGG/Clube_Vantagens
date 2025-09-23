import React from 'react';
import { MapPin, Tag, Star } from 'lucide-react';
import type { Benefit } from '../types';

interface BenefitCardProps {
  benefit: Benefit;
  onSelect: (benefit: Benefit) => void;
}

export default function BenefitCard({ benefit, onSelect }: BenefitCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'saude':
        return 'bg-green-100 text-green-700';
      case 'seguros':
        return 'bg-blue-100 text-blue-700';
      case 'lazer':
        return 'bg-purple-100 text-purple-700';
      case 'bem-estar':
        return 'bg-orange-100 text-orange-700';
      case 'educacao':
        return 'bg-indigo-100 text-indigo-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'saude':
        return 'Saúde';
      case 'seguros':
        return 'Seguros';
      case 'lazer':
        return 'Lazer';
      case 'bem-estar':
        return 'Bem-estar';
      case 'educacao':
        return 'Educação';
      default:
        return category;
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:border-red-200 cursor-pointer group"
      onClick={() => onSelect(benefit)}
    >
      <div className="relative">
        <img 
          src={benefit.image} 
          alt={benefit.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {benefit.featured && (
          <div className="absolute top-3 left-3 flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            <Star className="w-3 h-3" />
            <span>Destaque</span>
          </div>
        )}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(benefit.category)}`}>
          {getCategoryName(benefit.category)}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-slate-900 text-lg group-hover:text-red-700 transition-colors line-clamp-2">
            {benefit.title}
          </h3>
        </div>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{benefit.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <img 
              src={benefit.partner.logo} 
              alt={benefit.partner.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span>{benefit.partner.name}</span>
          </div>
          {benefit.location && (
            <div className="flex items-center space-x-1 text-sm text-slate-500">
              <MapPin className="w-4 h-4" />
              <span>{benefit.location.city}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-red-500" />
            <span className="text-red-600 font-semibold">{benefit.discount.description}</span>
          </div>
          {benefit.discount.originalPrice && benefit.discount.discountedPrice && (
            <div className="text-right">
              <p className="text-sm text-slate-500 line-through">R$ {benefit.discount.originalPrice.toFixed(2)}</p>
              <p className="text-lg font-bold text-green-600">R$ {benefit.discount.discountedPrice.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}