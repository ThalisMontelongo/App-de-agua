
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Code, Database, Globe, Layout } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-secondary" />,
    title: 'Desenvolvimento Frontend',
    description: 'Construímos interfaces modernas e responsivas usando as tecnologias mais recentes como React, Vue e Angular.'
  },
  {
    icon: <Database className="w-8 h-8 text-secondary" />,
    title: 'Desenvolvimento Backend',
    description: 'APIs robustas e escaláveis com Node.js, Python, Java ou .NET, integradas com qualquer banco de dados.'
  },
  {
    icon: <Globe className="w-8 h-8 text-secondary" />,
    title: 'Desenvolvimento Full-Stack',
    description: 'Soluções completas de ponta a ponta, com código limpo e facilmente mantido por sua equipe.'
  },
  {
    icon: <Layout className="w-8 h-8 text-secondary" />,
    title: 'Web Design Responsivo',
    description: 'Layouts que se adaptam perfeitamente a todos os dispositivos, proporcionando ótima experiência ao usuário.'
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });
      
      gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%'
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative gsap-section">
      <div className="circuit-lines"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 services-title">
          <h2 className="text-3xl sm:text-4xl font-mono mb-4 text-white">
            Nossos <span className="neon-text">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos soluções completas para o seu negócio digital,
            desde o desenvolvimento de websites até sistemas web complexos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-muted rounded-xl p-6 border border-gray-800 hover:border-secondary/50 transition-all duration-300 service-card"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-mono mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Solicite um Orçamento
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
