import { create } from 'zustand';
import { Benefit, Category, Redemption } from '@/types';
import { mockBenefits, mockCategories, mockRedemptions } from '@/lib/data';

interface BenefitsState {
  benefits: Benefit[];
  categories: Category[];
  redemptions: Redemption[];
  isLoading: boolean;
  searchTerm: string;
  selectedCategory: string;
  selectedCity: string;
  fetchBenefits: () => Promise<void>;
  searchBenefits: (term: string) => void;
  filterByCategory: (category: string) => void;
  filterByCity: (city: string) => void;
  getBenefitBySlug: (slug: string) => Benefit | undefined;
  generateToken: (benefitId: string) => Promise<Redemption>;
  getRedemptions: () => Promise<void>;
  validateToken: (token: string) => Promise<{ isValid: boolean; message?: string }>;
}

export const useBenefitsStore = create<BenefitsState>((set, get) => ({
  benefits: [],
  categories: [],
  redemptions: [],
  isLoading: false,
  searchTerm: '',
  selectedCategory: '',
  selectedCity: '',

  fetchBenefits: async () => {
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      set({ 
        benefits: mockBenefits,
        categories: mockCategories,
        isLoading: false 
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  searchBenefits: (term: string) => {
    set({ searchTerm: term });
  },

  filterByCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  filterByCity: (city: string) => {
    set({ selectedCity: city });
  },

  getBenefitBySlug: (slug: string) => {
    const { benefits } = get();
    return benefits.find(benefit => benefit.slug === slug);
  },

  generateToken: async (benefitId: string) => {
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const benefit = mockBenefits.find(b => b.id === benefitId);
      if (!benefit) throw new Error('Benefício não encontrado');

      const token = Math.random().toString(36).substring(2, 15).toUpperCase();
      const now = new Date();
      const expiresAt = new Date(now.getTime() + 4 * 60 * 60 * 1000); // 4 hours

      const redemption: Redemption = {
        id: Math.random().toString(36).substring(7),
        token,
        benefitId,
        benefitName: benefit.name,
        partnerName: benefit.partnerName,
        status: 'generated',
        createdAt: now.toISOString(),
        expiresAt: expiresAt.toISOString(),
        qrCode: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`,
        instructions: 'Apresente este token no estabelecimento junto com um documento com foto.',
        value: benefit.discountedPrice,
      };

      const { redemptions } = get();
      set({ 
        redemptions: [redemption, ...redemptions],
        isLoading: false 
      });

      return redemption;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  getRedemptions: async () => {
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 600));
      
      set({ 
        redemptions: mockRedemptions,
        isLoading: false 
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  validateToken: async (token: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock validation logic
      if (token === 'ABC123DEF456') {
        return { isValid: true };
      } else if (token === 'XYZ789GHI012') {
        return { isValid: false, message: 'Token já foi utilizado' };
      } else {
        return { isValid: false, message: 'Token inválido ou expirado' };
      }
    } catch (error) {
      return { isValid: false, message: 'Erro ao validar token' };
    }
  },
}));