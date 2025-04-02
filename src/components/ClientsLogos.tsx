
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = [
  { id: 1, name: 'EdTech', logo: 'EdTech' },
  { id: 2, name: 'DataBites', logo: 'DataBites' },
  { id: 3, name: 'eTeknup', logo: 'eTeknup' },
  { id: 4, name: 'E-Done', logo: 'E-Done' },
  { id: 5, name: 'softdef', logo: 'softdef' },
  { id: 6, name: 'TechStar', logo: 'TechStar' },
  { id: 7, name: 'Dataflow', logo: 'Dataflow' },
  { id: 8, name: 'NetSecure', logo: 'NetSecure' },
];

const ClientsLogos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoTrack1Ref = useRef<HTMLDivElement>(null);
  const logoTrack2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animation para título
      gsap.from('.client-section-title', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      // Animações para os dois tracks de logos - em direções opostas para criar efeito mais interessante
      gsap.to(logoTrack1Ref.current, {
        xPercent: -100,
        repeat: -1,
        duration: 30,
        ease: "linear",
        modifiers: {
          xPercent: gsap.utils.unitize(x => parseFloat(x) % 100) // Garante loop infinito suave
        }
      });

      gsap.to(logoTrack2Ref.current, {
        xPercent: 100,
        repeat: -1,
        duration: 40,
        ease: "linear",
        modifiers: {
          xPercent: gsap.utils.unitize(x => parseFloat(x) % 100)
        }
      });
      
      // Adicionando efeito de hover com GSAP
      const logos = document.querySelectorAll('.client-logo');
      logos.forEach((logo) => {
        logo.addEventListener('mouseenter', () => {
          gsap.to(logo, {
            y: -10,
            scale: 1.05,
            boxShadow: '0 10px 25px rgba(136, 36, 150, 0.3)',
            duration: 0.3
          });
        });
        
        logo.addEventListener('mouseleave', () => {
          gsap.to(logo, {
            y: 0,
            scale: 1,
            boxShadow: '0 0 15px rgba(136, 36, 150, 0.1)',
            duration: 0.5
          });
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden border-t border-b border-gray-800"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-palette-purple-DEFAULT/30 to-palette-purple-dark/30 z-0"></div>
        <div className="circuit-lines"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-center text-xl md:text-2xl font-mono mb-12 text-white client-section-title">
          Empresas que <span className="neon-text">confiam</span> em nosso código
        </h3>
        
        <div className="clients-carousel">
          {/* Primeira fileira de logos - movimento da esquerda para direita */}
          <div className="mb-8 overflow-hidden relative">
            <div 
              ref={logoTrack1Ref}
              className="flex items-center gap-8 absolute whitespace-nowrap"
            >
              {[...clients, ...clients].map((client, index) => (
                <div 
                  key={`row1-${client.id}-${index}`}
                  className="client-logo w-36 h-16 rounded-lg flex items-center justify-center"
                >
                  <span className="text-palette-purple-light font-bold text-lg">
                    {client.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Segunda fileira de logos - movimento da direita para esquerda */}
          <div className="overflow-hidden relative">
            <div 
              ref={logoTrack2Ref}
              className="flex items-center gap-8 absolute whitespace-nowrap"
            >
              {[...clients.reverse(), ...clients].map((client, index) => (
                <div 
                  key={`row2-${client.id}-${index}`}
                  className="client-logo w-36 h-16 rounded-lg flex items-center justify-center"
                >
                  <span className="text-palette-purple-light font-bold text-lg">
                    {client.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogos;
