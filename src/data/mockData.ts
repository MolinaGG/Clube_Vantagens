import type { Service, Appointment, User, Clinic } from '../types';

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Exame Admissional Completo',
    description: 'Exame médico ocupacional completo para admissão, incluindo avaliação clínica e exames complementares',
    category: 'ocupacional',
    originalPrice: 150.00,
    discountedPrice: 89.90,
    discount: 40,
    duration: '45 min',
    clinicId: '1',
    clinicName: 'Clínica Ravim Centro',
    location: 'São Paulo, SP',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
    available: true
  },
  {
    id: '2',
    name: 'Audiometria Ocupacional',
    description: 'Exame auditivo para avaliação da capacidade auditiva em ambiente ocupacional',
    category: 'exames',
    originalPrice: 80.00,
    discountedPrice: 55.00,
    discount: 31,
    duration: '30 min',
    clinicId: '1',
    clinicName: 'Clínica Ravim Centro',
    location: 'São Paulo, SP',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
    available: true
  },
  {
    id: '3',
    name: 'Eletrocardiograma (ECG)',
    description: 'Exame cardiológico para avaliação da atividade elétrica do coração',
    category: 'cardiologia',
    originalPrice: 120.00,
    discountedPrice: 75.00,
    discount: 37,
    duration: '20 min',
    clinicId: '2',
    clinicName: 'Centro Médico Saúde+',
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg',
    available: true
  },
  {
    id: '4',
    name: 'Exame Toxicológico',
    description: 'Teste para detecção de substâncias tóxicas no organismo',
    category: 'laboratorial',
    originalPrice: 200.00,
    discountedPrice: 140.00,
    discount: 30,
    duration: '15 min',
    clinicId: '2',
    clinicName: 'Centro Médico Saúde+',
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
    available: true
  },
  {
    id: '5',
    name: 'Espirometria',
    description: 'Exame de função pulmonar para avaliação da capacidade respiratória',
    category: 'respiratorio',
    originalPrice: 100.00,
    discountedPrice: 70.00,
    discount: 30,
    duration: '25 min',
    clinicId: '3',
    clinicName: 'Clínica VitalSaúde',
    location: 'Belo Horizonte, MG',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg',
    available: true
  },
  {
    id: '6',
    name: 'Consulta Medicina do Trabalho',
    description: 'Consulta especializada em medicina ocupacional com médico do trabalho',
    category: 'consulta',
    originalPrice: 300.00,
    discountedPrice: 199.00,
    discount: 33,
    duration: '60 min',
    clinicId: '3',
    clinicName: 'Clínica VitalSaúde',
    location: 'Belo Horizonte, MG',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
    available: true
  }
];

export const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao.silva@email.com',
  phone: '+5511999999999',
  birthDate: '1990-05-15',
  zipCode: '01234-567',
  consents: {
    communication: true,
    sensitiveData: true,
    analytics: false
  },
  pushOptIn: true
};

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    serviceId: '1',
    serviceName: 'Exame Admissional Completo',
    clinicName: 'Clínica Ravim Centro',
    date: '2024-01-15',
    time: '14:30',
    price: 89.90,
    status: 'confirmed',
    token: 'ABC123DEF',
    tokenUsed: false
  },
  {
    id: '2',
    serviceId: '2',
    serviceName: 'Audiometria Ocupacional',
    clinicName: 'Clínica Ravim Centro',
    date: '2024-01-10',
    time: '10:00',
    price: 55.00,
    status: 'completed',
    token: 'XYZ789GHI',
    tokenUsed: true
  },
  {
    id: '3',
    serviceId: '3',
    serviceName: 'Eletrocardiograma (ECG)',
    clinicName: 'Centro Médico Saúde+',
    date: '2024-01-20',
    time: '16:00',
    price: 75.00,
    status: 'pending',
    token: undefined,
    tokenUsed: false
  }
];

export const mockClinics: Clinic[] = [
  {
    id: '1',
    name: 'Clínica Ravim Centro',
    email: 'contato@ravimcentro.com.br',
    address: 'Av. Paulista, 1000 - São Paulo, SP',
    phone: '+5511999999999',
    specialties: ['Medicina do Trabalho', 'Exames Ocupacionais', 'Audiometria']
  },
  {
    id: '2',
    name: 'Centro Médico Saúde+',
    email: 'atendimento@saudemais.com.br',
    address: 'Rua das Flores, 500 - Rio de Janeiro, RJ',
    phone: '+5521888888888',
    specialties: ['Cardiologia', 'Exames Laboratoriais', 'Medicina Ocupacional']
  },
  {
    id: '3',
    name: 'Clínica VitalSaúde',
    email: 'contato@vitalsaude.com.br',
    address: 'Av. Afonso Pena, 200 - Belo Horizonte, MG',
    phone: '+5531777777777',
    specialties: ['Pneumologia', 'Medicina do Trabalho', 'Exames Respiratórios']
  }
];