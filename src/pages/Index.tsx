
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CodeFeature from '../components/CodeFeature';
import FeatureSection from '../components/FeatureSection';
import ClientsLogos from '../components/ClientsLogos';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Registrar os plugins do GSAP
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação inicial da página
    const ctx = gsap.context(() => {
      gsap.from('.fade-in-element', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      });
      
      // Animações ativadas por scroll
      const sections = document.querySelectorAll('.gsap-section');
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        });
      });
      
      // Animação para elementos de código
      gsap.from('.code-animation', {
        opacity: 0, 
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.code-block',
          start: 'top 70%'
        }
      });
    }, mainRef);
    
    return () => ctx.revert(); // Limpeza quando o componente é desmontado
    
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-primary overflow-x-hidden">
      <div className="circuit-lines"></div>
      <Navigation />
      <Hero />
      <CodeFeature />
      <FeatureSection 
        title="Desenvolva aplicações {full-stack} em um só lugar."
        description="Nossa plataforma permite que você desenvolva frontend e backend em uma única base de código, integrando-se perfeitamente às suas ferramentas favoritas."
        imageSrc="/lovable-uploads/9f8f48f8-2dbf-46c4-98af-4d2c2253e8a6.png"
        direction="right"
      />
      <ClientsLogos />
      <Services />
      <FeatureSection 
        title="Concentre-se nos {problemas} mais importantes."
        description="Delegue tarefas repetitivas e foque no que realmente importa: criar código inovador e de alta qualidade."
        imageSrc="/lovable-uploads/9f8f48f8-2dbf-46c4-98af-4d2c2253e8a6.png"
        direction="left"
      />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
