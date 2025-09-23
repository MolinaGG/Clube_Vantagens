export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  healthData: {
    bloodType?: string;
    allergies: string[];
    medications: string[];
    chronicConditions: string[];
    emergencyContact: {
      name: string;
      phone: string;
      relationship: string;
    };
    healthInsurance?: {
      provider: string;
      cardNumber: string;
      validUntil: string;
    };
  };
  subscription: {
    plan: 'monthly' | 'annual' | null;
    status: 'active' | 'inactive' | 'overdue';
    startDate?: string;
    endDate?: string;
    paymentMethod?: 'card' | 'pix';
  };
  preferences: {
    notifications: boolean;
    marketing: boolean;
    dataSharing: boolean;
  };
  createdAt: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  category: 'saude' | 'seguros' | 'lazer' | 'bem-estar' | 'educacao';
  partner: {
    id: string;
    name: string;
    logo: string;
    description: string;
  };
  discount: {
    type: 'percentage' | 'fixed' | 'special';
    value: number;
    originalPrice?: number;
    discountedPrice?: number;
    description: string;
  };
  location?: {
    city: string;
    state: string;
    address?: string;
  };
  validUntil?: string;
  terms: string;
  featured: boolean;
  image: string;
}

export interface BenefitUsage {
  id: string;
  benefitId: string;
  benefitTitle: string;
  partnerName: string;
  usedAt: string;
  token: string;
  qrCode: string;
  status: 'generated' | 'used' | 'expired';
  value: number;
  invoice?: {
    number: string;
    date: string;
    amount: number;
    downloadUrl: string;
  };
}

export interface Subscription {
  id: string;
  plan: 'monthly' | 'annual';
  price: number;
  features: string[];
  popular?: boolean;
}

export interface Clinic {
  id: string;
  name: string;
  email: string;
  cnpj: string;
  address: string;
  phone: string;
  specialties: string[];
  subscription: {
    status: 'active' | 'inactive';
    plan: string;
  };
}

export interface ClinicAppointment {
  id: string;
  patientName: string;
  patientPhone: string;
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  token: string;
  value: number;
  invoice?: {
    number: string;
    date: string;
    amount: number;
  };
}

export interface ExportData {
  appointments: ClinicAppointment[];
  period: {
    start: string;
    end: string;
  };
  totals: {
    appointments: number;
    revenue: number;
    completionRate: number;
  };
}