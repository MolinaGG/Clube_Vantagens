import { create } from 'zustand';
import { SubscriptionPlan, PaymentMethod, PaymentIntent } from '@/types';

interface SubscriptionState {
  currentPlan: SubscriptionPlan | null;
  isLoading: boolean;
  paymentIntent: PaymentIntent | null;
  subscribe: (plan: SubscriptionPlan, paymentMethod: PaymentMethod) => Promise<PaymentIntent>;
  confirmPayment: (paymentIntentId: string) => Promise<void>;
  cancelSubscription: () => Promise<void>;
  updatePaymentMethod: (paymentMethod: PaymentMethod) => Promise<void>;
}

export const useSubscriptionStore = create<SubscriptionState>((set, get) => ({
  currentPlan: null,
  isLoading: false,
  paymentIntent: null,

  subscribe: async (plan: SubscriptionPlan, paymentMethod: PaymentMethod) => {
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const amount = plan === 'monthly' ? 14.90 : 149.90;
      
      const mockPaymentIntent: PaymentIntent = {
        id: `pi_${Math.random().toString(36).substring(7)}`,
        amount,
        currency: 'BRL',
        status: paymentMethod === 'pix' ? 'pending' : 'processing',
        paymentMethod,
        createdAt: new Date().toISOString(),
      };

      if (paymentMethod === 'pix') {
        mockPaymentIntent.pixCode = '00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-426614174000520400005303986540514.905802BR5925CLUBE DE VANTAGENS LTDA6009SAO PAULO62070503***6304ABCD';
        mockPaymentIntent.pixQrCode = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
      }

      set({ paymentIntent: mockPaymentIntent, isLoading: false });
      return mockPaymentIntent;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  confirmPayment: async (paymentIntentId: string) => {
    set({ isLoading: true });
    
    try {
      // Simulate payment confirmation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      set({ 
        paymentIntent: null, 
        isLoading: false,
        currentPlan: 'monthly' // This would come from the payment intent
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  cancelSubscription: async () => {
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set({ currentPlan: null, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  updatePaymentMethod: async (paymentMethod: PaymentMethod) => {
    set({ isLoading: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
}));