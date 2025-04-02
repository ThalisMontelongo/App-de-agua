
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Animação para a navegação
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
      delay: 0.2
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/80 backdrop-blur-md shadow-md shadow-secondary/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold font-mono flex items-center">
              <span className="text-white">Tech</span>
              <span className="neon-text">Programers</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-secondary transition-colors text-sm font-mono">Recursos</a>
            <a href="#services" className="text-foreground hover:text-secondary transition-colors text-sm font-mono">Serviços</a>
            <a href="#portfolio" className="text-foreground hover:text-secondary transition-colors text-sm font-mono">Portfólio</a>
            <a href="#faq" className="text-foreground hover:text-secondary transition-colors text-sm font-mono">FAQ</a>
            <a href="#contact" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground transition-colors px-4 py-2 rounded text-sm font-mono">
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-secondary transition-colors"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-foreground hover:text-secondary transition-colors text-sm font-mono"
                onClick={() => setIsOpen(false)}
              >
                Recursos
              </a>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-foreground hover:text-secondary transition-colors text-sm font-mono"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 rounded-md text-foreground hover:text-secondary transition-colors text-sm font-mono"
                onClick={() => setIsOpen(false)}
              >
                Portfólio
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 rounded-md text-foreground hover:text-secondary transition-colors text-sm font-mono"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-foreground hover:text-secondary transition-colors text-sm font-mono"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
