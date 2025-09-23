import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Clube de Vantagens - Benefícios Exclusivos em Saúde e Bem-estar',
    template: '%s | Clube de Vantagens',
  },
  description: 'Acesse descontos exclusivos em exames médicos, consultas, seguros e lazer. Assinatura mensal a partir de R$ 14,90. Mais de 500 benefícios disponíveis.',
  keywords: ['clube de vantagens', 'descontos saúde', 'exames médicos', 'consultas médicas', 'seguros', 'bem-estar'],
  authors: [{ name: 'Clube de Vantagens' }],
  creator: 'Clube de Vantagens',
  publisher: 'Clube de Vantagens',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://clubedevantagens.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://clubedevantagens.com.br',
    title: 'Clube de Vantagens - Benefícios Exclusivos em Saúde e Bem-estar',
    description: 'Acesse descontos exclusivos em exames médicos, consultas, seguros e lazer. Assinatura mensal a partir de R$ 14,90.',
    siteName: 'Clube de Vantagens',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clube de Vantagens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clube de Vantagens - Benefícios Exclusivos',
    description: 'Descontos exclusivos em saúde, seguros e lazer. Assinatura a partir de R$ 14,90/mês.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#dc2626' },
    { media: '(prefers-color-scheme: dark)', color: '#dc2626' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Clube de Vantagens" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Clube de Vantagens',
              url: 'https://clubedevantagens.com.br',
              logo: 'https://clubedevantagens.com.br/logo.png',
              description: 'Clube de vantagens com benefícios exclusivos em saúde, seguros e lazer',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-11-99999-9999',
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}