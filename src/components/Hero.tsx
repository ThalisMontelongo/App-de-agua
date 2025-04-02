
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  // Efeito de digitação para o texto destacado
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação principal do herói
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      });

      // Cursor piscando e digitação
      const words = ['Mundo', 'Futuro', 'Tecnologia'];
      let currentIndex = 0;
      
      const typeAndDelete = () => {
        if (!textRef.current) return;
        const word = words[currentIndex];
        
        // Digita a palavra
        gsap.to(textRef.current, {
          duration: 1.5,
          text: word,
          ease: 'none',
          onComplete: () => {
            // Pausa antes de apagar
            gsap.delayedCall(1, () => {
              // Apaga a palavra
              gsap.to(textRef.current, {
                duration: 0.8,
                text: '',
                ease: 'none',
                onComplete: () => {
                  currentIndex = (currentIndex + 1) % words.length;
                  gsap.delayedCall(0.3, typeAndDelete);
                }
              });
            });
          }
        });
      };
      
      typeAndDelete();
      
      // Animação para o editor de código
      if (codeRef.current) {
        gsap.from(codeRef.current, {
          y: 100,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          delay: 1.2,
          ease: 'elastic.out(1, 0.75)'
        });
      }
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen grid-bg relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        {/* Container principal */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Conteúdo de texto */}
          <div className="md:w-1/2 mb-12 md:mb-0 hero-content">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-secondary/20 rounded flex items-center justify-center">
                <span className="text-secondary text-sm">⚡</span>
              </div>
              <span className="text-gray-400 text-sm">Desenvolvimento Web Profissional</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono leading-tight mb-6 text-white">
              Desenvolvedores Experts para<br />
              um <span className="neon-text" ref={textRef}></span>
              <span className="neon-text typing-cursor">Conectado</span>
            </h1>
            
            <p className="text-gray-400 max-w-xl mb-8">
              Oferecemos soluções completas de desenvolvimento web que conectam sua visão ao mundo digital. 
              Transformamos ideias em experiências digitais impactantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-secondary text-primary px-8 py-3 rounded flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors group"
              >
                Começar Agora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#portfolio" 
                className="border border-secondary/50 text-secondary px-8 py-3 rounded flex items-center justify-center hover:bg-secondary/10 transition-colors"
              >
                Ver Portfólio
              </a>
            </div>
          </div>

          {/* Editor de código */}
          <div 
            ref={codeRef} 
            className="md:w-1/2 w-full code-block rounded-xl shadow-lg shadow-secondary/10 border border-gray-800"
          >
            <div className="bg-[#1E1E1E] rounded-t-xl p-2 flex items-center gap-2 border-b border-gray-800">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="text-gray-400 text-xs ml-2">index.tsx</div>
            </div>
            <div className="p-4 font-mono text-sm overflow-hidden">
              <pre className="code-animation">
                <span className="text-gray-500">// Desenvolvimento web moderno</span>
              </pre>
              <pre className="code-animation">
                <span className="text-[#569CD6]">import</span> <span className="text-[#9CDCFE]">React</span> <span className="text-[#569CD6]">from</span> <span className="text-[#CE9178]">'react'</span>;
              </pre>
              <pre className="code-animation">
                <span className="text-[#569CD6]">import</span> <span className="text-[#9CDCFE]">&#123; motion &#125;</span> <span className="text-[#569CD6]">from</span> <span className="text-[#CE9178]">'framer-motion'</span>;
              </pre>
              <pre className="code-animation">&nbsp;</pre>
              <pre className="code-animation">
                <span className="text-[#569CD6]">const</span> <span className="text-[#4FC1FF]">App</span> = () <span className="text-[#569CD6]">=&gt;</span> <span className="text-[#D4D4D4]">&#123;</span>
              </pre>
              <pre className="code-animation">
                <span>&nbsp;&nbsp;<span className="text-[#569CD6]">return</span> <span className="text-[#D4D4D4]">(</span></span>
              </pre>
              <pre className="code-animation">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#808080]">&lt;</span><span className="text-[#4EC9B0]">motion.div</span> </span>
              </pre>
              <pre className="code-animation">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9CDCFE]">initial</span><span className="text-[#D4D4D4]">=</span><span className="text-[#808080]">&#123;</span><span className="text-[#D4D4D4]">&#123; </span><span className="text-[#9CDCFE]">opacity</span><span className="text-[#D4D4D4]">: </span><span className="text-[#B5CEA8]">0</span><span className="text-[#D4D4D4]"> &#125;</span><span className="text-[#808080]">&#125;</span></span>
              </pre>
              <pre className="code-animation">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9CDCFE]">animate</span><span className="text-[#D4D4D4]">=</span><span className="text-[#808080]">&#123;</span><span className="text-[#D4D4D4]">&#123; </span><span className="text-[#9CDCFE]">opacity</span><span className="text-[#D4D4D4]">: </span><span className="text-[#B5CEA8]">1</span><span className="text-[#D4D4D4]"> &#125;</span><span className="text-[#808080]">&#125;</span></span>
              </pre>
              <pre className="code-animation">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9CDCFE]">className</span><span className="text-[#D4D4D4]">=</span><span className="text-[#CE9178]">"container"</span><span className="text-[#808080]">&gt;</span></span>
              </pre>
              <pre className="code-animation">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9CDCFE]">Olá</span><span className="text-[#D4D4D4]">, </span><span className="text-secondary">Mundo</span><span className="text-[#D4D4D4]">!</span></span>
              </pre>
              <pre className="code-animation">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#808080]">&lt;/</span><span className="text-[#4EC9B0]">motion.div</span><span className="text-[#808080]">&gt;</span></span>
              </pre>
              <pre className="code-animation">
                <span>&nbsp;&nbsp;<span className="text-[#D4D4D4]">)</span>;</span>
              </pre>
              <pre className="code-animation">
                <span className="text-[#D4D4D4]">&#125;</span>
              </pre>
              <pre className="code-animation">&nbsp;</pre>
              <pre className="code-animation">
                <span className="text-[#569CD6]">export</span> <span className="text-[#569CD6]">default</span> <span className="text-[#4FC1FF]">App</span><span className="text-[#D4D4D4]">;</span>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Circuit line decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary/20"></div>
      <div className="absolute bottom-0 left-1/4 w-[1px] h-12 bg-secondary/20"></div>
      <div className="absolute bottom-0 left-2/4 w-[1px] h-24 bg-secondary/20"></div>
      <div className="absolute bottom-0 left-3/4 w-[1px] h-8 bg-secondary/20"></div>
    </div>
  );
};

export default Hero;
