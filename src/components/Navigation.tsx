import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">Logo</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-primary hover:text-primary-muted transition-colors">Features</a>
            <a href="#services" className="text-primary hover:text-primary-muted transition-colors">Services</a>
            <a href="#about" className="text-primary hover:text-primary-muted transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-muted transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary hover:text-primary-muted transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-primary hover:bg-muted transition-colors"
              >
                Features
              </a>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-primary hover:bg-muted transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-primary hover:bg-muted transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-primary hover:bg-muted transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;