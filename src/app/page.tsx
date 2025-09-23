import { Metadata } from 'next';
import Hero from '@/components/home/hero';
import Features from '@/components/home/features';
import Categories from '@/components/home/categories';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import FAQ from '@/components/home/faq';
import CTA from '@/components/home/cta';

export const metadata: Metadata = {
  title: 'Clube de Vantagens - Benefícios Exclusivos em Saúde e Bem-estar',
  description: 'Acesse mais de 500 benefícios exclusivos em saúde, seguros e lazer. Assinatura mensal a partir de R$ 14,90. Descontos de até 70% em exames e consultas.',
  openGraph: {
    title: 'Clube de Vantagens - Benefícios Exclusivos',
    description: 'Mais de 500 benefícios exclusivos em saúde, seguros e lazer. Assinatura a partir de R$ 14,90/mês.',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}