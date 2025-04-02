
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  direction: 'left' | 'right';
}

const FeatureSection = ({ title, description, imageSrc, direction }: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-content', {
        x: direction === 'left' ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse'
        }
      });
      
      gsap.from('.feature-image', {
        x: direction === 'left' ? 50 : -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, [direction]);

  // Função para inserir tags neon no texto
  const formatTitle = (text: string) => {
    return text.replace(/\{([^}]+)\}/g, '<span class="neon-text">$1</span>');
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative gsap-section">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
          {/* Content */}
          <div className="md:w-1/2 feature-content">
            <h2 
              className="text-3xl md:text-4xl font-mono mb-6 text-white"
              dangerouslySetInnerHTML={{ __html: formatTitle(title) }}
            />
            <p className="text-gray-400 mb-8">
              {description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-secondary text-2xl mb-2">200+</div>
                <div className="text-sm text-gray-400">Projetos Entregues</div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-secondary text-2xl mb-2">98%</div>
                <div className="text-sm text-gray-400">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          
          {/* Image or Code */}
          <div className="md:w-1/2 feature-image">
            <div className="code-block rounded-xl shadow-lg shadow-secondary/10 border border-gray-800">
              {/* Code display */}
              <div className="bg-[#1E1E1E] rounded-t-xl p-2 flex items-center gap-2 border-b border-gray-800">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-gray-400 text-xs ml-2">component.jsx</div>
              </div>
              <div className="h-[300px] flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-xl opacity-30"></div>
                  <div className="relative z-10 px-4">
                    <svg className="w-16 h-16 mx-auto mb-4 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"></path>
                      <path d="M17.73 11L21 14.27l-7.73 7.73L9 18.73"></path>
                    </svg>
                    <span className="text-gray-300 block text-center">Código limpo. APIs robustas.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
