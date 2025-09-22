import React from 'react';
import { MapPin, Clock, Badge } from 'lucide-react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 hover:border-blue-200 cursor-pointer group"
      onClick={() => onSelect(service)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">
            {service.name}
          </h3>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">{service.description}</p>
        </div>
        <div className="ml-4 flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          <Badge className="w-4 h-4" />
          <span>{service.discount}% OFF</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-slate-500">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{service.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{service.duration}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 line-through">R$ {service.originalPrice.toFixed(2)}</p>
          <p className="text-2xl font-bold text-blue-600">R$ {service.discountedPrice.toFixed(2)}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600 mb-1">{service.clinicName}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Agendar
          </button>
        </div>
      </div>
    </div>
  );
}