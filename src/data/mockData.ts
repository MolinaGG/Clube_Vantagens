import type { User, Benefit, BenefitUsage, Subscription, Clinic, ClinicAppointment } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'João Silva Santos',
  email: 'joao.silva@email.com',
  cpf: '123.456.789-00',
  phone: '+5511999999999',
  birthDate: '1990-05-15',
  address: {
    street: 'Rua das Flores',
    number: '123',
    complement: 'Apto 45',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567'
  },
  healthData: {
    bloodType: 'O+',
    allergies: ['Penicilina', 'Frutos do mar'],
    medications: ['Losartana 50mg', 'Sinvastatina 20mg'],
    chronicConditions: ['Hipertensão', 'Colesterol alto'],
    emergencyContact: {
      name: 'Maria Silva Santos',
      phone: '+5511888888888',
      relationship: 'Esposa'
    },
    healthInsurance: {
      provider: 'Unimed',
      cardNumber: '1234567890123456',
      validUntil: '2025-12-31'
    }
  },
  subscription: {
    plan: 'monthly',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-02-01',
    paymentMethod: 'card'
  },
  preferences: {
    notifications: true,
    marketing: true,
    dataSharing: false
  },
  createdAt: '2024-01-01'
};

export const mockBenefits: Benefit[] = [
  {
    id: '1',
    title: 'Exame Admissional Completo',
    description: 'Exame médico ocupacional completo para admissão, incluindo avaliação clínica e exames complementares necessários.',
    category: 'saude',
    partner: {
      id: '1',
      name: 'Clínica Ravim Centro',
      logo: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
      description: 'Especializada em medicina ocupacional e exames admissionais'
    },
    discount: {
      type: 'percentage',
      value: 40,
      originalPrice: 150.00,
      discountedPrice: 89.90,
      description: '40% de desconto'
    },
    location: {
      city: 'São Paulo',
      state: 'SP',
      address: 'Av. Paulista, 1000'
    },
    terms: 'Válido para agendamento até 30 dias. Não cumulativo com outras promoções.',
    featured: true,
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg'
  },
  {
    id: '2',
    title: 'Seguro Vida Individual',
    description: 'Proteção completa para você e sua família com cobertura de até R$ 100.000.',
    category: 'seguros',
    partner: {
      id: '2',
      name: 'Seguradora Vida+',
      logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
      description: 'Seguros de vida com as melhores condições do mercado'
    },
    discount: {
      type: 'percentage',
      value: 25,
      originalPrice: 89.90,
      discountedPrice: 67.43,
      description: '25% de desconto na primeira anuidade'
    },
    terms: 'Desconto válido apenas para novos clientes. Carência de 24 meses.',
    featured: false,
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg'
  },
  {
    id: '3',
    title: 'Academia Premium',
    description: 'Acesso completo à academia com musculação, aulas coletivas e personal trainer.',
    category: 'bem-estar',
    partner: {
      id: '3',
      name: 'FitLife Academia',
      logo: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      description: 'Academia completa com equipamentos modernos e profissionais qualificados'
    },
    discount: {
      type: 'special',
      value: 0,
      description: 'Primeira mensalidade grátis + 20% desconto'
    },
    location: {
      city: 'São Paulo',
      state: 'SP',
      address: 'Rua Augusta, 500'
    },
    terms: 'Válido para planos anuais. Fidelidade mínima de 12 meses.',
    featured: true,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg'
  },
  {
    id: '4',
    title: 'Consulta Cardiológica',
    description: 'Consulta completa com cardiologista experiente, incluindo ECG.',
    category: 'saude',
    partner: {
      id: '4',
      name: 'CardioClínica',
      logo: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg',
      description: 'Especialistas em cardiologia com tecnologia de ponta'
    },
    discount: {
      type: 'fixed',
      value: 100,
      originalPrice: 300.00,
      discountedPrice: 200.00,
      description: 'R$ 100 de desconto'
    },
    location: {
      city: 'Rio de Janeiro',
      state: 'RJ',
      address: 'Av. Copacabana, 200'
    },
    terms: 'Agendamento com 48h de antecedência. Válido por 60 dias.',
    featured: false,
    image: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg'
  },
  {
    id: '5',
    title: 'Cinema Premium',
    description: 'Ingressos com desconto para os principais cinemas da cidade.',
    category: 'lazer',
    partner: {
      id: '5',
      name: 'CineMax',
      logo: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      description: 'Rede de cinemas com salas premium e tecnologia IMAX'
    },
    discount: {
      type: 'percentage',
      value: 30,
      originalPrice: 25.00,
      discountedPrice: 17.50,
      description: '30% de desconto'
    },
    terms: 'Válido de segunda a quinta-feira. Não válido para estreias.',
    featured: false,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg'
  },
  {
    id: '6',
    title: 'Curso Online de Inglês',
    description: 'Acesso completo à plataforma de ensino de inglês com certificado.',
    category: 'educacao',
    partner: {
      id: '6',
      name: 'EnglishPro',
      logo: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg',
      description: 'Plataforma de ensino de idiomas com metodologia inovadora'
    },
    discount: {
      type: 'percentage',
      value: 50,
      originalPrice: 199.90,
      discountedPrice: 99.95,
      description: '50% de desconto'
    },
    terms: 'Acesso por 12 meses. Certificado incluso.',
    featured: true,
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg'
  }
];

export const mockBenefitUsage: BenefitUsage[] = [
  {
    id: '1',
    benefitId: '1',
    benefitTitle: 'Exame Admissional Completo',
    partnerName: 'Clínica Ravim Centro',
    usedAt: '2024-01-15T14:30:00Z',
    token: 'ABC123DEF456',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    status: 'used',
    value: 89.90,
    invoice: {
      number: 'NF-2024-001',
      date: '2024-01-15',
      amount: 89.90,
      downloadUrl: '/invoices/nf-2024-001.pdf'
    }
  },
  {
    id: '2',
    benefitId: '3',
    benefitTitle: 'Academia Premium',
    partnerName: 'FitLife Academia',
    usedAt: '2024-01-10T09:00:00Z',
    token: 'XYZ789GHI012',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    status: 'used',
    value: 0,
    invoice: {
      number: 'NF-2024-002',
      date: '2024-01-10',
      amount: 0,
      downloadUrl: '/invoices/nf-2024-002.pdf'
    }
  },
  {
    id: '3',
    benefitId: '5',
    benefitTitle: 'Cinema Premium',
    partnerName: 'CineMax',
    usedAt: '2024-01-20T19:30:00Z',
    token: 'DEF456ABC789',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    status: 'generated',
    value: 17.50
  }
];

export const mockSubscriptions: Subscription[] = [
  {
    id: 'monthly',
    plan: 'monthly',
    price: 14.90,
    features: [
      'Acesso a todos os benefícios',
      'Descontos exclusivos',
      'Suporte prioritário',
      'Notificações personalizadas'
    ]
  },
  {
    id: 'annual',
    plan: 'annual',
    price: 149.90,
    features: [
      'Acesso a todos os benefícios',
      'Descontos exclusivos',
      'Suporte prioritário',
      'Notificações personalizadas',
      '2 meses grátis',
      'Benefícios premium exclusivos'
    ],
    popular: true
  }
];

export const mockClinic: Clinic = {
  id: '1',
  name: 'Clínica Ravim Centro',
  email: 'contato@ravimcentro.com.br',
  cnpj: '12.345.678/0001-90',
  address: 'Av. Paulista, 1000 - São Paulo, SP',
  phone: '+5511999999999',
  specialties: ['Medicina do Trabalho', 'Exames Ocupacionais', 'Audiometria'],
  subscription: {
    status: 'active',
    plan: 'premium'
  }
};

export const mockClinicAppointments: ClinicAppointment[] = [
  {
    id: '1',
    patientName: 'João Silva Santos',
    patientPhone: '+5511999999999',
    service: 'Exame Admissional Completo',
    date: '2024-01-15',
    time: '14:30',
    status: 'completed',
    token: 'ABC123DEF456',
    value: 89.90,
    invoice: {
      number: 'NF-2024-001',
      date: '2024-01-15',
      amount: 89.90
    }
  },
  {
    id: '2',
    patientName: 'Maria Santos Silva',
    patientPhone: '+5511888888888',
    service: 'Audiometria Ocupacional',
    date: '2024-01-16',
    time: '10:00',
    status: 'confirmed',
    token: 'XYZ789GHI012',
    value: 55.00
  },
  {
    id: '3',
    patientName: 'Carlos Oliveira',
    patientPhone: '+5511777777777',
    service: 'Eletrocardiograma',
    date: '2024-01-17',
    time: '16:00',
    status: 'no-show',
    token: 'DEF456ABC789',
    value: 75.00
  }
];