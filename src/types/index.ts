export type SubscriptionStatus = 'active' | 'delinquent' | 'canceled' | 'inactive';
export type RedemptionStatus = 'generated' | 'used' | 'expired';
export type PaymentMethod = 'card' | 'pix';
export type SubscriptionPlan = 'monthly' | 'yearly';

export interface UserProfile {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone?: string;
  subscriptionStatus: SubscriptionStatus;
  plan: SubscriptionPlan | null;
  planStartDate?: string;
  planEndDate?: string;
  paymentMethod?: PaymentMethod;
  createdAt: string;
  preferences: {
    webPush: boolean;
    marketing: boolean;
    dataSharing: boolean;
  };
}

export interface Benefit {
  id: string;
  slug: string;
  name: string;
  category: string;
  partnerName: string;
  partnerLogo: string;
  shortDescription: string;
  fullDescription: string;
  rules: string;
  discountLabel: string;
  discountPercentage: number;
  originalPrice?: number;
  discountedPrice?: number;
  city?: string;
  state?: string;
  address?: string;
  phone?: string;
  website?: string;
  featured: boolean;
  active: boolean;
  validUntil?: string;
  image: string;
  createdAt: string;
}

export interface Redemption {
  id: string;
  token: string;
  benefitId: string;
  benefitName: string;
  partnerName: string;
  status: RedemptionStatus;
  createdAt: string;
  expiresAt: string;
  usedAt?: string;
  qrCode: string;
  instructions: string;
  value?: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  benefitCount: number;
  featured: boolean;
}

export interface Subscription {
  id: string;
  plan: SubscriptionPlan;
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  savings?: string;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'processing' | 'succeeded' | 'failed';
  paymentMethod: PaymentMethod;
  pixCode?: string;
  pixQrCode?: string;
  createdAt: string;
}

export interface TokenValidation {
  token: string;
  isValid: boolean;
  benefit?: {
    name: string;
    partnerName: string;
    discountLabel: string;
  };
  user?: {
    name: string;
    cpf: string;
  };
  expiresAt?: string;
  usedAt?: string;
  message?: string;
}