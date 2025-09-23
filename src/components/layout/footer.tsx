import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Como Funciona', href: '/#como-funciona' },
    { name: 'Benefícios', href: '/beneficios' },
    { name: 'Contato', href: '/contato' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/legal/termos' },
    { name: 'Política de Privacidade', href: '/legal/privacidade' },
    { name: 'LGPD', href: '/legal/lgpd' },
  ],
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 rounded-lg">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">Clube de Vantagens</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Acesse benefícios exclusivos em saúde, seguros e lazer. 
              Mais de 500 parceiros em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Clube de Vantagens. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            CNPJ: 12.345.678/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
}