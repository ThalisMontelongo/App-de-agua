
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">⚡</span>
            </div>
            <span className="text-gray-600">Soluções Profissionais em Desenvolvimento Web</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6">
            Transformando Ideias em<br />
            Aplicações Web<br />
            Poderosas
          </h1>
          
          <p className="text-gray-600 max-w-xl mb-12">
            Serviços especializados em desenvolvimento de sites responsivos, plataformas de e-commerce, e aplicações web personalizadas que impulsionam o crescimento do seu negócio.
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-600 text-sm">💡</span>
              </div>
              <div>
                <h3 className="font-medium">Soluções Web Completas</h3>
                <p className="text-sm text-gray-500">De e-commerce a aplicações web progressivas, construímos experiências digitais que fazem a diferença.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Buscar serviços de desenvolvimento web"
                className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none"
              />
              <button className="bg-secondary text-white rounded-xl px-6 py-3 hover:bg-secondary/80 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-3xl p-8 aspect-[4/3] flex flex-col justify-end">
            <h3 className="text-2xl font-medium mb-4">Nosso Portfólio de Desenvolvimento</h3>
            <p className="text-gray-700 mb-6">Explore nossa coleção de websites, plataformas de e-commerce e aplicações web.</p>
            <a href="#portfolio" className="bg-secondary text-white rounded-xl px-6 py-3 w-fit hover:bg-secondary/80 transition-colors inline-block">
              Ver Projetos
            </a>
          </div>

          {/* Right Cards Stack */}
          <div className="space-y-6">
            {/* Top Card */}
            <div className="bg-gray-100 rounded-3xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-4 py-1 bg-white/80 rounded-full text-sm mb-2">Serviço</span>
                  <h3 className="text-xl font-medium">Desenvolvimento de E-commerce</h3>
                </div>
                <span className="text-sm text-gray-500">01</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Lojas virtuais personalizadas com integração de pagamentos, gerenciamento de estoque e design responsivo para mobile.
              </p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm mb-2">Serviço</span>
                  <h3 className="text-xl font-medium">Desenvolvimento de Aplicações Web</h3>
                </div>
                <span className="text-sm text-gray-500">02</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Aplicações web robustas e escaláveis com tecnologias de ponta e interfaces intuitivas para o usuário.
              </p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Rating Card */}
            <div className="bg-secondary text-white rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-2xl font-medium">4,9</span>
                <span className="text-sm text-gray-300">/5</span>
              </div>
              <h3 className="font-medium mb-4">Confiança de Empresas em Todo Brasil</h3>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <span className="text-sm flex items-center ml-2">+200 Projetos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
