export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  zipCode: string;
  consents: {
    communication: boolean;
    sensitiveData: boolean;
    analytics: boolean;
  };
  pushOptIn: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  duration: string;
  clinicId: string;
  clinicName: string;
  location: string;
  image: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  serviceId: string;
  serviceName: string;
  clinicName: string;
  date: string;
  time: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  token?: string;
  tokenUsed: boolean;
}

export interface Clinic {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  specialties: string[];
}

export interface Token {
  id: string;
  appointmentId: string;
  code: string;
  qrCode: string;
  expiresAt: string;
  used: boolean;
  userId: string;
}

export interface PaymentMethod {
  id: string;
  type: 'pix' | 'card';
  details: string;
  isDefault: boolean;
}