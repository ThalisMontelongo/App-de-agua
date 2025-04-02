
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CodeFeature = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.code-window', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.code-line', {
        opacity: 0,
        x: -20,
        duration: 0.3,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.code-window',
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative gsap-section">
      <div className="circuit-lines"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono mb-4 text-white">
            Finalmente você pode desenvolver aplicações <span className="neon-text">&#123;full-stack&#125;</span> em um único lugar
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossa plataforma oferece desenvolvimento integrado front-end e back-end, permitindo que você foque no que realmente importa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Principal code window */}
          <div className="lg:col-span-2 code-block code-window rounded-xl shadow-lg shadow-secondary/10 border border-gray-800">
            <div className="bg-[#1E1E1E] rounded-t-xl p-2 flex items-center gap-2 border-b border-gray-800">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="text-gray-400 text-xs ml-2">server.ts</div>
            </div>
            <div className="p-4 font-mono text-sm overflow-hidden">
              <pre className="code-line">
                <span className="text-[#569CD6]">import</span> <span className="text-[#9CDCFE]">express</span> <span className="text-[#569CD6]">from</span> <span className="text-[#CE9178]">'express'</span><span className="text-[#D4D4D4]">;</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#569CD6]">import</span> <span className="text-[#9CDCFE]">&#123; PrismaClient &#125;</span> <span className="text-[#569CD6]">from</span> <span className="text-[#CE9178]">'@prisma/client'</span><span className="text-[#D4D4D4]">;</span>
              </pre>
              <pre className="code-line">&nbsp;</pre>
              <pre className="code-line">
                <span className="text-[#569CD6]">const</span> <span className="text-[#4FC1FF]">prisma</span> <span className="text-[#D4D4D4]">=</span> <span className="text-[#569CD6]">new</span> <span className="text-[#4EC9B0]">PrismaClient</span><span className="text-[#D4D4D4]">();</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#569CD6]">const</span> <span className="text-[#4FC1FF]">app</span> <span className="text-[#D4D4D4]">=</span> <span className="text-[#4EC9B0]">express</span><span className="text-[#D4D4D4]">();</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#4FC1FF]">app</span><span className="text-[#D4D4D4]">.</span><span className="text-[#9CDCFE]">use</span><span className="text-[#D4D4D4]">(</span><span className="text-[#4EC9B0]">express</span><span className="text-[#D4D4D4]">.</span><span className="text-[#9CDCFE]">json</span><span className="text-[#D4D4D4]">());</span>
              </pre>
              <pre className="code-line">&nbsp;</pre>
              <pre className="code-line">
                <span className="text-[#4FC1FF]">app</span><span className="text-[#D4D4D4]">.</span><span className="text-[#9CDCFE]">get</span><span className="text-[#D4D4D4]">(</span><span className="text-[#CE9178]">'/api/projects'</span><span className="text-[#D4D4D4]">, </span><span className="text-[#569CD6]">async</span><span className="text-[#D4D4D4]"> (</span><span className="text-[#9CDCFE]">req</span><span className="text-[#D4D4D4]">, </span><span className="text-[#9CDCFE]">res</span><span className="text-[#D4D4D4]">) </span><span className="text-[#569CD6]">=&gt;</span><span className="text-[#D4D4D4]"> &#123;</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#D4D4D4]">&nbsp;&nbsp;</span><span className="text-[#C586C0]">try</span><span className="text-[#D4D4D4]"> &#123;</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#D4D4D4]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#569CD6]">const</span><span className="text-[#D4D4D4]"> </span><span className="text-[#4FC1FF]">projects</span><span className="text-[#D4D4D4]"> = </span><span className="text-[#569CD6]">await</span><span className="text-[#D4D4D4]"> </span><span className="text-[#4FC1FF]">prisma</span><span className="text-[#D4D4D4]">.</span><span className="text-[#9CDCFE]">project</span><span className="text-[#D4D4D4]">.</span><span className="text-[#9CDCFE]">findMany</span><span className="text-[#D4D4D4]">();</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#D4D4D4]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#4FC1FF]">res</span><span className="text-[#D4D4D4]">.</span><span className="text-[#9CDCFE]">json</span><span className="text-[#D4D4D4]">(</span><span className="text-[#4FC1FF]">projects</span><span className="text-[#D4D4D4]">);</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#D4D4D4]">&nbsp;&nbsp;</span><span className="text-[#C586C0]">&#125; catch</span><span className="text-[#D4D4D4]"> (</span><span className="text-[#9CDCFE]">error</span><span className="text-[#D4D4D4]">) &#123;</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#D4D4D4]">&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#4FC1FF]">res</span><span className="text-[#D4D4D4]">.</span><span className="text-[#9CDCFE]">status</span><span className="text-[#D4D4D4]">(</span><span className="text-[#B5CEA8]">500</span><span className="text-[#D4D4D4]">).</span><span className="text-[#9CDCFE]">json</span><span className="text-[#D4D4D4]">(&#123; </span><span className="text-[#9CDCFE]">error</span><span className="text-[#D4D4D4]">: </span><span className="text-[#CE9178]">'Erro interno do servidor'</span><span className="text-[#D4D4D4]"> &#125;);</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#D4D4D4]">&nbsp;&nbsp;&#125;</span>
              </pre>
              <pre className="code-line">
                <span className="text-[#D4D4D4]">&#125;);</span>
              </pre>
            </div>
          </div>

          {/* Side panels */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-muted rounded-xl p-6 border border-secondary/20">
              <h3 className="text-xl font-mono mb-2 text-white">Frameworks Otimizados</h3>
              <p className="text-gray-400 text-sm mb-4">
                Suporte integrado para os frameworks mais populares, como React, Vue, Next.js, Express e muito mais.
              </p>
              <a href="#" className="text-secondary flex items-center text-sm hover:underline">
                Saiba mais
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <div className="bg-muted rounded-xl p-6 border border-secondary/20">
              <h3 className="text-xl font-mono mb-2 text-white">Integração com GitHub</h3>
              <p className="text-gray-400 text-sm mb-4">
                Conecte facilmente com seus repositórios e sincronize seu código com apenas alguns cliques.
              </p>
              <a href="#" className="text-secondary flex items-center text-sm hover:underline">
                Saiba mais
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeFeature;
