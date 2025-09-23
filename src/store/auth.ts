import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProfile } from '@/types';

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  updatePreferences: (preferences: UserProfile['preferences']) => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  cpf: string;
  phone?: string;
  password: string;
  acceptTerms: boolean;
  acceptMarketing: boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock successful login
          const mockUser: UserProfile = {
            id: '1',
            name: 'João Silva Santos',
            cpf: '123.456.789-00',
            email,
            phone: '(11) 99999-9999',
            subscriptionStatus: 'active',
            plan: 'monthly',
            planStartDate: '2024-01-01T00:00:00Z',
            planEndDate: '2024-02-01T00:00:00Z',
            paymentMethod: 'card',
            createdAt: '2024-01-01T00:00:00Z',
            preferences: {
              webPush: true,
              marketing: true,
              dataSharing: false,
            },
          };

          set({ user: mockUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      loginWithGoogle: async () => {
        set({ isLoading: true });
        
        try {
          // Simulate Google OAuth
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          const mockUser: UserProfile = {
            id: '1',
            name: 'João Silva Santos',
            cpf: '123.456.789-00',
            email: 'joao.silva@gmail.com',
            phone: '(11) 99999-9999',
            subscriptionStatus: 'inactive',
            plan: null,
            createdAt: new Date().toISOString(),
            preferences: {
              webPush: false,
              marketing: true,
              dataSharing: false,
            },
          };

          set({ user: mockUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (data: RegisterData) => {
        set({ isLoading: true });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1200));
          
          const mockUser: UserProfile = {
            id: '1',
            name: data.name,
            cpf: data.cpf,
            email: data.email,
            phone: data.phone,
            subscriptionStatus: 'inactive',
            plan: null,
            createdAt: new Date().toISOString(),
            preferences: {
              webPush: false,
              marketing: data.acceptMarketing,
              dataSharing: false,
            },
          };

          set({ user: mockUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: async (data: Partial<UserProfile>) => {
        const { user } = get();
        if (!user) return;

        set({ isLoading: true });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 800));
          
          const updatedUser = { ...user, ...data };
          set({ user: updatedUser, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      updatePreferences: async (preferences: UserProfile['preferences']) => {
        const { user } = get();
        if (!user) return;

        set({ isLoading: true });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 500));
          
          const updatedUser = { ...user, preferences };
          set({ user: updatedUser, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);