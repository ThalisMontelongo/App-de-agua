import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">WebDev Solutions</h3>
            <p className="text-sm text-gray-300 mb-4">
              Transformando ideias em poderosas aplicações web desde 2010.
              Especialistas em desenvolvimento de sites, e-commerce e sistemas web personalizados.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Desenvolvimento de Sites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sistemas Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aplicativos Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manutenção e Suporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO e Marketing Digital</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Av. Tecnologia, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(11) 9999-8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>contato@webdevsolutions.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} WebDev Solutions. Todos os direitos reservados.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
