
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content > div', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%'
        }
      });
    }, footerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="circuit-lines opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 footer-content">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-mono font-bold mb-4 flex items-center">
              <span className="text-white">Tech</span>
              <span className="neon-text">Programers</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Transformando ideias em poderosas aplicações web desde 2010.
              Especialistas em desenvolvimento de sites, e-commerce e sistemas web personalizados.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="text-lg font-mono font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Desenvolvimento de Sites</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">E-commerce</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Sistemas Web</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Aplicativos Web</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Manutenção e Suporte</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">SEO e Marketing Digital</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Links Rápidos */}
          <div>
            <h3 className="text-lg font-mono font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Início</a></li>
              <li><a href="#portfolio" className="hover:text-secondary transition-colors text-sm">Portfólio</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors text-sm">Serviços</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors text-sm">FAQ</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors text-sm">Contato</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-mono font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-secondary" />
                <span className="text-sm">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-secondary" />
                <span className="text-sm">(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-secondary" />
                <span className="text-sm">contato@techprogramers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />
        
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TechProgramers. Todos os direitos reservados.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-500 hover:text-secondary transition-colors mx-2 text-sm">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-secondary transition-colors mx-2 text-sm">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
